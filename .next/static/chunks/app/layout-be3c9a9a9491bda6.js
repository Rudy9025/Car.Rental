(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{241:(e,l,n)=>{Promise.resolve().then(n.t.bind(n,9324,23)),Promise.resolve().then(n.bind(n,22))},22:(e,l,n)=>{"use strict";n.d(l,{GoogleOAuthProvider:()=>i,j:()=>r});var o=n(2115);let t=(0,o.createContext)(null);function i(e){let{clientId:l,nonce:n,onScriptLoadSuccess:i,onScriptLoadError:u,children:r}=e,d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{nonce:l,onScriptLoadSuccess:n,onScriptLoadError:t}=e,[i,u]=(0,o.useState)(!1),r=(0,o.useRef)(n);r.current=n;let d=(0,o.useRef)(t);return d.current=t,(0,o.useEffect)(()=>{let e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.nonce=l,e.onload=()=>{var e;u(!0),null===(e=r.current)||void 0===e||e.call(r)},e.onerror=()=>{var e;u(!1),null===(e=d.current)||void 0===e||e.call(d)},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[l]),i}({nonce:n,onScriptLoadSuccess:i,onScriptLoadError:u}),c=(0,o.useMemo)(()=>({clientId:l,scriptLoadedSuccessfully:d}),[l,d]);return o.createElement(t.Provider,{value:c},r)}let u={large:40,medium:32,small:20};function r(e){let{onSuccess:l,onError:n,useOneTap:i,promptMomentNotification:r,type:d="standard",theme:c="outline",size:v="large",text:s,shape:a,logo_alignment:f,width:w,locale:g,click_listener:m,containerProps:h,...p}=e,E=(0,o.useRef)(null),{clientId:b,scriptLoadedSuccessfully:_}=function(){let e=(0,o.useContext)(t);if(!e)throw Error("Google OAuth components must be used within GoogleOAuthProvider");return e}(),C=(0,o.useRef)(l);C.current=l;let R=(0,o.useRef)(n);R.current=n;let k=(0,o.useRef)(r);return k.current=r,(0,o.useEffect)(()=>{var e,l,n,o,t,u,r,h,y;if(_)return null===(n=null===(l=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===l?void 0:l.id)||void 0===n||n.initialize({client_id:b,callback:e=>{var l,n;if(!(null==e?void 0:e.credential))return null===(l=R.current)||void 0===l?void 0:l.call(R);let{credential:o,select_by:t}=e;C.current({credential:o,clientId:null!==(n=null==e?void 0:e.clientId)&&void 0!==n?n:null==e?void 0:e.client_id,select_by:t})},...p}),null===(u=null===(t=null===(o=null==window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===t?void 0:t.id)||void 0===u||u.renderButton(E.current,{type:d,theme:c,size:v,text:s,shape:a,logo_alignment:f,width:w,locale:g,click_listener:m}),i&&(null===(y=null===(h=null===(r=null==window?void 0:window.google)||void 0===r?void 0:r.accounts)||void 0===h?void 0:h.id)||void 0===y||y.prompt(k.current)),()=>{var e,l,n;i&&(null===(n=null===(l=null===(e=null==window?void 0:window.google)||void 0===e?void 0:e.accounts)||void 0===l?void 0:l.id)||void 0===n||n.cancel())}},[b,_,i,d,c,v,s,a,f,w,g]),o.createElement("div",{...h,ref:E,style:{height:u[v],...null==h?void 0:h.style}})}},9324:()=>{}},e=>{var l=l=>e(e.s=l);e.O(0,[533,441,517,358],()=>l(241)),_N_E=e.O()}]);