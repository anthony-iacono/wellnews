(this.webpackJsonpwellnews=this.webpackJsonpwellnews||[]).push([[0],{15:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(18),r=n.n(i),a=n(17),l=n(8),o=n(4),u=n(2),d=function(e){return fetch("https://api.nytimes.com/svc/topstories/v2/".concat(e,".json?api-key=GKUzDD1VY9ssjZ1AGusX3ci6AeoXCaSr")).then((function(e){return j(e)})).then((function(e){return b(e.results.slice(0,10))}))},j=function(e){if(!e.ok)throw new Error("".concat(e.status," Error"));return e.json()},b=function(e){return e.filter((function(e){var t=e.multimedia;return Array.isArray(t)})).map((function(e){var t=e.section,n=e.title,s=e.abstract,c=e.short_url,i=e.multimedia,r=e.url;return{topic:t,title:n,abstract:s,shortUrl:c,sentiment:0,multimedia:i[0],id:r.slice(24,-5).replace(/\//g,"-")}}))},h=(n(25),n(0)),m=function(e){var t=e.title,n=e.image,s=e.id,c=e.shortUrl,i=e.sentiment,r=e.topic,a=e.updateUserSentiment,l=e.storeArticle,o=e.abstract,u=e.toggleSaved,d=e.isSaved;return Object(h.jsxs)("article",{className:"news-card cy-article-card",children:[Object(h.jsxs)("div",{className:"card-header",children:[Object(h.jsx)("p",{className:"topic-text",children:r.toUpperCase()}),d?Object(h.jsx)("button",{className:"save-button",onClick:function(){return u(s)},type:"button","aria-label":"Remove article from saved articles",children:Object(h.jsx)("span",{className:"material-icons",children:"bookmark"})}):Object(h.jsx)("button",{className:"save-button",onClick:function(){return u(s)},type:"button","aria-label":"Save article",children:Object(h.jsx)("span",{className:"material-icons",children:"bookmark_border"})})]}),Object(h.jsxs)("a",{onClick:function(){a(i),l(s)},className:"cy-article-link",href:c,target:"_blank",children:[Object(h.jsx)("h2",{className:"article-title cy-article-title",children:t}),Object(h.jsx)("img",{className:"article-image cy-article-image",src:n,alt:t})]}),Object(h.jsxs)("p",{className:"abstract-text",children:[" ",o," "]})]})},f=(n(27),function(e){var t=e.assignTopic;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)(o.b,{to:"/wellnews",children:Object(h.jsx)("button",{className:"check-in-btn","aria-label":"Return to check in question"})}),Object(h.jsx)(o.b,{to:"/wellnews/feed/home",onClick:function(){return t("home")},children:Object(h.jsxs)("h1",{className:"header-txt cy-header-txt",children:["Well",Object(h.jsx)("span",{className:"header-text-2",children:"News"})]})}),Object(h.jsx)(o.b,{to:"/wellnews/topics",children:Object(h.jsx)("button",{className:"list-btn","aria-label":"Browse by Topic"})})]})}),p=(n(15),function(e){var t=e.unreadArticles,n=e.updateUserSentiment,c=e.storeArticle,i=e.selectedTopic,r=e.toggleSaved,a=e.savedArticles,u=e.assignTopic,d=e.loading,j=Object(s.useState)(0),b=Object(l.a)(j,2),p=b[0],O=b[1],x=[];t&&(x=t.map((function(e){var t;return t=!!a.find((function(t){return t.id===e.id})),Object(h.jsx)(m,{id:e.id,shortUrl:e.shortUrl,title:e.title,image:e.multimedia.url,sentiment:e.sentiment,topic:e.topic,abstract:e.abstract,updateUserSentiment:n,storeArticle:c,toggleSaved:r,isSaved:t},e.title)})));var g="home"===i?"Top News":i.charAt(0).toUpperCase()+i.slice(1);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{assignTopic:u}),Object(h.jsx)("h2",{children:g}),Object(h.jsxs)("section",{className:"articles-container",children:[x.length>0&&x[p],0===x.length&&!d&&Object(h.jsx)(o.b,{to:"/wellnews/topics",className:"find-more-btn",children:"Find more articles by topic"})]}),Object(h.jsx)("div",{className:"buffer"}),Object(h.jsxs)("div",{className:"arrow-container",children:[!!p&&Object(h.jsx)("button",{className:"backward-arrow-btn",onClick:function(){return O(p-1)},"aria-label":"Previoius article",children:Object(h.jsx)("span",{className:"material-icons",children:"arrow_back_ios"})}),p<x.length-1&&Object(h.jsx)("button",{className:"forward-arrow-btn",onClick:function(){return O(p+1)},"aria-label":"Next article",children:Object(h.jsx)("span",{className:"material-icons",children:"arrow_forward_ios"})})]})]})}),O=function(e){var t=e.history,n=e.storeArticle,s=e.updateUserSentiment,c=e.toggleSaved,i=e.savedArticles,r=e.assignTopic,a=[];return t&&(a=t.map((function(e){var t;return t=!!i.find((function(t){return t.id===e.id})),Object(h.jsx)(m,{title:e.title,image:e.multimedia.url,sentiment:e.sentiment,shortUrl:e.shortUrl,id:e.id,topic:e.topic,abstract:e.abstract,storeArticle:n,updateUserSentiment:s,toggleSaved:c,isSaved:t},e.title)}))),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{assignTopic:r}),Object(h.jsx)("h2",{children:"History"}),Object(h.jsx)("section",{className:"articles-container",children:a.length?a:Object(h.jsx)("h3",{className:"no-match-message",children:"Articles you've read will appear here"})})]})},x=function(){var e=Object(u.g)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{className:"cy-error-message",children:["No match for ",Object(h.jsx)("code",{children:e.pathname})]}),Object(h.jsx)(o.b,{to:"/wellnews/feed/home",className:"cy-feed-link",children:"Back to Feed"})]})},g=(n(36),function(e){var t=e.updateUserSentiment,n=Object(u.f)(),s=function(e){t(e),n.push("/wellnews/feed/home")};return Object(h.jsxs)("section",{className:"questionnaire",children:[Object(h.jsx)("header",{className:"questionnaire-header",children:Object(h.jsx)("div",{className:"blue-stripe",children:Object(h.jsxs)("h1",{className:"header-text cy-header-text",children:["Well",Object(h.jsx)("span",{className:"header-text-2",children:"News"})]})})}),Object(h.jsx)("h2",{className:"cy-sentiment-question",children:"What kind of mood are you in?"}),Object(h.jsxs)("div",{className:"sentiments-container",children:[Object(h.jsx)("button",{className:"sentiment-btn cy-strongly-negative-btn","aria-label":"strongly negative",title:"strongly negative",onClick:function(){return s(0)},children:"\u2639\ufe0f"}),Object(h.jsx)("button",{className:"sentiment-btn cy-negative-btn","aria-label":"negative",title:"negative",onClick:function(){return s(2)},children:"\ud83d\ude41"}),Object(h.jsx)("button",{className:"sentiment-btn cy-neutral-btn","aria-label":"neutral",title:"neutral",onClick:function(){return s(5)},children:"\ud83d\ude10"}),Object(h.jsx)("button",{className:"sentiment-btn cy-positive-btn","aria-label":"positive",title:"positive",onClick:function(){return s(8)},children:"\ud83d\ude42"}),Object(h.jsx)("button",{className:"sentiment-btn cy-strongly-positive-btn","aria-label":"strongly positive",title:"strongly positive",onClick:function(){return s(10)},children:"\ud83d\ude01"})]}),Object(h.jsx)("button",{className:"skip-btn",onClick:function(){return s(5)},children:"Skip"}),Object(h.jsx)("button",{className:"view-synopsis-button cy-view-synopsis-button",name:"viewSynopsisButton",onClick:function(e){e.preventDefault(),document.getElementById("synopsisInfo").classList.toggle("hidden")},children:"Why we ask? \u25bd"}),Object(h.jsxs)("article",{className:"hidden wellnews-synopsis cy-wellnews-synopsis",id:"synopsisInfo",children:[Object(h.jsx)("p",{children:"Based on your mood and the articles you read, we dynamically sort your feed and nudge you toward sentimental balance. We don't filter your feed."}),Object(h.jsx)("p",{children:"If you prefer, skip the questionnare and we'll sort your feed based only on the articles you read."})]})]})}),v=(n(37),function(e){var t=e.assignTopic,n=["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","t-magazine","travel","upshot","us","world"].map((function(e){return Object(h.jsx)(o.b,{className:"topic",to:"/wellnews/feed/".concat(e),onClick:function(){return t(e)},children:e.charAt(0).toUpperCase()+e.slice(1)},e)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{assignTopic:t}),Object(h.jsx)(o.b,{to:"/wellnews/saved",children:Object(h.jsxs)("button",{className:"saved-btn",type:"button","aria-label":"Saved articles",children:[Object(h.jsx)("span",{className:"material-icons",children:"bookmark"}),"Saved Articles"]})}),Object(h.jsx)(o.b,{to:"/wellnews/history",children:Object(h.jsxs)("button",{className:"history-btn",type:"button","aria-label":"History",children:[Object(h.jsx)("span",{className:"material-icons",children:"history"}),"History"]})}),Object(h.jsx)("form",{className:"cy-topic-selection",children:n})]})}),y=function(e){var t=e.savedArticles,n=e.storeArticle,s=e.updateUserSentiment,c=e.toggleSaved,i=e.assignTopic,r=[];return t&&(r=t.map((function(e){var i=!1;return i=!!t.find((function(t){return t.id===e.id})),Object(h.jsx)(m,{title:e.title,image:e.multimedia.url,sentiment:e.sentiment,shortUrl:e.shortUrl,id:e.id,topic:e.topic,abstract:e.abstract,storeArticle:n,toggleSaved:c,updateUserSentiment:s,isSaved:i},e.title)}))),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{assignTopic:i}),Object(h.jsx)("h2",{children:"Saved Articles"}),Object(h.jsx)("section",{className:"articles-container",children:r.length?r:Object(h.jsx)("h3",{className:"no-match-message",children:"Saved articles will appear here"})})]})},w=(n(38),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)([]),r=Object(l.a)(i,2),b=r[0],m=r[1],f=Object(s.useState)([]),w=Object(l.a)(f,2),N=w[0],S=w[1],k=Object(s.useState)(null),A=Object(l.a)(k,2),U=A[0],C=A[1],T=Object(s.useState)("home"),F=Object(l.a)(T,2),I=F[0],E=F[1],_=Object(s.useState)([]),B=Object(l.a)(_,2),H=B[0],q=B[1],J=Object(s.useState)(""),W=Object(l.a)(J,2),M=W[0],z=W[1],D=Object(s.useState)(!0),G=Object(l.a)(D,2),L=G[0],P=G[1];Object(s.useEffect)((function(){d("home").then((function(e){K(e).then((function(t){var n=e.map((function(e,n){return e.sentiment=Math.round(5*(t[n]+1)),e}));c(n),P(!1),z("")}))})).catch((function(e){return z(e.message)}))}),[]),Object(s.useEffect)((function(){var e=R();c(e)}),[U]),Object(s.useEffect)((function(){Q();var e=X();m(e)}),[n]);var R=function(){return U>=0&&U<=3?n.slice().sort((function(e,t){return t.sentiment-e.sentiment})):U<=10&&U>=7?n.slice().sort((function(e,t){return e.sentiment-t.sentiment})):n.slice().sort((function(){return.5-Math.random()}))},X=function(){return N.length?n.filter((function(e){return!N.find((function(t){return t.id===e.id}))})):n},K=function(e){return Promise.all(e.map((function(e){return t=e.title,n=e.abstract,fetch("https://api.dandelion.eu/datatxt/sent/v1/?lang=en&text=".concat(t+" "+n,"&token=2631fc217a884d47981ad6e975a50643")).then((function(e){return j(e)})).then((function(e){return e.sentiment.score})).catch((function(e){return console.log("error: ",e)}));var t,n})))},V=function(e){if(null===U)return C(e);C((U+e)/2)},Y=function(e){c([]),P(!0),E(e),d(e).then((function(e){K(e).then((function(t){var n=e.map((function(e,n){return e.sentiment=Math.round(5*(t[n]+1)),e}));c(n),P(!1),z("")}))})).catch((function(e){return z(e.message)}))},Z=function(){return JSON.parse(localStorage.getItem("wellnewsHistory"))},Q=function(){var e=Z();if(e&&e.length){var t=n.filter((function(t){return e.includes(t.id)}));S(t)}},$=function(e){var t=n.find((function(t){return t.id===e})),s=Z();if(!s)return localStorage.setItem("wellnewsHistory",JSON.stringify([e])),S([t]);s.includes(e)||(s.push(e),localStorage.setItem("wellnewsHistory",JSON.stringify(s)),S([].concat(Object(a.a)(N),[t])))},ee=function(e){if(H.find((function(t){return t.id===e}))){var t=H.filter((function(t){return t.id!==e}));q(t)}else{var s=n.find((function(t){return t.id===e}));q([].concat(Object(a.a)(H),[s]))}},te="/wellnews/feed/".concat(I);return Object(h.jsx)("div",{className:"app-container",children:Object(h.jsx)(o.a,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/wellnews/",children:Object(h.jsx)(g,{updateUserSentiment:V})}),Object(h.jsx)(u.a,{path:te,render:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{unreadArticles:b,selectedTopic:I,updateUserSentiment:V,storeArticle:$,toggleSaved:ee,savedArticles:H,assignTopic:Y,loading:L}),L&&Object(h.jsx)("h2",{className:"loading-text",children:"Loading... "}),M&&Object(h.jsx)("h2",{children:M})]})}}),Object(h.jsx)(u.a,{exact:!0,path:"/wellnews/topics",children:Object(h.jsx)(v,{assignTopic:Y})}),Object(h.jsx)(u.a,{path:"/wellnews/saved",children:Object(h.jsx)(y,{savedArticles:H,storeArticle:$,updateUserSentiment:V,toggleSaved:ee,assignTopic:Y})}),Object(h.jsx)(u.a,{exact:!0,path:"/wellnews/history",render:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{history:N,storeArticle:$,updateUserSentiment:V,toggleSaved:ee,savedArticles:H,assignTopic:Y}),M&&Object(h.jsx)("h2",{children:M})]})}}),Object(h.jsx)(u.a,{path:"*",component:x})]})})})});n(39);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e45bd22f.chunk.js.map