(this["webpackJsonpreact-exam-counter"]=this["webpackJsonpreact-exam-counter"]||[]).push([[0],{14:function(e,t,a){e.exports={button:"CustomButton_button__37m5z"}},15:function(e,t,a){e.exports={App:"App_App__8DER-",AppWrapper:"App_AppWrapper__3xlt0",AppInput:"App_AppInput__1mbuu",AppInner:"App_AppInner__1wLzl"}},3:function(e,t,a){e.exports={inputField:"CustomInput_inputField__3mj4Y",label:"CustomInput_label__1P2z5",labelTitle:"CustomInput_labelTitle__1X8wO",error:"CustomInput_error__3lnFN"}},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=(a(0),a(7)),u=a.n(r),l=a(4);var c,s=function(e){return e.counter};!function(e){e[e.SET_START_VALUE=0]="SET_START_VALUE",e[e.SET_MAX_VALUE=1]="SET_MAX_VALUE",e[e.SET_DISPLAY_VALUE=2]="SET_DISPLAY_VALUE",e[e.SET_ERROR=3]="SET_ERROR",e[e.LOAD_STORAGE_VALUE=4]="LOAD_STORAGE_VALUE"}(c||(c={}));var p=function(e){return{type:c.SET_DISPLAY_VALUE,payload:{displayValue:e}}},o=function(e){return{type:c.SET_ERROR,payload:{error:e}}};var i=a(2),_=a(14),A=a.n(_),b=function(e){var t=Object.assign({},e);return Object(n.jsx)("button",Object(i.a)({className:A.a.button},t))},j=a(16),d=a(3),m=a.n(d),O=function(e){var t=e.labelTitle,a=e.type,r=e.onChange,u=e.onChangeText,l=e.onKeyPress,c=e.onEnter,s=e.error,p=(e.className,e.spanClassName),o=Object(j.a)(e,["labelTitle","type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),_="".concat(m.a.error," ").concat(p||""),A=s?"".concat(m.a.inputField_invalid," ").concat(m.a.inputField):m.a.inputField;return Object(n.jsxs)("label",{className:m.a.label,children:[Object(n.jsx)("span",{className:m.a.labelTitle,children:t}),Object(n.jsx)("input",Object(i.a)({type:a,onChange:function(e){r&&r(e),u&&u(e.currentTarget.value)},onKeyPress:function(e){l&&l(e),"Enter"===e.key&&c&&c(e.currentTarget.value)},className:A},o)),s&&Object(n.jsx)("label",{className:_,children:s})]})},V=a(8),x=a.n(V),E=function(e){var t=e.checkError,a=e.saveSettings,r=e.maxValueHandler,u=e.maxValue,l=e.startValueHandler,c=e.startValue,s=e.error;return Object(n.jsxs)("div",{className:x.a.AppWrapper,children:[Object(n.jsxs)("div",{className:x.a.AppSettings,children:[Object(n.jsx)(O,{onChange:function(e){r(e.currentTarget.valueAsNumber.toString()),t(c,e.currentTarget.valueAsNumber.toString())},labelTitle:"Max value",type:"number",value:u}),Object(n.jsx)(O,{onChange:function(e){l(e.currentTarget.valueAsNumber.toString()),t(e.currentTarget.valueAsNumber.toString(),u)},labelTitle:"Start value",type:"number",value:c})]}),Object(n.jsx)("div",{className:x.a.AppInput,children:Object(n.jsx)(b,{disabled:s,onClick:function(){return a()},children:"set"})})]})},S=a(5),T=a.n(S),f=function(e){var t=e.setIncrementDefault,a=e.setIncrementValueUp,r=e.incrementValue,u=e.error,l=u?"".concat(T.a.AppOutput," ").concat(T.a.error):T.a.AppOutput;return Object(n.jsxs)("div",{className:T.a.AppWrapper,children:[Object(n.jsx)("div",{className:l,children:r}),Object(n.jsxs)("div",{className:T.a.AppInput,children:[Object(n.jsx)(b,{onClick:a,disabled:u,children:"inc"}),Object(n.jsx)(b,{onClick:t,disabled:0===parseInt(r),children:"reset"})]})]})},g=function(){var e=Object(l.c)(s),t=e.startValue,a=e.maxValue,r=e.displayValue,u=e.error,i=function(){var e=Object(l.b)();return function(t){return e(t)}}(),_=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("counter-settings",{startValue:"0",maxValue:"5"});!t&&!a&&i(function(e,t){return{type:c.LOAD_STORAGE_VALUE,payload:{startValue:e,maxValue:t}}}(_.startValue,_.maxValue));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(E,{startValue:t,maxValue:a,checkError:function(e,t){var a=parseInt(e),n=parseInt(t);a<0||a>=n?(i(p("Incorrect value")),i(o(!0))):(i(o(!1)),i(p("Enter values and press 'SET'")))},saveSettings:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("counter-settings",{startValue:t,maxValue:a}),i(p(t))},maxValueHandler:function(e){i(function(e){return{type:c.SET_MAX_VALUE,payload:{maxValue:e}}}(e))},startValueHandler:function(e){i(function(e){return{type:c.SET_START_VALUE,payload:{startValue:e}}}(e))},error:u}),Object(n.jsx)(f,{incrementValue:r,setIncrementDefault:function(){i(o(!1)),i(p(t.toString()))},setIncrementValueUp:function(){var e=parseInt(r);isNaN(e)?i(p(t)):(i(p((e+=1).toString())),e===parseInt(a)&&i(o(!0)))},error:u})]})},v=a(15),I=a.n(v),y=function(){return Object(n.jsx)("div",{className:I.a.App,children:Object(n.jsx)(g,{})})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,u=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),u(e),l(e)}))},L=a(6),N={startValue:"",maxValue:"",displayValue:"0",error:!1},R=Object(L.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.SET_START_VALUE:return Object(i.a)(Object(i.a)({},e),{},{startValue:t.payload.startValue});case c.SET_MAX_VALUE:return Object(i.a)(Object(i.a)({},e),{},{maxValue:t.payload.maxValue});case c.SET_DISPLAY_VALUE:return Object(i.a)(Object(i.a)({},e),{},{displayValue:t.payload.displayValue});case c.SET_ERROR:return Object(i.a)(Object(i.a)({},e),{},{error:t.payload.error});case c.LOAD_STORAGE_VALUE:return Object(i.a)(Object(i.a)({},e),{},{startValue:t.payload.startValue,maxValue:t.payload.maxValue});default:return e}}}),C=Object(L.c)(R);window.store=C,u.a.render(Object(n.jsx)(l.a,{store:C,children:Object(n.jsx)(y,{})}),document.getElementById("root")),h()},5:function(e,t,a){e.exports={AppOutput:"Display_AppOutput__3W_9I App_AppInner__1wLzl",AppInput:"Display_AppInput__3-MBI App_AppInput__1mbuu",error:"Display_error__iVIht"}},8:function(e,t,a){e.exports={AppSettings:"Settings_AppSettings__1WNLB App_AppInner__1wLzl",AppInput:"Settings_AppInput__2ITvr App_AppInput__1mbuu"}}},[[30,1,2]]]);
//# sourceMappingURL=main.9db52a84.chunk.js.map