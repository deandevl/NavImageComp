parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QzpV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={name:"NavImageComp",data:()=>({current_source:null,current_thumbnail_img:null,navImageComp_style:null,thumbnails_div_style:null,preview_img_style:null}),props:{heading:{type:String,default:null},sources:{type:Array,default:null},container_width:{type:Number,default:900},css_variables:{type:Object,default:()=>null}},computed:{computed_sources:function(){if(null!==this.sources){let t=0;for(let e=0;e<this.sources.length;e++)t+=180;return this.navImageComp_style=`width: ${this.container_width}px;`,this.thumbnails_div_style=`width: ${t}px;`,this.preview_img_style=`width: ${.9*this.container_width}px; height: ${.75*this.container_width}px`,this.sources}}},methods:{thumbnail_image_hover:function(t){this.current_source=t.currentTarget.currentSrc,null!==this.current_thumbnail_img&&(this.current_thumbnail_img.classList.remove("navImageComp_thumbnail__selected"),this.current_thumbnail_img.classList.add("navImageComp_thumbnail__notselected")),t.currentTarget.classList.remove("navImageComp_thumbnail__notselected"),t.currentTarget.classList.add("navImageComp_thumbnail__selected"),this.current_thumbnail_img=t.currentTarget,this.$emit("navimage_comp_current_source",this.current_source)}},mounted(){if(null!==this.css_variables)for(let t of Object.keys(this.css_variables))this.$el.style.setProperty(`--${t}`,this.css_variables[t])}};exports.default=t;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"navImageComp",style:e.navImageComp_style},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.heading,expression:"heading"}],staticClass:"navImageComp_headerBox"},[e._v(e._s(e.heading))]),e._v(" "),a("div",{staticClass:"navImageComp_thumbnailsPanel"},[a("div",{staticClass:"navImageComp_thumbnailsDiv",style:e.thumbnails_div_style},e._l(e.computed_sources,function(s,t){return a("img",{key:s,staticClass:"navImageComp_thumbnail__notselected",attrs:{src:s},on:{mouseover:function(s){return e.thumbnail_image_hover(s)}}})}),0)]),e._v(" "),a("div",{staticClass:"navImageComp_preview"},[a("img",{staticClass:"navImageComp_preview_img",style:e.preview_img_style,attrs:{src:e.current_source}})])])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{}],"6plK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("navimagecomp"));function a(e){return e&&e.__esModule?e:{default:e}}var g={name:"App",data:function(){return{sources:["images/1919Barn.jpg","images/1919Barn_2.jpg","images/Barn At Mespo Festival.jpg","images/barn_30.jpg","images/barn_31.jpg","images/barn_32.jpg","images/flowerbarn.jpg","images/flowerbarn2.jpg","images/H Frame Gabled Tobacco.jpg","images/H Frame Interior.jpg","images/HomePlaceonGreenRiver.jpg","images/HomePlaceonGreenRiver_2.jpg","images/HomePlaceonGreenRiver_3.jpg","images/HomePlaceonGreenRiver_4.jpg","images/IndianaRoundBarn.jpg","images/LeaningBarn.jpg","images/OhioBarn.jpg","images/penn_1.jpg","images/penn_2.jpg","images/penn_3.jpg","images/PrettyBarnIndiana.jpg","images/ThreeWhiteDoorsRusselvilleKY.jpg","images/Wisc_37.jpg","images/Wisc_38.jpg","images/Wisc_39.jpg"]}},methods:{show_current_source:function(e){console.log("Current Source: ".concat(e))}},components:{NavImageComp:e.default}};exports.default=g;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("nav-image-comp",{attrs:{heading:"Favorite Old Barns",sources:this.sources},on:{navimage_comp_current_source:this.show_current_source}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"navimagecomp":"QzpV"}],"vZyd":[function(require,module,exports) {
"use strict";var e=u(require("./App.vue"));function u(e){return e&&e.__esModule?e:{default:e}}new Vue({render:function(u){return u(e.default)}}).$mount("#app");
},{"./App.vue":"6plK"}]},{},["vZyd"], null)
//# sourceMappingURL=/app.89bc517b.js.map