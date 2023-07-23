<template>
  <div id="singleSound">
    <div class="sound-intro">
      This system recognizes eight emotions: neutral, calm, happy, sad, angry,
      scared, disgusted and surprised.<br /><br />
      RAVDESS and TESS datasets were used. Extracting MFCC features of audio
      files is needed first, and then Keras is used to generate the model.<br /><br />
      The open sourced repo is
      <a href="https://github.com/marcogdepinto/emotion-classification-from-audio-files" style="color: #409eff">
        here</a>
    </div>
    <div class="sound-upload">
      <div class="emotion-result">
        <audio class="audioTag" :src="audioURL" controls></audio>
        <span>识别结果:{{ emotion }}</span>
      </div>
      <el-upload class="upload-demo" action="multi/post_audio" :on-success="uploadSuccess" :on-error="uploadError"
        multiple>
        <el-button size="small" type="primary" plain>Upload Audio</el-button>
      </el-upload>
      <!-- <el-upload
        class="upload-demo"
        action="multi/test"
        :on-success="uploadSuccess"
        multiple
      >
        <el-button size="small" type="primary" plain>点击测试</el-button>
      </el-upload> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emotion: "NA",
      emotion_class: 10,
      emotion_classes: [
        '中性', '冷静', '开心', '伤心', '生气', '恐惧', '恶心', '惊讶'
      ],
      audioURL: "",
    };
  },
  watch: {
    emotion_class(newVal) {
      console.log(newVal);
      if (newVal >= 0 && newVal <= 7)
        this.emotion = this.emotion_classes[newVal];
      else this.emotion = "识别错误";
    },
  },
  methods: {
    uploadSuccess(response, file) {
      this.emotion = response.result;
      this.audioURL = URL.createObjectURL(file.raw);
      console.log(this.audioURL);
    },
    uploadError() {
      this.$notify({
        title: "Error",
        message:
          "This must be caused by lack of memory, because I don't have money to buy a better server :), please try again later.",
        duration: 0,
      });
    },
  },
};
</script>

<style>
.sound-intro {
  width: 400px;
  font-size: 14px;
  font-weight: lighter;
  margin-right: 64px;
}

.emotion-result {
  padding: 16px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  box-shadow: 0 0 10px 3px rgba(50, 50, 50, 0.2);
}

.audioTag {
  margin-bottom: 16px;
}

#singleSound {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
