(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80],{9124:(e,s,t)=>{Promise.resolve().then(t.bind(t,7640))},7640:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>u});var a=t(5155),i=t(2115),n=t(6382),l=t(6574),r=t.n(l),o=t(2651),c=t(5565),d=t(4932);t(5716);var h=t(9208);let u=()=>{let[e,s]=(0,i.useState)(null),t=h.A.get("userData"),l=t?JSON.parse(t).username:"guest",u=t?JSON.parse(t).email:"guest",g=async()=>{try{let e=await o.A.post("/api/history",{username:l,Email:u});s(e.data[0])}catch(e){console.log("Error fetching Booking History:",e)}};(0,i.useEffect)(()=>{"guest"!==l&&"guest"!==u&&g()},[]);let m=async e=>{try{let s=await o.A.patch("/api/bookings",{Booking_id:e});200===s.status&&(g(),console.log("Booking cancelled successfully"))}catch(e){console.log("Error canceling booking:",e)}};return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsx)(d.N9,{stacked:!0}),(0,a.jsxs)("div",{className:r().main,children:[(0,a.jsx)(n.default,{}),(0,a.jsx)("h1",{children:"Booking History"}),e&&e.length>0?(0,a.jsx)("div",{className:r().History,children:e.map((e,s)=>{let t=e.Rented_Days||0,i=e.Rented_Weeks||0,n=e.Rented_Months||0,l="";return l=t>0?"".concat(t," Days"):i>0?"".concat(i," Weeks"):n>0?"".concat(n," Months"):"Duration not available",(0,a.jsxs)("div",{className:r().cars,children:[(0,a.jsx)(c.default,{src:"".concat(e.path),height:200,width:200,alt:"car img",priority:!0}),(0,a.jsxs)("div",{className:r().CarDetails,children:[(0,a.jsx)("p",{className:r().carName,children:e.CarName}),(0,a.jsxs)("p",{children:[" ",(0,a.jsx)(c.default,{src:"/svg/duration.svg",width:1,height:1,alt:"duration logo"})," ",l]}),(0,a.jsxs)("p",{children:[(0,a.jsx)(c.default,{src:"/svg/pickupDate.svg",width:1,height:1,alt:"pickupDate logo"})," ",e.pickupDate]}),(0,a.jsxs)("p",{className:r().amount,children:[(0,a.jsx)(c.default,{src:"/svg/dollar.svg",width:1,height:1,alt:"dollar logo"})," ","$ ",(0,a.jsx)("strong",{children:e.TotalAmount})]})]}),(0,a.jsxs)("button",{className:r().button,onClick:()=>confirm("Are you sure to cancel booking?")&&m(e.Booking_id)||d.oR.warn("Cancellation terminated."),children:["Cancel Booking"," ",(0,a.jsx)(c.default,{src:"/svg/cancel.svg",width:1,height:1,alt:"cancel logo"})]})]},s)})}):(0,a.jsx)("p",{style:{position:"relative",color:"white",top:"10%"},children:"No bookings found."})]})]})}},6382:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var a=t(5155),i=t(4952),n=t.n(i),l=t(7396),r=t(5565),o=t(9208);let c=()=>{let e=o.A.get("userData"),s=e?JSON.parse(e).username:"guest";return(0,a.jsxs)("div",{className:n().nav,children:[(0,a.jsxs)("div",{className:n().title,children:[(0,a.jsx)(r.default,{src:"/svg/logo.svg",alt:"logo",height:25,width:50}),(0,a.jsx)("i",{children:"Car Rental"})]}),(0,a.jsxs)("div",{className:n().items,children:["Admin"!==s&&(0,a.jsxs)(l.default,{href:"/components/HomePage",children:[" ",(0,a.jsx)("li",{children:"Home"})]}),(0,a.jsxs)(l.default,{href:"/components/Rent",children:[" ",(0,a.jsx)("li",{children:"Book Cars"})," "]}),"Admin"!==s&&(0,a.jsxs)(l.default,{href:"/components/Contact",children:[" ",(0,a.jsx)("li",{children:"Contact Us"})]}),"Admin"!==s&&(0,a.jsxs)(l.default,{href:"/components/History",children:[" ",(0,a.jsx)("li",{children:"My Bookings"})]}),"Admin"===s&&(0,a.jsxs)(l.default,{href:"/components/Admin",children:[" ",(0,a.jsx)("li",{children:"Admin"})," "]}),"Admin"===s&&(0,a.jsxs)(l.default,{href:"/components/Logs",children:[" ",(0,a.jsx)("li",{children:"All Bookings"})," "]})]}),(0,a.jsxs)("div",{className:n().items,children:[" ","User: ",s||"guest",(0,a.jsxs)(l.default,{href:"/",onClick:()=>{o.A.remove("validUserLogged"),o.A.remove("AdminLogged"),o.A.remove("userData")},children:[" ",(0,a.jsx)("button",{children:"Sign Out"})," "]})]})]})}},6574:e=>{e.exports={container:"History_container__5azRn",main:"History_main__XPnYO",History:"History_History__5UV88",cars:"History_cars__19f01",CarDetails:"History_CarDetails__8TCsh",carName:"History_carName__xO3wS",amount:"History_amount__IXsBw",button:"History_button__7g_Zn"}},4952:e=>{e.exports={nav:"NavBar_nav__KlVRO",items:"NavBar_items__e1yni",title:"NavBar_title__E9y2Q"}}},e=>{var s=s=>e(e.s=s);e.O(0,[807,259,898,651,140,441,517,358],()=>s(9124)),_N_E=e.O()}]);