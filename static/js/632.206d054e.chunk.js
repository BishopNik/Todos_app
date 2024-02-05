"use strict";(self.webpackChunktodos_app=self.webpackChunktodos_app||[]).push([[632],{8632:(t,n,e)=>{e.r(n),e.d(n,{default:()=>O});var i,r,o,a,s,p=e(9060),c=e(4312),l=e(5572),d=e(5520);const h=l.cp.button(i||(i=(0,c.c)(["\n\tposition: absolute;\n\ttop: 14px;\n\tright: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 8px;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\n\t@media screen and (min-width: 768px) {\n\t\ttop: 20px;\n\t\tright: 32px;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\ttop: 14px;\n\t\tright: 24px;\n\t}\n"]))),x=(0,l.cp)(d.c)(r||(r=(0,c.c)(["\n\twidth: 16px;\n\theight: 16px;\n\tstroke: rgba(255, 255, 255, 0.8);\n"]))),g=l.cp.span(o||(o=(0,c.c)(["\n\tcolor: rgba(255, 255, 255, 0.8);\n\tfont-size: 14px;\n\tfont-style: normal;\n\tfont-weight: 500;\n\tline-height: normal;\n\tletter-spacing: -0.28px;\n"]))),u=l.cp.p(a||(a=(0,c.c)(["\n\tmax-width: 100%;\n\twidth: 375px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 292px;\n\tpadding: 0 20px;\n\tcolor: rgba(255, 255, 255, 0.5);\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tline-height: 1.3;\n\tletter-spacing: -0.02em;\n\ttext-align: center;\n\n\t@media screen and (min-width: 768px) {\n\t\tmargin-top: 408px;\n\t\tpadding: 0;\n\t\twidth: 486px;\n\t\tfont-size: 14px;\n\t\tfont-weight: 400;\n\t\tline-height: 1.3;\n\t\tletter-spacing: -0.02em;\n\t\ttext-align: center;\n\t}\n\n\t@media screen and (min-width: 1440px) {\n\t\tmargin-top: 281px;\n\t\tpadding: 0;\n\t}\n"]))),m=l.cp.span(s||(s=(0,c.c)(["\n\tbackground-color: transparent;\n\tcolor: #bedbb0;\n\tfont-size: 12px;\n\tfont-weight: 400;\n\tline-height: 16px;\n\tletter-spacing: -0.2px;\n\ttext-align: center;\n\tcursor: pointer;\n\n\t@media screen and (min-width: 768px) {\n\t\tfont-size: 14px;\n\t\tfont-weight: 400;\n\t\tline-height: 18px;\n\t\tletter-spacing: -0.2px;\n\t\ttext-align: center;\n\t}\n"])));var f=e(2496);const b=function(t){let{children:n}=t;return(0,f.jsx)(f.Fragment,{children:n?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{style:{width:"336px",height:"56px",border:"1px solid white",margin:"40px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,f.jsx)("h1",{style:{color:"white"},children:n})})}):(0,f.jsxs)(u,{children:["Before starting your project, it is essential"," ",(0,f.jsx)(m,{onClick:()=>alert("Create board"),children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]})})};var j,w;l.cp.button(j||(j=(0,c.c)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 8px;\nwidth: 64px;\nheight: 20px;\npadding: 0;\nfont-weight: 500;\nfont-size: 14px;\nletter-spacing: -0.02em;\ncolor: rgba(255, 255, 255, 0.8);\nborder: none;\ncursor: pointer;\n"]))),l.cp.svg(w||(w=(0,c.c)(["\n    width: 16px;\n    height: 16px;\n"])));var y,k,v=e(4832),C=e.n(v);const z={overlay:{backgroundColor:"rgba(78, 74, 72, 0.6)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},M=l.cp.label(y||(y=(0,c.c)(["\n  display:flex;\n  margin-right: 10px;\n"]))),F=l.cp.div(k||(k=(0,c.c)(["\n  margin-top: 20px;\n"])));C().setAppElement("#modal-root");const L=t=>{let{isModalOpen:n,setIsModalOpen:e}=t;const[i,r]=(0,p.useState)("Without priority"),o=t=>{r(t.target.value)};return(0,f.jsxs)(C(),{isOpen:n,onRequestClose:()=>e(!1),style:z,contentLabel:"onRequestClose",children:[(0,f.jsx)("h1",{children:"Filters"}),(0,f.jsx)("button",{type:"button",onClick:()=>e(!1),children:"X"}),(0,f.jsx)("h2",{children:"Label color"}),(0,f.jsxs)(F,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)("input",{type:"radio",value:"Without priority",checked:"Without priority"===i,onChange:o}),"Without priority"]}),(0,f.jsxs)(M,{children:[(0,f.jsx)("input",{type:"radio",value:"Low",checked:"Low"===i,onChange:o}),"Low"]}),(0,f.jsxs)(M,{children:[(0,f.jsx)("input",{type:"radio",value:"Medium",checked:"Medium"===i,onChange:o}),"Medium"]}),(0,f.jsxs)(M,{children:[(0,f.jsx)("input",{type:"radio",value:"High",checked:"High"===i,onChange:o}),"High"]})]})]})};const O=function(){const[t,n]=(0,p.useState)(!1);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(h,{type:"button",onClick:()=>{n(!0)},children:[(0,f.jsx)(x,{name:"filters"}),(0,f.jsx)(g,{children:"Filters"})]}),(0,f.jsx)(L,{isModalOpen:t,setIsModalOpen:n}),(0,f.jsx)(b,{})]})}}}]);
//# sourceMappingURL=632.206d054e.chunk.js.map