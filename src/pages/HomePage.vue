<template>
  <div id="homePage">
    <div class="home-left-title">
      <span style="font-size: 32px"> Emotion Recognition WEB system </span><br />
      <span style="font-size: 20px"> Single modal & Multi-Modal</span>
    </div>
    <div class="home-content-container">
      <div class="home-left">
        <div class="home-left-context">
          With the rapid development of artificial intelligence, there is a
          growing need for machines to understand human's emotion. Nowadays,
          people have made some research achievements in single modal emotion
          recognition such as text, speech and expression.
          <br /><br />
          The development of single-modal emotion recognition that led people to
          realize that human emotion expression is too complex, When the same
          thing is said in a different tone or expression, it may mean the
          opposite of what the words mean.
          <br /><br />
          The research on multimodal emotion recognition is more like the
          pattern of human judging others' emotions and has more application
          value. Traditional multimodal emotion recognition research focuses on
          improving the accuracy of recognition on already processed data sets.
          This system will extract the features of each modal from the raw video
          after processing and then make emotion judgment. At the same time it
          provides three kinds of single modal recognition entrance for
          comparison.
        </div>
      </div>
      <div class="home-right">
        <div class="home-right-link">
          <router-link to="/singleSound"> Audio</router-link>
          <router-link to="/singleVideo"> V-Video</router-link>
          <router-link to="/singleCamera"> V-Camera</router-link>
          <router-link to="/singleText"> Text </router-link>
          <router-link to="/multiModal"> Multi-Modal </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style>
#homePage {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Microsoft Yahei Light", "Microsoft Yahei Light",
    "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
}

.home-left {
  font-family: "Times New Roman";
  margin-right: 64px;
  /* white-space: pre; */
}

.home-left-title {
  margin-bottom: 48px;
}

.home-left-context {
  font-family: "Microsoft Yahei Light", "Microsoft Yahei Light",
    "Helvetica Neue", Helvetica, "Segoe UI", Arial, sans-serif;
  font-size: 14px;
  width: 420px;
}

.home-right {
  width: 112px;
}

.home-right-link {
  height: 320px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: space-around;
}

.home-content-container {
  display: flex;
}

.home-right-link>a {
  height: 36px;
  line-height: 36px;
  border-radius: 8px;
  box-shadow: 0 0 14px 4px rgba(57, 57, 57, 0.14);
  text-align: center;
  color: rgb(95, 170, 236) !important;
}
</style>
