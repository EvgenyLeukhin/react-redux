(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(84),c=r(81),u=r(85);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,r,n,i=p(d);function d(){var e;l(this,d);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(y(e=i.call.apply(i,[this].concat(r))),"state",{loading:!1,error:!1,errorText:"",userData:{}}),h(y(e),"deleteClick",(function(){return alert("Delete request")})),e}return t=d,(r=[{key:"componentDidMount",value:function(){var e,t=this,r=JSON.parse(localStorage.getItem("react-redux-user-data")),n=null==r||null===(e=r.data)||void 0===e?void 0:e.userId;this.setState({loading:!0}),Object(u.a)(n).then((function(e){t.setState({loading:!1,userData:e.data})})).catch((function(e){console.log(e),401===e.response.status?(localStorage.removeItem("react-redux-user-data"),t.props.history.push("/login")):t.setState({loading:!1,error:!0,errorText:e})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"user-profile-edit"},o.a.createElement(a.a,null,o.a.createElement("title",null,"React-Redux | Profile Edit")),o.a.createElement("div",{className:"title-container"},o.a.createElement("h1",null,"Edit profile"),o.a.createElement(c.a,{color:"danger",onClick:this.deleteClick},"Delete user")))}}])&&f(t.prototype,r),n&&f(t,n),d}(n.Component);t.default=m},85:function(e,t,r){"use strict";var n=r(17),o=r.n(n),a=r(12);t.a=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),r=t&&t.data.id;return o.a.get("".concat(a.a,"/").concat(a.b,"/users/").concat(e),{headers:{Authorization:r}})}}}]);