(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{25:function(e,t,a){e.exports=a(38)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(22),l=a.n(c),o=a(2);var s=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Petful"),r.a.createElement("h2",{className:"subtitle"},"A FIFO Shelter for Cats and Dogs"))},u=a(9),i=a.n(u),m=a(11),p=a(4),d="https://petful-rachel.herokuapp.com",f={getAllPets:function(){return fetch("".concat(d,"/api/pets")).then((function(e){return e.json()})).catch((function(e){return console.log(e,e.message)}))},getCat:function(){return fetch("".concat(d,"/api/cats")).then((function(e){return e.json()})).catch((function(e){return console.log(e,e.message)}))},getDog:function(){return fetch("".concat(d,"/api/dogs")).then((function(e){return e.json()})).catch((function(e){return console.log(e,e.message)}))},adpotCat:function(){return fetch("".concat(d,"/api/cats"),{method:"DELETE",headers:{"content-type":"application/json"}}).catch((function(e){return console.log(e,e.message)}))},adpotDog:function(){return fetch("".concat(d,"/api/dogs"),{method:"DELETE",headers:{"Content-Type":"application/json"}}).catch((function(e){return console.log(e,e.message)}))}};var E=function(e){return r.a.createElement("div",{className:"desc_wrapper"},r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"desc-spec"},e.name,"'s Story : "),r.a.createElement("p",{className:"desc-val"},e.story)),r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"desc-spec"},"Breed : "),r.a.createElement("p",{className:"desc-val"},e.breed)),r.a.createElement("div",{className:"desc"},r.a.createElement("p",{className:"desc-spec"},"Gender : "),r.a.createElement("p",{className:"desc-val"},e.gender)))};function h(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:!0===e.selected?"selected pet-preview":"pet-preview"},r.a.createElement("h4",{className:"meet"},"Meet ",e.name),c||e.expanded?r.a.createElement("p",null,e.description):null,r.a.createElement("img",{src:e.imageURL}),e.expanded?r.a.createElement("div",null,r.a.createElement(E,e),r.a.createElement("button",{className:"adopt_button",onClick:function(){return e.select(!e.selected)}},"Adopt me!")):null,c?r.a.createElement(n.Fragment,null,r.a.createElement(E,e),r.a.createElement("button",{onClick:function(){return l(!1)}},"Less")):e.expanded?null:r.a.createElement("button",{onClick:function(){return l(!0)}},"More"))}var g=h;h.defaultProps={imageURL:"https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",description:"Black pug.",name:"Bilbo",gender:"Male",age:3,breed:"Pug",story:"Owner Passed away"};var b=a(8);var v=function(e){return r.a.createElement("section",{className:"landing_wrapper"},r.a.createElement("div",null,r.a.createElement("div",{className:"pet-header"},r.a.createElement("h3",null,"Our Current Pets")),r.a.createElement(g,Object.assign({},e.cat,{type:"cat"})),r.a.createElement(g,Object.assign({},e.dog,{type:"dog"}))),r.a.createElement("div",null,r.a.createElement("div",{className:"pet-header"},r.a.createElement("h3",null,"About Petful")),r.a.createElement("article",null,r.a.createElement("h4",null,"What is Petful"),r.a.createElement("p",null,"Petful is a shelter that only has room for one dog and one cat at a time. We keep a queue of potential families for our pets. When a family is next in the queue, they may adopt either of the pets."),r.a.createElement("h4",null,"How do I adopt with Petful"),r.a.createElement("p",null,"To adopt, click the button below and add your name to the queue. When it is your turn to adopt, you will be shown the pets available for adoption."),r.a.createElement("h4",null,"But what if I want to adopt a specific dog?"),r.a.createElement("p",null,"Unfortunately, Petful cannot accomidate any special requests in adoption."),r.a.createElement(b.a,{to:"/register"},r.a.createElement("button",null,"Get in line")))))},j=a(24),y={getAllPeople:function(){return fetch("".concat(d,"/api/people")).then((function(e){return e.json()})).catch((function(e){return console.log(e,e.message)}))},addPerson:function(e){return fetch("".concat(d,"/api/people"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({person:e})}).catch((function(e){return console.log(e,e.message)}))}},O=a(19);var w=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(p.a)(o,2),u=s[0],d=s[1],E=function(){var t=Object(m.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c){t.next=7;break}return t.next=3,f.adpotCat();case 3:return t.next=5,f.getCat();case 5:a=t.sent,e.setCat(a);case 7:if(!u){t.next=14;break}return t.next=10,f.adpotDog();case 10:return t.next=12,f.getDog();case 12:n=t.sent,e.setDog(n);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,c||u?null:r.a.createElement("h3",null,"It's your turn to adopt!"),c?r.a.createElement("div",{className:"review"}," ",r.a.createElement("h4",null,"Congratulations, you adopted ",e.cat.name)," "):null,u?r.a.createElement("div",{className:"review review_second"}," ",r.a.createElement("h4",null,"Congratulations, you adopted ",e.dog.name)," "):null,r.a.createElement(g,Object.assign({selected:c,select:function(e){return l(e)}},e.cat,{type:"cat",expanded:!0})),r.a.createElement(g,Object.assign({selected:u,select:function(e){return d(e)}},e.dog,{type:"dog",expanded:!0})),r.a.createElement(b.a,{to:"/",onClick:function(){return E()}},r.a.createElement("button",null,"Done")))};var N=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(p.a)(o,2),u=s[0],d=s[1],E=u.map((function(e,t){return r.a.createElement("p",{key:t},e.pet," was adopted by ",e.person)})),h=[].concat(Object(O.a)(e.people),[e.user]).map((function(e,t){return r.a.createElement("p",{key:t},e)}));Object(n.useEffect)((function(){var e=setTimeout((function(){g()}),2e3);return function(){return clearTimeout(e)}}),[u]);var g=function(){var t=Object(m.a)(i.a.mark((function t(){var a,n,r,o,s,m;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.people.length||c){t.next=3;break}return l(!0),t.abrupt("return",null);case 3:if(a={},n=e.people,r=n.shift(),e.setPeople(n),"dog"!==(o=1===Math.floor(2*Math.random())?"cat":"dog")){t.next=18;break}return t.next=11,f.adpotDog();case 11:return t.next=13,f.getDog();case 13:s=t.sent,e.setDog(s),a={person:r,pet:e.dog.name},t.next=26;break;case 18:if("cat"!==o){t.next=26;break}return t.next=21,f.adpotCat();case 21:return t.next=23,f.getCat();case 23:m=t.sent,e.setCat(m),a={person:r,pet:e.cat.name};case 26:d([].concat(Object(O.a)(u),[a]));case 27:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,!0===c?r.a.createElement(w,{cat:e.cat,dog:e.dog,setCat:function(t){return e.setCat(t)},setDog:function(t){return e.setDog(t)}}):r.a.createElement(n.Fragment,null,r.a.createElement("h3",{className:"ready_title"},"You're in line adopt!"),r.a.createElement("p",null,"The average wait time is 20 seconds."),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",{className:"banner_p"},e.people.length," people are ahead of you in line"),h),r.a.createElement("div",null,r.a.createElement("h4",null,"Recent adoptions"),E))))};var x=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),s=Object(p.a)(o,2),u=s[0],i=s[1];return r.a.createElement("section",{className:"adopt_wrapper"},u?r.a.createElement(N,Object.assign({},e,{user:u})):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"pet-header"},r.a.createElement(b.a,{to:"/"},r.a.createElement(j.a,{className:"back"})),r.a.createElement("h3",null,"Get in Line to Adopt")),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),y.addPerson(c).then((function(){return i(c)})).catch((function(e){return console.log(e)}))}(e)}},r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"name"},"Your name"),r.a.createElement("input",{type:"text",name:"name",className:"input-name",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",null,"I'm interested in adopting a :"),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"dog"},"Dog"),r.a.createElement("input",{type:"radio",name:"dog"})),r.a.createElement("div",{className:"form-row"},r.a.createElement("label",{htmlFor:"cat"},"Cat"),r.a.createElement("input",{type:"radio",name:"cat"})),r.a.createElement("button",{type:"submit"},"Get in Line")),r.a.createElement("p",{className:"more-info"},"For more information about adopting with Petful, please go ",r.a.createElement(b.a,{className:"link",to:"/"},"Here"))))};var k=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),s=Object(p.a)(l,2),u=s[0],d=s[1],E=Object(n.useState)([]),h=Object(p.a)(E,2),g=h[0],b=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.getCat();case 3:return t=e.sent,c(t),e.next=7,f.getDog();case 7:return a=e.sent,d(a),e.next=11,y.getAllPeople();case 11:n=e.sent,b(n),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",(function(e){return console.log(e,e.message)}));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",render:function(){return r.a.createElement(v,{cat:a,dog:u})}}),r.a.createElement(o.a,{path:"/register",render:function(){return r.a.createElement(x,{setDog:function(e){return d(e)},setCat:function(e){return c(e)},cat:a,dog:u,setPeople:function(e){return b(e)},people:g})}})))},C=a(18);var P=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Rachel Reilly | 2020"),r.a.createElement("a",{href:"https://github.com/Rachanastasia"},r.a.createElement(C.a,{className:"icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/rachel-a-reilly/"},r.a.createElement(C.b,{className:"icon"})))};a(36),a(37);var D=function(){return r.a.createElement("main",null,r.a.createElement(s,null),r.a.createElement(k,null),r.a.createElement(P,null))},S=r.a.createContext({user:"",setUser:function(){}});function F(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),c={user:a[0],setUser:a[1]};return r.a.createElement(S.Provider,{value:c},e.children)}var T=a(5),A=Object(T.a)();l.a.render(r.a.createElement(o.b,{history:A},r.a.createElement(F,null,r.a.createElement(D,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e4b08294.chunk.js.map