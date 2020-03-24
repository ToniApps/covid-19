(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{107:function(e,t,a){e.exports=a(207)},112:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(112),a(10)),i=a(257),u=a(96),s=a(247),m=a(248),d=a(98),f=a(249),h="https://covid19.mathdro.id/api";function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.startsWith("/")&&(e=e.slice(1));var t=Object(n.useState)(null),a=Object(l.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(null),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(!0),d=Object(l.a)(m,2),f=d[0],v=d[1];return Object(n.useEffect)((function(){fetch("".concat(h,"/").concat(e)).then((function(e){return e.json()})).then(o).then((function(){return v(!1)})).catch(s)}),[e]),[r,u,f]}var p=v,E=a(233),g=a(237),b=a(58);function y(e){var t=e.title,a=e.data,n=e.color,o=void 0===n?b.a[900]:n;return r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(d.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement(d.a,{variant:"h4",component:"h4",style:{color:o}},a.value)))}var C=a(238),w=a(239),j=a(61),O=a(59);function k(e){var t=e.url,a=e.style,n=v(t),o=Object(l.a)(n,3),c=o[0],i=o[1],u=o[2];return i?(console.error(i),r.a.createElement("div",null,"Error!!")):u?r.a.createElement(C.a,null):c&&"error"in c?r.a.createElement(d.a,{variant:"h4",component:"h4",color:"error",style:{marginTop:"2rem"}},"There isn't data available for this country"):r.a.createElement(w.a,{style:a,container:!0,spacing:3},r.a.createElement(w.a,{item:!0,xs:12,md:4},r.a.createElement(y,{title:"Confirmed",data:c.confirmed})),r.a.createElement(w.a,{item:!0,xs:12,md:4},r.a.createElement(y,{title:"Recovered",data:c.recovered,color:j.a[500]})),r.a.createElement(w.a,{item:!0,xs:12,md:4},r.a.createElement(y,{title:"Deaths",data:c.deaths,color:O.a[500]})))}var S=a(240),R=a(255),T=a(241),D=a(253),x=a(250),A=a(32),I=a.n(A);function W(e){var t=e.value,a=e.onCountrySelected,n=e.updateCountryName,o=p("countries"),c=Object(l.a)(o,3),i=c[0],u=c[1],s=c[2];if(u)return console.error(u),r.a.createElement("div",null,"Error!!");if(s)return r.a.createElement(S.a,null);var m=i.countries.map((function(e){var t=e.name,a=e.iso3;return r.a.createElement(R.a,{value:a,key:a},t)}));return r.a.createElement(T.a,null,r.a.createElement(D.a,{id:"country-select-label"},"Country"),r.a.createElement(x.a,{labelId:"country-select-label",id:"country-select",value:t,onChange:function(e){a(e.target.value),n(I.a.invert(i.countries)[e.target.value])}},m))}function M(e){var t=Object(n.useState)("ESP"),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)("Spain"),u=Object(l.a)(i,2),s=u[0],m=u[1],f="/countries/".concat(o);return r.a.createElement("div",{style:e.style},r.a.createElement(d.a,{variant:"h3",component:"h3"},"Results for ",s),r.a.createElement(W,{value:o,onCountrySelected:c,updateCountryName:m}),r.a.createElement(k,{style:{marginTop:"1rem"},url:f}))}function Y(e){var t=e.style;return r.a.createElement("div",{style:t},r.a.createElement(d.a,{variant:"h3",component:"h3"},"Global Results"),r.a.createElement(k,{style:{marginTop:"1rem"}}))}var B=a(15),L=a.n(B),N=a(56),P=a(244);function U(){var e=p("daily"),t=Object(l.a)(e,3),a=t[0],n=t[1],o=t[2];if(n)return console.error(n),r.a.createElement("div",null,"Error!!");if(o)return r.a.createElement(C.a,null);var c=a.map((function(e){return e.totalConfirmed})),i=a.map((function(e){return e.totalRecovered})),u={labels:a.map((function(e){return e.reportDateString})),datasets:[{label:"Confirmed",data:c,backgroundColor:P.a[100]+"40",borderColor:P.a[500]},{label:"Recovered",data:i,backgroundColor:j.a[100]+"80",borderColor:j.a[500]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h4",component:"h4"},"Daily Chart"),r.a.createElement(N.b,{data:u}))}var V=a(245),F=a(246),_=a(251),J=a(256);function G(e){return function(e){return L()(e).format("M-D-YYYY")}(L()(e).subtract(1,"day").toDate())}function $(){var e=Object(n.useState)(L()()),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(!1),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(n.useState)(1e4),f=Object(l.a)(m,2),h=f[0],v=f[1],E=p("daily/"+G(a)),g=Object(l.a)(E,3),b=g[0],y=g[1],w=g[2];if(y)return console.error(y),r.a.createElement("div",null,"Error!!");if(w)return r.a.createElement(C.a,null);var k=[],S=[],R=[],T=[],D=I.a.filter(b,(function(e){return parseInt(e.confirmed)>h}));if(D=I.a.groupBy(D,(function(e){return e.countryRegion})),I.a.forEach(D,(function(e,t){k.push(t),S.push(e.map((function(e){return parseInt(e.confirmed)})).reduce((function(e){return e}))),R.push(e.map((function(e){return parseInt(e.recovered)})).reduce((function(e){return e}))),T.push(e.map((function(e){return parseInt(e.deaths)})).reduce((function(e){return e})))})),!u){var x=k.findIndex((function(e){return"China"===e}));k.splice(x,1),S.splice(x,1),R.splice(x,1),T.splice(x,1)}var A={labels:k,datasets:[{label:"Confirmed Cases",data:S,backgroundColor:P.a[500],borderColor:P.a[500]},{label:"Recovered Cases",data:R,backgroundColor:j.a[500],borderColor:j.a[500]},{label:"Death Cases",data:T,backgroundColor:O.a[500],borderColor:O.a[500]}]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h4",component:"h4"},"Daily Chart Per Country"),r.a.createElement(V.a,{row:!0},r.a.createElement(F.a,{control:r.a.createElement(_.a,{checked:u,onChange:function(e){s(!u)},value:u,color:"primary"}),label:"Show China"}),r.a.createElement(J.a,{id:"date",label:"Date",type:"date",defaultValue:L()(a).format("YYYY-MM-DD"),onChange:function(e){e.persist(),o(e.target.value)},style:{marginLeft:"1rem"}}),r.a.createElement(J.a,{id:"minCases",label:"Minimum N\xba of Cases",type:"number",defaultValue:h,onChange:function(e){e.persist(),v(e.target.value)},style:{marginLeft:"1rem"}})),r.a.createElement(N.a,{data:A,options:{scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}))}function q(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement($,null))}var z=a(4),H=Object(z.a)({root:{height:15}})(C.a);function K(e){var t=e.style,a=L()("2020-02-14"),n=a.add(15,"months"),o=n.diff(L()(),"days"),c=n.diff(L()(),"months"),l=a.unix()/n.unix();return r.a.createElement(E.a,{style:t},r.a.createElement(g.a,null,r.a.createElement(d.a,{color:"textSecondary",gutterBottom:!0},"Vaccine Remaining Time"),r.a.createElement(H,{variant:"determinate",value:l}),r.a.createElement(d.a,{color:"textSecondary",style:{marginTop:"0.5rem"}},"~",r.a.createElement("strong",null,o)," Days Remaining (",r.a.createElement("strong",null,c)," Months)")))}var Q=a(60),X=Object(i.a)(Object(u.a)({palette:{primary:Q.a}}));var Z=function(){var e=p(),t=Object(l.a)(e,2)[0],a="...";return t&&(a=L()(t.lastUpdate).toString()),r.a.createElement(s.a,{theme:X},r.a.createElement(m.a,{style:{marginTop:"3rem"}},r.a.createElement(d.a,{variant:"h1",component:"h1"},"COVID-19 Daily Data"),r.a.createElement(d.a,{variant:"h5",component:"h5"},"Created by\xa0",r.a.createElement(f.a,{target:"_blank",href:"https://www.linkedin.com/in/antonio-mora-rives/"},r.a.createElement("strong",null,"Antonio Mora Rives"))),r.a.createElement(d.a,{variant:"h2",component:"h2",style:{marginTop:"1rem"}},"Data"),r.a.createElement(Y,{style:{marginTop:"1rem"}}),r.a.createElement(K,{style:{marginTop:"3rem"}}),r.a.createElement(M,{style:{marginTop:"3rem"}}),r.a.createElement(d.a,{variant:"h3",component:"h3",style:{marginTop:"1rem"}},r.a.createElement(f.a,{target:"_blank",href:"https://drive.google.com/open?id=1yCPR-ukAgE55sROnmBUFmtLN6riVLTu3&usp=sharing"},"Realtime Map")),r.a.createElement(d.a,{variant:"h2",component:"h2",style:{marginTop:"1rem"}},"Charts"),r.a.createElement(q,null),r.a.createElement(d.a,{variant:"h6",component:"h6",style:{marginTop:"3rem"}},"API data provided by\xa0",r.a.createElement(f.a,{target:"_blank",href:"https://covid19.mathdro.id/"},"Mathdroid")),r.a.createElement(d.a,{variant:"h6",component:"h6",style:{marginBottom:"3rem"}},"Updated ",a)))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}window.React=r.a,c.a.render(r.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()}},[[107,1,2]]]);
//# sourceMappingURL=main.3108d6db.chunk.js.map