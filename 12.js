(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{176:function(e,t,r){"use strict";r.r(t);var n,o,a,i,c=r(32),u=r(0),l=r.n(u),s=r(172),f=r(129),p=r(178),d=r(3),m=r(17),b=r.n(m),y=r(169);function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=[{Header:"ID",accessor:"id",width:60,Cell:function(e){var t=e.original;return l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement("span",null,t.id))}},(n={Header:"Name",accessor:"name",id:"name"},h(n,"accessor",(function(e){return e.name})),h(n,"filterMethod",(function(e,t){return Object(y.a)(t,e.value,{keys:["name"]})})),h(n,"filterAll",!0),n),(o={Header:"Surname",accessor:"surname",id:"surname"},h(o,"accessor",(function(e){return e.surname})),h(o,"filterMethod",(function(e,t){return Object(y.a)(t,e.value,{keys:["surname"]})})),h(o,"filterAll",!0),o),(a={Header:"Email",accessor:"email",id:"email"},h(a,"accessor",(function(e){return e.email})),h(a,"filterMethod",(function(e,t){return Object(y.a)(t,e.value,{keys:["email"]})})),h(a,"filterAll",!0),a),(i={Header:"Job title",accessor:"job_title",id:"job_title"},h(i,"accessor",(function(e){return e.job_title})),h(i,"filterMethod",(function(e,t){return Object(y.a)(t,e.value,{keys:["job_title"]})})),h(i,"filterAll",!0),i)];function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_(e);if(t){var o=_(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,r,n,o=E(a);function a(){return w(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"componentDidMount",value:function(){this.props.fetchProfiles()}},{key:"render",value:function(){var e=this.props,t=e.profiles,r=e.loading,n=e.error;return 401===n.statusCode?l.a.createElement(d.a,{to:"/login"}):l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement("title",null,"React-Redux | Profiles list")),l.a.createElement("h1",null,"Profiles list"),l.a.createElement(p.a,{color:"danger",isOpen:n&&n.isAxiosError},!b()(n)&&"".concat(n.status," - ").concat(n.message)),l.a.createElement(s.a,{className:"-striped -highlight",loading:r,columns:v,data:t,filterable:!0,resizable:!0}))}}])&&O(t.prototype,r),n&&O(t,n),a}(u.Component),x=r(29),k=r.n(x),R=r(8),A=r(22),C=function(){return{type:R.b+R.e+R.f}},D=function(e){return{type:R.b+R.e+R.g,payload:{profiles:e}}},H=function(e){return{type:R.b+R.e+R.a,payload:{error:e}}};t.default=Object(c.b)((function(e){return{profiles:e.profilesList.profiles,loading:e.profilesList.loading,error:e.profilesList.error}}),{fetchProfiles:function(){var e=JSON.parse(localStorage.getItem("react-redux-user-data")),t=!b()(e)&&e.data.id;return function(e){return e(C()),k.a.get("".concat(A.a,"/").concat(A.b,"/users/searchExtra"),{params:{filter:{order:"id DESC"}},headers:{Authorization:t}}).then((function(t){return e(D(t.data))})).catch((function(t){401===t.response.data.error.statusCode?(localStorage.removeItem("react-redux-user-data"),localStorage.removeItem("react-redux-user-data-fullname"),localStorage.removeItem("react-redux-user-data-avatar"),e(H(t.response.data.error)),window.location.reload()):e(H(t.response.data.error))}))}}})(P)}}]);