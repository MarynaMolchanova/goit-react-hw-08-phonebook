"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[516],{4516:function(n,e,r){r.r(e),r.d(e,{default:function(){return In}});var t,o,i,a,l,c,s,d,u,x,p,f,b,m,g,h,Z,v,w,k,j,y,P,C,I=r(2791),_=r(9434),z=r(5036),L=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},M=r(168),N=r(8789),W=N.ZP.div(t||(t=(0,M.Z)(["\n  text-align: center;\n  padding: 15px;\n\n  @media screen and (min-width: 426px) {\n    padding: 32px;\n  }\n"]))),q=N.ZP.h1(o||(o=(0,M.Z)(["\n  margin-bottom: 15px;\n  font-size: 32px;\n  background: -webkit-linear-gradient(#0cf, #5a5a5a);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  @media screen and (min-width: 426px) {\n    margin-bottom: 25px;\n    font-size: 52px;\n  }\n"]))),A=N.ZP.h2(i||(i=(0,M.Z)(["\n  margin-bottom: 15px;\n  font-size: 22px;\n  background: -webkit-linear-gradient(#438dff, #2f2f2f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  @media screen and (min-width: 426px) {\n    margin-bottom: 25px;\n    font-size: 30px;\n  }\n"]))),D=r(5861),E=r(4687),O=r.n(E),R=r(5463),T=r(1333),U=r(9126),J=N.ZP.form(a||(a=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  align-items: center;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 25px;\n  max-width: 250px;\n\n  @media screen and (min-width: 426px) {\n    max-width: 450px;\n  }\n"]))),X=N.ZP.h2(l||(l=(0,M.Z)(["\n  font-size: 22px;\n  background: -webkit-linear-gradient(#438dff, #2f2f2f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n\n  @media screen and (min-width: 426px) {\n    font-size: 30px;\n  }\n"]))),$=(0,N.ZP)(T.Z)(c||(c=(0,M.Z)(["\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: border 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2196f3;\n    outline: rgba(0, 0, 0, 0);\n  }\n"]))),B=N.ZP.button(s||(s=(0,M.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2196f3;\n    color: #ebf4f8;\n    background-color: #002359c4;\n  }\n"]))),G=(0,N.ZP)(U.UZE)(d||(d=(0,M.Z)(["\n  margin-left: 10px;\n"]))),H=r(3329),K=function(){var n=(0,_.v9)(L),e=(0,_.I0)(),r=function(){var r=(0,D.Z)(O().mark((function r(t){var o,i;return O().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),o=t.target.elements.name.value,i=t.target.elements.number.value,n.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))){r.next=11;break}return r.next=7,e((0,z.el)({name:o,number:i}));case 7:r.sent.error?(0,R.I3)():((0,R.TL)(o),t.target.reset()),r.next=12;break;case 11:(0,R.ZZ)(o);case 12:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,H.jsxs)(J,{onSubmit:r,children:[(0,H.jsx)(X,{children:"Add your contacts"}),(0,H.jsx)($,{id:"name",type:"text",label:"Name",autoFocus:!0,required:!0,fullWidth:!0}),(0,H.jsx)($,{id:"number",type:"tel",label:"Number",required:!0,fullWidth:!0}),(0,H.jsxs)(B,{type:"submit",children:["Add contact",(0,H.jsx)(G,{})]})]})},Q=r(6916),V=function(n){return n.filter},Y=(0,Q.P1)([L,V],(function(n,e){var r=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),nn=r(5653),en=N.ZP.div(u||(u=(0,M.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n"]))),rn=N.ZP.label(x||(x=(0,M.Z)(["\n  font-weight: bold;\n  color: #002359c4;\n"]))),tn=N.ZP.input(p||(p=(0,M.Z)(["\n  padding: 5px;\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: border 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2196f3;\n    outline: rgba(0, 0, 0, 0);\n  }\n"]))),on=function(){var n=(0,_.v9)(V),e=(0,_.I0)();return(0,H.jsxs)(en,{children:[(0,H.jsx)(rn,{htmlFor:"filter",children:"Find contacts by name"}),(0,H.jsx)(tn,{id:"filter",name:"filter",type:"text",value:n,onChange:function(n){return function(n){e((0,nn.T)(n))}(n.target.value)}})]})},an=r(854),ln=r(9439),cn=r(6747),sn=r(6907),dn=(0,N.ZP)(cn.Z)(f||(f=(0,M.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n\n  padding: 10px;\n  width: 100%;\n  background-color: #b1cad4;\n  box-shadow: 10px 10px 10px 0px rgb(108, 108, 108);\n  border-radius: 10px;\n  overflow: hidden;\n\n  @media screen and (min-width: 426px) {\n    width: 450px;\n    padding: 25px;\n  }\n"]))),un=N.ZP.form(b||(b=(0,M.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n"]))),xn=N.ZP.button(m||(m=(0,M.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  color: rgba(0, 35, 89, 0.77);\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: #b71111;\n  }\n"]))),pn=(0,N.ZP)(sn.Ivx)(g||(g=(0,M.Z)(["\n  width: 35px;\n  height: 35px;\n"]))),fn=N.ZP.h2(h||(h=(0,M.Z)(["\n  color: rgb(0 35 89 / 77%);\n"]))),bn=(0,N.ZP)(T.Z)(Z||(Z=(0,M.Z)(["\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2196f3;\n    outline: rgba(0, 0, 0, 0);\n  }\n"]))),mn=N.ZP.button(v||(v=(0,M.Z)(["\n  width: 100%;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #2196f3;\n    color: #ebf4f8;\n    background-color: #002359c4;\n  }\n"]))),gn=(0,N.ZP)(U.Ph1)(w||(w=(0,M.Z)(["\n  margin-left: 10px;\n"]))),hn=r(2193),Zn=function(n){var e=n.isOpenModal,r=n.handleCloseModal,t=n.id,o=n.name,i=n.number,a=(0,_.I0)(),l=(0,_.v9)(L),c=(0,I.useState)(o),s=(0,ln.Z)(c,2),d=s[0],u=s[1],x=(0,I.useState)(i),p=(0,ln.Z)(x,2),f=p[0],b=p[1],m=function(){var n=(0,D.Z)(O().mark((function n(e){var c,s,d;return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),c=e.target.elements.name.value,s=e.target.elements.number.value,d=l.some((function(n){return n.name.toLowerCase()===c.toLowerCase()})),o!==c||i!==s){n.next=8;break}(0,R.X7)(),n.next=16;break;case 8:if(!d){n.next=12;break}(0,R.nA)(c),n.next=16;break;case 12:return n.next=14,a((0,z.oU)({id:t,name:c,number:s}));case 14:n.sent.error?(0,R.I3)():(r(),(0,R.$q)());case 16:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(n){"name"===n.target.id?u(n.target.value):"number"===n.target.id&&b(n.target.value)};return(0,H.jsx)(hn.Z,{open:e,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,H.jsx)(dn,{children:(0,H.jsxs)(un,{onSubmit:m,children:[(0,H.jsx)(xn,{type:"button",onClick:r,children:(0,H.jsx)(pn,{})}),(0,H.jsx)(fn,{children:"Redact your contact"}),(0,H.jsx)(bn,{id:"name",type:"text",label:"Name",value:d,onChange:g,autoFocus:!0,fullWidth:!0}),(0,H.jsx)(bn,{id:"number",type:"tel",label:"Number",value:f,onChange:g,fullWidth:!0}),(0,H.jsxs)(mn,{type:"submit",children:["Redact",(0,H.jsx)(gn,{})]})]})})})},vn=N.ZP.li(k||(k=(0,M.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 3vw;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  @media screen and (min-width: 480px) {\n    font-size: 1em;\n  }\n"]))),wn=N.ZP.a(j||(j=(0,M.Z)(["\n  color: blue;\n  transition: color 250ms linear;\n\n  &:hover,\n  &:focus {\n    color: green;\n  }\n"]))),kn=N.ZP.button(y||(y=(0,M.Z)(["\n  padding: 2px 4px;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  background-color: #ebf4f8;\n  color: #002359c4;\n  margin-right: 5px;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #18b711;\n    border-radius: 5px;\n    color: #ebf4f8;\n    background-color: #18b711;\n  }\n"]))),jn=N.ZP.button(P||(P=(0,M.Z)(["\n  padding: 2px 4px;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #487996;\n  border-radius: 5px;\n  background-color: #ebf4f8;\n  color: #002359c4;\n\n  transition: all 250ms linear;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #ca0505;\n    color: #ebf4f8;\n    background-color: #b71111;\n  }\n"]))),yn=function(n){var e=n.id,r=n.name,t=n.number,o=(0,I.useState)(!1),i=(0,ln.Z)(o,2),a=i[0],l=i[1],c=(0,_.I0)(),s=function(){var n=(0,D.Z)(O().mark((function n(){return O().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c((0,z._f)(e));case 2:n.sent.error?(0,R.I3)():(0,R.fJ)(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(vn,{children:[(0,H.jsx)(wn,{href:"tel:{number}",children:(0,H.jsx)(U.SPk,{})}),(0,H.jsxs)("p",{children:[r,": ",t]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(kn,{type:"button",onClick:function(){return l(!0)},children:(0,H.jsx)(U.Ph1,{})}),(0,H.jsx)(jn,{type:"button",onClick:s,children:"Delete"})]})]}),a&&(0,H.jsx)(Zn,{isOpenModal:a,handleCloseModal:function(){return l(!1)},id:e,name:r,number:t})]})},Pn=N.ZP.ul(C||(C=(0,M.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 500px;\n  padding: 8px;\n\n  background-color: #ebf4f8;\n  box-shadow: 10px 10px 10px 0px rgb(108, 108, 108);\n  border-radius: 10px;\n  overflow: hidden;\n"]))),Cn=function(){var n=(0,_.v9)(Y);return(0,H.jsx)(Pn,{children:n.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,H.jsx)(yn,{id:e,name:r,number:t},e)}))})},In=function(){var n=(0,_.I0)(),e=(0,_.v9)(L),r=(0,_.v9)(F),t=(0,_.v9)(S);return(0,I.useEffect)((function(){n((0,z.yF)())}),[n]),(0,H.jsxs)(W,{children:[(0,H.jsx)(q,{children:"Phonebook"}),(0,H.jsx)(K,{}),(0,H.jsx)(A,{children:"Contacts"}),e.length>0&&(0,H.jsx)(on,{}),r&&!t&&(0,H.jsx)(an.a,{}),e.length>0&&(0,H.jsx)(Cn,{})]})}}}]);
//# sourceMappingURL=516.5c8514fa.chunk.js.map