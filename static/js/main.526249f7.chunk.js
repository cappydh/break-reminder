(this["webpackJsonpbreak-reminder"]=this["webpackJsonpbreak-reminder"]||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(12),i=n.n(r),o=n(1),c=n.n(o),l=n(2),u=n(4),p=n(5),m=n(8),g=n(6),f=n(9),h=n(7),d=function(){return function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.setItem("lastBreaktTime",Date.now().toString()),t({type:"SET_LAST_BREAK_TIME",payload:Date.now().toString()});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=n(21),w=(n(33),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={gap:"",closingTime:"",isOpen:!1,isSettings:!0},n.componentDidMount=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.localStorage.getItem("breakGap")){e.next=5;break}return e.next=3,n.props.setGap("3600000");case 3:e.next=8;break;case 5:return e.next=7,n.props.setGap(window.localStorage.getItem("breakGap"));case 7:n.setState({gap:parseInt(n.props.gap)/1e3/60});case 8:if(window.localStorage.getItem("lastBreaktTime")){e.next=11;break}return e.next=11,n.props.setLastBreak();case 11:if(window.localStorage.getItem("closingTime")){e.next=16;break}return e.next=14,n.props.setClosingTime("17:00");case 14:e.next=19;break;case 16:return e.next=18,n.props.setClosingTime(window.localStorage.getItem("closingTime"));case 18:n.setState({closingTime:n.props.closingTime});case 19:case"end":return e.stop()}}),e)}))),n.handleGapChange=function(e){n.setState({gap:e.target.value})},n.handleClosingTimeChange=function(e){n.setState({closingTime:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.setGap(1e3*parseInt(n.state.gap)*60),window.localStorage.setItem("breakGap",1e3*parseInt(n.state.gap)*60),n.props.setClosingTime(n.state.closingTime),window.localStorage.setItem("closingTime",n.state.closingTime),n.setState({isOpen:!0})},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"saveResponse",value:function(){var e=this;if(this.state.isOpen)return s.a.createElement("div",{className:"save-success",onClick:function(){return e.setState({isOpen:!1})}},"Saved (Click to close!)")}},{key:"renderSettings",value:function(){var e=this;return s.a.createElement("div",{className:"settings",onClick:function(){return e.setState({isSettings:!e.state.isSettings})}},s.a.createElement(v.a,{className:"settings-icon"}),s.a.createElement("span",{className:"settings-text"},"Settings"))}},{key:"render",value:function(){return this.state.isSettings?s.a.createElement(s.a.Fragment,null,this.renderSettings()):s.a.createElement("div",null,this.renderSettings(),s.a.createElement("form",{onSubmit:this.handleSubmit},this.saveResponse(),s.a.createElement("input",{className:"input",type:"text",name:"gap",placeholder:"saved value: ".concat(this.props.gap/1e3/60),value:this.state.gap,onChange:this.handleGapChange}),s.a.createElement("label",{className:"label"},"Gap (min)"),s.a.createElement("input",{className:"input",type:"text",placeholder:"saved value: ".concat(this.props.closingTime),value:this.state.closingTime,onChange:this.handleClosingTimeChange}),s.a.createElement("label",{className:"label"},"Closing Time"),s.a.createElement("input",{className:"saveSettings",type:"submit",value:"Submit"})))}}]),t}(s.a.Component)),S=Object(h.b)((function(e){return{gap:e.settings.gap,closingTime:e.settings.closingTime}}),{setGap:function(e){return function(){var t=Object(l.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"SET_GAP",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setClosingTime:function(e){return function(){var t=Object(l.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.localStorage.setItem("closingTime",e),n({type:"SET_CLOSING_TIME",payload:e});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setLastBreak:d})(w),b=n(10),T=n(19),E=n.n(T),k=function(e){var t=Object(a.useState)(!0),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(""),c=Object(b.a)(o,2),l=c[0],u=c[1],p=Object(a.useState)(null),m=Object(b.a)(p,2),g=m[0],f=m[1],h=Object(a.useState)(e.fireNotification),d=Object(b.a)(h,2),v=d[0],w=d[1];Object(a.useEffect)((function(){e.fireNotification!==v&&w(e.fireNotification)}),[e.fireNotification]);return function(){if(v){console.log("fired");var e={tag:Date.now(),body:"\xc7\u0131k\u0131p hava alma zaman\u0131n geldi!",icon:"https://www.newlifea2.org/wp-content/uploads/2015/07/Sermon_Breathe.jpg"};u("MOLA VAKT\u0130"),f(e),w(!1)}}(),s.a.createElement(E.a,{ignore:r&&""!==l,notSupported:function(){i(!0)}.bind(void 0),onPermissionGranted:function(){i(!1)}.bind(void 0),onPermissionDenied:function(){i(!0)}.bind(void 0),timeout:5e3,title:l,options:g})},O=(n(34),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={hours:null,min:null,sec:null,fireNotification:!1,now:null},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({now:new Date}),clearInterval(this.interval),this.interval=setInterval((function(){var t=e.calculateCountdown();t?e.setState(t):e.stop()}),1e3)}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"calculateCountdown",value:function(){var e;if(this.setState({fireNotification:!1}),this.props.closingTime){var t=this.props.closingTime.split(":"),n=this.state.now;n.setHours(parseInt(t[0])),n.setMinutes(parseInt(t[1])),e=Math.floor((n.getTime()-Date.now())/1e3)}else e=Math.floor((parseInt(this.props.lastBreak)+parseInt(this.props.gap)-Date.now())/1e3);if(e<=0)return!1;var a={hours:0,min:0,sec:0,millisec:0};return e>=3600&&(a.hours=Math.floor(e/3600),e-=3600*a.hours),e>=60&&(a.min=Math.floor(e/60),e-=60*a.min),a.sec=e,a}},{key:"stop",value:function(){this.setState({fireNotification:!0})}},{key:"addLeadingZeros",value:function(e){for(e=String(e);e.length<2;)e="0"+e;return e}},{key:"render",value:function(){var e=this.state;return s.a.createElement("div",{className:"Countdown"},s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,e.hours?this.addLeadingZeros(e.hours):"00"),s.a.createElement("span",null,"Hours"))),s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,e.min?this.addLeadingZeros(e.min):"00"),s.a.createElement("span",null,"Min"))),s.a.createElement("span",{className:"Countdown-col"},s.a.createElement("span",{className:"Countdown-col-element"},s.a.createElement("strong",null,e.sec?this.addLeadingZeros(e.sec):"00"),s.a.createElement("span",null,"Sec"))),s.a.createElement(k,{fireNotification:this.state.fireNotification}))}}]),t}(s.a.Component)),y=(n(35),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={ignore:!0,title:"",fireNotif:!1,lastBreakState:null},n.handleServedMyTime=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.setLastBreak();case 2:return e.next=4,n.props.fetchLastBreak();case 4:case"end":return e.stop()}}),e)}))),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchLastBreak()}},{key:"render",value:function(){var e=this;return console.log(window.localStorage.getItem("closingTime")),s.a.createElement("div",{className:"center"},s.a.createElement(S,null),s.a.createElement("h1",{className:"title"},"Countdown to Break:"),s.a.createElement(O,{gap:parseInt(this.props.gap),lastBreak:parseInt(this.props.lastBreakTime)}),s.a.createElement("button",{className:"servedMyTime",onClick:function(){return e.handleServedMyTime()}},"Served My Time"),s.a.createElement("h1",{className:"title"},"Countdown to End of Suffering:"),s.a.createElement(O,{closingTime:this.props.closingTime}))}}]),t}(s.a.Component)),j=Object(h.b)((function(e){return{gap:e.settings.gap,lastBreakTime:e.settings.lastBreakTime,closingTime:e.settings.closingTime}}),{fetchLastBreak:function(){return function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"FETCH_LAST_BREAK_TIME",payload:window.localStorage.getItem("lastBreaktTime")});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setLastBreak:d})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(3),N=n(11),I=Object(C.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAP":return Object(N.a)({},e,{gap:t.payload});case"SET_CLOSING_TIME":return Object(N.a)({},e,{closingTime:t.payload});case"FETCH_LAST_BREAK_TIME":case"SET_LAST_BREAK_TIME":return Object(N.a)({},e,{lastBreakTime:t.payload});default:return e}}}),_=n(20),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.d,x=Object(C.e)(I,B(Object(C.a)(_.a)));i.a.render(s.a.createElement(h.a,{store:x},s.a.createElement(j,null)),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.526249f7.chunk.js.map