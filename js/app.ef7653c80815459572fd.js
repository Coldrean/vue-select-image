!function(e){function t(t){for(var n,s,r=t[0],o=t[1],c=t[2],u=0,_=[];u<r.length;u++)s=r[u],i[s]&&_.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);_.length;)_.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={0:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-select-image/";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=o;l.push([25,1]),a()}([,function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);t.default=i.a},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(31)),i=c(a(34)),l=c(a(35)),s=c(a(36)),r=c(a(37)),o=c(a(38));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"app",components:{VueSelectImage:n.default,SocialGithubIcon:i.default,IosEmailIcon:l.default,SocialFacebookIcon:s.default,SocialTwitterIcon:r.default,SocialLinkedinIcon:o.default},data:function(){return{title:"✅ Vue Select Image",subtitle:"Vue 2.x component for selecting image from list",imageSelected:{id:"",src:"",alt:""},imageMultipleSelected:[],dataImages:[{id:"1",src:"http://placekitten.com/200/200",alt:"jQuery"},{id:"2",src:"http://placekitten.com/200/200",alt:"Angular"},{id:"3",src:"http://placekitten.com/200/200",alt:"Vue.js"},{id:"4",src:"http://placekitten.com/200/200",alt:"React"}],initialSelected:[{id:"2",src:"http://placekitten.com/200/200",alt:"Angular"},{id:"3",src:"http://placekitten.com/200/200",alt:"Vue.js"}],templateSingle:'\n\x3c!-- SINGLE SELECTION --\x3e\n<vue-select-image :dataImages="dataImages"\n      @onselectimage="onSelectImage">\n</vue-select-image>\n      ',templateMultiple:'\n\x3c!-- MULTIPLE SELECTION --\x3e\n<vue-select-image :dataImages="dataImages"\n      :is-multiple="true"\n      :selectedImages="initialSelected"\n      @onselectmultipleimage="onSelectMultipleImage">\n</vue-select-image>\n      '}},methods:{onSelectImage:function(e){console.log("fire event onSelectImage: ",e),this.imageSelected=e},onSelectMultipleImage:function(e){console.log("fire event onSelectMultipleImage: ",e),this.imageMultipleSelected=e},onUnselectSingleImage:function(){this.$refs["single-select-image"].removeFromSingleSelected()}}}},function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);t.default=i.a},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-select-image",props:{dataImages:{type:Array,default:function(){return[]}},selectedImages:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},useLabel:{type:Boolean,default:!1},rootClass:{type:String,default:"vue-select-image"},activeClass:{type:String,default:"--selected"},h:{type:String,default:"auto"},w:{type:String,default:"auto"}},data:function(){return{singleSelected:{id:""},multipleSelected:[]}},computed:{dataImagesLocal:function(){return this.dataImages||[]}},created:function(){this.setInitialSelection()},methods:{classThumbnail:function(e,t){var a=this.rootClass+"__thumbnail";return e===t?a+" "+a+this.activeClass:""+a},classThumbnailMultiple:function(e){var t=this.rootClass+"__thumbnail",a=t+" is--multiple";return this.isExistInArray(e)?a+" "+t+this.activeClass:""+a},onSelectImage:function(e){this.singleSelected=Object.assign({},this.singleSelected,e),this.$emit("onselectimage",e)},isExistInArray:function(e){return this.multipleSelected.find(function(t){return e===t.id})},removeFromSingleSelected:function(){this.singleSelected={},this.$emit("onselectimage",{})},removeFromMultipleSelected:function(e,t){this.multipleSelected=this.multipleSelected.filter(function(t){return e!==t.id}),t||this.$emit("onselectmultipleimage",this.multipleSelected)},resetMultipleSelection:function(){this.multipleSelected=[]},onSelectMultipleImage:function(e){this.isExistInArray(e.id)?this.removeFromMultipleSelected(e.id,!0):this.multipleSelected.push(e),this.$emit("onselectmultipleimage",this.multipleSelected)},setInitialSelection:function(){this.selectedImages&&(this.isMultiple||1!==this.selectedImages.length?this.multipleSelected=[].concat(this.selectedImages):this.singleSelected=Object.assign({},this.selectedImages[0]))}}}},function(e,t,a){},,,,,,,,,,,function(e,t,a){var n=a(40);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a(223).default)("e39ca14c",n,!0,{})},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"VueSelectImage",attrs:{id:"app"}},[a("header",{staticClass:"site__header header",attrs:{role:"header"}},[a("div",{staticClass:"header__wrapper"},[a("div",{staticClass:"header__brand"},[e._m(0),e._v(" "),a("div",{staticClass:"header__title"},[e._v(e._s(e.title))])]),e._v(" "),a("div",{staticClass:"header__brand"},[a("a",{staticStyle:{"margin-right":"2em"},attrs:{href:"#docs"}},[e._v("\n            Docs\n          ")]),e._v(" "),a("a",{staticStyle:{"margin-right":"2em"},attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[a("SocialGithubIcon",{attrs:{w:"30px",h:"30px"}})],1)])])]),e._v(" "),a("div",{staticClass:"app"},[a("div",{staticClass:"grid__row centered",staticStyle:{"margin-bottom":"1em"}},[a("h1",{staticClass:"centered"},[e._v("\n          "+e._s(e.title)+"\n          "),a("small",[e._v(" "+e._s(e.subtitle)+" ")])])]),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Single Selection")]),e._v(" "),a("vue-select-image",{ref:"single-select-image",attrs:{dataImages:e.dataImages},on:{onselectimage:e.onSelectImage}}),e._v(" "),a("div",[a("h5",[e._v("Image Selected :\n            "),""!==e.imageSelected.id?a("span",[a("span",[e._v("id = "+e._s(e.imageSelected.id))])]):e._e()]),e._v(" "),a("button",{on:{click:e.onUnselectSingleImage}},[e._v("Reset Selection")])])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Multiple Selection")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,"is-multiple":!0,selectedImages:e.initialSelected},on:{onselectmultipleimage:e.onSelectMultipleImage}}),e._v(" "),a("div",[a("h5",[e._v("Mutiple Image Selected :\n            "),e._l(e.imageMultipleSelected,function(t,n){return a("span",{key:n},[a("span",[e._v("id = "+e._s(t.id)+", ")])])})],2)])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Use Label")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,useLabel:!0},on:{onselectimage:e.onSelectImage}})],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Custom Active State")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,activeClass:"--active"},on:{onselectimage:e.onSelectImage}})],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Custom Style")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,rootClass:"custom-style"},on:{onselectimage:e.onSelectImage}}),e._v(" "),a("br"),e._v(" "),a("i",{staticClass:"label-image"},[e._v("Image by http://placekitten.com")])],1)],1),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),a("div",{staticClass:"grid__row content centered",attrs:{id:"docs"}},[a("h2",[e._v("Download")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"bash"},[e._v("\n# NPM\nnpm install vue-select-image\n\n# Yarn\nyarn add vue-select-image\n        ")]),e._v("\n      ")])]),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("How to use")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"javascript"},[e._v("\nimport VueSelectImage from 'vue-select-image'\nVue.use(VueSelectImage)\n\n// add stylesheet\nrequire('vue-select-image/dist/vue-select-image.css')\n        ")]),e._v("\n      ")])]),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Template")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"html"},[e._v("\n          "+e._s(e.templateSingle)+"\n          "+e._s(e.templateMultiple)+"\n        ")]),e._v("\n      ")])]),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Contact Developer")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mazipan"}},[a("SocialGithubIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"mailto:mazipanneh@gmail.com"}},[a("IosEmailIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://facebook.com/mazipanneh"}},[a("SocialFacebookIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://twitter.com/Maz_Ipan"}},[a("SocialTwitterIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://id.linkedin.com/in/irfanmaulanamazipan"}},[a("SocialLinkedinIcon",{attrs:{w:"30px",h:"30px"}})],1)])]),e._v(" "),e._m(4)],1)},i=[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://mazipan.github.io/demo/"}},[t("img",{attrs:{src:"https://mazipan.github.io/images/irfan-maulana.jpg",alt:"Irfan Maulana",title:"Irfan Maulana"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Available Props")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v(":dataImages")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td",[e._v("Array of images that will be shown")])]),e._v(" "),a("tr",[a("td",[e._v(":selectedImages")]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td",[e._v("Array of initial selected images")])]),e._v(" "),a("tr",[a("td",[e._v(":isMultiple")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Flag to enable multiple selection")])]),e._v(" "),a("tr",[a("td",[e._v(":useLabel")]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Flag to enable showing alt as label")])]),e._v(" "),a("tr",[a("td",[e._v(":rootClass")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("vue-select-image")]),e._v(" "),a("td",[e._v("Class for root element of this component")])]),e._v(" "),a("tr",[a("td",[e._v(":activeClass")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("--selected")]),e._v(" "),a("td",[e._v("Class for active state, will concat with :rootClass")])]),e._v(" "),a("tr",[a("td",[e._v(":h")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("auto")]),e._v(" "),a("td",[e._v("Height of images, ex: '50px'")])]),e._v(" "),a("tr",[a("td",[e._v(":w")]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("auto")]),e._v(" "),a("td",[e._v("Width of images, ex: '50px'")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Available Events")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Events Attr")]),e._v(" "),a("th",[e._v("Return")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("@onselectimage")]),e._v(" "),a("td",[e._v("Object image selected")])]),e._v(" "),a("tr",[a("td",[e._v("@onselectmultipleimage")]),e._v(" "),a("td",[e._v("Array of object image has been selected")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Contribute")]),e._v(" "),a("p",[e._v("Feel free to fork "),a("i",{staticClass:"fa fa-code-fork"}),e._v(" on "),a("a",{attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[e._v("GitHub "),a("i",{staticClass:"fa fa-github"})]),e._v(" if you have any features "),a("i",{staticClass:"fa fa-cart-plus"}),e._v(" or bugs "),a("i",{staticClass:"fa fa-bug"}),e._v("!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grid__row content centered"},[t("p",[this._v("Copyright © 2017 "),t("a",{attrs:{href:"https://mazipanneh.com/blog/"}},[this._v("Irfan Maulana")]),this._v(", All Rights Reserved.")])])}];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.rootClass},[a("ul",{class:e.rootClass+"__wrapper"},e._l(e.dataImagesLocal,function(t,n){return a("li",{key:n,class:e.rootClass+"__item"},[e.isMultiple?e._e():a("div",{class:e.classThumbnail(e.singleSelected.id,t.id),on:{click:function(a){e.onSelectImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}}),e._v(" "),e.useLabel?a("label",{class:e.rootClass+"__lbl"},[e._v("\n              "+e._s(t.alt)+"\n        ")]):e._e()]),e._v(" "),e.isMultiple?a("div",{class:e.classThumbnailMultiple(t.id),on:{click:function(a){e.onSelectMultipleImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}}),e._v(" "),e.useLabel?a("label",{class:e.rootClass+"__lbl"},[e._v("\n              "+e._s(t.alt)+"\n        ")]):e._e()]):e._e()])}))])},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},,,,,,,function(e,t,a){"use strict";var n=r(a(26)),i=r(a(30)),l=r(a(42)),s=r(a(43));function r(e){return e&&e.__esModule?e:{default:e}}n.default.use(a(222)),n.default.use(l.default.Adsense),n.default.use(l.default.InArticleAdsense),n.default.use(l.default.InFeedAdsense),n.default.use(s.default),new n.default({el:"#app",template:"<App/>",components:{App:i.default}})},,,,,function(e,t,a){"use strict";a.r(t);var n=a(17),i=a(1);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);a(39);var s=a(0),r=Object(s.a)(i.default,n.a,n.b,!1,null,null,null);r.options.__file="App.vue",t.default=r.exports},function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(3);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);a(32);var s=a(0),r=Object(s.a)(i.default,n.a,n.b,!1,null,null,null);r.options.__file="VueSelectImage.vue",t.default=r.exports},function(e,t,a){"use strict";var n=a(5);a.n(n).a},,,,,,,function(e,t,a){"use strict";var n=a(16);a.n(n).a},function(e,t,a){(e.exports=a(41)(!1)).push([e.i,'\n@charset "UTF-8";\n.ion {\n  display: inline-flex;\n}\n.ion__svg {\n    fill: currentColor;\n}\n#app {\n  font-family: "Avenir", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsmall {\n  display: block;\n  color: #ddd;\n  font-size: 16px;\n}\n.grid__row {\n  *zoom: 1;\n  margin: 0 auto;\n  max-width: 92.308em;\n}\n.grid__row:before,\n.grid__row:after {\n  display: table;\n  content: " ";\n}\n.grid__row:after {\n  clear: both;\n}\n.centered {\n  text-align: center;\n}\n.content {\n  margin: 0 20px;\n}\n.ion:hover {\n  color: #4f8ef7;\n}\n.label-image {\n  font-size: .7rem;\n}\n.vue-select-image {\n  display: flex;\n  justify-content: center;\n}\npre,\ncode {\n  text-align: left;\n  max-width: 500px;\n  margin: auto;\n}\ntable {\n  overflow: auto;\n  margin: auto;\n  margin-top: 0;\n  margin-bottom: 16px;\n  border-spacing: 0;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 1.2rem;\n}\ntable thead tr {\n    background-color: #f6f8fa;\n}\ntable tr {\n    background-color: #fff;\n    border-top: 1px solid #c6cbd1;\n}\ntable th, table td {\n    padding: 6px 13px;\n    border: 1px solid #dfe2e5;\n}\n.VueSelectImage /deep/ .vue-select-image__thumbnail--active {\n  background: #50af2b;\n}\n.VueSelectImage /deep/ .vue-select-image__thumbnail--active:after {\n    content: \'\\2705\';\n    position: absolute;\n    color: #50af2b;\n    margin-top: -190px;\n    margin-left: 70px;\n    font-size: 20px;\n    border-radius: 3px;\n}\n.custom-style {\n  display: flex;\n  justify-content: center;\n}\n.custom-style__wrapper {\n    overflow: auto;\n    list-style-image: none;\n    list-style-position: outside;\n    list-style-type: none;\n    padding: 0px;\n    margin: 0px;\n}\n.custom-style__item {\n    margin: 0px 12px 12px 0px;\n    float: left;\n}\n@media only screen and (min-width: 1200px) {\n.custom-style__item {\n        margin-left: 30px;\n}\n}\n.custom-style__thumbnail {\n    padding: 6px;\n    border: 1px solid #dddddd;\n    display: block;\n    padding: 4px;\n    line-height: 20px;\n    border: 1px solid #ddd;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);\n    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);\n    -webkit-transition: all 0.2s ease-in-out;\n    -moz-transition: all 0.2s ease-in-out;\n    -o-transition: all 0.2s ease-in-out;\n    transition: all 0.2s ease-in-out;\n}\n.custom-style__thumbnail--selected {\n      background: #0088cc;\n}\n.custom-style__thumbnail--selected .custom-style__img {\n        zoom: 1.1;\n}\n.custom-style__img {\n    -webkit-user-drag: none;\n    display: block;\n    max-width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    border-radius: 50%;\n}\n',""])}]);