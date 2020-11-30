(this["webpackJsonpphoto-search"]=this["webpackJsonpphoto-search"]||[]).push([[0],{89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n.n(r),i=n(10),o=n.n(i),s=n(128),l=n(59),u=n(129),j=n(12),d=n(125),b=n(93),p=n(131),h=n(126),f=n(127),m=n(132),O=n(91),g=n(133),x=n(115),v=Object(m.a)((function(){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",width:"100%",marginTop:20},input:{marginLeft:4,flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),y=function(e){var t=e.onSubmit,n=v(),c=Object(r.useState)(""),i=Object(j.a)(c,2),o=i[0],s=i[1];return Object(a.jsxs)(O.a,{component:"form",className:n.root,onSubmit:function(e){e.preventDefault(),t(o)},children:[Object(a.jsx)(g.a,{className:n.input,placeholder:"Input keyword",inputProps:{"aria-label":"search images"},onChange:function(e){return s(e.target.value)}}),Object(a.jsx)(p.a,{type:"submit",className:n.iconButton,"aria-label":"search",children:Object(a.jsx)(x.a,{})})]})},k=n(116),w=n(117),C=n(118),S=n(134),N=Object(m.a)((function(){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"transparent"},gridList:{width:"100%",height:"100%",background:"transparent"},loadingWrap:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, 0.58)"}}})),B=function(e){var t=e.images,n=e.onClickTile,r=e.isLoading,c=N(),i=Object(k.a)("(min-width: 768px)");return Object(a.jsx)("div",{className:c.root,children:r?Object(a.jsx)("div",{className:c.loadingWrap,children:Object(a.jsx)(w.a,{size:400,color:"secondary"})}):Object(a.jsx)(C.a,{cellHeight:450,cols:i?6:2,spacing:4,children:t.map((function(e){return Object(a.jsx)(S.a,{cols:(t=e.width,r=e.height,t<r?1:Math.ceil(t/r)),onClick:function(){return n(e.id)},children:Object(a.jsx)("img",{src:e.urls.thumb,alt:e.description})},e.id);var t,r}))})})},I=n(130),P=n(119),L=n(94),T=n(120),W=n(121),z=n(122),F=n(123),H=n(124),q=Object(m.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},modalImageWrap:{maxHeight:"90vh",maxWidth:"90vw","& img":{width:"100%",maxHeight:"80vh"},position:"relative"},closeButton:{position:"absolute",top:10,right:10},loadingWrap:{position:"absolute",top:0,left:0,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0, 0, 0, 0.58)"}}})),A=function(e){var t=e.image,n=e.open,r=e.handleClose,c=e.isLoading,i=q();return t?Object(a.jsx)(a.Fragment,{children:c?Object(a.jsx)("div",{className:i.loadingWrap,children:Object(a.jsx)(w.a,{size:400,color:"secondary"})}):Object(a.jsx)(I.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:i.modal,open:n,onClose:r,closeAfterTransition:!0,BackdropComponent:P.a,BackdropProps:{timeout:500},children:Object(a.jsx)(L.a,{in:n,children:Object(a.jsxs)(T.a,{className:i.modalImageWrap,children:[Object(a.jsx)(W.a,{component:"img",alt:t.description,image:t.urls.regular}),Object(a.jsx)(z.a,{children:Object(a.jsxs)(F.a,{href:t.links.html,color:"textPrimary",target:"_blank",referrerPolicy:"no-referrer",children:["Photo by ",t.user.name,", Unsplash"]})}),Object(a.jsx)(p.a,{className:i.closeButton,onClick:r,size:"medium",color:"secondary",children:Object(a.jsx)(H.a,{})})]})})})}):Object(a.jsx)(a.Fragment,{})},D=n(17),E=n.n(D),J=n(27),U=n(58),_=n.n(U).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 3f9eb3bd8cf6c3974faefb4f67101b6d98e92952e6fc9fa1d755fa1c6b15443c"}}),M=function(){var e=Object(J.a)(E.a.mark((function e(t,n){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/search/photos",{params:{query:t,page:n}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(J.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.get("/photos/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=(n(89),Object(m.a)((function(e){return{root:{background:e.palette.background.paper,paddingTop:24},optionBar:{display:"flex",justifyContent:"space-evenly",marginTop:50,alignItems:"center"}}}))),K=function(){var e=G(),t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(0),s=Object(j.a)(o,2),l=s[0],u=s[1],m=Object(r.useState)(null),O=Object(j.a)(m,2),g=O[0],x=O[1],v=Object(r.useState)(!1),k=Object(j.a)(v,2),w=k[0],C=k[1],S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(r.useState)(!1),a=Object(j.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)([]),s=Object(j.a)(o,2),l=s[0],u=s[1],d=Object(r.useState)(0),b=Object(j.a)(d,2),p=b[0],h=b[1];return Object(r.useEffect)((function(){!function(){var e=Object(J.a)(E.a.mark((function e(t,n){var a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,M(t,n);case 3:a=e.sent,r=a.data,setTimeout((function(){u(r.results),h(r.total_pages),i(!1)}),2e3);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()(e,t)}),[e,t]),e&&t?[l,p,c]:[[],0,!1]}(c,l),N=Object(j.a)(S,3),I=N[0],P=N[1],L=N[2],T=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(null),o=Object(j.a)(i,2),s=o[0],l=o[1];return Object(r.useEffect)((function(){!function(){var e=Object(J.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,R(t);case 5:n=e.sent,a=n.data,setTimeout((function(){console.log(a),l(a),c(!1)}),1e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e)}),[e]),e?[s,a]:[null,!1]}(g),W=Object(j.a)(T,2),z=W[0],F=W[1],H=function(e){e<1||e>P||u(e)};return Object(a.jsxs)(d.a,{className:e.root,children:[Object(a.jsx)(b.a,{variant:"h4",color:"textPrimary",children:"Let's Search Beautiful Photos!"}),Object(a.jsx)(y,{onSubmit:function(e){i(e),u(1)}}),Object(a.jsxs)("div",{className:e.optionBar,children:[Object(a.jsxs)(b.a,{variant:"h6",color:"textPrimary",children:["Page ",l," / ",P]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(p.a,{color:"primary",onClick:function(){H(l-1)},children:Object(a.jsx)(h.a,{fontSize:"large"})}),Object(a.jsx)(p.a,{color:"primary",onClick:function(){H(l+1)},children:Object(a.jsx)(f.a,{fontSize:"large"})})]})]}),Object(a.jsx)(B,{images:I,onClickTile:function(e){x(e),C(!0)},isLoading:L}),Object(a.jsx)(A,{image:z,open:w,handleClose:function(){x(""),C(!1)},isLoading:F})]})},Q=Object(l.a)({palette:{type:"dark"}});o.a.render(Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(u.b,{injectFirst:!0,children:Object(a.jsx)(s.a,{theme:Q,children:Object(a.jsx)(K,{})})})}),document.querySelector("#root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.55065525.chunk.js.map