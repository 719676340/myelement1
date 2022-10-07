(function(m,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(m=typeof globalThis<"u"?globalThis:m||self,e(m.myelement1={},m.Vue))})(this,function(m,e){"use strict";const Fe="",h=(o,a)=>{const t=o.__vccOpts||o;for(const[n,l]of a)t[n]=l;return t},G={class:"myratioinput"},F=["name","value","disabled"],q={class:"myratiolabel"},A={key:0},k=h(Object.assign({name:"MyCheckBox"},{props:["label","disabled","border","size","name","modelValue"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;var n=e.inject("change"),l=e.inject("group"),s=e.computed({get(){return l?l.value.indexOf(t.label)!=-1:t.modelValue},set(_){if(!t.disabled)if(l)if(console.log(2222),_)n([...l.value,t.label]);else{var r=l.value.slice();r.splice(l.value.indexOf(t.label),1),n(r)}else console.log(1111),a("update:modelValue",_)}});return(_,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["myratio",[`myratio-${e.unref(t).size}`,{"is-disabled":e.unref(t).disabled=="","is-border":e.unref(t).border==""}]])},[e.createElementVNode("span",G,[e.withDirectives(e.createElementVNode("input",{type:"checkbox",name:e.unref(t).name,value:e.unref(t).label,disabled:e.unref(t).disabled,"onUpdate:modelValue":r[0]||(r[0]=c=>e.isRef(s)?s.value=c:s=c)},null,8,F),[[e.vModelCheckbox,e.unref(s)]])]),e.createElementVNode("span",q,[e.renderSlot(_.$slots,"default",{},void 0,!0),_.$slots.default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("span",A,e.toDisplayString(e.unref(t).label),1))])],2))}}),[["__scopeId","data-v-775ec9d5"]]),H={class:"myradio-grounp"},w=Object.assign({name:"MyCheckBoxGroup"},{props:["modelValue"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;function n(s){a("update:modelValue",s)}var l=e.computed(()=>t.modelValue);return e.provide("change",n),e.provide("group",l),(s,_)=>(e.openBlock(),e.createElementBlock("div",H,[e.renderSlot(s.$slots,"default")]))}}),Je="",E=o=>(e.pushScopeId("data-v-699fdffe"),o=o(),e.popScopeId(),o),J={class:"Myinput clearfix"},K=["type","name","placeholder","disabled","maxlength"],Q=["name","placeholder","disabled","maxlength"],W=[E(()=>e.createElementVNode("i",{class:"iconfont icon-chacha clearlogo"},null,-1))],X=[E(()=>e.createElementVNode("i",{class:"iconfont icon-yanjing clearlogo"},null,-1))],Y={class:"inputclear"},Z={class:"inputcountinner"},N=h(Object.assign({name:"MyInput"},{props:["modelValue","type","placeholder","disabled","clearable","showPassword","maxlength","showwordlimit","name"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;var n=e.computed({get(){return t.modelValue},set(_){t.disabled!=""&&a("update:modelValue",_)}}),l=e.ref(t.showPassword==""),s=function(){l.value=!l.value};return(_,r)=>(e.openBlock(),e.createElementBlock("div",J,[e.unref(t).type!="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,class:e.normalizeClass(["inputinner",{"is-disabled":e.unref(t).disabled==""}]),type:e.unref(t).showPassword==""?e.unref(l)?"password":"text":e.unref(t).type,name:e.unref(t).name,placeholder:e.unref(t).placeholder,"onUpdate:modelValue":r[0]||(r[0]=c=>e.isRef(n)?n.value=c:n=c),disabled:e.unref(t).disabled=="",maxlength:e.unref(t).maxlength},null,10,K)),[[e.vModelDynamic,e.unref(n)]]):e.createCommentVNode("",!0),e.unref(t).type=="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("textarea",{key:1,class:e.normalizeClass(["inputinner inputtextarea",{"is-disabled":e.unref(t).disabled==""}]),name:e.unref(t).name,placeholder:e.unref(t).placeholder,"onUpdate:modelValue":r[1]||(r[1]=c=>e.isRef(n)?n.value=c:n=c),disabled:e.unref(t).disabled=="",maxlength:e.unref(t).maxlength},`\r
        `,10,Q)),[[e.vModelText,e.unref(n)]]):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("span",{class:"inputclear",onClick:r[2]||(r[2]=c=>e.isRef(n)?n.value="":n="")},W,512),[[e.vShow,e.unref(n).length&&e.unref(t).clearable==""]]),e.withDirectives(e.createElementVNode("span",{class:"inputclear",onClick:r[3]||(r[3]=(...c)=>e.unref(s)&&e.unref(s)(...c))},X,512),[[e.vShow,e.unref(t).showPassword==""]]),e.withDirectives(e.createElementVNode("span",Y,[e.createElementVNode("span",Z,e.toDisplayString(e.unref(n).length)+"/"+e.toDisplayString(e.unref(t).maxlength),1)],512),[[e.vShow,e.unref(t).showwordlimit==""]])]))}}),[["__scopeId","data-v-699fdffe"]]),Ye="",v={class:"myicon"},$=h(Object.assign({name:"MyIcon"},{props:["name","color","size"],setup(o){const a=o;return(t,n)=>(e.openBlock(),e.createElementBlock("div",v,[e.createElementVNode("i",{class:e.normalizeClass(["iconfont icon-info",[`icon-${e.unref(a).name}`]]),style:e.normalizeStyle({color:e.unref(a).color,"font-size":e.unref(a).size+"px"})},null,6)]))}}),[["__scopeId","data-v-6ec7415f"]]),et="",x=h(Object.assign({name:"MyButton"},{props:["type","size","disabled","round","plain","icon"],setup(o){const a=o;return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["mybotton",[`mybotton--${e.unref(a).type}`,`mybotton--${e.unref(a).size}`,{"is-disabled":e.unref(a).disabled=="","is-round":e.unref(a).round=="","is-plain":e.unref(a).plain==""}]]),tabindex:"111"},[e.unref(a).icon?(e.openBlock(),e.createBlock($,{key:0,class:"icon",name:"props.icon"})):e.createCommentVNode("",!0),e.createElementVNode("span",null,[e.renderSlot(t.$slots,"default",{},void 0,!0)])],2))}}),[["__scopeId","data-v-eead4c5a"]]),ot="",S=o=>(e.pushScopeId("data-v-aa3e9969"),o=o(),e.popScopeId(),o),ee={class:"myCarousel"},te={class:"container"},ne=[S(()=>e.createElementVNode("i",{class:"iconfont icon-left"},null,-1))],oe=[S(()=>e.createElementVNode("i",{class:"iconfont icon-right"},null,-1))],ae={id:"slotnum",class:"maincontain"},le={class:"indicator"},se=["onClick","onMouseenter"],M=h(Object.assign({name:"MyCarousel"},{props:{initindex:{type:Number,default:0},trigger:{type:String,default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3}},setup(o){const a=o;var t=e.ref(a.initindex),n=e.reactive([]);e.computed(()=>t.value==0?n.length-1:t.value-1),e.computed(()=>t.value==n.length-1?0:t.value+1);function l(){t.value==0?t.value=n.length-1:--t.value}function s(){t.value==n.length-1?t.value=0:++t.value}function _(){var i=document.getElementById("slotnum").childNodes;for(let p=0;p<i.length;p++)i[p].nodeType==1&&n.push(i[p]);n[t.value].classList.add("item_curr")}e.watch(()=>t.value,()=>{for(let i=0;i<n.length;i++)i<t.value?(n[i].classList.remove("item_curr"),n[i].classList.remove("item_next"),n[i].classList.add("item_prev")):i==t.value?(n[i].classList.remove("item_prev"),n[i].classList.remove("item_next"),n[i].classList.add("item_curr")):(n[i].classList.remove("item_prev"),n[i].classList.remove("item_curr"),n[i].classList.add("item_next"))});function r(i){a.trigger=="click"&&(t.value=i)}function c(i){a.trigger=="hover"&&(t.value=i)}var y;function f(){a.autoplay==!0&&(y=setInterval(()=>{s()},a.interval))}function g(){clearInterval(y)}return e.onMounted(()=>{_(),f()}),e.onBeforeUnmount(()=>{g()}),(i,p)=>(e.openBlock(),e.createElementBlock("div",ee,[e.createElementVNode("div",te,[e.createElementVNode("div",{class:"leftarrow",onClick:s},ne),e.createElementVNode("div",{class:"rightarrow",onClick:l},oe),e.createElementVNode("div",ae,[e.renderSlot(i.$slots,"default",{},void 0,!0)])]),e.createElementVNode("div",le,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(n),(d,u)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["indicatoritem",{indicatoritem_active:u==e.unref(t)}]),key:d,onClick:e.withModifiers(V=>r(u),["stop"]),onMouseenter:V=>c(u)},null,42,se))),128))])]))}}),[["__scopeId","data-v-aa3e9969"]]),it="",C=h(Object.assign({name:"MyCarouselItem"},{props:["num"],setup(o){const a=o;var t=e.ref(0);return e.onMounted(()=>{console.log(a.num)}),(n,l)=>(e.openBlock(),e.createElementBlock("div",{class:"MyCarouselitem",onClick:l[0]||(l[0]=s=>e.isRef(t)?t.value=1:t=1)},[e.renderSlot(n.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-47517860"]]),_t="",re=o=>(e.pushScopeId("data-v-9fe2aadf"),o=o(),e.popScopeId(),o),ie=["onClick"],ce={class:"dialoghead"},de={class:"headslot"},_e=[re(()=>e.createElementVNode("i",{class:"iconfont icon-chacha logosize"},null,-1))],me={class:"dialogcontent"},B=h(Object.assign({name:"MyDialog"},{props:["modelValue","title","width","top","center"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;function n(){a("update:modelValue",!1)}return(l,s)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",{class:"mydialog",onClick:e.withModifiers(n,["self"])},[e.createElementVNode("div",{class:"dialogwrap",style:e.normalizeStyle({width:e.unref(t).width,"margin-top":e.unref(t).top})},[e.createElementVNode("div",ce,[e.createElementVNode("div",de,[e.createElementVNode("span",{class:e.normalizeClass(["headtitle",{"is-center":e.unref(t).center==""}])},e.toDisplayString(e.unref(t).title),3)]),e.createElementVNode("div",{class:"iconremove",onClick:n},_e)]),e.createElementVNode("div",me,[e.renderSlot(l.$slots,"default",{},void 0,!0)]),e.createElementVNode("div",{class:e.normalizeClass(["dialogfoot",{"is-center":e.unref(t).center==""}])},[e.renderSlot(l.$slots,"footer",{},void 0,!0)],2)],4)],8,ie)),[[e.vShow,e.unref(t).modelValue]])}}),[["__scopeId","data-v-9fe2aadf"]]),ut="",I=o=>(e.pushScopeId("data-v-a888195d"),o=o(),e.popScopeId(),o),pe={class:"Myinput clearfix"},fe=["type","name","placeholder","disabled","maxlength"],ue=["name","placeholder","disabled","maxlength"],he=[I(()=>e.createElementVNode("i",{class:"iconfont icon-chacha clearlogo"},null,-1))],ge=[I(()=>e.createElementVNode("i",{class:"iconfont icon-yanjing clearlogo"},null,-1))],ye={class:"inputclear"},$e={class:"inputcountinner"},z=h(Object.assign({name:"MyInput"},{props:["modelValue","type","placeholder","disabled","clearable","showPassword","maxlength","showwordlimit","name"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;var n=e.computed({get(){return t.modelValue},set(_){t.disabled!=""&&a("update:modelValue",_)}}),l=e.ref(t.showPassword==""),s=function(){l.value=!l.value};return(_,r)=>(e.openBlock(),e.createElementBlock("div",pe,[e.unref(t).type!="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,class:e.normalizeClass(["inputinner",{"is-disabled":e.unref(t).disabled==""}]),type:e.unref(t).showPassword==""?e.unref(l)?"password":"text":e.unref(t).type,name:e.unref(t).name,placeholder:e.unref(t).placeholder,"onUpdate:modelValue":r[0]||(r[0]=c=>e.isRef(n)?n.value=c:n=c),disabled:e.unref(t).disabled=="",maxlength:e.unref(t).maxlength},null,10,fe)),[[e.vModelDynamic,e.unref(n)]]):e.createCommentVNode("",!0),e.unref(t).type=="textarea"?e.withDirectives((e.openBlock(),e.createElementBlock("textarea",{key:1,class:e.normalizeClass(["inputinner inputtextarea",{"is-disabled":e.unref(t).disabled==""}]),name:e.unref(t).name,placeholder:e.unref(t).placeholder,"onUpdate:modelValue":r[1]||(r[1]=c=>e.isRef(n)?n.value=c:n=c),disabled:e.unref(t).disabled=="",maxlength:e.unref(t).maxlength},`\r
        `,10,ue)),[[e.vModelText,e.unref(n)]]):e.createCommentVNode("",!0),e.withDirectives(e.createElementVNode("span",{class:"inputclear",onClick:r[2]||(r[2]=c=>e.isRef(n)?n.value="":n="")},he,512),[[e.vShow,e.unref(n).length&&e.unref(t).clearable==""]]),e.withDirectives(e.createElementVNode("span",{class:"inputclear",onClick:r[3]||(r[3]=(...c)=>e.unref(s)&&e.unref(s)(...c))},ge,512),[[e.vShow,e.unref(t).showPassword==""]]),e.withDirectives(e.createElementVNode("span",ye,[e.createElementVNode("span",$e,e.toDisplayString(e.unref(n).length)+"/"+e.toDisplayString(e.unref(t).maxlength),1)],512),[[e.vShow,e.unref(t).showwordlimit==""]])]))}}),[["__scopeId","data-v-a888195d"]]),bt="",be={class:"content"},D=h(Object.assign({name:"MyOption"},{props:["label","value"],setup(o){const a=o;var t=e.inject("choose");return(n,l)=>(e.openBlock(),e.createElementBlock("div",{class:"option",onClick:l[0]||(l[0]=s=>e.unref(t)(e.unref(a).value))},[e.createElementVNode("span",be,e.toDisplayString(e.unref(a).label),1)]))}}),[["__scopeId","data-v-8316b196"]]),wt="",j=o=>(e.pushScopeId("data-v-65f68caa"),o=o(),e.popScopeId(),o),Ve={class:"mypagination"},ke=[j(()=>e.createElementVNode("i",{class:"iconfont icon-left"},null,-1))],we={class:"numcontent"},Ee={class:"left"},Ne={class:"mid"},xe=["onClick"],Se={class:"right"},Me=[j(()=>e.createElementVNode("i",{class:"iconfont icon-right"},null,-1))],O=h(Object.assign({name:"MyPagination"},{props:{background:{type:null},total:{type:[Number,String]},modelValue:{type:Number},pagesizes:{type:[Number,String],default:10},pagercount:{type:[Number,String],default:7}},emits:["update:modelValue"],setup(o,{emit:a}){const t=o;var n=e.computed({get(){return t.modelValue},set(p){a("update:modelValue",p)}}),l=e.computed(()=>Math.ceil(Number(t.total)/t.pagesizes)),s=e.computed(()=>{var p=[];if(!c.value){for(let d=1;d<=t.pagercount-1;d++)p.push(d);return p}if(!y.value){for(let d=l.value-t.pagercount+2;d<=l.value;d++)p.push(d);return p}for(let d=n.value-(t.pagercount-3)/2;d<=n.value+(t.pagercount-3)/2;d++)p.push(d);return p});function _(){n.value<l.value&&n.value++}function r(){n.value>1&&n.value--}var c=e.computed(()=>!(n.value<Math.ceil(t.pagercount/2))),y=e.computed(()=>!(n.value>l.value-Math.ceil(t.pagercount/2)));function f(p){p<=1&&(p=1),p>=l.value&&(p=l.value),n.value=p}var g=e.ref(!1),i=e.ref(!1);return(p,d)=>(e.openBlock(),e.createElementBlock("div",Ve,[e.createElementVNode("div",{class:e.normalizeClass(["leftarrow",{"is-disable":e.unref(n)==1,"is-background":e.unref(t).background==""}]),onClick:r},ke,2),e.createElementVNode("div",we,[e.withDirectives(e.createElementVNode("div",Ee,[e.createElementVNode("div",{class:e.normalizeClass(["numitem",{"is-background":e.unref(t).background==""}]),onClick:d[0]||(d[0]=u=>f(1))},"1",2),e.createElementVNode("div",{class:e.normalizeClass(["numitem",{"is-background":e.unref(t).background==""}]),onMouseenter:d[2]||(d[2]=u=>e.isRef(g)?g.value=!0:g=!0),onMouseleave:d[3]||(d[3]=u=>e.isRef(g)?g.value=!1:g=!1)},[e.withDirectives(e.createElementVNode("div",null,"...",512),[[e.vShow,!e.unref(g)]]),e.withDirectives(e.createElementVNode("div",{onClick:d[1]||(d[1]=u=>f(e.unref(n)-e.unref(t).pagercount-2))},"<<",512),[[e.vShow,e.unref(g)]])],34)],512),[[e.vShow,e.unref(c)]]),e.createElementVNode("div",Ne,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),(u,V)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["numitem",{"item-active":u==e.unref(n)&&e.unref(t).background!="","is-background-active":u==e.unref(n)&&e.unref(t).background=="","is-background":e.unref(t).background==""}]),onClick:Ft=>f(u),key:V},e.toDisplayString(u),11,xe))),128))]),e.withDirectives(e.createElementVNode("div",Se,[e.createElementVNode("div",{class:e.normalizeClass(["numitem",{"is-background":e.unref(t).background==""}]),onMouseenter:d[5]||(d[5]=u=>e.isRef(i)?i.value=!0:i=!0),onMouseleave:d[6]||(d[6]=u=>e.isRef(i)?i.value=!1:i=!1)},[e.withDirectives(e.createElementVNode("div",null,"...",512),[[e.vShow,!e.unref(i)]]),e.withDirectives(e.createElementVNode("div",{onClick:d[4]||(d[4]=u=>f(e.unref(n)+Number(e.unref(t).pagercount)-2))},">>",512),[[e.vShow,e.unref(i)]])],34),e.createElementVNode("div",{class:e.normalizeClass(["numitem",{"is-background":e.unref(t).background==""}]),onClick:d[7]||(d[7]=u=>f(e.unref(l)))},e.toDisplayString(e.unref(l)),3)],512),[[e.vShow,e.unref(y)]])]),e.createElementVNode("div",{class:e.normalizeClass(["rightarrow",{"is-disable":e.unref(n)==e.unref(l),"is-background":e.unref(t).background==""}]),onClick:_},Me,2)]))}}),[["__scopeId","data-v-65f68caa"]]),Mt="",Ce={class:"myratioinput"},Be=["name","value","disabled"],Ie={class:"myratiolabel"},ze={key:0},R=h(Object.assign({name:"MyRadio"},{props:["label","disabled","border","size","name","modelValue"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;var{change:n,groupnum:l}=e.inject("RadioGroup",{change:"",groupnum:""}),s=e.computed({get(){return l!=""?l.value:t.modelValue},set(_){t.disabled||(l?n(_):a("update:modelValue",_))}});return(_,r)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass(["myratio",[`myratio-${e.unref(t).size}`,{"is-disabled":e.unref(t).disabled=="","is-border":e.unref(t).border==""}]])},[e.createElementVNode("span",Ce,[e.withDirectives(e.createElementVNode("input",{type:"radio",name:e.unref(t).name,value:e.unref(t).label,disabled:e.unref(t).disabled,"onUpdate:modelValue":r[0]||(r[0]=c=>e.isRef(s)?s.value=c:s=c)},null,8,Be),[[e.vModelRadio,e.unref(s)]])]),e.createElementVNode("span",Ie,[e.renderSlot(_.$slots,"default",{},void 0,!0),_.$slots.default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("span",ze,e.toDisplayString(e.unref(t).label),1))])],2))}}),[["__scopeId","data-v-27b8c1d3"]]),It="",P=h(Object.assign({name:"MySelect"},{props:{modelValue:[String,Number,Boolean],width:{type:Number,default:180},height:{type:Number,default:180}},emits:["update:modelValue"],setup(o,{emit:a}){const t=o;e.provide("choose",y);var n=e.computed({get(){return t.modelValue},set(f){a("update:modelValue",f)}}),l=e.computed(()=>n.value==""?"Select":n.value),s=e.ref(!1),_=e.ref(null),r=e.ref(null);function c(){document.addEventListener("click",function(f){_.value&&(_.value.contains(f.target)||r.value.contains(f.target)?console.log(1111):(console.log(2222),s.value=!1))})}function y(f){a("update:modelValue",f)}return e.onMounted(()=>{c()}),(f,g)=>(e.openBlock(),e.createElementBlock("div",{class:"myselect",style:e.normalizeStyle({width:e.unref(t).width+"px"})},[e.createElementVNode("div",{class:e.normalizeClass(["myselect-input",{"is-showlist":e.unref(s)}]),onClick:g[0]||(g[0]=i=>e.isRef(s)?s.value=!e.unref(s):s=!e.unref(s)),ref_key:"selectpart",ref:_,style:e.normalizeStyle({width:e.unref(t).width+"px",height:e.unref(t).height+"px"})},[e.createElementVNode("div",{class:e.normalizeClass(["selectinfo",{"no-select":e.unref(l)=="Select"}])},e.toDisplayString(e.unref(l)),3)],6),e.createElementVNode("div",{class:"selectoptions",ref_key:"dropoutpart",ref:r},[e.createElementVNode("div",{class:"option_list",style:e.normalizeStyle({height:e.unref(s)?"auto":"0px"})},[e.renderSlot(f.$slots,"default",{},void 0,!0)],4)],512)],4))}}),[["__scopeId","data-v-a2297829"]]),jt="",De={class:"activetext"},je={class:"inactivetext"},L=h(Object.assign({name:"MySwitch"},{props:["modelValue","disabled","activecolor","inactivecolor","activetext","inactivetext"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;function n(){t.disabled!=""&&a("update:modelValue",!t.modelValue)}return(l,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["myswitch",{"is-disabled":e.unref(t).disabled==""}]),onClick:s[0]||(s[0]=_=>n())},[e.createElementVNode("div",De,e.toDisplayString(e.unref(t).activetext),1),e.createElementVNode("div",{class:e.normalizeClass(["switchinput",[e.unref(t).modelValue?"activecolor":"inactivecolor"]]),style:e.normalizeStyle({"background-color":e.unref(t).modelValue?e.unref(t).activecolor:e.unref(t).inactivecolor})},[e.createElementVNode("div",{class:e.normalizeClass(["switchkey",[e.unref(t).modelValue?"keyleft":"keyright"]]),style:e.normalizeStyle({"border-color":e.unref(t).modelValue?e.unref(t).activecolor:e.unref(t).inactivecolor})},null,6)],6),e.createElementVNode("div",je,e.toDisplayString(e.unref(t).inactivetext),1)],2))}}),[["__scopeId","data-v-02aa4ff1"]]),Oe={class:"myradio-grounp"},T=Object.assign({name:"MyRadioGroup"},{props:["modelValue"],emits:["update:modelValue"],setup(o,{emit:a}){const t=o;function n(s){a("update:modelValue",s)}var l=e.computed(()=>t.modelValue);return e.provide("RadioGroup",{change:n,groupnum:l}),(s,_)=>(e.openBlock(),e.createElementBlock("div",Oe,[e.renderSlot(s.$slots,"default")]))}}),Lt="",Re={class:"type"},Pe={class:"message"},Le=h(Object.assign({name:"MyMessage"},{props:["type","message"],setup(o){const a=o;return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["mymessage",{"is-success":e.unref(a).type=="success","is-warning":e.unref(a).type=="warning","is-message":e.unref(a).type=="message","is-error":e.unref(a).type=="error"}])},[e.createElementVNode("span",Re,e.toDisplayString(e.unref(a).type)+":",1),e.createElementVNode("span",Pe,e.toDisplayString(e.unref(a).message),1)],2))}}),[["__scopeId","data-v-e40fe3e5"]]),b=document.createElement("div");document.body.appendChild(b);let U=null;function Te({type:o,message:a}){const t=e.createVNode(Le,{type:o,message:a});e.render(t,b),clearTimeout(U),U=setTimeout(()=>{e.render(null,b)},3e3)}const Ue=[k,w,N,x,M,C,B,z,$,D,O,R,P,L,T],Ge={install:function(o){o.config.globalProperties.$MyMessage=Te,Ue.forEach(a=>{o.component(a.name,a)})}};m.CheckBox=k,m.CheckBoxGroup=w,m.InputNum=N,m.MyButton=x,m.MyCarousel=M,m.MyCarouselItem=C,m.MyDialog=B,m.MyIcon=$,m.MyInput=z,m.MyOption=D,m.MyPagination=O,m.MyRadio=R,m.MyRadioGroup=T,m.MySelect=P,m.MySwitch=L,m.default=Ge,Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});