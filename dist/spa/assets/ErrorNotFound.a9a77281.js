import{c as o,h as v,g as F,G as V,H as de,I as fe,J as re,K as ve,r as U,l as me,L as ge,M as he,N as P,p as be,O as ye,_ as ke,y as pe,P as xe,E as Q,f as qe}from"./index.51127d06.js";import{c as H,h as _e,b as z,d as Ee}from"./render.f107376c.js";import{c as $e}from"./dom.51c8e05d.js";const D={xs:18,sm:24,md:32,lg:38,xl:46},le={size:String};function ie(e,t=D){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const W="0 0 24 24",G=e=>e,I=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":G,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":G,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Se=new RegExp("^("+Object.keys(ue).join("|")+")"),we=new RegExp("^("+Object.keys(se).join("|")+")"),X=new RegExp("^("+Object.keys(oe).join("|")+")"),Be=/^[Mm]\s?[-+]?\.?\d/,Le=/^img:/,Re=/^svguse:/,Ce=/^ion-/,Pe=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=H({name:"QIcon",props:{...le,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=F(),n=ie(e),u=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,a=e.name;if(a==="none"||!a)return{none:!0};if(r.iconMapFn!==null){const s=r.iconMapFn(a);if(s!==void 0)if(s.icon!==void 0){if(a=s.icon,a==="none"||!a)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Be.test(a)===!0){const[s,y=W]=a.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(i=>{const[k,h,p]=i.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Le.test(a)===!0)return{img:!0,src:a.substring(4)};if(Re.test(a)===!0){const[s,y=W]=a.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=a.match(Se);if(b!==null)c=ue[b[1]](a);else if(Pe.test(a)===!0)c=a;else if(Ce.test(a)===!0)c=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(X.test(a)===!0){c="notranslate material-symbols";const s=a.match(X);s!==null&&(a=a.substring(6),c+=oe[s[1]]),q=a}else{c="notranslate material-icons";const s=a.match(we);s!==null&&(a=a.substring(2),c+=se[s[1]]),q=a}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,_e(t.default)):f.value.img===!0?v("span",c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Te={size:{type:[Number,String],default:"1em"},color:String};function Oe(e){return{cSize:o(()=>e.size in D?`${D[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ae=H({name:"QSpinner",props:{...Te,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=Oe(e);return()=>v("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Me(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,r,n){r.modifiers.stop===!0&&re(e);const u=r.modifiers.color;let f=r.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),a=document.createElement("span"),q=ve(e),{left:b,top:s,width:y,height:i}=t.getBoundingClientRect(),k=Math.sqrt(y*y+i*i),h=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-b-h}px`,x=`${(i-k)/2}px`,C=f?x:`${q.top-s-h}px`;a.className="q-ripple__inner",$e(a,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${C},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(a),t.appendChild(c);const L=()=>{c.remove(),clearTimeout(R)};r.abort.push(L);let R=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,R=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,R=setTimeout(()=>{c.remove(),r.abort.splice(r.abort.indexOf(L),1)},275)},250)},50)}function Z(e,{modifiers:t,value:r,arg:n}){const u=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var je=Ee({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(u,e,n,u.qKeyEvent===!0)},keystart:Me(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&V(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(u,e,n,!0)},300)};Z(n,t),e.__qripple=n,de(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&Z(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),fe(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ze=Object.keys(ce),Ne={align:{type:String,validator:e=>ze.includes(e)}};function Ke(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function Ie(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ve(e,t){for(const r in t){const n=t[r],u=e[r];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,c)=>f!==u[c]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function Fe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(De(e[r],t[r])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function He({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=F(),{props:n,proxy:u,emit:f}=r,c=Ie(r),a=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&a.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=o(()=>q.value===!0?C(n.to):null),s=o(()=>b.value!==null),y=o(()=>a.value===!0||s.value===!0),i=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>a.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:m}=b.value,{length:_}=m,$=m[_-1];if($===void 0)return-1;const w=u.$route.matched;if(w.length===0)return-1;const B=w.findIndex(te.bind(null,$));if(B>-1)return B;const N=ee(m[_-2]);return _>1&&ee($)===N&&w[w.length-1].path!==N?w.findIndex(te.bind(null,m[_-2])):B}),p=o(()=>s.value===!0&&h.value!==-1&&Ve(u.$route.params,b.value.params)),d=o(()=>p.value===!0&&h.value===u.$route.matched.length-1&&Fe(u.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function C(m){try{return u.$router.resolve(m)}catch{}return null}function L(m,{returnRouterError:_,to:$=n.to,replace:w=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const B=u.$router[w===!0?"replace":"push"]($);return _===!0?B:B.then(()=>{}).catch(()=>{})}function R(m){if(s.value===!0){const _=$=>L(m,$);f("click",m,_),m.defaultPrevented!==!0&&_()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:a,hasLink:y,linkTag:i,resolvedLink:b,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:C,navigateToRouterLink:L,navigateOnClick:R}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ue={xs:8,sm:10,md:14,lg:20,xl:24},We=["button","submit","reset"],Ge=/[^\s]\/[^\s]/,Xe=["flat","outline","push","unelevated"],Je=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ye={...le,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Xe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ne.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ze(e){const t=ie(e,Ue),r=Ke(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:c,navigateOnClick:a}=He({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ae?ae[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),i=o(()=>Je(e,"standard")),k=o(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,c.value):We.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ge.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:u,linkTag:f,navigateOnClick:a,isActionable:s}}const{passiveCapture:E}=be;let T=null,O=null,A=null;var et=H({name:"QBtn",props:{...Ye,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:r}){const{proxy:n}=F(),{classes:u,style:f,innerClasses:c,attributes:a,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=Ze(e),i=U(null),k=U(null);let h=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),C=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),L=o(()=>({center:e.round})),R=o(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const l={onClick:$,onKeydown:w,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";l[`onTouchstart${g}`]=B}return l}return{onClick:P}}),_=o(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...a.value,...m.value}));function $(l){if(i.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&i.value.contains(g)===!1&&g.contains(i.value)===!1){i.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,E),i.value!==null&&i.value.removeEventListener("blur",K,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,E),i.value.addEventListener("blur",K,E)}}s(l)}}function w(l){i.value!==null&&(r("keydown",l),V(l,[13,32])===!0&&O!==i.value&&(O!==null&&M(),l.defaultPrevented!==!0&&(i.value.focus(),O=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),i.value.addEventListener("blur",S,E)),P(l)))}function B(l){i.value!==null&&(r("touchstart",l),l.defaultPrevented!==!0&&(T!==i.value&&(T!==null&&M(),T=i.value,h=l.target,h.addEventListener("touchcancel",S,E),h.addEventListener("touchend",S,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function N(l){i.value!==null&&(l.qSkipRipple=p===!0,r("mousedown",l),l.defaultPrevented!==!0&&A!==i.value&&(A!==null&&M(),A=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,E)))}function S(l){if(i.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===i.value)){if(l!==void 0&&l.type==="keyup"){if(O===i.value&&V(l,[13,32])===!0){const g=new MouseEvent("click",l);g.qKeyEvent=!0,l.defaultPrevented===!0&&ye(g),l.cancelBubble===!0&&re(g),i.value.dispatchEvent(g),P(l),l.qKeyEvent=!0}r("keyup",l)}M()}}function M(l){const g=k.value;l!==!0&&(T===i.value||A===i.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===i.value&&(h!==null&&(h.removeEventListener("touchcancel",S,E),h.removeEventListener("touchend",S,E)),T=h=null),A===i.value&&(document.removeEventListener("mouseup",S,E),A=null),O===i.value&&(document.removeEventListener("keyup",S,!0),i.value!==null&&i.value.removeEventListener("blur",S,E),O=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function j(l){P(l),l.qSkipRipple=!0}return me(()=>{M(!0)}),Object.assign(n,{click:$}),()=>{let l=[];e.icon!==void 0&&l.push(v(J,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=z(t.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(J,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},l)),e.loading!==null&&g.push(v(ge,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Ae)])]:null)),he(v(b.value,_.value,g),[[je,C.value,void 0,L.value]])}}});const tt={},nt={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},at=Q("div",{style:{"font-size":"30vh"}}," 404 ",-1),rt=Q("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function lt(e,t){return pe(),xe("div",nt,[Q("div",null,[at,rt,qe(et,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var ot=ke(tt,[["render",lt]]);export{ot as default};
