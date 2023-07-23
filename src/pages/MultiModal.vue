<template>
  <div id="multimodal">
    <div class="multi-intro">
      This page implements a multimodal network for emotion recognition from
      audio and video data<br />
      Click
      <a href="https://github.com/katerynaCh/multimodal-emotion-recognition">here</a>
      for more information!<br />
    </div>
    <div class="multi-upload">
      <div class="video-container">
        <video class="videoTag" :src="videoURL" controls></video>
      </div>
      <div class="multi-emotion-result">识别结果:{{ emotion }}</div>
      <div class="button-container">
        Due to the cost of server, I turn off the server daily. So, before you start use this function, you need to
        connect the Author to turn on the server. And click
        <el-button size="small" type="primary" plain @click="testConnection">test
          connection</el-button>
        . Then, you can
        <el-upload class="upload-demo" action="multiB/post_video" :on-success="uploadSuccess" :on-error="uploadError"
          multiple :disabled="disabled">
          <el-button size="small" type="primary" plain :disabled="disabled">Upload mp4</el-button>
        </el-upload>
        and start to test.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      emotion: "NA",
      emotion_class: 10,
      disabled: true,
      videoURL: "",
      emotion_classes: [
        "NEUTRAL",
        "CALM",
        "HAPPY",
        "SAD",
        "ANGRY",
        "FEAR",
        "DISGUSTED",
        "SURPRISED",
      ],
    };
  },
  watch: {
    emotion_class(newVal) {
      console.log(newVal);
      if (newVal >= 0 && newVal <= 7)
        this.emotion = this.emotion_classes[newVal];
      else this.emotion = "Error";
    },
  },
  methods: {
    uploadSuccess(response, file) {
      this.emotion = response.result;
      this.videoURL = URL.createObjectURL(file.raw);
      console.log(this.videoURL);
    },
    uploadError() {
      this.$notify({
        title: "Error",
        message:
          "This must be caused by lack of memory, because I don't have money to buy a better server :), please try again later.",
        duration: 0,
      });
    },
    connectSuc() {
      this.disabled = false;
    },
    connectError() {
      this.disabled = true;
      this.$notify({
        title: "Error",
        message: "connect error",
        duration: 0,
      });
    },
    testConnection() {
      axios
        .post("/multiB/test")
        .then((res) => {
          console.log(res);
          this.connectSuc();
        })
        .catch((err) => {
          console.log(err);
          this.connectError();
        });
    },
  },
};
</script>

<style scoped>
.multi-intro {
  width: 400px;
  font-size: 14px;
  font-weight: lighter;
  margin-right: 64px;
}

.upload-demo,
.el-button {
  display: inline !important
}

.multi-emotion-result {
  margin-bottom: 16px;
}

#multimodal {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.button-container {
  /* display: flex; */
  width: 450px;
}

.multi-upload {
  padding: 24px;
  box-shadow: 0 0 15px 5px rgba(50, 50, 50, 0.2);
  border-radius: 5px;
  font-size: 14px;
}

.videoTag {
  width: 450px;
}
</style>
