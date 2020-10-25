(this["webpackJsonpreact-kanban-board"]=this["webpackJsonpreact-kanban-board"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(10),s=a.n(n),i=a(12),l=a(6),c=a(1),d=a(9),u=a(7),p={boards:[],currentBoard:void 0};function m(e,t){return{boards:[].concat(Object(u.a)(e.boards),[t]),currentBoard:e.currentBoard}}function b(e,t){return{boards:e.boards.filter((function(e){return e.title+e.color!==t})),currentBoard:e.currentBoard}}function h(e,t){return{boards:Object(u.a)(e.boards),currentBoard:e.boards[t]}}function f(e,t){var a=Object.assign(e.currentBoard),r=Object(d.a)(t,4),o=r[0],n=r[1],s=r[2],i=r[3];return a[o][n][s]=i,{boards:Object(u.a)(e.boards),currentBoard:Object(c.a)({},a)}}function g(e,t){var a=Object.assign(e.currentBoard),r=Object(d.a)(t,2),o=r[0],n=r[1];return a.days[o].push(n),{boards:Object(u.a)(e.boards),currentBoard:Object(c.a)({},a)}}function v(e,t){var a=Object.assign(e.currentBoard),r=Object(d.a)(t,2),o=r[0],n=r[1];return a.works[o].push(n),{boards:Object(u.a)(e.boards),currentBoard:Object(c.a)({},a)}}function y(e,t,a){var r=Object.assign(t.currentBoard),o=Object(d.a)(a,4),n=o[0],s=o[1],i=o[2],l=o[3];r[n][s].splice(i,1);var p=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,a=(new Date).getDate(),r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(new Date).getDay()],o=(new Date).getHours(),n=(new Date).getMinutes();return"".concat(e,".").concat(t,".").concat(a," - ").concat(r," - ").concat(o,":").concat(n)}();try{if("completed"===e)r.completedTasks.push([l,p]);else{if("unfulfilled"!==e)throw new Error("Error on adding task in menu lists");r.unfulfilledTasks.push([l,p])}}catch(m){console.error(m)}return{boards:Object(u.a)(t.boards),currentBoard:Object(c.a)({},r)}}function T(e,t){return e}var k=Object(l.c)({objBoards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOARD":return m(e,t.payload);case"DELETE_BOARD":return b(e,t.payload);case"CHOOSE_BOARD":return h(e,t.payload);case"CHANGE_TASK":return f(e,t.payload);case"ADD_TASK_TO_DAY":return g(e,t.payload);case"ADD_TASK_TO_STAGE":return v(e,t.payload);case"ADD_TASK_TO_COMPLETED":return y("completed",e,t.payload);case"ADD_TASK_TO_UNFULFILLED":return y("unfulfilled",e,t.payload);case"UPDATE_TASK_ORDER_IN_COLUMN":return T(e,t.payload);default:return e}}}),O=a(19),j=a.n(O),E=Object(l.d)(k,Object(l.a)(j.a)),C=(a(30),a(31),a(2)),x=a(3),w=a(5),S=a(4);var B={minHeight:"50vh",padding:"3em",display:"flex",flexDirection:"column",alignItems:"flex-start",border:".1em solid #222",borderRadius:".4em",boxShadow:"0 .3em 1em #000"};function D(e){var t=e.children;return o.a.createElement("div",{style:B},t)}function M(e){var t=e.padding,a=e.size,r=e.color,n=e.children;return o.a.createElement("h3",{style:{margin:"0",padding:t||"0",fontSize:a||"1em",color:r||"#fff"}},n)}var A={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",visibility:"hidden",opacity:"0",backgroundColor:"rgba(0, 0, 0, 0.8)",transition:".2s"};function F(e){var t=e.visible,a=e.children;return o.a.createElement("div",{style:t?Object(c.a)(Object(c.a)({},A),{},{visibility:"visible",opacity:"1"}):A},o.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:".4em",backdropFilter:"blur(0.3em)"}},a))}var R={static:{padding:"1em",border:"none",borderRadius:"0.4em",backgroundColor:"#111",color:"inherit",transition:"0.2s"},hover:{transform:"translateY(-1px)",boxShadow:"0 .5em .6em #000",backgroundColor:"#222"}},I=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.arrFunctions.map((function(e){return e()}))},style:this.props.block?Object(c.a)(Object(c.a)({},R.static),{},{pointerEvents:"none",opacity:".4"}):this.state.hover?Object(c.a)(Object(c.a)({},R.static),R.hover):R.static},this.props.children)}}]),a}(o.a.Component),H=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"3em",height:"3em",margin:".3em",border:"none",borderRadius:".3em",backgroundColor:this.props.color,transition:".25s"};return o.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.setColor(e.props.color)},style:this.state.hover?Object(c.a)(Object(c.a)({},t),{},{transform:"rotate(12deg) scale(0.9)"}):t})}}]),a}(o.a.Component),_={maxWidth:"27em",padding:"2em",fontSize:"1.2em",borderRadius:"0.4em",border:"0.1em solid #555",transition:"0.2s"},V={static:{width:"100%",marginTop:"1em",padding:".6em",border:"none",borderRadius:".4em",backgroundColor:"#111",color:"#fff",transition:".1s"},focus:{transform:"translateY(-2px)",boxShadow:"0 .4em .5em #000"}},L={width:"100%",margin:"1.4em 0",display:"flex",flexWrap:"wrap",justifyContent:"space-between",border:".1em solid #222",borderRadius:"0.4em"},U=["#6f3e9e","#fc6456","#54f057","#567afc","#fffc31","#fcb156","#3ce8df","#f0549f","#fefefe","#1e5dfc","#787878","#afe854"],z=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).setColor=function(e){r.setState({board:Object(c.a)(Object(c.a)({},r.state.board),{},{color:e})})},r.setTitle=function(e){r.setState({board:Object(c.a)(Object(c.a)({},r.state.board),{},{title:e})})},r.startInputFocus=function(){r.setState({inputFocus:!0})},r.endInputFocus=function(){r.setState({inputFocus:!1})},r.state={board:{title:"Untitled",color:"#fefefe",completedTasks:[],unfulfilledTasks:[],days:{Monday:[],Tuesday:[],Wednesday:[],Thursday:[],Friday:[],Saturday:[],Sunday:[]},works:{ToDo:[],Doing:[],Done:[]}},inputFocus:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:_},o.a.createElement("input",{style:this.state.inputFocus?Object(c.a)(Object(c.a)({},V.static),V.focus):V.static,onFocus:this.startInputFocus,onBlur:function(t){e.endInputFocus(),t.target.value?e.setTitle(t.target.value):e.setTitle("Untitled")},placeholder:"Write board title"}),o.a.createElement("div",{style:L},U.map((function(t,a){return o.a.createElement(H,{color:t,setColor:e.setColor,key:t+a})}))),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},o.a.createElement("div",{style:{marginRight:"7%",display:"flex",alignItems:"center",marginBottom:"1em"}},"Color:"," ",o.a.createElement("span",{style:{display:"inline-block",width:".9em",height:".9em",marginLeft:".6em",borderRadius:"50%",backgroundColor:this.state.board.color}})),o.a.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},"Title: ",this.state.board.title)),o.a.createElement("div",{style:{marginTop:".5em",display:"flex",alignItems:"center",justifyContent:"space-between"}},o.a.createElement(I,{arrFunctions:[this.props.toggleOptions,function(){return e.props.createBoard(e.state.board)}]},"Create"),o.a.createElement(I,{arrFunctions:[this.props.toggleOptions]},"Close")))}}]),a}(o.a.Component),W={position:"absolute",top:"0",left:"0",bottom:"0",right:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"var(--dark)"},K=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(C.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{style:W},o.a.createElement(z,{toggleOptions:this.props.toggleOptions,createBoard:this.props.createBoard}))}}]),a}(o.a.Component),Y={static:{margin:"0 .5rem",padding:"1rem 1.4rem",display:"flex",alignItems:"center",justifyContent:"center",border:"none",color:"inherit",borderRadius:".3em",backgroundColor:"#111",transition:".25s"},active:{backgroundColor:"#252525"}},N=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(C.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("button",{onClick:function(){e.props.arrFunctions&&e.props.arrFunctions.forEach((function(e){return e()}))},style:this.props.active?Object(c.a)(Object(c.a)({},Y.static),Y.active):Y.static},this.props.children)}}]),a}(o.a.Component),G={width:"100%",margin:".6em",borderRadius:".3em"},P={width:"100%",marginBottom:".7em",padding:".6em 1em",border:"none",borderRadius:".3em",boxShadow:"0 0 1em #000",backgroundColor:"transparent",color:"inherit",transition:".25s"},J={display:"none"},X={display:"flex",alignItems:"center",margin:".3em 0",padding:".5em",overflow:"auto",borderRadius:".3em",backgroundColor:"#181818"},q=o.a.createElement("svg",{style:{width:".9em",height:".9em",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.005 512.005"},o.a.createElement("path",{d:"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667\r S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6\r c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z\r M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"})),Q=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).toggleListVisible=function(){r.setState({listVisible:!r.state.listVisible})},r.state={listVisible:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:G},o.a.createElement("button",{style:this.state.listVisible?Object(c.a)(Object(c.a)({},P),{},{backgroundColor:this.props.color,color:"#000"}):Object(c.a)(Object(c.a)({},P),{},{backgroundColor:"#222",color:"#fff"}),onClick:this.toggleListVisible},this.props.name),o.a.createElement("ul",{style:this.state.listVisible?Object(c.a)(Object(c.a)({},J),{},{display:"block"}):J},this.props.listTask.map((function(t){return o.a.createElement("li",{style:X,key:t[0]+t[1]},o.a.createElement("span",{style:{flex:"1"}},t[0]),o.a.createElement("span",{onClick:function(){return e.props.toggleTaskModal(t)},style:{cursor:"pointer"}},q))}))))}}]),a}(o.a.Component),Z={position:"fixed",zIndex:"2",top:"0",left:"-100%",height:"100%",padding:"2.5rem",paddingTop:"7em",boxShadow:"0 0 .8em #000",backgroundColor:"#090909",transition:".3s"},$=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).toggleTaskModal=function(e){r.setState({selectedTask:e})},r.state={selectedTask:null},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{style:this.props.visible?Object(c.a)(Object(c.a)({},Z),{},{left:"0"}):Z},o.a.createElement(Q,{name:"Completed tasks",color:this.props.color,listTask:this.props.board.completedTasks,toggleTaskModal:this.toggleTaskModal}),o.a.createElement(Q,{name:"Unfulfilled tasks",color:this.props.color,listTask:this.props.board.unfulfilledTasks,toggleTaskModal:this.toggleTaskModal})),o.a.createElement(F,{visible:this.state.selectedTask},o.a.createElement("div",{style:{padding:"2em",borderRadius:".3em",backgroundColor:"#080808"}},o.a.createElement(I,{arrFunctions:[function(){return e.toggleTaskModal(null)}]},"Close"),o.a.createElement("div",{style:{padding:"2em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[1]:""),o.a.createElement("div",{style:{padding:"3em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[0]:""))))}}]),a}(o.a.Component),ee={padding:"1em",margin:"1em 1%",borderRadius:".5em",backgroundColor:"#111",transition:".25s"},te=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).toggleHideColumn=function(){r.setState({hide:!r.state.hide})},r.state={hide:!1},r}return Object(x.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:this.props.active?Object(c.a)(Object(c.a)({},ee),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid ".concat(this.props.borderColor),boxShadow:"0 .8em .7em #000"}):Object(c.a)(Object(c.a)({},ee),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid transparent"})},o.a.createElement("button",{onClick:this.toggleHideColumn,style:{padding:".2em 0",fontSize:".8em",border:"none",backgroundColor:"transparent",color:"#888"}},this.state.hide?"Show":"Hide"),o.a.createElement("div",{style:this.state.hide?{height:"0",visibility:"hidden",opacity:"0",transition:".15s"}:{transition:".15s"}},this.props.children))}}]),a}(o.a.Component),ae={padding:".4em",border:"none",boxShadow:"0 0 .1em #000",backgroundColor:"#242424",color:"#fff",transition:".25s"},re={color:"#000"},oe=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrFunctions,a=e.style,r=e.color,n=e.children;return o.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){return t.forEach((function(e){return e()}))},style:this.state.hover?Object(c.a)(Object(c.a)(Object(c.a)({},ae),re),{},{backgroundColor:r},a):Object(c.a)(Object(c.a)({},ae),a)},n)}}]),a}(o.a.Component),ne={margin:".5em 0",padding:".4em",display:"flex",alignItems:"center",borderRadius:".3em",color:"#000"},se={padding:".2em",border:"none",fontSize:"1.2em",backgroundColor:"transparent",color:"#000"},ie={padding:"1.2em",display:"grid",gridTemplateColumns:"repeat(7, 4em)",gridTemplateRows:"repeat(8, 1fr)",fontSize:"1.4em",borderRadius:".4em",backgroundColor:"#111"},le={gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"2",gridRowEnd:"9",padding:".4em",resize:"none",borderRadius:"0 0 .3em .3em",border:".1em solid #151515",boxShadow:"inset 0 0 .4em #000",backgroundColor:"transparent",color:"#fff"},ce=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).changeCurrentTaskText=function(e){r.setState({currentText:e})},r.openTaskModal=function(e,t){r.setState({visibleTaskModal:!0,currentIndex:e,currentText:t})},r.closeTaskModal=function(){r.setState({visibleTaskModal:!1,currentTaskArr:[]})},r.state={visibleTaskModal:!1,currentIndex:null,currentText:""},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("ul",null,this.props.tasks.map((function(t,a){return o.a.createElement("li",{style:Object(c.a)(Object(c.a)({},ne),{},{backgroundColor:e.props.color}),key:t+a},o.a.createElement("span",{style:{flex:"1",overflowX:"auto",overflowY:"hidden"}},t),o.a.createElement("button",{onClick:function(){return e.openTaskModal(a,t)},style:se},"\ud83d\udd89"))}))),o.a.createElement(F,{visible:this.state.visibleTaskModal},o.a.createElement("div",{style:ie},o.a.createElement(oe,{arrFunctions:[this.closeTaskModal],color:this.props.color,style:{gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"1",gridRowEnd:"2",borderRadius:".3em .3em 0 0"}},"Close"),o.a.createElement("textarea",{style:le,value:this.state.currentText,onChange:function(t){return e.changeCurrentTaskText(t.target.value)},onBlur:function(t){e.props.changeTask(e.state.currentIndex,t.target.value)}}),o.a.createElement("div",{style:{gridColumnStart:"7",gridColumnEnd:"8",gridRowStart:"2",gridRowEnd:"9",display:"flex",flexDirection:"column"}},o.a.createElement(oe,{color:this.props.color,style:{borderTopRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToCompleted(e.state.currentIndex,e.state.currentText)}]},"\u2714"),o.a.createElement(oe,{color:this.props.color,style:{borderBottomRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToUnfulfilled(e.state.currentIndex,e.state.currentText)}]},"\u2a2f")))))}}]),a}(o.a.Component),de={cursor:"pointer",padding:".4em",border:"none",backgroundColor:"transparent"};function ue(e){var t=e.arrFunctions,a=e.children;return o.a.createElement("button",{onClick:function(){t.forEach((function(e){return e()}))},style:de},a)}var pe={resize:"none",width:"100%",padding:".4em",border:"none",boxShadow:"inset 0 0 .2em #111",backgroundColor:"transparent"},me={display:"inline-block",width:"100%",height:"100%",padding:".2em",borderRadius:"inherit",border:"none",backgroundColor:"transparent"},be=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).setTaskText=function(e){r.setState({text:e})},r.startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.toggleShowField=function(){r.setState({showField:!r.state.showField})},r.state={text:"",showField:!1,hover:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this,t={display:"flex",alignItems:"center",justifyContent:"center",borderRadius:".4em",backgroundColor:this.props.color,transition:".25s"};return o.a.createElement("div",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:this.state.hover?Object(c.a)(Object(c.a)({},t),{},{backgroundColor:"#fff"}):t},this.state.showField?o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("textarea",{style:pe,onBlur:function(t){e.setTaskText(t.target.value)},placeholder:"..."}),o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(ue,{arrFunctions:[function(){e.state.text&&(e.props.addTask(e.props.place,e.state.text),e.toggleShowField())},function(){return e.setTaskText("")}]},"Add"),o.a.createElement(ue,{arrFunctions:[this.toggleShowField]},"\u2a2f"))):o.a.createElement("button",{style:me,onClick:this.toggleShowField},"+ Task"))}}]),a}(o.a.Component),he={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},fe=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ge=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(C.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{style:he},fe.map((function(t,a){return o.a.createElement(te,{minWidth:"12em",width:"12%",active:(new Date).getDay()-1===a,borderColor:e.props.board.color,title:t,key:t+a},o.a.createElement(M,{padding:"1rem 0",size:"1.4em"},t),o.a.createElement(ce,{color:e.props.board.color,tasks:e.props.board.days[t],addTaskToCompleted:function(a,r){e.props.addTaskToCompleted(["days",t,a,r])},addTaskToUnfulfilled:function(a,r){e.props.addTaskToUnfulfilled(["days",t,a,r])},changeTask:function(a,r){return e.props.changeTask(["days",t,a,r])}}),o.a.createElement(be,{place:t,addTask:e.props.addTaskToDay,color:e.props.board.color}))})))}}]),a}(o.a.Component),ve={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},ye=["ToDo","Doing","Done"],Te=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(C.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{style:ve},ye.map((function(t,a){return o.a.createElement(te,{minWidth:"12em",width:"30.5%",title:t,key:t+a},o.a.createElement(M,{padding:"1rem 0",size:"1.4em"},t),o.a.createElement(ce,{color:e.props.board.color,tasks:e.props.board.works[t],addTaskToCompleted:function(a,r){e.props.addTaskToCompleted(["works",t,a,r])},addTaskToUnfulfilled:function(a,r){e.props.addTaskToUnfulfilled(["works",t,a,r])},changeTask:function(a,r){return e.props.changeTask(["works",t,a,r])}}),o.a.createElement(be,{place:t,addTask:e.props.addTaskToStage,color:e.props.board.color}))})))}}]),a}(o.a.Component),ke={position:"relative",zIndex:"3",padding:".5rem 2%",display:"flex",alignItems:"center",fontSize:"1.2em",borderBottom:".1em solid #222",boxShadow:"0 .5em .5em #000",backgroundColor:"#090909"},Oe=o.a.createElement("svg",{style:{width:"1.4rem",heigh:"1.4rem",marginRight:".5rem",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 492 492"},o.a.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12\r C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084\r c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864\r l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"})),je=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).setVisibleDays=function(e){r.setState({daysVisible:e})},r.toggleVisibleMenu=function(){r.setState({menuVisible:!r.state.menuVisible})},r.state={daysVisible:!0,menuVisible:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{style:{position:"relative",width:"100%",minHeight:"100vh"}},o.a.createElement("div",{style:ke},o.a.createElement(N,{arrFunctions:[this.props.backToBoards]},Oe,o.a.createElement(M,null,this.props.board.title)),o.a.createElement(N,{arrFunctions:[function(){return e.setVisibleDays(!0)}],active:this.state.daysVisible},"Days"),o.a.createElement(N,{arrFunctions:[function(){return e.setVisibleDays(!1)}],active:!this.state.daysVisible},"Works"),o.a.createElement(N,{arrFunctions:[this.toggleVisibleMenu],active:this.state.menuVisible},"\u2630")),o.a.createElement($,{board:this.props.board,visible:this.state.menuVisible,color:this.props.board.color}),o.a.createElement("div",{style:{paddingLeft:"3vw"}},this.state.daysVisible?o.a.createElement(ge,{addTaskToDay:this.props.addTaskToDay,addTaskToCompleted:this.props.addTaskToCompleted,addTaskToUnfulfilled:this.props.addTaskToUnfulfilled,changeTask:this.props.changeTask,board:this.props.board}):o.a.createElement(Te,{addTaskToStage:this.props.addTaskToStage,addTaskToCompleted:this.props.addTaskToCompleted,addTaskToUnfulfilled:this.props.addTaskToUnfulfilled,changeTask:this.props.changeTask,board:this.props.board})))}}]),a}(o.a.Component),Ee={cursor:"pointer",maxWidth:"20vw",margin:".7em",marginLeft:"0",padding:"1em",overflow:"auto",display:"flex",alignItems:"center",borderRadius:".3em",transition:".25s"},Ce={color:"#000"},xe=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).startItemHover=function(){r.setState({boardItemHover:!0})},r.endItemHover=function(){r.setState({boardItemHover:!1})},r.state={boardItemHover:!1},r}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("li",{onMouseEnter:this.startItemHover,onMouseLeave:this.endItemHover,className:this.props.destroyMode?"destroy-item":"",onClick:function(){e.props.destroyMode?e.props.deleteBoard(e.props.item.title+e.props.item.color):e.props.openBoard(e.props.index)},style:this.state.boardItemHover?Object(c.a)(Object(c.a)(Object(c.a)({},Ee),Ce),{},{transform:"translateY(-2px)",border:".1em solid ".concat(this.props.item.color),backgroundColor:this.props.item.color}):Object(c.a)(Object(c.a)({},Ee),{},{border:".1em solid ".concat(this.props.item.color)})},this.props.item.title,o.a.createElement("span",{className:"color",hidden:!0},this.props.item.color))}}]),a}(o.a.Component),we={display:"flex",flexWrap:"wrap",alignItems:"center"},Se={margin:"1em 0",display:"flex",flexWrap:"wrap"},Be=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){return Object(C.a)(this,a),t.call(this,e)}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("section",null,o.a.createElement("div",{style:we},o.a.createElement("div",{style:{width:"11em",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},o.a.createElement(I,{block:this.props.destroyMode,arrFunctions:[this.props.toggleOptions]},"Add"),o.a.createElement(I,{arrFunctions:[this.props.toggleDestroyMode]},"Delete")),o.a.createElement("span",{style:{flex:"1",textAlign:"right",fontSize:"1.2em"}},"Created: ",this.props.boards.length)),o.a.createElement("ul",{style:Se},this.props.boards.map((function(t,a){return o.a.createElement(xe,{item:t,index:a,openBoard:e.props.openBoard,deleteBoard:e.props.deleteBoard,destroyMode:e.props.destroyMode,key:t.title+t.color})}))))}}]),a}(o.a.Component),De=o.a.createElement("svg",{style:{width:".9em",height:".9em",marginRight:"1rem",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 489.6 489.6"},o.a.createElement("path",{d:"M434.65,52.2h-96.6V18c0-9.9-8.1-18-18-18h-150.4c-9.9,0-18,8.1-18,18v94.7c0,9.9,8.1,18,18,18h111.2c9.9,0,18-8.1,18-18\r c0-9.9-8.1-18-18-18h-93.2V36h114.5v34.2c0,9.9,8.1,18,18,18h96.6v365.4H72.95V88.2h27.5c9.9,0,18-8.1,18-18c0-9.9-8.1-18-18-18\r h-45.5c-9.9,0-18,8.1-18,18v401.4c0,9.9,8.1,18,18,18h379.7c9.9,0,18-8.1,18-18V70.2C452.65,60.3,444.55,52.2,434.65,52.2z"}),o.a.createElement("path",{d:"M327.75,217c-7-7.1-18.4-7.1-25.5-0.1l-83.9,83.2l-30.7-30.9c-7-7.1-18.4-7.1-25.5-0.1c-7.1,7-7.1,18.4-0.1,25.5\r l43.4,43.7c3.5,3.5,8.1,5.3,12.8,5.3c4.6,0,9.2-1.7,12.7-5.2l96.7-95.9C334.75,235.5,334.75,224.1,327.75,217z"})),Me={minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},Ae=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(e){var r;return Object(C.a)(this,a),(r=t.call(this,e)).toggleOptions=function(){r.setState({optionsVisible:!r.state.optionsVisible})},r.createBoard=function(e){var t=!1;r.props.boards.forEach((function(a){a.title===e.title&&a.color===e.color&&(t=!0)})),t?r.toggleModal():(r.props.addBoard(e),r.backToBoards())},r.deleteBoard=function(e){r.props.removeBoard(e)},r.toggleDestroyMode=function(){r.setState({destroyMode:!r.state.destroyMode})},r.openBoard=function(e){r.props.chooseBoard(e)},r.backToBoards=function(){r.props.chooseBoard(null)},r.toggleModal=function(){r.setState({modalVisible:!r.state.modalVisible})},r.state={destroyMode:!1,modalVisible:!1,optionsVisible:!1},r}return Object(x.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{style:Me},this.props.currentBoard?o.a.createElement(je,{addTaskToCompleted:this.props.addTaskToCompleted,addTaskToUnfulfilled:this.props.addTaskToUnfulfilled,changeTask:this.props.changeTask,addTaskToStage:this.props.addTaskToStage,addTaskToDay:this.props.addTaskToDay,backToBoards:this.backToBoards,board:this.props.currentBoard}):o.a.createElement("div",{style:{width:"60%"}},o.a.createElement(M,{padding:"1em 0",size:"3.2em"},o.a.createElement("span",{style:{display:"flex",alignItems:"center"}},De,"Track of your tasks")),o.a.createElement(D,null,this.state.optionsVisible?o.a.createElement(K,{toggleOptions:this.toggleOptions,createBoard:this.createBoard}):o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(M,{padding:"1em 0",size:"2.4em"},"Your boards"),o.a.createElement(Be,{toggleOptions:this.toggleOptions,toggleDestroyMode:this.toggleDestroyMode,openBoard:this.openBoard,deleteBoard:this.deleteBoard,destroyMode:this.state.destroyMode,boards:this.props.boards})))),o.a.createElement(F,{visible:this.state.modalVisible},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(I,{arrFunctions:[this.toggleModal]},"Close"),o.a.createElement("p",{style:{maxWidth:"25em",textAlign:"center",fontSize:"1.6em"}},"Sorry but you cannot have boards with the same name and color"))))}}]),a}(o.a.Component),Fe=function(e){Object(w.a)(a,e);var t=Object(S.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this.props,t=e.objBoards,a=e.addBoardAction,r=e.removeBoardAction,n=e.chooseBoardAction,s=e.changeTaskAction,i=e.addTaskToDayAction,l=e.addTaskToStageAction,c=e.addTaskToCompletedAction,d=e.addTaskToUnfulfilledAction;return o.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},o.a.createElement(Ae,{boards:t.boards,currentBoard:t.currentBoard,addBoard:a,removeBoard:r,chooseBoard:n,changeTask:s,addTaskToDay:i,addTaskToStage:l,addTaskToCompleted:c,addTaskToUnfulfilled:d}))}}]),a}(o.a.Component),Re=Object(i.b)((function(e){return{objBoards:e.objBoards}}),(function(e){return{addBoardAction:function(t){return e(function(e){return{type:"ADD_BOARD",payload:e}}(t))},removeBoardAction:function(t){return e(function(e){return{type:"DELETE_BOARD",payload:e}}(t))},chooseBoardAction:function(t){return e(function(e){return{type:"CHOOSE_BOARD",payload:e}}(t))},changeTaskAction:function(t){return e({type:"CHANGE_TASK",payload:t})},addTaskToDayAction:function(t,a){return e(function(e,t){return{type:"ADD_TASK_TO_DAY",payload:[e,t]}}(t,a))},addTaskToStageAction:function(t,a){return e(function(e,t){return{type:"ADD_TASK_TO_STAGE",payload:[e,t]}}(t,a))},addTaskToCompletedAction:function(t){return e({type:"ADD_TASK_TO_COMPLETED",payload:t})},addTaskToUnfulfilledAction:function(t){return e({type:"ADD_TASK_TO_UNFULFILLED",payload:t})}}}))(Fe);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:E},o.a.createElement(Re,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.96c64258.chunk.js.map