(this["webpackJsonpthailand-mob"]=this["webpackJsonpthailand-mob"]||[]).push([[0],{137:function(e,a,t){e.exports=t(238)},142:function(e,a,t){},144:function(e,a,t){},238:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(17),i=t.n(l),c=(t(142),t(44)),r=t(45),s=t(50),u=t(48),m=(t(143),t(245)),d=t(134),h=t(117),p=t(42),b=t(246),f=t(247),g=t(248),E=t(243),v=t(244),y=t(88),C=t(131),k=t.n(C),O=t(64),j=t.n(O),S=(t(144),function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("a",{href:"#"},o.a.createElement("h2",null,this.props.uploadName),o.a.createElement("div",{className:"content-tanabata",style:{border:"1px dashed black",lineHeight:"35px"}},o.a.createElement("p",null,this.props.note))))}}]),t}(n.Component)),N=t(55),w=t.n(N);t(240),t(145);w.a.initializeApp({apiKey:"AIzaSyAcR04zfOkpNnf90aumafMe4JyNdLmmzKM",authDomain:"mob-support-3d5a1.firebaseapp.com",databaseURL:"https://mob-support-3d5a1.firebaseio.com",projectId:"mob-support-3d5a1",storageBucket:"mob-support-3d5a1.appspot.com",messagingSenderId:"755638116751",appId:"1:755638116751:web:70d8f71ef5c5c7148aabfa"});w.a.storage(),w.a.database();var x=w.a.database().ref("/postit"),z=function(){return x},D=function(e){return x.push(e)},L=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSubmit=function(){D({uploadName:n.state.uploadName,note:n.state.note}).then((function(){n.setState({success:!0})})).catch((function(e){console.log(e)})),n.setState({modalLoading:!0}),setTimeout((function(){n.setState({modalVisible:!1,modalLoading:!1})}),3e3)},n.handleCancel=function(){n.setState({modalVisible:!1})},n.handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.state={loading:!1,modalLoading:!1,modalVisible:!1,uploadName:"",success:!1,note:"",data:[]},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleCancel=n.handleCancel.bind(Object(p.a)(n)),n.onDataChange=n.onDataChange.bind(Object(p.a)(n)),n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){z().on("value",this.onDataChange)}},{key:"componentWillUnmount",value:function(){z().off("value",this.onDataChange)}},{key:"onDataChange",value:function(e){var a=[];e.forEach((function(e){var t=e.key,n=e.val();a.push({key:t,uploadName:n.uploadName,note:n.note})})),this.setState({data:a,success:!0})}},{key:"render",value:function(){var e=this;return this.state.success?o.a.createElement("div",{id:"postit-list"},o.a.createElement(j.a,{title:"Tanabata message",visible:this.state.modalVisible,confirmLoading:this.state.modalLoading,onOk:this.handleSubmit,onCancel:this.handleCancel},o.a.createElement("label",null,"\u0e0a\u0e37\u0e48\u0e2d"),o.a.createElement(v.a,{prefix:o.a.createElement(f.a,null),name:"uploadName",onChange:this.handleChange}),o.a.createElement("label",null,"Note"),o.a.createElement(k.a,{name:"note",onChange:this.handleChange})),o.a.createElement(y.a,{type:"primary",size:"large",block:!0,style:{border:"none"},icon:o.a.createElement(g.a,null),loading:this.state.loading,onClick:function(){return e.setState({modalVisible:!0})}},"Create Tanabata"),o.a.createElement("ul",{className:"post-it-ul"},this.state.data.map((function(e,a){return o.a.createElement("li",{key:a,className:"post-it-li"},o.a.createElement(S,{uploadName:e.uploadName,note:e.note,key:a}))})))):o.a.createElement(E.a,{style:{position:"fixed",top:"50%",left:"50%"},indicator:o.a.createElement(b.a,{style:{fontSize:60},spin:!0})})}}]),t}(n.Component),I=m.a.Header,V=m.a.Content,T=(m.a.Footer,m.a.Sider,function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(m.a,{style:{backgroundColor:"transparent"}},o.a.createElement(I,{className:"site-layout-sub-header-background",style:{padding:0,color:"white",fontSize:18}},o.a.createElement("span",{role:"img","aria-label":"img",style:{fontSize:"30px"}},"\ud83c\udfee Tanabata 2021")),o.a.createElement(V,{style:{margin:"24px 16px 0"}},o.a.createElement("div",null,o.a.createElement(L,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(236);i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[137,1,2]]]);
//# sourceMappingURL=main.4651d7b7.chunk.js.map