(function(t){function a(a){for(var s,i,o=a[0],r=a[1],u=a[2],_=0,d=[];_<o.length;_++)i=o[_],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);c&&c(a);while(d.length)d.shift()();return l.push.apply(l,u||[]),e()}function e(){for(var t,a=0;a<l.length;a++){for(var e=l[a],s=!0,o=1;o<e.length;o++){var r=e[o];0!==n[r]&&(s=!1)}s&&(l.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},l=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/calculator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var c=r;l.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"230c":function(t,a,e){},5338:function(t,a,e){"use strict";e("230c")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.isLoginForm?t._e():e("Calculator",{on:{showLoginForm:function(a){return t.showLoginForm(a)}}}),t.isLoginForm?e("Login",{attrs:{amount:t.amount,days:t.days},on:{signIn:function(a){return t.signIn(a)}}}):t._e()],1)},l=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"calculator"},[t._m(0),e("div",{staticClass:"calculator__main"},[e("div",{staticClass:"calculator__form"},[e("div",{staticClass:"calculator__ranges"},[e("div",{staticClass:"range"},[e("div",{staticClass:"range__head"},[e("div",{staticClass:"range__head-title"},[t._v("Сумма:")]),e("div",{staticClass:"range__head-sum"},[e("div",{staticClass:"range__head-sum-value"},[t._v(t._s(t.amount.value))]),t._v(" грн ")])]),e("div",{staticClass:"range__slider"},[e("RangeSlider",{attrs:{min:t.amount.min,max:t.amount.max,step:t.amount.step,"no-popover":!0,"no-calibration":!0},model:{value:t.amount.value,callback:function(a){t.$set(t.amount,"value",a)},expression:"amount.value"}})],1),e("div",{staticClass:"range__values"},[e("div",{staticClass:"range__values-item"},[t._v(t._s(t.amount.min)+" грн")]),e("div",{staticClass:"range__values-item"},[t._v(" до "+t._s(t.amount.max.toLocaleString("ru"))+" грн ")])])]),e("div",{staticClass:"range"},[e("div",{staticClass:"range__head"},[e("div",{staticClass:"range__head-title"},[t._v("Срок:")]),e("div",{staticClass:"range__head-sum"},[e("div",{staticClass:"range__head-sum-value"},[t._v(t._s(t.days.value))]),t._v(" дн ")])]),e("div",{staticClass:"range__slider"},[e("RangeSlider",{attrs:{min:t.days.min,max:t.days.max,step:t.days.step,"no-popover":!0,"no-calibration":!0},model:{value:t.days.value,callback:function(a){t.$set(t.days,"value",a)},expression:"days.value"}})],1),e("div",{staticClass:"range__values"},[e("div",{staticClass:"range__values-item"},[t._v(t._s(t.days.min)+" день")]),e("div",{staticClass:"range__values-item"},[t._v("до "+t._s(t.days.max)+" дней")])])])]),e("button",{staticClass:"calculator__btn",attrs:{type:"button"},on:{click:function(a){return t.showLoginForm(t.amount.value,t.days.value)}}},[t._v(" Оформить кредит ")])]),e("div",{staticClass:"calculator__results"},[e("div",{staticClass:"calculator__result"},[e("span",{staticClass:"calculator__result-title"},[t._v("Возврат до:")]),e("span",{staticClass:"calculator__result-value"},[t._v(t._s(t.returnDate))])]),e("div",{staticClass:"calculator__result"},[e("span",{staticClass:"calculator__result-title"},[t._v("Сумма, грн:")]),e("span",{staticClass:"calculator__result-value"},[t._v(t._s(t.amount.value))])]),e("div",{staticClass:"calculator__result"},[e("span",{staticClass:"calculator__result-title"},[t._v("Проценты, грн:")]),e("span",{staticClass:"calculator__result-value"},[t._v(t._s(t.percentValue))])]),e("div",{staticClass:"calculator__result"},[e("span",{staticClass:"calculator__result-title"},[t._v(" Вернуть, грн: ")]),e("span",{staticClass:"calculator__result-value"},[e("strong",[t._v(t._s(t.returnValue))])])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"calculator__head"},[e("strong",[t._v("Smart")]),e("span",[t._v("до 20 000 грн на 30 дней")])])}],r=(e("5319"),e("ac1f"),e("b680"),e("a9e3"),e("99af"),e("8e02")),u=e.n(r),c=(e("17fc"),{name:"Calculator",data:function(){return{dayNames:["вс","пн","вт","ср","чт","пт","сб"],amount:{value:1e3,min:100,max:22e3,step:100},days:{value:7,min:1,max:30,step:1},ragseStyles:{mailStyle:{padding:"2px 0"},sliderStyle:{width:"20px",height:"20px",top:"-8px"},processStyle:{height:"4px"},bgStyle:{height:"4px"},tooltipStyle:{display:"none"}}}},components:{RangeSlider:u.a},computed:{percentValue:function(){return Number(.01*this.amount.value/100*this.days.value).toFixed(2).replace(".",",")},returnValue:function(){return(Number(this.percentValue.replace(",","."))+this.amount.value).toFixed(2).replace(".",",")},returnDate:function(){var t=new Date,a=this.dayNames[new Date((new Date).setDate(t.getDate()+this.days.value)).getDay()],e=new Date((new Date).setDate(t.getDate()+this.days.value)).getMonth()+1,s=new Date((new Date).setDate(t.getDate()+this.days.value)).getDate(),n=t.getFullYear(),l="".concat(a,", ").concat(e<10?"0"+e:e,".").concat(s<10?"0"+s:s,".").concat(n);return l}},methods:{showLoginForm:function(t,a){this.$emit("showLoginForm",{amount:t,days:a})}}}),_=c,d=(e("85cf"),e("2877")),v=Object(d["a"])(_,i,o,!1,null,null,null),m=v.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("h5",{staticClass:"login__title"},[t._v("Авторизируйтесь, чтобы продолжить")]),e("form",{staticClass:"login__form",attrs:{action:"/",method:"POST",id:"login-form"}},[e("div",{staticClass:"login__form-value"},[t._v(" Сумма, грн:"),e("strong",[t._v(t._s(t.amount))])]),e("div",{staticClass:"login__form-value"},[t._v(" Срок, дн:"),e("strong",[t._v(t._s(t.days))])]),e("div",{staticClass:"login__form-field"},[e("div",{staticClass:"login__form-info"}),e("label",{attrs:{for:"user-email"}},[t._v("Email / Тел. +38...*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.emailPhone,expression:"emailPhone"}],attrs:{id:"user-email",type:"text",placeholder:""},domProps:{value:t.emailPhone},on:{input:function(a){a.target.composing||(t.emailPhone=a.target.value)}}})]),e("div",{staticClass:"login__form-field"},[e("div",{staticClass:"login__form-info"}),e("label",{attrs:{for:"user-password"}},[t._v("Пароль*")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"user-password",type:"password",placeholder:""},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),e("a",{staticClass:"login__form-restore",attrs:{href:"#"}},[t._v("Забыли пароль?")]),e("button",{staticClass:"login__form-btn",on:{click:function(a){return a.preventDefault(),t.signIn()}}},[t._v("Войти")]),e("a",{staticClass:"login__form-login",attrs:{href:"#"}},[t._v("Зарегистрироваться")])])])},f=[],g={name:"Login",props:["amount","days"],data:function(){return{emailPhone:"",password:""}},methods:{signIn:function(){var t={amount:this.amount,days:this.days,emailPhone:this.emailPhone,password:this.password};this.$emit("signIn",t)}}},h=g,y=(e("5338"),Object(d["a"])(h,p,f,!1,null,null,null)),C=y.exports,b={name:"App",data:function(){return{isLoginForm:!1,amount:null,days:null}},components:{Calculator:m,Login:C},methods:{showLoginForm:function(t){this.amount=t.amount,this.days=t.days,this.isLoginForm=!0},signIn:function(t){console.log(t)}}},w=b,x=(e("5c0b"),Object(d["a"])(w,n,l,!1,null,null,null)),D=x.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";e("9c0c")},"85cf":function(t,a,e){"use strict";e("a88a")},"9c0c":function(t,a,e){},a88a:function(t,a,e){}});
//# sourceMappingURL=app.04669a3e.js.map