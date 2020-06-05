(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{167:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(129),i=a(176),o=a(158),c=a.n(o),m=a(172),d=a(126),u=a(127),s=a(29),g=a.n(s),f=a(17),h=a.n(f),p=a(22),E=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!h()(t)&&t.data.id;return g.a.get("".concat(p.a,"/").concat(p.b,"/users/").concat(e),{headers:{Authorization:a}})},b=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!h()(t)&&t.data.id,n=e.id,r=e.name,l=e.surname,i=e.email,o=e.job_title,c=e.emailVerified,m=e.admin,d=e.status,u=e.image,s=e.emailSettings,f=e.emailJobApplication,E=e.emailMarketing,b=e.resData,_=b.experience,y=b.skills,v=b.seniority_id,S=b.location_id,k=b.user_role_id,x=b.role_id,C=b.company_id;return g.a.patch("".concat(p.a,"/").concat(p.b,"/users/").concat(n),{name:r,surname:l,email:i,job_title:o,emailVerified:c,admin:m,status:d,experience:_,image:u,skills:y,emailSettings:s,emailJobApplication:f,emailMarketing:E,seniority_id:v,location_id:S,user_role_id:k,role_id:x,company_id:C,modified:"".concat((new Date).toISOString())},{headers:{Authorization:a}})},_=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!h()(t)&&t.data.id;return g.a.delete("".concat(p.a,"/").concat(p.b,"/users/").concat(e),{headers:{Authorization:a}})},y=a(135),v=a(128),S=a(139),k=a(140),x=a(136),C=a(137),L=a(138),I=function(e){var t=e.name,a=e.email,n=e.surname,l=e.job_title,i=e.status,o=e.emailVerified,c=e.emailJobApplication,m=e.emailMarketing,s=e.emailSettings,g=e.id,f=e.modified,p=e.created,E=e.lastLogin,b=e.editUserSubmit,_=e.deleteModalOpen,I=e.onChange,M=e.deleteImage,O=e.editLoading,j=e.image,w=e.onChangeImage;return r.a.createElement(y.a,{action:"",method:"post",className:"edit-profile__form",onSubmit:b},r.a.createElement(v.a,null,r.a.createElement("h4",null,"Avatar"),r.a.createElement(S.a,null,r.a.createElement(k.a,{xs:"12"},r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__name"},"Paste image url"),r.a.createElement(L.a,{id:"user-edit__image",type:"url",name:"image",value:h()(j)?"":j.url,onChange:w}),!h()(j)&&j.url?r.a.createElement("img",{src:j.url,className:"img-fluid  user-avatar",alt:"Responsive image"}):r.a.createElement("div",{className:"no-image"})),r.a.createElement(d.a,{color:"danger",onClick:M,disabled:!j.url,outline:!0},"Remove image")))),r.a.createElement("hr",null),r.a.createElement(v.a,null,r.a.createElement("h4",null,"Text fields"),r.a.createElement(S.a,null,r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__name"},"Name"),r.a.createElement(L.a,{id:"user-edit__name",type:"text",name:"name",value:t,onChange:I})),r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__email"},"Email"),r.a.createElement(L.a,{id:"user-edit__email",type:"text",name:"email",value:a,onChange:I}))),r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__surname"},"Surname"),r.a.createElement(L.a,{id:"user-edit__surname",type:"text",name:"surname",value:n,onChange:I})),r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__job_title"},"Job title"),r.a.createElement(L.a,{id:"user-edit__job_title",type:"text",name:"job_title",value:l,onChange:I}))))),r.a.createElement("hr",null),r.a.createElement(v.a,null,r.a.createElement("h4",null,"Statuses"),r.a.createElement(S.a,null,r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(L.a,{name:"status",onChange:I,type:"checkbox",checked:i}),"User activity")),r.a.createElement(x.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(L.a,{name:"emailVerified",onChange:I,type:"checkbox",checked:o}),"Email verified"))))),r.a.createElement("hr",null),r.a.createElement(v.a,null,r.a.createElement("h4",null,"Notifications"),r.a.createElement(S.a,null,r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(L.a,{name:"emailJobApplication",onChange:I,type:"checkbox",checked:c}),"Email job application")),r.a.createElement(x.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(L.a,{name:"emailMarketing",onChange:I,type:"checkbox",checked:m}),"Email marketing")),r.a.createElement(x.a,{check:!0},r.a.createElement(C.a,{check:!0},r.a.createElement(L.a,{name:"emailSettings",onChange:I,type:"checkbox",checked:s}),"Email settings"))))),r.a.createElement("hr",null),r.a.createElement(v.a,null,r.a.createElement("h4",null,"Not editable"),r.a.createElement(S.a,null,r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__id"},"Id"),r.a.createElement(L.a,{disabled:!0,id:"user-edit__id",type:"number",name:"id",value:g,onChange:I})),r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__modified"},"Modified"),r.a.createElement(L.a,{disabled:!0,id:"user-edit__modified",type:"data",name:"modified",value:f,onChange:I}))),r.a.createElement(k.a,{xs:"12",md:"6"},r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__created"},"Created"),r.a.createElement(L.a,{disabled:!0,id:"user-edit__created",type:"data",name:"created",value:p,onChange:I})),r.a.createElement(x.a,null,r.a.createElement(C.a,{for:"user-edit__lastLogin"},"Last login"),r.a.createElement(L.a,{disabled:!0,id:"user-edit__lastLogin",type:"data",name:"lastLogin",value:E,onChange:I})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"edit-profile__btns"},r.a.createElement(d.a,{color:"primary",type:"submit"},O?r.a.createElement(u.a,null):"Save changes"),r.a.createElement(d.a,{color:"danger",onClick:_,outline:!0},"Delete user"))))};a(167);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=R(e);if(t){var r=R(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return J(this,a)}}function J(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,e);var t,a,n,o=A(s);function s(){var e;O(this,s);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return V(N(e=o.call.apply(o,[this].concat(a))),"state",V({getLoading:!1,editLoading:!1,deleteLoading:!1,error:!1,errorText:"",deleteModal:!1,id:"",name:"",surname:"",email:"",job_title:"",admin:!0,created:"",modified:"",lastLogin:"",image:"",resData:{},emailVerified:!1,status:!1,emailJobApplication:!1,emailMarketing:!1,emailSettings:!1},"image",{url:"",icon:"",color:""})),V(N(e),"catchErrors",(function(t){401===t.response.status?(localStorage.removeItem("react-redux-user-data"),localStorage.removeItem("react-redux-user-data-fullname"),localStorage.removeItem("react-redux-user-data-avatar"),e.props.history.push("/login")):(console.log(t),e.setState({getLoading:!1,editLoading:!1,deleteLoading:!1,error:!0,errorText:t}))})),V(N(e),"closeAlert",(function(){return e.setState({error:!1})})),V(N(e),"editUserSubmit",(function(t){t.preventDefault();var a=N(e).state,n=e.props.history;e.setState({editLoading:!0}),b(a).then((function(){var t=e.state,a=t.name,r=t.surname,l=t.image,i="".concat(a," ").concat(r),o=l.url;setTimeout((function(){e.setState({editLoading:!1}),localStorage.setItem("react-redux-user-data-fullname",i),localStorage.setItem("react-redux-user-data-avatar",o),n.push("/profile-show")}),500)})).catch((function(t){e.catchErrors(t)}))})),V(N(e),"deleteModalClose",(function(){return e.setState({deleteModal:!1})})),V(N(e),"deleteModalOpen",(function(){return e.setState({deleteModal:!0})})),V(N(e),"deleteUserSubmit",(function(){e.setState({deleteLoading:!0});var t=e.state.id;_(t).then((function(){e.setState({deleteLoading:!1}),localStorage.removeItem("react-redux-user-data"),localStorage.removeItem("react-redux-user-data-fullname"),localStorage.removeItem("react-redux-user-data-avatar"),e.props.history.push("/login")})).catch((function(t){return e.catchErrors(t)}))})),V(N(e),"onChange",(function(t){var a,n;"checkbox"===t.target.type?e.setState((V(a={},t.target.name,t.target.checked),V(a,"error",!1),a)):e.setState((V(n={},t.target.name,t.target.value),V(n,"error",!1),n))})),V(N(e),"onChangeCheckbox",(function(t){var a,n=t.target.checked;e.setState((V(a={},t.target.name,!n),V(a,"error",!1),a))})),V(N(e),"onChangeImage",(function(t){return e.setState({image:{url:t.target.value}})})),V(N(e),"deleteImage",(function(){e.setState({image:{url:"",icon:"",color:""}})})),e}return t=s,(a=[{key:"componentDidMount",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("react-redux-user-data")),n=null==a||null===(e=a.data)||void 0===e?void 0:e.userId;this.setState({getLoading:!0}),E(n).then((function(e){var a;t.setState((V(a={getLoading:!1,id:e.data.id,name:e.data.name,surname:e.data.surname,email:e.data.email,job_title:e.data.job_title,image:e.data.image,created:e.data.created,modified:e.data.modified,lastLogin:e.data.lastLogin,emailVerified:e.data.emailVerified,emailJobApplication:e.data.emailJobApplication,emailMarketing:e.data.emailMarketing},"emailVerified",e.data.emailVerified),V(a,"emailSettings",e.data.emailSettings),V(a,"status",e.data.status),V(a,"resData",e.data),a))})).catch((function(e){t.catchErrors(e)}))}},{key:"render",value:function(){var e=this.state,t=e.getLoading,a=e.editLoading,n=e.deleteLoading,o=e.error,s=e.errorText,g=e.deleteModal,f=e.id,h=e.name,p=e.surname,E=e.email,b=e.job_title,_=e.created,y=e.modified,v=e.lastLogin,S=e.emailVerified,k=e.status,x=e.emailJobApplication,C=e.emailMarketing,L=e.emailSettings,M=e.image;return r.a.createElement("div",{className:"edit-profile"},r.a.createElement(l.a,null,r.a.createElement("title",null,"React-Redux | Edit Profile")),r.a.createElement(i.a,{color:"danger",isOpen:o,toggle:this.closeAlert},"".concat(s)||""),r.a.createElement(c.a,{className:"delete-modal",overlayClassName:"delete-modal__overlay",isOpen:g,onRequestClose:this.deleteModalClose},n?r.a.createElement(u.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Are you sure?"),r.a.createElement(m.a,null,r.a.createElement(d.a,{color:"secondary",onClick:this.deleteModalClose},"Cancel"),r.a.createElement(d.a,{color:"danger",onClick:this.deleteUserSubmit},"Delete")))),r.a.createElement("h1",null,"Edit profile"),t?"Loading...":r.a.createElement(I,{editLoading:a,id:f,name:h,email:E,image:M,surname:p,created:_,modified:y,job_title:b,lastLogin:v,status:k,emailVerified:S,emailSettings:L,emailMarketing:C,emailJobApplication:x,onChange:this.onChange,deleteModalOpen:this.deleteModalOpen,editUserSubmit:this.editUserSubmit,onChangeImage:this.onChangeImage,deleteImage:this.deleteImage}))}}])&&j(t.prototype,a),n&&j(t,n),s}(n.Component);t.default=D}}]);