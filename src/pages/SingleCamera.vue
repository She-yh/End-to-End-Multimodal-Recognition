<template>
    <div id="singleVideo">
        <div class="video-container" v-loading="loading">
            <video id="video" crossorigin="anonymous"></video>
            <canvas id="overlay" />
        </div>
        <el-button @click="openCam" :disabled='disabled'>Camera</el-button>
    </div>
</template>
  
<script>
import { TinyFaceDetectorOptions, detectSingleFace, matchDimensions, resizeResults, draw, nets } from "face-api.js";
let video = null;
export default {
    data() {
        return {
            intervalFlag: null,
            loading: true,
            disabled: true,
        };
    },
    async mounted() {
        video = document.getElementById("video");
        video.addEventListener("play", this.playEvent);
        let path = "https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/models/";
        await Promise.all([
            nets.tinyFaceDetector.loadFromUri(path),
            nets.faceRecognitionNet.loadFromUri(path),
            nets.faceExpressionNet.loadFromUri(path),
        ]);
        this.disabled = false;
        this.loading = false;
    },
    beforeRouteLeave(to, from, next) {
        document.getElementById('video').srcObject.getTracks()[0].stop();
        document.getElementById('video').removeEventListener('play', this.playEvent);
        this.intervalFlag = null;
        next()
    },
    methods: {
        playEvent() {
            const options = new TinyFaceDetectorOptions();
            this.intervalFlag = async () => {
                try {
                    const result = await detectSingleFace(video, options)
                        .withFaceExpressions();
                    if (result) {
                        const canvas = document.getElementById("overlay");
                        const dims = matchDimensions(canvas, video, true);
                        const resizedResult = resizeResults(result, dims);
                        draw.drawDetections(canvas, resizedResult);
                        draw.drawFaceExpressions(canvas, resizedResult, 0.5);
                    }
                    this.intervalFlag();
                } catch (e) {
                    console.log(e);
                }
            };
            this.intervalFlag();
        },
        openCam() {
            if (navigator.mediaDevices === undefined) {
                navigator.mediaDevices = {};
            }
            if (navigator.mediaDevices.getUserMedia === undefined) {
                navigator.mediaDevices.getUserMedia = function (constraints) {   // 首先，如果有getUserMedia的话，就获得它
                    var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                    // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
                    if (!getUserMedia) {
                        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
                    }
                    // 否则，为老的navigator.getUserMedia方法包裹一个Promise
                    return new Promise(function (resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                }
            }
            const constraints = {
                video: {
                    width: 400,
                    height: 300
                },
                audio: false
            };
            let promise = navigator.mediaDevices.getUserMedia(constraints);
            promise.then(stream => {
                let v = document.getElementById('video');
                v.srcObject = stream;
                v.onloadedmetadata = function () {
                    v.play();
                };
            }).catch(err => {
                console.error(err.name + ": " + err.message);
            })
        },
    },
};
</script>
  
<style scoped>
#singleVideo {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#overlay {
    position: absolute;
    left: 0;
}

.video-container {
    position: relative;
    margin-bottom: 24px;
    box-shadow: 0 0 15px 5px rgba(50, 50, 50, 0.2);
}

.video-intro {
    width: 600px;
    font-size: 14px;
    font-weight: lighter;
}
</style>
  