(this["webpackJsonphackathon-spelling-app"]=this["webpackJsonphackathon-spelling-app"]||[]).push([[0],{31:function(e,t){},484:function(e,t,a){"use strict";a.r(t);a(74);var n=a(1),r=a.n(n),c=a(66),o=a.n(c),l=(a(79),a(11)),s=a(4);a(80);function i(){return r.a.createElement("section",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"logo"},"abc"),r.a.createElement("h1",null,"Spelling App"),r.a.createElement("p",null,"Teach your child to read real good. Or is it gooderer?"),r.a.createElement("p",null,r.a.createElement(l.b,{to:"/quiz",className:"btn btn-primary my-2 mr-2"},"Quick Start"),r.a.createElement(l.b,{to:"/create",className:"btn btn-secondary my-2"},"Create Quiz"))))}var u=a(10),m=a(40),p=a(34),d=a.n(p),b=a(68),f=(a(86),a(20)),E=a.n(f),g=a(35),h=a(24),v=a(479).default;E.a.config.region="us-east-2",E.a.config.credentials=new E.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-2:d17e443c-5c74-4812-9b45-ffe150848407"});var w={OutputFormat:"mp3",Text:"",VoiceId:"Joanna"},y=new E.a.Polly.Presigner,N=new Audio;function x(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],o=a[1],l=c?"\u25a0":"\u25b6",s="undefined"===typeof e.result?"":e.result.every((function(e){return e}))?r.a.createElement(g.a,{icon:h.a,style:{color:"green"}}):r.a.createElement(g.a,{icon:h.b,style:{color:"red"}}),i=function(e){return new Promise((function(t){w.Text=e,y.getSynthesizeSpeechUrl(w,(function(e,a){e?console.log(e):(N.src=a,N.play(),N.onended=t)}))}))},p=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o(!c),c){t.next=10;break}return t.next=4,i(e.question.word);case 4:if(!e.question.sentence){t.next=7;break}return t.next=7,i(e.question.sentence);case 7:t.next=11;break;case 10:N.src="";case 11:o(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=new Array(e.question.word.length).fill({placeholder:"_"}).map((function(t,a){return e.result&&!e.result[a]?Object(m.a)(Object(m.a)({},t),{},{className:"box-red"}):t}));return r.a.createElement("div",{className:"input-group input-group-lg my-3"},r.a.createElement("span",{className:"number-text text-muted"},e.number+1,")"),r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text btn sound-playing",onClick:p},l)),r.a.createElement("label",{className:"question-input form-control form-control-lg"},r.a.createElement(v,{amount:e.question.word.length,handleOutputString:function(t){e.onUpdate(e.number,t)},inputRegExp:/^[a-zA-Z0-9_.-]*$/,inputProps:f})),r.a.createElement("span",null,s))}var O=a(483);function j(){var e=Object(s.f)(),t=e.state&&e.state.quiz,a=Object(n.useState)(t||{questions:O(8).map((function(e){return{word:e}}))}),c=Object(u.a)(a,1)[0],o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],p=i[1],d=Object(n.useState)(new Array(c.questions.length)),b=Object(u.a)(d,2),f=b[0],E=b[1],g=function(e,t){f[e]=t,E(f)};return r.a.createElement("section",{className:"container"},r.a.createElement("p",{className:"my-3"},"Enter your answers below. Press the \u25b6 button to hear the word."),c.questions.map((function(e,t){return r.a.createElement(x,{key:t,question:e,number:t,result:m[t],onUpdate:g})})),r.a.createElement("div",{className:"container text-center"},r.a.createElement(l.b,{className:"btn btn-secondary btn-lg my-3",to:"/"},"Home"),r.a.createElement("button",{className:"btn btn-primary btn-lg my-3 ml-3",onClick:function(){p(function(e,t){return t.map((function(t,a){return function(e,t){return t.toLowerCase().split("").map((function(t,a){return t===e.charAt(a).toLowerCase()}))}(e.questions[a].word,t)}))}(c,f))}},"Mark Answers")))}var k=a(39);function q(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(void 0),s=Object(u.a)(l,2),i=s[0],m=s[1];return r.a.createElement("div",{className:"row my-3"},r.a.createElement("div",{className:"col-1"},r.a.createElement("span",{className:"number-text text-muted"},e.number+1,")")),r.a.createElement("div",{className:"col-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Word",value:c,onChange:function(t){var a=t.currentTarget.value;o(a),e.onUpdate(e.number,{word:a,sentence:i})}})),r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Example of word in a sentence (optional)",value:i,onChange:function(t){var a=t.currentTarget.value;m(a),e.onUpdate(e.number,{sentence:a,word:c})}})))}function S(){var e=Object(n.useState)(new Array(5).fill({word:""})),t=Object(u.a)(e,2),a=t[0],c=t[1],o=function(e,t){a[e]=t,c(Object(k.a)(a))},s={questions:a.filter((function(e){return""!==e.word}))};return r.a.createElement("section",{className:"container"},r.a.createElement("p",{className:"my-3"},"Enter words below for the quiz below. You can also add an example of the word in use."),a.map((function(e,t){return r.a.createElement(q,{key:t,number:t,onUpdate:o})})),r.a.createElement("div",{className:"container text-center"},r.a.createElement("button",{className:"btn btn-secondary btn-lg my-3",onClick:function(){c([].concat(Object(k.a)(a),[{word:""}]))}},"Add Another Question"),r.a.createElement(l.b,{className:"btn btn-primary btn-lg my-3 ml-3",to:{pathname:"/quiz",state:{quiz:s}}},"Start Quiz")))}function A(){return r.a.createElement(l.a,{basename:"/hackathon-spelling-app"},r.a.createElement("header",null,r.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement(l.b,{to:"/",className:"navbar-brand d-flex align-items-center"},r.a.createElement("strong",null,"Spelling App")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"}))))),r.a.createElement("main",{role:"main"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/quiz"},r.a.createElement(j,null)),r.a.createElement(s.a,{path:"/create"},r.a.createElement(S,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(i,null)))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},"\xa9 Solirius Hackathon Winners 2020")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(484)},79:function(e,t,a){},80:function(e,t,a){},86:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.d7e68edb.chunk.js.map