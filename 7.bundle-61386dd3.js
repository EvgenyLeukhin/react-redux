(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(130),l=a(179),o=a(159),c=a.n(o),m=a(173),d=a(127),s=a(128),u=a(1),g=a.n(u),f=a(29),p=a.n(f),h=a(17),E=a.n(h),b=a(30),_=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!E()(t)&&t.data.id;return p.a.get("".concat(b.a,"/users/").concat(e),{headers:{Authorization:a}})},y=function(e,t){var a=JSON.parse(localStorage.getItem("react-redux-user-data")),n=!E()(a)&&a.data.id,r=e.id,i=e.name,l=e.surname,o=e.email,c=e.job_title,m=e.emailVerified,d=e.status,s=e.image,u=e.emailSettings,g=e.emailJobApplication,f=e.emailMarketing,h=t.experience,_=t.skills,y=t.seniority_id,v=t.location_id,S=t.user_role_id,k=t.role_id,C=t.company_id;return p.a.patch("".concat(b.a,"/users/").concat(r),{name:i,surname:l,email:o,job_title:c,emailVerified:m,admin:!0,status:d,experience:h,image:s,skills:_,emailSettings:u,emailJobApplication:g,emailMarketing:f,seniority_id:y,location_id:v,user_role_id:S,role_id:k,company_id:C,modified:"".concat((new Date).toISOString())},{headers:{Authorization:n}})},v=function(e){var t=JSON.parse(localStorage.getItem("react-redux-user-data")),a=!E()(t)&&t.data.id;return p.a.delete("".concat(b.a,"/users/").concat(e),{headers:{Authorization:a}})},S=a(19),k=a(136),C=a(129),x=a(140),L=a(141),O=a(137),j=a(138),M=a(139),A=function(e){var t=e.name,a=e.email,n=e.surname,i=e.job_title,l=e.status,o=e.emailVerified,c=e.emailJobApplication,m=e.emailMarketing,u=e.emailSettings,g=e.id,f=e.modified,p=e.created,h=e.lastLogin,b=e.editUserSubmit,_=e.deleteModalOpen,y=e.onChange,v=e.deleteImage,S=e.editLoading,A=e.image,I=e.onChangeImage;return r.a.createElement(k.a,{action:"",method:"post",className:"edit-profile__form",onSubmit:b},r.a.createElement(C.a,null,r.a.createElement("h4",null,"Avatar"),r.a.createElement(x.a,null,r.a.createElement(L.a,{xs:"12"},r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__name"},"Paste image url"),r.a.createElement(M.a,{id:"user-edit__image",type:"url",name:"image",value:E()(A)?"":A.url,onChange:I}),!E()(A)&&A.url?r.a.createElement("img",{src:A.url,className:"img-fluid  user-avatar",alt:"Responsive image"}):r.a.createElement("div",{className:"no-image"})),r.a.createElement(d.a,{color:"danger",onClick:v,disabled:!A.url,outline:!0},"Remove image")))),r.a.createElement("hr",null),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Text fields"),r.a.createElement(x.a,null,r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__name"},"Name"),r.a.createElement(M.a,{id:"user-edit__name",type:"text",name:"name",value:t||"",onChange:y})),r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__email"},"Email"),r.a.createElement(M.a,{id:"user-edit__email",type:"text",name:"email",value:a||"",onChange:y}))),r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__surname"},"Surname"),r.a.createElement(M.a,{id:"user-edit__surname",type:"text",name:"surname",value:n||"",onChange:y})),r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__job_title"},"Job title"),r.a.createElement(M.a,{id:"user-edit__job_title",type:"text",name:"job_title",value:i||"",onChange:y}))))),r.a.createElement("hr",null),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Statuses"),r.a.createElement(x.a,null,r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,{check:!0},r.a.createElement(j.a,{check:!0},r.a.createElement(M.a,{name:"status",onChange:y,type:"checkbox",checked:l}),"User activity")),r.a.createElement(O.a,{check:!0},r.a.createElement(j.a,{check:!0},r.a.createElement(M.a,{name:"emailVerified",onChange:y,type:"checkbox",checked:o}),"Email verified"))))),r.a.createElement("hr",null),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Notifications"),r.a.createElement(x.a,null,r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,{check:!0},r.a.createElement(j.a,{check:!0},r.a.createElement(M.a,{name:"emailJobApplication",onChange:y,type:"checkbox",checked:c}),"Email job application")),r.a.createElement(O.a,{check:!0},r.a.createElement(j.a,{check:!0},r.a.createElement(M.a,{name:"emailMarketing",onChange:y,type:"checkbox",checked:m}),"Email marketing")),r.a.createElement(O.a,{check:!0},r.a.createElement(j.a,{check:!0},r.a.createElement(M.a,{name:"emailSettings",onChange:y,type:"checkbox",checked:u}),"Email settings"))))),r.a.createElement("hr",null),r.a.createElement(C.a,null,r.a.createElement("h4",null,"Not editable"),r.a.createElement(x.a,null,r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__id"},"Id"),r.a.createElement(M.a,{disabled:!0,id:"user-edit__id",type:"number",name:"id",value:g,onChange:y})),r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__modified"},"Modified"),r.a.createElement(M.a,{disabled:!0,id:"user-edit__modified",type:"data",name:"modified",value:f,onChange:y}))),r.a.createElement(L.a,{xs:"12",md:"6"},r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__created"},"Created"),r.a.createElement(M.a,{disabled:!0,id:"user-edit__created",type:"data",name:"created",value:p,onChange:y})),r.a.createElement(O.a,null,r.a.createElement(j.a,{for:"user-edit__lastLogin"},"Last login"),r.a.createElement(M.a,{disabled:!0,id:"user-edit__lastLogin",type:"data",name:"lastLogin",value:h,onChange:y})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"edit-profile__btns"},r.a.createElement(d.a,{color:"primary",type:"submit"},S?r.a.createElement(s.a,null):"Save changes"),r.a.createElement(d.a,{color:"danger",onClick:_,outline:!0},"Delete user"))))};A.propTypes={name:g.a.string,email:g.a.string,surname:g.a.string,job_title:g.a.string,status:g.a.bool,emailVerified:g.a.bool,emailJobApplication:g.a.bool,emailMarketing:g.a.bool,emailSettings:g.a.bool,id:g.a.oneOfType([g.a.string,g.a.number]),modified:g.a.string,created:g.a.string,lastLogin:g.a.string,editUserSubmit:g.a.func,deleteModalOpen:g.a.func,onChange:g.a.func,deleteImage:g.a.func,editLoading:g.a.bool,image:g.a.object,onChangeImage:g.a.func};var I=A;a(168);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=P(e);if(t){var r=P(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return T(this,a)}}function T(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?V(e):t}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,a,n,o=D(u);function u(){var e;J(this,u);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return U(V(e=o.call.apply(o,[this].concat(a))),"state",{getLoading:!1,editLoading:!1,deleteLoading:!1,error:!1,errorText:"",deleteModal:!1,id:"",name:"",surname:"",email:"",job_title:"",created:"",modified:"",lastLogin:"",resData:{},emailVerified:!1,status:!1,emailJobApplication:!1,emailMarketing:!1,emailSettings:!1,image:{url:"",icon:"",color:""}}),U(V(e),"catchErrors",(function(t){401===t.response.status?(Object(S.a)(),e.props.history.push("/login")):(console.log(t),e.setState({getLoading:!1,editLoading:!1,deleteLoading:!1,error:!0,errorText:t}))})),U(V(e),"closeAlert",(function(){return e.setState({error:!1})})),U(V(e),"editUserSubmit",(function(t){t.preventDefault();var a=V(e).state,n=e.state.resData,r=e.props.history;e.setState({editLoading:!0}),y(a,n).then((function(){var t=e.state,a=t.name,n=t.surname,i=t.image,l="".concat(a," ").concat(n),o=i.url;setTimeout((function(){e.setState({editLoading:!1}),localStorage.setItem("react-redux-user-data-fullname",l),localStorage.setItem("react-redux-user-data-avatar",o),r.push("/profile")}),500)})).catch((function(t){e.catchErrors(t)}))})),U(V(e),"deleteModalClose",(function(){return e.setState({deleteModal:!1})})),U(V(e),"deleteModalOpen",(function(){return e.setState({deleteModal:!0})})),U(V(e),"deleteUserSubmit",(function(){e.setState({deleteLoading:!0});var t=e.state.id;v(t).then((function(){e.setState({deleteLoading:!1}),Object(S.a)(),e.props.history.push("/login")})).catch((function(t){return e.catchErrors(t)}))})),U(V(e),"onChange",(function(t){var a,n;"checkbox"===t.target.type?e.setState((U(a={},t.target.name,t.target.checked),U(a,"error",!1),a)):e.setState((U(n={},t.target.name,t.target.value),U(n,"error",!1),n))})),U(V(e),"onChangeCheckbox",(function(t){var a,n=t.target.checked;e.setState((U(a={},t.target.name,!n),U(a,"error",!1),a))})),U(V(e),"onChangeImage",(function(t){return e.setState({image:{url:t.target.value}})})),U(V(e),"deleteImage",(function(){e.setState({image:{url:"",icon:"",color:""}})})),e}return t=u,(a=[{key:"componentDidMount",value:function(){var e,t=this,a=JSON.parse(localStorage.getItem("react-redux-user-data")),n=null==a||null===(e=a.data)||void 0===e?void 0:e.userId;this.setState({getLoading:!0}),_(n).then((function(e){t.setState({getLoading:!1,id:e.data.id,name:e.data.name,surname:e.data.surname,email:e.data.email,job_title:e.data.job_title,image:e.data.image,created:e.data.created,modified:e.data.modified,lastLogin:e.data.lastLogin,emailVerified:e.data.emailVerified,emailJobApplication:e.data.emailJobApplication,emailMarketing:e.data.emailMarketing,emailSettings:e.data.emailSettings,status:e.data.status,resData:e.data})})).catch((function(e){t.catchErrors(e)}))}},{key:"render",value:function(){var e=this.state,t=e.getLoading,a=e.editLoading,n=e.deleteLoading,o=e.error,u=e.errorText,g=e.deleteModal,f=e.id,p=e.name,h=e.surname,E=e.email,b=e.job_title,_=e.created,y=e.modified,v=e.lastLogin,S=e.emailVerified,k=e.status,C=e.emailJobApplication,x=e.emailMarketing,L=e.emailSettings,O=e.image;return r.a.createElement("div",{className:"edit-profile"},r.a.createElement(i.a,null,r.a.createElement("title",null,"React-Redux | Edit Profile")),r.a.createElement(l.a,{color:"danger",isOpen:o,toggle:this.closeAlert},"".concat(u)||""),r.a.createElement(c.a,{ariaHideApp:!1,className:"delete-modal",overlayClassName:"delete-modal__overlay",isOpen:g,onRequestClose:this.deleteModalClose},n?r.a.createElement(s.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Are you sure?"),r.a.createElement(m.a,null,r.a.createElement(d.a,{color:"secondary",onClick:this.deleteModalClose},"Cancel"),r.a.createElement(d.a,{color:"danger",onClick:this.deleteUserSubmit},"Delete")))),r.a.createElement("h1",null,"Edit profile"),t?"Loading...":r.a.createElement(I,{editLoading:a,id:f,name:p,email:E,image:O,surname:h,created:_,modified:y,job_title:b,lastLogin:v,status:k,emailVerified:S,emailSettings:L,emailMarketing:x,emailJobApplication:C,onChange:this.onChange,deleteModalOpen:this.deleteModalOpen,editUserSubmit:this.editUserSubmit,onChangeImage:this.onChangeImage,deleteImage:this.deleteImage}))}}])&&N(t.prototype,a),n&&N(t,n),u}(n.Component);z.propTypes={history:g.a.object};t.default=z}}]);