(this["webpackJsonpsocial-network-app"]=this["webpackJsonpsocial-network-app"]||[]).push([[0],{11:function(e,t,n){e.exports={menu:"Navbar_menu__3kEWp",list__item:"Navbar_list__item__RrRA_",list__link:"Navbar_list__link__A1zrm",special:"Navbar_special__4Tzup",active:"Navbar_active__1kLUg"}},126:function(e,t,n){"use strict";n.d(t,"f",(function(){return O})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"g",(function(){return C}));var r=n(7),a=n.n(r),c=n(14),i=n(36),s=n(3),u=n(13),o="FOLLOW",l="UNFOLLOW",f="SET_USERS",d="SET_TOTAL_USER_COUNT",p="SET_CURRENT_PAGE",b="TOGGLE_IS_FETCHING",h="TOGGLE_IS_FOLLOWING_IN_PROGRESS",j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:o,userId:e}},g=function(e){return{type:l,userId:e}},O=function(e){return{type:f,users:e}},v=function(e){return{type:d,totalUsersCount:e}},_=function(e){return{type:p,currentPage:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O([])),r(x(!0)),r(_(e)),n.next=5,u.e.getUsers(e,t);case 5:c=n.sent,r(x(!1)),r(O(c.items)),r(v(c.totalCount));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},N=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(c(n)),t(w(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,u.e.follow.bind(u.e),m);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,u.e.unfollow.bind(u.e),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!0}):e}))});case l:return Object(s.a)(Object(s.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)(Object(s.a)({},e),{},{followed:!1}):e}))});case f:return Object(s.a)(Object(s.a)({},e),{},{users:Object(i.a)(t.users)});case d:return Object(s.a)(Object(s.a)({},e),{},{totalUsersCount:t.totalUsersCount});case p:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case b:return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case h:return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d}));var r=n(7),a=n.n(r),c=n(14),i=n(3),s=n(13),u="SET_NEWS",o={news:null},l=function(e){return{type:u,news:e}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getNews();case 2:n=e.sent,t(l(n.data.articles));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.searchNews(e);case 2:r=t.sent,n(l(r.data.articles));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{news:t.news});default:return e}}},13:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return o}));var r=n(68),a=r.create({withCredentials:!0,headers:{"API-KEY":"7f99b608-cf31-4926-9bbe-42c9e8ea7e89"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},i={getUserProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",{profile:e})}},s={me:function(){return a.get("auth/me",{headers:{" Access-Control-Allow-Origin":"*"}}).then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},u={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}},o={getNews:function(){return r.get("https://newsapi.org/v2/everything?q=tesla&from=2021-03-26&sortBy=publishedAt&apiKey=7db5783412bf4990b2e099b8e408ddf8")},searchNews:function(e){return r.get("https://newsapi.org/v2/everything?q=".concat(e,"&from=2021-03-26&sortBy=publishedAt&apiKey=7db5783412bf4990b2e099b8e408ddf8"))}}},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(36),a=n(3),c=n.p+"static/media/me.380aadd5.jpeg",i=n(70),s="ADD-MESSAGE",u={dialogsData:[{id:1,name:"Masha"},{id:2,name:"Elena"},{id:3,name:"Sasha"},{id:4,name:"Anton"},{id:5,name:"Sergo"}],messagesData:[{id:1,photo:i.a,authorName:"Masha",message:"I am a normal popover and I can have text and everything?"},{id:2,photo:c,authorName:"Me",message:"I am a normal popover everything at night!"},{id:3,photo:i.a,authorName:"Masha",message:"I can have text and everything..."}]},o=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:if(t.newMessageText){var n={id:5,photo:c,authorName:"Me",message:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])})}default:return e}}},16:function(e,t,n){e.exports={loginTitle:"Login_loginTitle__2DVLJ",loginForm:"Login_loginForm__JMyFX",captchaURLInput:"Login_captchaURLInput__2eSeh",loginInput:"Login_loginInput__1XDyV",passwordInput:"Login_passwordInput__-bLnc",captchaURL:"Login_captchaURL__392X9",rememberMe:"Login_rememberMe__1nc0Z",formBtn:"Login_formBtn__tG6Dt",btn:"Login_btn__3Q24v",formSummaryError:"Login_formSummaryError__1aS8H"}},164:function(e,t,n){},165:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b}));var r=n(3),a=n(93),c=n(90),i=n.n(c),s=n(87),u=n(1),o=["input","meta","children"],l=["input","meta","children"],f=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(u.jsxs)("div",{className:i.a.formControl+" "+(c&&i.a.error),children:[a,c&&Object(u.jsx)("span",{children:r})]})},d=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,o));return Object(u.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,l));return Object(u.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},b=function(e,t,n,a,c,i){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";return Object(u.jsxs)("div",{className:e,children:[Object(u.jsx)(s.a,Object(r.a)({className:t,name:n,component:a,placeholder:c,validate:i},o)),l]})}},294:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(9).then(n.bind(null,308)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},a=n(0),c=n.n(a),i=n(65),s=n.n(i),u=(n(164),n(52)),o=n(53),l=n(55),f=n(54),d=n(20),p=n(10),b=(n(165),n(3)),h=n(17),j=n(41),m=n.n(j),g=n.p+"static/media/logo.5311cfa2.png",O=n(1),v=function(e){return Object(O.jsxs)("header",{className:m.a.header,children:[Object(O.jsx)("img",{src:g,className:m.a.logo}),Object(O.jsx)("div",{className:m.a.login,children:e.isAuth?Object(O.jsxs)("div",{children:[e.login," - ",Object(O.jsx)("button",{className:m.a.logout,onClick:e.logout,children:"Log out"})]}):Object(O.jsx)(d.c,{to:"/login",className:m.a.login__link,children:"Login"})})]})},_=n(7),x=n.n(_),w=n(14),y=n(32),N=n(13),S="auth/SET_AUTH_USER_DATA",C="auth/GET_CAPTCHA_SUCCESS",L={userId:null,email:null,login:null,isAuth:!1,capthaURL:null},k=function(e,t,n,r){return{type:S,payload:{userId:e,email:t,login:n,isAuth:r}}},U=function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){var n,r,a,c,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,c=r.login,i=r.email,t(k(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.d.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t({type:C,payload:{capthaURL:r}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case C:return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},T=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(v,Object(b.a)({},this.props))}}]),n}(c.a.Component),A=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(w.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.logout();case 2:0===e.sent.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(T),P=n(11),R=n.n(P),F=function(e){return Object(O.jsx)("nav",{className:R.a.menu,children:Object(O.jsxs)("ul",{className:R.a.menu__list,children:[Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/profile",className:R.a.list__link,activeClassName:R.a.active,children:e.sideBar.title[0]})}),Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/dialogs",className:R.a.list__link,activeClassName:R.a.active,children:e.sideBar.title[1]})}),Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/news",className:R.a.list__link,activeClassName:R.a.active,children:e.sideBar.title[2]})}),Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/music",className:R.a.list__link,activeClassName:R.a.active,children:e.sideBar.title[3]})}),Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/users",className:R.a.list__link+" "+R.a.special,activeClassName:R.a.active,children:e.sideBar.title[4]})}),Object(O.jsx)("li",{className:R.a.list__item,children:Object(O.jsx)(d.c,{to:"/settings",className:R.a.list__link,activeClassName:R.a.active,children:e.sideBar.title[5]})})]})})},D=Object(h.b)((function(e){return{sideBar:e.sideBar}}))(F),M=n(128),z=n(16),B=n.n(z),H=n(27),G=n(45),W=(Object(G.a)(50),Object(M.a)({form:"login"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,className:B.a.loginForm,children:[Object(H.c)(B.a.login,B.a.loginInput,"email",H.a,"Your email...",[G.b]),Object(H.c)(B.a.password,B.a.passwordInput,"password",H.a,"Your password...",[G.b],{type:"password"}),Object(H.c)(B.a.rememberMe,B.a.rememberMeCheck,"rememberMe",H.a,null,[],{type:"checkbox"},"Remember me"),e.captchaURL&&Object(O.jsx)("img",{src:e.captchaURL}),e.captchaURL&&Object(H.c)(B.a.captchaURL,B.a.captchaURLInput,"captchaURL",H.a,"Enter captcha...",[G.b]),e.error&&Object(O.jsx)("div",{className:B.a.formSummaryError,children:e.error}),Object(O.jsx)("div",{className:B.a.formBtn,children:Object(O.jsx)("button",{className:B.a.btn,children:"Sign IN"})})]})}))),J=Object(h.b)((function(e){return{captchaURL:e.auth.capthaURL,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(w.a)(x.a.mark((function a(c){var i,s;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N.a.login(e,t,n,r);case 2:0===(i=a.sent).resultCode?c(U()):(10===i.resultCode&&c(E()),s=i.messages.length>0?i.messages[0]:"Some error",c(Object(y.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(O.jsx)(p.a,{to:"/profile"}):Object(O.jsxs)("div",{className:B.a.login,children:[Object(O.jsx)("h3",{className:B.a.loginTitle,children:"Login"}),Object(O.jsx)(W,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captchaURL)},captchaURL:e.captchaURL})]})})),K=n(12),Y="INITIALIZED_SUCCESS",q={initialized:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},X=n(56),Z=n(130),Q=n(95),$={title:["Profile","Messages","News","Music","Find users","Settings"]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$;return e},te=n(126),ne=n(134),re=n(129),ae=n(127),ce=Object(K.c)({profilePage:Q.b,dialogsPage:Z.b,newsPage:ae.a,sideBar:ee,usersPage:te.a,auth:I,app:V,form:re.a}),ie=Object(K.e)(ce,Object(K.a)(ne.a));window.store=ie;var se=ie,ue=function(e){return function(t){return Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)(X.a,{}),children:Object(O.jsx)(e,Object(b.a)({},t))})}},oe=c.a.lazy((function(){return n.e(3).then(n.bind(null,311))})),le=c.a.lazy((function(){return n.e(6).then(n.bind(null,313))})),fe=c.a.lazy((function(){return n.e(4).then(n.bind(null,312))})),de=c.a.lazy((function(){return n.e(5).then(n.bind(null,314))})),pe=c.a.lazy((function(){return n.e(7).then(n.bind(null,309))})),be=c.a.lazy((function(){return n.e(8).then(n.bind(null,310))})),he=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandleErrors=function(e){alert("Some errors occured, suka!")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillMount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"app__inner",children:[Object(O.jsx)(A,{}),Object(O.jsx)(D,{}),Object(O.jsx)("div",{className:"app__content",children:Object(O.jsxs)(p.d,{children:[Object(O.jsx)(p.a,{exact:!0,from:"/",to:"/profile"}),Object(O.jsx)(p.b,{path:"/profile/:userId?",render:ue(oe)}),Object(O.jsx)(p.b,{path:"/dialogs",render:ue(le)}),Object(O.jsx)(p.b,{path:"/news",render:ue(de)}),Object(O.jsx)(p.b,{path:"/music",render:ue(pe)}),Object(O.jsx)(p.b,{path:"/users",render:ue(fe)}),Object(O.jsx)(p.b,{path:"/settings",render:ue(be)}),Object(O.jsx)(p.b,{path:"/login",render:function(){return Object(O.jsx)(J,{})}}),Object(O.jsx)(p.b,{path:"*",render:function(){return Object(O.jsx)("div",{children:"404 Not Found"})}})]})})]})}):Object(O.jsx)(X.a,{})}}]),n}(c.a.Component),je=Object(K.d)(p.g,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e({type:Y})}))}}}))(he),me=function(e){return Object(O.jsx)(d.b,{basename:"/social-network-app",children:Object(O.jsx)(h.a,{store:se,children:Object(O.jsx)(je,{})})})};s.a.render(Object(O.jsx)(me,{}),document.getElementById("root")),r()},41:function(e,t,n){e.exports={header:"Header_header__1EWgb",logo:"Header_logo__3HnYK",login:"Header_login__1Absr",logout:"Header_logout__2i9FW",login__link:"Header_login__link__1gU0f"}},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required!"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," sumbols!")}}},56:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.b8febcfd.gif",a=n(1);t.a=function(e){return Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)("img",{src:r})})}},70:function(e,t,n){"use strict";t.a=n.p+"static/media/friend.b5f89cd2.jpg"},90:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3uoza",error:"FormsControls_error__fy3j1"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return x}));var r=n(7),a=n.n(r),c=n(14),i=n(36),s=n(3),u=n(13),o=n(32),l="ADD_POST",f="SET_USER_PROFILE",d="SET_STATUS",p="DELETE_POST",b="SAVE_PHOTO_SUCCESS",h={profile:null,postData:[{id:1,ava:null,message:"Hey, why nobody love me?",likeCount:12},{id:2,ava:null,message:"It's our new program! Hey!",likeCount:27},{id:3,ava:null,message:"Hello, how`s going?",likeCount:33}],status:""},j=function(e){return{type:l,newPostText:e}},m=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getUserProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.c.saveProfile(e);case 3:if(0!==(i=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=10;break;case 8:return n(Object(o.a)("edit-profile",{_error:i.data.messages[0]})),t.abrupt("return",Promise.reject(i.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:if(t.newPostText){var n={id:4,ava:null,message:t.newPostText,likeCount:0};return Object(s.a)(Object(s.a)({},e),{},{postData:[].concat(Object(i.a)(e.postData),[n])})}case p:return Object(s.a)(Object(s.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!=t.postId}))});case f:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case d:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case b:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[294,1,2]]]);
//# sourceMappingURL=main.18091289.chunk.js.map