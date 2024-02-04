"use strict";(self.webpackChunktodos_app=self.webpackChunktodos_app||[]).push([[144],{3760:(n,r,t)=>{t.r(r),t.d(r,{default:()=>Dr});var e=t(9060),o=t(4992);const a=n=>n.todos.error;var i,d,c=t(900),p=t(284),l=t(1560),g=t(9760),s=t(4312),b=t(5572);b.cp.button(i||(i=(0,s.c)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 8px;\nwidth: 64px;\nheight: 20px;\npadding: 0;\nfont-weight: 500;\nfont-size: 14px;\nletter-spacing: -0.02em;\ncolor: rgba(255, 255, 255, 0.8);\nborder: none;\ncursor: pointer;\n"]))),b.cp.svg(d||(d=(0,s.c)(["\n    width: 16px;\n    height: 16px;\n"])));var x=t(2496);var u,h,m=t(4832),f=t.n(m);const B={overlay:{backgroundColor:"rgba(78, 74, 72, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},k=b.cp.label(u||(u=(0,s.c)(["\n  display:flex;\n  margin-right: 10px;\n"]))),j=b.cp.div(h||(h=(0,s.c)(["\n  margin-top: 20px;\n"])));f().setAppElement("#modal-root");const w=n=>{let{isModalOpen:r,setIsModalOpen:t}=n;const[o,a]=(0,e.useState)("Without priority"),i=n=>{a(n.target.value)};return(0,x.jsxs)(f(),{isOpen:r,onRequestClose:()=>t(!1),style:B,contentLabel:"onRequestClose",children:[(0,x.jsx)("h1",{children:"Filters"}),(0,x.jsx)("button",{type:"button",onClick:()=>t(!1),children:"X"}),(0,x.jsx)("h2",{children:"Label color"}),(0,x.jsxs)(j,{children:[(0,x.jsxs)(k,{children:[(0,x.jsx)("input",{type:"radio",value:"Without priority",checked:"Without priority"===o,onChange:i}),"Without priority"]}),(0,x.jsxs)(k,{children:[(0,x.jsx)("input",{type:"radio",value:"Low",checked:"Low"===o,onChange:i}),"Low"]}),(0,x.jsxs)(k,{children:[(0,x.jsx)("input",{type:"radio",value:"Medium",checked:"Medium"===o,onChange:i}),"Medium"]}),(0,x.jsxs)(k,{children:[(0,x.jsx)("input",{type:"radio",value:"High",checked:"High"===o,onChange:i}),"High"]})]})]})};var y,v,C,T,M;const I=b.cp.button(y||(y=(0,s.c)(["\n\tposition: absolute;\n\ttop: 14px;\n\tright: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 8px;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\n\t@media screen and (min-width: 768px) {\n\t\ttop: 20px;\n\t\tright: 32px;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\ttop: 14px;\n\t\tright: 24px;\n\t}\n"]))),P=(0,b.cp)(g.c)(v||(v=(0,s.c)(["\n\twidth: 16px;\n\theight: 16px;\n\tstroke: rgba(255, 255, 255, 0.8);\n"]))),S=b.cp.span(C||(C=(0,s.c)(["\n\tcolor: rgba(255, 255, 255, 0.8);\n\tfont-size: 14px;\n\tfont-style: normal;\n\tfont-weight: 500;\n\tline-height: normal;\n\tletter-spacing: -0.28px;\n"]))),A=b.cp.p(T||(T=(0,s.c)(["\n\tmax-width: 100%;\n\twidth: 335px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 292px;\n\tcolor: rgba(255, 255, 255, 0.5);\n\ttext-align: center;\n\tfont-size: 14px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 18px; /* 128.571% */\n\tletter-spacing: -0.28px;\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-top: 408px;\n\t\twidth: 486px;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tmargin-top: 281px;\n\t}\n"]))),z=b.cp.button(M||(M=(0,s.c)(["\n\tborder: none;\n\tbackground-color: transparent;\n\tcolor: #bedbb0;\n\tfont-size: 14px;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tline-height: 18px;\n\tletter-spacing: -0.28px;\n\tcursor: pointer;\n"])));const O=function(n){let{children:r}=n;const[t,o]=(0,e.useState)(!1),{board:a}=(0,l.W4)(null);return(0,e.useEffect)((()=>{console.log("\ud83d\ude80 ~ MainComponent ~ board:",a)}),[a]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(I,{type:"button",onClick:()=>{o(!0)},children:[(0,x.jsx)(P,{name:"filters"}),(0,x.jsx)(S,{children:"Filters"})]}),(0,x.jsx)(w,{isModalOpen:t,setIsModalOpen:o}),r||(0,x.jsxs)(A,{children:["Before starting your project, it is essential"," ",(0,x.jsx)(z,{type:"button",children:"to create a board"})," to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})]})};var L,H,R,E;const F=b.cp.div(L||(L=(0,s.c)(["\n\tmargin-left: auto;\n\tmargin-right: auto;\n\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-template-areas:\n\t\t'h'\n\t\t'm';\n\n\t@media screen and (min-width: 375px) {\n\t\twidth: 375px;\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\twidth: 768px;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 260px auto;\n\t\tgrid-template-areas:\n\t\t\t's h'\n\t\t\t's m';\n\t\twidth: 1440px;\n\t}\n"]))),N=b.cp.aside(H||(H=(0,s.c)(["\n\tgrid-area: s;\n\twidth: 260px;\n\theight: 100vh;\n\tmin-height: 770px;\n\tbackground-color: rgba(18, 18, 18, 1);\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t@media screen and (max-width: 1439px) {\n\t\tdisplay: none;\n\t}\n"]))),q=b.cp.header(R||(R=(0,s.c)(["\n\tgrid-area: h;\n\tmin-width: 320px;\n\theight: 60px;\n\n\t@media screen and (min-width: 768px) {\n\t\theight: 68px;\n\t}\n"]))),U=b.cp.main(E||(E=(0,s.c)(["\n\tposition: relative;\n\tgrid-area: m;\n\tbackground-color: #1f1f1f;\n\tmin-width: 320px;\n\theight: calc(100vh - 60px);\n\n\t@media screen and (min-width: 375px) {\n\t\tmin-height: 702px;\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\tmin-height: 702px;\n\t\tmax-height: calc(100vh - 68px);\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tmin-height: 702px;\n\t}\n"])));f().setAppElement("#modal-root");const W={overlay:{backgroundColor:"rgba(78, 74, 72, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},D=n=>{let{isModalState:r,"state\u0421hangeModal":t}=n;return(0,x.jsxs)(f(),{isOpen:r,onRequestClose:t,style:W,contentLabel:"onRequestClose",children:[(0,x.jsx)("p",{children:"I am Modal Window"}),(0,x.jsx)("button",{type:"button",onClick:t,children:"Close"})]})},Y=()=>{const[n,r]=(0,e.useState)(!1),t=()=>{r(!0!==n)};return(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{children:"login"}),(0,x.jsx)("button",{onClick:t,children:"Click to open modal"}),(0,x.jsx)(D,{"state\u0421hangeModal":t,isModalState:n})]})};var Q,X,_,J;const V=b.cp.div(Q||(Q=(0,s.c)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px;\n  margin-top: 24px;\n  border: none;\n  background-color: transparent;\n  width: 104px;\n  height: 32px;\n"]))),G=b.cp.p(X||(X=(0,s.c)(["\n  font-size: 16px;\n  letter-spacing: -0.4px;\n  margin: 0;\n  font-weight: bold;\n  color: rgba(255, 255, 255, 1);\n"]))),K=b.cp.div(_||(_=(0,s.c)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(31, 31, 31, 1);\n  width: 32px;\n  height: 32px;\n"]))),Z=(0,b.cp)(g.c)(J||(J=(0,s.c)(["\n  width: 12px;\n  height: 16px;\n  fill: rgba(255, 255, 255, 1);\n"]))),$=()=>(0,x.jsxs)(V,{children:[(0,x.jsx)(K,{children:(0,x.jsx)(Z,{name:"iconapp"})}),(0,x.jsx)(G,{children:"Task Pro"})]});var nn;const rn=b.cp.p(nn||(nn=(0,s.c)(["\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  font-weight: normal;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0px;\n  margin-top: 60px;\n  margin-left: 24px;\n  padding: 0px;\n"]))),tn=()=>(0,x.jsx)(rn,{children:"My boards"});var en,on,an,dn;const cn=b.cp.div(en||(en=(0,s.c)(["\n  width: 40px;\n  height: 36px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(190, 219, 176, 1);\n  border-radius: 5px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  /* &:hover,\n  &:focus {\n    background-color: rgba(157, 200, 136, 1);\n  } */\n"]))),pn=b.cp.button(on||(on=(0,s.c)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 8px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px;\n  border: none;\n  border-top: solid 1px rgba(255, 255, 255, 0.1);\n  border-bottom: solid 1px rgba(255, 255, 255, 0.1);\n  background-color: transparent;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    "," {\n      background-color: rgba(157, 200, 136, 1);\n    }\n  }\n\n  @media screen and (min-width: 375px) {\n    width: 197px;\n    height: 70px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 212px;\n  }\n"])),cn),ln=b.cp.p(an||(an=(0,s.c)(["\n  width: 76px;\n  height: 42px;\n  font-size: 14px;\n  color: rgba(255, 255, 255, 1);\n"]))),gn=(0,b.cp)(g.c)(dn||(dn=(0,s.c)(["\n  width: 20px;\n  height: 20px;\n  stroke: black;\n"]))),sn=()=>(0,x.jsxs)(pn,{children:[(0,x.jsx)(ln,{children:"Create a new board"}),(0,x.jsx)(cn,{children:(0,x.jsx)(gn,{name:"add-board"})})]});var bn,xn,un,hn,mn,fn,Bn,kn;const jn=b.cp.div(bn||(bn=(0,s.c)(["\n  display: flex;\n  align-items: center;\n  border: none;\n  padding-left: 14px;\n  background-color: rgba(31, 31, 31, 1);\n\n  @media screen and (min-width: 375px) {\n    width: 225px;\n    height: 61px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 260px;\n    height: 61px;\n    padding-left: 24px;\n  }\n"]))),wn=b.cp.div(xn||(xn=(0,s.c)(["\n  width: 114px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),yn=b.cp.div(un||(un=(0,s.c)(["\n  width: 18px;\n  height: 18px;\n  background-color: red;\n"]))),vn=b.cp.p(hn||(hn=(0,s.c)(["\n  font-size: 14px;\n  letter-spacing: -0.2px;\n  color: rgba(255, 255, 255, 1);\n  margin: 0px;\n"]))),Cn=b.cp.div(mn||(mn=(0,s.c)(["\n  width: 40px;\n  height: 16px;\n  margin-left: auto;\n  display: flex;\n  gap: 8px;\n"]))),Tn=(0,b.cp)(g.c)(fn||(fn=(0,s.c)(["\n  width: 16px;\n  height: 16px;\n  stroke: rgba(255, 255, 255, 0.5);\n\n  &:hover,\n  &:focus {\n    stroke: rgba(190, 219, 176, 1);\n  }\n"]))),Mn=(0,b.cp)(g.c)(Bn||(Bn=(0,s.c)(["\n  width: 16px;\n  height: 16px;\n  stroke: rgba(255, 255, 255, 0.5);\n\n  &:hover,\n  &:focus {\n    stroke: rgba(190, 219, 176, 1);\n  }\n"]))),In=b.cp.p(kn||(kn=(0,s.c)(["\n  width: 4px;\n  height: 61px;\n  margin: 0;\n  margin-left: 18px;\n  background-color: rgba(190, 219, 176, 1);\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 24px;\n  }\n"]))),Pn=()=>(0,x.jsxs)(jn,{children:[(0,x.jsxs)(wn,{children:[(0,x.jsx)(yn,{}),(0,x.jsx)(vn,{children:"board name"})]}),(0,x.jsxs)(Cn,{children:[(0,x.jsx)(Tn,{name:"edit"}),(0,x.jsx)(Mn,{name:"delete"})]}),(0,x.jsx)(In,{})]});var Sn;const An=b.cp.div(Sn||(Sn=(0,s.c)(["\n  margin-top: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),zn=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(An,{children:(0,x.jsx)(Pn,{})})});var On,Ln,Hn,Rn,En,Fn,Nn,qn,Un=t(6880),Wn=t(2524);const Dn=b.cp.p(On||(On=(0,s.c)(["\n  color: #fff;\n  background: #151515;\n  margin: 0;\n  padding-bottom: 24px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),Yn=(0,b.cp)(Wn.QF)(Ln||(Ln=(0,s.c)(["\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 375px) {\n    width: 100%;\n  }\n  width: 400px;\n  border-radius: 8px;\n  background: #151515;\n  padding: 24px;\n"]))),Qn=b.cp.div(Hn||(Hn=(0,s.c)(["\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 24px;\n"]))),Xn=((0,b.cp)(Wn.mS)(Rn||(Rn=(0,s.c)(["\n  color: red;\n"]))),(0,b.cp)(Wn.IN)(En||(En=(0,s.c)(["\n  color: #fff;\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  padding: 14px 0px 14px 18px;\n  opacity: 0.4;\n  background: #1f1f1f;\n  width: 100%;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n"])))),_n=(0,b.cp)(Wn.IN)(Fn||(Fn=(0,s.c)(["\n  color: #fff;\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  padding: 14px 0px 14px 18px;\n  opacity: 0.4;\n  background: #1f1f1f;\n  width: 100%;\n  height: 120px;\n\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n"]))),Jn=b.cp.button(Nn||(Nn=(0,s.c)(["\n  display: flex;\n  width: 100%;\n  padding: 14px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  background: #bedbb0;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background: rgba(157, 200, 136, 1);\n  }\n"]))),Vn=b.cp.span(qn||(qn=(0,s.c)(["\n  color: #161616;\n\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n"])));f().setAppElement("#modal-root");const Gn={overlay:{backgroundColor:"rgba(78, 74, 72, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:0,borderRadius:5,border:"1px solid #151515",backgroundColor:"#151515"}},Kn=n=>{let{isOpen:r,setIsOpen:t}=n;return(0,x.jsx)(f(),{isOpen:r,onRequestClose:()=>t(!1),style:Gn,contentLabel:"onRequestClose",children:(0,x.jsx)(Wn.QJ,{initialValues:{email:"",comment:""},onSubmit:(n,r)=>{},children:(0,x.jsxs)(Yn,{autoComplete:"off",children:[(0,x.jsx)(Dn,{children:"Need help"}),(0,x.jsxs)(Qn,{children:[(0,x.jsx)("label",{children:(0,x.jsx)(Xn,{name:"email",type:"email",placeholder:"Email address"})}),(0,x.jsx)("label",{children:(0,x.jsx)(_n,{name:"comment",type:"text",placeholder:"Comment"})})]}),(0,x.jsx)(Jn,{type:"submit",children:(0,x.jsx)(Vn,{children:"Send"})})]})})})};var Zn,$n,nr,rr,tr,er,or;const ar=b.cp.div(Zn||(Zn=(0,s.c)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 15px;\n  margin-top: auto;\n  margin-bottom: 24px;\n  border: none;\n  background-color: rgba(31, 31, 31, 1);\n  border-radius: 10px;\n\n  @media screen and (min-width: 375px) {\n    width: 197px;\n    height: 238px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 212px;\n    height: 272px;\n    padding: 20px;\n  }\n"]))),ir=b.cp.div($n||($n=(0,s.c)(["\n  width: 54px;\n  height: 78px;\n"]))),dr=b.cp.p(nr||(nr=(0,s.c)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: -0.2px;\n  line-height: 1.4;\n  color: rgba(255, 255, 255, 1);\n  margin: 0;\n"]))),cr=b.cp.span(rr||(rr=(0,s.c)(["\n  color: rgba(190, 219, 176, 1);\n  font-size: 14px;\n  letter-spacing: -0.2px;\n"]))),pr=b.cp.p(tr||(tr=(0,s.c)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 1);\n  margin: 0px;\n"]))),lr=b.cp.button(er||(er=(0,s.c)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px;\n  border: none;\n  background-color: transparent;\n  width: 94px;\n  height: 20px;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    "," {\n      color: rgba(157, 200, 136, 1);\n    }\n  }\n"])),pr),gr=(0,b.cp)(g.c)(or||(or=(0,s.c)(["\n  width: 20px;\n  height: 20px;\n  stroke: white;\n"]))),sr=()=>{const[n,r]=(0,e.useState)(!1);return(0,x.jsxs)(ar,{children:[(0,x.jsx)(ir,{children:(0,x.jsx)("img",{src:Un.Wq,alt:"Cactus",width:54})}),(0,x.jsxs)(dr,{children:["If you need help with ",(0,x.jsx)(cr,{children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,x.jsxs)(lr,{onClick:()=>r(!0),children:[(0,x.jsx)(gr,{name:"help"}),(0,x.jsx)(pr,{children:"Need help?"})]}),(0,x.jsx)(Kn,{isOpen:n,setIsOpen:r})]})};var br,xr,ur;const hr=(0,b.cp)(g.c)(br||(br=(0,s.c)(["\n  width: 32px;\n  height: 32px;\n  stroke: rgba(190, 219, 176, 1);\n"]))),mr=b.cp.button(xr||(xr=(0,s.c)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 0px;\n  margin-left: 24px;\n  margin-bottom: 24px;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    "," {\n      stroke: rgba(157, 200, 136, 1);\n    }\n  }\n\n  @media screen and (min-width: 375px) {\n    width: 105px;\n    height: 32px;\n  }\n"])),hr),fr=b.cp.p(ur||(ur=(0,s.c)(["\n  font-size: 14px;\n  font-style: medium;\n  font-weight: 500;\n  margin-left: 14px;\n  color: rgba(255, 255, 255, 1);\n  @media screen and (min-width: 1440px) {\n    font-size: 16px;\n  }\n"])));var Br=t(680);const kr=()=>{const n=(0,o.OY)();return(0,x.jsxs)(mr,{type:"button",onClick:()=>n((0,Br.ER)()),children:[(0,x.jsx)(hr,{name:"logout"}),(0,x.jsx)(fr,{children:"Log out"})]})},jr=[{name:"dark",containerBackground:"rgba(31, 31, 31, 1)",headerBackground:"rgba(22, 22, 22, 1)",headerUserName:"rgba(255, 255, 255, 1)",headerMenuIcon:"rgba(255, 255, 255, 1)",popupTextMain:"rgba(255, 255, 255, 0.8)",popupTextSecondary:"rgba(255, 255, 255, 0.5)",popupTextAccent:"rgba(190, 219, 176, 1)",popupIcon:"rgba(255, 255, 255, 0.8)",popupBackground:"rgba(21, 21, 21, 1)",popupBorder:"rgba(190, 219, 176, 1)",popupBoxShadow:"rgba(17, 17, 17, 0.10)",popupFilterBell:"blur(5.5px)",popupStrokeBell:"rgba(190, 219, 176, 1)",popupBackgroundBell:"rgba(190, 219, 176, 1)",helpBackground:"rgba(31, 31, 31, 1)",helpTextMain:"rgba(255, 255, 255, 1)",helpTextAccent:"rgba(190, 219, 176, 1)",helpIcon:"rgba(255, 255, 255, 1)",helpModalTextMain:"rgba(255, 255, 255, 1)",helpModalBorder:"rgba(190, 219, 176, 1)",helpModalButtonBackground:"rgba(190, 219, 176, 1)",helpModalButtonColor:"rgba(22, 22, 22, 1)",modalBackgroundMain:"rgba(21, 21, 21, 1)",modalBackgroundSecondary:"rgba(31, 31, 31, 1)",modalBackgeoundAvatar:"rgba(190, 219, 176, 1)",modalTextMain:"rgba(255, 255, 255, 1)",modalTextSecondary:"rgba(255, 255, 255, 0.5)",modalTextAccent:"rgba(190, 219, 176, 1)",modalIcon:"rgba(255, 255, 255, 0.5)",modalIconClose:"rgba(255, 255, 255, 1)",modalButtonBackground:"rgba(190, 219, 176, 1)",modalButtonText:"rgba(22, 22, 22, 1)",modalPlusBackground:"rgba(22, 22, 22, 1)",modalPlusColor:"rgba(255, 255, 255, 1)",modalBorder:"rgba(190, 219, 176, 0.50)",modalLine:"rgba(255, 255, 255, 0.1)",modalIconDefault:"rgba(31, 31, 31, 1)",modalUnactiveDay:"rgba(255, 255, 255, 0.2)",modalToday:"rgba(31, 31, 31, 1)",sidebarBackground:"rgba(18, 18, 18, 1)",sidebarTextMain:"rgba(255, 255, 255, 1)",sidebarTextSecondary:"rgba(255, 255, 255, 0.5)",sidebarTextAccent:"rgba(190, 219, 176, 1)",sidebarBorder:"rgba(255, 255, 255, 0.1)",sidebarAddButtonBackground:"rgba(190, 219, 176, 1)",sidebarAddButtonColor:"rgba(18, 18, 18, 1)",sidebarAddButtonHover:"rgba(190, 219, 176, 0.8)",sidebarProjectActive:"rgba(31, 31, 31, 1)",sidebarProjectHover:"rgba(31, 31, 31, 1)",sidebarProjectIcon:"rgba(255, 255, 255, 0.5)",sidebarProjectIconHover:"rgba(255, 255, 255, 1)",sidebarProjectBorder:"rgba(190, 219, 176, 1)",sidebarIconLogout:"rgba(190, 219, 176, 1)",sidebarIconClose:"rgba(255, 255, 255, 1)",profileBackground:"rgba(21, 21, 21, 1)",profileTextMain:"rgba(255, 255, 255, 1)",profileBorder:"rgba(190, 219, 176, 0.5)",profileInputBorder:"rgba(190, 219, 176, 1)",profileButtonBackground:"rgba(190, 219, 176, 1)",profileButtonColor:"rgba(22, 22, 22, 1)",profileIconPlusBackground:"rgba(190, 219, 176, 1)",profileIconPlusColor:"rgba(22, 22, 22, 1)",columnBackgroundMain:"rgba(18, 18, 18, 1)",columnTextMain:"rgba(255, 255, 255, 1)",columnTextSecondary:"rgba(255, 255, 255, 0.5)",columnBorderColor:"rgba(255, 255, 255, 0.1)",columnIcon:"rgba(255, 255, 255, 0.5)",columnButtonBackground:"rgba(190, 219, 176, 1)",columnButtonColor:"rgba(22, 22, 22, 1)",columnPlusBackground:"rgba(22, 22, 22, 1)",columnPlusColor:"rgba(255, 255, 255, 1)",columnScrollTrack:"rgba(255, 255, 255, 0.1)",columnScrollThumb:"rgba(18, 18, 18, 1)",columnScrollBorder:"rgba(0, 0, 0, 0.5)",addButtonBackground:"rgba(18, 18, 18, 1)",addButtonColor:"rgba(255, 255, 255, 1)",addButtonPlusBackground:"rgba(255, 255, 255, 1)",addButtonPlusColor:"rgba(18, 18, 18, 1)"},{name:"light",containerBackground:"rgba(246, 246, 247, 1)",headerBackground:"rgba(252, 252, 252, 1)",headerUserName:"rgba(22, 22, 22, 1)",headerMenuIcon:"rgba(22, 22, 22, 1)",popupTextMain:"rgba(22, 22, 22, 0.8)",popupTextSecondary:"rgba(22, 22, 22, 1)",popupTextAccent:"rgba(190, 219, 176, 1)",popuIicon:"rgba(22, 22, 22, 0.8)",popupBackground:"rgba(252, 252, 252, 1)",popupBorder:"rgba(190, 219, 176, 1)",popupBoxShadow:"rgba(17, 17, 17, 0.10)",popupFilterBell:"blur(9.5px)",popupStrokeBell:"rgba(190, 219, 176, 1)",popupBackgroundBell:"transparent",helpbackground:"rgba(246, 246, 247, 1)",helpTextMain:"rgba(22, 22, 22, 1)",helpTextAccent:"rgba(190, 219, 176, 1)",helpIcon:"rgba(22, 22, 22, 1)",helpModalTextMain:"rgba(22, 22, 22, 1)",helpModalBorder:"rgba(190, 219, 176, 1)",helpModalButtonBackground:"rgba(190, 219, 176, 1)",helpModalButtonColor:"rgba(22, 22, 22, 1)",modalBackgroundMain:"rgba(252, 252, 252, 1)",modalBackgroundSecondary:"rgba(252, 252, 252, 1)",modalBackgeoundAvatar:"rgba(246, 246, 247, 1)",modalTextMain:"rgba(22, 22, 22, 1)",modalTextSecondary:"rgba(22, 22, 22, 0.5)",modalTextAccent:"rgba(190, 219, 176, 1)",modalIcon:"rgba(22, 22, 22, 0.5)",modalIconClose:"rgba(22, 22, 22, 1)",modalButtonBackground:"rgba(190, 219, 176, 1)",modalButtonText:"rgba(22, 22, 22, 1)",modalPlusBackground:"rgba(22, 22, 22, 1)",modalPlusColor:"rgba(255, 255, 255, 1)",modalBorder:"transparent",modalLine:"rgba(22, 22, 22, 0.1)",modalIconDefault:"rgba(246, 246, 247, 1)",modalUnactiveDay:"rgba(22, 22, 22, 0.2)",modalToday:"rgba(22, 22, 22, 1)",sidebarBackground:"rgba(255, 255, 255, 1)",sidebarTextMain:"rgba(22, 22, 22, 1)",sidebarTextSecondary:"rgba(22, 22, 22, 0.5)",sidebarTextAccent:"rgba(190, 219, 176, 1)",sidebarBorder:"rgba(22, 22, 22, 0.1)",sidebarAddButtonBackground:"rgba(190, 219, 176, 1)",sidebarAddButtonColor:"rgba(18, 18, 18, 1)",sidebarAddButtonHover:"rgba(190, 219, 176, 0.8)",sidebarProjectActive:"rgba(246, 246, 247, 1)",sidebarProjectHover:"rgba(246, 246, 247, 1)",sidebarProjectIcon:"rgba(22, 22, 22, 0.5)",sidebarProjectIconHover:"rgba(22, 22, 22, 1)",sidebarProjectBorder:"rgba(190, 219, 176, 1)",sidebarIconLogout:"rgba(190, 219, 176, 1)",sidebarIconClose:"rgba(22, 22, 22, 1)",profilebackground:"rgba(252, 252, 252, 1)",profileTextMain:"rgba(22, 22, 22, 1)",profileBorder:"transparent",profileInputBorder:"rgba(190, 219, 176, 1)",profileButtonBackground:"rgba(190, 219, 176, 1)",profileButtonColor:"rgba(22, 22, 22, 1)",profileIconPlusBackground:"rgba(190, 219, 176, 1)",profileIconPlusColor:"rgba(22, 22, 22, 1)",columnBackgroundMain:"rgba(255, 255, 255, 1)",columnTextMain:"rgba(22, 22, 22, 1)",columnTextSecondary:"rgba(22, 22, 22, 0.7)",columnBorderColor:"rgba(22, 22, 22, 0.1)",columnIcon:"rgba(22, 22, 22, 0.5)",columnButtonBackground:"rgba(190, 219, 176, 1)",columnButtonColor:"rgba(22, 22, 22, 1)",columnPlusBackground:"rgba(22, 22, 22, 1)",columnPlusColor:"rgba(255, 255, 255, 1)",columnScrollTrack:"rgba(232, 232, 232, 1)",columnScrollThumb:"rgba(22, 22, 22, 0.4)",columnScrollBorder:"transparent",addButtonBackground:"rgba(255, 255, 255, 1)",addButtonColor:"rgba(22, 22, 22, 1)",addButtonPlusBackground:"rgba(22, 22, 22, 1)",addButtonPlusColor:"rgba(255, 255, 255, 1)"},{name:"violet",containerBackground:"rgba(236, 237, 253, 1)",headerBackground:"rgba(252, 252, 252, 1)",headerUserName:"rgba(22, 22, 22, 1)",headerMenuIcon:"rgba(22, 22, 22, 1)",popupTextMain:"rgba(22, 22, 22, 0.8)",popupTextSecondary:"rgba(22, 22, 22, 1)",popupTextAccent:"rgba(82, 85, 188, 1)",popupIcon:"rgba(22, 22, 22, 0.8)",popupBackground:"rgba(252, 252, 252, 1)",popupBorder:"rgba(236, 237, 253, 1)",popupBoxShadow:"rgba(17, 17, 17, 0.10)",popupFilterBell:"blur(7.5px)",popupStrokeBell:"rgba(82, 85, 188, 1)",popupBackgroundBell:"transparent",helpbackground:"rgba(236, 237, 253, 0.4)",helpTextMain:"rgba(255, 255, 255, 1)",helpTextAccent:"rgba(82, 85, 188, 1)",helpIcon:"rgba(255, 255, 255, 1)",helpModalTextMain:"rgba(22, 22, 22, 1)",helpModalBorder:"rgba(82, 85, 188, 1)",helpModalButtonBackground:"rgba(82, 85, 188, 1)",helpModalButtonColor:"rgba(255, 255, 255, 1)",modalBackgroundMain:"rgba(252, 252, 252, 1)",modalBackgroundSecondary:"rgba(252, 252, 252, 1)",modalBackgeoundAvatar:"rgba(236, 237, 253, 1)",modalTextMain:"rgba(22, 22, 22, 1)",modalTextSecondary:"rgba(22, 22, 22, 0.5)",modalTextAccent:"rgba(82, 85, 188, 1)",modalIcon:"rgba(22, 22, 22, 0.5)",modalIconClose:"rgba(22, 22, 22, 1)",modalButtonBackground:"rgba(82, 85, 188, 1)",modalButtonText:"rgba(255, 255, 255, 1)",modalPlusBackground:"rgba(255, 255, 255, 1)",modalPlusColor:"rgba(22, 22, 22, 1)",modalBorder:"transparent",modalLine:"rgba(22, 22, 22, 0.2)",modalIconDefault:"rgba(236, 237, 253, 1)",modalUnactiveDay:"rgba(22, 22, 22, 0.2)",modalToday:"rgba(252, 252, 252, 1)",sidebarBackground:"rgba(82, 85, 188, 1)",sidebarTextMain:"rgba(255, 255, 255, 1)",sidebarTextSecondary:"rgba(255, 255, 255, 0.5)",sidebarTextAccent:"rgba(82, 85, 188, 1)",sidebarBorder:"rgba(255, 255, 255, 0.1)",sidebarAddButtonBackground:"rgba(184, 188, 253, 1)",sidebarAddButtonColor:"rgba(255, 255, 255, 1)",sidebarAddButtonHover:"rgba(184, 188, 253, 0.8)",sidebarProjectActive:"rgba(255, 255, 255, 0.5)",sidebarProjectHover:"rgba(255, 255, 255, 0.5)",sidebarProjectIcon:"rgba(255, 255, 255, 0.5)",sidebarProjectIconHover:"rgba(255, 255, 255, 1)",sidebarProjectBorder:"rgba(255, 255, 255, 1)",sidebarIconLogout:"rgba(255, 255, 255, 1)",sidebarIconClose:"rgba(255, 255, 255, 1)",profileBackground:"rgba(252, 252, 252, 1)",profileTextMain:"rgba(22, 22, 22, 1)",profileBorder:"transparent",profileInputBorder:"rgba(82, 85, 188, 1)",profileButtonBackground:"rgba(82, 85, 188, 1)",profileButtonColor:"rgba(255, 255, 255, 1)",profileIconPlusBackground:"rgba(236, 237, 253, 1)",profileIconPlusColor:"rgba(22, 22, 22, 1)",columnBackgroundMain:"rgba(255, 255, 255, 1)",columnTextMain:"rgba(22, 22, 22, 1)",columnTextSecondary:"rgba(22, 22, 22, 0.7)",columnBorderColor:"rgba(22, 22, 22, 0.1)",columnIcon:"rgba(22, 22, 22, 0.5)",columnButtonBackground:"rgba(82, 85, 188, 1)",columnButtonColor:"rgba(255, 255, 255, 1)",columnPlusBackground:"rgba(255, 255, 255, 1)",columnPlusColor:"rgba(22, 22, 22, 1)",columnScrollTrack:"rgba(255, 255, 255, 1)",columnScrollThumb:"rgba(184, 188, 253, 1)",columnScrollBorder:"transparent",addButtonBackground:"rgba(255, 255, 255, 1)",addButtonColor:"rgba(22, 22, 22, 1)",addButtonPlusBackground:"rgba(82, 85, 188, 1)",addButtonPlusColor:"rgba(255, 255, 255, 1)"}];var wr,yr,vr,Cr,Tr;const Mr=b.cp.div(wr||(wr=(0,s.c)(["\n\tposition: relative;\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 4px;\n\tmargin-right: 14px;\n\tcursor: pointer;\n"]))),Ir=b.cp.span(yr||(yr=(0,s.c)(["\n\tfont-family: Poppins;\n\tcolor: rgba(255, 255, 255, 0.8);\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tletter-spacing: -0.28px;\n"]))),Pr=(0,b.cp)(g.c)(vr||(vr=(0,s.c)(["\n\twidth: 16px;\n\theight: 16px;\n\tstroke: rgba(255, 255, 255, 0.8);\n\ttransition: all 250ms linear;\n\tfill: transparent;\n\n\t",";\n"])),(n=>n.isOpen&&"transform: rotate(-180deg)")),Sr=b.cp.ul(Cr||(Cr=(0,s.c)(["\n\tposition: absolute;\n\tbottom: -124px;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\tdisplay: inline-flex;\n\tpadding: 18px 44px 18px 18px;\n\tflex-direction: column;\n\tjustify-content: center;\n\tborder-radius: 8px;\n\tborder: 1px solid rgba(190, 219, 176, 1);\n\tbackground: rgba(21, 21, 21, 1);\n\tbox-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.10);\n\tgap: 4px;\n\tz-index: 99;\n"]))),Ar=b.cp.li(Tr||(Tr=(0,s.c)(["\n\tfont-family: Poppins;\n\tcolor: rgba(255, 255, 255, 0.5);\n\tfont-size: 14px;\n\tletter-spacing: -0.28px;\n    list-style: none;\n\t&.active {\n\t\tcolor: rgba(190, 219, 176, 1);\n\t}\n\n\tcursor: pointer;\n"]))),zr=()=>{const n=(0,o.OY)(),r=o.w1,[t,a]=(0,e.useState)(!1),i=(0,e.useRef)(),d=n=>{n.composedPath().includes(i.current)||a(!1)};(0,e.useEffect)((()=>(document.body.addEventListener("click",d),()=>{document.body.removeEventListener("click",d)})),[]);return(0,x.jsxs)(Mr,{ref:i,onClick:()=>a(!t),children:[(0,x.jsx)(Ir,{children:"Theme"}),(0,x.jsx)(Pr,{name:"chevron-down",isOpen:t}),t&&(0,x.jsx)(Sr,{children:jr.map((t=>{let{name:e}=t;return(0,x.jsx)(Ar,{onClick:()=>(r=>{n({theme:r}),a(!1)})(e),className:r===e?"active":"",children:e[0].toUpperCase()+e.slice(1)},e)}))})]})};var Or,Lr;const Hr=b.cp.header(Or||(Or=(0,s.c)(["\n\tbackground-color: rgba(22, 22, 22, 1);\n\tpadding: 14px 20px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\n\t@media screen and (min-width: 375px) {\n\t\t/* width: 375px; */\n\t\theight: 60px;\n\t}\n\n\t@media screen and (min-width: 768px) {\n\t\t/* width: 768px; */\n\t\theight: 68px;\n\t\tpadding: 18px 32px;\n\t}\n\n\t@media screen and (min-width: 1280px) {\n\t\t/* width: 1180px; */\n\t\tpadding: 18px 24px;\n\t}\n"]))),Rr=b.cp.div(Lr||(Lr=(0,s.c)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"])));var Er,Fr;const Nr=b.cp.button(Er||(Er=(0,s.c)(["\n\tz-index: 999;\n\n\t/* ","; */\n\n\ttransition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n\tborder: none;\n\toutline: none;\n\tbackground-color: transparent;\n\tcursor: pointer;\n\n\t@media screen and (min-width: 1280px) {\n\t\topacity: 0;\n\t}\n"])),(n=>n.isOpen?"opacity: 0":"opacity: 1")),qr=(0,b.cp)(g.c)(Fr||(Fr=(0,s.c)(["\n\twidth: 32px;\n\theight: 32px;\n\t/* stroke: ","; */\n\tstroke: rgba(255, 255, 255, 0.8);\n\tfill: transparent;\n"])),(n=>n.theme.headerMenuIcon)),Ur=()=>{const n=(0,o.OY)(),r=o.w1;return(0,x.jsx)(Nr,{type:"button",onClick:()=>n,isOpen:r,children:(0,x.jsx)(qr,{name:"menu"})})},Wr=()=>(0,x.jsxs)(Hr,{children:[(0,x.jsx)(Ur,{}),(0,x.jsx)(Rr,{children:(0,x.jsx)(zr,{})})]});const Dr=function(){const n=(0,o.w1)(a),r=(0,o.OY)();return(0,e.useEffect)((()=>{null!==n&&(0,p.sr)("Error loading data: ".concat(n)),r((0,c.Y9)())}),[r,n]),(0,x.jsxs)(F,{children:[(0,x.jsxs)(N,{children:[(0,x.jsx)($,{}),(0,x.jsx)(tn,{}),(0,x.jsx)(sn,{}),(0,x.jsx)(zn,{}),(0,x.jsx)(sr,{}),(0,x.jsx)(kr,{})]}),(0,x.jsx)(q,{children:(0,x.jsx)(Wr,{})}),(0,x.jsx)(U,{children:(0,x.jsxs)(O,{children:[(0,x.jsx)(Y,{}),(0,x.jsx)(D,{})]})})]})}}}]);
//# sourceMappingURL=144.7e05711c.chunk.js.map