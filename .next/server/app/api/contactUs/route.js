(()=>{var e={};e.id=70,e.ids=[70],e.modules={28303:e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=28303,e.exports=r},58803:e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id=58803,e.exports=r},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},19771:e=>{"use strict";e.exports=require("process")},27910:e=>{"use strict";e.exports=require("stream")},41204:e=>{"use strict";e.exports=require("string_decoder")},66136:e=>{"use strict";e.exports=require("timers")},34631:e=>{"use strict";e.exports=require("tls")},83997:e=>{"use strict";e.exports=require("tty")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},92229:()=>{},50487:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>d,serverHooks:()=>y,workAsyncStorage:()=>T,workUnitAsyncStorage:()=>x});var s={};t.r(s),t.d(s,{POST:()=>E});var o=t(42706),i=t(28203),n=t(45994),a=t(39187),u=t(77660),c=t.n(u),l=t(98629);let p=c().define("contactus_feedback",{C_id:{type:l.wD.INTEGER,primaryKey:!0,autoIncrement:!0},email:{type:l.wD.STRING,allowNull:!1},phone:{type:l.wD.STRING,allowNull:!1},message:{type:l.wD.TEXT,allowNull:!1},LoggedUsername:{type:l.wD.STRING,allowNull:!1},LoggedEmail:{type:l.wD.STRING,allowNull:!1}},{timestamps:!0});async function E(e){try{let{email:r,phone:t,message:s,LoggedUsername:o,LoggedEmail:i}=await e.json(),n=await p.create({email:r,phone:t,message:s,LoggedUsername:o,LoggedEmail:i});return a.NextResponse.json({message:"Feedback submitted successfully"},{status:200,feedback:n})}catch(e){return console.error("Error processing request:",e),a.NextResponse.json({message:"Error submitting feedback"},{status:500})}}c().sync().then(()=>console.log("Database synced successfully")).catch(e=>console.error("Error synchronizing the database:",e));let d=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/contactUs/route",pathname:"/api/contactUs",filename:"route",bundlePath:"app/api/contactUs/route"},resolvedPagePath:"C:\\Users\\r9025\\OneDrive\\Desktop\\Car Rental System\\car\\app\\api\\contactUs\\route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:T,workUnitAsyncStorage:x,serverHooks:y}=d;function m(){return(0,n.patchFetch)({workAsyncStorage:T,workUnitAsyncStorage:x})}},96487:()=>{},78335:()=>{},77660:(e,r,t)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});let s=new(t(13392)).Sequelize(process.env.DB_NAME,process.env.USER_DB,process.env.PASS_DB,{host:process.env.HOST,dialect:"mysql",dialectModule:t(85453),timezone:"+05:30"});e.exports=s},98629:(e,r,t)=>{"use strict";t.d(r,{wD:()=>o});var s=t(13392);let o=s.Sequelize;s.fn,s.col,s.cast,s.literal,s.and,s.or,s.json,s.where,s.QueryInterface,s.ABSTRACT,s.STRING,s.CHAR,s.TEXT,s.NUMBER,s.TINYINT,s.SMALLINT,s.MEDIUMINT,s.INTEGER,s.BIGINT,s.FLOAT,s.TIME,s.DATE,s.DATEONLY,s.BOOLEAN,s.NOW,s.BLOB,s.DECIMAL,s.NUMERIC,s.UUID,s.UUIDV1,s.UUIDV4,s.HSTORE,s.JSON,s.JSONB,s.VIRTUAL,s.ARRAY,s.ENUM,s.RANGE,s.REAL,s.DOUBLE,s.GEOMETRY,s.GEOGRAPHY,s.CIDR,s.INET,s.MACADDR,s.CITEXT,s.TSVECTOR,s.Model,s.Transaction,s.Association,s.BelongsTo,s.HasOne,s.HasMany,s.BelongsToMany,s.BaseError,s.AggregateError,s.AsyncQueueError,s.AssociationError,s.BulkRecordError,s.ConnectionError,s.DatabaseError,s.EagerLoadingError,s.EmptyResultError,s.InstanceError,s.OptimisticLockError,s.QueryError,s.SequelizeScopeError,s.ValidationError,s.ValidationErrorItem,s.AccessDeniedError,s.ConnectionAcquireTimeoutError,s.ConnectionRefusedError,s.ConnectionTimedOutError,s.HostNotFoundError,s.HostNotReachableError,s.InvalidConnectionError,s.ExclusionConstraintError,s.ForeignKeyConstraintError,s.TimeoutError,s.UnknownConstraintError,s.UniqueConstraintError,s.Error,s.useInflection,s.Utils,s.QueryTypes,s.Op,s.TableHints,s.IndexHints,s.DataTypes,s.Deferrable,s.Validator,s.ValidationErrorItemOrigin,s.ValidationErrorItemType}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[989,476],()=>t(50487));module.exports=s})();