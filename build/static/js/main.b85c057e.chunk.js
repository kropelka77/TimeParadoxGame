(this.webpackJsonpparadox=this.webpackJsonpparadox||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(11),c=n.n(o),i=n(82),s=n.n(i),a=(n(180),n(49)),l=n(83),h=n(84),u=n(86),d=n(85);n(181),n(182),n(183),n(184);var b=function(e){return Object(r.jsx)("div",{className:"cell",onMouseUp:function(t){return e.handleCellClick(t)},onContextMenu:function(e){return e.preventDefault()},tabIndex:0,children:function(e){if("doctor"===e)return Object(r.jsx)("img",{src:"images/doctor.svg",alt:"TheDoctor",width:"35",height:"35",tabIndex:0});if("tardis"===e)return Object(r.jsx)("img",{src:"images/tardis.svg",alt:"Tardis",width:"37",height:"37",tabIndex:0});if("empty"===e)return"";if("x"===e)return Object(r.jsx)("img",{src:"images/cross.svg",alt:"cross",width:"30",height:"30",tabIndex:0})}(e.type)})};var j=function(e){return Object(r.jsxs)("div",{className:"board",children:[(n=e.labels,n.map((function(e,t){return 0===t?Object(r.jsx)("div",{className:"labelH",children:e.map((function(e,t){return Object(r.jsx)("div",{className:"labElement",children:e},"element_".concat(t))}))},"labelH"):Object(r.jsx)("div",{className:"labelV",children:e.map((function(e,t){return Object(r.jsx)("div",{className:"labElement",children:e},"element_".concat(t))}))},"labelV")}))),Object(r.jsx)("div",{className:"grid",children:(t=e.data,t.map((function(t,n){return Object(r.jsx)("div",{className:"row",children:t.map((function(t,o){return Object(r.jsx)("div",{className:"col",children:Object(r.jsx)(b,{handleCellClick:function(t){e.handleCellClick(n,o,t)},type:e.showingSolution?t.correct:t.user})},"col_".concat(o))}))},"row_".concat(n))})))}),Object(r.jsxs)("div",{className:"win",style:{visibility:e.won?"visible":"hidden",opacity:e.won?1:0,transition:e.won?"visibility 0s, opacity 0.2s linear":""},children:[Object(r.jsx)("p",{children:"You won! Brilliant!"}),Object(r.jsx)("button",{type:"button",className:"btn",onClick:function(){return e.newGame()},children:"New Game"})]})]});var t,n},f=(n(185),n(25)),m="undefined"!==typeof window;var v=function(e){var t,n;return e.showingRules&&(t=Object(r.jsxs)("div",{className:"rules",children:[Object(r.jsx)("img",{src:"images/doctor.svg",alt:"TheDoctor",width:"45",height:"45"}),Object(r.jsx)("img",{src:"images/tardis.svg",alt:"Tardis",width:"50",height:"50"}),Object(r.jsx)("p",{children:"Your job is to place Doctors next to their Tardis. Keep in mind that:"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Each Doctor has exactly one Tardis (so the number of both is equal)."}),Object(r.jsx)("li",{children:"The number of Doctors in a row or a column is indicated by the respective numbers around the edge."}),Object(r.jsx)("li",{children:"The Doctor can only stand horizontally or vertically adjacent to his Tardis (not diagonally)."}),Object(r.jsx)("li",{children:"It's ok for Tardis to appear next to each other, but Doctor seeing himself might cause a time paradox - never place them vertically, horizontally, or diagonally adjacent."}),Object(r.jsx)("li",{children:"The Tardis can be found next to more than one Doctor, but it still connects to only one of them."}),Object(r.jsx)("li",{children:"To place Doctor right-click or double-click on an empty square. If you're sure that a square cannot contain Doctor, click once to mark it with X."}),Object(r.jsx)("li",{children:"You can check your progress or see the solution in the menu bar."})]}),Object(r.jsx)("p",{children:"Good luck & Allons-y!"})]})),e.showingCheck&&(n=e.isCorrect?Object(r.jsx)("div",{className:"check",children:"Everything is correct!"}):Object(r.jsx)("div",{className:"check",children:"Oh, there's something wrong!"})),Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Time Paradox Puzzle"}),Object(r.jsxs)("nav",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:"nav",onClick:function(){var t;t={category:"Nav clicked",action:"Click to check",label:"check"},m&&window.ANALYTICS_INITIALIZED&&f.a.event(t),e.checkCorrect(),e.showContent("showingCheck",!0),setTimeout((function(){return e.showContent("showingCheck",!1)}),1500)},children:"Check"}),Object(r.jsx)("li",{className:"nav",onClick:function(){return e.showContent("showingSolution")},children:"Solution"}),Object(r.jsx)("li",{className:"nav",onClick:function(){confirm("Are you sure you want to start a new game?")?e.newGame():console.log("cancel")},children:"New"}),Object(r.jsx)("li",{className:"nav",tabIndex:0,onClick:function(){return e.showContent("showingRules")},onBlur:function(){return e.showContent("showingRules",!1)},children:"Rules"})]}),t,n]})]})};function x(e){var t=e.board,n=e.possibleDoctors,r=Math.floor(Math.random()*n.length),o=n.splice(r,1)[0];if(function(e,t){var n=[[e[0],e[1]-1],[e[0],e[1]+1],[e[0]-1,e[1]],[e[0]+1,e[1]]];for(n=n.filter((function(e){return e[0]>=0&&e[0]<t.length&&e[1]>=0&&e[1]<t.length}));n.length>0;){var r=Math.floor(Math.random()*n.length),o=n.splice(r,1)[0];if("x"===t[o[0]][o[1]].correct)return t[o[0]][o[1]].correct="tardis",t[o[0]][o[1]].user="tardis",!0}return!1}(o,t)){t[o[0]][o[1]].correct="doctor";for(var c=function(e){for(var t=[],n=e[0]-1;n<=e[0]+1;n++)for(var r=e[1]-1;r<=e[1]+1;r++)t.push([n,r]);return t}(o),i=0;i<c.length;i++)for(var s=0;s<n.length;s++)n[s].toString()===c[i].toString()&&n.splice(s,1)}}function w(){var e=function(){for(var e=function(){for(var e=[],t=0;t<8;t++){e.push([]);for(var n=0;n<8;n++)e[t].push({user:"empty",correct:"x"})}for(var r=[],o=0;o<8;o++)for(var c=0;c<8;c++)r.push([o,c]);return{board:e,possibleDoctors:r}}(),t=e.board,n=e.possibleDoctors;n.length>Math.floor(5*Math.random())+1;)x(e);return t}();return{boardState:e,labels:function(e){for(var t=[[],[]],n=0;n<e.length;n++){t[1].push(e[n].filter((function(e){return"doctor"===e.correct})).length);for(var r=0,o=0;o<e.length;o++)"doctor"===e[o][n].correct&&r++;t[0].push(r)}return t}(e)}}function g(){return w()}var p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n),e=t.call(this);var r=g();return e.state={showingSolution:!1,showingRules:!1,showingCheck:!1,isCorrect:!0,won:!1,boardState:r.boardState,labels:r.labels},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){m&&(window.ANALYTICS_INITIALIZED=!0,f.a.initialize("G-QBFPM9C92Q"))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[this.state.won&&Object(r.jsx)("div",{className:"overlay"}),Object(r.jsx)(v,{showContent:this.showContent.bind(this),showingRules:this.state.showingRules,showingCheck:this.state.showingCheck,checkCorrect:this.checkCorrect.bind(this),isCorrect:this.state.isCorrect,newGame:this.newGame.bind(this)}),Object(r.jsxs)("main",{children:[Object(r.jsx)(j,{data:this.state.boardState,labels:this.state.labels,showingSolution:this.state.showingSolution,handleCellClick:this.handleCellClick.bind(this),won:this.state.won,newGame:this.newGame.bind(this)}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Every Tardis needs its Doctor."}),Object(r.jsx)("p",{children:"Help them connect in the time-spice continuum."}),Object(r.jsx)("p",{children:"Avoid the time paradox - Doctors cannot see each other!"})]})]}),Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"\xa9 2018 Dorota Siwek"}),Object(r.jsx)("p",{children:"Created for the purpose of training"})]})]})}},{key:"showContent",value:function(e,t){void 0===t?this.setState(Object(a.a)({},e,!this.state[e])):this.setState(Object(a.a)({},e,t))}},{key:"checkCorrect",value:function(){var e=this.state.boardState,t=!0;return e.forEach((function(e){e.forEach((function(e){("doctor"===e.correct&&"x"===e.user||"x"===e.correct&&"doctor"===e.user)&&(t=!1)}))})),this.setState({isCorrect:t}),t}},{key:"win",value:function(){var e=this.state.boardState;function t(e,t){var n=0;return e.forEach((function(e){e.forEach((function(e){"doctor"===e[t]&&n++}))})),n}t(e,"user")===t(e,"correct")&&this.checkCorrect()&&this.setState({won:!0})}},{key:"handleCellClick",value:function(e,t,n){n.preventDefault(),n.target.focus();var r=this.state.boardState;0===n.button?"empty"===r[e][t].user?r[e][t].user="x":"x"===r[e][t].user?r[e][t].user="doctor":"doctor"===r[e][t].user&&(r[e][t].user="empty"):2===n.button&&(n.preventDefault(),"empty"===r[e][t].user?r[e][t].user="doctor":"x"===r[e][t].user?r[e][t].user="empty":"doctor"===r[e][t].user&&(r[e][t].user="x")),this.setState((function(){return{boardState:r}}),this.win)}},{key:"newGame",value:function(){var e=g();this.setState((function(){return{showingSolution:!1,showingRules:!1,showingCheck:!1,isCorrect:!0,won:!1,boardState:e.boardState,labels:e.labels}}))}}]),n}(c.a.Component);n(187);s.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.b85c057e.chunk.js.map