(this["webpackJsonpairline-manager"]=this["webpackJsonpairline-manager"]||[]).push([[9],{209:function(e,a,n){},243:function(e,a,n){"use strict";n.r(a);var t=n(12),c=n(20),r=n(0),s=n(259),i=n(262),l=n(260),d=n(165),o=n(164),j=n(248),b=n(261),u=n(244),h=n(253),O=n(159),p=n(251),f=n(252),v=n(258),g=n(250),x=n(23),m=n(28),_=n(11),k=(n(209),n(3));a.default=function(e){var a=e.seatingCapacity,n=Object(r.useState)(!1),C=Object(c.a)(n,2),w=C[0],I=C[1],y=Object(x.b)(),z=Object(_.f)(a),S=[];z.forEach((function(e){return _.g.forEach((function(a){return S.push("".concat(e).concat(a))}))}));var q=Object(x.c)((function(e){var a;return null===(a=e.roles)||void 0===a?void 0:a.selectedRole}))===_.a,N=Object(x.c)((function(e){var a;return null===e||void 0===e||null===(a=e.flights)||void 0===a?void 0:a.currentBooking})),A=N.id,P=N.flightId,W=N.seat_no,B=N.passenger_name,E=N.checkedIn,J=N.wheel_chair_required,D=N.withInfant,R=N.passport_number,T=N.address,U=N.ancillary_services,V=Object(r.useState)({passenger_name:B,flightId:P,seat_no:W,checkedIn:E,wheel_chair_required:J,withInfant:D,passport_number:R,address:T,ancillary_services:U}),F=Object(c.a)(V,2),G=F[0],H=F[1];return N?Object(k.jsxs)(s.a,{className:"info-card",children:[Object(k.jsxs)(l.a,{children:[Object(k.jsx)(o.a,{variant:"h6",color:"text.primary",gutterBottom:!0,children:"Passenger information"}),Object(k.jsxs)("div",{className:"info-grid",children:[Object(k.jsx)("span",{children:"Passenger name"}),Object(k.jsx)(j.a,{size:"small",variant:"standard",value:G.passenger_name,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{passenger_name:e.target.value}))},disabled:!q||A&&!w}),Object(k.jsx)("span",{children:"Passport number"}),Object(k.jsx)(j.a,{size:"small",variant:"standard",value:G.passport_number,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{passport_number:e.target.value}))},disabled:!q||A&&!w}),Object(k.jsx)("span",{children:"Address"}),Object(k.jsx)(j.a,{size:"small",variant:"standard",value:G.address,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{address:e.target.value}))},disabled:!q||A&&!w}),Object(k.jsx)(j.a,{className:"span-two-cols",select:!0,autoComplete:"on",multiple:!1,label:"Seat number",value:G.seat_no,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{seat_no:e.target.value}))},helperText:"Choose preferred seat",disabled:A&&!w,children:S.map((function(e){return Object(k.jsx)(f.a,{value:e,children:e},e)}))}),Object(k.jsx)("span",{children:"Checked In "}),Object(k.jsx)(b.a,{checked:G.checkedIn,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{checkedIn:e.target.checked}))},disabled:A&&!w}),Object(k.jsx)("span",{children:"Wheelchair required"}),Object(k.jsx)(b.a,{checked:G.wheel_chair_required,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{wheel_chair_required:e.target.checked}))},disabled:A&&!w}),Object(k.jsx)("span",{children:"With infant "}),Object(k.jsx)(b.a,{checked:G.withInfant,onChange:function(e){return H(Object(t.a)(Object(t.a)({},G),{},{withInfant:e.target.checked}))},disabled:A&&!w}),Object(k.jsxs)(v.a,{className:"span-two-cols",disabled:!q||A&&!w,children:[Object(k.jsx)(g.a,{id:"ancillary-service-label",children:"Ancillary Services"}),Object(k.jsx)(u.a,{labelId:"ancillary-service-label",multiple:!0,value:G.ancillary_services,onChange:function(e){var a=e.target.value;H(Object(t.a)(Object(t.a)({},G),{},{ancillary_services:a}))},input:Object(k.jsx)(p.a,{label:"Ancillary Services"}),renderValue:function(e){return Object(k.jsx)(O.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(k.jsx)(h.a,{label:e},e)}))})},children:_.e.map((function(e){return Object(k.jsx)(f.a,{value:e,children:e},e)}))})]})]})]}),Object(k.jsxs)(i.a,{children:[!w&&A&&Object(k.jsx)(d.a,{variant:"outlined",size:"small",onClick:function(){return I(!w)},children:"Update booking"}),w&&Object(k.jsx)(d.a,{variant:"outlined",size:"small",onClick:function(){I(!w),y(Object(m.j)(G,A,P))},children:"Save booking"}),!A&&Object(k.jsx)(d.a,{variant:"outlined",size:"small",onClick:function(){return y(Object(m.a)(G))},children:"Add booking"}),A&&q&&Object(k.jsx)(d.a,{variant:"outlined",size:"small",onClick:function(){return y(Object(m.d)(A,P))},children:"Delete booking"})]})]}):Object(k.jsx)("h6",{children:"No bookings found"})}}}]);
//# sourceMappingURL=9.8dcd4783.chunk.js.map