(()=>{var e={};e.id=935,e.ids=[935],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},27910:e=>{"use strict";e.exports=require("stream")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},67113:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(70260),n=s(28203),i=s(25155),o=s.n(i),a=s(67292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);s.d(t,l);let d=["",{children:["components",{children:["Logs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,49963)),"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Logs\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9019)),"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,42318,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Logs\\page.jsx"],h={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/components/Logs/page",pathname:"/components/Logs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},74339:(e,t,s)=>{Promise.resolve().then(s.bind(s,49963))},39995:(e,t,s)=>{Promise.resolve().then(s.bind(s,58447))},6175:(e,t,s)=>{Promise.resolve().then(s.bind(s,2654))},43127:(e,t,s)=>{Promise.resolve().then(s.bind(s,75074))},85133:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,13219,23)),Promise.resolve().then(s.t.bind(s,34863,23)),Promise.resolve().then(s.t.bind(s,25155,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,96313,23)),Promise.resolve().then(s.t.bind(s,48530,23)),Promise.resolve().then(s.t.bind(s,88921,23))},32397:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,66959,23)),Promise.resolve().then(s.t.bind(s,33875,23)),Promise.resolve().then(s.t.bind(s,88903,23)),Promise.resolve().then(s.t.bind(s,84178,23)),Promise.resolve().then(s.t.bind(s,86013,23)),Promise.resolve().then(s.t.bind(s,87190,23)),Promise.resolve().then(s.t.bind(s,61365,23))},58447:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(45512),n=s(58242),i=s(92460),o=s.n(i),a=s(58009),l=s(85668),d=s(25998);let c=()=>{let[e,t]=(0,a.useState)([]),s=d.A.get("userData"),i=s?JSON.parse(s).username:void 0,c=s?JSON.parse(s).email:void 0,h=async()=>{try{let e=await l.A.get("/api/bookings");t(e.data.Logs)}catch(e){console.log("Error fetching Booking History:",e)}};return(0,a.useEffect)(()=>{"guest"!==i&&"guest"!==c&&h()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:o().container,children:(0,r.jsxs)("div",{className:o().main,children:[(0,r.jsx)(n.default,{}),(0,r.jsx)("div",{className:o().tableDiv,children:e.length>0?(0,r.jsxs)("table",{className:o().tables,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Booking ID"}),(0,r.jsx)("th",{children:"User Name"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsx)("th",{children:"Car Name"}),(0,r.jsx)("th",{children:"Pickup Area"}),(0,r.jsx)("th",{children:"Pickup Location"}),(0,r.jsx)("th",{children:"Pincode"}),(0,r.jsx)("th",{children:"Duration"}),(0,r.jsx)("th",{children:"Pickup Date"}),(0,r.jsx)("th",{children:"Amount"}),(0,r.jsx)("th",{children:"Booking Date"})]})}),(0,r.jsx)("tbody",{children:e.map(e=>{let t=e.Rented_Days||0,s=e.Rented_Weeks||0,n=e.Rented_Months||0,i="";return i=t>0?`${t} Days`:s>0?`${s} Weeks`:n>0?`${n} Months`:"Duration not available",(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.Booking_id}),(0,r.jsx)("td",{children:e.userName}),(0,r.jsx)("td",{children:e.email}),(0,r.jsx)("td",{children:e.CarName}),(0,r.jsx)("td",{children:e.pickupArea}),(0,r.jsx)("td",{children:e.pickupLocation}),(0,r.jsx)("td",{children:e.pincode}),(0,r.jsx)("td",{children:i}),(0,r.jsx)("td",{children:e.pickupDate}),(0,r.jsxs)("td",{children:["$",e.TotalAmount]}),(0,r.jsx)("td",{children:new Date(e["Booked At"]).toLocaleString()})]},e.Booking_id)})})]}):(0,r.jsx)("p",{style:{color:"white"},children:"No logs found."})})]})})})}},58242:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var r=s(45512),n=s(90497),i=s.n(n),o=s(26008),a=s(45103),l=s(25998);let d=()=>{let e=l.A.get("userData"),t=e?JSON.parse(e).username:"guest";return(0,r.jsxs)("div",{className:i().nav,children:[(0,r.jsxs)("div",{className:i().title,children:[(0,r.jsx)(a.default,{src:"/svg/logo.svg",alt:"logo",height:25,width:50}),(0,r.jsx)("i",{children:"Car Rental"})]}),(0,r.jsxs)("div",{className:i().items,children:["Admin"!==t&&(0,r.jsxs)(o.default,{href:"/components/HomePage",children:[" ",(0,r.jsx)("li",{children:"Home"})]}),(0,r.jsxs)(o.default,{href:"/components/Rent",children:[" ",(0,r.jsx)("li",{children:"Book Cars"})," "]}),"Admin"!==t&&(0,r.jsxs)(o.default,{href:"/components/Contact",children:[" ",(0,r.jsx)("li",{children:"Contact Us"})]}),"Admin"!==t&&(0,r.jsxs)(o.default,{href:"/components/History",children:[" ",(0,r.jsx)("li",{children:"My Bookings"})]}),"Admin"===t&&(0,r.jsxs)(o.default,{href:"/components/Admin",children:[" ",(0,r.jsx)("li",{children:"Admin"})," "]}),"Admin"===t&&(0,r.jsxs)(o.default,{href:"/components/Logs",children:[" ",(0,r.jsx)("li",{children:"All Bookings"})," "]})]}),(0,r.jsxs)("div",{className:i().items,children:[" ","User: ",t||"guest",(0,r.jsxs)(o.default,{href:"/",onClick:()=>{l.A.remove("validUserLogged"),l.A.remove("AdminLogged"),l.A.remove("userData")},children:[" ",(0,r.jsx)("button",{children:"Sign Out"})," "]})]})]})}},92460:e=>{e.exports={container:"Logs_container__l59b7",main:"Logs_main__bIPZn",tableDiv:"Logs_tableDiv__waeYj",tables:"Logs_tables__sBEYL"}},90497:e=>{e.exports={nav:"NavBar_nav__KlVRO",items:"NavBar_items__e1yni",title:"NavBar_title__E9y2Q"}},49963:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\r9025\\\\OneDrive\\\\Desktop\\\\Car Rental System\\\\car\\\\app\\\\components\\\\Logs\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Logs\\page.jsx","default")},9019:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o,metadata:()=>i});var r=s(62740);s(82704);var n=s(2654);s(89409);let i={title:"Car Rental System",icons:{icon:"/images/icons/favicon.png"}};function o({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{children:(0,r.jsx)(n.GoogleOAuthProvider,{clientId:process.env.GOOGLE_CLIENT_ID,children:e})})})}},82704:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[989,36,597,668],()=>s(67113));module.exports=r})();