(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{22:function(e,t,a){},34:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(31),i=a.n(c);a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(7),r=a(8),m=a(10),d=a(9),u=a(5),o=a(11),E=a(13),v=a(12),b=a(20),h=a.n(b),p=(a(29),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(u.a)(a)),a.state={day:new Date(a.props.date.getTime()+a.props.time.getTime())},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(){this.props.setDate(this.state.day)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,this.state.day.toLocaleTimeString()),l.a.createElement(E.b,{to:"/scheduler/confirm"},l.a.createElement("div",{className:"ui animated basic blue button",tabIndex:"0",onClick:this.handleClick},l.a.createElement("div",{className:"visible content"},"Confirm Time"),l.a.createElement("div",{className:"hidden content"},l.a.createElement("i",{className:"right arrow icon"})))))}}]),t}(l.a.Component)),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleDayClick=a.handleDayClick.bind(Object(u.a)(a)),a.state={selectedDay:void 0,times:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleDayClick",value:function(e,t){t.selected?this.setState({selectedDay:void 0}):(this.setState({selectedDay:e}),this.props.setDate(e),this.listTimes())}},{key:"listTimes",value:function(){for(var e=[],t=0;t<=198e5;t+=18e5)e.push(new Date(t));this.setState({times:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"ui segment"},l.a.createElement("div",{className:"ui centered computer only two column very relaxed grid"},l.a.createElement("div",{className:"center aligned column"},l.a.createElement(h.a,{onDayClick:this.handleDayClick,selectedDays:this.state.selectedDay})),l.a.createElement("div",{className:"column"},this.state.selectedDay?l.a.createElement("div",null,l.a.createElement("p",null,"You selected ",this.state.selectedDay.toLocaleDateString()),l.a.createElement("ul",null,this.state.times.map((function(t){return l.a.createElement(p,{time:t,date:e.state.selectedDay,setDate:e.props.setDate})})))):l.a.createElement("p",null,"Please select a day.")),l.a.createElement("div",{className:"ui vertical divider"},l.a.createElement("i",{className:"right arrow icon"}))),l.a.createElement("div",{className:"ui centered mobile only stackable two column grid"},l.a.createElement("div",{className:"center aligned column"},l.a.createElement(h.a,{onDayClick:this.handleDayClick,selectedDays:this.state.selectedDay})),l.a.createElement("div",{className:"center aligned column"},this.state.selectedDay?l.a.createElement("div",null,l.a.createElement("p",null,"You selected ",this.state.selectedDay.toLocaleDateString()),l.a.createElement("br",null),l.a.createElement("div",{className:"ui center aligned grid"},this.state.times.map((function(t){return l.a.createElement(p,{time:t,date:e.state.selectedDay,setDate:e.props.setDate})}))),l.a.createElement("br",null),l.a.createElement("br",null)):l.a.createElement("div",null,l.a.createElement("p",null,"Please select a day."),l.a.createElement("br",null))))))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).submit=a.submit.bind(Object(u.a)(a)),a.setEvent=a.setEvent.bind(Object(u.a)(a)),a.state={name:void 0,email:void 0,event:void 0,duration:void 0,location:void 0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"submit",value:function(){this.state.event&&alert("Event: "+this.state.event+" added!")}},{key:"setEvent",value:function(e){this.setState({event:e.target.value}),console.log(this.state.event)}},{key:"render",value:function(){return l.a.createElement("div",null,this.props.date?l.a.createElement("div",{className:"ui centered raised card"},l.a.createElement("div",{className:"center aligned content"},l.a.createElement("br",null),l.a.createElement("div",{className:"header"},l.a.createElement("p",null,this.props.date.toLocaleString()),l.a.createElement("br",null)),l.a.createElement("div",{className:"center aligned description"},l.a.createElement("div",{className:"ui form"},l.a.createElement("div",{className:"ui fluid labeled input"},l.a.createElement("label",{className:"ui label"},"Name:"),l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("div",{className:"ui fluid labeled input"},l.a.createElement("label",{className:"ui label"},"Email:"),l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("div",{className:"ui fluid labeled input"},l.a.createElement("label",{className:"ui label"},"Event:"),l.a.createElement("input",{type:"text",onChange:this.setEvent})),l.a.createElement("br",null),l.a.createElement("div",{className:"ui fluid right labeled input"},l.a.createElement("label",{className:"ui label"},"Duration:"),l.a.createElement("input",{type:"number"}),l.a.createElement("div",{className:"ui basic label"},"minutes")),l.a.createElement("br",null),l.a.createElement("div",{className:"ui fluid labeled input"},l.a.createElement("label",{className:"ui label"},"Location:"),l.a.createElement("input",{type:"text"})),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement("div",{className:"center aligned extra content"},l.a.createElement(E.b,{to:"/scheduler"},l.a.createElement("div",{className:"ui animated basic red button",tabIndex:"0"},l.a.createElement("div",{className:"visible content"},"Cancel"),l.a.createElement("div",{className:"hidden content"},l.a.createElement("i",{className:"left arrow icon"})))),l.a.createElement("div",{className:"ui animated basic green button",tabIndex:"0",onClick:this.submit},l.a.createElement("div",{className:"visible content"},"Confirm"),l.a.createElement("div",{className:"hidden content"},l.a.createElement("i",{className:"right arrow icon"})))),l.a.createElement("br",null))):l.a.createElement("div",{className:"ui centered raised card"},l.a.createElement("div",{className:"center aligned content"},l.a.createElement("p",null,"No chosen date/time."),l.a.createElement(E.b,{to:"/scheduler"},l.a.createElement("div",{className:"ui animated basic red button",tabIndex:"0"},l.a.createElement("div",{className:"visible content"},"Return to Calendar"),l.a.createElement("div",{className:"hidden content"},l.a.createElement("i",{className:"left arrow icon"})))))))}}]),t}(l.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).setDate=a.setDate.bind(Object(u.a)(a)),a.state={date:void 0,time:void 0},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/scheduler/confirm"},l.a.createElement(y,{date:this.state.date})),l.a.createElement(v.a,{path:"/scheduler"},l.a.createElement(N,{setDate:this.setDate})))))}},{key:"setDate",value:function(e){this.setState({date:e})}}]),t}(l.a.Component);i.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6b19ecba.chunk.js.map