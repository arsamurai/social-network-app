(this["webpackJsonpsocial-network-app"]=this["webpackJsonpsocial-network-app"]||[]).push([[3],{295:function(t,e,s){"use strict";s.d(e,"a",(function(){return f}));var a=s(3),o=s(52),i=s(53),n=s(55),r=s(54),c=s(0),l=s.n(c),u=s(17),_=s(10),p=s(1),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var e=function(e){Object(n.a)(c,e);var s=Object(r.a)(c);function c(){return Object(o.a)(this,c),s.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(t,Object(a.a)({},this.props)):Object(p.jsx)(_.a,{to:"/login"})}}]),c}(l.a.Component);return Object(u.b)(d)(e)}},296:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s(94);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],a=!0,o=!1,i=void 0;try{for(var n,r=t[Symbol.iterator]();!(a=(n=r.next()).done)&&(s.push(n.value),!e||s.length!==e);a=!0);}catch(c){o=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(o)throw i}}return s}}(t,e)||Object(a.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},297:function(t,e,s){t.exports={user__background:"ProfileInfo_user__background__BafJ3",user__main:"ProfileInfo_user__main__MNIV0",user__ava:"ProfileInfo_user__ava__bTW3x",user__description:"ProfileInfo_user__description__2CuTi",user__name:"ProfileInfo_user__name__3FRmw",user__info:"ProfileInfo_user__info__3z6GR",info__item:"ProfileInfo_info__item__3n7Pf",status__input:"ProfileInfo_status__input__3iu0j",contacts:"ProfileInfo_contacts__UIpSw",contactTitle:"ProfileInfo_contactTitle__2dHLk",fullName:"ProfileInfo_fullName__39vJw",lookingForAJob:"ProfileInfo_lookingForAJob__2-lJB",lookingForAJobBox:"ProfileInfo_lookingForAJobBox__1VHLN",contactValue:"ProfileInfo_contactValue__36miG",aboutMe:"ProfileInfo_aboutMe__3O0jc",lookingForAJobDescription:"ProfileInfo_lookingForAJobDescription__2x0AG",editBtn:"ProfileInfo_editBtn__17Jqq",saveBtn:"ProfileInfo_saveBtn__1Nb1K"}},301:function(t,e,s){},302:function(t,e,s){t.exports={my__posts:"MyPosts_my__posts__3TYhZ",title:"MyPosts_title__1F5BT",new__post:"MyPosts_new__post__10mN5",write__post:"MyPosts_write__post__13nGs",add__post:"MyPosts_add__post__1IOxA"}},303:function(t,e,s){t.exports={post:"Post_post__1Oc3-",post__ava:"Post_post__ava__2-nAa",post__info:"Post_post__info__Y5ig7",post__message:"Post_post__message__odJR9",post__like:"Post_post__like__W2URF"}},311:function(t,e,s){"use strict";s.r(e);var a=s(3),o=s(52),i=s(53),n=s(55),r=s(54),c=s(0),l=s.n(c),u=s(301),_=s.n(u),p=s(296),d=s(297),f=s.n(d),j=s.p+"static/media/background.277161b0.jpg",b=s(70),h=s(1),m=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,i=new Array(a),n=0;n<a;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).state={status:t.props.status,editMode:!1},t.activeEditMode=function(){t.setState({editMode:!0})},t.deActiveEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(e){t.setState({status:e.currentTarget.value})},t}return Object(i.a)(s,[{key:"componentDidUpdate",value:function(t,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[!this.state.editMode&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onDoubleClick:this.activeEditMode,children:this.state.status})}),this.state.editMode&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:f.a.status__input,onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deActiveEditMode,value:this.state.status})})]})})}}]),s}(l.a.Component),O=s(27),x=s(128),v=Object(x.a)({form:"edit-profile"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,className:f.a.user__description,children:[Object(h.jsx)("h3",{className:f.a.user__name,children:Object(O.c)("",f.a.fullName,"fullName",O.a,"Full name",[])}),Object(h.jsxs)("ul",{className:f.a.user__info,children:[t.status&&Object(h.jsxs)("li",{className:f.a.info__item,children:["Status:",Object(h.jsx)("p",{children:Object(h.jsx)(m,{status:t.status,updateStatus:t.updateStatus})})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Contacts:"," ",Object.keys(t.profile.contacts).map((function(t){return Object(h.jsx)("div",{className:f.a.contacts,children:Object(h.jsxs)("div",{className:f.a.contactTitle,children:[t,":"," ",Object(O.c)("",f.a.contactValue,"contacts."+t,O.a,t,[])]})})}))]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Job:"," ",Object(O.c)(f.a.lookingForAJob,f.a.lookingForAJobBox,"lookingForAJob",O.a,"",[],{type:"checkbox"})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Skills:"," ",Object(h.jsx)("div",{children:Object(O.c)("",f.a.lookingForAJobDescription,"lookingForAJobDescription",O.b,"It`s absent",[])})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["About me:"," ",Object(h.jsx)("div",{children:Object(O.c)("",f.a.aboutMe,"aboutMe",O.b,"It`s absent",[])})]})]}),Object(h.jsx)("button",{className:f.a.saveBtn,children:"Save"})]})})),N=function(t){return Object(h.jsxs)("div",{className:f.a.user__description,children:[Object(h.jsx)("h3",{className:f.a.user__name,children:t.profile.fullName}),Object(h.jsxs)("ul",{className:f.a.user__info,children:[t.status&&Object(h.jsxs)("li",{className:f.a.info__item,children:["Status:",Object(h.jsx)("p",{children:Object(h.jsx)(m,{status:t.status,updateStatus:t.updateStatus})})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Contacts:"," ",Object.keys(t.profile.contacts).map((function(e){return Object(h.jsx)(P,{contactTitle:e,contactValue:t.profile.contacts[e]},e)}))]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Job: ",Object(h.jsx)("p",{children:t.profile.lookingForAJob?"Yes":"No"})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["Skills:",Object(h.jsx)("p",{children:t.profile.lookingForAJobDescription?t.profile.lookingForAJobDescription:"It`s absent"})]}),Object(h.jsxs)("li",{className:f.a.info__item,children:["About me:",Object(h.jsx)("p",{children:t.profile.aboutMe?t.profile.aboutMe:"It`s absent"})]})]})]})},P=function(t){var e=t.contactTitle,s=t.contactValue;return Object(h.jsx)("div",{className:f.a.contacts,children:Object(h.jsxs)("div",{className:f.a.contactTitle,children:[e,": ",Object(h.jsxs)("div",{className:f.a.contactValue,children:[" ",s]})]})})},g=function(t){var e=Object(c.useState)(!1),s=Object(p.a)(e,2),o=s[0],i=s[1];return Object(h.jsxs)("div",{className:f.a.profile__user,children:[Object(h.jsx)("img",{src:j,className:f.a.user__background}),Object(h.jsxs)("div",{className:f.a.user__main,children:[Object(h.jsxs)("div",{className:f.a.user__left,children:[Object(h.jsx)("img",{src:null!=t.profile.photos.large?t.profile.photos.large:b.a,className:f.a.user__ava}),t.isOwner&&(o?Object(h.jsx)("div",{className:f.a.editBlock,children:Object(h.jsx)("button",{className:f.a.editBtn,onClick:function(){i(!1)},children:"Exit"})}):Object(h.jsx)("div",{className:f.a.editBlock,children:Object(h.jsx)("button",{className:f.a.editBtn,onClick:function(){i(!0)},children:"Edit"})}))]}),Object(h.jsx)("div",{className:f.a.user__right,children:o?Object(h.jsx)(v,Object(a.a)({initialValues:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){i(!1)}))}},t)):Object(h.jsx)(N,Object(a.a)({profile:t.profile,isOwner:t.isOwner},t))})]})]})},k=s(302),y=s.n(k),S=s(303),I=s.n(S),A=function(t){return Object(h.jsxs)("div",{className:I.a.post,children:[Object(h.jsx)("img",{src:t.ava,alt:"",className:I.a.post__ava}),Object(h.jsxs)("div",{className:I.a.post__info,children:[Object(h.jsx)("div",{className:I.a.post__message,children:t.message}),Object(h.jsxs)("div",{className:I.a.post__like,children:["Like: ",t.likeCount]})]})]})},w=s(87),J=s(45),M=Object(J.a)(30),F=Object(x.a)({form:"addPost"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,className:y.a.new__post,children:[Object(h.jsx)(w.a,{className:y.a.write__post,component:O.b,name:"newPostText",placeholder:"Your news...",validate:[J.b,M]}),Object(h.jsx)("button",{className:y.a.add__post,children:"Send"})]})})),D=l.a.memo((function(t){console.log("RENDER YO");var e=t.postData.map((function(e){return Object(h.jsx)(A,{ava:null!=t.profile.photos.large?t.profile.photos.large:b.a,message:e.message,likeCount:e.likeCount})}));return Object(h.jsxs)("div",{className:y.a.my__posts,children:[Object(h.jsx)("h3",{className:y.a.title,children:"My posts"}),Object(h.jsx)(F,{onSubmit:function(e){t.addPost(e.newPostText),e.newPostText=""}}),e]})})),B=s(56),C=function(t){return t.profile?Object(h.jsxs)("div",{className:_.a.profile,children:[Object(h.jsx)(g,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,saveProfile:t.saveProfile}),Object(h.jsx)(D,{profile:t.profile,addPost:t.addPost,postData:t.postData})]}):Object(h.jsx)(B.a,{})},T=s(17),U=s(95),E=s(10),V=s(295),R=s(12),Y=function(t){return t.profilePage.profile},G=function(t){return t.profilePage.status},L=function(t){return t.profilePage.postData},q=function(t){return t.auth.userId},H=function(t){return t.auth.isAuth},W=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.autorithedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(C,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,addPost:this.props.addPost,saveProfile:this.props.saveProfile,postData:this.props.postData}))}}]),s}(l.a.Component);e.default=Object(R.d)(Object(T.b)((function(t){return{profile:Y(t),status:G(t),autorithedUserId:q(t),isAuth:H(t),postData:L(t)}}),{getUserProfile:U.c,getUserStatus:U.d,updateStatus:U.g,addPost:U.a,saveProfile:U.f}),E.g,V.a)(W)}}]);
//# sourceMappingURL=3.bb801b82.chunk.js.map