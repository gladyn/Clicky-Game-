(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,image:"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",clicked:!1},{id:2,image:"https://en.wikipedia.org/wiki/Kenny_McCormick#/media/File:KennyMcCormick.png",clicked:!1},{id:3,image:"https://en.wikipedia.org/wiki/Kyle_Broflovski#/media/File:KyleBroflovski.png",clicked:!1},{id:4,image:"https://en.wikipedia.org/wiki/Stan_Marsh#/media/File:StanMarsh.png",clicked:!1},{id:5,image:"https://en.wikipedia.org/wiki/Chef_(South_Park)#/media/File:SouthParkChef.png",clicked:!1},{id:6,image:"https://en.wikipedia.org/wiki/Butters_Stotch#/media/File:ButtersStotch.png",clicked:!1},{id:7,image:"https://en.wikipedia.org/wiki/Wendy_Testaburger#/media/File:Wendy_South_Park.png",clicked:!1},{id:8,image:"https://en.wikipedia.org/wiki/Mr._Garrison#/media/File:President_Garrison.png",clicked:!1},{id:9,image:"https://en.wikipedia.org/wiki/Mr._Garrison#/media/File:MrGarrison.png",clicked:!1},{id:10,image:"https://southpark.fandom.com/wiki/Ike_Broflovski?file=5a.jpg",clicked:!1},{id:11,image:"https://southpark.fandom.com/wiki/Tweek_Tweak?file=64a.jpg",clicked:!1},{id:12,image:"https://southpark.fandom.com/wiki/Timmy_Burch?file=62a.jpg",clicked:!1}]},function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=a(6),s=a(1),l=a(2),u=a(4),m=a(3),d=a(5),h=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={message:"",animating:!1},a.renderMessage=function(){switch(a.state.message){case"correct":return"You guessed correctly!";case"incorrect":return"You guessed incorrectly!";default:return"Click an image to begin!"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,i={animating:!0};i.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===i.message||this.setState(i)}},{key:"render",value:function(){var e=this;return i.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component));a(17);var k=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Clicky Game")),i.a.createElement(h,{score:e.score,topScore:e.topScore}),i.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(18);var p=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"South Park"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(19);var f=function(e){return i.a.createElement("main",{className:"container"},e.children)};a(20);var g=function(e){return i.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(21);var v=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"bottom"},"Clicky Game!"))},w=a(9),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={data:w,score:0,topScore:0},a.handleCorrectGuess=function(e){var t=a.state,n=t.topScore,i=t.score+1,r=Math.max(i,n);a.setState({data:a.shuffleData(e),score:i,topScore:r})},a.handleIncorrectGuess=function(e){a.setState({data:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map(function(e){return Object(o.a)({},e,{clicked:!1})});return a.shuffleData(t)},a.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},a.handleItemClick=function(e){var t=!1,n=a.state.data.map(function(a){var n=Object(o.a)({},a);return n.id===e&&(n.clicked||(n.clicked=!0,t=!0)),n});t?a.handleCorrectGuess(n):a.handleIncorrectGuess(n)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(p,null),i.a.createElement(f,null,this.state.data.map(function(t){return i.a.createElement(g,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})})),i.a.createElement(v,null))}}]),t}(n.Component);var S=function(){return i.a.createElement(E,null)};a(22);c.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f389bdd4.chunk.js.map