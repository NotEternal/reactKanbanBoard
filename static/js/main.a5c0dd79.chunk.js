(this["webpackJsonpkanban-board"]=this["webpackJsonpkanban-board"]||[]).push([[0],{20:function(e,t,r){e.exports=r(34)},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(10),s=r.n(o),i=r(12),l=r(7),c=r(6),d={board:{ADD_BOARD:"ADD_BOARD",DELETE_BOARD:"DELETE_BOARD",CHOOSE_BOARD:"CHOOSE_BOARD"},currentBoard:{CHANGE_TASK:"CHANGE_TASK",ADD_TASK_TO_DAY:"ADD_TASK_TO_DAY",ADD_TASK_TO_STAGE:"ADD_TASK_TO_STAGE",ADD_TASK_TO_COMPLETED:"ADD_TASK_TO_COMPLETED",ADD_TASK_TO_UNFULFILLED:"ADD_TASK_TO_UNFULFILLED",UPDATE_TASK_ORDER_IN_COLUMN:"UPDATE_TASK_ORDER_IN_COLUMN"},tasks:{}},u={boards:[],currentBoard:void 0};function p(e,t){return{boards:[].concat(Object(c.a)(e.boards),[t]),currentBoard:e.currentBoard}}function m(e,t){return{boards:e.boards.filter((function(e){return e.title+e.color!==t})),currentBoard:e.currentBoard}}function b(e,t){return{boards:Object(c.a)(e.boards),currentBoard:e.boards[t]}}var f=r(1),h=r(9);function g(e,t){var r=Object.assign(e.currentBoard),a=Object(h.a)(t,4),n=a[0],o=a[1],s=a[2],i=a[3];return r[n][o][s]=i,{boards:Object(c.a)(e.boards),currentBoard:Object(f.a)({},r)}}function v(e,t){var r=Object.assign(e.currentBoard),a=Object(h.a)(t,2),n=a[0],o=a[1];return r.days[n].push(o),{boards:Object(c.a)(e.boards),currentBoard:Object(f.a)({},r)}}function y(e,t){var r=Object.assign(e.currentBoard),a=Object(h.a)(t,2),n=a[0],o=a[1];return r.works[n].push(o),{boards:Object(c.a)(e.boards),currentBoard:Object(f.a)({},r)}}function T(e,t,r){var a=Object.assign(t.currentBoard),n=Object(h.a)(r,4),o=n[0],s=n[1],i=n[2],l=n[3];a[o][s].splice(i,1);var d=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,r=(new Date).getDate(),a=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(new Date).getDay()],n=(new Date).getHours(),o=(new Date).getMinutes();return"".concat(e,".").concat(t,".").concat(r," - ").concat(a," - ").concat(n,":").concat(o)}();try{if("completed"===e)a.completedTasks.push([l,d]);else{if("unfulfilled"!==e)throw new Error("Error on adding task in menu lists");a.unfulfilledTasks.push([l,d])}}catch(u){console.error(u)}return{boards:Object(c.a)(t.boards),currentBoard:Object(f.a)({},a)}}function O(e,t){var r=Object.assign(e.currentBoard);t.draggedTaskArr,t.changeableTaskArr;return{boards:Object(c.a)(e.boards),currentBoard:Object(f.a)({},r)}}var k=Object(l.c)({boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.boards,t=arguments.length>1?arguments[1]:void 0,r=d.board;switch(t.type){case r.ADD_BOARD:return p(e,t.payload);case r.DELETE_BOARD:return m(e,t.payload);case r.CHOOSE_BOARD:return b(e,t.payload);default:return e}},currentBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.currentBoard,t=arguments.length>1?arguments[1]:void 0,r=d.currentBoard;switch(t.type){case r.CHANGE_TASK:return g(e,t.payload);case r.ADD_TASK_TO_DAY:return v(e,t.payload);case r.ADD_TASK_TO_STAGE:return y(e,t.payload);case r.ADD_TASK_TO_COMPLETED:return T("completed",e,t.payload);case r.ADD_TASK_TO_UNFULFILLED:return T("unfulfilled",e,t.payload);case r.UPDATE_TASK_ORDER_IN_COLUMN:return O(e,t.payload);default:return e}}}),E=r(19),j=r.n(E),C=Object(l.d)(k,Object(l.a)(j.a)),D=(r(30),r(31),d.board),S=function(e){return{type:D.ADD_BOARD,payload:e}},w=function(e){return{type:D.DELETE_BOARD,payload:e}},x=function(e){return{type:D.CHOOSE_BOARD,payload:e}},_=d.task,A=function(e){return{type:_.CHANGE_TASK,payload:e}},B=function(e,t){return{type:_.ADD_TASK_TO_DAY,payload:[e,t]}},M=function(e,t){return{type:_.ADD_TASK_TO_STAGE,payload:[e,t]}},H=function(e){return{type:_.ADD_TASK_TO_COMPLETED,payload:e}},R=function(e){return{type:_.ADD_TASK_TO_UNFULFILLED,payload:e}},F=function(e){return{type:_.UPDATE_TASK_ORDER_IN_COLUMN,payload:e}},I=r(2),L=r(3),V=r(5),U=r(4),W={minHeight:"50vh",padding:"3em",display:"flex",flexDirection:"column",alignItems:"flex-start",border:".1em solid #222",borderRadius:".4em",boxShadow:"0 .3em 1em #000",background:"#030303"};function K(e){var t=e.children;return n.a.createElement("div",{style:W},t)}function N(e){var t=e.underline,r=e.padding,a=e.size,o=e.color,s=e.children;return n.a.createElement("h3",{style:{margin:"0",padding:r||"0",fontSize:a||"1em",textDecoration:t&&"underline",color:o||"#fff"}},s)}var z={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",visibility:"hidden",opacity:"0",backgroundColor:"rgba(0, 0, 0, 0.8)",transition:".2s"};function Y(e){var t=e.visible,r=e.children;return n.a.createElement("div",{style:t?Object(f.a)(Object(f.a)({},z),{},{visibility:"visible",opacity:"1"}):z},n.a.createElement("div",{style:{padding:"1em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:".4em",backdropFilter:"blur(0.3em)"}},r))}var G={static:{padding:"1em",border:"none",borderRadius:"0.4em",backgroundColor:"#111",color:"inherit",transition:"0.2s"},hover:{transform:"translateY(-1px)",boxShadow:"0 .5em .6em #000",backgroundColor:"#222"}},P=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).startHover=function(){a.setState({hover:!0})},a.endHover=function(){a.setState({hover:!1})},a.state={hover:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.arrFunctions.map((function(e){return e()}))},style:this.props.block?Object(f.a)(Object(f.a)({},G.static),{},{pointerEvents:"none",opacity:".4"}):this.state.hover?Object(f.a)(Object(f.a)({},G.static),G.hover):G.static},this.props.children)}}]),r}(n.a.Component),X=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).startHover=function(){a.setState({hover:!0})},a.endHover=function(){a.setState({hover:!1})},a.state={hover:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this,t={display:"inline-block",width:"3em",height:"3em",margin:".3em",border:"none",borderRadius:".3em",backgroundColor:this.props.color,transition:".25s"};return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){e.props.setColor(e.props.color)},style:this.state.hover?Object(f.a)(Object(f.a)({},t),{},{transform:"rotate(12deg) scale(0.9)"}):t})}}]),r}(n.a.Component),J={maxWidth:"27em",padding:"2em",fontSize:"1.2em",borderRadius:"0.4em",border:"0.1em solid #555",backgroundColor:"#030303",transition:"0.2s"},q={static:{width:"100%",marginTop:"1em",padding:".6em",border:"none",borderRadius:".4em",backgroundColor:"#111",color:"#fff",transition:".1s"},focus:{transform:"translateY(-2px)",boxShadow:"0 .4em .5em #000"}},Q={width:"100%",margin:"1.4em 0",display:"flex",flexWrap:"wrap",justifyContent:"space-between",border:".1em solid #222",borderRadius:"0.4em"},Z=["#6f3e9e","#fc6456","#54f057","#567afc","#fffc31","#fcb156","#3ce8df","#f0549f","#fefefe","#1e5dfc","#787878","#afe854"],$=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).setColor=function(e){a.setState({board:Object(f.a)(Object(f.a)({},a.state.board),{},{color:e})})},a.setTitle=function(e){a.setState({board:Object(f.a)(Object(f.a)({},a.state.board),{},{title:e})})},a.startInputFocus=function(){a.setState({inputFocus:!0})},a.endInputFocus=function(){a.setState({inputFocus:!1})},a.state={board:{title:"Untitled",color:"#fefefe",completedTasks:[],unfulfilledTasks:[],days:{Monday:[],Tuesday:[],Wednesday:[],Thursday:[],Friday:[],Saturday:[],Sunday:[]},works:{ToDo:[],Doing:[],Done:[]}},inputFocus:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:J},n.a.createElement("input",{style:this.state.inputFocus?Object(f.a)(Object(f.a)({},q.static),q.focus):q.static,onFocus:this.startInputFocus,onBlur:function(t){e.endInputFocus(),t.target.value?e.setTitle(t.target.value):e.setTitle("Untitled")},placeholder:"Write board title"}),n.a.createElement("div",{style:Q},Z.map((function(t,r){return n.a.createElement(X,{color:t,setColor:e.setColor,key:t+r})}))),n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},n.a.createElement("div",{style:{marginRight:"7%",display:"flex",alignItems:"center",marginBottom:"1em"}},"Color:"," ",n.a.createElement("span",{style:{display:"inline-block",width:".9em",height:".9em",marginLeft:".6em",borderRadius:"50%",backgroundColor:this.state.board.color}})),n.a.createElement("div",{style:{overflowX:"auto",overflowY:"hidden"}},"Title: ",this.state.board.title)),n.a.createElement("div",{style:{marginTop:".5em",display:"flex",alignItems:"center",justifyContent:"space-between"}},n.a.createElement(P,{arrFunctions:[function(){return e.props.createBoard(e.state.board)}]},"Create"),n.a.createElement(P,{arrFunctions:[this.props.toggleOptions]},"Close")),n.a.createElement(Y,{visible:this.props.worningVisible},n.a.createElement("div",{style:{textAlign:"center",padding:"2em",backgroundColor:"#050505"}},n.a.createElement(P,{arrFunctions:[this.props.toggleModalWorning]},"Close"),n.a.createElement("p",{style:{maxWidth:"25em",textAlign:"center",fontSize:"1.6em"}},"Sorry but you cannot have boards ",n.a.createElement("br",null)," with the same name and color"))))}}]),r}(n.a.Component),ee={static:{margin:"0 .5rem",padding:"1rem 1.4rem",display:"flex",alignItems:"center",justifyContent:"center",border:"none",color:"inherit",borderRadius:".3em",backgroundColor:"#111",transition:".25s"},active:{backgroundColor:"#282828"}};function te(e){var t=e.arrFunctions,r=e.active,a=e.children;return n.a.createElement("button",{onClick:function(){t&&t.forEach((function(e){return e()}))},style:r?Object(f.a)(Object(f.a)({},ee.static),ee.active):ee.static},a)}var re={width:"100%",margin:".6em",borderRadius:".3em"},ae={width:"100%",marginBottom:".7em",padding:".6em 1em",border:"none",borderRadius:".3em",boxShadow:"0 0 1em #000",backgroundColor:"transparent",color:"inherit",transition:".25s"},ne={display:"none"},oe={display:"flex",alignItems:"center",margin:".3em 0",padding:".5em",overflow:"auto",borderRadius:".3em",backgroundColor:"#181818"},se=n.a.createElement("svg",{style:{width:".9em",height:".9em",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 512.005 512.005"},n.a.createElement("path",{d:"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667 S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"})),ie=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).toggleListVisible=function(){a.setState({listVisible:!a.state.listVisible})},a.state={listVisible:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:re},n.a.createElement("button",{style:this.state.listVisible?Object(f.a)(Object(f.a)({},ae),{},{backgroundColor:this.props.color,color:"#000"}):Object(f.a)(Object(f.a)({},ae),{},{backgroundColor:"#222",color:"#fff"}),onClick:this.toggleListVisible},this.props.name),n.a.createElement("ul",{style:this.state.listVisible?Object(f.a)(Object(f.a)({},ne),{},{display:"block"}):ne},this.props.listTask.map((function(t,r){return n.a.createElement("li",{style:oe,key:t[0]+r},n.a.createElement("span",{style:{flex:"1"}},t[0]),n.a.createElement("span",{onClick:function(){return e.props.toggleTaskModal(t)},style:{cursor:"pointer"}},se))}))))}}]),r}(n.a.Component),le={position:"fixed",zIndex:"2",top:"0",left:"-100%",height:"100%",padding:"2.5rem",paddingTop:"7em",boxShadow:"0 0 .8em #000",backgroundColor:"#090909",transition:".3s"},ce=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).toggleTaskModal=function(e){a.setState({selectedTask:e})},a.state={selectedTask:null},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{style:this.props.visible?Object(f.a)(Object(f.a)({},le),{},{left:"0"}):le},n.a.createElement(ie,{name:"Completed tasks",color:this.props.color,listTask:this.props.board.completedTasks,toggleTaskModal:this.toggleTaskModal}),n.a.createElement(ie,{name:"Unfulfilled tasks",color:this.props.color,listTask:this.props.board.unfulfilledTasks,toggleTaskModal:this.toggleTaskModal})),n.a.createElement(Y,{visible:this.state.selectedTask},n.a.createElement("div",{style:{padding:"2em",borderRadius:".3em",backgroundColor:"#080808"}},n.a.createElement(P,{arrFunctions:[function(){return e.toggleTaskModal(null)}]},"Close"),n.a.createElement("div",{style:{padding:"2em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[1]:""),n.a.createElement("div",{style:{padding:"3em 0 .5em",borderBottom:".1em solid #222"}},this.state.selectedTask?this.state.selectedTask[0]:""))))}}]),r}(n.a.Component),de={padding:"1em",margin:"1em 1%",borderRadius:".5em",backgroundColor:"#111",transition:".25s"},ue=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).toggleHideColumn=function(){a.setState({hide:!a.state.hide})},a.state={hide:!1},a}return Object(L.a)(r,[{key:"render",value:function(){return n.a.createElement("div",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:this.props.active?Object(f.a)(Object(f.a)({},de),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid ".concat(this.props.borderColor),boxShadow:"0 .8em .7em #000"}):Object(f.a)(Object(f.a)({},de),{},{width:this.props.width,minWidth:this.props.minWidth,border:".1em solid transparent"})},n.a.createElement("button",{onClick:this.toggleHideColumn,style:{padding:".2em 0",fontSize:".8em",border:"none",backgroundColor:"transparent",color:"#888"}},this.state.hide?"Show":"Hide"),n.a.createElement("div",{style:this.state.hide?{height:"0",visibility:"hidden",opacity:"0",transition:".15s"}:{transition:".15s"}},this.props.children))}}]),r}(n.a.Component),pe={cursor:"grab",margin:".5em 0",padding:".4em",display:"flex",alignItems:"center",borderRadius:".3em",color:"#000"},me={padding:".2em",border:"none",fontSize:"1.2em",backgroundColor:"transparent",color:"#000"};function be(e){var t=e.index,r=e.task,a=e.color,o=e.openTaskModal,s=e.dragStartHandler,i=e.dragLeaveHandler,l=e.dragEndHandler,c=e.dragOverHandler,d=e.dropHandler;return n.a.createElement("li",{onDragStart:function(e){return s(e,[t,r])},onDragLeave:function(e){return i(e)},onDragEnd:function(e){return l(e)},onDragOver:function(e){return c(e)},onDrop:function(e){return d(e,[t,r])},draggable:!0,style:Object(f.a)(Object(f.a)({},pe),{},{backgroundColor:a})},n.a.createElement("span",{style:{flex:"1",overflowX:"auto",overflowY:"hidden"}},r),n.a.createElement("button",{onClick:function(){return o(t,r)},style:me},"\ud83d\udd89"))}var fe={padding:".4em",border:"none",boxShadow:"0 0 .1em #000",backgroundColor:"#242424",color:"#fff",transition:".25s"},he={color:"#000"},ge=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).startHover=function(){a.setState({hover:!0})},a.endHover=function(){a.setState({hover:!1})},a.state={hover:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this.props,t=e.arrFunctions,r=e.style,a=e.color,o=e.children;return n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,onClick:function(){return t.forEach((function(e){return e()}))},style:this.state.hover?Object(f.a)(Object(f.a)(Object(f.a)({},fe),he),{},{backgroundColor:a},r):Object(f.a)(Object(f.a)({},fe),r)},o)}}]),r}(n.a.Component),ve={padding:"1.2em",display:"grid",gridTemplateColumns:"repeat(7, 4em)",gridTemplateRows:"repeat(8, 1fr)",fontSize:"1.4em",borderRadius:".4em",backgroundColor:"#111"},ye={gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"2",gridRowEnd:"9",padding:".4em",resize:"none",borderRadius:"0 0 .3em .3em",border:".1em solid #151515",boxShadow:"inset 0 0 .4em #000",backgroundColor:"transparent",color:"#fff"},Te=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).changeCurrentTaskText=function(e){a.setState({currentText:e})},a.dragStartHandler=function(e,t){},a.dragLeaveHandler=function(e){},a.dragEndHandler=function(e){},a.dragOverHandler=function(e){e.preventDefault()},a.dropHandler=function(e,t){e.preventDefault(),console.log(e.target)},a.openTaskModal=function(e,t){a.setState({visibleTaskModal:!0,currentIndex:e,currentText:t})},a.closeTaskModal=function(){a.setState({visibleTaskModal:!1,currentTaskArr:[]})},a.state={visibleTaskModal:!1,currentIndex:null,currentText:""},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("ul",null,this.props.tasks.map((function(t,r){return n.a.createElement(be,{task:t,index:r,color:e.props.color,key:t+r,openTaskModal:e.openTaskModal,dragStartHandler:e.dragStartHandler,dragLeaveHandler:e.dragLeaveHandler,dragEndHandler:e.dragEndHandler,dragOverHandler:e.dragOverHandler,dropHandler:e.dropHandler})}))),n.a.createElement(Y,{visible:this.state.visibleTaskModal},n.a.createElement("div",{style:ve},n.a.createElement(ge,{arrFunctions:[this.closeTaskModal],color:this.props.color,style:{gridColumnStart:"1",gridColumnEnd:"7",gridRowStart:"1",gridRowEnd:"2",borderRadius:".3em .3em 0 0"}},"Close"),n.a.createElement("textarea",{style:ye,value:this.state.currentText,onChange:function(t){return e.changeCurrentTaskText(t.target.value)},onBlur:function(t){e.props.changeTask(e.state.currentIndex,t.target.value)}}),n.a.createElement("div",{style:{gridColumnStart:"7",gridColumnEnd:"8",gridRowStart:"2",gridRowEnd:"9",display:"flex",flexDirection:"column"}},n.a.createElement(ge,{color:this.props.color,style:{borderTopRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToCompleted(e.state.currentIndex,e.state.currentText)}]},"\u2714"),n.a.createElement(ge,{color:this.props.color,style:{borderBottomRightRadius:".3em"},arrFunctions:[this.closeTaskModal,function(){return e.props.addTaskToUnfulfilled(e.state.currentIndex,e.state.currentText)}]},"\u2a2f")))))}}]),r}(n.a.Component),Oe={cursor:"pointer",padding:".4em",border:"none",backgroundColor:"transparent"};function ke(e){var t=e.arrFunctions,r=e.children;return n.a.createElement("button",{onClick:function(){t.forEach((function(e){return e()}))},style:Oe},r)}var Ee={resize:"none",width:"100%",padding:".4em",border:"none",boxShadow:"inset 0 0 .2em #111",backgroundColor:"transparent"},je={display:"inline-block",width:"100%",height:"100%",padding:".2em",borderRadius:"inherit",border:"none",backgroundColor:"transparent",transition:".25s"},Ce=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).setTaskText=function(e){a.setState({text:e})},a.startHover=function(){a.setState({hover:!0})},a.endHover=function(){a.setState({hover:!1})},a.toggleShowField=function(){a.setState({showField:!a.state.showField})},a.state={text:"",showField:!1,hover:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this,t={display:"flex",alignItems:"center",justifyContent:"center",borderRadius:".4em",backgroundColor:this.props.color,transition:".25s"};return n.a.createElement("div",{style:t},this.state.showField?n.a.createElement("div",{style:{width:"100%"}},n.a.createElement("textarea",{style:Ee,onBlur:function(t){e.setTaskText(t.target.value)},placeholder:"..."}),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(ke,{arrFunctions:[function(){e.state.text&&(e.props.addTask(e.props.place,e.state.text),e.toggleShowField())},function(){return e.setTaskText("")}]},"Add"),n.a.createElement(ke,{arrFunctions:[this.toggleShowField]},"\u2a2f"))):n.a.createElement("button",{onMouseMove:this.startHover,onMouseLeave:this.endHover,style:je,onClick:this.toggleShowField},n.a.createElement("span",{style:this.state.hover?{display:"inline-block",transform:"translateX(-.2em)",transition:".25s"}:{display:"inline-block",transition:".25s"}},"+")," ",n.a.createElement("span",{style:this.state.hover?{display:"inline-block",transform:"translateX(.2em)",transition:".25s"}:{display:"inline-block",transition:".25s"}},"Task")))}}]),r}(n.a.Component),De={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},Se=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],we=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){return Object(I.a)(this,r),t.call(this,e)}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{style:De},Se.map((function(t,r){return n.a.createElement(ue,{minWidth:"12em",width:"12%",active:(new Date).getDay()-1===r,borderColor:e.props.board.color,title:t,key:t+r},n.a.createElement(N,{padding:"1rem 0",size:"1.4em"},t),n.a.createElement(Te,{color:e.props.board.color,tasks:e.props.board.days[t],addTaskToCompleted:function(r,a){e.props.addTaskToCompleted(["days",t,r,a])},addTaskToUnfulfilled:function(r,a){e.props.addTaskToUnfulfilled(["days",t,r,a])},updateTaskOrderInColumn:e.props.updateTaskOrderInColumn,changeTask:function(r,a){return e.props.changeTask(["days",t,r,a])}}),n.a.createElement(Ce,{place:t,addTask:e.props.addTaskToDay,color:e.props.board.color}))})))}}]),r}(n.a.Component),xe={display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"},_e=["ToDo","Doing","Done"],Ae=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){return Object(I.a)(this,r),t.call(this,e)}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{style:xe},_e.map((function(t,r){return n.a.createElement(ue,{minWidth:"12em",width:"30.5%",title:t,key:t+r},n.a.createElement(N,{padding:"1rem 0",size:"1.4em"},t),n.a.createElement(Te,{color:e.props.board.color,tasks:e.props.board.works[t],addTaskToCompleted:function(r,a){e.props.addTaskToCompleted(["works",t,r,a])},addTaskToUnfulfilled:function(r,a){e.props.addTaskToUnfulfilled(["works",t,r,a])},updateTaskOrderInColumn:e.props.updateTaskOrderInColumn,changeTask:function(r,a){return e.props.changeTask(["works",t,r,a])}}),n.a.createElement(Ce,{place:t,addTask:e.props.addTaskToStage,color:e.props.board.color}))})))}}]),r}(n.a.Component),Be=(r(32),n.a.createElement("svg",{style:{width:"1rem",heigh:"1rem",marginRight:".5rem",fill:"#fff"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 492 492"},n.a.createElement("path",{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}))),Me=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).setVisibleDays=function(e){a.setState({daysVisible:e})},a.toggleVisibleMenu=function(){a.setState({menuVisible:!a.state.menuVisible})},a.state={daysVisible:!0,menuVisible:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"board"},n.a.createElement("div",{className:"board__header"},n.a.createElement(te,{arrFunctions:[this.props.backToBoards]},Be,n.a.createElement(N,null,this.props.board.title)),n.a.createElement(te,{arrFunctions:[function(){return e.setVisibleDays(!0)}],active:this.state.daysVisible},"Days"),n.a.createElement(te,{arrFunctions:[function(){return e.setVisibleDays(!1)}],active:!this.state.daysVisible},"Works"),n.a.createElement(te,{arrFunctions:[this.toggleVisibleMenu],active:this.state.menuVisible},"\u2630")),n.a.createElement(ce,{board:this.props.board,visible:this.state.menuVisible,color:this.props.board.color}),n.a.createElement("div",{style:{paddingLeft:"3vw"}},this.state.daysVisible?n.a.createElement(we,this.props):n.a.createElement(Ae,this.props)))}}]),r}(n.a.Component),He={cursor:"pointer",maxWidth:"20vw",margin:".7em",marginLeft:"0",padding:"1em",overflow:"auto",display:"flex",alignItems:"center",borderRadius:".3em",transition:".25s"},Re={color:"#000"},Fe=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).startItemHover=function(){a.setState({boardItemHover:!0})},a.endItemHover=function(){a.setState({boardItemHover:!1})},a.state={boardItemHover:!1},a}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{onMouseEnter:this.startItemHover,onMouseLeave:this.endItemHover,className:this.props.destroyMode?"destroy-item":"",onClick:function(){e.props.destroyMode?e.props.deleteBoard(e.props.item.title+e.props.item.color):e.props.openBoard(e.props.index)},style:this.state.boardItemHover?Object(f.a)(Object(f.a)(Object(f.a)({},He),Re),{},{transform:"translateY(-2px)",border:".1em solid ".concat(this.props.item.color),backgroundColor:this.props.item.color}):Object(f.a)(Object(f.a)({},He),{},{border:".1em solid ".concat(this.props.item.color)})},this.props.item.title,n.a.createElement("span",{className:"color",hidden:!0},this.props.item.color))}}]),r}(n.a.Component),Ie={display:"flex",flexWrap:"wrap",alignItems:"center"},Le={margin:"1em 0",display:"flex",flexWrap:"wrap"},Ve=function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){return Object(I.a)(this,r),t.call(this,e)}return Object(L.a)(r,[{key:"render",value:function(){var e=this;return n.a.createElement("section",null,n.a.createElement("div",{style:Ie},n.a.createElement("div",{style:{width:"11em",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}},n.a.createElement(P,{block:this.props.destroyMode,arrFunctions:[this.props.toggleOptions]},"Add"),n.a.createElement(P,{arrFunctions:[this.props.toggleDestroyMode]},"Delete")),n.a.createElement("span",{style:{flex:"1",textAlign:"right",fontSize:"1.2em"}},"Created: ",this.props.boards.length)),n.a.createElement("ul",{style:Le},this.props.boards.map((function(t,r){return n.a.createElement(Fe,{item:t,index:r,openBoard:e.props.openBoard,deleteBoard:e.props.deleteBoard,destroyMode:e.props.destroyMode,key:t.title+t.color})}))))}}]),r}(n.a.Component),Ue=(r(33),function(e){Object(V.a)(r,e);var t=Object(U.a)(r);function r(e){var a;return Object(I.a)(this,r),(a=t.call(this,e)).toggleOptions=function(){a.setState({optionsVisible:!a.state.optionsVisible})},a.createBoard=function(e){var t=!1;a.props.boards.forEach((function(r){r.title===e.title&&r.color===e.color&&(t=!0)})),t?a.toggleModalWorning():(a.props.addBoard(e),a.toggleOptions())},a.deleteBoard=function(e){a.props.removeBoard(e)},a.toggleDestroyMode=function(){a.setState({destroyMode:!a.state.destroyMode})},a.openBoard=function(e){a.props.chooseBoard(e)},a.backToBoards=function(){a.props.chooseBoard(null)},a.toggleModalWorning=function(){a.setState({worningVisible:!a.state.worningVisible})},a.state={destroyMode:!1,worningVisible:!1,optionsVisible:!1},a}return Object(L.a)(r,[{key:"render",value:function(){return n.a.createElement("section",{className:"user-boards-container"},this.props.board?n.a.createElement(Me,Object.assign({},this.props,{backToBoards:this.backToBoards})):n.a.createElement("div",{style:{minWidth:"27em",width:"60%"}},n.a.createElement(N,{underline:!0,padding:"1em 0",size:"4em"},"Track of your tasks"),n.a.createElement(K,null,n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(N,{padding:"1em 0",size:"2.4em"},"Your boards"),n.a.createElement(Ve,{toggleOptions:this.toggleOptions,toggleDestroyMode:this.toggleDestroyMode,openBoard:this.openBoard,deleteBoard:this.deleteBoard,destroyMode:this.state.destroyMode,boards:this.props.boards}))),this.state.optionsVisible&&n.a.createElement(Y,{visible:this.state.optionsVisible},n.a.createElement($,{toggleOptions:this.toggleOptions,toggleModalWorning:this.toggleModalWorning,createBoard:this.createBoard,worningVisible:this.state.worningVisible}))))}}]),r}(n.a.Component)),We=Object(i.b)((function(e){return e}),(function(e){return{addBoard:function(t){return e(S(t))},removeBoard:function(t){return e(w(t))},chooseBoard:function(t){return e(x(t))},changeTask:function(t){return e(A(t))},addTaskToDay:function(t,r){return e(B(t,r))},addTaskToStage:function(t,r){return e(M(t,r))},addTaskToCompleted:function(t){return e(H(t))},addTaskToUnfulfilled:function(t){return e(R(t))},updateTaskOrderInColumn:function(t){return e(F(t))}}}))((function(e){var t=e.boards,r=t.boards,a=t.currentBoard,o=e.addBoard,s=e.removeBoard,i=e.chooseBoard,l=e.changeTask,c=e.addTaskToDay,d=e.addTaskToStage,u=e.addTaskToCompleted,p=e.addTaskToUnfulfilled,m=e.updateTaskOrderInColumn;return n.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},n.a.createElement(Ue,{boards:r,board:a,addBoard:o,removeBoard:s,chooseBoard:i,changeTask:l,addTaskToDay:c,addTaskToStage:d,addTaskToCompleted:u,addTaskToUnfulfilled:p,updateTaskOrderInColumn:m}))}));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,{store:C},n.a.createElement(We,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a5c0dd79.chunk.js.map