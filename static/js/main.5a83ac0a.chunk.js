(this["webpackJsonpbloc-notes"]=this["webpackJsonpbloc-notes"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(7),s=n.n(a),l=(n(13),n(2)),i=n(8),r=n(5),u=n.n(r),j=n(0),b=function(t){var e=t.note,n=t.setNoteDisplay,c=t.index;return Object(j.jsx)("li",{children:Object(j.jsx)("div",{onClick:function(){n(c)},dangerouslySetInnerHTML:function(){var t=new u.a.Converter,n=e.content?e.content:"No Content",c=(n=n.split("\n"))[0]+"\n",o=n[1]?n[1]:"";return{__html:t.makeHtml("".concat(e.title?e.title:"# No Title","\n").concat(c+o))}}(),className:"contentHtml"})})},f=function(t){var e=t.notes,n=t.saveNotes,c=t.setNoteDisplay;return Object(j.jsxs)("section",{className:"sideBar",children:[Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),n([{title:"# Nouvelle Note",content:"Contenue de ma nouvelle note"}].concat(Object(i.a)(e))),c(0)},children:"Ajouter une Note"}),Object(j.jsx)("ul",{children:e.map((function(t,e){return Object(j.jsx)(b,{note:t,setNoteDisplay:c,index:e},e)}))})]})},m=function(t){var e=t.id,n=t.notes,c=t.saveNotes,a=o.a.useState(),s=Object(l.a)(a,2),i=s[0],r=s[1],b=o.a.useState(n[e].title.slice(2,n[e].title.length)),f=Object(l.a)(b,2),m=f[0],v=f[1],O=o.a.useState(n[e].content),N=Object(l.a)(O,2),d=N[0],x=N[1];return o.a.useEffect((function(){var t=new u.a.Converter,e="# "+m+"\n"+d;r(t.makeHtml(e))}),[m,d]),o.a.useEffect((function(){v(n[e].title.slice(2,n[e].title.length)),x(n[e].content)}),[e]),Object(j.jsxs)("section",{className:"note",children:[Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:i},className:"noteHtml"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.splice(e,1),n.unshift({title:"# ".concat(m),content:d}),c(n)},children:[Object(j.jsx)("input",{onChange:function(t){v(t.target.value)},className:"title",value:m,type:"text"}),Object(j.jsx)("textarea",{onChange:function(t){x(t.target.value)},className:"content",value:d,type:"text"}),Object(j.jsx)("button",{type:"submit",children:"Sauvegarder"})]})]})},v=function(){var t=o.a.useState([]),e=Object(l.a)(t,2),n=e[0],c=e[1],a=o.a.useState(!1),s=Object(l.a)(a,2),i=s[0],r=s[1],u=function(t){var e=JSON.stringify(t);localStorage.setItem("bloc-noteData",e),c(JSON.parse(localStorage.getItem("bloc-noteData"))||[{title:"# New note",content:"Empty content"}])};return Object(j.jsxs)(j.Fragment,{children:[n&&Object(j.jsx)(f,{notes:n,setNotes:c,saveNotes:u,setNoteDisplay:r}),!1!==i&&Object(j.jsx)(m,{id:i,notes:n,saveNotes:u})]})};s.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a83ac0a.chunk.js.map