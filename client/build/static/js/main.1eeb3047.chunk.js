(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(54)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),l=n.n(r),c=n(57),i=n(58),s=n(59),u=n(20),m=n(6),d=n(7),f=n(10),h=n(8),v=n(11);n(27);var E=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron"},t)};n(28);var g=function(e){var t=e.icon,n=e.title,a=e.children;return o.a.createElement("div",{className:"card mt-4"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,o.a.createElement("strong",null,o.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",n))),o.a.createElement("div",{className:"card-body"},a))};var k=function(e){var t=e.q,n=e.handleInputChange,a=e.handleFormSubmit;return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"Query"},o.a.createElement("strong",null,"Book")),o.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Ready Player One",name:"q",onChange:n,required:!0})),o.a.createElement("div",{className:"pull-right"},o.a.createElement("button",{onClick:a,type:"submit",className:"btn btn-lg search float-right"},"Search")))};n(29);function b(e){var t=e.children;return o.a.createElement("div",{className:"list-overflow-container"},o.a.createElement("ul",{className:"list-group"},t))}function p(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}function B(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function N(e){var t=e.fluid,n=e.children;return o.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function w(e){var t=e.size,n=e.children;return o.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(30);var S=function(e){var t=e.title,n=e.authors,a=e.link,r=e.description,l=e.image,c=e.Button;return o.a.createElement(p,null,o.a.createElement(N,{className:"flex-wrap-reverse"},o.a.createElement(w,{size:"md-8"},o.a.createElement("h3",{className:"font-italic"},t)),o.a.createElement(w,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn btn-light",target:"_blank",rel:"noopener noreferrer",href:a},"View"),o.a.createElement(c,null)))),o.a.createElement(N,null,o.a.createElement(w,{size:"md-6"},o.a.createElement("p",{className:"font-italic small"},"Written by ",n))),o.a.createElement(N,null,o.a.createElement(w,{size:"12 sm-4 md-2"},o.a.createElement("img",{className:"img-thumbnail img-fluid w-100",src:l,alt:t})),o.a.createElement(w,{size:"12 sm-8 md-10"},o.a.createElement("p",null,r))))},y=n(5),j=n.n(y),I={getBooks:function(e){return j.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return j.a.get("/api/books")},getBook:function(e){return j.a.get("/api/books/"+e)},deleteBook:function(e){return j.a.delete("/api/books/"+e)},saveBook:function(e){return j.a.post("/api/books",e)}},O=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Search For A Book To Begin!"},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(u.a)({},a,o))},n.getBooks=function(){I.getBooks(n.state.q).then(function(e){return n.setState({books:e.data})}).catch(function(){return n.setState({books:[],message:"No Books Found, Try a Different Search"})})},n.handleFormSubmit=function(e){e.preventDefault(),n.getBooks()},n.handleBookSave=function(e){var t=n.state.books.find(function(t){return t.id===e});I.saveBook({googleId:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return n.getBooks()})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(B,{fluid:!0},o.a.createElement(N,null,o.a.createElement(w,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",{className:"text-center"},o.a.createElement("strong",null,"(React) Google Books Search")),o.a.createElement("h2",{className:"text-center"},"Search for and Save Books of Interest."))),o.a.createElement(w,{size:"md-12"},o.a.createElement(g,{title:"Book Search",icon:"far fa-book"},o.a.createElement(k,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),o.a.createElement(N,null,o.a.createElement(w,{size:"md-12"},o.a.createElement(g,{title:"Results"},this.state.books.length?o.a.createElement(b,null,this.state.books.map(function(t){return o.a.createElement(S,{key:t.id,title:t.volumeInfo.title,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-primary ml-2"},"Save")}})})):o.a.createElement("h2",{className:"text-center"},this.state.message)))))}}]),t}(a.Component);n(49);var x=function(e){return o.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")},z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},n.getSavedBooks=function(){I.getSavedBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.deleteBook=function(e){I.deleteBook(e).then(function(e){return n.getSavedBooks()}).catch(function(e){return console.log(e)})},n}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(B,{fluid:!0},o.a.createElement(N,null,o.a.createElement(w,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"Books On My List")),o.a.createElement(g,{title:"Saved Books",icon:"download"},this.state.books.length?o.a.createElement(b,null,this.state.books.map(function(t){return o.a.createElement(S,{key:t._id,title:t.title,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return o.a.createElement(x,{onClick:function(){return e.deleteBook(t._id)},className:"btn btn-danger ml-2"},"Delete")}})})):o.a.createElement("h2",{className:"text-center"},"No Saved Books")))))}}]),t}(a.Component);var C=function(){return o.a.createElement(B,{fluid:!0},o.a.createElement(N,null,o.a.createElement(w,{size:"md-12"},o.a.createElement(E,null,o.a.createElement("h1",null,"404 Page Not Found"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};n(50);var F=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},o.a.createElement("a",{className:"navbar-brand fr",href:"/"},"React Google Books Search"),o.a.createElement("a",{className:"navbar-brand fl",href:"/saved"},"Saved Books"))};var q=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(F,null),o.a.createElement(i.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:O}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:z}),o.a.createElement(s.a,{component:C}))))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(q,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):R(e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.1eeb3047.chunk.js.map