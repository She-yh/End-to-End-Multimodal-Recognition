<template>
  <div id="singleVideo">
    <div class="video-container">
      <video v-loading="loading" id="video" src="https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/test.mp4" controls
        crossorigin="anonymous"></video>
      <canvas id="overlay" />
    </div>
    <div class="video-intro">
      I will open source the code soon, wait for it!
    </div>
  </div>
</template>

<script>
import { TinyFaceDetectorOptions, detectSingleFace, matchDimensions, resizeResults, draw, nets } from "face-api.js";
let video = null;
export default {
  data() {
    return {
      mediaStream: null,
      intervalFlag: null,
      loading: true,
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
    this.loading = false;
  },
  beforeRouteLeave(to, from, next) {
    document.getElementById('video').removeEventListener('play', this.playEvent);
    if (this.mediaStream) this.mediaStream.stop();
    this.intervalFlag = null;
    console.log("beforeDestroy", this.intervalFlag);
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
  }
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
