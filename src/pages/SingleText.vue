<!-- eslint-disable vue/no-duplicate-attributes -->
<template>
  <div id="singleText">
    <div class="text-intro">
      This section will show you three types of sentiment:negative, neutral,
      positive. And the probability of being in the positive category and the
      negative category will also be given
    </div>
    <div class="text-input">
      <el-input
        type="textarea"
        autosize
        placeholder="Please input here"
        v-model="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        class="textarea"
      ></el-input>
      <div class="progressCon">
        <el-button
          class="confirm-button"
          type="primary"
          plain
          size="small"
          @click="sendMessage"
        >
          Start!
        </el-button>
        <div style="margin-bottom: 16px; font-size: 14px; font-weight: lighter">
          sentiment type：{{ sentiment }}
        </div>
        <div class="progress-title">confidence:</div>
        <el-progress
          :width="16"
          stroke-linecap="square"
          color="#b1d0f1"
          :percentage="confidence"
        ></el-progress>
        <div class="progress-title">positive_prob:</div>
        <el-progress
          :width="16"
          stroke-linecap="square"
          color="#b1d0f1"
          :percentage="positive_prob"
        ></el-progress>
        <div class="progress-title">negative_prob:</div>
        <el-progress
          :width="16"
          stroke-linecap="square"
          color="#b1d0f1"
          :percentage="negative_prob"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      textarea: "",
      raws: 10,
      token: "",
      sentiment: "NA",
      sentimentArr: ["Negative", "Neutral", "Positive"],
      confidence: 0,
      positive_prob: 0,
      negative_prob: 0,
    };
  },
  created() {
    this.getToken();
  },
  methods: {
    async getToken() {
      try {
        const apikey = "DiChTG01AUDydg4gUfb88f03";
        const secretKey = "zdU2g9ZLAG9w2owWgwPEaGfGUrWHmB8j";
        const url =
          "/baiduAPI/oauth/2.0/token?grant_type=client_credentials&client_id=" +
          apikey +
          "&client_secret=" +
          secretKey;
        const { data: tokenData } = await axios.post(url);
        this.token = tokenData.access_token;
      } catch (err) {
        this.sendErr();
      }
      // token: 24.1361a4ec2ca979f1156406197462a681.2592000.1673780379.282335-29100100
      // https://aip.baidubce.com/rpc/2.0/nlp/v1/sentiment_classify?charset=UTF-8&access_token=24.81bfc37806183828a97a5f3cfdc5bae5.2592000.1673780773.282335-29100100
    },
    sendErr() {
      this.$notify({
        title: "Error",
        message: "An error occured, please contact She Yuanhang",
        duration: 0,
      });
    },
    async sendMessage() {
      try {
        const url =
          "/baiduAPI/rpc/2.0/nlp/v1/sentiment_classify?charset=UTF-8&access_token=" +
          this.token;
        const {
          data: { items: items },
        } = await axios.post(url, {
          text: this.textarea,
        });
        const emotions = items[0];
        this.sentiment = this.sentimentArr[emotions.sentiment];
        this.confidence = parseInt((emotions.confidence * 100).toFixed(1), 10);
        this.positive_prob = parseInt(
          (emotions.positive_prob * 100).toFixed(1),
          10
        );
        this.negative_prob = parseInt(
          (emotions.negative_prob * 100).toFixed(1),
          10
        );
      } catch (err) {
        this.sendErr();
      }
    },
  },
};
</script>

<style>
.text-intro {
  width: 400px;
  font-size: 14px;
  font-weight: lighter;
  margin-right: 64px;
}
#singleText {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.confirm-button {
  margin-bottom: 16px;
}
.text-input {
  box-shadow: 0 0 15px 5px rgba(50, 50, 50, 0.2);
  padding: 24px;
  border-radius: 10px;
  width: 360px;
  transition: all 0.2s;
}
.progressCon {
  margin-top: 16px;
}
.progress-title {
  font-size: 14px;
  font-weight: lighter;
}
.text-input:hover {
  box-shadow: 0 0 20px 5px rgba(50, 50, 50, 0.15);
}
</style>
