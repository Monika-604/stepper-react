(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(9),a=c.n(o),d=c(3),l=(c(15),c(16),s.a.createContext()),i=s.a.createContext(),r=s.a.createContext(),b=c(10),j=c(4),u=c(0),O=function(e){var t=e.id,c=e.status,s=e.label,o=(e.chronology,e.current,e.selected,Object(n.useContext)(i)),a=Object(d.a)(o,2),r=a[0],O=a[1],m=Object(n.useContext)(l),x=Object(d.a)(m,2),h=x[0];x[1];return Object(u.jsx)("div",{className:"prev-step step\n                                ".concat(c?"complete":""," \n                                ").concat(t==h?"current":"","  \n                            "),onClick:function(){return O(t)},children:Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{icon:c?j.a:t==h?j.b:j.c,className:"ico ".concat(c?"ico-green":t==h?"ico-yellow":"ico-muted"," ")}),Object(u.jsx)("span",{className:"text-secondary label\n                                        ".concat(c||t==h?"font-weight-bolder text-dark":"","\n                                        ").concat(t==r?"shadow":"","\n                                    "),children:s})]})})},m=function(){var e=Object(n.useContext)(r),t=Object(d.a)(e,2),c=t[0];t[1];return Object(u.jsxs)("div",{className:"col-4 steps me-4",children:[Object(u.jsx)("div",{className:"side-content",children:Object(u.jsx)("div",{className:"bs-vertical-wizard",children:c.map((function(e,t){return Object(u.jsx)(O,{id:e.id,label:e.title,chronology:e.chronology,status:e.completed},e.id)}))})}),Object(u.jsx)("div",{className:"col-sm-8 col-md-9"})]})},x=c(8),h=function(){var e=Object(n.useContext)(r),t=Object(d.a)(e,2),c=t[0],s=t[1],o=Object(n.useContext)(i),a=Object(d.a)(o,2),b=a[0],j=(a[1],Object(n.useContext)(l)),O=Object(d.a)(j,2),m=O[0],h=(O[1],Object(n.useState)("")),p=Object(d.a)(h,2),f=p[0],v=p[1];return Object(n.useEffect)((function(){c.map((function(e,t){e.id===b&&(e.completed?v("Completed"):e.id==m?v("Current"):v("Forbidden"))}))})),Object(u.jsx)("div",{className:" ms-3 col-7 d-flex flex-column justify-content-center rounded frame",children:"Completed"===f?Object(u.jsx)("h3",{className:"h-25 text-center text-dark",children:"You have done this step already."}):"Current"===f?Object(u.jsx)("button",{className:"btn btn-success align-self-center px-3 py-2",onClick:function(){var e=c.map((function(e){return e.id==m?Object(x.a)(Object(x.a)({},e),{},{completed:!0}):e}));s(e),console.log(e)},children:"complete"}):Object(u.jsxs)("div",{className:"d-flex flex-column justify-content-center ",children:[Object(u.jsx)("h3",{className:" text-center text-secondary",children:"Please do the previous Steps!"}),Object(u.jsx)("button",{className:"btn btn-success align-self-center mt-5  px-3 py-2",disabled:!0,children:"complete"})]})})},p={id:"88e7df15-6e5c-4e6f-8447-d991486457fb",steps:[{id:"8329b880-d3a8-441c-af0c-79e177d1ed7f",chronology:1,completed:!0,title:"Constitution du dossier"},{id:"1bce85b5-a02b-49a4-b779-d3b7d1ee3b29",chronology:2,completed:!1,title:"Accompagnement psychologique"},{id:"3094782b-31a3-4820-adae-f8ddad7d46cc",chronology:3,completed:!1,title:"Stimulation et de\u0301clenchement"},{id:"beacf27e-a045-4355-8610-32dbcac487cf",chronology:4,completed:!1,title:"Ponction et anesthe\u0301sie"}]};function f(){var e=Object(n.useState)(p.steps),t=Object(d.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)(c[0].id),a=Object(d.a)(o,2),b=a[0],j=a[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){c.map((function(e,t){!1===e.completed&&!0===c[t-1].completed&&v(e.id)}))}),[c]),Object(u.jsx)(r.Provider,{value:[c,s],children:Object(u.jsx)(i.Provider,{value:[b,j],children:Object(u.jsx)(l.Provider,{value:[f,v],children:Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"container ",children:Object(u.jsxs)("div",{className:"row ",children:[Object(u.jsx)(m,{}),Object(u.jsx)(h,{})]})})})})})})}a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fa675b5d.chunk.js.map