(this.webpackJsonptransportvehicle=this.webpackJsonptransportvehicle||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(9),o=a.n(r),c=(a(90),a(50)),s=(a(91),a(71)),i=a.n(s),m=a(141),p=a(83),u=(a(108),a(142)),d=a(54),E=a.n(d),h=function(e){var t=Object(l.useState)(),a=Object(c.a)(t,2),r=(a[0],a[1],Object(l.useState)()),o=Object(c.a)(r,2),s=o[0],d=o[1],h=Object(l.useState)(),g=Object(c.a)(h,2);g[0],g[1];return Object(l.useEffect)((function(){i.a.post("http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36",{clientId:10,dataRecord:{userRoleId:4,userRoleName:"COMPANY",userId:10},fromDate:1577888571659,toDate:1593613371659,tripId:36}).then((function(e){d(e.data),console.log(e.data)})).then((function(e){})).catch((function(e){console.log(e)}))}),[]),Object(l.useEffect)((function(){})),n.a.createElement("div",null,console.log("========="),console.log(s),n.a.createElement("div",{className:"top_header"},n.a.createElement("div",null,n.a.createElement("h3",{style:{margin:"0px"}},"Trip Summary"),n.a.createElement("span",{style:{color:"blue"}},"dashboard ")," / ",n.a.createElement("span",null," Trip Summary")),n.a.createElement("div",null,n.a.createElement("div",{className:"date_from_to"},n.a.createElement(m.a,{onChange:function(e,t){var a=new Date(t).getTime();console.log("Start Date"+t),console.log("Start Time"+a)},className:"mr-10"})," TO ",n.a.createElement(m.a,{onChange:function(e,t){var a=new Date(t).getTime();console.log("Start Date"+t),console.log("Start Time"+a)},className:"mr-10"})))),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{style:{display:"flex",marginRight:"5px",marginBottom:"5px"}},n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_one"},s&&s.data?n.a.createElement("span",null,s.data.vehicleNo):null),n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_two"},"Total Trips :",s&&s.data?n.a.createElement("span",null," ",s.data.totalTrips):null),n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_three"},s&&s.data?n.a.createElement("span",null," ",s.data.totalKm," KM"):null)),n.a.createElement("div",{style:{display:"flex",marginRight:"5px"}},n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_four"},"Trip Time: ",s&&s.data?n.a.createElement("span",null,Math.floor(s.data.totalTripTime/36e5%24)>0?n.a.createElement("span",null,Math.floor(s.data.totalTripTime/36e5%24)," hrs "):null,Math.floor(s.data.totalTripTime/6e4%60)>0?n.a.createElement("span",null," ",Math.floor(s.data.totalTripTime/6e4%60)," Min"):null):null),n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_five"},"Trip Time: ",s&&s.data?n.a.createElement("span",null,Math.floor(s.data.totalTime/36e5%24)>0?n.a.createElement("span",null,Math.floor(s.data.totalTime/36e5%24)," hrs "):null,Math.floor(s.data.totalTime/6e4%60)>0?n.a.createElement("span",null," ",Math.floor(s.data.totalTime/6e4%60)," Min"):null):null),n.a.createElement(p.a,{icon:n.a.createElement(u.a,null),color:"success",className:"box_top box_six"},"Total EXP : ",s&&s.data?n.a.createElement("span",null,"Rs. ",s.data.totalExpences):null)))),s&&s.data&&s.data.tripDetails&&s.data.tripDetails.length>0?s.data.tripDetails.map((function(e,t){var a=s.data.tripDetails[t].startDay,l=s.data.tripDetails[t].endDay-a;return n.a.createElement("div",{style:{marginTop:"10px",paddingBottom:"10px",backgroundColor:"white"}},n.a.createElement("div",{style:{height:"40px",backgroundColor:"#02023c",color:"white",display:"flex",alignItems:"center",paddingLeft:"10px"}},"Date : \xa0 ",s&&s.data&&s.data.tripDetails&&s.data.tripDetails.length>0?n.a.createElement("span",null,new Date(parseInt(s.data.tripDetails[t].startDay)).toLocaleString().split(",")[0],"\xa0 at ",new Date(parseInt(s.data.tripDetails[t].startDay)).toLocaleString().split(",")[1]," \xa0",new Date(parseInt(s.data.tripDetails[t].endDay)).toLocaleString().split(",")[0],"\xa0 at ",new Date(parseInt(s.data.tripDetails[t].endDay)).toLocaleString().split(",")[1]):null,"\xa0 (",Math.floor(l/36e5%24)>0?n.a.createElement("span",null,Math.floor(l/36e5%24)," hrs \xa0"):null,Math.floor(l/6e4%60)>0?n.a.createElement("span",null,Math.floor(l/6e4%60)," Minutes \xa0"):n.a.createElement("span",null,"00 Minutes"),")"),n.a.createElement("div",{style:{margin:"10px"}},n.a.createElement("table",{className:"trip_table"},n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Trip Start node to End Node"),n.a.createElement("th",null,"river Name"),n.a.createElement("th",null,"Trip Expenses"),n.a.createElement("th",null,"Trip Km"),n.a.createElement("th",null,"Trip GPS Km"),n.a.createElement("th",null,"Trip Time"),n.a.createElement("th",null,"Odometer Reading"),n.a.createElement("th",null,"Action")),n.a.createElement("tbody",null,e.tripLists&&e.tripLists.length>0?e.tripLists.map((function(e,t){var a=e.tripRunningTime,l=(parseInt(a%1e3/100),Math.floor(a/1e3%60),Math.floor(a/6e4%60)),r=Math.floor(a/36e5%24);return n.a.createElement("tr",null,n.a.createElement("td",null,t+1),n.a.createElement("td",null,e.startPointNode,"  ",n.a.createElement("img",{src:E.a,height:"20px",width:"20px",style:{marginLeft:"10px",marginRight:"10px"}}),e.endPointNode),n.a.createElement("td",null,e.driverName),n.a.createElement("td",null,e.tripExpenses&&e.tripExpenses.length>0?n.a.createElement("span",null,"Rs. ",e.tripExpenses[t].amount):n.a.createElement("span",null,"Rs. 0")),n.a.createElement("td",null,e.totalKm," Km"),n.a.createElement("td",null,e.gpsDistance," Km"),n.a.createElement("td",null,r>0?n.a.createElement("span",null,r+" hrs "):null,l>0?n.a.createElement("span",null,l+" min"):null),n.a.createElement("td",{style:{textAlign:"center"}},e.startODOMeter," ",n.a.createElement("img",{src:E.a,height:"20px",width:"20px",style:{marginLeft:"10px",marginRight:"10px"}})," ",e.endODOMeter),n.a.createElement("td",{style:{textAlign:"center"}},n.a.createElement("div",null,n.a.createElement("button",{style:{marginRight:"5px"},className:"tbl_btn"},"Movement Report"),n.a.createElement("button",{className:"tbl_btn"},"Stoppage Report"))))})):null))))})):n.a.createElement("div",null,"Error"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABSUlEQVRIie3TsUrDQBzH8d/FxDZTDE0yCWq6uGlxKHZqdsHFuvgUnQRd8ga+RKc6Cm7avEHdnJIugpBLcbRNQ+MghRJCvYTLgdDvcpDj8uH+cMC2/9Tl/fNdrz9Ui5yReMCKotxA01+77qguFAYkybbtloHEY705JxgwzEatadunqaaPWHBucFGcK1wE5w6z4pXALDi5uH06UdX6gBBppyyySOJmp3O+m7dHo+l84vtjCsXxXGe2+i7LCnTLsvYPjw72ysKbMo1GjaRopUHg9fpD5/Hh+huocNTr5Y1dCJyHC4MBICW/K9XMVBhMo+k88IO3CHLXc52ZEDiLAoCcLPAVhuEHpdFn2R+zPKco85xIWWy9K/flvd0+O85DszddVdmoN6GVwX+hlcAsKHeYFeUKF0E5wsvlxA/GrCg3OInjAYXssKLbhPYD/NTIh01yzsEAAAAASUVORK5CYII="},85:function(e,t,a){e.exports=a(138)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.d92fad0f.chunk.js.map