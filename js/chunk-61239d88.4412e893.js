(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61239d88"],{"63b5":function(t,e,s){"use strict";s("7442")},"6e8a":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"singleText"}},[e("div",{staticClass:"text-intro"},[t._v(" This section will show you three types of sentiment:negative, neutral, positive. And the probability of being in the positive category and the negative category will also be given ")]),e("div",{staticClass:"text-input"},[e("el-input",{staticClass:"textarea",attrs:{type:"textarea",autosize:"",placeholder:"Please input here",autosize:{minRows:2,maxRows:4}},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),e("div",{staticClass:"progressCon"},[e("el-button",{staticClass:"confirm-button",attrs:{type:"primary",plain:"",size:"small"},on:{click:t.sendMessage}},[t._v(" Start! ")]),e("div",{staticStyle:{"margin-bottom":"16px","font-size":"14px","font-weight":"lighter"}},[t._v(" sentiment type："+t._s(t.sentiment)+" ")]),e("div",{staticClass:"progress-title"},[t._v("confidence:")]),e("el-progress",{attrs:{width:16,"stroke-linecap":"square",color:"#b1d0f1",percentage:t.confidence}}),e("div",{staticClass:"progress-title"},[t._v("positive_prob:")]),e("el-progress",{attrs:{width:16,"stroke-linecap":"square",color:"#b1d0f1",percentage:t.positive_prob}}),e("div",{staticClass:"progress-title"},[t._v("negative_prob:")]),e("el-progress",{attrs:{width:16,"stroke-linecap":"square",color:"#b1d0f1",percentage:t.negative_prob}})],1)],1)])},a=[],n=s("cee4"),r={data(){return{textarea:"",raws:10,token:"",sentiment:"NA",sentimentArr:["Negative","Neutral","Positive"],confidence:0,positive_prob:0,negative_prob:0}},created(){this.getToken()},methods:{async getToken(){try{const t="DiChTG01AUDydg4gUfb88f03",e="zdU2g9ZLAG9w2owWgwPEaGfGUrWHmB8j",s="/baiduAPI/oauth/2.0/token?grant_type=client_credentials&client_id="+t+"&client_secret="+e,{data:i}=await n["a"].post(s);this.token=i.access_token}catch(t){this.sendErr()}},sendErr(){this.$notify({title:"Error",message:"An error occured, please contact She Yuanhang",duration:0})},async sendMessage(){try{const t="/baiduAPI/rpc/2.0/nlp/v1/sentiment_classify?charset=UTF-8&access_token="+this.token,{data:{items:e}}=await n["a"].post(t,{text:this.textarea}),s=e[0];this.sentiment=this.sentimentArr[s.sentiment],this.confidence=parseInt((100*s.confidence).toFixed(1),10),this.positive_prob=parseInt((100*s.positive_prob).toFixed(1),10),this.negative_prob=parseInt((100*s.negative_prob).toFixed(1),10)}catch(t){this.sendErr()}}}},o=r,c=(s("63b5"),s("2877")),l=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=l.exports},7442:function(t,e,s){}}]);
//# sourceMappingURL=chunk-61239d88.4412e893.js.map