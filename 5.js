(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{104:function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(84),r=t(2),c=t(6),o=t(1),i=t.n(o),m=t(11),u=t.n(m),d=t(10),g=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.g,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:g,sm:g,md:g,lg:g,xl:g},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,n=e.tag,o=e.form,i=e.widths,m=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];i.forEach((function(a,t){var s=e[a];if(delete m[a],s){var l=!t;g.push(l?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.d)(u()(a,s?"no-gutters":null,o?"form-row":"row",g),t);return l.a.createElement(n,Object(r.a)({},m,{className:p}))};E.propTypes=p,E.defaultProps=f;var v=E,b=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),N={tag:d.g,xs:h,sm:h,md:h,lg:h,xl:h,className:i.a.string,cssModule:i.a.object,widths:i.a.array},O={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},w=function(e){var a=e.className,t=e.cssModule,s=e.widths,n=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach((function(a,s){var l=e[a];if(delete o[a],l||""===l){var n=!s;if(Object(d.c)(l)){var r,c=n?"-":"-"+a+"-",m=x(n,a,l.size);i.push(Object(d.d)(u()(((r={})[m]=l.size||""===l.size,r["order"+c+l.order]=l.order||0===l.order,r["offset"+c+l.offset]=l.offset||0===l.offset,r)),t))}else{var g=x(n,a,l);i.push(g)}}})),i.length||i.push("col");var m=Object(d.d)(u()(a,i),t);return l.a.createElement(n,Object(r.a)({},o,{className:m}))};w.propTypes=N,w.defaultProps=O;var j=w,A={tag:d.g,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},L=function(e){var a=e.className,t=e.cssModule,s=e.color,n=e.body,o=e.inverse,i=e.outline,m=e.tag,g=e.innerRef,p=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(d.d)(u()(a,"card",!!o&&"text-white",!!n&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return l.a.createElement(m,Object(r.a)({},p,{className:f,ref:g}))};L.propTypes=A,L.defaultProps={tag:"div"};var C=L,R={tag:d.g,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},y=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,n=e.tag,o=Object(c.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.d)(u()(a,"card-body"),t);return l.a.createElement(n,Object(r.a)({},o,{className:i,ref:s}))};y.propTypes=R,y.defaultProps={tag:"div"};var P=y,k={tag:d.g,className:i.a.string,cssModule:i.a.object},T=function(e){var a=e.className,t=e.cssModule,s=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.d)(u()(a,"card-title"),t);return l.a.createElement(s,Object(r.a)({},n,{className:o}))};T.propTypes=k,T.defaultProps={tag:"div"};var z=T,F={tag:d.g,className:i.a.string,cssModule:i.a.object},M=function(e){var a=e.className,t=e.cssModule,s=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.d)(u()(a,"card-subtitle"),t);return l.a.createElement(s,Object(r.a)({},n,{className:o}))};M.propTypes=F,M.defaultProps={tag:"div"};var W=M,S={tag:d.g,className:i.a.string,cssModule:i.a.object},q=function(e){var a=e.className,t=e.cssModule,s=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),o=Object(d.d)(u()(a,"card-text"),t);return l.a.createElement(s,Object(r.a)({},n,{className:o}))};q.propTypes=S,q.defaultProps={tag:"p"};var J=q,V=t(81),G=t.p+"img/react-heavy-f4561a0d.jpg";a.default=function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement(n.a,null,l.a.createElement("title",null,"React-Redux | Home page")),l.a.createElement("h2",{className:"text-center"},"Bootstrap card-component"),l.a.createElement(v,null,l.a.createElement(j,null,l.a.createElement("h4",null,"Bootstrap cols (.col)"),l.a.createElement(C,null,l.a.createElement(P,null,l.a.createElement(z,null,"Card title"),l.a.createElement(W,null,"Card subtitle"),l.a.createElement(J,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(V.a,null,"Button")))),l.a.createElement(j,null,l.a.createElement("h4",null,"Bootstrap cols (.col)"),l.a.createElement(C,null,l.a.createElement(P,null,l.a.createElement(z,null,"Card title"),l.a.createElement(W,null,"Card subtitle"),l.a.createElement(J,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(V.a,null,"Button")))),l.a.createElement(j,null,l.a.createElement("h4",null,"Bootstrap cols (.col)"),l.a.createElement(C,null,l.a.createElement(P,null,l.a.createElement(z,null,"Card title"),l.a.createElement(W,null,"Card subtitle"),l.a.createElement(J,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(V.a,null,"Button"))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"load-images"},l.a.createElement("h2",{className:"text-center"},"Load images"),l.a.createElement("div",{className:"load-images__item"},l.a.createElement("h4",null,"Load image by img tag with ",l.a.createElement("u",null,"url-loader (base-64)")),l.a.createElement("img",{src:"data:image/png;base64,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",alt:"reactImage",width:"100",height:"auto"})),l.a.createElement("div",{className:"load-images__item"},l.a.createElement("h4",null,"Load image by css-background with ",l.a.createElement("u",null,"url-loader (base-64)")),l.a.createElement("div",{className:"load-image"})),l.a.createElement("div",{className:"load-images__item"},l.a.createElement("h4",null,"Load heavy image by img tag with ",l.a.createElement("u",null,"file-loader")),l.a.createElement("img",{src:G,alt:"reactImage",width:"100%",height:"auto"})),l.a.createElement("div",{className:"load-images__item"},l.a.createElement("h4",null,"Load heavy image by css-background with ",l.a.createElement("u",null,"file-loader")),l.a.createElement("div",{className:"load-image2"}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"custom-font"},l.a.createElement("h2",{className:"text-center"},"Load custom fonts"),l.a.createElement("h4",{className:"roboto"},"Roboto"),l.a.createElement("p",{className:"roboto"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptates odio corporis est excepturi consequatur facilis assumenda nesciunt saepe. Dolorem sunt perferendis iste omnis veniam, ut temporibus tempore animi quod."),l.a.createElement("h4",{className:"consolas"},"Consolas"),l.a.createElement("p",{className:"consolas"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eos ducimus cupiditate illo vero sit quas dignissimos doloribus aperiam error, inventore nesciunt voluptates tempore, aut excepturi facilis. Numquam, excepturi maxime."),l.a.createElement("h4",{className:"indie-flower"},"Indie flower"),l.a.createElement("p",{className:"indie-flower"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis molestias velit tempora aliquid atque veniam quidem. Doloremque, aliquam alias repudiandae veniam hic eveniet veritatis, est, sit magnam nam adipisci esse.")))}}}]);