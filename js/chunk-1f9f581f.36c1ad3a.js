(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f9f581f"],{"467c":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"singleVideo"}},[t("div",{staticClass:"video-container"},[t("video",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"video",src:"https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/test.mp4",controls:"",crossorigin:"anonymous"}}),t("canvas",{attrs:{id:"overlay"}})]),t("div",{staticClass:"video-intro"},[e._v(" I will open source the code soon, wait for it! ")])])},i=[],n=a("ab39");let s=null;var l={data(){return{mediaStream:null,intervalFlag:null,loading:!0}},async mounted(){s=document.getElementById("video"),s.addEventListener("play",this.playEvent);let e="https://mypage-1304169477.cos.ap-shanghai.myqcloud.com/models/";await Promise.all([n["e"].tinyFaceDetector.loadFromUri(e),n["e"].faceRecognitionNet.loadFromUri(e),n["e"].faceExpressionNet.loadFromUri(e)]),this.loading=!1},beforeRouteLeave(e,t,a){document.getElementById("video").removeEventListener("play",this.playEvent),this.mediaStream&&this.mediaStream.stop(),this.intervalFlag=null,console.log("beforeDestroy",this.intervalFlag),a()},methods:{playEvent(){const e=new n["a"];this.intervalFlag=async()=>{try{const t=await Object(n["b"])(s,e).withFaceExpressions();if(t){const e=document.getElementById("overlay"),a=Object(n["d"])(e,s,!0),o=Object(n["f"])(t,a);n["c"].drawDetections(e,o),n["c"].drawFaceExpressions(e,o,.5)}this.intervalFlag()}catch(t){console.log(t)}},this.intervalFlag()}}},r=l,c=(a("98e1"),a("2877")),d=Object(c["a"])(r,o,i,!1,null,"e2586cac",null);t["default"]=d.exports},"4e75":function(e,t,a){},"98e1":function(e,t,a){"use strict";a("4e75")}}]);
//# sourceMappingURL=chunk-1f9f581f.36c1ad3a.js.map