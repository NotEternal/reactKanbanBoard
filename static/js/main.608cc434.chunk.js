(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{16:function(e,t,a){e.exports=a(31)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),s=a.n(o),i=a(11),l=a(12),c=a(6),d=a(1),u={board:{ADD_BOARD:"ADD_BOARD",DELETE_BOARD:"DELETE_BOARD",CHOOSE_BOARD:"CHOOSE_BOARD"},currentBoard:{CHANGE_TASK:"CHANGE_TASK",ADD_TASK_TO_DAY:"ADD_TASK_TO_DAY",ADD_TASK_TO_STAGE:"ADD_TASK_TO_STAGE",ADD_TASK_TO_COMPLETED:"ADD_TASK_TO_COMPLETED",ADD_TASK_TO_UNFULFILLED:"ADD_TASK_TO_UNFULFILLED",UPDATE_TASK_ORDER_IN_COLUMN:"UPDATE_TASK_ORDER_IN_COLUMN"},tasks:{}},p={boards:[],currentBoard:{}};function m(e,t){return Object(d.a)(Object(d.a)({},e),{},{boards:[].concat(Object(c.a)(e.boards),[t])})}function b(e,t){return Object(d.a)(Object(d.a)({},e),{},{boards:e.boards.filter((function(e){return e.title+e.color!==t}))})}function f(e,t){return Object(d.a)(Object(d.a)({},e),{},{currentBoard:e.boards[t]})}var h=a(8);function g(e,t){var a=Object.assign(e.currentBoard),r=Object(h.a)(t,4),n=r[0],o=r[1],s=r[2],i=r[3];return a[n][o][s]=i,{boards:Object(c.a)(e.boards),currentBoard:Object(d.a)({},a)}}function v(e,t){var a=Object.assign(e.currentBoard),r=Object(h.a)(t,2),n=r[0],o=r[1];return a.days[n].push(o),{boards:Object(c.a)(e.boards),currentBoard:Object(d.a)({},a)}}function y(e,t){var a=Object.assign(e.currentBoard),r=Object(h.a)(t,2),n=r[0],o=r[1];return a.works[n].push(o),{boards:Object(c.a)(e.boards),currentBoard:Object(d.a)({},a)}}function T(e,t,a){var r=Object.assign(t.currentBoard),n=Object(h.a)(a,4),o=n[0],s=n[1],i=n[2],l=n[3];r[o][s].splice(i,1);var u=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,a=(new Date).getDate(),r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(new Date).getDay()],n=(new Date).getHours(),o=(new Date).getMinutes();return"".concat(e,".").concat(t,".").concat(a," - ").concat(r," - ").concat(n,":").concat(o)}();try{if("completed"===e)r.completedTasks.push([l,u]);else{if("unfulfilled"!==e)throw new Error("Error on adding task in menu lists");r.unfulfilledTasks.push([l,u])}}catch(p){console.error(p)}return{boards:Object(c.a)(t.boards),currentBoard:Object(d.a)({},r)}}function O(e,t){var a=Object.assign(e.currentBoard);t.draggedTaskArr,t.changeableTaskArr;return{boards:Object(c.a)(e.boards),currentBoard:Object(d.a)({},a)}}var k=Object(l.a)({boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.boards,t=arguments.length>1?arguments[1]:void 0,a=u.board;switch(t.type){case a.ADD_BOARD:return m(e,t.payload);case a.DELETE_BOARD:return b(e,t.payload);case a.CHOOSE_BOARD:return f(e,t.payload);default:return e}},currentBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.currentBoard,t=arguments.length>1?arguments[1]:void 0,a=u.currentBoard;switch(t.type){case a.CHANGE_TASK:return g(e,t.payload);case a.ADD_TASK_TO_DAY:return v(e,t.payload);case a.ADD_TASK_TO_STAGE:return y(e,t.payload);case a.ADD_TASK_TO_COMPLETED:return T("completed",e,t.payload);case a.ADD_TASK_TO_UNFULFILLED:return T("unfulfilled",e,t.payload);case a.UPDATE_TASK_ORDER_IN_COLUMN:return O(e,t.payload);default:return e}}}),E=Object(l.b)(k),j=(a(27),a(28),u.board),C=function(e){return{type:j.ADD_BOARD,payload:e}},D=function(e){return{type:j.DELETE_BOARD,payload:e}},S=function(e){return{type:j.CHOOSE_BOARD,payload:e}},w=u.task,x=function(e){return{type:w.CHANGE_TASK,payload:e}},_=function(e,t){return{type:w.ADD_TASK_TO_DAY,payload:[e,t]}},A=function(e,t){return{type:w.ADD_TASK_TO_STAGE,payload:[e,t]}},B=function(e){return{type:w.ADD_TASK_TO_COMPLETED,payload:e}},M=function(e){return{type:w.ADD_TASK_TO_UNFULFILLED,payload:e}},H=function(e){return{type:w.UPDATE_TASK_ORDER_IN_COLUMN,payload:e}},R=a(2),F=a(3),I=a(5),L=a(4),V={minHeight:"50vh",padding:"3em",display:"flex",flexDirection:"column",alignItems:"flex-start",border:".1em solid #222",borderRadius:".4em",boxShadow:"0 .3em 1em #000",background:"#030303"};function U(e){var t=e.children;return n.a.createElement("div",{style:V},t)}function W(e){var t=e.underline,a=e.padding,r=e.size,o=e.color,s=e.children;return n.a.createElement("h3",{style:{margin:"0",padding:a||"0",fontSize:r||"1em",textDecoration:t&&"underline",color:o||"#fff"}},s)}var K={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",visibility:"hidden",opacity:"0",backgroundColor:"rgba(0, 0, 0, 0.8)",transition:".2s"};function N(e){var t=e.visible,a=e.children;return n.a.createElement("div",{style:t?Object(d.a)(Object(d.a)({},K),{},{visibility:"visible",opacity:"1"}):K},n.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:".4em",backdropFilter:"blur(0.3em)"}},a))}var z=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"3em",height:"3em",margin:".3em",border:"none",borderRadius:".3em",backgroundColor:this.props.color,transition:".25s"};return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.setColor(e.props.color)},style:this.state.hover?Object(d.a)(Object(d.a)({},t),{},{transform:"rotate(12deg) scale(0.9)"}):t})}}]),a}(n.a.Component),Y={static:{padding:"1em",border:"none",borderRadius:"0.4em",backgroundColor:"#111",color:"inherit",transition:"0.2s"},hover:{transform:"translateY(-1px)",boxShadow:"0 .5em .6em #000",backgroundColor:"#222"}},G=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.arrFunctions.map((function(e){return e()}))},style:this.props.block?Object(d.a)(Object(d.a)({},Y.static),{},{pointerEvents:"none",opacity:".4"}):this.state.hover?Object(d.a)(Object(d.a)({},Y.static),Y.hover):Y.static},this.props.children)}}]),a}(n.a.Component),P={maxWidth:"27em",padding:"2em",fontSize:"1.2em",borderRadius:"0.4em",border:"0.1em solid #555",backgroundColor:"#030303",transition:"0.2s"},X={static:{width:"100%",marginTop:"1em",padding:".6em",border:"none",borderRadius:".4em",backgroundColor:"#111",color:"#fff",transition:".1s"},focus:{transform:"translateY(-2px)",boxShadow:"0 .4em .5em #000"}},J={width:"100%",margin:"1.4em 0",display:"flex",flexWrap:"wrap",justifyContent:"space-between",border:".1em solid #222",borderRadius:"0.4em"},q=["#6f3e9e","#fc6456","#54f057","#567afc","#fffc31","#fcb156","#3ce8df","#f0549f","#fefefe","#1e5dfc","#787878","#afe854"],Q=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).setColor=function(e){r.setState({board:Object(d.a)(Object(d.a)({},r.state.board),{},{color:e})})},r.setTitle=function(e){r.setState({board:Object(d.a)(Object(d.a)({},r.state.board),{},{title:e})})},r.startInputFocus=function(){r.setState({inputFocus:!0})},r.endInputFocus=function(){r.setState({inputFocus:!1})},r.state={board:{title:"Untitled",color:"#fefefe",completedTasks:[],unfulfilledTasks:[],days:{Monday:[],Tuesday:[],Wednesday:[],Thursday:[],Friday:[],Saturday:[],Sunday:[]},works:{ToDo:[],Doing:[],Done:[]}},inputFocus:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:P},n.a.createElement("input",{style:this.state.inputFocus?Object(d.a)(Object(d.a)({},X.static),X.focus):X.static,onFocus:this.startInputFocus,onBlur:function(t){e.endInputFocus(),t.target.value?e.setTitle(t.target.value):e.setTitle("Untitled")},placeholder:"Write board title"}),n.a.createElement("div",{style:J},q.map((function(t,a){return n.a.createElement(z,{color:t,setColor:e.setColor,key:t+a})}))),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement("div",{style:{marginRight:"7%",display:"flex",alignItems:"center",marginBottom:"1em"}},"Color:"," ",n.a.createElement("span",{style:{display:"inline-block",width:".9em",height:".9em",marginLeft:".6em",borderRadius:"50%",backgroundColor:this.state.board.color}})),n.a.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},"Title: ",this.state.board.title)),n.a.createElement("div",{style:{marginTop:".5em",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.a.createElement(G,{arrFunctions:[function(){return e.props.createBoard(e.state.board)}]},"Create"),n.a.createElement(G,{arrFunctions:[this.props.toggleOptions]},"Close")),n.a.createElement(N,{visible:this.props.worningVisible},n.a.createElement("div",{style:{textAlign:"center",padding:"2em",backgroundColor:"#050505"}},n.a.createElement(G,{arrFunctions:[this.props.toggleModalWorning]},"Close"),n.a.createElement("p",{style:{maxWidth:"25em",textAlign:"center",fontSize:"1.6em"}},"Sorry but you cannot have boards ",n.a.createElement("br",null)," with the same name and color"))))}}]),a}(n.a.Component),Z={static:{margin:"0 .5rem",padding:"1rem 1.4rem",display:"flex",alignItems:"center",justifyContent:"center",border:"none",color:"inherit",borderRadius:".3em",backgroundColor:"#111",transition:".25s"},active:{backgroundColor:"#282828"}};function $(e){var t=e.arrFunctions,a=e.active,r=e.children;return n.a.createElement("button",{onClick:function(){t&&t.forEach((function(e){return e()}))},style:a?Object(d.a)(Object(d.a)({},Z.static),Z.active):Z.static},r)}var ee={width:"100%",margin:".6em",borderRadius:".3em"},te={width:"100%",marginBottom:".7em",padding:".6em 1em",border:"none",borderRadius:".3em",boxShadow:"0 0 1em #000",backgroundColor:"transparent",color:"inherit",transition:".25s"},ae={display:"none"},re={display:"flex",alignItems:"center",margin:".3em 0",padding:".5em",overflow:"auto",borderRadius:".3em",backgroundColor:"#181818"},ne=n.a.createElement("svg",{style:{width:".9em",height:".9em",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.005 512.005"},n.a.createElement("path",{d:"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"})),oe=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).toggleListVisible=function(){r.setState({listVisible:!r.state.listVisible})},r.state={listVisible:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:ee},n.a.createElement("button",{style:this.state.listVisible?Object(d.a)(Object(d.a)({},te),{},{backgroundColor:this.props.color,color:"#000"}):Object(d.a)(Object(d.a)({},te),{},{backgroundColor:"#222",color:"#fff"}),onClick:this.toggleListVisible},this.props.name),n.a.createElement("ul",{style:this.state.listVisible?Object(d.a)(Object(d.a)({},ae),{},{display:"block"}):ae},this.props.listTask.map((function(t,a){return n.a.createElement("li",{style:re,key:t[0]+a},n.a.createElement("span",{style:{flex:"1"}},t[0]),n.a.createElement("span",{onClick:function(){return e.props.toggleTaskModal(t)},style:{cursor:"pointer"}},ne))}))))}}]),a}(n.a.Component),se={position:"fixed",zIndex:"2",top:"0",left:"-100%",height:"100%",padding:"2.5rem",paddingTop:"7em",boxShadow:"0 0 .8em #000",backgroundColor:"#090909",transition:".3s"},ie=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).toggleTaskModal=function(e){r.setState({selectedTask:e})},r.state={selectedTask:null},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{style:this.props.visible?Object(d.a)(Object(d.a)({},se),{},{left:"0"}):se},n.a.createElement(oe,{name:"Completed tasks",color:this.props.color,listTask:this.props.board.completedTasks,toggleTaskModal:this.toggleTaskModal}),n.a.createElement(oe,{name:"Unfulfilled tasks",color:this.props.color,listTask:this.props.board.unfulfilledTasks,toggleTaskModal:this.toggleTaskModal})),n.a.createElement(N,{visible:this.state.selectedTask},n.a.createElement("div",{style:{padding:"2em",borderRadius:".3em",backgroundColor:"#080808"}},n.a.createElement(G,{arrFunctions:[function(){return e.toggleTaskModal(null)}]},"Close"),n.a.createElement("div",{style:{padding:"2em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[1]:""),n.a.createElement("div",{style:{padding:"3em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[0]:""))))}}]),a}(n.a.Component),le={padding:"1em",margin:"1em 1%",borderRadius:".5em",backgroundColor:"#111",transition:".25s"},ce=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).toggleHideColumn=function(){r.setState({hide:!r.state.hide})},r.state={hide:!1},r}return Object(F.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:this.props.active?Object(d.a)(Object(d.a)({},le),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid ".concat(this.props.borderColor),boxShadow:"0 .8em .7em #000"}):Object(d.a)(Object(d.a)({},le),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid transparent"})},n.a.createElement("button",{onClick:this.toggleHideColumn,style:{padding:".2em 0",fontSize:".8em",border:"none",backgroundColor:"transparent",color:"#888"}},this.state.hide?"Show":"Hide"),n.a.createElement("div",{style:this.state.hide?{height:"0",visibility:"hidden",opacity:"0",transition:".15s"}:{transition:".15s"}},this.props.children))}}]),a}(n.a.Component),de={cursor:"grab",margin:".5em 0",padding:".4em",display:"flex",alignItems:"center",borderRadius:".3em",color:"#000"},ue={padding:".2em",border:"none",fontSize:"1.2em",backgroundColor:"transparent",color:"#000"};function pe(e){var t=e.index,a=e.task,r=e.color,o=e.openTaskModal,s=e.dragStartHandler,i=e.dragLeaveHandler,l=e.dragEndHandler,c=e.dragOverHandler,u=e.dropHandler;return n.a.createElement("li",{onDragStart:function(e){return s(e,[t,a])},onDragLeave:function(e){return i(e)},onDragEnd:function(e){return l(e)},onDragOver:function(e){return c(e)},onDrop:function(e){return u(e,[t,a])},draggable:!0,style:Object(d.a)(Object(d.a)({},de),{},{backgroundColor:r})},n.a.createElement("span",{style:{flex:"1",overflowX:"auto",overflowY:"hidden"}},a),n.a.createElement("button",{onClick:function(){return o(t,a)},style:ue},"\ud83d\udd89"))}var me={padding:".4em",border:"none",boxShadow:"0 0 .1em #000",backgroundColor:"#242424",color:"#fff",transition:".25s"},be={color:"#000"},fe=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.state={hover:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this.props,t=e.arrFunctions,a=e.style,r=e.color,o=e.children;return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){return t.forEach((function(e){return e()}))},style:this.state.hover?Object(d.a)(Object(d.a)(Object(d.a)({},me),be),{},{backgroundColor:r},a):Object(d.a)(Object(d.a)({},me),a)},o)}}]),a}(n.a.Component),he={padding:"1.2em",display:"grid",gridTemplateColumns:"repeat(7, 4em)",gridTemplateRows:"repeat(8, 1fr)",fontSize:"1.4em",borderRadius:".4em",backgroundColor:"#111"},ge={gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"2",gridRowEnd:"9",padding:".4em",resize:"none",borderRadius:"0 0 .3em .3em",border:".1em solid #151515",boxShadow:"inset 0 0 .4em #000",backgroundColor:"transparent",color:"#fff"},ve=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).changeCurrentTaskText=function(e){r.setState({currentText:e})},r.dragStartHandler=function(e,t){},r.dragLeaveHandler=function(e){},r.dragEndHandler=function(e){},r.dragOverHandler=function(e){e.preventDefault()},r.dropHandler=function(e,t){e.preventDefault(),console.log(e.target)},r.openTaskModal=function(e,t){r.setState({visibleTaskModal:!0,currentIndex:e,currentText:t})},r.closeTaskModal=function(){r.setState({visibleTaskModal:!1,currentTaskArr:[]})},r.state={visibleTaskModal:!1,currentIndex:null,currentText:""},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("ul",null,this.props.tasks.map((function(t,a){return n.a.createElement(pe,{task:t,index:a,color:e.props.color,key:t+a,openTaskModal:e.openTaskModal,dragStartHandler:e.dragStartHandler,dragLeaveHandler:e.dragLeaveHandler,dragEndHandler:e.dragEndHandler,dragOverHandler:e.dragOverHandler,dropHandler:e.dropHandler})}))),n.a.createElement(N,{visible:this.state.visibleTaskModal},n.a.createElement("div",{style:he},n.a.createElement(fe,{arrFunctions:[this.closeTaskModal],color:this.props.color,style:{gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"1",gridRowEnd:"2",borderRadius:".3em .3em 0 0"}},"Close"),n.a.createElement("textarea",{style:ge,value:this.state.currentText,onChange:function(t){return e.changeCurrentTaskText(t.target.value)},onBlur:function(t){e.props.changeTask(e.state.currentIndex,t.target.value)}}),n.a.createElement("div",{style:{gridColumnStart:"7",gridColumnEnd:"8",gridRowStart:"2",gridRowEnd:"9",display:"flex",flexDirection:"column"}},n.a.createElement(fe,{color:this.props.color,style:{borderTopRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToCompleted(e.state.currentIndex,e.state.currentText)}]},"\u2714"),n.a.createElement(fe,{color:this.props.color,style:{borderBottomRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToUnfulfilled(e.state.currentIndex,e.state.currentText)}]},"\u2a2f")))))}}]),a}(n.a.Component),ye={cursor:"pointer",padding:".4em",border:"none",backgroundColor:"transparent"};function Te(e){var t=e.arrFunctions,a=e.children;return n.a.createElement("button",{onClick:function(){t.forEach((function(e){return e()}))},style:ye},a)}var Oe={resize:"none",width:"100%",padding:".4em",border:"none",boxShadow:"inset 0 0 .2em #111",backgroundColor:"transparent"},ke={display:"inline-block",width:"100%",height:"100%",padding:".2em",borderRadius:"inherit",border:"none",backgroundColor:"transparent",transition:".25s"},Ee=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).setTaskText=function(e){r.setState({text:e})},r.startHover=function(){r.setState({hover:!0})},r.endHover=function(){r.setState({hover:!1})},r.toggleShowField=function(){r.setState({showField:!r.state.showField})},r.state={text:"",showField:!1,hover:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this,t={display:"flex",alignItems:"center",justifyContent:"center",borderRadius:".4em",backgroundColor:this.props.color,transition:".25s"};return n.a.createElement("div",{style:t},this.state.showField?n.a.createElement("div",{style:{width:"100%"}},n.a.createElement("textarea",{style:Oe,onBlur:function(t){e.setTaskText(t.target.value)},placeholder:"..."}),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(Te,{arrFunctions:[function(){e.state.text&&(e.props.addTask(e.props.place,e.state.text),e.toggleShowField())},function(){return e.setTaskText("")}]},"Add"),n.a.createElement(Te,{arrFunctions:[this.toggleShowField]},"\u2a2f"))):n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:ke,onClick:this.toggleShowField},n.a.createElement("span",{style:this.state.hover?{display:"inline-block",transform:"translateX(-.2em)",transition:".25s"}:{display:"inline-block",transition:".25s"}},"+")," ",n.a.createElement("span",{style:this.state.hover?{display:"inline-block",transform:"translateX(.2em)",transition:".25s"}:{display:"inline-block",transition:".25s"}},"Task")))}}]),a}(n.a.Component),je={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},Ce=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],De=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{style:je},Ce.map((function(t,a){return n.a.createElement(ce,{minWidth:"12em",width:"12%",active:(new Date).getDay()-1===a,borderColor:e.props.board.color,title:t,key:t+a},n.a.createElement(W,{padding:"1rem 0",size:"1.4em"},t),n.a.createElement(ve,{color:e.props.board.color,tasks:e.props.board.days[t],addTaskToCompleted:function(a,r){e.props.addTaskToCompleted(["days",t,a,r])},addTaskToUnfulfilled:function(a,r){e.props.addTaskToUnfulfilled(["days",t,a,r])},updateTaskOrderInColumn:e.props.updateTaskOrderInColumn,changeTask:function(a,r){return e.props.changeTask(["days",t,a,r])}}),n.a.createElement(Ee,{place:t,addTask:e.props.addTaskToDay,color:e.props.board.color}))})))}}]),a}(n.a.Component),Se={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},we=["ToDo","Doing","Done"],xe=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{style:Se},we.map((function(t,a){return n.a.createElement(ce,{minWidth:"12em",width:"30.5%",title:t,key:t+a},n.a.createElement(W,{padding:"1rem 0",size:"1.4em"},t),n.a.createElement(ve,{color:e.props.board.color,tasks:e.props.board.works[t],addTaskToCompleted:function(a,r){e.props.addTaskToCompleted(["works",t,a,r])},addTaskToUnfulfilled:function(a,r){e.props.addTaskToUnfulfilled(["works",t,a,r])},updateTaskOrderInColumn:e.props.updateTaskOrderInColumn,changeTask:function(a,r){return e.props.changeTask(["works",t,a,r])}}),n.a.createElement(Ee,{place:t,addTask:e.props.addTaskToStage,color:e.props.board.color}))})))}}]),a}(n.a.Component),_e=(a(29),n.a.createElement("svg",{style:{width:"1rem",heigh:"1rem",marginRight:".5rem",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 492 492"},n.a.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}))),Ae=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).setVisibleDays=function(e){r.setState({daysVisible:e})},r.toggleVisibleMenu=function(){r.setState({menuVisible:!r.state.menuVisible})},r.state={daysVisible:!0,menuVisible:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"board"},n.a.createElement("div",{className:"board__header"},n.a.createElement($,{arrFunctions:[this.props.backToBoards]},_e,n.a.createElement(W,null,this.props.board.title)),n.a.createElement($,{arrFunctions:[function(){return e.setVisibleDays(!0)}],active:this.state.daysVisible},"Days"),n.a.createElement($,{arrFunctions:[function(){return e.setVisibleDays(!1)}],active:!this.state.daysVisible},"Works"),n.a.createElement($,{arrFunctions:[this.toggleVisibleMenu],active:this.state.menuVisible},"\u2630")),n.a.createElement(ie,{board:this.props.board,visible:this.state.menuVisible,color:this.props.board.color}),n.a.createElement("div",{style:{paddingLeft:"3vw"}},this.state.daysVisible?n.a.createElement(De,this.props):n.a.createElement(xe,this.props)))}}]),a}(n.a.Component),Be={cursor:"pointer",maxWidth:"20vw",margin:".7em",marginLeft:"0",padding:"1em",overflow:"auto",display:"flex",alignItems:"center",borderRadius:".3em",transition:".25s"},Me={color:"#000"},He=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).startItemHover=function(){r.setState({boardItemHover:!0})},r.endItemHover=function(){r.setState({boardItemHover:!1})},r.state={boardItemHover:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{onMouseEnter:this.startItemHover,onMouseLeave:this.endItemHover,className:this.props.destroyMode?"destroy-item":"",onClick:function(){e.props.destroyMode?e.props.deleteBoard(e.props.item.title+e.props.item.color):e.props.openBoard(e.props.index)},style:this.state.boardItemHover?Object(d.a)(Object(d.a)(Object(d.a)({},Be),Me),{},{transform:"translateY(-2px)",border:".1em solid ".concat(this.props.item.color),backgroundColor:this.props.item.color}):Object(d.a)(Object(d.a)({},Be),{},{border:".1em solid ".concat(this.props.item.color)})},this.props.item.title,n.a.createElement("span",{className:"color",hidden:!0},this.props.item.color))}}]),a}(n.a.Component),Re={display:"flex",flexWrap:"wrap",alignItems:"center"},Fe={margin:"1em 0",display:"flex",flexWrap:"wrap"},Ie=function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(){return Object(R.a)(this,a),t.apply(this,arguments)}return Object(F.a)(a,[{key:"render",value:function(){var e=this.props,t=e.destroyMode,a=e.toggleOptions,r=e.toggleDestroyMode,o=e.openBoard,s=e.deleteBoard,i=e.boards,l=void 0===i?[]:i;return n.a.createElement("section",null,n.a.createElement("div",{style:Re},n.a.createElement("div",{style:{width:"11em",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},n.a.createElement(G,{block:t,arrFunctions:[a]},"Add"),n.a.createElement(G,{arrFunctions:[r]},"Delete")),n.a.createElement("span",{style:{flex:"1",textAlign:"right",fontSize:"1.2em"}},"Created: ",l.length)),n.a.createElement("ul",{style:Fe},l.map((function(e,a){return n.a.createElement(He,{item:e,index:a,openBoard:o,deleteBoard:s,destroyMode:t,key:e.title+e.color})}))))}}]),a}(n.a.Component),Le=(a(30),function(e){Object(I.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(R.a)(this,a),(r=t.call(this,e)).toggleOptions=function(){r.setState((function(e){return{optionsVisible:!e.optionsVisible}}))},r.createBoard=function(e){var t=!1;r.props.boards.forEach((function(a){a.title===e.title&&a.color===e.color&&(t=!0)})),t?r.toggleModalWorning():(r.props.addBoard(e),r.toggleOptions())},r.deleteBoard=function(e){r.props.removeBoard(e)},r.toggleDestroyMode=function(){r.setState((function(e){return{destroyMode:!e.destroyMode}}))},r.openBoard=function(e){r.props.chooseBoard(e)},r.backToBoards=function(){r.props.chooseBoard(null)},r.toggleModalWorning=function(){r.setState((function(e){return{warningVisible:!e.warningVisible}}))},r.state={destroyMode:!1,warningVisible:!1,optionsVisible:!1},r}return Object(F.a)(a,[{key:"render",value:function(){var e=this.props.boards,t=this.state,a=t.destroyMode,r=t.optionsVisible,o=t.warningVisible;return n.a.createElement("section",{className:"user-boards-container"},this.props.board?n.a.createElement(Ae,Object.assign({},this.props,{backToBoards:this.backToBoards})):n.a.createElement("div",{style:{minWidth:"27em",width:"60%"}},n.a.createElement(W,{underline:!0,padding:"1em 0",size:"4em"},"Track of your tasks"),n.a.createElement(U,null,n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(W,{padding:"1em 0",size:"2.4em"},"Your boards"),n.a.createElement(Ie,{toggleOptions:this.toggleOptions,toggleDestroyMode:this.toggleDestroyMode,openBoard:this.openBoard,deleteBoard:this.deleteBoard,destroyMode:a,boards:e}))),r&&n.a.createElement(N,{visible:r},n.a.createElement(Q,{toggleOptions:this.toggleOptions,toggleModalWorning:this.toggleModalWorning,createBoard:this.createBoard,warningVisible:o}))))}}]),a}(n.a.Component)),Ve=Object(i.b)((function(e){return console.log("store: ",e),e}),(function(e){return{addBoard:function(t){return e(C(t))},removeBoard:function(t){return e(D(t))},chooseBoard:function(t){return e(S(t))},changeTask:function(t){return e(x(t))},addTaskToDay:function(t,a){return e(_(t,a))},addTaskToStage:function(t,a){return e(A(t,a))},addTaskToCompleted:function(t){return e(B(t))},addTaskToUnfulfilled:function(t){return e(M(t))},updateTaskOrderInColumn:function(t){return e(H(t))}}}))((function(e){var t=e.boards,a=t.boards,r=t.currentBoard,o=e.addBoard,s=e.removeBoard,i=e.chooseBoard,l=e.changeTask,c=e.addTaskToDay,d=e.addTaskToStage,u=e.addTaskToCompleted,p=e.addTaskToUnfulfilled,m=e.updateTaskOrderInColumn;return n.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},n.a.createElement(Le,{boards:a,board:r,addBoard:o,removeBoard:s,chooseBoard:i,changeTask:l,addTaskToDay:c,addTaskToStage:d,addTaskToCompleted:u,addTaskToUnfulfilled:p,updateTaskOrderInColumn:m}))}));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:E},n.a.createElement(Ve,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.608cc434.chunk.js.map