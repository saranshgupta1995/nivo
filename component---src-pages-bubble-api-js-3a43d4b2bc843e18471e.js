(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7nGd":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return V})),n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return R})),n.d(t,"e",(function(){return Z})),n.d(t,"f",(function(){return re})),n.d(t,"g",(function(){return J}));n("IYjZ"),n("Eb4t"),n("fikn"),n("iTLF"),n("XQVo"),n("Qvie"),n("xl0S"),n("1c7q"),n("p0JG"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("mXGw"),o=n.n(r),i=n("wMFK"),a=n("gTDC"),l=n.n(a),c=n("5QYd"),s=n("llhf"),u=n("mrMI"),d=n("bBnb"),p=n.n(d),f=n("Cg+6"),h=n.n(f),m=n("ZXVz"),b=n.n(m),g=n("r1ui"),y=n.n(g),v=n("oek1"),x=n.n(v),w=n("W0B4"),C=n.n(w),O=n("56Mt");function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e,t,n,r){var o=e.find((function(e){return e.path===t}));if(!o)return e;var i=Math.min(n,r)/(2*o.r),a=n/2-o.x*i,l=r/2-o.y*i;return e.map((function(e){return E(E({},e),{},{r:e.r*i,x:e.x*i+a,y:e.y*i+l})}))},S={identity:C.a.oneOfType([C.a.string,C.a.func]).isRequired,colors:s.p.isRequired,colorBy:s.d.isRequired,leavesOnly:C.a.bool.isRequired,padding:C.a.number.isRequired,borderWidth:C.a.number.isRequired,borderColor:s.k.isRequired,enableLabel:C.a.bool.isRequired,label:C.a.oneOfType([C.a.string,C.a.func]).isRequired,labelFormat:C.a.string,labelTextColor:s.k.isRequired,labelSkipRadius:C.a.number.isRequired,isInteractive:C.a.bool.isRequired,onClick:C.a.func.isRequired,isZoomable:C.a.bool.isRequired,tooltipFormat:C.a.oneOfType([C.a.func,C.a.string]),tooltip:C.a.func},P=E(E({},S),{},{nodeComponent:C.a.func.isRequired,role:C.a.string.isRequired},c.D),_=E(E({},S),{},{nodeComponent:C.a.func.isRequired}),I=E(E({},S),{},{pixelRatio:C.a.number.isRequired}),N={identity:"id",leavesOnly:!1,padding:1,colors:{scheme:"nivo"},colorBy:"depth",borderWidth:0,borderColor:{from:"color"},enableLabel:!0,label:"id",labelTextColor:{from:"color",modifiers:[["darker",1]]},labelSkipRadius:8,isInteractive:!0,onClick:c.S,isZoomable:!0},B=E(E({},N),{},{nodeComponent:function(e){var t=e.node,n=e.style,r=e.handlers,i=e.theme;return n.r<=0?null:o.a.createElement("g",{transform:"translate(".concat(n.x,",").concat(n.y,")")},o.a.createElement("circle",Object.assign({r:n.r},r,{fill:n.fill?n.fill:n.color,stroke:n.borderColor,strokeWidth:n.borderWidth})),!1!==t.label&&o.a.createElement("text",{textAnchor:"middle",dominantBaseline:"central",style:E(E({},i.labels.text),{},{fill:n.labelTextColor,pointerEvents:"none"})},t.label))},role:"img",defs:[],fill:[]}),R=E(E({},N),{},{nodeComponent:function(e){var t=e.node,n=e.style,r=e.handlers;return n.r<=0?null:o.a.createElement("div",Object.assign({id:(t.data&&t.data.id?t.data.id:t.id).replace(/[^\w]/gi,"-"),style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",background:n.color,color:n.labelTextColor,borderWidth:n.borderWidth,borderColor:n.borderColor,top:n.y-n.r,left:n.x-n.r,width:2*n.r,height:2*n.r,borderStyle:"solid",borderRadius:n.r}},r),!1!==t.label&&t.label)}}),A=E(E({},N),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1}),q=Object.freeze({__proto__:null,BubblePropTypes:P,BubbleHtmlPropTypes:_,BubbleCanvasPropTypes:I,BubbleDefaultProps:B,BubbleHtmlDefaultProps:R,BubbleCanvasDefaultProps:A}),L=[Object(c.vb)(),Object(c.ub)(),Object(c.xb)(),b()(["colors","colorBy"],(function(e){var t=e.colors,n=e.colorBy;return{getColor:Object(s.j)(t,n)}})),b()(["width","height","padding"],(function(e){var t=e.width,n=e.height,r=e.padding;return{pack:Object(u.b)().size([t,n]).padding(r)}})),b()(["identity"],(function(e){var t=e.identity;return{getIdentity:Object(c.F)(t)}})),b()(["borderColor","theme"],(function(e){var t=e.borderColor,n=e.theme;return{getBorderColor:Object(s.h)(t,n)}})),b()(["label","labelFormat"],(function(e){var t=e.label,n=e.labelFormat;return{getLabel:Object(c.I)(t,n)}})),b()(["labelTextColor","theme"],(function(e){var t=e.labelTextColor,n=e.theme;return{getLabelTextColor:Object(s.h)(t,n)}})),y()((function(e){var t=e.currentNodePath;return{currentNodePath:void 0===t?null:t}}),{zoomToNode:function(e){var t=e.currentNodePath;return function(e){return e===t?{currentNodePath:null}:{currentNodePath:e}}}}),b()(["root","pack","leavesOnly","getIdentity","getColor"],(function(e){return{nodes:function(e){var t=e.root,n=e.pack,r=e.leavesOnly,o=e.getIdentity,i=e.getColor;t.each((function(e){e.id=o(e.data),e.path=function(e,t){return e.ancestors().map((function(e){return t(e.data)})).join(".")}(e,o)})),n(t);var a=r?t.leaves():t.descendants();return a=a.map((function(e){return e.color=i(E(E({},e.data),{},{depth:e.depth})),e.label=!1,e}))}({root:e.root,pack:e.pack,leavesOnly:e.leavesOnly,getIdentity:e.getIdentity,getColor:e.getColor})}})),b()(["enableLabel","nodes","getLabel","labelSkipRadius"],(function(e){var t=e.enableLabel,n=e.nodes,r=e.getLabel,o=e.labelSkipRadius;if(t)return{nodes:n.map((function(e){return 0!==e.height||o>0&&e.r<o?e:E(E({},e),{},{label:r(e)})}))}})),b()(["nodes","isZoomable","currentNodePath"],(function(e){var t=e.nodes,n=e.isZoomable,r=e.currentNodePath,o=e.width,i=e.height;if(r&&n)return{nodes:T(t,r,o,i)}}))],W=[b()(["nodes","defs","fill"],(function(e){var t=e.nodes,n=e.defs,r=e.fill;return{defs:Object(c.r)(n,t,r,{targetKey:"fill"})}}))],F=function(e){var t=q["".concat(e.displayName,"PropTypes")],n=q["".concat(e.displayName,"DefaultProps")];switch(e.propTypes=t,e.displayName){case"Bubble":return p.a.apply(void 0,[h()(n)].concat(L,W,[Object(c.wb)(),x.a]))(e);case"BubbleHtml":return p.a.apply(void 0,[h()(n)].concat(L,[Object(c.wb)(),x.a]))(e);case"BubbleCanvas":return p.a.apply(void 0,[h()(n)].concat(L,[x.a]))(e)}return e},H=function(e){var t=e.data;return E({scale:0,r:0,x:t.x,y:t.y},Object(s.l)(t.color))},D=function(e){return function(t){var n=t.data;return E({scale:Object(i.spring)(0,e),r:Object(i.spring)(0,e),x:Object(i.spring)(n.x,e),y:Object(i.spring)(n.y,e)},Object(s.l)(n.color,e))}},M=function(e,t){var n=t.isInteractive,r=t.onClick,i=t.showTooltip,a=t.hideTooltip,l=t.isZoomable,c=t.zoomToNode,s=t.theme,u=t.tooltipFormat,d=t.tooltip;if(!n)return{};var p=function(t){i(o.a.createElement(O.a,{id:e.id,value:e.value,enableChip:!0,color:e.color,theme:s,format:u,renderContent:"function"==typeof d?d.bind(null,E({node:e},e)):null}),t)};return{onMouseEnter:p,onMouseMove:p,onMouseLeave:a,onClick:l?function(t){r(e,t),c(e.path)}:function(t){r(e,t)}}},z=function(e){var t=e.nodes,n=e.nodeComponent,r=e.margin,a=e.outerWidth,u=e.outerHeight,d=e.theme,p=e.borderWidth,f=e.getBorderColor,h=e.defs,m=e.getLabelTextColor,b=e.animate,g=e.motionStiffness,y=e.motionDamping,v=e.isInteractive,x=e.onClick,w=e.tooltipFormat,C=e.tooltip,O=e.isZoomable,k=e.zoomToNode,j=e.role,T={stiffness:g,damping:y},S=function(e,t,n){return M(e,{isInteractive:v,onClick:x,showTooltip:t,hideTooltip:n,isZoomable:O,zoomToNode:k,theme:d,tooltipFormat:w,tooltip:C})};return o.a.createElement(c.b,{isInteractive:v,theme:d,animate:b,motionStiffness:g,motionDamping:y},(function(e){var g=e.showTooltip,y=e.hideTooltip;return o.a.createElement(c.k,{width:a,height:u,margin:r,defs:h,theme:d,role:j},!b&&o.a.createElement("g",null,t.map((function(e){return o.a.createElement(n,{key:e.path,node:e,style:E(E({},l()(e,["scale","r","x","y","color"])),{},{fill:e.fill,borderWidth:p,borderColor:f(e),labelTextColor:m(e)}),handlers:S(e,g,y),theme:d})}))),b&&o.a.createElement(i.TransitionMotion,{willEnter:H,willLeave:D(T),styles:t.map((function(e){return{key:e.path,data:e,style:E({scale:Object(i.spring)(1,T),r:Object(i.spring)(e.r,T),x:Object(i.spring)(e.x,T),y:Object(i.spring)(e.y,T),opacity:Object(i.spring)(1,T)},Object(s.l)(e.color,T))}}))},(function(e){return o.a.createElement("g",null,e.map((function(e){var t=e.style,r=e.data;return t.color=Object(s.i)(t),o.a.createElement(n,{key:r.path,node:r,style:E(E({},t),{},{fill:r.fill,borderWidth:p,borderColor:f(t),labelTextColor:m(t)}),handlers:S(r,g,y),theme:d})})))})))}))};z.displayName="Bubble";var V=F(z);V.displayName="Bubble";var Z=function(e){return o.a.createElement(c.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(V,Object.assign({width:n,height:r},e))}))},G=function(e){var t=e.nodes,n=e.nodeComponent,r=e.margin,a=e.outerWidth,u=e.outerHeight,d=e.theme,p=e.borderWidth,f=e.getBorderColor,h=e.getLabelTextColor,m=e.animate,b=e.motionStiffness,g=e.motionDamping,y=e.isInteractive,v=e.onClick,x=e.isZoomable,w=e.zoomToNode,C=e.tooltipFormat,O=e.tooltip,k={stiffness:b,damping:g},j=function(e,t,n){return M(e,{isInteractive:y,onClick:v,showTooltip:t,hideTooltip:n,isZoomable:x,zoomToNode:w,theme:d,tooltipFormat:C,tooltip:O})};return o.a.createElement(c.b,{isInteractive:y,theme:d,animate:m,motionStiffness:b,motionDamping:g},(function(e){var c=e.showTooltip,d=e.hideTooltip;return o.a.createElement("div",{style:{position:"relative",width:a,height:u}},!m&&o.a.createElement("div",{style:{position:"absolute",top:r.top,left:r.left}},t.map((function(e){return o.a.createElement(n,{key:e.path,node:e,style:E(E({},l()(e,["scale","r","x","y","color"])),{},{borderWidth:p,borderColor:f(e),labelTextColor:h(e)}),handlers:j(e,c,d)})}))),m&&o.a.createElement(i.TransitionMotion,{willEnter:H,willLeave:D(k),styles:t.map((function(e){return{key:e.path,data:e,style:E({scale:Object(i.spring)(1,k),r:Object(i.spring)(e.r,k),x:Object(i.spring)(e.x,k),y:Object(i.spring)(e.y,k),opacity:Object(i.spring)(1,k)},Object(s.l)(e.color,k))}}))},(function(e){return o.a.createElement("div",{style:{position:"absolute",top:r.top,left:r.left}},e.map((function(e){var t=e.style,r=e.data;return t.color=Object(s.i)(t),o.a.createElement(n,{key:r.path,node:r,style:E(E({},t),{},{borderWidth:p,borderColor:f(t),labelTextColor:h(t)}),handlers:j(r,c,d)})})))})))}))};G.displayName="BubbleHtml";var U=F(G);U.displayName="BubbleHtml";var J=function(e){return o.a.createElement(c.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(U,Object.assign({width:n,height:r},e))}))};function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(l,e);var t,n,r,i,a=(t=l,function(){var e,n=K(t);if(X()){var r=K(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return ee(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return n=l,(r=[{key:"componentDidMount",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"componentDidUpdate",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"draw",value:function(e){var t=this,n=e.nodes,r=e.pixelRatio,o=e.margin,i=e.outerWidth,a=e.outerHeight,l=e.theme,c=e.borderWidth,s=e.getBorderColor,u=e.enableLabel,d=e.getLabel,p=e.labelSkipRadius,f=e.getLabelTextColor;this.surface.width=i*r,this.surface.height=a*r,this.ctx.scale(r,r),this.ctx.fillStyle=l.background,this.ctx.fillRect(0,0,i,a),this.ctx.translate(o.left,o.top),n.forEach((function(e){t.ctx.save(),c>0&&(t.ctx.strokeStyle=s(e),t.ctx.lineWidth=c),t.ctx.beginPath(),t.ctx.arc(e.x,e.y,e.r,0,2*Math.PI),t.ctx.fillStyle=e.color,t.ctx.fill(),c>0&&t.ctx.stroke()})),u&&(this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="".concat(l.labels.text.fontSize,"px ").concat(l.labels.text.fontFamily),n.filter((function(e){return e.r>p})).forEach((function(e){var n=d(e),r=f(e);t.ctx.fillStyle=r,t.ctx.fillText(n,e.x,e.y)})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.outerWidth,r=t.outerHeight,i=t.pixelRatio,a=t.isInteractive,l=t.theme;return o.a.createElement(c.b,{isInteractive:a,theme:l,animate:!1},(function(){return o.a.createElement("canvas",{ref:function(t){e.surface=t},width:n*i,height:r*i,style:{width:n,height:r}})}))}}])&&Q(n.prototype,r),i&&Q(n,i),l}(r.Component);te.displayName="BubbleCanvas";var ne=F(te);ne.displayName="BubbleCanvas";var re=function(e){return o.a.createElement(c.j,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(ne,Object.assign({width:n,height:r},e))}))}}).call(this,n("pCvA"))},"9xi1":function(e,t,n){"use strict";n.r(t);n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var r=n("mXGw"),o=n.n(r),i=n("6zZa"),a=n("vrFN"),l=n("vrO3"),c=n("vl/B"),s=n("OD1n"),u=n("2Au1"),d=n.n(u);function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=Object(i.f)();t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{title:"Bubble HTTP API",keywords:[].concat(p(d.a.Bubble.tags),["HTTP API"])}),o.a.createElement(l.a,{componentName:"Bubble",chartClass:"circle-packing",apiPath:"/charts/bubble",flavors:d.a.flavors,dataProperty:"root",controlGroups:c.a,propsMapper:s.a,defaultProps:{width:600,height:600,margin:{top:20,right:20,bottom:20,left:20},root:JSON.stringify(f,null,"  "),identity:"name",value:"loc",colors:{scheme:"nivo"},colorBy:"depth",padding:1,enableLabel:!0,leavesOnly:!1,label:"id",labelSkipRadius:8,labelTextColor:{from:"color",modifiers:[["darker",.8]]},labelTextDY:4,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]}}}))}},OD1n:function(e,t,n){"use strict";var r=n("nLLr");t.a=Object(r.c)({label:function(e){return"d => `${d.id}: ${d.value}`"===e?function(e){return e.id+": "+e.value}:e}})},QQ1a:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r],r));return n};t.default=r},nKO5:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var o=r(n("QKC2")),i=n("mXGw"),a=(r(n("lPWr")),r(n("6lSW")),function(e){return function(t){var n=(0,i.createFactory)(t);return function(t){function r(){return t.apply(this,arguments)||this}(0,o.default)(r,t);var i=r.prototype;return i.shouldComponentUpdate=function(t){return e(this.props,t)},i.render=function(){return n(this.props)},r}(i.Component)}});t.default=a},oek1:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var o=r(n("nKO5")),i=r(n("lcr2")),a=(r(n("lPWr")),r(n("6lSW")),function(e){return(0,o.default)((function(e,t){return!(0,i.default)(e,t)}))(e)});t.default=a},r1ui:function(e,t,n){"use strict";var r=n("63Ad");t.__esModule=!0,t.default=void 0;var o=r(n("8VmE")),i=r(n("QKC2")),a=n("mXGw"),l=(r(n("lPWr")),r(n("6lSW")),r(n("QQ1a"))),c=function(e,t){return function(n){var r=(0,a.createFactory)(n);return function(n){function a(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(r=n.call.apply(n,[this].concat(i))||this).state="function"==typeof e?e(r.props):e,r.stateUpdaters=(0,l.default)(t,(function(e){return function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t&&"function"==typeof t.persist&&t.persist(),r.setState((function(n,r){return e(n,r).apply(void 0,[t].concat(o))}))}})),r}return(0,i.default)(a,n),a.prototype.render=function(){return r((0,o.default)({},this.props,this.state,this.stateUpdaters))},a}(a.Component)}};t.default=c},"vl/B":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var r=n("7nGd"),o=n("RQLE");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=[{key:"root",help:"The hierarchical data object.",type:"object",required:!0,group:"Base"},{key:"identity",help:"Define id accessor.",description:"\n            define id accessor, if string given, will use\n            `datum[value]`, if function given, it will be\n            invoked for each node and will receive the node as\n            first argument, it must return the node value.\n        ",type:"string | Function",required:!1,defaultValue:r.c.identity,group:"Base"},{key:"value",help:"Define value accessor.",description:"\n            define value accessor, if string given, will use\n            `datum[value]`, if function given, it will be\n            invoked for each node and will receive the node as\n            first argument, it must return the node value.\n        ",type:"string | Function",required:!1,defaultValue:"value",group:"Base"},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using `<ResponsiveBubble/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using `<ResponsiveBubble/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"leavesOnly",help:"Only render leaf nodes (skip parent nodes).",type:"boolean",required:!1,defaultValue:r.c.leavesOnly,controlType:"switch",group:"Base"},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"padding",help:"Padding between each circle.",description:"\n            Padding between adjacent circles.\n            Please be aware that when zoomed\n            this value will be affected by the zooming factor\n            and is expressed in pixels. See the\n            [official d3 documentation](https://github.com/d3/d3-hierarchy#pack_padding).\n        ",type:"number",required:!1,defaultValue:r.c.padding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},o.f,{key:"colors",help:"Defines how to compute node color.",description:"\n            colors used to colorize the circles,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | Function | string[]",required:!1,defaultValue:{scheme:"nivo"},controlType:"ordinalColors",group:"Style"},{key:"colorBy",type:"string | Function",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n            If a function is provided, it will receive\n            the current node data and must return\n            a string or number which will be passed\n            to the color generator.\n        ",required:!1,defaultValue:r.c.colorBy,controlType:"choices",group:"Style",controlOptions:{choices:[{label:"depth",value:"depth"},{label:"name",value:"name"}]}},{key:"borderWidth",help:"Width of circle border.",type:"number",required:!1,defaultValue:r.c.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.c.borderColor,controlType:"inheritedColor",group:"Style"}].concat(i(Object(o.b)("Style",["svg"])),[{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:r.c.enableLabel,controlType:"switch",group:"Labels"},{key:"label",help:"Label accessor.",description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:r.c.label,controlType:"choices",group:"Labels",controlOptions:{choices:["id","value","d => `${d.id}: ${d.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"labelFormat",group:"Labels",help:"Labels formatting.",description:"\n            How to format label,\n            [see d3.format() documentation](https://github.com/d3/d3-format/blob/master/README.md#format).\n        ",type:"string | Function"},{key:"labelTextColor",help:"Method to compute label text color.",description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:r.c.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"labelSkipRadius",help:"Skip label rendering if node radius is lower than given value, 0 to disable.",type:"number",required:!1,defaultValue:r.c.labelSkipRadius,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:32}},{key:"isInteractive",flavors:["svg","html"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:r.c.isInteractive,controlType:"switch",group:"Interactivity"},{key:"isZoomable",flavors:["svg","html"],help:"Enable/disable zooming ('isInteractive' must also be 'true').",type:"boolean",required:!1,defaultValue:r.c.isZoomable,controlType:"switch",group:"Interactivity"},{key:"onClick",group:"Interactivity",flavors:["svg","html"],help:"onClick handler, it receives clicked node data and mouse event.",type:"Function",required:!1}],i(Object(o.e)(["svg","html"],r.c))),l=Object(o.d)(a)},vrO3:function(e,t,n){"use strict";n("1c7q");var r=n("mXGw"),o=n.n(r),i=n("UutA"),a=n("7oih"),l=n("UmRm"),c=n("QbkB"),s=n("1h20"),u=n("yHyT"),d=n("SBeK"),p=n("MF9i"),f=i.d.a.withConfig({displayName:"ApiPreview__Link",componentId:"sc-1tjndi9-0"})(["position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;"]),h=i.d.img.withConfig({displayName:"ApiPreview__Image",componentId:"sc-1tjndi9-1"})(["max-width:100%;max-height:100%;"]),m=i.d.div.withConfig({displayName:"ApiPreview__EmptyContainer",componentId:"sc-1tjndi9-2"})(["font-size:14px;line-height:1.6em;color:",";display:flex;align-items:center;justify-content:center;width:100%;height:100%;"],(function(e){return e.theme.colors.textLight})),b=function(e){var t=e.responseStatus,n=e.chartUrl;return 201===t&&n?o.a.createElement(f,{href:n,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(h,{src:n,alt:"api result"})):o.a.createElement(m,null,"Click the generate button in order to generate the chart.",o.a.createElement("br",null),"You can customize settings by using dedicated controls.")},g=n("TurY"),y=n("DA+T");function v(){var e=w(["\n        & {\n            position: relative;\n            top: auto;\n            right: auto;\n            width: auto;\n            height: 460px;\n            z-index: 0;\n            border-top: 1px solid ",";\n        }\n    "]);return v=function(){return e},e}function x(){var e=w(["\n        & {\n            top: ","px;\n            right: 0;\n            width: 60%;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.55);\n        }\n    "]);return x=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),e.raw=t,e}var C=["preview","body","data"],O=function(e){var t=e.chartClass,n=e.data,i=e.body,a=e.isLoading,l=e.responseStatus,c=e.chartUrl,s=Object(g.b)(),u=Object(r.useState)("preview"),d=u[0],p=u[1],f=Object(r.useState)(null),h=f[0],m=f[1];return o.a.createElement(k,{className:"chart-tabs--"+d},o.a.createElement(j,null,C.map((function(e){var n=e===d,r="preview"===e?t:"data",i=n||h===e?"colored":"neutral";return o.a.createElement(E,{key:e,className:"no-select",isCurrent:n,onClick:function(){return p(e)},onMouseEnter:function(){return m(e)},onMouseLeave:function(){return m(null)}},o.a.createElement(T,{className:"sprite-icons-"+r+"-"+s.id+"-"+i}),e)}))),o.a.createElement(S,null,"preview"===d&&o.a.createElement(b,{isLoading:a,responseStatus:l,chartUrl:c}),"body"===d&&o.a.createElement(y.a,null,JSON.stringify(i,null,"  ")),"data"===d&&o.a.createElement(y.a,null,n),o.a.createElement(N,{isLoading:a})))},k=i.d.div.withConfig({displayName:"ApiTabs__Wrapper",componentId:"wcngb8-0"})(["position:fixed;top:","px;right:0;width:60%;--innerWidth:calc(100% - ","px);width:calc(var(--innerWidth) * 0.6);--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.55);z-index:10;overflow:hidden;background:",";border-bottom:1px solid ",";"," ",""],(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border}),l.a.tablet(x(),(function(e){return e.theme.dimensions.headerHeight}),(function(e){return e.theme.dimensions.headerHeight})),l.a.mobile(v(),(function(e){return e.theme.colors.border}))),j=i.d.nav.withConfig({displayName:"ApiTabs__Nav",componentId:"wcngb8-1"})(["height:46px;background:",";display:flex;font-size:15px;color:#aaa;position:relative;"],(function(e){return e.theme.colors.background})),E=i.d.span.withConfig({displayName:"ApiTabs__NavItem",componentId:"wcngb8-2"})(["cursor:pointer;height:46px;display:block;position:relative;padding-left:46px;padding-right:14px;padding-top:11px;background:",";&:hover{color:",";}"],(function(e){var t=e.isCurrent,n=e.theme;return t?n.colors.cardBackground:"transparent"}),(function(e){return e.theme.colors.text})),T=i.d.span.withConfig({displayName:"ApiTabs__Icon",componentId:"wcngb8-3"})(["position:absolute;top:0;left:0;display:block;transform:scale(0.44);transform-origin:top left;margin:12px 0 0 12px;"]),S=i.d.div.withConfig({displayName:"ApiTabs__Content",componentId:"wcngb8-4"})(["position:absolute;top:46px;bottom:0;width:100%;overflow-x:hidden;overflow-y:auto;"]),P=i.d.div.withConfig({displayName:"ApiTabs__LoaderContainer",componentId:"wcngb8-5"})(["position:absolute;top:50%;left:50%;width:100px;height:80px;margin-top:-40px;margin-left:-50px;background:",";display:grid;grid-template-columns:10px 10px 10px 10px 10px;grid-column-gap:6px;padding:10px 13px;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.15);pointer-events:none;opacity:",";transform:translate3d(0,",",0);transition:transform 200ms,opacity 200ms;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.isLoading?1:0}),(function(e){return e.isLoading?0:"20px"})),_=Object(i.e)(["0%,100%{transform:scale3d(1,0,1);}50%{transform:scale3d(1,1,1);}"]),I=i.d.span.withConfig({displayName:"ApiTabs__LoaderBar",componentId:"wcngb8-6"})(["display:block;background:",";width:100%;height:100%;transform:scale3d(1,0,1);transform-origin:100% 100%;animation-name:",";animation-duration:800ms;animation-iteration-count:infinite;animation-delay:","ms;"],(function(e){return e.theme.colors.accent}),_,(function(e){return 60*(e.index+1)})),N=function(e){var t=e.isLoading;return o.a.createElement(P,{isLoading:t},o.a.createElement("span",null,o.a.createElement(I,{index:0})),o.a.createElement("span",null,o.a.createElement(I,{index:1})),o.a.createElement("span",null,o.a.createElement(I,{index:2})),o.a.createElement("span",null,o.a.createElement(I,{index:3})),o.a.createElement("span",null,o.a.createElement(I,{index:4})))};var B=i.d.span.withConfig({displayName:"ApiSubmit__Button",componentId:"y9yvg5-0"})(["display:block;background-color:",";color:#fff;text-align:center;padding:12px 24px;border-radius:2px;cursor:pointer;text-decoration:none;"],(function(e){return e.theme.colors.accent})),R=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.loading,n=e.onClick;return o.a.createElement(B,{onClick:n},t?"sending":"generate")},r}(r.Component);R.defaultProps={};var A=R;var q=i.d.div.withConfig({displayName:"ApiResponse__Container",componentId:"usxrxs-0"})(["background:",";border-top:1px solid ",";overflow-x:hidden;overflow-y:auto;"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.border})),L=i.d.div.withConfig({displayName:"ApiResponse__Header",componentId:"usxrxs-1"})(["padding:12px 20px;border-bottom:1px solid ",";"],(function(e){return e.theme.colors.borderLight})),W=i.d.pre.withConfig({displayName:"ApiResponse__ResponseJson",componentId:"usxrxs-2"})(["padding:12px 20px;font-size:13px;line-height:1.6em;overflow:hidden;width:100%;margin:0;"]),F=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.responseStatus,n=e.response,r="no response available";return n&&(r=JSON.stringify(n,null,"  ")),o.a.createElement(q,null,o.a.createElement(L,null,"Response ",t?o.a.createElement("strong",null,t):"n/a"),o.a.createElement(W,null,r))},r}(r.Component);F.defaultProps={};var H=F,D=n("S6qR");function M(){var e=V(["\n        & {\n            position: relative;\n            right: auto;\n            bottom: auto;\n            width: auto;\n            height: auto;\n            border-left-width: 0;\n            z-index: 0;\n        }\n    "]);return M=function(){return e},e}function z(){var e=V(["\n        & {\n            right: 0;\n            bottom: 0;\n            --innerHeight: calc(100% - ","px);\n            height: calc(var(--innerHeight) * 0.45);\n            width: 60%;\n        }\n    "]);return z=function(){return e},e}function V(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"a",(function(){return Z}));var Z=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleSettingsUpdate=function(e){n.setState({props:e})},n.handleDataUpdate=function(e){var t,r=n.props.dataProperty,o=n.state.props;n.setState({props:Object.assign({},o,(t={},t[r]=e.target.value,t))})},n.handleSubmit=function(){var e=n.props,t=e.apiPath,r=e.propsMapper,o=n.state.props;n.setState({loading:!0}),fetch(""+D.a.nivoApiUrl+t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(r(o))}).then((function(e){return n.setState({loading:!1,responseStatus:e.status}),e.json()})).then((function(e){n.setState({response:e})})).catch((function(e){console.error(e)}))},n.state={props:t.defaultProps,loading:!1,responseStatus:null,response:null},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e,t=this.props,n=t.componentName,r=t.chartClass,i=t.apiPath,l=t.controlGroups,f=t.dataProperty,h=t.propsMapper,m=t.flavors,b=this.state,g=b.props,y=b.loading,v=b.responseStatus,x=b.response,w=m.map((function(e){return e.flavor}));return o.a.createElement(a.a,null,o.a.createElement(c.a,null,o.a.createElement(s.a,{chartClass:n+" HTTP API",tags:["POST "+i]}),m&&o.a.createElement(u.a,{flavors:m,current:"api"}),o.a.createElement(d.a,{description:(e=n,"\nThe `"+e+"`component is available in the nivo\nHTTP rendering API.\nThe API generates a SVG and return a path to this SVG\nwhich can then be easily embedded.\n\nThe api accepts almost the same properties as the regular component,\nin json, however it's not interactive and you cannot use code\nin properties (functions).\n\nPlease note that the demo API server is installed on heroku\nusing a free plan, so it might be unavailable from times to times.\n")}),o.a.createElement(O,{chartClass:r,data:g[f],body:h(g),isLoading:y,responseStatus:v,chartUrl:x?x.url:null}),o.a.createElement(G,null,o.a.createElement(U,null,o.a.createElement(A,{loading:y,onClick:this.handleSubmit})),o.a.createElement(H,{responseStatus:v,response:x})),o.a.createElement(p.a,{component:n,settings:g,flavors:w,currentFlavor:"api",groups:l,onChange:this.handleSettingsUpdate})))},r}(r.Component);Z.defaultProps={dataProperty:"data",propsMapper:function(e){return e}};var G=i.d.div.withConfig({displayName:"ApiClient__ControlPanel",componentId:"sc-50le0s-0"})(["position:fixed;right:0;bottom:0;--innerWidth:calc(100% - ","px);--partialWidth:calc(var(--innerWidth) * 0.6);width:var(--partialWidth);background:",";--innerHeight:calc(100% - ","px);height:calc(var(--innerHeight) * 0.45);z-index:10;overflow:hidden;display:grid;grid-template-rows:1fr 2fr;"," ",""],(function(e){return e.theme.dimensions.miniNavWidth}),(function(e){return e.theme.colors.cardAltBackground}),(function(e){return e.theme.dimensions.headerHeight}),l.a.tablet(z(),(function(e){return e.theme.dimensions.headerHeight})),l.a.mobile(M())),U=i.d.div.withConfig({displayName:"ApiClient__SubmitWrapper",componentId:"sc-50le0s-1"})(["display:flex;align-items:center;justify-content:center;padding:12px 0;"])}}]);
//# sourceMappingURL=component---src-pages-bubble-api-js-3a43d4b2bc843e18471e.js.map