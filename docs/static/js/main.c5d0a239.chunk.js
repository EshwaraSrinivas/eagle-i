(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.04f2195c.png"},,,function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a.n(l),i=(a(21),a(3)),s=a(4),o=a(6),m=a(5),u=a(7),p=a(43),d=a(42),E=(a(23),a(41)),b=(a(25),a(13)),h=a.n(b),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("ul",{className:"links"},c.a.createElement("li",null,c.a.createElement(E.a,{to:"/"},c.a.createElement("span",null,c.a.createElement("img",{className:"ui avatar image logo",src:h.a,alt:""}),"Eagle-I"))),c.a.createElement("div",{className:"spacer"}),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/settings"},c.a.createElement("button",{className:"circular ui icon button settings-button"},c.a.createElement("i",{className:"icon settings big black"})))),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/login"},c.a.createElement("button",{className:"circular ui icon button settings-button"},c.a.createElement("i",{className:"icon user big black"}))))))}}]),t}(c.a.Component),v=(a(29),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={appname:"",appurl:"",nonprod:!1,prod:!1},a.onFormSubmit=function(e){e.preventDefault()},a.onAppNameChange=function(e){a.setState({appname:e.target.value})},a.onAppUrlChange=function(e){a.setState({appurl:e.target.value})},a.saveAppData=function(){console.log(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"settings"},c.a.createElement("div",{className:"ui segment settings-form"},c.a.createElement("div",{className:"form-name"},"Add Application"),c.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},c.a.createElement("div",{className:"field"},c.a.createElement("label",null,"App name"),c.a.createElement("input",{type:"text",value:this.state.appname,onChange:this.onAppNameChange})),c.a.createElement("div",{className:"field"},c.a.createElement("label",null,"App url"),c.a.createElement("input",{type:"text",value:this.state.appurl,onChange:this.onAppUrlChange})),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"inline fields"},c.a.createElement("label",null,"Select Environment"),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"ui radio checkbox"},c.a.createElement("input",{type:"radio",name:"env",value:this.state.nonprod,onChange:function(t){e.setState({prod:!1}),e.setState({nonprod:!1===e.state.nonprod})}}),c.a.createElement("label",null,"Non prod"))),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"ui radio checkbox"},c.a.createElement("input",{type:"radio",name:"env",value:this.state.prod,onChange:function(t){e.setState({nonprod:!1}),e.setState({prod:!1===e.state.prod})}}),c.a.createElement("label",null,"prod"))))),c.a.createElement("div",{className:"field button-save"},c.a.createElement("button",{className:"ui primary button",disabled:""===this.state.appname||""===this.state.appurl||!this.state.nonprod&&!this.state.prod,onClick:this.saveAppData},"Save")))))}}]),t}(c.a.Component)),g=(a(31),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"profile"})}}]),t}(c.a.Component)),N=(a(33),function(e){var t=e.app;return c.a.createElement("div",{className:"item"},c.a.createElement("i",{className:"large ".concat(t.appname," middle aligned icon")}),c.a.createElement("div",{className:"content"},c.a.createElement("a",{className:"header",href:t.appurl},t.appname),c.a.createElement("div",{className:"description"},"Updated 10 mins ago")))}),j=(a(35),[{appname:"facebook",appUrl:"https://www.facebook.com"},{appname:"google",appUrl:"https://www.google.com"}]),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=j.map(function(e){return c.a.createElement(N,{key:e.appname,app:e})});return c.a.createElement("div",{className:"ui relaxed divided list"},e)}}]),t}(c.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"applications"},c.a.createElement("div",{className:"test-status"},c.a.createElement("button",{className:"ui button button-status"},"Check Status")),c.a.createElement(O,null))}}]),t}(c.a.Component),k=(a(37),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"ui raised very padded text container segment login-main"},c.a.createElement("div",{className:"login-content"},c.a.createElement("h2",{className:"center-text login-header"},"Login"),c.a.createElement("form",{class:"ui form"},c.a.createElement("div",{class:"field"},c.a.createElement("label",{className:"user-name"},"User Name"),c.a.createElement("div",{class:"ui left icon input"},c.a.createElement("input",{type:"text",placeholder:"Enter user name"}),c.a.createElement("i",{class:"user icon"}))),c.a.createElement("div",{class:"field"},c.a.createElement("label",{className:"password"},"Password"),c.a.createElement("div",{class:"ui left icon input"},c.a.createElement("input",{type:"text",placeholder:"Enter password"}),c.a.createElement("i",{class:"keyboard icon"}))),c.a.createElement("div",{class:"ui animated primary button right floated",tabIndex:"0"},c.a.createElement("div",{class:"visible content"},"Login"),c.a.createElement("div",{class:"hidden content"},c.a.createElement("i",{class:"sign-in icon"}))))))}}]),t}(c.a.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"app ui container"},c.a.createElement(f,null),c.a.createElement(d.a,{exact:!0,path:"/",component:y}),c.a.createElement(d.a,{path:"/login",component:k}),c.a.createElement(d.a,{path:"/profile",component:g}),c.a.createElement(d.a,{path:"/settings",component:v})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[16,2,1]]]);
//# sourceMappingURL=main.c5d0a239.chunk.js.map