!function(e){function t(t){for(var o,d,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)d=r[u],Object.prototype.hasOwnProperty.call(s,d)&&s[d]&&m.push(s[d][0]),s[d]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(a&&a(t);m.length;)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(o=!1)}o&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var o={},s={1:0},i=[];function d(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=o,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)d.d(n,o,function(t){return e[t]}.bind(null,o));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var a=c;i.push([2,2]),n()}([,,function(e,t,n){n(3),e.exports=n(4)},function(e,t,n){"use strict";n.r(t);n(5);const o=document.getElementById("searchInput"),s=document.getElementById("explanation"),i=document.getElementById("footer"),d=document.getElementById("word-content"),r=document.getElementById("phonetic-content"),c=document.getElementById("meaning-content"),l=document.getElementById("audio-content"),a=document.getElementById("dark-mode");new class{constructor(){this.wordData,this.synonymsHTML="",this.antonymsHTML="",this.definitionsHTML="",this.audio="",this.word=null,this._inputWord(),this._showExplanation()}_showExplanation(){o.value?(s.classList.remove("d-none"),i.classList.remove("d-none")):(s.classList.add("d-none"),i.classList.add("d-none"))}_inputWord(){window.addEventListener("DOMContentLoaded",()=>{o.addEventListener("keydown",e=>{"Enter"===e.key&&(e.preventDefault(),this.word=o.value,this._searchWord(this.word),this._showExplanation(),console.log(this.word))})})}_searchWord(e){fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+e).then(e=>e.json()).then(e=>{this.wordData=e}).catch(e=>{console.log("An error occurred:",e)}).then(()=>{this._setContent(this.wordData)}).then(()=>{this._setAudio(this.wordData)})}_setContent(e){c.innerHTML="",this.synonymsHTML="",this.antonymsHTML="",this.definitionsHTML="",console.log(e[0]),console.log("Word - "+e[0].word),d.textContent=e[0].word,console.log("Phonetic - "+e[0].phonetic),r.textContent=e[0].phonetic,e[0].meanings.forEach(e=>{console.log(e),this._setSynonyms(e),this._setAntonyms(e),this._setDefinitions(e);let t=`\n      <div class="row">\n      <div class="col-2">\n        <h2 class="fw-bold fst-italic">${e.partOfSpeech}</h2>\n      </div>\n      <div class="col-10">\n        <hr />\n      </div>\n    </div>\n    <div class="row py-4">\n      <div class="col-12">\n        <h3 class="text-info-emphasis fw-light">Meaning</h3>\n        <ul class="list-group px-5 py-3">\n            ${this.definitionsHTML}\n        </ul>\n      </div>\n    </div>\n    `+this.synonymsHTML+this.antonymsHTML;c.insertAdjacentHTML("beforeend",t)})}_setSynonyms(e){const t=e.synonyms.join(", ");this.synonymsHTML=""!=t?`\n        <div class="row py-4">\n          <div class="col-auto">\n            <h3 class="text-info-emphasis fw-light">Synonyms</h3>\n          </div>\n          <div class="col-auto">\n            <h3 class="text-primary fw-semibold">${t}</h3>\n          </div>\n        </div>\n        `:""}_setAntonyms(e){const t=e.antonyms.join(", ");this.antonymsHTML=""!=t?`\n        <div class="row py-4">\n          <div class="col-auto">\n            <h3 class="text-info-emphasis fw-light">Antonyms</h3>\n          </div>\n          <div class="col-auto">\n            <h3 class="text-primary fw-semibold">${t}</h3>\n          </div>\n        </div>\n        `:""}_setDefinitions(e){e.definitions.forEach(e=>{let t=`\n        <li>\n            <p class="text-white fw-light">\n            ${e.definition}\n            </p>\n        </li>`;this.definitionsHTML+=t})}_setAudio(e){e[0].phonetics.forEach(e=>{console.log(e.audio),""===e.audio?console.log("No audio"):(this.audioHTML=`<audio controls id='audioElement'>\n      <source\n        src="${e.audio}"\n      />\n      Your browser does not support the audio element.\n    </audio>`,l.innerHTML="",l.insertAdjacentHTML("beforeend",this.audioHTML))})}};document.getElementById("sans").addEventListener("click",(function(){document.documentElement.style.setProperty("--bs-font-sans-serif","Inter")})),document.getElementById("serif").addEventListener("click",(function(){document.documentElement.style.setProperty("--bs-font-sans-serif","Lora")})),document.getElementById("mono").addEventListener("click",(function(){document.documentElement.style.setProperty("--bs-font-sans-serif","Inconsolata")}));let u=0;a.addEventListener("click",(function(){0===u?(document.getElementById("dark-mode-circle").setAttribute("cx","30"),document.getElementById("dark-mode-circle").setAttribute("fill","#050505"),document.getElementById("dark-mode-circle").setAttribute("stroke","#a445ed"),document.getElementById("dark-mode-rect").setAttribute("fill","#a445ed"),document.getElementById("dark-mode-moon").setAttribute("fill","#a445ed"),document.getElementById("dark-mode-moon").setAttribute("stroke","#a445ed"),document.documentElement.style.setProperty("--bs-body-bg","#050505"),document.documentElement.style.setProperty("--bs-light","#1F1F1F"),document.documentElement.style.setProperty("--bs-heading-color","#FFF"),document.documentElement.style.setProperty("--bs-body-color","#FFF"),u=1):(document.getElementById("dark-mode-circle").setAttribute("cx","10"),document.getElementById("dark-mode-circle").setAttribute("fill","#FFFFFF"),document.getElementById("dark-mode-circle").setAttribute("stroke","#757575"),document.getElementById("dark-mode-rect").setAttribute("fill","#757575"),document.getElementById("dark-mode-moon").setAttribute("fill","#757575"),document.getElementById("dark-mode-moon").setAttribute("stroke","#757575"),document.documentElement.style.setProperty("--bs-body-bg","#FFFFFF"),document.documentElement.style.setProperty("--bs-light","#F4F4F4"),document.documentElement.style.setProperty("--bs-heading-color","#2D2D2D"),document.documentElement.style.setProperty("--bs-body-color","#2D2D2D"),u=0)}))},function(e,t,n){}]);