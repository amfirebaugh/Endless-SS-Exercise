(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/logoEndless.6e24790b.svg"},17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),o=a.n(l),r=(a(23),a(24),a(10)),c=a.n(r),i={position:"relative",left:"10%"},m=function(){return s.a.createElement("nav",{className:"navContainer"},s.a.createElement("img",{src:c.a,width:"110px",style:i,alt:"Endless"}))};var d=function(){return s.a.createElement("div",{className:"mainContainer"},s.a.createElement("div",{className:"textArea"},s.a.createElement("h3",null,"New Games & Accessories"),s.a.createElement("h1",{className:"textAreaH1"},"Monthly packages."),s.a.createElement("h1",{className:"textAreaH1"},"Excitement delivered daily."),s.a.createElement("p",{className:"aboutTextSubArea"},"What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep \u2014 every month."),s.a.createElement("button",null,"GET STARTED")))},u=a(11),g=a(12),p=a(15),E=a(13),v=a(16),h=a(14),y=a.n(h),N=function(){return y.a.get("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge")};var T=function(e){return s.a.createElement("div",{className:"stepContainer"},s.a.createElement("h1",{className:"stepNum"},"01"),s.a.createElement("hr",{className:"numHR"}),s.a.createElement("h4",{className:"stepTitle"},e.stage1Title),s.a.createElement("p",{className:"stepBody"},e.stage1Body))};var f=function(e){return s.a.createElement("div",{className:"stepContainer"},s.a.createElement("h1",{className:"stepNum"},"02"),s.a.createElement("hr",{className:"numHR"}),s.a.createElement("h4",{className:"stepTitle"},e.stage2Title),s.a.createElement("p",{className:"stepBody"},e.stage2Body))};var B=function(e){return s.a.createElement("div",{className:"stepContainer"},s.a.createElement("h1",{className:"stepNum"},"03"),s.a.createElement("hr",{className:"numHR"}),s.a.createElement("h4",{className:"stepTitle"},e.stage3Title),s.a.createElement("p",{className:"stepBody"},e.stage3Body))};var C=function(e){return s.a.createElement("div",{className:"stepContainer"},s.a.createElement("h1",{className:"stepNum"},"04"),s.a.createElement("hr",{className:"numHR"}),s.a.createElement("h4",{className:"stepTitle"},e.stage4Title),s.a.createElement("p",{className:"stepBody"},e.stage4Body))},w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(E.a)(t).call(this,e))).state={stage1Title:"",stage1Body:"",stage2Title:"",stage2Body:"",stage3Title:"",stage3Body:"",stage4Title:"",stage4Body:""},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;N().then(function(t){var a;t.data.sort((a="stepNumber",function(e,t){return e[a]>t[a]?1:e[a]<t[a]?-1:0})),console.log(t.data);var n=t.data[0].versionContent[0].title.toUpperCase(),s=t.data[1].versionContent[0].title.toUpperCase(),l=t.data[2].versionContent[1].title.toUpperCase(),o=t.data[3].versionContent[0].title.toUpperCase();e.setState({stage1Title:n,stage1Body:t.data[0].versionContent[0].body,stage2Title:s,stage2Body:t.data[1].versionContent[0].body,stage3Title:l,stage3Body:t.data[2].versionContent[1].body,stage4Title:o,stage4Body:t.data[3].versionContent[0].body})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.stage1Title,a=e.stage1Body,n=e.stage2Title,l=e.stage2Body,o=e.stage3Title,r=e.stage3Body,c=e.stage4Title,i=e.stage4Body;return s.a.createElement("div",{className:"hiwContainer"},s.a.createElement("h2",null,"How It Works"),s.a.createElement("div",{className:"flex-container"},s.a.createElement(T,{stage1Title:t,stage1Body:a}),s.a.createElement(f,{stage2Title:n,stage2Body:l}),s.a.createElement(B,{stage3Title:o,stage3Body:r}),s.a.createElement(C,{stage4Title:c,stage4Body:i})))}}]),t}(n.Component);var b=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,null),s.a.createElement(d,null),s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.8fe84f0c.chunk.js.map