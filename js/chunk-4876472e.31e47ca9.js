(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4876472e"],{9339:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s._self._c;return t("div",{attrs:{id:"singleSound"}},[s._m(0),t("div",{staticClass:"sound-upload"},[t("div",{staticClass:"emotion-result"},[t("audio",{staticClass:"audioTag",attrs:{src:s.audioURL,controls:""}}),t("span",[s._v("识别结果:"+s._s(s.emotion))])]),t("el-upload",{staticClass:"upload-demo",attrs:{action:"multi/post_audio","on-success":s.uploadSuccess,"on-error":s.uploadError,multiple:""}},[t("el-button",{attrs:{size:"small",type:"primary",plain:""}},[s._v("Upload Audio")])],1)],1)])},a=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"sound-intro"},[s._v(" This system recognizes eight emotions: neutral, calm, happy, sad, angry, scared, disgusted and surprised."),t("br"),t("br"),s._v(" RAVDESS and TESS datasets were used. Extracting MFCC features of audio files is needed first, and then Keras is used to generate the model."),t("br"),t("br"),s._v(" The open sourced repo is "),t("a",{staticStyle:{color:"#409eff"},attrs:{href:"https://github.com/marcogdepinto/emotion-classification-from-audio-files"}},[s._v(" here")])])}],i={data(){return{emotion:"NA",emotion_class:10,emotion_classes:["中性","冷静","开心","伤心","生气","恐惧","恶心","惊讶"],audioURL:""}},watch:{emotion_class(s){console.log(s),this.emotion=s>=0&&s<=7?this.emotion_classes[s]:"识别错误"}},methods:{uploadSuccess(s,t){this.emotion=s.result,this.audioURL=URL.createObjectURL(t.raw),console.log(this.audioURL)},uploadError(){this.$notify({title:"Error",message:"This must be caused by lack of memory, because I don't have money to buy a better server :), please try again later.",duration:0})}}},r=i,n=(e("c62b"),e("2877")),u=Object(n["a"])(r,o,a,!1,null,null,null);t["default"]=u.exports},c62b:function(s,t,e){"use strict";e("dcae")},dcae:function(s,t,e){}}]);
//# sourceMappingURL=chunk-4876472e.31e47ca9.js.map