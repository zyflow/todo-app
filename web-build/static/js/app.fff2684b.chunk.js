(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{74:function(e,t,n){"use strict";var a=n(19),c=n.n(a),r=n(0),s=n.n(r),o=n(2),i=n(3).a.create({body:{flex:1,backgroundColor:"#efcae0",flexDirection:"column",height:"90%"},container:{backgroundColor:"#b7d9ac",flex:1,padding:20},footer:{backgroundColor:"#8479bf",height:40},bigBlue:{color:"blue",fontWeight:"bold",fontSize:30},mainButton:{backgroundColor:"red",flex:1},list:{margin:10},input:{borderWidth:1,borderColor:"#777",borderRadius:3,padding:3,margin:10,backgroundColor:"#fefefe"},header:{flexDirection:"row",justifyContent:"flex-start"}}),l=n(14),u=n(4);function b(e){var t=e.setCurrentScreen,n=function(e){t(e)};return Object(u.jsxs)(o.a,{style:i.header,children:[Object(u.jsx)(l.a,{id:"daily",onPress:function(){return n("daily")},title:"Daily todo",accessibilityLabel:"Daily todo"}),Object(u.jsx)(l.a,{onPress:function(){return n("weekly")},title:"Weekly todo",accessibilityLabel:"Daily todo"}),Object(u.jsx)(l.a,{onPress:function(){return n("ultimate")},title:"Ultimate goal",accessibilityLabel:"Daily todo"})]})}var j=n(67),d=n.n(j),f=n(15),y=n.n(f),O=n(34),x=n(8),h=n(33),p=n(22),m=function(){var e=Object(r.useState)(["FIrst"]),t=c()(e,2),n=t[0],a=t[1],b=s.a.useState("Init"),j=c()(b,2),f=j[0],m=j[1],g=Object(r.useState)([]),k=c()(g,2),v=(k[0],k[1]);Object(r.useEffect)((function(){!function(){var e,t;y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.awrap(fetch("https://the-very-mine-todo-app.herokuapp.com/list"));case 3:return e=n.sent,n.next=6,y.a.awrap(e.json());case 6:t=n.sent,v(t),a(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("ERROR",n.t0);case 14:case"end":return n.stop()}}),null,null,[[0,11]],Promise)}()}),[]);n.map((function(e){return Object(u.jsxs)(x.a,{children:[" - ",e]})}));console.log("data",Platform.OS);var w=function(){p.a.show("Item saved",p.a.SHORT)};return Object(u.jsxs)(o.a,{style:i.body,children:[Object(u.jsxs)(o.a,{style:i.container,children:[Object(u.jsx)(x.a,{children:" Weekly TODO:"}),Object(u.jsx)(O.a,{style:i.list,data:n,renderItem:function(e){var t=e.item;return Object(u.jsxs)(x.a,{style:i.item,children:["- ",t]})}}),Object(u.jsx)(x.a,{children:" Add new item "}),Object(u.jsx)(h.a,{style:i.input,value:f,onChangeText:function(e){m(e)}})]}),Object(u.jsx)(o.a,{style:i.footer,children:Object(u.jsx)(l.a,{style:i.mainButton,onPress:function(){a([f].concat(d()(n))),w()},title:"Submit",accessibilityLabel:"Learn more about this purple button"})})]})},g=function(){return Object(u.jsx)(o.a,{style:i.body,children:Object(u.jsx)(o.a,{style:i.container,children:Object(u.jsx)(x.a,{children:" Daily TODO:"})})})},k=function(){return Object(u.jsx)(o.a,{style:i.body,children:Object(u.jsx)(o.a,{style:i.container,children:Object(u.jsx)(x.a,{children:" Ultimate TODO:"})})})};t.a=function(){var e=Object(r.useState)("weekly"),t=c()(e,2),n=t[0],a=t[1],s=Object(u.jsx)(m,{});switch(n){case"weekly":s=Object(u.jsx)(m,{});break;case"daily":s=Object(u.jsx)(g,{});break;case"ultimate":s=Object(u.jsx)(k,{})}return console.log("currenty",n),Object(u.jsxs)(o.a,{style:i.body,children:[Object(u.jsx)(b,{setCurrentScreen:a}),s]})}},75:function(e,t,n){e.exports=n(102)}},[[75,1,2]]]);
//# sourceMappingURL=app.fff2684b.chunk.js.map