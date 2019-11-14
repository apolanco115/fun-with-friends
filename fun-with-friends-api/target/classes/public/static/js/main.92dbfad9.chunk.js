(this["webpackJsonpfun-with-friends"]=this["webpackJsonpfun-with-friends"]||[]).push([[0],{100:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),i=(n(100),n(15)),c=n(12),l=n(19),u=n(20),m=n(21),p=n(59),d=n(33),h=n(10),g=n.n(h),f=n(22),b=n(16),v=n(46),w=n(47),y=n.n(w),C=n(42),j=n.n(C),E=n(48),O=n.n(E),S=n(49),k=n.n(S),x=n(170),R=n(171),U=n(172);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D,N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getUser=Object(f.a)(g.a.mark((function e(){var t,a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/user",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("user")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o=a.username,console.log("the user is: "+o),n.setState({roomAndUsers:I({},n.state.roomAndUsers,{user:o})}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error creating new Course!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.getUser(),a=null,e.prev=3,!n.state.isCreateRoom){e.next=10;break}return e.next=7,fetch("game-room/create",{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"},body:JSON.stringify({roomName:n.state.roomAndUsers.room})});case 7:a=e.sent,e.next=13;break;case 10:return e.next=12,fetch("game-room/join-".concat(n.state.roomAndUsers.room),{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 12:a=e.sent;case 13:return e.next=15,a.json();case 15:o=e.sent,console.log(o),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(3),console.log("Error creating new Course!"),console.log(e.t0);case 23:n.props.setUserAndRoom(n.state.roomAndUsers);case 24:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState({roomAndUsers:I({},n.state.roomAndUsers,{room:e.target.value})})},n.state={roomAndUsers:{user:"",room:""},isCreateRoom:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(R.a,{type:"text",name:"room",placeholder:"room",value:this.state.roomAndUsers.room,onChange:this.handleChange,required:!0}),o.a.createElement(U.a,{id:"create-toggle",type:"submit",onClick:function(){return e.setState({isCreateRoom:!0})}},"create "),o.a.createElement(U.a,{id:"join-toggle",type:"submit",onClick:function(){return e.setState({isCreateRoom:!1})}},"join")))}}]),t}(a.Component),B=n(52);function M(){var e=Object(v.a)(["\n  display: grid;\n  color: #FFF;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  .value {\n    justify-self: center;\n    font-family: Sans-serif;  \n    font-size: 1.5rem;\n    margin : .5em;\n  }\n  .slider {\n    justify-self: center;\n    -webkit-appearance: none;\n    width: 75%;\n    height: .4em;\n    border-radius: 1em;\n    background: #cdcdcd\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ","\n    }\n  }\n\n"]);return M=function(){return e},e}var J=B.a.div(M(),(function(e){return function(e){return"\n  width: 1.5em;\n  height: 1.5em;\n  background: ".concat(e.color,";\n  cursor: pointer;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n")}(e)})),L=(D={height:"100vh",display:"grid",gridTemplateColumns:1},Object(b.a)(D,"gridTemplateColumns","85% 15%"),Object(b.a)(D,"background","#656565"),D),H={gridRowStart:1,gridColumnEnd:2},T={height:"15%",background:"linear-gradient(to right, red, orange, yellow, lime,Turquoise,Cyan, Blue, Violet, Crimson,red)"},V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={sender:"",room:"",showForm:!0,isConnected:!1,colorValue:.7,brushRadius:10},n.setupBeforeUnloadListener=function(){window.addEventListener("beforeunload",(function(e){e.preventDefault();return n.disconnect(e),e.returnValue="you are now leaving","you are now leaving"}))},n.ws=null,n.stompClient=null,n.topic=null,n.currentSubscription=null,n.p=new j.a,n.joinRoom=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/game-room/join-".concat(n.state.room),{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 3:e.sent,n.ws=new O.a("/play"),n.stompClient=k.a.over(n.ws),n.stompClient.connect({},n.onConnected),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error joining room!"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),n.leaveRoom=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/game-room/leave",{method:"post",headers:{Authorization:"Bearer "+localStorage.getItem("user"),"Content-Type":"application/json"}});case 3:e.sent,e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error leaving room!"),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.enterRoom=function(){var e=n.state.name;n.topic="/app/game/".concat(n.state.room),n.currentSubscription&&n.currentSubscription.unsubscribe(),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:e,type:"JOIN"})),n.setState({isConnected:!0})},n.onConnected=function(){n.enterRoom()},n.disconnect=function(e){null!==n.stompClient&&(n.leaveRoom(),console.log("left room"),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:n.state.name,type:"LEAVE"})),n.setState({isConnected:!1}),n.stompClient.disconnect({},n.onDisconnected)),e.preventDefault()},n.onDisconnected=function(){n.leaveRoom(),console.log("left room"),n.currentSubscription=n.stompClient.subscribe("/topic/".concat(n.state.room),n.onMessageReceived),n.stompClient.send("".concat(n.topic,"/addUser"),{},JSON.stringify({sender:n.state.name,type:"LEAVE"})),n.setState({isConnected:!1})},n.onMessageReceived=function(e){var t=JSON.parse(e.body);console.log("the sender: "+t.sender),t.sender!==n.state.sender&&"CHAT"===t.type&&n.newDrawing(t),console.log("received: "+t)},n.setUserAndRoom=function(e){console.log("the set data:"+e.user),n.setState({sender:e.user,room:e.room,showForm:!1},(function(){n.state.sender;n.joinRoom()}))},n.canvasWidth=.8365*n.p.windowWidth,n.canvasHeight=n.p.windowHeight,n.setup=function(e,t){n.p.createCanvas(n.canvasWidth,n.canvasHeight).parent(t),n.p.background(51)},n.HUEtoRGB=function(e){var t=Math.abs(6*e-3)-1,n=2-Math.abs(6*e-2),a=2-Math.abs(6*e-4);return[Math.max(0,Math.min(255,255*t)),Math.max(0,Math.min(255,255*n)),Math.max(0,Math.min(255,255*a))]},n.newDrawing=function(e){var t=JSON.parse(e.content);console.log("the sender is: "+n.state.sender),console.log("the data:"+t.mouseX),console.log("the data:"+t.mouseY),console.log("the data r,g,b: "+t.r+" "+t.g+" "+t.b),n.p.noStroke(),n.p.fill(t.r,t.g,t.b),n.p.ellipse(t.mouseX,t.mouseY,t.brushRadius,t.brushRadius)},n.mouseDragged=function(e){console.log("sending: "+n.p.mouseX+","+n.p.mouseY);var t=n.HUEtoRGB(n.state.colorValue),a=t[0],o=t[1],r=t[2],s={sender:n.state.sender,content:JSON.stringify({r:parseInt(a),g:parseInt(o),b:parseInt(r),mouseX:parseInt(n.p.mouseX),mouseY:parseInt(n.p.mouseY),brushRadius:parseInt(n.state.brushRadius)}),type:"CHAT"};n.p.mouseX>=0&&n.p.mouseY>=0&&(console.log("the mouse position X: "+n.p.mouseX+" is less than "+n.canvasWidth),console.log("the mouse position Y: "+n.p.mouseY+" is less than "+n.canvasHeight),n.p.mouseX<n.canvasWidth&&n.p.mouseY<n.canvasHeight&&n.stompClient.send("".concat(n.topic,"/sendMessage"),{},JSON.stringify(s))),n.p.noStroke(),n.p.fill(a,o,r),n.p.ellipse(parseInt(n.p.mouseX),parseInt(n.p.mouseY),parseInt(n.state.brushRadius),parseInt(n.state.brushRadius))},n.handleColorChange=function(e){n.setState({colorValue:e.target.value})},n.handleRadiusChange=function(e){n.setState({brushRadius:e.target.value})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setupBeforeUnloadListener()}},{key:"componentWillUnmount",value:function(){this.setupBeforeUnloadListener()}},{key:"render",value:function(){var e=o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},o.a.createElement(N,{setUserAndRoom:this.setUserAndRoom})),t=o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},o.a.createElement(x.a,null)),n=o.a.createElement("div",{style:L},o.a.createElement("div",null,o.a.createElement(J,{color:"rgb(".concat(this.HUEtoRGB(this.state.colorValue)[0],",").concat(this.HUEtoRGB(this.state.colorValue)[1],",").concat(this.HUEtoRGB(this.state.colorValue)[2],")")},o.a.createElement("div",{className:"value"},"color slider"),o.a.createElement("input",{style:T,type:"range",min:0,step:.001,max:1,className:"slider col-slider",value:this.state.colorValue,onChange:this.handleColorChange})),o.a.createElement(J,{color:"#333"},o.a.createElement("div",{className:"value"},"brush radius: ",this.state.brushRadius,"px"),o.a.createElement("input",{type:"range",min:1,max:50,className:"slider brush-rad",value:this.state.brushRadius,onChange:this.handleRadiusChange}))),o.a.createElement(y.a,{style:H,setup:this.setup,draw:this.draw,mouseDragged:this.mouseDragged}));return this.state.showForm?e:this.state.isConnected?n:t}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,email:n.state.email,password:n.state.password})});case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,localStorage.setItem("user",o.token),console.log(o),null!=o.token?(console.log("signup success!"),n.props.history.push("/draw-wf")):500==o.response?(localStorage.clear(),alert("there is already a user with that name")):(localStorage.clear(),alert("an unrecognized error has occured, please try again")),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),n.props.history.push("/draw-wf"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState(Object(b.a)({},e.target.name,e.target.value))},n.state={username:"",email:"",password:"",password_confirmation:""},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(R.a,{type:"email",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(R.a,{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(R.a,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(R.a,{type:"password",name:"password_confirmation",placeholder:"confirm password",value:this.state.password_confirmation,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(U.a,{type:"submit"},"sign up!")))}}]),t}(a.Component),X=Object(d.f)(z),Y=n(87),q={display:"grid",alignContent:"center",justifyContent:"center",height:"100vh",backgroundSize:"contain",backgroundImage:"url(".concat(n.n(Y).a,")")},P={margin:0},W={margin:0},F=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,password:n.state.password})});case 4:return a=e.sent,e.next=7,a.json();case 7:o=e.sent,localStorage.setItem("user",o.token),console.log(o.token),null!=o.token?(console.log("login success!"),n.props.history.push("/draw-wf")):(localStorage.clear(),alert("please enter valid user info")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){console.log("event"),n.setState(Object(b.a)({},e.target.name,e.target.value))},n.handleClick=function(e){e.preventDefault(),console.log(e.target.id),"login-toggle"===e.target.id?n.setState({showLogin:!0}):"signup-toggle"===e.target.id&&n.setState({showLogin:!1})},n.state={username:"",password:"",showLogin:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(R.a,{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(R.a,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,required:!0}),o.a.createElement("br",null),o.a.createElement(U.a,{type:"submit"},"login!"))),n=o.a.createElement(X,null);return o.a.createElement("div",{style:q,className:"form-style"},o.a.createElement("div",null,o.a.createElement(U.a,{style:P,id:"login-toggle",onClick:function(){return e.setState({showLogin:!0})}},"Login "),o.a.createElement(U.a,{style:P,id:"signup-toggle",onClick:function(){return e.setState({showLogin:!1})}},"Sign Up")),o.a.createElement("div",{style:W},this.state.showLogin?t:n))}}]),t}(a.Component);n(141),a.Component;function G(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  color: #888;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  .value {\n    flex: 1;\n    font-size: 2rem;\n  }\n  .slider {\n    flex: 1;\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #efefef;\n    outline: none;\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      ","\n    }\n    &::-moz-range-thumb {\n      ","\n    }\n  }\n"]);return G=function(){return e},e}var _=function(e){return"\n  width: 25px;\n  height: 25px;\n  background: ".concat(e.color,";\n  cursor: pointer;\n  outline: 5px solid #333;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n")},$=B.a.div(G(),(function(e){return _(e)}),(function(e){return _(e)})),K=(a.Component,function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:F}),o.a.createElement(d.a,{path:"/draw-wf",component:V}))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,n){e.exports=n.p+"static/media/background_image.df8f719e.png"},95:function(e,t,n){e.exports=n(142)}},[[95,1,2]]]);
//# sourceMappingURL=main.92dbfad9.chunk.js.map