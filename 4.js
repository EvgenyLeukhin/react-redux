(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";var n=a(2),r=a(6),l=a(0),i=a.n(l),o=a(1),c=a.n(o),s=a(11),m=a.n(s),u=a(10),d=c.a.oneOfType([c.a.number,c.a.string]),g={tag:u.g,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,l=e.noGutters,o=e.tag,c=e.form,s=e.widths,d=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];s.forEach((function(t,a){var n=e[t];if(delete d[t],n){var r=!a;g.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=Object(u.d)(m()(t,l?"no-gutters":null,c?"form-row":"row",g),a);return i.a.createElement(o,Object(n.a)({},d,{className:f}))};h.propTypes=g,h.defaultProps=f,t.a=h},140:function(e,t,a){"use strict";var n=a(2),r=a(6),l=a(0),i=a.n(l),o=a(1),c=a.n(o),s=a(11),m=a.n(s),u=a(10),d=c.a.oneOfType([c.a.number,c.a.string]),g=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:d,offset:d})]),f={tag:u.g,xs:g,sm:g,md:g,lg:g,xl:g,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,l=e.widths,o=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),s=[];l.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var l=!n;if(Object(u.c)(r)){var i,o=l?"-":"-"+t+"-",d=p(l,t,r.size);s.push(Object(u.d)(m()(((i={})[d]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i)),a))}else{var g=p(l,t,r);s.push(g)}}})),s.length||s.push("col");var d=Object(u.d)(m()(t,s),a);return i.a.createElement(o,Object(n.a)({},c,{className:d}))};E.propTypes=f,E.defaultProps=h,t.a=E},141:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(122),i=a(154),o=a(23),c=a.n(o),s=a(14),m=a.n(s),u=a(16),d=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!m()(t)&&t.data.id;return c.a.get("".concat(u.a,"/").concat(u.b,"/users/").concat(e),{headers:{Authorization:a}})},g=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!m()(t)&&t.data.id;return c.a.delete("".concat(u.a,"/").concat(u.b,"/users/").concat(e),{headers:{Authorization:a}})},f=a(145),h=a(121),p=a(139),E=a(140),b=a(146),v=a(147),y=a(148),_=a(119),S=a(120),k=function(e){var t=e.name,a=e.email,n=e.surname,l=e.job_title,i=e.status,o=e.emailVerified,c=e.emailJobApplication,s=e.emailMarketing,u=e.emailSettings,d=e.id,g=e.modified,k=e.created,x=e.lastLogin,L=e.editUserSubmit,C=e.deleteUserSubmit,j=e.onChange,w=e.deleteImage,O=(e.getLoading,e.editLoading),N=e.deleteLoading,I=e.image,M=e.onChangeImage;return r.a.createElement(f.a,{action:"",method:"post",className:"user-profile__form",onSubmit:L},r.a.createElement(h.a,null,r.a.createElement("h4",null,"Avatar"),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:"12"},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__name"},"Image url"),r.a.createElement(y.a,{id:"user-edit__image",type:"url",name:"image",value:m()(I)?"":I.url,onChange:M}),!m()(I)&&I.url?r.a.createElement("img",{src:I.url,className:"img-fluid  user-avatar",alt:"Responsive image"}):r.a.createElement("div",{className:"no-image"})),r.a.createElement(_.a,{color:"danger",onClick:w,disabled:!I.url,outline:!0},"Remove image")))),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement("h4",null,"Text fields"),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__name"},"Name"),r.a.createElement(y.a,{id:"user-edit__name",type:"text",name:"name",value:t,onChange:j})),r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__email"},"Email"),r.a.createElement(y.a,{id:"user-edit__email",type:"text",name:"email",value:a,onChange:j}))),r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__surname"},"Surname"),r.a.createElement(y.a,{id:"user-edit__surname",type:"text",name:"surname",value:n,onChange:j})),r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__job_title"},"Job title"),r.a.createElement(y.a,{id:"user-edit__job_title",type:"text",name:"job_title",value:l,onChange:j}))))),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement("h4",null,"Statuses"),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{name:"status",onChange:j,type:"checkbox",checked:i}),"User activity")),r.a.createElement(b.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{name:"emailVerified",onChange:j,type:"checkbox",checked:o}),"Email verified"))))),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement("h4",null,"Notifications"),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{name:"emailJobApplication",onChange:j,type:"checkbox",checked:c}),"Email Job Application")),r.a.createElement(b.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{name:"emailMarketing",onChange:j,type:"checkbox",checked:s}),"Email marketing")),r.a.createElement(b.a,{check:!0},r.a.createElement(v.a,{check:!0},r.a.createElement(y.a,{name:"emailSettings",onChange:j,type:"checkbox",checked:u}),"Email settings"))))),r.a.createElement("hr",null),r.a.createElement(h.a,null,r.a.createElement("h4",null,"Not editable"),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__id"},"Id"),r.a.createElement(y.a,{disabled:!0,id:"user-edit__id",type:"number",name:"id",value:d,onChange:j})),r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__modified"},"Modified"),r.a.createElement(y.a,{disabled:!0,id:"user-edit__modified",type:"data",name:"modified",value:g,onChange:j}))),r.a.createElement(E.a,{xs:"12",md:"6"},r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__created"},"Created"),r.a.createElement(y.a,{disabled:!0,id:"user-edit__created",type:"data",name:"created",value:k,onChange:j})),r.a.createElement(b.a,null,r.a.createElement(v.a,{for:"user-edit__lastLogin"},"Last login"),r.a.createElement(y.a,{disabled:!0,id:"user-edit__lastLogin",type:"data",name:"lastLogin",value:x,onChange:j})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"user-profile__btns"},r.a.createElement(_.a,{color:"primary",type:"submit"},O?r.a.createElement(S.a,null):"Save changes"),r.a.createElement(_.a,{color:"danger",onClick:C,outline:!0},N?r.a.createElement(S.a,null):"Delete user"))))};a(141);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=I(e);if(t){var r=I(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return O(this,a)}}function O(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,a,n,o=w(c);function c(){var e;L(this,c);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return M(N(e=o.call.apply(o,[this].concat(a))),"state",M({getLoading:!1,editLoading:!1,deleteLoading:!1,error:!1,errorText:"",id:"",name:"",surname:"",email:"",job_title:"",created:"",modified:"",lastLogin:"",image:"",emailVerified:!1,status:!1,emailJobApplication:!1,emailMarketing:!1,emailSettings:!1},"image",{url:"",icon:"",color:""})),M(N(e),"catchErrors",(function(t){401===t.response.status?(localStorage.removeItem("react-redux-user-data"),e.props.history.push("/login")):(console.log(t),e.setState({getLoading:!1,editLoading:!1,deleteLoading:!1,error:!0,errorText:t}))})),M(N(e),"closeAlert",(function(){return e.setState({error:!1})})),M(N(e),"editUserSubmit",(function(t){t.preventDefault(),e.setState({editLoading:!0})})),M(N(e),"deleteUserSubmit",(function(){e.setState({deleteLoading:!0});var t=e.state.id;g(t).then((function(){setTimeout((function(){e.setState({deleteLoading:!1}),localStorage.removeItem("react-redux-user-data"),e.props.history.push("/login")}),2e3)})).catch((function(t){return e.catchErrors(t)}))})),M(N(e),"onChange",(function(t){var a,n;"checkbox"===t.target.type?e.setState((M(a={},t.target.name,t.target.checked),M(a,"error",!1),a)):e.setState((M(n={},t.target.name,t.target.value),M(n,"error",!1),n))})),M(N(e),"onChangeCheckbox",(function(t){var a,n=t.target.checked;e.setState((M(a={},t.target.name,!n),M(a,"error",!1),a))})),M(N(e),"onChangeImage",(function(t){return e.setState({image:{url:t.target.value}})})),M(N(e),"deleteImage",(function(){return e.setState({image:{url:"",icon:"",color:""},imageLoading:!1,uploadedImage:null})})),e}return t=c,(a=[{key:"componentDidMount",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("react-redux-user-data")),n=null==a||null===(e=a.data)||void 0===e?void 0:e.userId;this.setState({getLoading:!0}),d(n).then((function(e){var a;t.setState((M(a={getLoading:!1,id:e.data.id,name:e.data.name,surname:e.data.surname,email:e.data.email,job_title:e.data.job_title,image:e.data.image,created:e.data.created,modified:e.data.modified,lastLogin:e.data.lastLogin,emailVerified:e.data.emailVerified,emailJobApplication:e.data.emailJobApplication,emailMarketing:e.data.emailMarketing},"emailVerified",e.data.emailVerified),M(a,"emailSettings",e.data.emailSettings),M(a,"status",e.data.status),a))})).catch((function(e){t.catchErrors(e)}))}},{key:"render",value:function(){var e=this.state,t=e.getLoading,a=e.editLoading,n=e.deleteLoading,o=e.error,c=e.errorText,s=e.id,m=e.name,u=e.surname,d=e.email,g=e.job_title,f=e.created,h=e.modified,p=e.lastLogin,E=e.emailVerified,b=e.status,v=e.emailJobApplication,y=e.emailMarketing,_=e.emailSettings,S=e.image;return r.a.createElement("div",{className:"user-profile"},r.a.createElement(l.a,null,r.a.createElement("title",null,"React-Redux | Profile")),r.a.createElement(i.a,{color:"danger",isOpen:o,toggle:this.closeAlert},"".concat(c)||""),r.a.createElement("h1",null,"User profile"),t?"Loading...":r.a.createElement(k,{getLoading:t,editLoading:a,deleteLoading:n,id:s,name:m,email:d,image:S,surname:u,created:f,modified:h,job_title:g,lastLogin:p,status:b,emailVerified:E,emailSettings:_,emailMarketing:y,emailJobApplication:v,onChange:this.onChange,deleteUserSubmit:this.deleteUserSubmit,editUserSubmit:this.editUserSubmit,onChangeImage:this.onChangeImage}))}}])&&C(t.prototype,a),n&&C(t,n),c}(n.Component);t.default=A}}]);