(function(e){function t(t){for(var i,a,c=t[0],s=t[1],l=t[2],f=0,h=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"36ee":function(e,t){e.exports=SimpleMDE},"38d9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,r=n("8bbf"),o=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{link:e.link},on:{share:e.share}}),n("Editor",{ref:"editor",on:{change:e.onChange}})],1)},c=[],s=(n("99af"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("9911"),n("ddb0"),n("2b3d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",[e._v("Markdown Pastebin")]),n("Share",{attrs:{id:"share",link:e.link},on:{share:e.share}})],1)}),l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"link",class:{hide:!e.link}},[n("i",{staticClass:"fa fa-link link-icon"}),n("a",{attrs:{href:e.link}},[e._v(e._s(this.link))])]),n("div",{staticClass:"share",class:{hide:e.link},on:{click:e.share}},[e._v("Share")])])},f=[],h={name:"Share",props:["link"],methods:{share:function(){this.$emit("share")}}},d=h,p=(n("8fbf"),n("2877")),v=Object(p["a"])(d,u,f,!1,null,"791cb93b",null),b=v.exports,g={name:"Header",props:["link"],components:{Share:b},methods:{share:function(){this.$emit("share")}}},m=g,w=(n("72be"),Object(p["a"])(m,s,l,!1,null,"214f6c3c",null)),k=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{attrs:{id:"editor"}})},_=[],x=n("36ee"),S=n.n(x),O={name:"Editor",data:function(){return{editor:i,config:{autofocus:!0,forceSync:!0,indentWithTabs:!1,lineWrapping:!1,parsingConfig:{allowAtxHeaderWithoutSpace:!0,strikethrough:!1,underscoresBreakWords:!0},placeholder:"Type here...",renderingConfig:{singleLineBreaks:!1,codeSyntaxHighlighting:!0},spellChecker:!0,styleSelectedText:!0,tabSize:4}}},methods:{activatePreviewMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e&&(this.editor.value(e),console.log(e,this.editor.value())),this.editor.isPreviewActive()||this.editor.togglePreview()},content:function(){return this.editor.value()}},mounted:function(){var e=this;i||(this.editor=new S.a(this.config),this.editor.codemirror.on("change",(function(){return e.$emit("change")})))}},j=O,C=(n("9f03"),Object(p["a"])(j,y,_,!1,null,"c1a20b18",null)),P=C.exports,$={name:"App",components:{Header:k,Editor:P},data:function(){return{link:"",fileId:new URLSearchParams(window.location.search).get("id")}},methods:{share:function(){var e=this,t=this.$refs.editor.content();t?this.uploadContentAsFile(t).then((function(t){e.link="".concat(window.location.origin,"/?id=").concat(t)})):alert("Can not share with empty content!")},showFile:function(e){var t=this;this.featchFile(e).then((function(n){t.$refs.editor.activatePreviewMode(n),t.link="".concat(window.location.origin,"/?id=").concat(e)}))},uploadContentAsFile:function(e){return this.$http.post("/api/upload",{content:e}).then((function(e){return e.body.fileId}))},featchFile:function(e){return this.$http.get("/api/file/".concat(e)).then((function(e){return e.body.content}),(function(e){return console.log(e),null}))},onChange:function(){this.link=""}},mounted:function(){this.fileId&&this.showFile(this.fileId)}},E=$,M=(n("034f"),Object(p["a"])(E,a,c,!1,null,null,null)),F=M.exports;new o.a({http:{root:"/root"},render:function(e){return e(F)}}).$mount("#app")},"599e":function(e,t,n){},"72be":function(e,t,n){"use strict";var i=n("599e"),r=n.n(i);r.a},"85ec":function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"8fbf":function(e,t,n){"use strict";var i=n("f0f9"),r=n.n(i);r.a},"9f03":function(e,t,n){"use strict";var i=n("38d9"),r=n.n(i);r.a},f0f9:function(e,t,n){}});
//# sourceMappingURL=app.6f1d0cdd.js.map