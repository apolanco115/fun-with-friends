(this["webpackJsonpfun-with-friends"]=this["webpackJsonpfun-with-friends"]||[]).push([[0],{103:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(8),s=n.n(r),c=(n(103),n(14)),i=n(11),l=n(16),u=n(17),p=n(18),m=n(89),h=n(34),d=n(10),g=n.n(d),f=n(22),b=n(49),v=n(50),w=n.n(v),y=n(45),O=n.n(y),C=n(51),j=n.n(C),E=n(52),S=n.n(E),x=n(175),k=n(20);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o.Component;var A=n(176),D=n(177);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(k.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getUser=Object(f.a)(g.a.mark((function e(){var t,o,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 3:return t=e.sent,e.next=6,t.json();case 6:o=e.sent,a=o.username,console.log("the user is: "+a),n.setState({roomAndUsers:N({},n.state.roomAndUsers,{user:a})}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error creating new Course!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var o,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.getUser(),o=null,e.prev=3,!n.state.isCreateRoom){e.next=10;break}return e.next=7,fetch("game-room/create",{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"},body:JSON.stringify({roomName:n.state.roomAndUsers.room})});case 7:o=e.sent,e.next=13;break;case 10:return e.next=12,fetch("game-room/join-".concat(n.state.roomAndUsers.room),{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 12:o=e.sent;case 13:return e.next=15,o.json();case 15:a=e.sent,console.log(a),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),console.log("Error creating new Course!"),console.log(e.t0);case 23:n.props.setUserAndRoom(n.state.roomAndUsers);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState({roomAndUsers:N({},n.state.roomAndUsers,{room:e.target.value})})},n.state={roomAndUsers:{user:"",room:""},isCreateRoom:!0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(A.a,{type:"text",name:"room",placeholder:"room",value:this.state.roomAndUsers.room,onChange:this.handleChange,required:!0}),a.a.createElement(D.a,{id:"create-toggle",type:"submit",onClick:function(){return e.setState({isCreateRoom:!0})}},"create "),a.a.createElement(D.a,{id:"join-toggle",type:"submit",onClick:function(){return e.setState({isCreateRoom:!1})}},"join")))}}]),t}(o.Component),B=n(56);function M(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  color: #888;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  .value {\n    flex: 1;\n    font-size: 2rem;\n  }\n  .slider {\n    flex: 1;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #efefef;\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ","\n    }\n    &::-moz-range-thumb {\n      ","\n    }\n  }\n"]);return M=function(){return e},e}var J=function(e){return"\n  width: 25px;\n  height: 25px;\n  background: ".concat(e.color,";\n  cursor: pointer;\n  outline: 5px solid #333;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n")},L=B.a.div(M(),(function(e){return J(e)}),(function(e){return J(e)})),H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={sender:"",room:"",showForm:!0,isConnected:!1,colorValue:50,brushRadius:10},n.setupBeforeUnloadListener=function(){window.addEventListener("beforeunload",(function(e){e.preventDefault();return n.disconnect(e),e.returnValue="you are now leaving","you are now leaving"}))},n.ws=null,n.stompClient=null,n.topic=null,n.currentSubscription=null,n.p=new O.a,n.joinRoom=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/game-room/join-".concat(n.state.room),{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 3:e.sent,n.ws=new j.a("/play"),n.stompClient=S.a.over(n.ws),n.stompClient.connect({},n.onConnected),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error joining room!"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.leaveRoom=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/game-room/leave",{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 3:e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error leaving room!"),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.enterRoom=function(){var e=n.state.name;n.topic="/app/game/".concat(n.state.room),n.currentSubscription&&n.currentSubscription.unsubscribe(),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:e,type:"JOIN"})),n.setState({isConnected:!0})},n.onConnected=function(){n.enterRoom()},n.disconnect=function(e){null!==n.stompClient&&(n.leaveRoom(),console.log("left room"),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:n.state.name,type:"LEAVE"})),n.setState({isConnected:!1}),n.stompClient.disconnect({},n.onDisconnected)),e.preventDefault()},n.onDisconnected=function(){n.leaveRoom(),console.log("left room"),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:n.state.name,type:"LEAVE"})),n.setState({isConnected:!1})},n.onMessageReceived=function(e){var t=JSON.parse(e.body);console.log("the sender: "+t.sender),t.sender!==n.state.sender&&"CHAT"===t.type&&n.newDrawing(t),console.log("received: "+t)},n.setUserAndRoom=function(e){console.log("the set data:"+e.user),n.setState({sender:e.user,room:e.room,showForm:!1},(function(){n.state.sender;n.joinRoom()}))},n.canvasWidth=800,n.canvasHeight=800,n.setup=function(e,t){n.p.createCanvas(n.canvasWidth,n.canvasHeight).parent(t),n.p.background(51)},n.HUEtoRGB=function(e){var t=Math.abs(6*e-3)-1,n=2-Math.abs(6*e-2),o=2-Math.abs(6*e-4);return[Math.max(0,Math.min(255,255*t)),Math.max(0,Math.min(255,255*n)),Math.max(0,Math.min(255,255*o))]},n.newDrawing=function(e){var t=JSON.parse(e.content);console.log("the sender is: "+n.state.sender),console.log("the data:"+t.mouseX),console.log("the data:"+t.mouseY),console.log("the data r,g,b: "+t.r+" "+t.g+" "+t.b),n.p.noStroke(),n.p.fill(t.r,t.g,t.b),n.p.ellipse(t.mouseX,t.mouseY,t.brushRadius,t.brushRadius)},n.mouseDragged=function(e){console.log("sending: "+n.p.mouseX+","+n.p.mouseY);var t=n.HUEtoRGB(n.state.colorValue/1e3),o=t[0],a=t[1],r=t[2],s={sender:n.state.sender,content:JSON.stringify({r:parseInt(o),g:parseInt(a),b:parseInt(r),mouseX:parseInt(n.p.mouseX),mouseY:parseInt(n.p.mouseY),brushRadius:parseInt(n.state.brushRadius)}),type:"CHAT"};n.p.mouseX>=0&&n.p.mouseY>=0&&(console.log("the mouse position X: "+n.p.mouseX+" is less than "+n.canvasWidth),console.log("the mouse position Y: "+n.p.mouseY+" is less than "+n.canvasHeight),n.p.mouseX<n.canvasWidth&&n.p.mouseY<n.canvasHeight&&n.stompClient.send("".concat(n.topic,"/sendMessage"),{},JSON.stringify(s))),n.p.noStroke(),n.p.fill(o,a,r),n.p.ellipse(parseInt(n.p.mouseX),parseInt(n.p.mouseY),parseInt(n.state.brushRadius),parseInt(n.state.brushRadius))},n.handleColorChange=function(e){n.setState({colorValue:e.target.value})},n.handleRadiusChange=function(e){n.setState({brushRadius:e.target.value})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setupBeforeUnloadListener()}},{key:"componentWillUnmount",value:function(){this.setupBeforeUnloadListener()}},{key:"render",value:function(){var e=a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},a.a.createElement(P,{setUserAndRoom:this.setUserAndRoom})),t=a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},a.a.createElement(x.a,null)),n=a.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},a.a.createElement(L,{color:"rgb(".concat(this.HUEtoRGB(this.state.colorValue/1e3)[0],",").concat(this.HUEtoRGB(this.state.colorValue/1e3)[1],",").concat(this.HUEtoRGB(this.state.colorValue/1e3)[2],")")},a.a.createElement("input",{type:"range",min:0,max:1e3,className:"slider",onChange:this.handleColorChange}),a.a.createElement("div",{className:"value"},"color")),a.a.createElement(L,{color:"#EFEFEF"},a.a.createElement("input",{type:"range",min:1,max:50,className:"slider",onChange:this.handleRadiusChange}),a.a.createElement("div",{className:"value"},this.state.brushRadius)),a.a.createElement(w.a,{setup:this.setup,draw:this.draw,mouseDragged:this.mouseDragged}));return this.state.showForm?e:this.state.isConnected?n:t}}]),t}(o.Component),X=n(171),Y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var o,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,email:n.state.email,password:n.state.password})});case 4:return o=e.sent,e.next=7,o.json();case 7:a=e.sent,localStorage.setItem("user",a.token),console.log(a),null!=a.token?console.log("signup success!"):(localStorage.clear(),alert("please enter valid user info")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Error creating new Course!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState(Object(k.a)({},e.target.name,e.target.value))},n.state={username:"",email:"",password:"",password_confirmation:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(A.a,{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0}),a.a.createElement(A.a,{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),a.a.createElement(A.a,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,required:!0}),a.a.createElement(A.a,{type:"password",name:"password_confirmation",placeholder:"confirm password",value:this.state.password_confirmation,onChange:this.handleChange,required:!0}),a.a.createElement(X.a,{type:"submit",placeholder:"sign up!"})))}}]),t}(o.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var o,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,password:n.state.password})});case 4:return o=e.sent,e.next=7,o.json();case 7:a=e.sent,localStorage.setItem("user",a.token),console.log(a.token),null!=a.token?console.log("login success!"):(localStorage.clear(),alert("please enter valid user info")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.log("Error creating new Course!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState(Object(k.a)({},e.target.name,e.target.value))},n.handleClick=function(e){e.preventDefault(),console.log(e.target.id),"login-toggle"===e.target.id?(console.log("login!"),n.setState({showLogin:!0})):"signup-toggle"===e.target.id&&(console.log("signUp!"),n.setState({showLogin:!1}))},n.state={username:"",password:"",showLogin:!0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(A.a,{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),a.a.createElement(A.a,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,required:!0}),a.a.createElement(X.a,{type:"submit",placeholder:"sign up!"}))),n=a.a.createElement(Y,null);return a.a.createElement("div",null,this.state.showLogin?t:n,a.a.createElement(D.a,{id:"login-toggle",onClick:function(){return e.setState({showLogin:!0})}},"Login "),a.a.createElement(D.a,{id:"signup-toggle",onClick:function(){return e.setState({showLogin:!1})}},"Sign Up"))}}]),t}(o.Component);n(143),o.Component;function V(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  color: #888;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  .value {\n    flex: 1;\n    font-size: 2rem;\n  }\n  .slider {\n    flex: 1;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #efefef;\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ","\n    }\n    &::-moz-range-thumb {\n      ","\n    }\n  }\n"]);return V=function(){return e},e}var T=function(e){return"\n  width: 25px;\n  height: 25px;\n  background: ".concat(e.color,";\n  cursor: pointer;\n  outline: 5px solid #333;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n")},q=B.a.div(V(),(function(e){return T(e)}),(function(e){return T(e)})),W=(o.Component,function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement("div",null,a.a.createElement(h.c,null,a.a.createElement(h.a,{path:"/",exact:!0,component:z}),a.a.createElement(h.a,{path:"/draw-wf",component:H}))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,n){e.exports=n(145)}},[[98,1,2]]]);
//# sourceMappingURL=main.e4b03ce0.chunk.js.map