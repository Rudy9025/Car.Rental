(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{4791:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(5155),i=n(9800),o=n.n(i),a=n(2115),s=n(4932);n(5716);var l=n(2651),c=n(6046),d=n(22);class u extends Error{}u.prototype.name="InvalidTokenError";var g=n(9208);let v=()=>{let e=(0,a.useRef)(null),[t,n]=(0,a.useState)(0),[i,v]=(0,a.useState)(!0),[m,p]=(0,a.useState)(""),[h,f]=(0,a.useState)(""),[w,x]=(0,a.useState)(""),[_,j]=(0,a.useState)(""),b=(0,c.useRouter)(),N=e=>e?!(e.length<3)||(s.oR.error("Username must be at least 3 characters long"),!1):(s.oR.error("Username is required"),!1),C=e=>e?!!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(e)||(s.oR.error("Invalid email format"),!1):(s.oR.error("Email is required"),!1),y=e=>e?!(e.length<6)||(s.oR.error("Password must be at least 6 characters long"),!1):(s.oR.error("Password is required"),!1),R=(e,t)=>t?e===t||(s.oR.error("Passwords do not match"),!1):(s.oR.error("Confirm Password is required"),!1),L=async()=>{if(N(m)&&C(h)&&y(w)&&R(w,_))try{let e=await l.A.post("/api/signups",{username:m,email:h,password:w});s.oR.success(e.data.message),console.log("Sign up success:")}catch(n){var e,t;console.log("Error during sign up:",n),s.oR.error((null===(t=n.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.message)||"Error during sign up")}},P=["/videos/intro1.mp4","/videos/intro2.mp4","/videos/intro3.mp4"],S=async()=>{if("admin"===h.toLowerCase()&&"admin"===w.toLowerCase()&&(g.A.set("AdminLogged","true",{expires:1}),g.A.set("userData",JSON.stringify({username:"Admin"}),{expires:1}),s.oR.success("Admin Login"),b.push("/components/Admin")),C(h)&&y(w))try{let e=await l.A.post("/api/login",{email:h,password:w});"Login Successful"===e.data.message&&(g.A.set("userData",JSON.stringify({username:e.data.username,email:h}),{expires:1}),s.oR.success(e.data.message),g.A.set("validUserLogged","true",{expires:1}),b.push("/components/HomePage"))}catch(n){var e,t;console.log("Error during logging in:",n),s.oR.error((null===(t=n.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.message)||"Error during logging in")}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)("div",{className:o().Ptitle,children:"Rent-A-Ride: A New Era of Mobility"}),(0,r.jsx)("div",{className:o().intro,children:(0,r.jsx)("video",{ref:e,src:P[t],type:"video/mp4",autoPlay:!0,loop:!1,muted:!0,preload:"auto",className:o().video,onEnded:()=>{n(e=>(e+1)%P.length)}})}),(0,r.jsxs)("div",{className:o().switch,children:[i&&(0,r.jsxs)("div",{className:o().Login,children:[(0,r.jsx)("div",{className:o().title,children:"Login"}),(0,r.jsx)("div",{className:o().item,children:"Drive Your Dreams Forward"}),(0,r.jsx)("div",{className:o().item,children:"Unlock the Road Ahead"}),(0,r.jsxs)("div",{className:o().wrapper,children:[(0,r.jsx)("input",{type:"text",placeholder:"Email",value:h,onChange:e=>f(e.target.value),className:o().betterOutline}),(0,r.jsx)("input",{type:"password",placeholder:"Password",value:w,onChange:e=>x(e.target.value),className:o().betterOutline})]}),(0,r.jsx)("div",{className:o().item,children:(0,r.jsx)("button",{onClick:S,children:"Submit"})}),(0,r.jsx)("div",{className:o().item,children:"(or)"}),(0,r.jsx)("div",{className:"".concat(o().icon," ").concat(o().googleOutline),children:(0,r.jsx)(d.j,{onSuccess:e=>{let t=function(e,t){let n;if("string"!=typeof e)throw new u("Invalid token specified: must be a string");t||(t={});let r=!0===t.header?0:1,i=e.split(".")[r];if("string"!=typeof i)throw new u(`Invalid token specified: missing part #${r+1}`);try{n=function(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw Error("base64 string is not of the correct length")}try{var n;return n=t,decodeURIComponent(atob(n).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return atob(t)}}(i)}catch(e){throw new u(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)}try{return JSON.parse(n)}catch(e){throw new u(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)}}(e.credential);g.A.set("validUserLogged","true",{expires:1}),b.push("/components/HomePage"),g.A.set("userData",JSON.stringify({username:t.name,email:t.email}),{expires:1})},onError:()=>{console.log("Login Failed")}})}),(0,r.jsxs)("div",{className:o().item,style:{fontSize:"1.2dvw"},children:["Don't have account?"," ",(0,r.jsx)("span",{className:o().LoginSign,onClick:()=>v(!1),children:"\xa0Signup"})]}),(0,r.jsx)(s.N9,{stacked:!0})]}),!i&&(0,r.jsxs)("div",{className:o().Login,children:[(0,r.jsx)("div",{className:o().title,children:"Sign Up"}),(0,r.jsx)("div",{className:o().item,children:"Connect, create, and explore"}),(0,r.jsx)("div",{className:o().item,children:"All in one place"}),(0,r.jsxs)("div",{className:o().wrapper,children:[(0,r.jsx)("input",{type:"text",placeholder:"Username",className:o().betterOutline,value:m,onChange:e=>p(e.target.value)}),(0,r.jsx)("input",{type:"text",placeholder:"Email",className:o().betterOutline,value:h,onChange:e=>f(e.target.value)}),(0,r.jsx)("input",{type:"password",placeholder:"Password",className:o().betterOutline,value:w,onChange:e=>x(e.target.value)}),(0,r.jsx)("input",{type:"password",placeholder:"Confirm Password",className:o().betterOutline,value:_,onChange:e=>j(e.target.value)})]}),(0,r.jsx)("div",{className:o().item,children:(0,r.jsx)("button",{onClick:L,children:"Sign Up"})}),(0,r.jsx)(s.N9,{}),(0,r.jsxs)("div",{className:o().item,style:{fontSize:"1.2dvw"},children:["Have account?"," ",(0,r.jsx)("span",{className:o().LoginSign,onClick:()=>v(!0),children:"\xa0Login"})]})]})]})]})})}},22:(e,t,n)=>{"use strict";n.d(t,{GoogleOAuthProvider:()=>o,j:()=>s});var r=n(2115);let i=(0,r.createContext)(null);function o(e){let{clientId:t,nonce:n,onScriptLoadSuccess:o,onScriptLoadError:a,children:s}=e,l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{nonce:t,onScriptLoadSuccess:n,onScriptLoadError:i}=e,[o,a]=(0,r.useState)(!1),s=(0,r.useRef)(n);s.current=n;let l=(0,r.useRef)(i);return l.current=i,(0,r.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=t,e.onload=()=>{var e;a(!0),null===(e=s.current)||void 0===e||e.call(s)},e.onerror=()=>{var e;a(!1),null===(e=l.current)||void 0===e||e.call(l)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t]),o}({nonce:n,onScriptLoadSuccess:o,onScriptLoadError:a}),c=(0,r.useMemo)(()=>({clientId:t,scriptLoadedSuccessfully:l}),[t,l]);return r.createElement(i.Provider,{value:c},s)}let a={large:40,medium:32,small:20};function s(e){let{onSuccess:t,onError:n,useOneTap:o,promptMomentNotification:s,type:l="standard",theme:c="outline",size:d="large",text:u,shape:g,logo_alignment:v,width:m,locale:p,click_listener:h,containerProps:f,...w}=e,x=(0,r.useRef)(null),{clientId:_,scriptLoadedSuccessfully:j}=function(){let e=(0,r.useContext)(i);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),b=(0,r.useRef)(t);b.current=t;let N=(0,r.useRef)(n);N.current=n;let C=(0,r.useRef)(s);return C.current=s,(0,r.useEffect)(()=>{var e,t,n,r,i,a,s,f,y;if(j)return null===(n=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===n||n.initialize({client_id:_,callback:e=>{var t,n;if(!(null==e?void 0:e.credential))return null===(t=N.current)||void 0===t?void 0:t.call(N);let{credential:r,select_by:i}=e;b.current({credential:r,clientId:null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id,select_by:i})},...w}),null===(a=null===(i=null===(r=null==window?void 0:window.google)||void 0===r?void 0:r.accounts)||void 0===i?void 0:i.id)||void 0===a||a.renderButton(x.current,{type:l,theme:c,size:d,text:u,shape:g,logo_alignment:v,width:m,locale:p,click_listener:h}),o&&(null===(y=null===(f=null===(s=null==window?void 0:window.google)||void 0===s?void 0:s.accounts)||void 0===f?void 0:f.id)||void 0===y||y.prompt(C.current)),()=>{var e,t,n;o&&(null===(n=null===(t=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===t?void 0:t.id)||void 0===n||n.cancel())}},[_,j,o,l,c,d,u,g,v,m,p]),r.createElement("div",{...f,ref:x,style:{height:a[d],...null==f?void 0:f.style}})}},6046:(e,t,n)=>{"use strict";var r=n(6658);n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},9800:e=>{e.exports={video:"LoginPage_video__6zqZY",container:"LoginPage_container__nu9_0",Ptitle:"LoginPage_Ptitle__wJ6b3",intro:"LoginPage_intro__hwkf1",switch:"LoginPage_switch__zOtnk",Login:"LoginPage_Login__7SopH",title:"LoginPage_title__4DkXE",item:"LoginPage_item__exnMb",wrapper:"LoginPage_wrapper__vxQKL",betterOutline:"LoginPage_betterOutline__7BhwV",googleOutline:"LoginPage_googleOutline__Vhf0t",googleIcon:"LoginPage_googleIcon__piew1",LoginSign:"LoginPage_LoginSign__yuhZC"}},9208:(e,t,n)=>{"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{A:()=>i});var i=function e(t,n){function i(e,i,o){if("undefined"!=typeof document){"number"==typeof(o=r({},n,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var s in o)o[s]&&(a+="; "+s,!0!==o[s]&&(a+="="+o[s].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+a}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},i=0;i<n.length;i++){var o=n[i].split("="),a=o.slice(1).join("=");try{var s=decodeURIComponent(o[0]);if(r[s]=t.read(a,s),e===s)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);