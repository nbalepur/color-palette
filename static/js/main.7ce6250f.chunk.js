(this["webpackJsonpcolor-palette"]=this["webpackJsonpcolor-palette"]||[]).push([[0],{101:function(e,t,o){e.exports=o.p+"static/media/addButton.a62c3f55.png"},102:function(e,t,o){e.exports=o.p+"static/media/starFullButton.3e5b61f7.png"},103:function(e,t,o){e.exports=o.p+"static/media/starEmptyButton.1c31a749.png"},105:function(e,t,o){e.exports=o(282)},110:function(e,t,o){},276:function(e,t,o){},281:function(e,t,o){},282:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(93),l=o.n(n),c=o(10),i=o(11),s=o(13),u=o(12),d=o(14),p=o(24),h=o(37),S=o(94),m=o.n(S),f=o(95),k=o.n(f),g=o(96),v=o.n(g),q=o(97),C=o.n(q),b=o(98),y=o.n(b),w=o(99),E=o.n(w),O=(o(56),function(e){function t(){var e,o;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).setLockImage=function(){return o.props.colorSquare.isLocked?k.a:v.a},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.gridLength),a.a.createElement("div",{class:"left-float"},a.a.createElement("div",{class:"color-square",style:this.props.colorSquare.squareStyle},a.a.createElement("span",{class:"helper"}),a.a.createElement("img",{class:"lock-button",src:this.setLockImage(),alt:"lock button",onClick:function(){return e.props.handleLockPress(e.props.colorSquare)}}),a.a.createElement("img",{class:"delete-button",src:C.a,alt:"delete button",onClick:function(){return e.props.onDelete(e.props.colorSquare)}}),0!==this.props.colorSquare.index&&a.a.createElement("img",{class:"left-arrow",src:E.a,alt:"left arrow",onClick:function(){return e.props.swapSquares(e.props.colorSquare,"left")}}),a.a.createElement("img",{class:"edit-button",src:m.a,alt:"edit button",onClick:function(){return e.props.openColorPicker(e.props.colorSquare)}}),this.props.colorSquare.index!==this.props.gridLength-1&&a.a.createElement("img",{class:"right-arrow",src:y.a,alt:"right arrow",onClick:function(){return e.props.swapSquares(e.props.colorSquare,"right")}}),a.a.createElement("h1",{class:"color-text"},this.props.colorSquare.squareStyle.backgroundColor)))}}]),t}(r.Component)),x=o(15),j=o.n(x),P=(o(110),o(100)),D=function(e){function t(){var e,o;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={previousColorStyle:{width:90,height:50,backgroundColor:"red"},newColorStyle:{width:90,height:50,backgroundColor:"blue"},holderStyle:{width:90}},o.createStyle=function(e){if("previous"===e)var t={width:90,height:50,backgroundColor:o.props.colorSquare.prevColor};else t={width:90,height:50,backgroundColor:o.props.colorSquare.squareStyle.backgroundColor};return t},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{style:this.state.holderStyle,class:"color-preview-holder"},a.a.createElement("p",{class:"color-preview-text"},"new"),a.a.createElement("div",{style:this.createStyle("new")}),a.a.createElement("div",{style:this.createStyle("previous")}),a.a.createElement("p",{class:"color-preview-text"},"previous"),a.a.createElement("br",null),a.a.createElement("button",{class:"accept-decline",onClick:function(){return e.props.onAccept(e.props.colorSquare)}},"accept"),a.a.createElement("button",{class:"accept-decline",onClick:function(){return e.props.onDecline(e.props.colorSquare)}},"decline"))}}]),t}(r.Component),L=(o(275),function(e){function t(){var e,o;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={borderStyle:{width:375,height:270},colorPickerStyle:{width:240,height:235}},o.handleChange=function(e,t){o.props.handleChange(e,o.props.colorSquare)},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"border",style:this.state.borderStyle},a.a.createElement("div",{className:"color-picker-holder",style:this.state.colorPickerStyle},a.a.createElement(P.SketchPicker,{color:this.props.colorSquare.squareStyle.backgroundColor,onChange:this.handleChange,disableAlpha:!0,presetColors:[],width:this.state.colorPickerStyle.width-20})),a.a.createElement("div",{class:"UI-holder"},a.a.createElement(D,{onAccept:this.props.onAccept,onDecline:this.props.onDecline,colorSquare:this.props.colorSquare})))}}]),t}(r.Component)),A=o(101),I=o.n(A),B=function(e){function t(e){var o;return Object(c.a)(this,t),(o=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={colorPickerState:{showColorPicker:!1,activeColorSquare:0},colorSquares:[{index:0,prevColor:o.props.initialColors[0],isLocked:!1,squareStyle:{backgroundColor:o.props.initialColors[0],height:500,width:256}},{index:1,prevColor:o.props.initialColors[1],isLocked:!1,squareStyle:{backgroundColor:o.props.initialColors[1],height:500,width:256}},{index:2,prevColor:o.props.initialColors[2],isLocked:!1,squareStyle:{backgroundColor:o.props.initialColors[2],height:500,width:256}},{index:3,prevColor:o.props.initialColors[3],isLocked:!1,squareStyle:{backgroundColor:o.props.initialColors[3],height:500,width:256}}]},o.addColorSquare=function(){var e={index:o.state.colorSquares.length,prevColor:j()(),isLocked:!1,squareStyle:{backgroundColor:j()(),height:500,width:256}},t=o.state.colorSquares;t[t.length]=e,o.updateColorSquareDimensions()},o.onDelete=function(e){var t=o.state.colorSquares;t.splice(e.index,1),o.updateIndex(t),o.updateColorSquareDimensions()},o.handleLockPress=function(e){var t=o.state.colorSquares,r=t.indexOf(e);t[r].isLocked=!t[r].isLocked,o.setState({colorSquares:t})},o.openColorPicker=function(e){var t=o.state.colorSquares,r=t.indexOf(e),a=o.state.colorPickerState;a.showColorPicker=!0,a.activeColorSquare=r,o.setState({colorSquares:t}),o.setState({colorPickerState:a})},o.onDecline=function(e){var t=o.state.colorSquares,r=t.indexOf(e),a=o.state.colorPickerState;a.showColorPicker=!1;var n=Object(p.a)({},t[r].squareStyle);n.backgroundColor=t[r].prevColor,t[r].squareStyle=n,o.setState({colorPickerState:a}),o.setState({colorSquares:t})},o.onAccept=function(e){var t=o.state.colorSquares,r=t.indexOf(e),a=o.state.colorPickerState;a.showColorPicker=!1,t[r].prevColor=t[r].squareStyle.backgroundColor,o.setState({colorPickerState:a}),o.setState({colorSquares:t})},o.handleChange=function(e,t){var r=o.state.colorSquares,a=r.indexOf(t),n=Object(p.a)({},r[a].squareStyle);n.backgroundColor=e.hex,r[a].squareStyle=n,o.setState({colorSquares:r})},o.randomizeColors=function(){for(var e=o.state.colorSquares,t=0;t<e.length;t++){if(!e[t].isLocked){var r=Object(p.a)({},e[t].squareStyle),a=j()();r.backgroundColor=a,e[t].squareStyle=r}e[t].prevColor=a}o.setState({colorSquares:e})},o.updateIndex=function(e){for(var t=0;t<e.length;t++)e[t].index=t},o.swapSquares=function(e,t){var r=o.state.colorSquares,a=e.index,n=a-1;"right"===t&&(n+=2);var l=r[a];r[a]=r[n],r[n]=l,o.updateIndex(r),o.setState({colorSquares:r})},o.updateWindowDimensions=o.updateWindowDimensions.bind(Object(h.a)(o)),o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.updateColorSquareDimensions()}},{key:"updateColorSquareDimensions",value:function(){for(var e=this.state.colorSquares,t=0;t<e.length;t++){var o=Object(p.a)({},e[t].squareStyle);o.width=(window.innerWidth-75)/e.length,o.height=.75*window.innerHeight,e[t].squareStyle=o}document.getElementById("color-picker").style.left=e[0].squareStyle.width/2*e.length-187.5+"px",document.getElementById("color-picker").style.top=e[0].squareStyle.height/2-135+"px",this.setState({colorSquares:e})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",{class:"left-float"},this.state.colorSquares.map((function(t){return a.a.createElement(O,{key:t.id,colorSquare:t,openColorPicker:e.openColorPicker,handleLockPress:e.handleLockPress,onDelete:e.onDelete,gridLength:e.state.colorSquares.length,swapSquares:e.swapSquares})}))),a.a.createElement("div",{id:"color-picker",class:"color-picker"},this.state.colorPickerState.showColorPicker&&a.a.createElement(L,{colorSquare:this.state.colorSquares[this.state.colorPickerState.activeColorSquare],onAccept:this.onAccept,onDecline:this.onDecline,handleChange:this.handleChange}))),a.a.createElement("img",{src:I.a,alt:"add color square",class:"add-button",onClick:this.addColorSquare}),a.a.createElement("button",{class:"random-button",onClick:this.randomizeColors},"randomize"))}}]),t}(r.Component),W=o(102),z=o.n(W),F=o(103),H=o.n(F),J=(o(276),function(e){function t(){var e,o;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={favorited:!1},o.setStarImage=function(){return o.state.favorited?z.a:H.a},o.handleFavoriteBtn=function(){o.setState({favorited:!o.state.favorited})},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{class:"holder"},a.a.createElement("img",{class:"favorite-button",src:this.setStarImage(),alt:"favorite button",onClick:this.handleFavoriteBtn}),a.a.createElement("div",{id:"child"},a.a.createElement(B,{initialColors:[j()(),j()(),j()(),j()()]})),a.a.createElement("hr",{class:"divider"}))}}]),t}(r.Component)),N=o(104);o(281);var U=function(){return a.a.createElement("div",null,a.a.createElement(N.Helmet,null,a.a.createElement("style",null,"body { background-color: #212020; }")),a.a.createElement(J,null))};l.a.render(a.a.createElement(U,null),document.getElementById("root"))},56:function(e,t,o){},94:function(e,t,o){e.exports=o.p+"static/media/editButton.6e16b9c4.png"},95:function(e,t,o){e.exports=o.p+"static/media/lock-locked.b1bb5f0e.png"},96:function(e,t,o){e.exports=o.p+"static/media/lock-unlocked.0457ecd3.png"},97:function(e,t,o){e.exports=o.p+"static/media/deleteButton.0535b675.png"},98:function(e,t,o){e.exports=o.p+"static/media/rightArrow.f46f84d7.png"},99:function(e,t,o){e.exports=o.p+"static/media/leftArrow.3a0906f5.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.7ce6250f.chunk.js.map