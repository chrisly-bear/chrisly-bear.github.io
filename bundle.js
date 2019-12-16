var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function d(e,t){e.appendChild(t)}function s(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function c(e){return document.createTextNode(e)}function u(){return c(" ")}function m(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function k(e,t){t=""+t,e.data!==t&&(e.data=t)}let g;function f(e){g=e}const h=[],v=Promise.resolve();let w=!1;const M=[],b=[],$=[];function y(e){b.push(e)}function x(){const e=new Set;do{for(;h.length;){const e=h.shift();f(e),_(e.$$)}for(;M.length;)M.pop()();for(;b.length;){const t=b.pop();e.has(t)||(t(),e.add(t))}}while(h.length);for(;$.length;)$.pop()();w=!1}function _(e){e.fragment&&(e.update(e.dirty),r(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(y))}const B=new Set;let I;function C(e,t){e&&e.i&&(B.delete(e),e.i(t))}function E(e,t,n){if(e&&e.o){if(B.has(e))return;B.add(e),I.callbacks.push(()=>{B.delete(e),n&&(e.d(1),n())}),e.o(t)}}const z="undefined"!=typeof window?window:global;function A(e,n,a){const{fragment:d,on_mount:s,on_destroy:i,after_render:l}=e.$$;d.m(n,a),y(()=>{const n=s.map(t).filter(o);i?i.push(...n):r(n),e.$$.on_mount=[]}),l.forEach(y)}function P(e,t){e.$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function L(e,t){e.$$.dirty||(h.push(e),w||(w=!0,v.then(x)),e.$$.dirty=n()),e.$$.dirty[t]=!0}function O(t,o,a,d,s,i){const l=g;f(t);const c=o.props||{},u=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:null};let m=!1;var p;u.ctx=a?a(t,c,(e,n)=>{u.ctx&&s(u.ctx[e],u.ctx[e]=n)&&(u.bound[e]&&u.bound[e](n),m&&L(t,e))}):c,u.update(),m=!0,r(u.before_render),u.fragment=d(u.ctx),o.target&&(o.hydrate?u.fragment.l((p=o.target,Array.from(p.childNodes))):u.fragment.c(),o.intro&&C(t.$$.fragment),A(t,o.target,o.anchor),x()),f(l)}class W{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function H(t){var n,r,o,a;return{c(){n=l("span"),r=c(T),o=l("span"),a=c(q),p(n,"class","first"),p(o,"class","last svelte-ut2rbr")},m(e,t){s(e,n,t),d(n,r),s(e,o,t),d(o,a)},p:e,d(e){e&&(i(n),i(o))}}}function D(t){var n,r,o,a,u;return{c(){n=l("span"),r=c(T),o=l("br"),a=l("span"),u=c(q),p(n,"class","first"),p(a,"class","last svelte-ut2rbr")},m(e,t){s(e,n,t),d(n,r),s(e,o,t),s(e,a,t),d(a,u)},p:e,d(e){e&&(i(n),i(o),i(a))}}}function S(t){var n,o,a,k,g,f,h,v,w,M,b,$,y,x,_,B;function I(e){return e.narrow?D:H}var C=I(t),E=C(t);return{c(){n=l("div"),o=l("div"),E.c(),a=u(),k=l("div"),g=l("div"),f=l("img"),h=c(" projects"),v=u(),w=l("div"),(M=l("a")).textContent="PEBRApp",b=u(),($=l("a")).textContent="Sunrise Usage",y=u(),(x=l("a")).textContent="Time Machine Progress",p(o,"class","logo"),p(f,"class","dropdownArrow unpressed svelte-ut2rbr"),p(f,"src",t.dropdownArrowIcon),p(f,"alt","arrow"),p(g,"class","dropdownButton svelte-ut2rbr"),p(M,"href","https://github.com/chrisly-bear/PEBRApp"),p(M,"target","_blank"),p(M,"rel","noopener"),p(M,"class","svelte-ut2rbr"),p($,"href","sunrise-usage"),p($,"target","_blank"),p($,"class","svelte-ut2rbr"),p(x,"href","https://github.com/chrisly-bear/time-machine-progress"),p(x,"target","_blank"),p(x,"rel","noopener"),p(x,"class","svelte-ut2rbr"),p(w,"class",_="dropdownContent hidden "+(t.darkMode?"dark":"")+" svelte-ut2rbr"),p(k,"class","dropdown svelte-ut2rbr"),p(n,"class","container svelte-ut2rbr"),B=[m(g,"click",N),m(g,"mouseover",t.onDropdownMouseOver),m(g,"mouseout",t.onDropdownMouseOut)]},m(e,t){s(e,n,t),d(n,o),E.m(o,null),d(n,a),d(n,k),d(k,g),d(g,f),d(g,h),d(k,v),d(k,w),d(w,M),d(w,b),d(w,$),d(w,y),d(w,x)},p(e,t){C===(C=I(t))&&E?E.p(e,t):(E.d(1),(E=C(t))&&(E.c(),E.m(o,null))),e.dropdownArrowIcon&&p(f,"src",t.dropdownArrowIcon),e.darkMode&&_!==(_="dropdownContent hidden "+(t.darkMode?"dark":"")+" svelte-ut2rbr")&&p(w,"class",_)},i:e,o:e,d(e){e&&i(n),E.d(),r(B)}}}const T="christoph",q="schwizer";function N(){let e=document.getElementsByClassName("dropdownContent");for(let t=0;t<e.length;t++)e[t].classList.toggle("hidden");let t=document.getElementsByClassName("dropdownArrow");for(let e=0;e<t.length;e++)t[e].classList.toggle("unpressed")}function j(e,t,n){let{darkMode:r,narrow:o=!1}=t,a=r?"down-outline_dark.png":"down-outline.png";return e.$set=(e=>{"darkMode"in e&&n("darkMode",r=e.darkMode),"narrow"in e&&n("narrow",o=e.narrow)}),{darkMode:r,narrow:o,dropdownArrowIcon:a,onDropdownMouseOver:function(){n("dropdownArrowIcon",a=r?"down-filled_dark.png":"down-filled.png")},onDropdownMouseOut:function(){n("dropdownArrowIcon",a=r?"down-outline_dark.png":"down-outline.png")}}}class R extends W{constructor(e){super(),O(this,e,j,S,a,["darkMode","narrow"])}}function F(t){var n,r,o,a,m,k,g,f,h,v,w,M,b,$,y,x,_,B,I,C,E,z,A,P,L,O;return{c(){n=l("div"),r=l("img"),o=u(),a=l("div"),m=l("p"),k=c("Hi, my name is Chris and I am a full stack software engineer with a focus on mobile app development. Big fan of "),(g=l("a")).textContent="Flutter",f=c(", the "),(h=l("a")).textContent="Open Source Movement",v=c(", and – as you can tell from the picture – apples."),M=u(),b=l("div"),$=l("a"),y=l("img"),_=c("\n\t\t\t\tget in touch"),I=u(),C=l("div"),E=u(),z=l("a"),A=l("img"),L=c("\n\t\t\t\tget my code"),p(r,"class","portrait svelte-k95n3x"),p(r,"src",U),p(r,"alt","portrait image"),p(g,"target","_blank"),p(g,"rel","noopener"),p(g,"href","https://flutter.dev"),p(g,"class","svelte-k95n3x"),p(h,"target","_blank"),p(h,"rel","noopener"),p(h,"href","https://en.wikipedia.org/wiki/Open-source-software_movement"),p(h,"class","svelte-k95n3x"),p(m,"class",w="introduction "+(t.darkMode?"dark":"")+" svelte-k95n3x"),p(y,"class","buttonIconMail svelte-k95n3x"),p(y,"src",x=t.darkMode?"mail_dark.png":"mail.png"),p(y,"alt","mail icon"),p($,"class",B="button emailButton "+(t.darkMode?"dark":"")+" svelte-k95n3x"),p($,"href","mailto:christoph@schwizer.dev"),p(C,"class","buttonMargin svelte-k95n3x"),p(A,"class","buttonIcon svelte-k95n3x"),p(A,"src",P=t.darkMode?"github-logo_dark.png":"github-logo.png"),p(A,"alt","github logo"),p(z,"class",O="button githubButton "+(t.darkMode?"dark":"")+" svelte-k95n3x"),p(z,"href","https://github.com/chrisly-bear"),p(z,"target","_blank"),p(z,"rel","noopener"),p(b,"class","buttons svelte-k95n3x"),p(a,"class","introductionAndButtons svelte-k95n3x"),p(n,"class","content svelte-k95n3x")},m(e,t){s(e,n,t),d(n,r),d(n,o),d(n,a),d(a,m),d(m,k),d(m,g),d(m,f),d(m,h),d(m,v),d(a,M),d(a,b),d(b,$),d($,y),d($,_),d(b,I),d(b,C),d(b,E),d(b,z),d(z,A),d(z,L)},p(e,t){e.darkMode&&w!==(w="introduction "+(t.darkMode?"dark":"")+" svelte-k95n3x")&&p(m,"class",w),e.darkMode&&x!==(x=t.darkMode?"mail_dark.png":"mail.png")&&p(y,"src",x),e.darkMode&&B!==(B="button emailButton "+(t.darkMode?"dark":"")+" svelte-k95n3x")&&p($,"class",B),e.darkMode&&P!==(P=t.darkMode?"github-logo_dark.png":"github-logo.png")&&p(A,"src",P),e.darkMode&&O!==(O="button githubButton "+(t.darkMode?"dark":"")+" svelte-k95n3x")&&p(z,"class",O)},i:e,o:e,d(e){e&&i(n)}}}const U="portrait.jpg";function G(e,t,n){let{darkMode:r}=t;return e.$set=(e=>{"darkMode"in e&&n("darkMode",r=e.darkMode)}),{darkMode:r}}class J extends W{constructor(e){super(),O(this,e,G,F,a,["darkMode"])}}function K(t){var n,r,o,a,m,k,g,f,h,v,w,M,b,$,y,x,_,B,I,C,E,z,A,P,L,O,W,H;return{c(){n=l("div"),r=l("img"),o=u(),a=l("div"),m=l("p"),k=c("Hi, my name is Chris and I am a full stack software engineer with a focus on mobile app development. Big fan of "),(g=l("a")).textContent="Flutter",f=c(", the "),(h=l("a")).textContent="Open Source Movement",v=c(", and – as you can tell from the picture – apples."),M=u(),b=l("div"),$=l("a"),y=l("img"),_=c("\n\t\t\t\tget in touch"),I=u(),C=l("div"),E=u(),z=l("a"),A=l("img"),L=c("\n\t\t\t\tget my code"),W=u(),H=l("div"),p(r,"class","portrait svelte-mf8733"),p(r,"src",Q),p(r,"alt","portrait image"),p(g,"target","_blank"),p(g,"rel","noopener"),p(g,"href","https://flutter.dev"),p(g,"class","svelte-mf8733"),p(h,"target","_blank"),p(h,"rel","noopener"),p(h,"href","https://en.wikipedia.org/wiki/Open-source-software_movement"),p(h,"class","svelte-mf8733"),p(m,"class",w="introduction "+(t.darkMode?"dark":"")+" svelte-mf8733"),p(y,"class","buttonIconMail svelte-mf8733"),p(y,"src",x=t.darkMode?"mail_dark.png":"mail.png"),p(y,"alt","mail icon"),p($,"class",B="button emailButton "+(t.darkMode?"dark":"")+" svelte-mf8733"),p($,"href","mailto:christoph@schwizer.dev"),p(C,"class","buttonMargin svelte-mf8733"),p(A,"class","buttonIcon svelte-mf8733"),p(A,"src",P=t.darkMode?"github-logo_dark.png":"github-logo.png"),p(A,"alt","github logo"),p(z,"class",O="button githubButton "+(t.darkMode?"dark":"")+" svelte-mf8733"),p(z,"href","https://github.com/chrisly-bear"),p(z,"target","_blank"),p(z,"rel","noopener"),p(H,"class","buttonMargin svelte-mf8733"),p(b,"class","buttons svelte-mf8733"),p(a,"class","introductionAndButtons svelte-mf8733"),p(n,"class","content svelte-mf8733")},m(e,t){s(e,n,t),d(n,r),d(n,o),d(n,a),d(a,m),d(m,k),d(m,g),d(m,f),d(m,h),d(m,v),d(a,M),d(a,b),d(b,$),d($,y),d($,_),d(b,I),d(b,C),d(b,E),d(b,z),d(z,A),d(z,L),d(b,W),d(b,H)},p(e,t){e.darkMode&&w!==(w="introduction "+(t.darkMode?"dark":"")+" svelte-mf8733")&&p(m,"class",w),e.darkMode&&x!==(x=t.darkMode?"mail_dark.png":"mail.png")&&p(y,"src",x),e.darkMode&&B!==(B="button emailButton "+(t.darkMode?"dark":"")+" svelte-mf8733")&&p($,"class",B),e.darkMode&&P!==(P=t.darkMode?"github-logo_dark.png":"github-logo.png")&&p(A,"src",P),e.darkMode&&O!==(O="button githubButton "+(t.darkMode?"dark":"")+" svelte-mf8733")&&p(z,"class",O)},i:e,o:e,d(e){e&&i(n)}}}const Q="portrait.jpg";function V(e,t,n){let{darkMode:r}=t;return e.$set=(e=>{"darkMode"in e&&n("darkMode",r=e.darkMode)}),{darkMode:r}}class X extends W{constructor(e){super(),O(this,e,V,K,a,["darkMode"])}}const{window:Y}=z;function Z(e){var t,n=new X({props:{darkMode:e.darkMode}});return{c(){n.$$.fragment.c()},m(e,r){A(n,e,r),t=!0},p(e,t){var r={};e.darkMode&&(r.darkMode=t.darkMode),n.$set(r)},i(e){t||(C(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function ee(e){var t,n=new J({props:{darkMode:e.darkMode}});return{c(){n.$$.fragment.c()},m(e,r){A(n,e,r),t=!0},p(e,t){var r={};e.darkMode&&(r.darkMode=t.darkMode),n.$set(r)},i(e){t||(C(n.$$.fragment,e),t=!0)},o(e){E(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function te(e){var t,n,r,o,a,m,g,f,h,v,w,M,b,$=e.winWidth>710?"desktop":"mobile";return{c(){t=l("div"),n=l("div"),r=c(e.winWidth),o=c("x"),a=c(e.winHeight),m=u(),g=l("div"),f=u(),h=l("div"),v=u(),w=l("div"),M=u(),b=c($),p(n,"class","box svelte-1185mdq"),p(t,"id","overlay"),p(t,"class","svelte-1185mdq")},m(e,i){s(e,t,i),d(t,n),d(n,r),d(n,o),d(n,a),d(n,m),d(n,g),d(n,f),d(n,h),d(n,v),d(n,w),d(n,M),d(n,b)},p(e,t){e.winWidth&&k(r,t.winWidth),e.winHeight&&k(a,t.winHeight),e.winWidth&&$!==($=t.winWidth>710?"desktop":"mobile")&&k(b,$)},d(e){e&&i(t)}}}function ne(e){var t,n,o,a,k,g,f,h,v,w,M,b,$,x,_;y(e.onwindowresize);var B=new R({props:{darkMode:e.darkMode,narrow:e.winWidth<=710}}),z=[ee,Z],L=[];function O(e){return e.winWidth>710?0:1}g=O(e),f=L[g]=z[g](e);var W="unknown"==e.mobileOperatingSystem&&e.resizeInProgress&&te(e);return{c(){t=l("link"),n=u(),o=l("div"),a=l("div"),B.$$.fragment.c(),k=u(),f.c(),h=u(),v=l("div"),b=u(),W&&W.c(),$=c(""),p(t,"href","https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"),p(t,"rel","stylesheet"),p(a,"class",w="container "+(e.darkMode?"dark":"")+" svelte-1185mdq"),p(o,"class",M="outer "+(e.darkMode?"dark":"")+" svelte-1185mdq"),_=m(Y,"resize",e.onwindowresize)},m(e,r){s(e,t,r),s(e,n,r),s(e,o,r),d(o,a),A(B,a,null),d(a,k),L[g].m(a,null),d(a,h),d(a,v),s(e,b,r),W&&W.m(e,r),s(e,$,r),x=!0},p(e,t){var n={};e.darkMode&&(n.darkMode=t.darkMode),e.winWidth&&(n.narrow=t.winWidth<=710),B.$set(n);var d=g;(g=O(t))===d?L[g].p(e,t):(I={remaining:0,callbacks:[]},E(L[d],1,()=>{L[d]=null}),I.remaining||r(I.callbacks),(f=L[g])||(f=L[g]=z[g](t)).c(),C(f,1),f.m(a,h)),x&&!e.darkMode||w===(w="container "+(t.darkMode?"dark":"")+" svelte-1185mdq")||p(a,"class",w),x&&!e.darkMode||M===(M="outer "+(t.darkMode?"dark":"")+" svelte-1185mdq")||p(o,"class",M),"unknown"==t.mobileOperatingSystem&&t.resizeInProgress?W?W.p(e,t):((W=te(t)).c(),W.m($.parentNode,$)):W&&(W.d(1),W=null)},i(e){x||(C(B.$$.fragment,e),C(f),x=!0)},o(e){E(B.$$.fragment,e),E(f),x=!1},d(e){e&&(i(t),i(n),i(o)),P(B),L[g].d(),e&&i(b),W&&W.d(e),e&&i($),_()}}}function re(e,t,n){let r,o,{darkMode:a}=t,d=!1,s=null;const i=function(){let e=navigator.userAgent||navigator.vendor||window.opera;return/windows phone/i.test(e)?"windows_phone":/android/i.test(e)?"android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"ios":"unknown"}();return window.addEventListener("resize",function(){n("resizeInProgress",d=!0),clearTimeout(s),s=setTimeout(()=>{n("resizeInProgress",d=!1)},500)}),e.$set=(e=>{"darkMode"in e&&n("darkMode",a=e.darkMode)}),{darkMode:a,winWidth:r,winHeight:o,resizeInProgress:d,mobileOperatingSystem:i,onwindowresize:function(){r=Y.innerWidth,n("winWidth",r),o=Y.innerHeight,n("winHeight",o)}}}class oe extends W{constructor(e){super(),O(this,e,re,ne,a,["darkMode"])}}function ae(t){var n,o,a,c,k,g,f,h,v=new oe({props:{darkMode:!1}}),w=new oe({props:{darkMode:!0}});return{c(){n=l("div"),v.$$.fragment.c(),o=u(),a=l("div"),c=l("img"),k=u(),g=l("div"),w.$$.fragment.c(),p(n,"id","mainLight"),p(n,"class","shown svelte-kzaamb"),p(c,"class","darkModeIcon svelte-kzaamb"),p(c,"src","darkmode.png"),p(c,"alt","dark mode"),p(g,"id","mainDark"),p(g,"class","hidden svelte-kzaamb"),p(a,"id","darkContainer"),p(a,"class","collapsed svelte-kzaamb"),h=[m(c,"mouseover",t.onHover),m(c,"mouseout",t.onHover),m(c,"click",t.toggleDarkMode)]},m(e,t){s(e,n,t),A(v,n,null),s(e,o,t),s(e,a,t),d(a,c),d(a,k),d(a,g),A(w,g,null),f=!0},p:e,i(e){f||(C(v.$$.fragment,e),C(w.$$.fragment,e),f=!0)},o(e){E(v.$$.fragment,e),E(w.$$.fragment,e),f=!1},d(e){e&&i(n),P(v),e&&(i(o),i(a)),P(w),r(h)}}}function de(e,t,n){let r,o=!1;return{toggleDarkMode:function(){document.getElementById("darkContainer").classList.toggle("collapsed"),clearTimeout(r),o?(document.getElementById("darkContainer").style.clipPath="circle(25% at 50% 27px)",document.getElementById("darkContainer").style["-webkit-clip-path"]="circle(25% at 50% 27px)",document.getElementById("mainLight").classList.add("shown")):(document.getElementById("darkContainer").style.clipPath="circle(150% at 50% 27px)",document.getElementById("darkContainer").style["-webkit-clip-path"]="circle(150% at 50% 27px)",document.getElementById("mainDark").classList.remove("hidden"),r=setTimeout(()=>{document.getElementById("mainLight").classList.remove("shown")},1e3)),o=!o},onHover:function(e){clearTimeout(r),o?"mouseover"===e.type||e.type:"mouseover"===e.type?(document.getElementById("darkContainer").style.clipPath="circle(25% at 50% 27px)",document.getElementById("darkContainer").style["-webkit-clip-path"]="circle(25% at 50% 27px)",document.getElementById("mainDark").classList.remove("hidden")):"mouseout"===e.type&&(document.getElementById("darkContainer").style.clipPath="circle(14px at 50% 27px)",document.getElementById("darkContainer").style["-webkit-clip-path"]="circle(14px at 50% 27px)",r=setTimeout(()=>{document.getElementById("mainDark").classList.add("hidden")},1e3))}}}return new class extends W{constructor(e){super(),O(this,e,de,ae,a,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
