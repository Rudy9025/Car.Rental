(()=>{var e={};e.id=135,e.ids=[135],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55511:e=>{"use strict";e.exports=require("crypto")},29021:e=>{"use strict";e.exports=require("fs")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},99997:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>u,tree:()=>c});var t=a(70260),n=a(28203),i=a(25155),s=a.n(i),l=a(67292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(r,o);let c=["",{children:["components",{children:["Admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,41893)),"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Admin\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,9019)),"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,42318,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Admin\\page.jsx"],p={require:a,loadChunk:()=>Promise.resolve()},u=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/components/Admin/page",pathname:"/components/Admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},42969:(e,r,a)=>{Promise.resolve().then(a.bind(a,41893))},79417:(e,r,a)=>{Promise.resolve().then(a.bind(a,94953))},6175:(e,r,a)=>{Promise.resolve().then(a.bind(a,2654))},43127:(e,r,a)=>{Promise.resolve().then(a.bind(a,75074))},85133:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,13219,23)),Promise.resolve().then(a.t.bind(a,34863,23)),Promise.resolve().then(a.t.bind(a,25155,23)),Promise.resolve().then(a.t.bind(a,9350,23)),Promise.resolve().then(a.t.bind(a,96313,23)),Promise.resolve().then(a.t.bind(a,48530,23)),Promise.resolve().then(a.t.bind(a,88921,23))},32397:(e,r,a)=>{Promise.resolve().then(a.t.bind(a,66959,23)),Promise.resolve().then(a.t.bind(a,33875,23)),Promise.resolve().then(a.t.bind(a,88903,23)),Promise.resolve().then(a.t.bind(a,84178,23)),Promise.resolve().then(a.t.bind(a,86013,23)),Promise.resolve().then(a.t.bind(a,87190,23)),Promise.resolve().then(a.t.bind(a,61365,23))},94953:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>c});var t=a(45512),n=a(58009),i=a(58242),s=a(16108),l=a.n(s),o=a(48981);a(25806);let c=()=>{let[e,r]=(0,n.useState)({carName:"",yearOfManufacture:"",mileage:"",fuelType:"",carCategory:"",emissionStandard:"",transmissionType:"",seatCapacity:"",pricePerDay:"",pricePerWeek:"",pricePerMonth:""}),[a,s]=(0,n.useState)({}),[c,d]=(0,n.useState)(null),p=e=>{let{name:a,value:t}=e.target;r(e=>({...e,[a]:t}))},u=new FormData;u.append("file",c),u.append("carName",e.carName);let h=()=>{let r={},a=!0;return Object.keys(e).forEach(t=>{e[t].trim()||(r[t]=`${t.replace(/([A-Z])/g," $1").toUpperCase()} is required`,a=!1)}),e.yearOfManufacture&&!/^\d{4}$/.test(e.yearOfManufacture)&&(r.yearOfManufacture="Please enter a valid 4-digit year",a=!1),e.mileage&&!/^[a-zA-Z0-9\s\-\/]*$/.test(e.mileage)?(r.mileage="Please enter valid characters for mileage",a=!1):e.mileage.trim()||(r.mileage="Mileage cannot be empty",a=!1),e.pricePerDay&&isNaN(e.pricePerDay)&&(r.pricePerDay="Please enter a valid number for price per day",a=!1),e.pricePerWeek&&isNaN(e.pricePerWeek)&&(r.pricePerWeek="Please enter a valid number for price per week",a=!1),e.pricePerMonth&&isNaN(e.pricePerMonth)&&(r.pricePerMonth="Please enter a valid number for price per month",a=!1),s(r),Object.values(r).forEach(e=>{o.oR.warn(e)}),a},m=async a=>{if(a.preventDefault(),!h())return;if(!window.confirm("Are you sure you want to upload the car details?")){o.oR.warn("Submission Cancelled");return}let t={carName:e.carName,yearOfManufacture:e.yearOfManufacture,mileage:e.mileage,fuelType:e.fuelType,carCategory:e.carCategory,emissionStandard:e.emissionStandard,transmissionType:e.transmissionType,seatCapacity:e.seatCapacity,pricePerDay:e.pricePerDay,pricePerWeek:e.pricePerWeek,pricePerMonth:e.pricePerMonth};try{let e=await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await fetch("/api/images",{method:"POST",body:u}),n=await a.json();(await e.json()).success&&(o.oR.success("Car uploaded successfully"),r({carName:"",yearOfManufacture:"",mileage:"",fuelType:"",carCategory:"",emissionStandard:"",transmissionType:"",seatCapacity:"",pricePerDay:"",pricePerWeek:"",pricePerMonth:""})),n.success?(console.log(`Image Upload successful: ${n.name}`),o.oR.success(`Image Upload successful: ${n.name}`)):o.oR.error("Error uploading car data")}catch(e){console.log("Error uploading car data:",e),o.oR.error("Error uploading car data")}};return(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsx)(o.N9,{stacked:!0}),(0,t.jsxs)("div",{className:l().main,children:[(0,t.jsx)(i.default,{}),(0,t.jsxs)("form",{onSubmit:m,className:l().upload,children:[(0,t.jsxs)("table",{className:l().carFormTable,children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{}),(0,t.jsx)("th",{})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"carName",children:"Car Name:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"text",id:"carName",name:"carName",value:e.carName,onChange:p})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"yearOfManufacture",children:"Year of Manufacture:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"text",id:"yearOfManufacture",name:"yearOfManufacture",value:e.yearOfManufacture,onChange:p})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"mileage",children:"Mileage:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"text",id:"mileage",name:"mileage",value:e.mileage,onChange:p})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"fuelType",children:"Fuel Type:"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{id:"fuelType",name:"fuelType",value:e.fuelType,onChange:p,children:[(0,t.jsx)("option",{value:"",children:"Select Fuel Type"}),(0,t.jsx)("option",{value:"Petrol",children:"Petrol"}),(0,t.jsx)("option",{value:"Diesel",children:"Diesel"}),(0,t.jsx)("option",{value:"Electric",children:"Electric"}),(0,t.jsx)("option",{value:"Hybrid",children:"Hybrid"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"carCategory",children:"Car Category:"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{id:"carCategory",name:"carCategory",value:e.carCategory,onChange:p,children:[(0,t.jsx)("option",{value:"",children:"Select Car Category"}),(0,t.jsx)("option",{value:"SUV",children:"SUV"}),(0,t.jsx)("option",{value:"Luxury Sedan",children:"Luxury Sedan"}),(0,t.jsx)("option",{value:"Sports",children:"Sports"}),(0,t.jsx)("option",{value:"Sedan",children:"Sedan"}),(0,t.jsx)("option",{value:"Hatchback",children:"Hatchback"}),(0,t.jsx)("option",{value:"Truck",children:"Truck"})]})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"emissionStandard",children:"Emission Standard:"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{id:"emissionStandard",name:"emissionStandard",value:e.emissionStandard,onChange:p,children:[(0,t.jsx)("option",{value:"",children:"Select Emission Standard"}),(0,t.jsx)("option",{value:"BS5",children:"BS5"}),(0,t.jsx)("option",{value:"BS6",children:"BS6"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"transmissionType",children:"Transmission Type:"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{id:"transmissionType",name:"transmissionType",value:e.transmissionType,onChange:p,children:[(0,t.jsx)("option",{value:"",children:"Select Transmission Type"}),(0,t.jsx)("option",{value:"Manual",children:"Manual"}),(0,t.jsx)("option",{value:"Automatic",children:"Automatic"})]})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"seatCapacity",children:"Seat Capacity:"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("select",{id:"seatCapacity",name:"seatCapacity",value:e.seatCapacity,onChange:p,children:[(0,t.jsx)("option",{value:"",children:"Select Seat Capacity"}),(0,t.jsx)("option",{value:"4",children:"4"}),(0,t.jsx)("option",{value:"5",children:"5"}),(0,t.jsx)("option",{value:"6",children:"6"}),(0,t.jsx)("option",{value:"7",children:"7"}),(0,t.jsx)("option",{value:"8",children:"8"}),(0,t.jsx)("option",{value:"9",children:"9"}),(0,t.jsx)("option",{value:"10",children:"10"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"pricePerDay",children:"Price per Day:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"number",id:"pricePerDay",name:"pricePerDay",value:e.pricePerDay,onChange:p})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"pricePerWeek",children:"Price per Week:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"number",id:"pricePerWeek",name:"pricePerWeek",value:e.pricePerWeek,onChange:p})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"pricePerMonth",children:"Price per Month:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{type:"number",id:"pricePerMonth",name:"pricePerMonth",value:e.pricePerMonth,onChange:p})}),(0,t.jsx)("td",{children:(0,t.jsx)("label",{htmlFor:"file",children:"Upload File:"})}),(0,t.jsx)("td",{children:(0,t.jsx)("input",{style:{cursor:"pointer"},type:"file",id:"file",name:"file",onChange:e=>{e.target.files&&d(e.target.files[0])}})})]})]})]}),(0,t.jsx)("div",{className:l().button,children:(0,t.jsx)("button",{type:"submit",children:"Upload"})})]})]})]})}},58242:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>c});var t=a(45512),n=a(90497),i=a.n(n),s=a(26008),l=a(45103),o=a(25998);let c=()=>{let e=o.A.get("userData"),r=e?JSON.parse(e).username:"guest";return(0,t.jsxs)("div",{className:i().nav,children:[(0,t.jsxs)("div",{className:i().title,children:[(0,t.jsx)(l.default,{src:"/svg/logo.svg",alt:"logo",height:25,width:50}),(0,t.jsx)("i",{children:"Car Rental"})]}),(0,t.jsxs)("div",{className:i().items,children:["Admin"!==r&&(0,t.jsxs)(s.default,{href:"/components/HomePage",children:[" ",(0,t.jsx)("li",{children:"Home"})]}),(0,t.jsxs)(s.default,{href:"/components/Rent",children:[" ",(0,t.jsx)("li",{children:"Book Cars"})," "]}),"Admin"!==r&&(0,t.jsxs)(s.default,{href:"/components/Contact",children:[" ",(0,t.jsx)("li",{children:"Contact Us"})]}),"Admin"!==r&&(0,t.jsxs)(s.default,{href:"/components/History",children:[" ",(0,t.jsx)("li",{children:"My Bookings"})]}),"Admin"===r&&(0,t.jsxs)(s.default,{href:"/components/Admin",children:[" ",(0,t.jsx)("li",{children:"Admin"})," "]}),"Admin"===r&&(0,t.jsxs)(s.default,{href:"/components/Logs",children:[" ",(0,t.jsx)("li",{children:"All Bookings"})," "]})]}),(0,t.jsxs)("div",{className:i().items,children:[" ","User: ",r||"guest",(0,t.jsxs)(s.default,{href:"/",onClick:()=>{o.A.remove("validUserLogged"),o.A.remove("AdminLogged"),o.A.remove("userData")},children:[" ",(0,t.jsx)("button",{children:"Sign Out"})," "]})]})]})}},16108:e=>{e.exports={container:"Admin_container__WAj1Q",main:"Admin_main__dPKZS",upload:"Admin_upload__l9pDa",carName:"Admin_carName__0dQNP",error:"Admin_error__ycf45",button:"Admin_button__yIAuW",carFormTable:"Admin_carFormTable__1HsD4"}},90497:e=>{e.exports={nav:"NavBar_nav__KlVRO",items:"NavBar_items__e1yni",title:"NavBar_title__E9y2Q"}},41893:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>t});let t=(0,a(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\r9025\\\\OneDrive\\\\Desktop\\\\Car Rental System\\\\car\\\\app\\\\components\\\\Admin\\\\page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\components\\Admin\\page.jsx","default")},9019:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>s,metadata:()=>i});var t=a(62740);a(82704);var n=a(2654);a(89409);let i={title:"Car Rental System",icons:{icon:"/images/icons/favicon.png"}};function s({children:e}){return(0,t.jsx)("html",{lang:"en",children:(0,t.jsx)("body",{children:(0,t.jsx)(n.GoogleOAuthProvider,{clientId:process.env.GOOGLE_CLIENT_ID,children:e})})})}},82704:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[989,36,597,332],()=>a(99997));module.exports=t})();