(this["webpackJsonpphoto-search"]=this["webpackJsonpphoto-search"]||[]).push([[0],{89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),c=a.n(r),i=a(9),s=a.n(i),o=a(127),u=a(59),l=a(128),p=a(15),j=a.n(p),d=a(23),b=a(17),h=a(124),f=a(93),m=a(130),x=a(125),O=a(126),g=a(131),v=a(54),y=a.n(v).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 3f9eb3bd8cf6c3974faefb4f67101b6d98e92952e6fc9fa1d755fa1c6b15443c"}}),k=function(){var e=Object(d.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/search/photos",{params:{query:t,page:a}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/photos/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=a(91),S=a(132),P=a(115),B=Object(g.a)((function(){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",marginTop:20},input:{marginLeft:4,flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),N=function(e){var t=e.onSubmit,a=B(),c=Object(r.useState)(""),i=Object(b.a)(c,2),s=i[0],o=i[1];return Object(n.jsxs)(C.a,{component:"form",className:a.root,onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(n.jsx)(S.a,{className:a.input,placeholder:"Input keyword",inputProps:{"aria-label":"search images"},onChange:function(e){return o(e.target.value)}}),Object(n.jsx)(m.a,{type:"submit",className:a.iconButton,"aria-label":"search",children:Object(n.jsx)(P.a,{})})]})},I=a(116),T=a(117),z=a(133),F=Object(g.a)((function(){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"transparent"},gridList:{width:"100%",height:"100%",background:"transparent"}}})),L=function(e){var t=e.images,a=e.onClickTile,r=F(),c=Object(I.a)("(min-width: 768px)");return Object(n.jsx)("div",{className:r.root,children:Object(n.jsx)(T.a,{cellHeight:450,cols:c?6:2,spacing:4,children:t.map((function(e){return Object(n.jsx)(z.a,{cols:(t=e.width,r=e.height,t<r?1:Math.ceil(t/r)),onClick:function(){return a(e.id)},children:Object(n.jsx)("img",{src:e.urls.thumb,alt:e.description})},e.id);var t,r}))})})},W=a(129),H=a(118),q=a(94),A=a(119),D=a(120),J=a(121),U=a(122),_=a(123),M=Object(g.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},modalImageWrap:{maxHeight:"90vh",maxWidth:"90vw","& img":{width:"100%",maxHeight:"80vh"},position:"relative"},closeButton:{position:"absolute",top:10,right:10}}})),R=function(e){var t=e.image,a=e.open,r=e.handleClose,c=M();return Object(n.jsx)(n.Fragment,{children:null===t?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)(W.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:c.modal,open:a,onClose:r,closeAfterTransition:!0,BackdropComponent:H.a,BackdropProps:{timeout:500},children:Object(n.jsx)(q.a,{in:a,children:Object(n.jsxs)(A.a,{className:c.modalImageWrap,children:[Object(n.jsx)(D.a,{component:"img",alt:t.description,image:t.urls.regular}),Object(n.jsx)(J.a,{children:Object(n.jsxs)(U.a,{href:t.links.html,color:"textPrimary",target:"_blank",referrerPolicy:"no-referrer",children:["Photo by ",t.user.name,", Unsplash"]})}),Object(n.jsx)(m.a,{className:c.closeButton,onClick:r,size:"medium",color:"secondary",children:Object(n.jsx)(_.a,{})})]})})})})},E=(a(89),Object(g.a)((function(e){return{root:{background:e.palette.background.paper,paddingTop:24},optionBar:{display:"flex",justifyContent:"space-evenly",marginTop:50,alignItems:"center"}}}))),G=function(){var e=E(),t=Object(r.useState)([]),a=Object(b.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)(""),o=Object(b.a)(s,2),u=o[0],l=o[1],p=Object(r.useState)(0),g=Object(b.a)(p,2),v=g[0],y=g[1],C=Object(r.useState)(0),S=Object(b.a)(C,2),P=S[0],B=S[1],I=Object(r.useState)(null),T=Object(b.a)(I,2),z=T[0],F=T[1],W=Object(r.useState)(!1),H=Object(b.a)(W,2),q=H[0],A=H[1],D=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t,1);case 2:a=e.sent,n=a.data,i(n.results),l(t),y(1),B(n.total_pages);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<1||t>P)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k(u,t);case 4:a=e.sent,n=a.data,i(n.results),y(t);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a=e.sent,n=a.data,F(n),A(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(h.a,{className:e.root,children:[Object(n.jsx)(f.a,{variant:"h4",color:"textPrimary",children:"Let's Search Beautiful Photos!"}),Object(n.jsx)(N,{onSubmit:D}),Object(n.jsxs)("div",{className:e.optionBar,children:[Object(n.jsxs)(f.a,{variant:"h6",color:"textPrimary",children:["Showing ",c.length," images"]}),Object(n.jsxs)(f.a,{variant:"h6",color:"textPrimary",children:["Page ",v," / ",P]}),Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a,{color:"primary",onClick:function(){J(v-1)},children:Object(n.jsx)(x.a,{fontSize:"large"})}),Object(n.jsx)(m.a,{color:"primary",onClick:function(){J(v+1)},children:Object(n.jsx)(O.a,{fontSize:"large"})})]})]}),Object(n.jsx)(L,{images:c,onClickTile:U}),Object(n.jsx)(R,{image:z,open:q,handleClose:function(){F(null),A(!1)}})]})},K=Object(u.a)({palette:{type:"dark"}});s.a.render(Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)(l.b,{injectFirst:!0,children:Object(n.jsx)(o.a,{theme:K,children:Object(n.jsx)(G,{})})})}),document.querySelector("#root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.64b0e3b9.chunk.js.map