var l=(o,e)=>()=>(o&&(e=o(o=0)),e);var sp=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);function Zi(){let o=new WeakMap;return function(e){let t=o.get(e);if(t===void 0){let i=Reflect.getPrototypeOf(e);for(;t===void 0&&i!==null;)t=o.get(i),i=Reflect.getPrototypeOf(i);t=t===void 0?[]:t.slice(0),o.set(e,t)}return t}}var Ye,Fn,zt,_e,ct=l(()=>{Ye=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ye.trustedTypes===void 0&&(Ye.trustedTypes={createPolicy:(o,e)=>e});Fn={configurable:!1,enumerable:!1,writable:!1};Ye.FAST===void 0&&Reflect.defineProperty(Ye,"FAST",Object.assign({value:Object.create(null)},Fn));zt=Ye.FAST;if(zt.getById===void 0){let o=Object.create(null);Reflect.defineProperty(zt,"getById",Object.assign({value(e,t){let i=o[e];return i===void 0&&(i=t?o[e]=t():null),i}},Fn))}_e=Object.freeze([])});var es,An,ts,Ei,is,Ji,v,ze=l(()=>{ct();es=Ye.FAST.getById(1,()=>{let o=[],e=[];function t(){if(e.length)throw e.shift()}function i(a){try{a.call()}catch(d){e.push(d),setTimeout(t,0)}}function s(){let d=0;for(;d<o.length;)if(i(o[d]),d++,d>1024){for(let h=0,p=o.length-d;h<p;h++)o[h]=o[h+d];o.length-=d,d=0}o.length=0}function n(a){o.length<1&&Ye.requestAnimationFrame(s),o.push(a)}return Object.freeze({enqueue:n,process:s})}),An=Ye.trustedTypes.createPolicy("fast-html",{createHTML:o=>o}),ts=An,Ei=`fast-${Math.random().toString(36).substring(2,8)}`,is=`${Ei}{`,Ji=`}${Ei}`,v=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(o){if(ts!==An)throw new Error("The HTML policy can only be set once.");ts=o},createHTML(o){return ts.createHTML(o)},isMarker(o){return o&&o.nodeType===8&&o.data.startsWith(Ei)},extractDirectiveIndexFromMarker(o){return parseInt(o.data.replace(`${Ei}:`,""))},createInterpolationPlaceholder(o){return`${is}${o}${Ji}`},createCustomAttributePlaceholder(o,e){return`${o}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(o){return`<!--${Ei}:${o}-->`},queueUpdate:es.enqueue,processUpdates:es.process,nextUpdate(){return new Promise(es.enqueue)},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)},removeChildNodes(o){for(let e=o.firstChild;e!==null;e=o.firstChild)o.removeChild(e)},createTemplateWalker(o){return document.createTreeWalker(o,133,null,!1)}})});var $t,ai,Oi=l(()=>{$t=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let i=t.indexOf(e);i!==-1&&t.splice(i,1)}}notify(e){let t=this.spillover,i=this.source;if(t===void 0){let s=this.sub1,n=this.sub2;s!==void 0&&s.handleChange(i,e),n!==void 0&&n.handleChange(i,e)}else for(let s=0,n=t.length;s<n;++s)t[s].handleChange(i,e)}},ai=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let i=this.subscribers[e];i!==void 0&&i.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var i;if(t){let s=this.subscribers[t];s===void 0&&(this.subscribers[t]=s=new $t(this.source)),s.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new $t(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){let s=this.subscribers[t];s!==void 0&&s.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}});function u(o,e){C.defineProperty(o,e)}function Pn(o,e,t){return Object.assign({},t,{get:function(){return C.trackVolatile(),t.get.apply(this)}})}var C,Ln,It,Tt,et=l(()=>{ze();ct();Oi();C=zt.getById(2,()=>{let o=/(:|&&|\|\||if)/,e=new WeakMap,t=v.queueUpdate,i,s=p=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(p){let f=p.$fastController||e.get(p);return f===void 0&&(Array.isArray(p)?f=s(p):e.set(p,f=new ai(p))),f}let a=Zi();class d{constructor(f){this.name=f,this.field=`_${f}`,this.callback=`${f}Changed`}getValue(f){return i!==void 0&&i.watch(f,this.name),f[this.field]}setValue(f,m){let x=this.field,F=f[x];if(F!==m){f[x]=m;let z=f[this.callback];typeof z=="function"&&z.call(f,F,m),n(f).notify(this.name)}}}class h extends $t{constructor(f,m,x=!1){super(f,m),this.binding=f,this.isVolatileBinding=x,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(f,m){this.needsRefresh&&this.last!==null&&this.disconnect();let x=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let F=this.binding(f,m);return i=x,F}disconnect(){if(this.last!==null){let f=this.first;for(;f!==void 0;)f.notifier.unsubscribe(this,f.propertyName),f=f.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(f,m){let x=this.last,F=n(f),z=x===null?this.first:{};if(z.propertySource=f,z.propertyName=m,z.notifier=F,F.subscribe(this,m),x!==null){if(!this.needsRefresh){let ee;i=void 0,ee=x.propertySource[x.propertyName],i=this,f===ee&&(this.needsRefresh=!0)}x.next=z}this.last=z}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let f=this.first;return{next:()=>{let m=f;return m===void 0?{value:void 0,done:!0}:(f=f.next,{value:m,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(p){s=p},getNotifier:n,track(p,f){i!==void 0&&i.watch(p,f)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(p,f){n(p).notify(f)},defineProperty(p,f){typeof f=="string"&&(f=new d(f)),a(p).push(f),Reflect.defineProperty(p,f.name,{enumerable:!0,get:function(){return f.getValue(this)},set:function(m){f.setValue(this,m)}})},getAccessors:a,binding(p,f,m=this.isVolatileBinding(p)){return new h(p,f,m)},isVolatileBinding(p){return o.test(p.toString())}})});Ln=zt.getById(3,()=>{let o=null;return{get(){return o},set(e){o=e}}}),It=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Ln.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Ln.set(e)}};C.defineProperty(It.prototype,"index");C.defineProperty(It.prototype,"length");Tt=Object.seal(new It)});var St,li,Et,Ot=l(()=>{ze();St=class{constructor(){this.targetIndex=0}},li=class extends St{constructor(){super(...arguments),this.createPlaceholder=v.createInterpolationPlaceholder}},Et=class extends St{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return v.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}});function rp(o,e){this.source=o,this.context=e,this.bindingObserver===null&&(this.bindingObserver=C.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(o,e))}function np(o,e){this.source=o,this.context=e,this.target.addEventListener(this.targetName,this)}function ap(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function lp(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let o=this.target.$fastView;o!==void 0&&o.isComposed&&(o.unbind(),o.needsBindOnly=!0)}function cp(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function dp(o){v.setAttribute(this.target,this.targetName,o)}function hp(o){v.setBooleanAttribute(this.target,this.targetName,o)}function up(o){if(o==null&&(o=""),o.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=o.create():this.target.$fastTemplate!==o&&(e.isComposed&&(e.remove(),e.unbind()),e=o.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=o)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=o}}function pp(o){this.target[this.targetName]=o}function fp(o){let e=this.classVersions||Object.create(null),t=this.target,i=this.version||0;if(o!=null&&o.length){let s=o.split(/\s+/);for(let n=0,a=s.length;n<a;++n){let d=s[n];d!==""&&(e[d]=i,t.classList.add(d))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(let s in e)e[s]===i&&t.classList.remove(s)}}var Ht,os,Ki=l(()=>{ze();et();Ot();Ht=class extends li{constructor(e){super(),this.binding=e,this.bind=rp,this.unbind=ap,this.updateTarget=dp,this.isBindingVolatile=C.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=pp,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(i,s)=>v.createHTML(t(i,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=hp;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=np,this.unbind=cp;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=fp);break}}targetAtContent(){this.updateTarget=up,this.unbind=lp}createBehavior(e){return new os(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},os=class{constructor(e,t,i,s,n,a,d){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=s,this.unbind=n,this.updateTarget=a,this.targetName=d}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){It.setEvent(e);let t=this.binding(this.source,this.context);It.setEvent(null),t!==!0&&e.preventDefault()}}});function mp(o){if(o.length===1)return o[0];let e,t=o.length,i=o.map(a=>typeof a=="string"?()=>a:(e=a.targetName||e,a.binding)),s=(a,d)=>{let h="";for(let p=0;p<t;++p)h+=i[p](a,d);return h},n=new Ht(s);return n.targetName=e,n}function Bn(o,e){let t=e.split(is);if(t.length===1)return null;let i=[];for(let s=0,n=t.length;s<n;++s){let a=t[s],d=a.indexOf(Ji),h;if(d===-1)h=a;else{let p=parseInt(a.substring(0,d));i.push(o.directives[p]),h=a.substring(d+bp)}h!==""&&i.push(h)}return i}function Mn(o,e,t=!1){let i=e.attributes;for(let s=0,n=i.length;s<n;++s){let a=i[s],d=a.value,h=Bn(o,d),p=null;h===null?t&&(p=new Ht(()=>d),p.targetName=a.name):p=mp(h),p!==null&&(e.removeAttributeNode(a),s--,n--,o.addFactory(p))}}function gp(o,e,t){let i=Bn(o,e.textContent);if(i!==null){let s=e;for(let n=0,a=i.length;n<a;++n){let d=i[n],h=n===0?e:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);typeof d=="string"?h.textContent=d:(h.textContent=" ",o.captureContentBinding(d)),s=h,o.targetIndex++,h!==e&&t.nextNode()}o.targetIndex--}}function Vn(o,e){let t=o.content;document.adoptNode(t);let i=Ri.borrow(e);Mn(i,o,!0);let s=i.behaviorFactories;i.reset();let n=v.createTemplateWalker(t),a;for(;a=n.nextNode();)switch(i.targetIndex++,a.nodeType){case 1:Mn(i,a);break;case 3:gp(i,a,n);break;case 8:v.isMarker(a)&&i.addFactory(e[v.extractDirectiveIndexFromMarker(a)])}let d=0;(v.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),d=-1);let h=i.behaviorFactories;return i.release(),{fragment:t,viewBehaviorFactories:h,hostBehaviorFactories:s,targetOffset:d}}var ss,Ri,bp,rs=l(()=>{ze();Ki();ss=null,Ri=class{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ss=this}static borrow(e){let t=ss||new Ri;return t.directives=e,t.reset(),ss=null,t}};bp=Ji.length});var ns,ci,eo=l(()=>{ns=document.createRange(),ci=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let i=e.parentNode,s=this.firstChild,n;for(;s!==t;)n=s.nextSibling,i.insertBefore(s,e),s=n;i.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,e.appendChild(i),i=s;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,e.removeChild(i),i=s;e.removeChild(t);let n=this.behaviors,a=this.source;for(let d=0,h=n.length;d<h;++d)n[d].unbind(a)}bind(e,t){let i=this.behaviors;if(this.source!==e)if(this.source!==null){let s=this.source;this.source=e,this.context=t;for(let n=0,a=i.length;n<a;++n){let d=i[n];d.unbind(s),d.bind(e,t)}}else{this.source=e,this.context=t;for(let s=0,n=i.length;s<n;++s)i[s].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let i=0,s=e.length;i<s;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){ns.setStartBefore(e[0].firstChild),ns.setEndAfter(e[e.length-1].lastChild),ns.deleteContents();for(let t=0,i=e.length;t<i;++t){let s=e[t],n=s.behaviors,a=s.source;for(let d=0,h=n.length;d<h;++d)n[d].unbind(a)}}}}});function k(o,...e){let t=[],i="";for(let s=0,n=o.length-1;s<n;++s){let a=o[s],d=e[s];if(i+=a,d instanceof to){let h=d;d=()=>h}if(typeof d=="function"&&(d=new Ht(d)),d instanceof li){let h=vp.exec(a);h!==null&&(d.targetName=h[2])}d instanceof St?(i+=d.createPlaceholder(t.length),t.push(d)):i+=d}return i+=o[o.length-1],new to(i,t)}var to,vp,_n=l(()=>{ze();et();rs();eo();Ot();Ki();to=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let p,f=this.html;if(typeof f=="string"){p=document.createElement("template"),p.innerHTML=v.createHTML(f);let x=p.content.firstElementChild;x!==null&&x.tagName==="TEMPLATE"&&(p=x)}else p=f;let m=Vn(p,this.directives);this.fragment=m.fragment,this.viewBehaviorFactories=m.viewBehaviorFactories,this.hostBehaviorFactories=m.hostBehaviorFactories,this.targetOffset=m.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,s=new Array(this.behaviorCount),n=v.createTemplateWalker(t),a=0,d=this.targetOffset,h=n.nextNode();for(let p=i.length;a<p;++a){let f=i[a],m=f.targetIndex;for(;h!==null;)if(d===m){s[a]=f.createBehavior(h);break}else h=n.nextNode(),d++}if(this.hasHostBehaviors){let p=this.hostBehaviorFactories;for(let f=0,m=p.length;f<m;++f,++a)s[a]=p[f].createBehavior(e)}return new ci(t,s)}render(e,t,i){typeof t=="string"&&(t=document.getElementById(t)),i===void 0&&(i=t);let s=this.create(i);return s.bind(e,Tt),s.appendTo(t),s}},vp=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/});function cs(o){return o.map(e=>e instanceof re?cs(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function zn(o){return o.map(e=>e instanceof re?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}function yp(){return`fast-style-class-${++xp}`}var re,Hn,Nn,as,xp,ls,io=l(()=>{ze();re=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};re.create=(()=>{if(v.supportsAdoptedStyleSheets){let o=new Map;return e=>new as(e,o)}return o=>new ls(o)})();Hn=(o,e)=>{o.adoptedStyleSheets=[...o.adoptedStyleSheets,...e]},Nn=(o,e)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(v.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Hn=(o,e)=>{o.adoptedStyleSheets.push(...e)},Nn=(o,e)=>{for(let t of e){let i=o.adoptedStyleSheets.indexOf(t);i!==-1&&o.adoptedStyleSheets.splice(i,1)}}}catch{}as=class extends re{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=zn(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=cs(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let s=t.get(i);return s===void 0&&(s=new CSSStyleSheet,s.replaceSync(i),t.set(i,s)),s})}return this._styleSheets}addStylesTo(e){Hn(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Nn(e,this.styleSheets),super.removeStylesFrom(e)}},xp=0;ls=class extends re{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=zn(e),this.styleSheets=cs(e),this.styleClass=yp()}addStylesTo(e){let t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let s=0;s<t.length;s++){let n=document.createElement("style");n.innerHTML=t[s],n.className=i,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,s=t.length;i<s;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}});function c(o,e){let t;function i(s,n){arguments.length>1&&(t.property=n),Di.locate(s.constructor).push(t)}if(arguments.length>1){t={},i(o,e);return}return t=o===void 0?{}:o,i}var Di,Ut,O,Nt,ds=l(()=>{et();ze();ct();Di=Object.freeze({locate:Zi()}),Ut={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}},O={toView(o){if(o==null)return null;let e=o*1;return isNaN(e)?null:e.toString()},fromView(o){if(o==null)return null;let e=o*1;return isNaN(e)?null:e}},Nt=class{constructor(e,t,i=t.toLowerCase(),s="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=s,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,s==="boolean"&&n===void 0&&(this.converter=Ut)}setValue(e,t){let i=e[this.fieldName],s=this.converter;s!==void 0&&(t=s.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return C.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,i=this.guards;i.has(e)||t==="fromView"||v.queueUpdate(()=>{i.add(e);let s=e[this.fieldName];switch(t){case"reflect":let n=this.converter;v.setAttribute(e,this.attribute,n!==void 0?n.toView(s):s);break;case"boolean":v.setBooleanAttribute(e,this.attribute,s);break}i.delete(e)})}static collect(e,...t){let i=[];t.push(Di.locate(e));for(let s=0,n=t.length;s<n;++s){let a=t[s];if(a!==void 0)for(let d=0,h=a.length;d<h;++d){let p=a[d];typeof p=="string"?i.push(new Nt(e,p)):i.push(new Nt(e,p.property,p.attribute,p.mode,p.converter))}}return i}}});var Un,jn,hs,tt,oo=l(()=>{ct();et();io();ds();Un={mode:"open"},jn={},hs=zt.getById(4,()=>{let o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)}})}),tt=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let i=Nt.collect(e,t.attributes),s=new Array(i.length),n={},a={};for(let d=0,h=i.length;d<h;++d){let p=i[d];s[d]=p.attribute,n[p.name]=p,a[p.attribute]=p}this.attributes=i,this.observedAttributes=s,this.propertyLookup=n,this.attributeLookup=a,this.shadowOptions=t.shadowOptions===void 0?Un:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Un),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?jn:Object.assign(Object.assign({},jn),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?re.create(t.styles):t.styles instanceof re?t.styles:re.create([t.styles])}get isDefined(){return!!hs.getByType(this.type)}define(e=customElements){let t=this.type;if(hs.register(this)){let i=this.attributes,s=t.prototype;for(let n=0,a=i.length;n<a;++n)C.defineProperty(s,i[n]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};tt.forType=hs.getByType});function us(o){return o.shadowRoot||qn.get(o)||null}var qn,wp,di,ps=l(()=>{ze();Oi();et();oo();qn=new WeakMap,wp={bubbles:!0,composed:!0,cancelable:!0};di=class extends ai{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let i=t.shadowOptions;if(i!==void 0){let n=e.attachShadow(i);i.mode==="closed"&&qn.set(e,n)}let s=C.getAccessors(e);if(s.length>0){let n=this.boundObservables=Object.create(null);for(let a=0,d=s.length;a<d;++a){let h=s[a].name,p=e[h];p!==void 0&&(delete e[h],n[h]=p)}}}get isConnected(){return C.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,C.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=us(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let i=e.behaviors;e.addStylesTo(t),i!==null&&this.addBehaviors(i)}}removeStyles(e){let t=us(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let i=e.behaviors;e.removeStylesFrom(t),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];t.has(a)?t.set(a,t.get(a)+1):(t.set(a,1),s.push(a))}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].bind(n,Tt)}}removeBehaviors(e,t=!1){let i=this.behaviors;if(i===null)return;let s=e.length,n=[];for(let a=0;a<s;++a){let d=e[a];if(i.has(d)){let h=i.get(d)-1;h===0||t?i.delete(d)&&n.push(d):i.set(d,h)}}if(this._isConnected){let a=this.element;for(let d=0;d<n.length;++d)n[d].unbind(a)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Tt);let t=this.behaviors;if(t!==null)for(let[i]of t)i.bind(e,Tt);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let i=this.element;for(let[s]of t)s.unbind(i)}}onAttributeChangedCallback(e,t,i){let s=this.definition.attributeLookup[e];s!==void 0&&s.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},wp),i))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let s=Object.keys(t);for(let n=0,a=s.length;n<a;++n){let d=s[n];e[d]=t[d]}this.boundObservables=null}let i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,i=us(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||v.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let i=tt.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new di(e,i)}}});function Gn(o){return class extends o{constructor(){super(),di.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}var Rt,Wn=l(()=>{ps();oo();Rt=Object.assign(Gn(HTMLElement),{from(o){return Gn(o)},define(o,e){return new tt(o,e).define().type}})});var jt,fs=l(()=>{jt=class{createCSS(){return""}createBehavior(){}}});function Cp(o,e){let t=[],i="",s=[];for(let n=0,a=o.length-1;n<a;++n){i+=o[n];let d=e[n];if(d instanceof jt){let h=d.createBehavior();d=d.createCSS(),h&&s.push(h)}d instanceof re||d instanceof CSSStyleSheet?(i.trim()!==""&&(t.push(i),i=""),t.push(d)):i+=d}return i+=o[o.length-1],i.trim()!==""&&t.push(i),{styles:t,behaviors:s}}function S(o,...e){let{styles:t,behaviors:i}=Cp(o,e),s=re.create(t);return i.length&&s.withBehaviors(...i),s}var Yn=l(()=>{fs();io()});function He(o,e,t){return{index:o,removed:e,addedCount:t}}function kp(o,e,t,i,s,n){let a=n-s+1,d=t-e+1,h=new Array(a),p,f;for(let m=0;m<a;++m)h[m]=new Array(d),h[m][0]=m;for(let m=0;m<d;++m)h[0][m]=m;for(let m=1;m<a;++m)for(let x=1;x<d;++x)o[e+x-1]===i[s+m-1]?h[m][x]=h[m-1][x-1]:(p=h[m-1][x]+1,f=h[m][x-1]+1,h[m][x]=p<f?p:f);return h}function $p(o){let e=o.length-1,t=o[0].length-1,i=o[e][t],s=[];for(;e>0||t>0;){if(e===0){s.push(ms),t--;continue}if(t===0){s.push(bs),e--;continue}let n=o[e-1][t-1],a=o[e-1][t],d=o[e][t-1],h;a<d?h=a<n?a:n:h=d<n?d:n,h===n?(n===i?s.push(Qn):(s.push(Zn),i=n),e--,t--):h===a?(s.push(bs),e--,i=a):(s.push(ms),t--,i=d)}return s.reverse(),s}function Ip(o,e,t){for(let i=0;i<t;++i)if(o[i]!==e[i])return i;return t}function Tp(o,e,t){let i=o.length,s=e.length,n=0;for(;n<t&&o[--i]===e[--s];)n++;return n}function Sp(o,e,t,i){return e<t||i<o?-1:e===t||i===o?0:o<t?e<i?e-t:i-t:i<e?i-o:e-o}function gs(o,e,t,i,s,n){let a=0,d=0,h=Math.min(t-e,n-s);if(e===0&&s===0&&(a=Ip(o,i,h)),t===o.length&&n===i.length&&(d=Tp(o,i,h-a)),e+=a,s+=a,t-=d,n-=d,t-e===0&&n-s===0)return _e;if(e===t){let z=He(e,[],0);for(;s<n;)z.removed.push(i[s++]);return[z]}else if(s===n)return[He(e,[],t-e)];let p=$p(kp(o,e,t,i,s,n)),f=[],m,x=e,F=s;for(let z=0;z<p.length;++z)switch(p[z]){case Qn:m!==void 0&&(f.push(m),m=void 0),x++,F++;break;case Zn:m===void 0&&(m=He(x,[],0)),m.addedCount++,x++,m.removed.push(i[F]),F++;break;case ms:m===void 0&&(m=He(x,[],0)),m.addedCount++,x++;break;case bs:m===void 0&&(m=He(x,[],0)),m.removed.push(i[F]),F++;break}return m!==void 0&&f.push(m),f}function Ep(o,e,t,i){let s=He(e,t,i),n=!1,a=0;for(let d=0;d<o.length;d++){let h=o[d];if(h.index+=a,n)continue;let p=Sp(s.index,s.index+s.removed.length,h.index,h.index+h.addedCount);if(p>=0){o.splice(d,1),d--,a-=h.addedCount-h.removed.length,s.addedCount+=h.addedCount-p;let f=s.removed.length+h.removed.length-p;if(!s.addedCount&&!f)n=!0;else{let m=h.removed;if(s.index<h.index){let x=s.removed.slice(0,h.index-s.index);Xn.apply(x,m),m=x}if(s.index+s.removed.length>h.index+h.addedCount){let x=s.removed.slice(h.index+h.addedCount-s.index);Xn.apply(m,x)}s.removed=m,h.index<s.index&&(s.index=h.index)}}else if(s.index<h.index){n=!0,o.splice(d,0,s),d++;let f=s.addedCount-s.removed.length;h.index+=f,a+=f}}n||o.push(s)}function Op(o){let e=[];for(let t=0,i=o.length;t<i;t++){let s=o[t];Ep(e,s.index,s.removed,s.addedCount)}return e}function Jn(o,e){let t=[],i=Op(e);for(let s=0,n=i.length;s<n;++s){let a=i[s];if(a.addedCount===1&&a.removed.length===1){a.removed[0]!==o[a.index]&&t.push(a);continue}t=t.concat(gs(o,a.index,a.index+a.addedCount,a.removed,0,a.removed.length))}return t}var Qn,Zn,ms,bs,Xn,Kn=l(()=>{ct();Qn=0,Zn=1,ms=2,bs=3;Xn=Array.prototype.push});function vs(o,e){let t=o.index,i=e.length;return t>i?t=i-o.addedCount:t<0&&(t=i+o.removed.length+t-o.addedCount),t<0&&(t=0),o.index=t,o}function ta(){if(ea)return;ea=!0,C.setArrayObserverFactory(h=>new xs(h));let o=Array.prototype;if(o.$fastPatch)return;Reflect.defineProperty(o,"$fastPatch",{value:1,enumerable:!1});let e=o.pop,t=o.push,i=o.reverse,s=o.shift,n=o.sort,a=o.splice,d=o.unshift;o.pop=function(){let h=this.length>0,p=e.apply(this,arguments),f=this.$fastController;return f!==void 0&&h&&f.addSplice(He(this.length,[p],0)),p},o.push=function(){let h=t.apply(this,arguments),p=this.$fastController;return p!==void 0&&p.addSplice(vs(He(this.length-arguments.length,[],arguments.length),this)),h},o.reverse=function(){let h,p=this.$fastController;p!==void 0&&(p.flush(),h=this.slice());let f=i.apply(this,arguments);return p!==void 0&&p.reset(h),f},o.shift=function(){let h=this.length>0,p=s.apply(this,arguments),f=this.$fastController;return f!==void 0&&h&&f.addSplice(He(0,[p],0)),p},o.sort=function(){let h,p=this.$fastController;p!==void 0&&(p.flush(),h=this.slice());let f=n.apply(this,arguments);return p!==void 0&&p.reset(h),f},o.splice=function(){let h=a.apply(this,arguments),p=this.$fastController;return p!==void 0&&p.addSplice(vs(He(+arguments[0],h,arguments.length>2?arguments.length-2:0),this)),h},o.unshift=function(){let h=d.apply(this,arguments),p=this.$fastController;return p!==void 0&&p.addSplice(vs(He(0,[],arguments.length),this)),h}}var ea,xs,ia=l(()=>{ze();Kn();Oi();et();ea=!1;xs=class extends $t{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,v.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,v.queueUpdate(this))}flush(){let e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;let i=t===void 0?Jn(this.source,e):gs(this.source,0,this.source.length,t,0,t.length);this.notify(i)}}});function Q(o){return new Et("fast-ref",ys,o)}var ys,oa=l(()=>{Ot();ys=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}});var ws,sa=l(()=>{ws=o=>typeof o=="function"});function ra(o){return o===void 0?Rp:ws(o)?o:()=>o}function qt(o,e,t){let i=ws(o)?o:()=>o,s=ra(e),n=ra(t);return(a,d)=>i(a,d)?s(a,d):n(a,d)}var Rp,na=l(()=>{sa();Rp=()=>null});function Dp(o,e,t,i){o.bind(e[t],i)}function Fp(o,e,t,i){let s=Object.create(i);s.index=t,s.length=e.length,o.bind(e[t],s)}var Bm,Cs,dt,aa=l(()=>{ze();et();ia();ct();Ot();eo();Bm=Object.freeze({positioning:!1,recycle:!0});Cs=class{constructor(e,t,i,s,n,a){this.location=e,this.itemsBinding=t,this.templateBinding=s,this.options=a,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Dp,this.itemsBindingObserver=C.binding(t,this,i),this.templateBindingObserver=C.binding(s,this,n),a.positioning&&(this.bindView=Fp)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=_e;return}let t=this.itemsObserver,i=this.itemsObserver=C.getNotifier(this.items),s=t!==i;s&&t!==null&&t.unsubscribe(this),(s||e)&&i.subscribe(this)}updateViews(e){let t=this.childContext,i=this.views,s=this.bindView,n=this.items,a=this.template,d=this.options.recycle,h=[],p=0,f=0;for(let m=0,x=e.length;m<x;++m){let F=e[m],z=F.removed,ee=0,le=F.index,Ct=le+F.addedCount,kt=i.splice(F.index,z.length),ip=f=h.length+kt.length;for(;le<Ct;++le){let Dn=i[le],op=Dn?Dn.firstChild:this.location,ni;d&&f>0?(ee<=ip&&kt.length>0?(ni=kt[ee],ee++):(ni=h[p],p++),f--):ni=a.create(),i.splice(le,0,ni),s(ni,n,le,t),ni.insertBefore(op)}kt[ee]&&h.push(...kt.slice(ee))}for(let m=p,x=h.length;m<x;++m)h[m].dispose();if(this.options.positioning)for(let m=0,x=i.length;m<x;++m){let F=i[m].context;F.length=x,F.index=m}}refreshAllViews(e=!1){let t=this.items,i=this.childContext,s=this.template,n=this.location,a=this.bindView,d=t.length,h=this.views,p=h.length;if((d===0||e||!this.options.recycle)&&(ci.disposeContiguousBatch(h),p=0),p===0){this.views=h=new Array(d);for(let f=0;f<d;++f){let m=s.create();a(m,t,f,i),h[f]=m,m.insertBefore(n)}}else{let f=0;for(;f<d;++f)if(f<p){let x=h[f];a(x,t,f,i)}else{let x=s.create();a(x,t,f,i),h.push(x),x.insertBefore(n)}let m=h.splice(f,p-f);for(f=0,d=m.length;f<d;++f)m[f].dispose()}}unbindAllViews(){let e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}},dt=class extends St{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=v.createBlockPlaceholder,ta(),this.isItemsBindingVolatile=C.isVolatileBinding(e),this.isTemplateBindingVolatile=C.isVolatileBinding(t)}createBehavior(e){return new Cs(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}});function Gt(o){return o?function(e,t,i){return e.nodeType===1&&e.matches(o)}:function(e,t,i){return e.nodeType===1}}var hi,so=l(()=>{et();ct();hi=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=C.getAccessors(e).some(i=>i.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(_e),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}});function J(o){return typeof o=="string"&&(o={property:o}),new Et("fast-slotted",ks,o)}var ks,la=l(()=>{Ot();so();ks=class extends hi{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}});function ro(o){return typeof o=="string"&&(o={property:o}),new Et("fast-children",$s,o)}var $s,ca=l(()=>{Ot();so();$s=class extends hi{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}});var b=l(()=>{ct();_n();Wn();oo();ds();ps();rs();io();Yn();fs();eo();et();Oi();ze();Ki();Ot();oa();na();aa();la();ca();so()});var V,Ne,Ue,xb,yb,be=l(()=>{b();V=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},Ne=(o,e)=>k`
    <span
        part="end"
        ${Q("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${Q("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Ue=(o,e)=>k`
    <span
        part="start"
        ${Q("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Q("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,xb=k`
    <span part="end" ${Q("endContainer")}>
        <slot
            name="end"
            ${Q("end")}
            @slotchange="${o=>o.handleEndContentChange()}"
        ></slot>
    </span>
`,yb=k`
    <span part="start" ${Q("startContainer")}>
        <slot
            name="start"
            ${Q("start")}
            @slotchange="${o=>o.handleStartContentChange()}"
        ></slot>
    </span>
`});var da=l(()=>{});function r(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(a=o[d])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n}var $=l(()=>{});function Fi(o){let e=o.slice(),t=Object.keys(o),i=t.length,s;for(let n=0;n<i;++n)s=t[n],Ca(s)||(e[s]=o[s]);return e}function ua(o){return e=>Reflect.getOwnMetadata(o,e)}function co(o){return function(e){let t=function(i,s,n){N.inject(t)(i,s,n)};return t.$isResolver=!0,t.resolve=function(i,s){return o(e,i,s)},t}}function Mp(o){return function(e,t){t=!!t;let i=function(s,n,a){N.inject(i)(s,n,a)};return i.$isResolver=!0,i.resolve=function(s,n){return o(e,s,n,t)},i}}function Ds(o,e,t){N.inject(Ds)(o,e,t)}function xa(o,e){return e.getFactory(o).construct(e)}function fa(o){return this.get(o)}function Bp(o,e){return e(o)}function lo(o){return typeof o.register=="function"}function _p(o){return lo(o)&&typeof o.registerInRequestor=="boolean"}function ma(o){return _p(o)&&o.registerInRequestor}function zp(o){return o.prototype!==void 0}function wa(o){return function(e,t,i){if(Es.has(i))return Es.get(i);let s=o(e,t,i);return Es.set(i,s),s}}function no(o){if(o==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ba(o,e,t){if(o instanceof ke&&o.strategy===4){let i=o.state,s=i.length,n=new Array(s);for(;s--;)n[s]=i[s].resolve(e,t);return n}return[o.resolve(e,t)]}function va(o){return typeof o=="object"&&o!==null||typeof o=="function"}function Ca(o){switch(typeof o){case"number":return o>=0&&(o|0)===o;case"string":{let e=ao[o];if(e!==void 0)return e;let t=o.length;if(t===0)return ao[o]=!1;let i=0;for(let s=0;s<t;++s)if(i=o.charCodeAt(s),s===0&&i===48&&t>1||i<48||i>57)return ao[o]=!1;return ao[o]=!0}default:return!1}}var Is,Os,Ap,Ts,ha,pa,N,Lp,Ib,Pp,Tb,Sb,Eb,Ob,Rb,ke,Rs,Vp,Hp,ya,Ss,Wt,Es,Yt,ga,Np,ao,ho=l(()=>{b();Is=new Map;"metadata"in Reflect||(Reflect.metadata=function(o,e){return function(t){Reflect.defineMetadata(o,e,t)}},Reflect.defineMetadata=function(o,e,t){let i=Is.get(t);i===void 0&&Is.set(t,i=new Map),i.set(o,e)},Reflect.getOwnMetadata=function(o,e){let t=Is.get(e);if(t!==void 0)return t.get(o)});Os=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,wa(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:i,key:s}=this;return this.container=this.key=void 0,i.registerResolver(s,new ke(s,e,t))}};Ap=Object.freeze({none(o){throw Error(`${o.toString()} not registered, did you forget to add @singleton()?`)},singleton(o){return new ke(o,1,o)},transient(o){return new ke(o,2,o)}}),Ts=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ap.singleton})}),ha=new Map;pa=null,N=Object.freeze({createContainer(o){return new Wt(null,Object.assign({},Ts.default,o))},findResponsibleContainer(o){let e=o.$$container$$;return e&&e.responsibleForOwnerRequests?e:N.findParentContainer(o)},findParentContainer(o){let e=new CustomEvent(ya,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return o.dispatchEvent(e),e.detail.container||N.getOrCreateDOMContainer()},getOrCreateDOMContainer(o,e){return o?o.$$container$$||new Wt(o,Object.assign({},Ts.default,e,{parentLocator:N.findParentContainer})):pa||(pa=new Wt(null,Object.assign({},Ts.default,e,{parentLocator:()=>null})))},getDesignParamtypes:ua("design:paramtypes"),getAnnotationParamtypes:ua("di:paramtypes"),getOrCreateAnnotationParamTypes(o){let e=this.getAnnotationParamtypes(o);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],o),e},getDependencies(o){let e=ha.get(o);if(e===void 0){let t=o.inject;if(t===void 0){let i=N.getDesignParamtypes(o),s=N.getAnnotationParamtypes(o);if(i===void 0)if(s===void 0){let n=Object.getPrototypeOf(o);typeof n=="function"&&n!==Function.prototype?e=Fi(N.getDependencies(n)):e=[]}else e=Fi(s);else if(s===void 0)e=Fi(i);else{e=Fi(i);let n=s.length,a;for(let p=0;p<n;++p)a=s[p],a!==void 0&&(e[p]=a);let d=Object.keys(s);n=d.length;let h;for(let p=0;p<n;++p)h=d[p],Ca(h)||(e[h]=s[h])}}else e=Fi(t);ha.set(o,e)}return e},defineProperty(o,e,t,i=!1){let s=`$di_${e}`;Reflect.defineProperty(o,e,{get:function(){let n=this[s];if(n===void 0&&(n=(this instanceof HTMLElement?N.findResponsibleContainer(this):N.getOrCreateDOMContainer()).get(t),this[s]=n,i&&this instanceof Rt)){let d=this.$fastController,h=()=>{let f=N.findResponsibleContainer(this).get(t),m=this[s];f!==m&&(this[s]=n,d.notify(e))};d.subscribe({handleChange:h},"isConnected")}return n}})},createInterface(o,e){let t=typeof o=="function"?o:e,i=typeof o=="string"?o:o&&"friendlyName"in o&&o.friendlyName||ga,s=typeof o=="string"?!1:o&&"respectConnection"in o&&o.respectConnection||!1,n=function(a,d,h){if(a==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(d)N.defineProperty(a,d,n,s);else{let p=N.getOrCreateAnnotationParamTypes(a);p[h]=n}};return n.$isInterface=!0,n.friendlyName=i??"(anonymous)",t!=null&&(n.register=function(a,d){return t(new Os(a,d??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...o){return function(e,t,i){if(typeof i=="number"){let s=N.getOrCreateAnnotationParamTypes(e),n=o[0];n!==void 0&&(s[i]=n)}else if(t)N.defineProperty(e,t,o[0]);else{let s=i?N.getOrCreateAnnotationParamTypes(i.value):N.getOrCreateAnnotationParamTypes(e),n;for(let a=0;a<o.length;++a)n=o[a],n!==void 0&&(s[a]=n)}}},transient(o){return o.register=function(t){return Yt.transient(o,o).register(t)},o.registerInRequestor=!1,o},singleton(o,e=Pp){return o.register=function(i){return Yt.singleton(o,o).register(i)},o.registerInRequestor=e.scoped,o}}),Lp=N.createInterface("Container");Ib=N.inject,Pp={scoped:!1};Tb=Mp((o,e,t,i)=>t.getAll(o,i)),Sb=co((o,e,t)=>()=>t.get(o)),Eb=co((o,e,t)=>{if(t.has(o,!0))return t.get(o)});Ds.$isResolver=!0;Ds.resolve=()=>{};Ob=co((o,e,t)=>{let i=xa(o,e),s=new ke(o,0,i);return t.registerResolver(o,s),i}),Rb=co((o,e,t)=>xa(o,e));ke=class{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,s;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(s=(i=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||i===void 0?void 0:i.call(t,e))!==null&&s!==void 0?s:null;default:return null}}};Rs=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return t===void 0?i=new this.Type(...this.dependencies.map(fa,e)):i=new this.Type(...this.dependencies.map(fa,e),...t),this.transformers==null?i:this.transformers.reduce(Bp,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},Vp={$isResolver:!0,resolve(o,e){return e}};Hp=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),ya="__DI_LOCATE_PARENT__",Ss=new Map,Wt=class{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Lp,Vp),e instanceof Node&&e.addEventListener(ya,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,i,s,n,a,d=this.context;for(let h=0,p=e.length;h<p;++h)if(t=e[h],!!va(t))if(lo(t))t.register(this,d);else if(zp(t))Yt.singleton(t,t).register(this);else for(i=Object.keys(t),n=0,a=i.length;n<a;++n)s=t[i[n]],va(s)&&(lo(s)?s.register(this,d):this.register(s));return--this.registerDepth,this}registerResolver(e,t){no(e);let i=this.resolvers,s=i.get(e);return s==null?i.set(e,t):s instanceof ke&&s.strategy===4?s.state.push(t):i.set(e,new ke(e,4,[s,t])),t}registerTransformer(e,t){let i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){let s=i.getFactory(this);return s==null?!1:(s.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(no(e),e.resolve!==void 0)return e;let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){let n=ma(e)?this:i;return t?this.jitRegister(e,n):null}i=i.parent}else return s;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(no(e),e.$isResolver)return e.resolve(this,this);let t=this,i;for(;t!=null;)if(i=t.resolvers.get(e),i==null){if(t.parent==null){let s=ma(e)?this:t;return i=this.jitRegister(e,s),i.resolve(t,this)}t=t.parent}else return i.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){no(e);let i=this,s=i,n;if(t){let a=_e;for(;s!=null;)n=s.resolvers.get(e),n!=null&&(a=a.concat(ba(n,s,i))),s=s.parent;return a}else for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s=s.parent,s==null)return _e}else return ba(n,s,i);return _e}getFactory(e){let t=Ss.get(e);if(t===void 0){if(Np(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ss.set(e,t=new Rs(e,N.getDependencies(e)))}return t}registerFactory(e,t){Ss.set(e,t)}createChild(e){return new Wt(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Hp.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(lo(e)){let i=e.register(t);if(!(i instanceof Object)||i.resolve==null){let s=t.resolvers.get(e);if(s!=null)return s;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}},Es=new WeakMap;Yt=Object.freeze({instance(o,e){return new ke(o,0,e)},singleton(o,e){return new ke(o,1,e)},transient(o,e){return new ke(o,2,e)},callback(o,e){return new ke(o,3,e)},cachedCallback(o,e){return new ke(o,3,wa(e))},aliasTo(o,e){return new ke(e,5,o)}});ga="(anonymous)";Np=function(){let o=new WeakMap,e=!1,t="",i=0;return function(s){return e=o.get(s),e===void 0&&(t=s.toString(),i=t.length,e=i>=29&&i<=100&&t.charCodeAt(i-1)===125&&t.charCodeAt(i-2)<=32&&t.charCodeAt(i-3)===93&&t.charCodeAt(i-4)===101&&t.charCodeAt(i-5)===100&&t.charCodeAt(i-6)===111&&t.charCodeAt(i-7)===99&&t.charCodeAt(i-8)===32&&t.charCodeAt(i-9)===101&&t.charCodeAt(i-10)===118&&t.charCodeAt(i-11)===105&&t.charCodeAt(i-12)===116&&t.charCodeAt(i-13)===97&&t.charCodeAt(i-14)===110&&t.charCodeAt(i-15)===88,o.set(s,e)),e}}(),ao={}});function ka(o){return`${o.toLowerCase()}:presentation`}var uo,fo,po,mo=l(()=>{b();ho();uo=new Map,fo=Object.freeze({define(o,e,t){let i=ka(o);uo.get(i)===void 0?uo.set(i,e):uo.set(i,!1),t.register(Yt.instance(i,e))},forTag(o,e){let t=ka(o),i=uo.get(t);return i===!1?N.findResponsibleContainer(e).get(t):i||null}}),po=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?re.create(t):t instanceof re?t:re.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}});function Ai(o,e,t){return typeof o=="function"?o(e,t):o}var g,Fs,T=l(()=>{$();b();mo();g=class extends Rt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=fo.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Fs(this===g?class extends g{}:this,e,t)}};r([u],g.prototype,"template",void 0);r([u],g.prototype,"styles",void 0);Fs=class{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let i=this.definition,s=this.overrideDefinition,a=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:a,type:this.type,baseClass:this.elementDefinition.baseClass,callback:d=>{let h=new po(Ai(i.template,d,i),Ai(i.styles,d,i));d.definePresentation(h);let p=Ai(i.shadowOptions,d,i);d.shadowRootMode&&(p?s.shadowOptions||(p.mode=d.shadowRootMode):p!==null&&(p={mode:d.shadowRootMode})),d.defineElement({elementOptions:Ai(i.elementOptions,d,i),shadowOptions:p,attributes:Ai(i.attributes,d,i)})}})}}});function E(o,...e){let t=Di.locate(o);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(i.prototype,n))}),Di.locate(i).forEach(n=>t.push(n))})}var fe=l(()=>{b()});var ht,As=l(()=>{$();b();T();be();fe();ht=class extends g{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}};r([c({attribute:"heading-level",mode:"fromView",converter:O})],ht.prototype,"headinglevel",void 0);r([c({mode:"boolean"})],ht.prototype,"expanded",void 0);r([c],ht.prototype,"id",void 0);E(ht,V)});var $a=l(()=>{da();As()});var Ia=l(()=>{});var j,Ta=l(()=>{j={horizontal:"horizontal",vertical:"vertical"}});function Sa(o,e){let t=o.length;for(;t--;)if(e(o[t],t,o))return t;return-1}var Ea=l(()=>{});var Oa=l(()=>{});function bo(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var Ra=l(()=>{});var Da=l(()=>{});var Fa=l(()=>{});var Aa=l(()=>{});var Ls=l(()=>{Ra();Da();Fa();Aa()});function it(...o){return o.every(e=>e instanceof HTMLElement)}function La(o,e){return!o||!e||!it(o)?void 0:Array.from(o.querySelectorAll(e)).filter(i=>i.offsetParent!==null)}function Up(){let o=document.querySelector('meta[property="csp-nonce"]');return o?o.getAttribute("content"):null}function Pa(){if(typeof Xt=="boolean")return Xt;if(!bo())return Xt=!1,Xt;let o=document.createElement("style"),e=Up();e!==null&&o.setAttribute("nonce",e),document.head.appendChild(o);try{o.sheet.insertRule("foo:focus-visible {color:inherit}",0),Xt=!0}catch{Xt=!1}finally{document.head.removeChild(o)}return Xt}var Xt,Ma=l(()=>{Ls()});var Ps,Ms,ut,pt,Bs,Vs,Ba=l(()=>{Ps="focus",Ms="focusin",ut="focusout",pt="keydown",Bs="resize",Vs="scroll"});var Va=l(()=>{});var _a,Y,xe,ye,X,te,Se,ce,de,za,Ha,Na,Ee,Dt,Ua,ja,Ft,qa=l(()=>{(function(o){o[o.alt=18]="alt",o[o.arrowDown=40]="arrowDown",o[o.arrowLeft=37]="arrowLeft",o[o.arrowRight=39]="arrowRight",o[o.arrowUp=38]="arrowUp",o[o.back=8]="back",o[o.backSlash=220]="backSlash",o[o.break=19]="break",o[o.capsLock=20]="capsLock",o[o.closeBracket=221]="closeBracket",o[o.colon=186]="colon",o[o.colon2=59]="colon2",o[o.comma=188]="comma",o[o.ctrl=17]="ctrl",o[o.delete=46]="delete",o[o.end=35]="end",o[o.enter=13]="enter",o[o.equals=187]="equals",o[o.equals2=61]="equals2",o[o.equals3=107]="equals3",o[o.escape=27]="escape",o[o.forwardSlash=191]="forwardSlash",o[o.function1=112]="function1",o[o.function10=121]="function10",o[o.function11=122]="function11",o[o.function12=123]="function12",o[o.function2=113]="function2",o[o.function3=114]="function3",o[o.function4=115]="function4",o[o.function5=116]="function5",o[o.function6=117]="function6",o[o.function7=118]="function7",o[o.function8=119]="function8",o[o.function9=120]="function9",o[o.home=36]="home",o[o.insert=45]="insert",o[o.menu=93]="menu",o[o.minus=189]="minus",o[o.minus2=109]="minus2",o[o.numLock=144]="numLock",o[o.numPad0=96]="numPad0",o[o.numPad1=97]="numPad1",o[o.numPad2=98]="numPad2",o[o.numPad3=99]="numPad3",o[o.numPad4=100]="numPad4",o[o.numPad5=101]="numPad5",o[o.numPad6=102]="numPad6",o[o.numPad7=103]="numPad7",o[o.numPad8=104]="numPad8",o[o.numPad9=105]="numPad9",o[o.numPadDivide=111]="numPadDivide",o[o.numPadDot=110]="numPadDot",o[o.numPadMinus=109]="numPadMinus",o[o.numPadMultiply=106]="numPadMultiply",o[o.numPadPlus=107]="numPadPlus",o[o.openBracket=219]="openBracket",o[o.pageDown=34]="pageDown",o[o.pageUp=33]="pageUp",o[o.period=190]="period",o[o.print=44]="print",o[o.quote=222]="quote",o[o.scrollLock=145]="scrollLock",o[o.shift=16]="shift",o[o.space=32]="space",o[o.tab=9]="tab",o[o.tilde=192]="tilde",o[o.windowsLeft=91]="windowsLeft",o[o.windowsOpera=219]="windowsOpera",o[o.windowsRight=92]="windowsRight"})(_a||(_a={}));Y="ArrowDown",xe="ArrowLeft",ye="ArrowRight",X="ArrowUp",te="Enter",Se="Escape",ce="Home",de="End",za="F2",Ha="PageDown",Na="PageUp",Ee=" ",Dt="Tab",Ua="Backspace",ja="Delete",Ft={ArrowDown:Y,ArrowLeft:xe,ArrowRight:ye,ArrowUp:X}});var R,_s=l(()=>{(function(o){o.ltr="ltr",o.rtl="rtl"})(R||(R={}))});function Ga(o,e,t){return t<o?e:t>e?o:t}function At(o,e,t){return Math.min(Math.max(t,o),e)}function Li(o,e,t=0){return[e,t]=[e,t].sort((i,s)=>i-s),e<=o&&o<t}var Wa=l(()=>{});function Le(o=""){return`${o}${jp++}`}var jp,Ya=l(()=>{jp=0});var Xa=l(()=>{});var M,Qa=l(()=>{Ls();_s();M=class{static getScrollLeft(e,t){return t===R.rtl?M.getRtlScrollLeftConverter(e):e.scrollLeft}static setScrollLeft(e,t,i){if(i===R.rtl){M.setRtlScrollLeftConverter(e,t);return}e.scrollLeft=t}static initialGetRtlScrollConverter(e){return M.initializeRtlScrollConverters(),M.getRtlScrollLeftConverter(e)}static directGetRtlScrollConverter(e){return e.scrollLeft}static invertedGetRtlScrollConverter(e){return-Math.abs(e.scrollLeft)}static reverseGetRtlScrollConverter(e){return e.scrollLeft-(e.scrollWidth-e.clientWidth)}static initialSetRtlScrollConverter(e,t){M.initializeRtlScrollConverters(),M.setRtlScrollLeftConverter(e,t)}static directSetRtlScrollConverter(e,t){e.scrollLeft=t}static invertedSetRtlScrollConverter(e,t){e.scrollLeft=Math.abs(t)}static reverseSetRtlScrollConverter(e,t){let i=e.scrollWidth-e.clientWidth;e.scrollLeft=i+t}static initializeRtlScrollConverters(){if(!bo()){M.applyDirectScrollConverters();return}let e=M.getTestElement();document.body.appendChild(e),M.checkForScrollType(e),document.body.removeChild(e)}static checkForScrollType(e){M.isReverse(e)?M.applyReverseScrollConverters():M.isDirect(e)?M.applyDirectScrollConverters():M.applyInvertedScrollConverters()}static isReverse(e){return e.scrollLeft>0}static isDirect(e){return e.scrollLeft=-1,e.scrollLeft<0}static applyDirectScrollConverters(){M.setRtlScrollLeftConverter=M.directSetRtlScrollConverter,M.getRtlScrollLeftConverter=M.directGetRtlScrollConverter}static applyInvertedScrollConverters(){M.setRtlScrollLeftConverter=M.invertedSetRtlScrollConverter,M.getRtlScrollLeftConverter=M.invertedGetRtlScrollConverter}static applyReverseScrollConverters(){M.setRtlScrollLeftConverter=M.reverseSetRtlScrollConverter,M.getRtlScrollLeftConverter=M.reverseGetRtlScrollConverter}static getTestElement(){let e=document.createElement("div");return e.appendChild(document.createTextNode("ABCD")),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",e}};M.getRtlScrollLeftConverter=M.initialGetRtlScrollConverter;M.setRtlScrollLeftConverter=M.initialSetRtlScrollConverter});var Za,Ja=l(()=>{(function(o){o.Canvas="Canvas",o.CanvasText="CanvasText",o.LinkText="LinkText",o.VisitedText="VisitedText",o.ActiveText="ActiveText",o.ButtonFace="ButtonFace",o.ButtonText="ButtonText",o.Field="Field",o.FieldText="FieldText",o.Highlight="Highlight",o.HighlightText="HighlightText",o.GrayText="GrayText"})(Za||(Za={}))});var D=l(()=>{Ta();Ea();Oa();Ma();Ba();Va();qa();_s();Wa();Ya();Xa();Qa();Ja()});var Ka,go,el=l(()=>{$();b();D();T();As();Ka={single:"single",multi:"multi"},go=class extends g{constructor(){super(...arguments),this.expandmode=Ka.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var e;this.accordionItems.length!==0&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach((t,i)=>{t instanceof ht&&(t.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==i?t.expanded=!1:t.expanded=!0));let s=this.accordionIds[i];t.setAttribute("id",typeof s!="string"?`accordion-${i+1}`:s),this.activeid=this.accordionIds[this.activeItemIndex],t.addEventListener("keydown",this.handleItemKeyDown),t.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()&&((e=this.findExpandedItem())!==null&&e!==void 0?e:this.accordionItems[0]).setAttribute("aria-disabled","true"))},this.removeItemListeners=e=>{e.forEach((t,i)=>{t.removeEventListener("change",this.activeItemChange),t.removeEventListener("keydown",this.handleItemKeyDown),t.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=e=>{if(e.defaultPrevented||e.target!==e.currentTarget)return;e.preventDefault();let t=e.target;this.activeid=t.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),t.expanded=!0,t.setAttribute("aria-disabled","true"),this.accordionItems.forEach(i=>{!i.hasAttribute("disabled")&&i.id!==this.activeid&&i.removeAttribute("aria-disabled")})),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case X:e.preventDefault(),this.adjust(-1);break;case Y:e.preventDefault(),this.adjust(1);break;case ce:this.activeItemIndex=0,this.focusItem();break;case de:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){let t=e.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==i&&i!==-1&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if(this.accordionItems[e].getAttribute("expanded")==="true")return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach((e,t)=>{e.expanded=!1})}getItemIds(){return this.accordionItems.map(e=>e.getAttribute("id"))}isSingleExpandMode(){return this.expandmode===Ka.single}adjust(e){this.activeItemIndex=Ga(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){let e=this.accordionItems[this.activeItemIndex];e instanceof ht&&e.expandbutton.focus()}};r([c({attribute:"expand-mode"})],go.prototype,"expandmode",void 0);r([u],go.prototype,"accordionItems",void 0)});var tl=l(()=>{Ia();el()});var il,ol=l(()=>{b();be();il=(o,e)=>k`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Q("control")}
    >
        ${Ue(o,e)}
        <span class="content" part="content">
            <slot ${J("defaultSlottedContent")}></slot>
        </span>
        ${Ne(o,e)}
    </a>
`});var A,Pi=l(()=>{$();b();A=class{};r([c({attribute:"aria-atomic"})],A.prototype,"ariaAtomic",void 0);r([c({attribute:"aria-busy"})],A.prototype,"ariaBusy",void 0);r([c({attribute:"aria-controls"})],A.prototype,"ariaControls",void 0);r([c({attribute:"aria-current"})],A.prototype,"ariaCurrent",void 0);r([c({attribute:"aria-describedby"})],A.prototype,"ariaDescribedby",void 0);r([c({attribute:"aria-details"})],A.prototype,"ariaDetails",void 0);r([c({attribute:"aria-disabled"})],A.prototype,"ariaDisabled",void 0);r([c({attribute:"aria-errormessage"})],A.prototype,"ariaErrormessage",void 0);r([c({attribute:"aria-flowto"})],A.prototype,"ariaFlowto",void 0);r([c({attribute:"aria-haspopup"})],A.prototype,"ariaHaspopup",void 0);r([c({attribute:"aria-hidden"})],A.prototype,"ariaHidden",void 0);r([c({attribute:"aria-invalid"})],A.prototype,"ariaInvalid",void 0);r([c({attribute:"aria-keyshortcuts"})],A.prototype,"ariaKeyshortcuts",void 0);r([c({attribute:"aria-label"})],A.prototype,"ariaLabel",void 0);r([c({attribute:"aria-labelledby"})],A.prototype,"ariaLabelledby",void 0);r([c({attribute:"aria-live"})],A.prototype,"ariaLive",void 0);r([c({attribute:"aria-owns"})],A.prototype,"ariaOwns",void 0);r([c({attribute:"aria-relevant"})],A.prototype,"ariaRelevant",void 0);r([c({attribute:"aria-roledescription"})],A.prototype,"ariaRoledescription",void 0)});var Qt=l(()=>{Pi();be()});var we,Zt,zs=l(()=>{$();b();T();Qt();fe();we=class extends g{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};r([c],we.prototype,"download",void 0);r([c],we.prototype,"href",void 0);r([c],we.prototype,"hreflang",void 0);r([c],we.prototype,"ping",void 0);r([c],we.prototype,"referrerpolicy",void 0);r([c],we.prototype,"rel",void 0);r([c],we.prototype,"target",void 0);r([c],we.prototype,"type",void 0);r([u],we.prototype,"defaultSlottedContent",void 0);Zt=class{};r([c({attribute:"aria-expanded"})],Zt.prototype,"ariaExpanded",void 0);E(Zt,A);E(we,V,Zt)});var sl=l(()=>{ol();zs()});var rl=l(()=>{});var Pe,Lt=l(()=>{D();Pe=o=>{let e=o.closest("[dir]");return e!==null&&e.dir==="rtl"?R.rtl:R.ltr}});var vo,nl=l(()=>{b();vo=class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(e,t)=>{var i;if(this.intersectionDetector!==null){if(this.observedElements.has(e)){(i=this.observedElements.get(e))===null||i===void 0||i.push(t);return}this.observedElements.set(e,[t]),this.intersectionDetector.observe(e)}},this.cancelRequestPosition=(e,t)=>{let i=this.observedElements.get(e);if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}},this.initializeIntersectionDetector=()=>{Ye.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=e=>{if(this.intersectionDetector===null)return;let t=[],i=[];e.forEach(s=>{var n;(n=this.intersectionDetector)===null||n===void 0||n.unobserve(s.target);let a=this.observedElements.get(s.target);a!==void 0&&(a.forEach(d=>{let h=t.indexOf(d);h===-1&&(h=t.length,t.push(d),i.push([])),i[h].push(s)}),this.observedElements.delete(s.target))}),t.forEach((s,n)=>{s(i[n])})},this.initializeIntersectionDetector()}}});var H,al=l(()=>{$();b();D();T();Lt();nl();H=class extends g{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=R.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(H.intersectionService.requestPosition(this,this.handleIntersection),H.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&H.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,H.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&H.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&H.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>typeof this.viewport!="string"||this.viewport===""?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=e=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(e)&&this.updateLayout())},this.applyIntersectionEntries=e=>{let t=e.find(n=>n.target===this),i=e.find(n=>n.target===this.anchorElement),s=e.find(n=>n.target===this.viewportElement);return t===void 0||s===void 0||i===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,s.boundingClientRect)||this.isRectDifferent(this.regionRect,t.boundingClientRect)?(this.regionRect=t.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(s.boundingClientRect.x+document.documentElement.scrollLeft,s.boundingClientRect.y+document.documentElement.scrollTop,s.boundingClientRect.width,s.boundingClientRect.height):this.viewportRect=s.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(e,t)=>Math.abs(e.top-t.top)>this.updateThreshold||Math.abs(e.right-t.right)>this.updateThreshold||Math.abs(e.bottom-t.bottom)>this.updateThreshold||Math.abs(e.left-t.left)>this.updateThreshold,this.handleResize=e=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=Pe(this),this.startObservers())},this.updateLayout=()=>{let e,t;if(this.horizontalPositioningMode!=="uncontrolled"){let n=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")t="center";else if(this.horizontalDefaultPosition!=="unset"){let x=this.horizontalDefaultPosition;if(x==="start"||x==="end"){let F=Pe(this);if(F!==this.currentDirection){this.currentDirection=F,this.initialize();return}this.currentDirection===R.ltr?x=x==="start"?"left":"right":x=x==="start"?"right":"left"}switch(x){case"left":t=this.horizontalInset?"insetStart":"start";break;case"right":t=this.horizontalInset?"insetEnd":"end";break}}let a=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,d=this.anchorRect!==void 0?this.anchorRect.left:0,h=this.anchorRect!==void 0?this.anchorRect.right:0,p=this.anchorRect!==void 0?this.anchorRect.width:0,f=this.viewportRect!==void 0?this.viewportRect.left:0,m=this.viewportRect!==void 0?this.viewportRect.right:0;(t===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,d,h,p,f,m)<a)&&(t=this.getAvailableSpace(n[0],d,h,p,f,m)>this.getAvailableSpace(n[1],d,h,p,f,m)?n[0]:n[1])}if(this.verticalPositioningMode!=="uncontrolled"){let n=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")e="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":e=this.verticalInset?"insetStart":"start";break;case"bottom":e=this.verticalInset?"insetEnd":"end";break}let a=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,d=this.anchorRect!==void 0?this.anchorRect.top:0,h=this.anchorRect!==void 0?this.anchorRect.bottom:0,p=this.anchorRect!==void 0?this.anchorRect.height:0,f=this.viewportRect!==void 0?this.viewportRect.top:0,m=this.viewportRect!==void 0?this.viewportRect.bottom:0;(e===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(e,d,h,p,f,m)<a)&&(e=this.getAvailableSpace(n[0],d,h,p,f,m)>this.getAvailableSpace(n[1],d,h,p,f,m)?n[0]:n[1])}let i=this.getNextRegionDimension(t,e),s=this.horizontalPosition!==t||this.verticalPosition!==e;if(this.setHorizontalPosition(t,i),this.setVerticalPosition(e,i),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),s&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(e,t)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:t.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset";break}let s=0;switch(e){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(s=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+s,this.horizontalViewportLock){let n=this.anchorRect.left+s,a=this.anchorRect.right-s;n<this.viewportRect.left&&!(a>this.viewportRect.right)?this.translateX=this.translateX-(n-this.viewportRect.left):a>this.viewportRect.right&&!(n<this.viewportRect.left)&&(this.translateX=this.translateX-(a-this.viewportRect.right))}break}this.horizontalPosition=e},this.setVerticalPosition=(e,t)=>{if(e===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:t.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset";break}let s=0;switch(e){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(s=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+s,this.verticalViewportLock){let n=this.anchorRect.top+s,a=this.anchorRect.bottom-s;n<this.viewportRect.top&&!(a>this.viewportRect.bottom)?this.translateY=this.translateY-(n-this.viewportRect.top):a>this.viewportRect.bottom&&!(n<this.viewportRect.top)&&(this.translateY=this.translateY-(a-this.viewportRect.bottom))}}this.verticalPosition=e},this.getPositioningOptions=e=>e?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(e,t,i,s,n,a)=>{let d=t-n,h=a-(t+s);switch(e){case"start":return d;case"insetStart":return d+s;case"insetEnd":return h+s;case"end":return h;case"center":return Math.min(d,h)*2+s}},this.getNextRegionDimension=(e,t)=>{let i={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return e!==void 0&&this.horizontalScaling==="fill"?i.width=this.getAvailableSpace(e,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(i.width=this.anchorRect!==void 0?this.anchorRect.width:0),t!==void 0&&this.verticalScaling==="fill"?i.height=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(i.height=this.anchorRect!==void 0?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Bs,this.update,{passive:!0}),window.addEventListener(Vs,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Bs,this.update),window.removeEventListener(Vs,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(e,t){this.$fastController.isConnected&&this.initialLayoutComplete&&(e==="auto"&&this.stopAutoUpdateEventListeners(),t==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),v.queueUpdate(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}};H.intersectionService=new vo;r([c],H.prototype,"anchor",void 0);r([c],H.prototype,"viewport",void 0);r([c({attribute:"horizontal-positioning-mode"})],H.prototype,"horizontalPositioningMode",void 0);r([c({attribute:"horizontal-default-position"})],H.prototype,"horizontalDefaultPosition",void 0);r([c({attribute:"horizontal-viewport-lock",mode:"boolean"})],H.prototype,"horizontalViewportLock",void 0);r([c({attribute:"horizontal-inset",mode:"boolean"})],H.prototype,"horizontalInset",void 0);r([c({attribute:"horizontal-threshold"})],H.prototype,"horizontalThreshold",void 0);r([c({attribute:"horizontal-scaling"})],H.prototype,"horizontalScaling",void 0);r([c({attribute:"vertical-positioning-mode"})],H.prototype,"verticalPositioningMode",void 0);r([c({attribute:"vertical-default-position"})],H.prototype,"verticalDefaultPosition",void 0);r([c({attribute:"vertical-viewport-lock",mode:"boolean"})],H.prototype,"verticalViewportLock",void 0);r([c({attribute:"vertical-inset",mode:"boolean"})],H.prototype,"verticalInset",void 0);r([c({attribute:"vertical-threshold"})],H.prototype,"verticalThreshold",void 0);r([c({attribute:"vertical-scaling"})],H.prototype,"verticalScaling",void 0);r([c({attribute:"fixed-placement",mode:"boolean"})],H.prototype,"fixedPlacement",void 0);r([c({attribute:"auto-update-mode"})],H.prototype,"autoUpdateMode",void 0);r([u],H.prototype,"anchorElement",void 0);r([u],H.prototype,"viewportElement",void 0);r([u],H.prototype,"initialLayoutComplete",void 0)});var Hs,Ns,Us,js,ll,qs,cl,dl=l(()=>{Hs={horizontalDefaultPosition:"center",horizontalPositioningMode:"locktodefault",horizontalInset:!1,horizontalScaling:"anchor"},Ns=Object.assign(Object.assign({},Hs),{verticalDefaultPosition:"top",verticalPositioningMode:"locktodefault",verticalInset:!1,verticalScaling:"content"}),Us=Object.assign(Object.assign({},Hs),{verticalDefaultPosition:"bottom",verticalPositioningMode:"locktodefault",verticalInset:!1,verticalScaling:"content"}),js=Object.assign(Object.assign({},Hs),{verticalPositioningMode:"dynamic",verticalInset:!1,verticalScaling:"content"}),ll=Object.assign(Object.assign({},Ns),{verticalScaling:"fill"}),qs=Object.assign(Object.assign({},Us),{verticalScaling:"fill"}),cl=Object.assign(Object.assign({},js),{verticalScaling:"fill"})});var Gs=l(()=>{rl();al();dl()});var hl=l(()=>{});var ui,ul=l(()=>{$();b();T();ui=class extends g{connectedCallback(){super.connectedCallback(),this.shape||(this.shape="circle")}};r([c],ui.prototype,"fill",void 0);r([c],ui.prototype,"color",void 0);r([c],ui.prototype,"link",void 0);r([c],ui.prototype,"shape",void 0)});var pl=l(()=>{hl();ul()});var xo,fl=l(()=>{b();xo=(o,e)=>k`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`});var ft,ml=l(()=>{$();b();T();ft=class extends g{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;let e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};r([c({attribute:"fill"})],ft.prototype,"fill",void 0);r([c({attribute:"color"})],ft.prototype,"color",void 0);r([c({mode:"boolean"})],ft.prototype,"circular",void 0)});var bl=l(()=>{fl();ml()});var gl=l(()=>{});var Jt,Ws=l(()=>{$();b();zs();Qt();fe();Jt=class extends we{constructor(){super(...arguments),this.separator=!0}};r([u],Jt.prototype,"separator",void 0);E(Jt,V,Zt)});var vl=l(()=>{gl();Ws()});var xl=l(()=>{});var Ys,yl=l(()=>{$();b();Ws();T();Ys=class extends g{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;let e=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(t=>{let i=t===e;this.setItemSeparator(t,i),this.setAriaCurrent(t,i)})}}setItemSeparator(e,t){e instanceof Jt&&(e.separator=!t)}findChildWithHref(e){var t,i;return e.childElementCount>0?e.querySelector("a[href]"):!((t=e.shadowRoot)===null||t===void 0)&&t.childElementCount?(i=e.shadowRoot)===null||i===void 0?void 0:i.querySelector("a[href]"):null}setAriaCurrent(e,t){let i=this.findChildWithHref(e);i===null&&e.hasAttribute("href")&&e instanceof Jt?t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current"):i!==null&&(t?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}};r([u],Ys.prototype,"slottedBreadcrumbItems",void 0)});var wl=l(()=>{xl();yl()});var Cl,kl=l(()=>{b();be();Cl=(o,e)=>k`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${Q("control")}
    >
        ${Ue(o,e)}
        <span class="content" part="content">
            <slot ${J("defaultSlottedContent")}></slot>
        </span>
        ${Ne(o,e)}
    </button>
`});function ue(o){let e=class extends o{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Tl}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=t?i.concat(Array.from(t)):i;return Object.freeze(s)}else return _e}valueChanged(t,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),v.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),v.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Tl)return null;let t=Sl.get(this);return t||(t=this.attachInternals(),Sl.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,i,s){this.elementInternals?this.elementInternals.setValidity(t,i,s):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",$l),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",$l)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,i){this.elementInternals&&this.elementInternals.setFormValue(t,i||t)}_keypressHandler(t){switch(t.key){case te:if(this.form instanceof HTMLFormElement){let i=this.form.querySelector("[type=submit]");i?.click()}break}}stopPropagation(t){t.stopPropagation()}};return c({mode:"boolean"})(e.prototype,"disabled"),c({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),c({attribute:"current-value"})(e.prototype,"currentValue"),c(e.prototype,"name"),c({mode:"boolean"})(e.prototype,"required"),u(e.prototype,"value"),e}function pi(o){class e extends ue(o){}class t extends e{constructor(...s){super(s),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(s,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),s!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(s,n){this.checked=this.currentChecked}updateForm(){let s=this.checked?this.value:null;this.setFormValue(s,s)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return c({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),c({attribute:"current-checked",converter:Ut})(t.prototype,"currentChecked"),u(t.prototype,"defaultChecked"),u(t.prototype,"checked"),t}var $l,Il,Tl,Sl,Oe=l(()=>{b();D();$l="form-associated-proxy",Il="ElementInternals",Tl=Il in window&&"setFormValue"in window[Il].prototype,Sl=new WeakMap});var Xs,yo,El=l(()=>{Oe();T();Xs=class extends g{},yo=class extends ue(Xs){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var Re,fi,Ol=l(()=>{$();b();Qt();fe();El();Re=class extends yo{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};r([c({mode:"boolean"})],Re.prototype,"autofocus",void 0);r([c({attribute:"form"})],Re.prototype,"formId",void 0);r([c],Re.prototype,"formaction",void 0);r([c],Re.prototype,"formenctype",void 0);r([c],Re.prototype,"formmethod",void 0);r([c({mode:"boolean"})],Re.prototype,"formnovalidate",void 0);r([c],Re.prototype,"formtarget",void 0);r([c],Re.prototype,"type",void 0);r([u],Re.prototype,"defaultSlottedContent",void 0);fi=class{};r([c({attribute:"aria-expanded"})],fi.prototype,"ariaExpanded",void 0);r([c({attribute:"aria-pressed"})],fi.prototype,"ariaPressed",void 0);E(fi,A);E(Re,V,fi)});var Rl=l(()=>{kl();Ol()});var wo,Qs=l(()=>{wo=class{constructor(e){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,e)for(let t in e){let i=e[t];t==="date"?this.date=this.getDateObject(i):this[t]=i}}getDateObject(e){if(typeof e=="string"){let t=e.split(/[/-]/);return t.length<3?new Date:new Date(parseInt(t[2],10),parseInt(t[0],10)-1,parseInt(t[1],10))}else if("day"in e&&"month"in e&&"year"in e){let{day:t,month:i,year:s}=e;return new Date(s,i-1,t)}return e}getDate(e=this.date,t={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){let s=this.getDateObject(e);if(!s.getTime())return"";let n=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},t);return new Intl.DateTimeFormat(i,n).format(s)}getDay(e=this.date.getDate(),t=this.dayFormat,i=this.locale){return this.getDate({month:1,day:e,year:2020},{day:t},i)}getMonth(e=this.date.getMonth()+1,t=this.monthFormat,i=this.locale){return this.getDate({month:e,day:2,year:2020},{month:t},i)}getYear(e=this.date.getFullYear(),t=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:e},{year:t},i)}getWeekday(e=0,t=this.weekdayFormat,i=this.locale){let s=`1-${e+1}-2017`;return this.getDate(s,{weekday:t},i)}getWeekdays(e=this.weekdayFormat,t=this.locale){return Array(7).fill(null).map((i,s)=>this.getWeekday(s,e,t))}}});var Me,Dl=l(()=>{$();b();D();T();Qs();Me=class extends g{constructor(){super(...arguments),this.dateFormatter=new wo,this.readonly=!1,this.locale="en-US",this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(e=this.month,t=this.year){let i=h=>new Date(h.getFullYear(),h.getMonth(),1).getDay(),s=h=>{let p=new Date(h.getFullYear(),h.getMonth()+1,1);return new Date(p.getTime()-this.oneDayInMs).getDate()},n=new Date(t,e-1),a=new Date(t,e),d=new Date(t,e-2);return{length:s(n),month:e,start:i(n),year:t,previous:{length:s(d),month:d.getMonth()+1,start:i(d),year:d.getFullYear()},next:{length:s(a),month:a.getMonth()+1,start:i(a),year:a.getFullYear()}}}getDays(e=this.getMonthInfo(),t=this.minWeeks){t=t>10?10:t;let{start:i,length:s,previous:n,next:a}=e,d=[],h=1-i;for(;h<s+1||d.length<t||d[d.length-1].length%7!==0;){let{month:p,year:f}=h<1?n:h>s?a:e,m=h<1?n.length+h:h>s?h-s:h,x=`${p}-${m}-${f}`,F=this.dateInString(x,this.disabledDates),z=this.dateInString(x,this.selectedDates),ee={day:m,month:p,year:f,disabled:F,selected:z},le=d[d.length-1];d.length===0||le.length%7===0?d.push([ee]):le.push(ee),h++}return d}dateInString(e,t){let i=t.split(",").map(s=>s.trim());return e=typeof e=="string"?e:`${e.getMonth()+1}-${e.getDate()}-${e.getFullYear()}`,i.some(s=>s===e)}getDayClassNames(e,t){let{day:i,month:s,year:n,disabled:a,selected:d}=e,h=t===`${s}-${i}-${n}`,p=this.month!==s;return["day",h&&"today",p&&"inactive",a&&"disabled",d&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){let e=this.dateFormatter.getWeekdays().map(t=>({text:t}));if(this.weekdayFormat!=="long"){let t=this.dateFormatter.getWeekdays("long");e.forEach((i,s)=>{i.abbr=t[s]})}return e}handleDateSelect(e,t){e.preventDefault,this.$emit("dateselected",t)}handleKeydown(e,t){return e.key===te&&this.handleDateSelect(e,t),!0}};r([c({mode:"boolean"})],Me.prototype,"readonly",void 0);r([c],Me.prototype,"locale",void 0);r([c({converter:O})],Me.prototype,"month",void 0);r([c({converter:O})],Me.prototype,"year",void 0);r([c({attribute:"day-format",mode:"fromView"})],Me.prototype,"dayFormat",void 0);r([c({attribute:"weekday-format",mode:"fromView"})],Me.prototype,"weekdayFormat",void 0);r([c({attribute:"month-format",mode:"fromView"})],Me.prototype,"monthFormat",void 0);r([c({attribute:"year-format",mode:"fromView"})],Me.prototype,"yearFormat",void 0);r([c({attribute:"min-weeks",converter:O})],Me.prototype,"minWeeks",void 0);r([c({attribute:"disabled-dates"})],Me.prototype,"disabledDates",void 0);r([c({attribute:"selected-dates"})],Me.prototype,"selectedDates",void 0)});var mi,ot,Pt,Co=l(()=>{mi={none:"none",default:"default",sticky:"sticky"},ot={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Pt={default:"default",header:"header",stickyHeader:"sticky-header"}});var he,Zs=l(()=>{$();b();D();T();Co();he=class extends g{constructor(){super(...arguments),this.rowType=Pt.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new dt(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ut,this.handleFocusout),this.addEventListener(pt,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ut,this.handleFocusout),this.removeEventListener(pt,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case xe:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ye:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case ce:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case de:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Pt.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Pt.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};r([c({attribute:"grid-template-columns"})],he.prototype,"gridTemplateColumns",void 0);r([c({attribute:"row-type"})],he.prototype,"rowType",void 0);r([u],he.prototype,"rowData",void 0);r([u],he.prototype,"columnDefinitions",void 0);r([u],he.prototype,"cellItemTemplate",void 0);r([u],he.prototype,"headerCellItemTemplate",void 0);r([u],he.prototype,"rowIndex",void 0);r([u],he.prototype,"isActiveRow",void 0);r([u],he.prototype,"activeCellItemTemplate",void 0);r([u],he.prototype,"defaultCellItemTemplate",void 0);r([u],he.prototype,"defaultHeaderCellItemTemplate",void 0);r([u],he.prototype,"cellElements",void 0)});function qp(o){let e=o.tagFor(he);return k`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}var Fl,Al=l(()=>{b();Zs();Fl=(o,e)=>{let t=qp(o),i=o.tagFor(he);return k`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${t}"
            ${ro({property:"rowElements",filter:Gt("[role=row]")})}
        >
            <slot></slot>
        </template>
    `}});var ie,Ll=l(()=>{$();b();D();T();Co();ie=class extends g{constructor(){super(),this.noTabbing=!1,this.generateHeader=mi.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}let s=Math.max(0,Math.min(this.rowElements.length-1,e)),a=this.rowElements[s].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),d=Math.max(0,Math.min(a.length-1,t)),h=a[d];i&&this.scrollHeight!==this.clientHeight&&(s<this.focusRowIndex&&this.scrollTop>0||s>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&h.scrollIntoView({block:"center",inline:"center"}),h.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(s=>{s.nodeType===1&&s.getAttribute("role")==="row"&&(s.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,v.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){let t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,i)=>{let s=t;s.rowIndex=i,s.gridTemplateColumns=e,this.columnDefinitionsStale&&(s.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(i=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=ie.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=ie.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new dt(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Ps,this.handleFocus),this.addEventListener(pt,this.handleKeydown),this.addEventListener(ut,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),v.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Ps,this.handleFocus),this.removeEventListener(pt,this.handleKeydown),this.removeEventListener(ut,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;let t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t,i=this.rowElements.length-1,s=this.offsetHeight+this.scrollTop,n=this.rowElements[i];switch(e.key){case X:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case Y:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Na:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){let a=this.rowElements[t];if(a.offsetTop<this.scrollTop){this.scrollTop=a.offsetTop+a.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Ha:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||n.offsetTop+n.offsetHeight<=s){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=i;t++){let a=this.rowElements[t];if(a.offsetTop+a.offsetHeight>s){let d=0;this.generateHeader===mi.sticky&&this.generatedHeader!==null&&(d=this.generatedHeader.clientHeight),this.scrollTop=a.offsetTop-d;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case ce:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case de:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,v.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==mi.none&&this.rowsData.length>0){let e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===mi.sticky?Pt.stickyHeader:Pt.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};ie.generateColumns=o=>Object.getOwnPropertyNames(o).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));r([c({attribute:"no-tabbing",mode:"boolean"})],ie.prototype,"noTabbing",void 0);r([c({attribute:"generate-header"})],ie.prototype,"generateHeader",void 0);r([c({attribute:"grid-template-columns"})],ie.prototype,"gridTemplateColumns",void 0);r([u],ie.prototype,"rowsData",void 0);r([u],ie.prototype,"columnDefinitions",void 0);r([u],ie.prototype,"rowItemTemplate",void 0);r([u],ie.prototype,"cellItemTemplate",void 0);r([u],ie.prototype,"headerCellItemTemplate",void 0);r([u],ie.prototype,"focusRowIndex",void 0);r([u],ie.prototype,"focusColumnIndex",void 0);r([u],ie.prototype,"defaultRowItemTemplate",void 0);r([u],ie.prototype,"rowElementTag",void 0);r([u],ie.prototype,"rowElements",void 0)});var Gp,Wp,je,Js=l(()=>{$();b();D();T();Co();Gp=k`
    <template>
        ${o=>o.rowData===null||o.columnDefinition===null||o.columnDefinition.columnDataKey===null?null:o.rowData[o.columnDefinition.columnDataKey]}
    </template>
`,Wp=k`
    <template>
        ${o=>o.columnDefinition===null?null:o.columnDefinition.title===void 0?o.columnDefinition.columnDataKey:o.columnDefinition.title}
    </template>
`,je=class extends g{constructor(){super(...arguments),this.cellType=ot.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(Ms,this.handleFocusin),this.addEventListener(ut,this.handleFocusout),this.addEventListener(pt,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ms,this.handleFocusin),this.removeEventListener(ut,this.handleFocusout),this.removeEventListener(pt,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ot.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){let t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){let t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===ot.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===ot.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case te:case za:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case ot.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){let t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){let t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case Se:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ot.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Wp.render(this,this);break;case void 0:case ot.rowHeader:case ot.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Gp.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};r([c({attribute:"cell-type"})],je.prototype,"cellType",void 0);r([c({attribute:"grid-column"})],je.prototype,"gridColumn",void 0);r([u],je.prototype,"rowData",void 0);r([u],je.prototype,"columnDefinition",void 0)});function Yp(o){let e=o.tagFor(je);return k`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,i)=>i.index+1}"
        :rowData="${(t,i)=>i.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function Xp(o){let e=o.tagFor(je);return k`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,i)=>i.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}var Pl,Ml=l(()=>{b();Js();Pl=(o,e)=>{let t=Yp(o),i=Xp(o);return k`
        <template
            role="row"
            class="${s=>s.rowType!=="default"?s.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${i}"
            ${ro({property:"cellElements",filter:Gt('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${J("slottedCellElements")}></slot>
        </template>
    `}});var Bl,Vl=l(()=>{b();Bl=(o,e)=>k`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `});var _l=l(()=>{Al();Ll();Ml();Zs();Vl();Js()});var gy,zl=l(()=>{b();gy=k`
    <div
        class="title"
        part="title"
        aria-label="${o=>o.dateFormatter.getDate(`${o.month}-2-${o.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${o=>o.dateFormatter.getMonth(o.month)}
        </span>
        <span part="year">${o=>o.dateFormatter.getYear(o.year)}</span>
    </div>
`});var Hl=l(()=>{Dl();zl();Qs()});var Nl=l(()=>{});var Ul=l(()=>{});var jl=l(()=>{Nl();Ul()});var ql,Gl=l(()=>{b();ql=(o,e)=>k`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${J("defaultSlottedNodes")}></slot>
        </label>
    </template>
`});var Ks,ko,Wl=l(()=>{Oe();T();Ks=class extends g{},ko=class extends pi(Ks){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var Kt,Yl=l(()=>{$();b();D();Wl();Kt=class extends ko{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Ee:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};r([c({attribute:"readonly",mode:"boolean"})],Kt.prototype,"readOnly",void 0);r([u],Kt.prototype,"defaultSlottedNodes",void 0);r([u],Kt.prototype,"indeterminate",void 0)});var Xl=l(()=>{Gl();Yl()});function er(o){return it(o)&&(o.getAttribute("role")==="option"||o instanceof HTMLOptionElement)}var qe,Mt,tr=l(()=>{$();b();D();T();Pi();be();fe();qe=class extends g{constructor(e,t,i,s){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),s&&(this.selected=s),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),C.notify(this,"value")}get value(){var e;return C.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};r([u],qe.prototype,"checked",void 0);r([u],qe.prototype,"content",void 0);r([u],qe.prototype,"defaultSelected",void 0);r([c({mode:"boolean"})],qe.prototype,"disabled",void 0);r([c({attribute:"selected",mode:"boolean"})],qe.prototype,"selectedAttribute",void 0);r([u],qe.prototype,"selected",void 0);r([c({attribute:"value",mode:"fromView"})],qe.prototype,"initialValue",void 0);Mt=class{};r([u],Mt.prototype,"ariaChecked",void 0);r([u],Mt.prototype,"ariaPosInSet",void 0);r([u],Mt.prototype,"ariaSelected",void 0);r([u],Mt.prototype,"ariaSetSize",void 0);E(Mt,A);E(qe,V,Mt)});var oe,Ge,ei=l(()=>{$();b();D();T();tr();Pi();fe();oe=class extends g{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return C.track(this,"options"),this._options}set options(e){this._options=e,C.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let i=e>t?-1:e<t?1:0,s=e+i,n=null;switch(i){case-1:{n=this.options.reduceRight((a,d,h)=>!a&&!d.disabled&&h<s?d:a,n);break}case 1:{n=this.options.reduce((a,d,h)=>!a&&!d.disabled&&h>s?d:a,n);break}}return this.options.indexOf(n)}handleChange(e,t){switch(t){case"selected":{oe.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,oe.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case ce:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Y:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case X:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case de:{e.preventDefault(),this.selectLastOption();break}case Dt:return this.focusAndScrollOptionIntoView(),!0;case te:case Se:return!0;case Ee:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){let s=this.getSelectableIndex(e,t),n=s>-1?s:e;this.selectedIndex=n,t===n&&this.selectedIndexChanged(t,n);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var i;let s=t.filter(oe.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(n=>{let a=C.getNotifier(n);a.unsubscribe(this,"selected"),n.selected=s.includes(n),a.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Sa(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((s,n)=>(er(n)&&s.push(n),s),[]);let i=`${this.options.length}`;this.options.forEach((s,n)=>{s.id||(s.id=Le("option-")),s.ariaPosInSet=`${n+1}`,s.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let i=this.getTypeaheadMatches();if(i.length){let s=this.options.indexOf(i[0]);s>-1&&(this.selectedIndex=s)}this.typeaheadExpired=!1}}};oe.slottedOptionFilter=o=>er(o)&&!o.hidden;oe.TYPE_AHEAD_TIMEOUT_MS=1e3;r([c({mode:"boolean"})],oe.prototype,"disabled",void 0);r([u],oe.prototype,"selectedIndex",void 0);r([u],oe.prototype,"selectedOptions",void 0);r([u],oe.prototype,"slottedOptions",void 0);r([u],oe.prototype,"typeaheadBuffer",void 0);Ge=class{};r([u],Ge.prototype,"ariaActiveDescendant",void 0);r([u],Ge.prototype,"ariaDisabled",void 0);r([u],Ge.prototype,"ariaExpanded",void 0);r([u],Ge.prototype,"ariaMultiSelectable",void 0);E(Ge,A);E(oe,Ge)});var mt,$o=l(()=>{mt={above:"above",below:"below"}});var ir,Io,Ql=l(()=>{Oe();ei();ir=class extends oe{},Io=class extends ue(ir){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var Mi,or=l(()=>{Mi={inline:"inline",list:"list",both:"both",none:"none"}});var bt,bi,Zl=l(()=>{$();b();D();ei();be();$o();fe();Ql();or();bt=class extends Io{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Le("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===Mi.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===Mi.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===Mi.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),v.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return C.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,C.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return C.track(this,"value"),this._value}set value(e){var t,i,s;let n=`${this._value}`;if(this.$fastController.isConnected&&this.options){let a=this.options.findIndex(p=>p.text.toLowerCase()===e.toLowerCase()),d=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,h=(i=this.options[a])===null||i===void 0?void 0:i.text;this.selectedIndex=d!==h?a:this.selectedIndex,e=((s=this.firstSelectedOption)===null||s===void 0?void 0:s.text)||e}n!==e&&(this._value=e,super.valueChanged(n,e),C.notify(this,"value"))}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(!t||t.disabled)return;this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===Mi.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=At(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?mt.above:mt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===mt.above?~~e.top:~~i}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=t.includes(i)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};r([c({attribute:"autocomplete",mode:"fromView"})],bt.prototype,"autocomplete",void 0);r([u],bt.prototype,"maxHeight",void 0);r([c({attribute:"open",mode:"boolean"})],bt.prototype,"open",void 0);r([c],bt.prototype,"placeholder",void 0);r([c({attribute:"position"})],bt.prototype,"positionAttribute",void 0);r([u],bt.prototype,"position",void 0);bi=class{};r([u],bi.prototype,"ariaAutoComplete",void 0);r([u],bi.prototype,"ariaControls",void 0);E(bi,Ge);E(bt,V,bi)});var Jl=l(()=>{});var Kl=l(()=>{Zl();or();Jl()});function Bi(o){let e=o.parentElement;if(e)return e;{let t=o.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}var To=l(()=>{});function ec(o,e){let t=e;for(;t!==null;){if(t===o)return!0;t=Bi(t)}return!1}var tc=l(()=>{To()});function Qp(o){return o instanceof Rt}var st,Vi,rr,nr,ar,So,lr,ne,sr,Zp,ti,cr=l(()=>{$();b();st=document.createElement("div");Vi=class{setProperty(e,t){v.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){v.queueUpdate(()=>this.target.removeProperty(e))}},rr=class extends Vi{constructor(e){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(re.create([t]))}},nr=class extends Vi{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},ar=class extends Vi{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},So=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),C.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),v.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),v.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:i}=this.style;if(i){let s=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[s].style}else this.target=null}};r([u],So.prototype,"target",void 0);lr=class{constructor(e){this.target=e.style}setProperty(e,t){v.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){v.queueUpdate(()=>this.target.removeProperty(e))}},ne=class{setProperty(e,t){ne.properties[e]=t;for(let i of ne.roots.values())ti.getOrCreate(ne.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete ne.properties[e];for(let t of ne.roots.values())ti.getOrCreate(ne.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=ne;if(!t.has(e)){t.add(e);let i=ti.getOrCreate(this.normalizeRoot(e));for(let s in ne.properties)i.setProperty(s,ne.properties[s])}}static unregisterRoot(e){let{roots:t}=ne;if(t.has(e)){t.delete(e);let i=ti.getOrCreate(ne.normalizeRoot(e));for(let s in ne.properties)i.removeProperty(s)}}static normalizeRoot(e){return e===st?document:e}};ne.roots=new Set;ne.properties={};sr=new WeakMap,Zp=v.supportsAdoptedStyleSheets?rr:So,ti=Object.freeze({getOrCreate(o){if(sr.has(o))return sr.get(o);let e;return o===st?e=new ne:o instanceof Document?e=v.supportsAdoptedStyleSheets?new nr:new ar:Qp(o)?e=new Zp(o):e=new lr(o),sr.set(o,e),e}})});function Jp(o){return ge.from(o)}var ge,dr,hr,ur,_i,zi,K,Hi,pr=l(()=>{$();b();To();tc();cr();cr();ge=class extends jt{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ge.uniqueId(),ge.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ge({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return ge.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=K.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof ge&&(t=this.alias(t)),K.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),K.existsFor(e)&&K.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(st,e),this}subscribe(e,t){let i=this.getOrCreateSubscriberSet(t);t&&!K.existsFor(t)&&K.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){let i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};ge.uniqueId=(()=>{let o=0;return()=>(o++,o.toString(16))})();ge.tokensById=new Map;dr=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:i}=e;this.add(t,i)}add(e,t){ti.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(K.getOrCreate(t).get(e)))}remove(e,t){ti.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},hr=class{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=C.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Tt))}},ur=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),C.getNotifier(this).notify(e.id))}get(e){return C.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}},_i=new WeakMap,zi=new WeakMap,K=class{constructor(e){this.target=e,this.store=new ur,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,i)=>{let s=ge.getTokenById(i);if(s&&(s.notify(this.target),ge.isCSSDesignToken(s))){let n=this.parent,a=this.isReflecting(s);if(n){let d=n.get(s),h=t.get(s);d!==h&&!a?this.reflectToCSS(s):d===h&&a&&this.stopReflectToCSS(s)}else a||this.reflectToCSS(s)}}},_i.set(e,this),C.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Rt?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return _i.get(e)||new K(e)}static existsFor(e){return _i.has(e)}static findParent(e){if(st!==e.target){let t=Bi(e.target);for(;t!==null;){if(_i.has(t))return _i.get(t);t=Bi(t)}return K.getOrCreate(st)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==st?K.getOrCreate(st):null}while(i!==null);return null}get parent(){return zi.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=K.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ge.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ge.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=K.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&zi.get(this).removeChild(this)}appendChild(e){e.parent&&zi.get(e).removeChild(e);let t=this.children.filter(i=>e.contains(i));zi.set(e,this),this.children.push(e),t.forEach(i=>e.appendChild(i)),C.getNotifier(this.store).subscribe(e);for(let[i,s]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):s)}removeChild(e){let t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),C.getNotifier(this.store).unsubscribe(e),e.parent===this?zi.delete(e):!1}contains(e){return ec(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),K.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),K.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let i=ge.getTokenById(t);i&&this.hydrate(i,this.getRaw(i))}hydrate(e,t){if(!this.has(e)){let i=this.bindingObservers.get(e);ge.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let i=new hr(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};K.cssCustomPropertyReflector=new dr;r([u],K.prototype,"children",void 0);Hi=Object.freeze({create:Jp,notifyConnection(o){return!o.isConnected||!K.existsFor(o)?!1:(K.getOrCreate(o).bind(),!0)},notifyDisconnection(o){return o.isConnected||!K.existsFor(o)?!1:(K.getOrCreate(o).unbind(),!0)},registerRoot(o=st){ne.registerRoot(o)},unregisterRoot(o=st){ne.unregisterRoot(o)}})});function Kp(o,e,t){return typeof o=="string"?{name:o,type:e,callback:t}:o}var fr,mr,Eo,gi,Ni,gr,Oo,br,ic=l(()=>{b();T();ho();pr();mo();fr=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),mr=new Map,Eo=new Map,gi=null,Ni=N.createInterface(o=>o.cachedCallback(e=>(gi===null&&(gi=new Oo(null,e)),gi))),gr=Object.freeze({tagFor(o){return Eo.get(o)},responsibleFor(o){let e=o.$$designSystem$$;return e||N.findResponsibleContainer(o).get(Ni)},getOrCreate(o){if(!o)return gi===null&&(gi=N.getOrCreateDOMContainer().get(Ni)),gi;let e=o.$$designSystem$$;if(e)return e;let t=N.getOrCreateDOMContainer(o);if(t.has(Ni,!1))return t.get(Ni);{let i=new Oo(o,t);return t.register(Yt.instance(Ni,i)),i}}});Oo=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>fr.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,i=[],s=this.disambiguate,n=this.shadowRootMode,a={elementPrefix:this.prefix,tryDefineElement(d,h,p){let f=Kp(d,h,p),{name:m,callback:x,baseClass:F}=f,{type:z}=f,ee=m,le=mr.get(ee),Ct=!0;for(;le;){let kt=s(ee,z,le);switch(kt){case fr.ignoreDuplicate:return;case fr.definitionCallbackOnly:Ct=!1,le=void 0;break;default:ee=kt,le=mr.get(ee);break}}Ct&&((Eo.has(z)||z===g)&&(z=class extends z{}),mr.set(ee,z),Eo.set(z,ee),F&&Eo.set(F,ee)),i.push(new br(t,ee,z,n,x,Ct))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Hi.registerRoot(this.designTokenRoot)),t.registerWithContext(a,...e);for(let d of i)d.callback(d),d.willDefine&&d.definition!==null&&d.definition.define();return this}},br=class{constructor(e,t,i,s,n,a){this.container=e,this.name=t,this.type=i,this.shadowRootMode=s,this.callback=n,this.willDefine=a,this.definition=null}definePresentation(e){fo.define(this.name,e,this.container)}defineElement(e){this.definition=new tt(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return gr.tagFor(e)}}});var oc=l(()=>{});var sc=l(()=>{ic();mo();oc()});var rc=l(()=>{ho()});var nc=l(()=>{});var lc,ef,cc,Ui,vr,tf,dc,of,sf,rf,nf,af,lf,ac,cf,df,hc,hf,xr,uf,yr,wr=l(()=>{lc=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],ef=lc.join(","),cc=typeof Element>"u",Ui=cc?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,vr=!cc&&Element.prototype.getRootNode?function(o){return o.getRootNode()}:function(o){return o.ownerDocument},tf=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},dc=function(e){return e.tagName==="INPUT"},of=function(e){return dc(e)&&e.type==="hidden"},sf=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return t},rf=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]},nf=function(e){if(!e.name)return!0;var t=e.form||vr(e),i=function(d){return t.querySelectorAll('input[type="radio"][name="'+d+'"]')},s;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")s=i(window.CSS.escape(e.name));else try{s=i(e.name)}catch(a){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",a.message),!1}var n=rf(s,e.form);return!n||n===e},af=function(e){return dc(e)&&e.type==="radio"},lf=function(e){return af(e)&&!nf(e)},ac=function(e){var t=e.getBoundingClientRect(),i=t.width,s=t.height;return i===0&&s===0},cf=function(e,t){var i=t.displayCheck,s=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var n=Ui.call(e,"details>summary:first-of-type"),a=n?e.parentElement:e;if(Ui.call(a,"details:not([open]) *"))return!0;var d=vr(e).host,h=d?.ownerDocument.contains(d)||e.ownerDocument.contains(e);if(!i||i==="full"){if(typeof s=="function"){for(var p=e;e;){var f=e.parentElement,m=vr(e);if(f&&!f.shadowRoot&&s(f)===!0)return ac(e);e.assignedSlot?e=e.assignedSlot:!f&&m!==e.ownerDocument?e=m.host:e=f}e=p}if(h)return!e.getClientRects().length}else if(i==="non-zero-area")return ac(e);return!1},df=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var i=0;i<t.children.length;i++){var s=t.children.item(i);if(s.tagName==="LEGEND")return Ui.call(t,"fieldset[disabled] *")?!0:!s.contains(e)}return!0}t=t.parentElement}return!1},hc=function(e,t){return!(t.disabled||of(t)||cf(t,e)||sf(t)||df(t))},hf=function(e,t){return!(lf(t)||tf(t)<0||!hc(e,t))},xr=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Ui.call(e,ef)===!1?!1:hf(t,e)},uf=lc.concat("iframe").join(","),yr=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return Ui.call(e,uf)===!1?!1:hc(t,e)}});var Be,uc=l(()=>{$();b();D();wr();T();Be=class extends g{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&!this.hidden)switch(e.key){case Se:this.dismiss(),e.preventDefault();break;case Dt:this.handleTabKeyDown(e);break}},this.handleDocumentFocus=e=>{!e.defaultPrevented&&this.shouldForceFocus(e.target)&&(this.focusFirstElement(),e.preventDefault())},this.handleTabKeyDown=e=>{if(!this.trapFocus||this.hidden)return;let t=this.getTabQueueBounds();if(t.length!==0){if(t.length===1){t[0].focus(),e.preventDefault();return}e.shiftKey&&e.target===t[0]?(t[t.length-1].focus(),e.preventDefault()):!e.shiftKey&&e.target===t[t.length-1]&&(t[0].focus(),e.preventDefault())}},this.getTabQueueBounds=()=>{let e=[];return Be.reduceTabbableItems(e,this)},this.focusFirstElement=()=>{let e=this.getTabQueueBounds();e.length>0?e[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=e=>this.isTrappingFocus&&!this.contains(e),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=e=>{let t=e===void 0?this.shouldTrapFocus():e;t&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),v.queueUpdate(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!t&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=C.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(e,t){switch(t){case"hidden":this.updateTrapFocus();break;default:break}}static reduceTabbableItems(e,t){return t.getAttribute("tabindex")==="-1"?e:xr(t)||Be.isFocusableFastElement(t)&&Be.hasTabbableShadow(t)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(Be.reduceTabbableItems,[])):e}static isFocusableFastElement(e){var t,i;return!!(!((i=(t=e.$fastController)===null||t===void 0?void 0:t.definition.shadowOptions)===null||i===void 0)&&i.delegatesFocus)}static hasTabbableShadow(e){var t,i;return Array.from((i=(t=e.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("*"))!==null&&i!==void 0?i:[]).some(s=>xr(s))}};r([c({mode:"boolean"})],Be.prototype,"modal",void 0);r([c({mode:"boolean"})],Be.prototype,"hidden",void 0);r([c({attribute:"trap-focus",mode:"boolean"})],Be.prototype,"trapFocus",void 0);r([c({attribute:"aria-describedby"})],Be.prototype,"ariaDescribedby",void 0);r([c({attribute:"aria-labelledby"})],Be.prototype,"ariaLabelledby",void 0);r([c({attribute:"aria-label"})],Be.prototype,"ariaLabel",void 0)});var pc=l(()=>{nc();uc()});var fc=l(()=>{});var Ro,mc=l(()=>{$();b();T();Ro=class extends g{connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}};r([c({mode:"boolean"})],Ro.prototype,"expanded",void 0);r([c],Ro.prototype,"title",void 0)});var bc=l(()=>{fc();mc()});var gc,vc=l(()=>{b();gc=(o,e)=>k`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`});var Cr,xc=l(()=>{Cr={separator:"separator",presentation:"presentation"}});var vi,yc=l(()=>{$();b();D();T();xc();vi=class extends g{constructor(){super(...arguments),this.role=Cr.separator,this.orientation=j.horizontal}};r([c],vi.prototype,"role",void 0);r([c],vi.prototype,"orientation",void 0)});var wc=l(()=>{vc();yc()});var Cc,kc=l(()=>{Cc={next:"next",previous:"previous"}});var $c=l(()=>{});var ji,Ic=l(()=>{$();b();T();kc();ji=class extends g{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Cc.next}keyupHandler(e){if(!this.hiddenFromAT){let t=e.key;(t==="Enter"||t==="Space")&&this.$emit("click",e),t==="Escape"&&this.blur()}}};r([c({mode:"boolean"})],ji.prototype,"disabled",void 0);r([c({attribute:"aria-hidden",converter:Ut})],ji.prototype,"hiddenFromAT",void 0);r([c],ji.prototype,"direction",void 0)});var Tc=l(()=>{$c();Ic()});var Sc=l(()=>{Oe()});var Ec=l(()=>{T()});var Oc,Rc=l(()=>{b();be();Oc=(o,e)=>k`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Ue(o,e)}
        <span class="content" part="content">
            <slot ${J("content")}></slot>
        </span>
        ${Ne(o,e)}
    </template>
`});var Dc=l(()=>{tr();Rc()});var ii,kr=l(()=>{$();b();D();ei();ii=class extends oe{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,s;this.ariaActiveDescendant=(s=(i=this.options[t])===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,i)=>{t.checked=Li(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Li(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Li(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,i)=>{t.checked=Li(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let i=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case ce:{this.checkFirstOption(i);return}case Y:{this.checkNextOption(i);return}case X:{this.checkPreviousOption(i);return}case de:{this.checkLastOption(i);return}case Dt:return this.focusAndScrollOptionIntoView(),!0;case Se:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Ee:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,(i=this.options)===null||i===void 0||i.forEach(s=>{s.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var i;let s=Math.max(0,parseInt((i=t?.toFixed())!==null&&i!==void 0?i:"",10));s!==t&&v.queueUpdate(()=>{this.size=s})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(i=>!i.disabled),t=!e.every(i=>i.selected);e.forEach(i=>i.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let i=this.getTypeaheadMatches(),s=this.options.indexOf(i[0]);s>-1&&(this.activeIndex=s,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};r([u],ii.prototype,"activeIndex",void 0);r([c({mode:"boolean"})],ii.prototype,"multiple",void 0);r([c({converter:O})],ii.prototype,"size",void 0)});var Fc=l(()=>{});var Ac=l(()=>{ei();kr();Fc()});var xi,Lc=l(()=>{$();D();b();T();xi=class extends g{constructor(){super(...arguments),this.optionElements=[]}menuElementsChanged(){this.updateOptions()}headerElementsChanged(){this.updateOptions()}footerElementsChanged(){this.updateOptions()}updateOptions(){this.optionElements.splice(0,this.optionElements.length),this.addSlottedListItems(this.headerElements),this.addSlottedListItems(this.menuElements),this.addSlottedListItems(this.footerElements),this.$emit("optionsupdated",{bubbles:!1})}addSlottedListItems(e){e!==void 0&&e.forEach(t=>{t.nodeType===1&&t.getAttribute("role")==="listitem"&&(t.id=t.id||Le("option-"),this.optionElements.push(t))})}};r([u],xi.prototype,"menuElements",void 0);r([u],xi.prototype,"headerElements",void 0);r([u],xi.prototype,"footerElements",void 0);r([u],xi.prototype,"suggestionsAvailableText",void 0)});var pf,yi,$r=l(()=>{$();b();T();pf=k`
    <template>
        ${o=>o.value}
    </template>
`,yi=class extends g{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectView()}handleClick(e){return e.defaultPrevented||this.handleInvoked(),!1}handleInvoked(){this.$emit("pickeroptioninvoked")}updateView(){var e,t;this.disconnectView(),this.customView=(t=(e=this.contentsTemplate)===null||e===void 0?void 0:e.render(this,this))!==null&&t!==void 0?t:pf.render(this,this)}disconnectView(){var e;(e=this.customView)===null||e===void 0||e.dispose(),this.customView=void 0}};r([c({attribute:"value"})],yi.prototype,"value",void 0);r([u],yi.prototype,"contentsTemplate",void 0)});var Pc=l(()=>{});var ff,wi,Ir=l(()=>{$();b();D();T();ff=k`
    <template>
        ${o=>o.value}
    </template>
`,wi=class extends g{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){this.disconnectView(),super.disconnectedCallback()}handleKeyDown(e){return e.defaultPrevented?!1:e.key===te?(this.handleInvoke(),!1):!0}handleClick(e){return e.defaultPrevented||this.handleInvoke(),!1}handleInvoke(){this.$emit("pickeriteminvoked")}updateView(){var e,t;this.disconnectView(),this.customView=(t=(e=this.contentsTemplate)===null||e===void 0?void 0:e.render(this,this))!==null&&t!==void 0?t:ff.render(this,this)}disconnectView(){var e;(e=this.customView)===null||e===void 0||e.dispose(),this.customView=void 0}};r([c({attribute:"value"})],wi.prototype,"value",void 0);r([u],wi.prototype,"contentsTemplate",void 0)});var Mc=l(()=>{});var Tr,Do,Bc=l(()=>{Oe();T();Tr=class extends g{},Do=class extends ue(Tr){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var mf,L,Vc=l(()=>{$();b();D();Gs();$r();Ir();Bc();mf=k`
    <input
        slot="input-region"
        role="combobox"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        haspopup="list"
        aria-label="${o=>o.label}"
        aria-labelledby="${o=>o.labelledBy}"
        placeholder="${o=>o.placeholder}"
        ${Q("inputElement")}
    ></input>
`,L=class extends Do{constructor(){super(...arguments),this.selection="",this.filterSelected=!0,this.filterQuery=!0,this.noSuggestionsText="No suggestions available",this.suggestionsAvailableText="Suggestions available",this.loadingText="Loading suggestions",this.menuPlacement="bottom-fill",this.showLoading=!1,this.optionsList=[],this.filteredOptionsList=[],this.flyoutOpen=!1,this.menuFocusIndex=-1,this.showNoOptions=!1,this.selectedItems=[],this.inputElementView=null,this.handleTextInput=e=>{this.query=this.inputElement.value},this.handleInputClick=e=>{e.preventDefault(),this.toggleFlyout(!0)},this.setRegionProps=()=>{if(this.flyoutOpen){if(this.region===null||this.region===void 0){v.queueUpdate(this.setRegionProps);return}this.region.anchorElement=this.inputElement}},this.configLookup={top:Ns,bottom:Us,tallest:js,"top-fill":ll,"bottom-fill":qs,"tallest-fill":cl}}selectionChanged(){this.$fastController.isConnected&&(this.handleSelectionChange(),this.proxy instanceof HTMLInputElement&&(this.proxy.value=this.selection,this.validate()))}optionsChanged(){this.optionsList=this.options.split(",").map(e=>e.trim()).filter(e=>e!=="")}menuPlacementChanged(){this.$fastController.isConnected&&this.updateMenuConfig()}showLoadingChanged(){this.$fastController.isConnected&&v.queueUpdate(()=>{this.setFocusedOption(0)})}listItemTemplateChanged(){this.updateListItemTemplate()}defaultListItemTemplateChanged(){this.updateListItemTemplate()}menuOptionTemplateChanged(){this.updateOptionTemplate()}defaultMenuOptionTemplateChanged(){this.updateOptionTemplate()}optionsListChanged(){this.updateFilteredOptions()}queryChanged(){this.$fastController.isConnected&&(this.inputElement.value!==this.query&&(this.inputElement.value=this.query),this.updateFilteredOptions(),this.$emit("querychange",{bubbles:!1}))}filteredOptionsListChanged(){this.$fastController.isConnected&&(this.showNoOptions=this.filteredOptionsList.length===0&&this.menuElement.querySelectorAll('[role="listitem"]').length===0,this.setFocusedOption(this.showNoOptions?-1:0))}flyoutOpenChanged(){this.flyoutOpen?(v.queueUpdate(this.setRegionProps),this.$emit("menuopening",{bubbles:!1})):this.$emit("menuclosing",{bubbles:!1})}showNoOptionsChanged(){this.$fastController.isConnected&&v.queueUpdate(()=>{this.setFocusedOption(0)})}connectedCallback(){super.connectedCallback(),this.listElement=document.createElement(this.selectedListTag),this.appendChild(this.listElement),this.itemsPlaceholderElement=document.createComment(""),this.listElement.append(this.itemsPlaceholderElement),this.inputElementView=mf.render(this,this.listElement);let e=this.menuTag.toUpperCase();this.menuElement=Array.from(this.children).find(t=>t.tagName===e),this.menuElement===void 0&&(this.menuElement=document.createElement(this.menuTag),this.appendChild(this.menuElement)),this.menuElement.id===""&&(this.menuElement.id=Le("listbox-")),this.menuId=this.menuElement.id,this.optionsPlaceholder=document.createComment(""),this.menuElement.append(this.optionsPlaceholder),this.updateMenuConfig(),v.queueUpdate(()=>this.initialize())}disconnectedCallback(){super.disconnectedCallback(),this.toggleFlyout(!1),this.inputElement.removeEventListener("input",this.handleTextInput),this.inputElement.removeEventListener("click",this.handleInputClick),this.inputElementView!==null&&(this.inputElementView.dispose(),this.inputElementView=null)}focus(){this.inputElement.focus()}initialize(){this.updateListItemTemplate(),this.updateOptionTemplate(),this.itemsRepeatBehavior=new dt(e=>e.selectedItems,e=>e.activeListItemTemplate,{positioning:!0}).createBehavior(this.itemsPlaceholderElement),this.inputElement.addEventListener("input",this.handleTextInput),this.inputElement.addEventListener("click",this.handleInputClick),this.$fastController.addBehaviors([this.itemsRepeatBehavior]),this.menuElement.suggestionsAvailableText=this.suggestionsAvailableText,this.menuElement.addEventListener("optionsupdated",this.handleMenuOptionsUpdated),this.optionsRepeatBehavior=new dt(e=>e.filteredOptionsList,e=>e.activeMenuOptionTemplate,{positioning:!0}).createBehavior(this.optionsPlaceholder),this.$fastController.addBehaviors([this.optionsRepeatBehavior]),this.handleSelectionChange()}toggleFlyout(e){if(this.flyoutOpen!==e){if(e&&document.activeElement===this.inputElement){this.flyoutOpen=e,v.queueUpdate(()=>{this.menuElement!==void 0?this.setFocusedOption(0):this.disableMenu()});return}this.flyoutOpen=!1,this.disableMenu()}}handleMenuOptionsUpdated(e){e.preventDefault(),this.flyoutOpen&&this.setFocusedOption(0)}handleKeyDown(e){if(e.defaultPrevented)return!1;switch(e.key){case Y:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{let t=this.flyoutOpen?Math.min(this.menuFocusIndex+1,this.menuElement.optionElements.length-1):0;this.setFocusedOption(t)}return!1}case X:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{let t=this.flyoutOpen?Math.max(this.menuFocusIndex-1,0):0;this.setFocusedOption(t)}return!1}case Se:return this.toggleFlyout(!1),!1;case te:return this.menuFocusIndex!==-1&&this.menuElement.optionElements.length>this.menuFocusIndex&&this.menuElement.optionElements[this.menuFocusIndex].click(),!1;case ye:return document.activeElement!==this.inputElement?(this.incrementFocusedItem(1),!1):!0;case xe:return this.inputElement.selectionStart===0?(this.incrementFocusedItem(-1),!1):!0;case ja:case Ua:{if(document.activeElement===null)return!0;if(document.activeElement===this.inputElement)return this.inputElement.selectionStart===0?(this.selection=this.selectedItems.slice(0,this.selectedItems.length-1).toString(),this.toggleFlyout(!1),!1):!0;let t=Array.from(this.listElement.children),i=t.indexOf(document.activeElement);return i>-1?(this.selection=this.selectedItems.splice(i,1).toString(),v.queueUpdate(()=>{t[Math.min(t.length,i)].focus()}),!1):!0}}return this.toggleFlyout(!0),!0}handleFocusIn(e){return!1}handleFocusOut(e){return(this.menuElement===void 0||!this.menuElement.contains(e.relatedTarget))&&this.toggleFlyout(!1),!1}handleSelectionChange(){this.selectedItems.toString()!==this.selection&&(this.selectedItems=this.selection===""?[]:this.selection.split(","),this.updateFilteredOptions(),v.queueUpdate(()=>{this.checkMaxItems()}),this.$emit("selectionchange",{bubbles:!1}))}handleRegionLoaded(e){v.queueUpdate(()=>{this.setFocusedOption(0),this.$emit("menuloaded",{bubbles:!1})})}checkMaxItems(){if(this.inputElement!==void 0)if(this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected){if(document.activeElement===this.inputElement){let e=Array.from(this.listElement.querySelectorAll("[role='listitem']"));e[e.length-1].focus()}this.inputElement.hidden=!0}else this.inputElement.hidden=!1}handleItemInvoke(e){if(e.defaultPrevented)return!1;if(e.target instanceof wi){let i=Array.from(this.listElement.querySelectorAll("[role='listitem']")).indexOf(e.target);if(i!==-1){let s=this.selectedItems.slice();s.splice(i,1),this.selection=s.toString(),v.queueUpdate(()=>this.incrementFocusedItem(0))}return!1}return!0}handleOptionInvoke(e){return e.defaultPrevented?!1:e.target instanceof yi?(e.target.value!==void 0&&(this.selection=`${this.selection}${this.selection===""?"":","}${e.target.value}`),this.inputElement.value="",this.query="",this.inputElement.focus(),this.toggleFlyout(!1),!1):!0}incrementFocusedItem(e){if(this.selectedItems.length===0){this.inputElement.focus();return}let t=Array.from(this.listElement.querySelectorAll("[role='listitem']"));if(document.activeElement!==null){let i=t.indexOf(document.activeElement);i===-1&&(i=t.length);let s=Math.min(t.length,Math.max(0,i+e));s===t.length?this.maxSelected!==void 0&&this.selectedItems.length>=this.maxSelected?t[s-1].focus():this.inputElement.focus():t[s].focus()}}disableMenu(){var e,t,i;this.menuFocusIndex=-1,this.menuFocusOptionId=void 0,(e=this.inputElement)===null||e===void 0||e.removeAttribute("aria-activedescendant"),(t=this.inputElement)===null||t===void 0||t.removeAttribute("aria-owns"),(i=this.inputElement)===null||i===void 0||i.removeAttribute("aria-expanded")}setFocusedOption(e){if(!this.flyoutOpen||e===-1||this.showNoOptions||this.showLoading){this.disableMenu();return}if(this.menuElement.optionElements.length===0)return;this.menuElement.optionElements.forEach(i=>{i.setAttribute("aria-selected","false")}),this.menuFocusIndex=e,this.menuFocusIndex>this.menuElement.optionElements.length-1&&(this.menuFocusIndex=this.menuElement.optionElements.length-1),this.menuFocusOptionId=this.menuElement.optionElements[this.menuFocusIndex].id,this.inputElement.setAttribute("aria-owns",this.menuId),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.setAttribute("aria-activedescendant",this.menuFocusOptionId);let t=this.menuElement.optionElements[this.menuFocusIndex];t.setAttribute("aria-selected","true"),this.menuElement.scrollTo(0,t.offsetTop)}updateListItemTemplate(){var e;this.activeListItemTemplate=(e=this.listItemTemplate)!==null&&e!==void 0?e:this.defaultListItemTemplate}updateOptionTemplate(){var e;this.activeMenuOptionTemplate=(e=this.menuOptionTemplate)!==null&&e!==void 0?e:this.defaultMenuOptionTemplate}updateFilteredOptions(){this.filteredOptionsList=this.optionsList.slice(0),this.filterSelected&&(this.filteredOptionsList=this.filteredOptionsList.filter(e=>this.selectedItems.indexOf(e)===-1)),this.filterQuery&&this.query!==""&&this.query!==void 0&&(this.filteredOptionsList=this.filteredOptionsList.filter(e=>e.indexOf(this.query)!==-1))}updateMenuConfig(){let e=this.configLookup[this.menuPlacement];e===null&&(e=qs),this.menuConfig=Object.assign(Object.assign({},e),{autoUpdateMode:"auto",fixedPlacement:!0,horizontalViewportLock:!1,verticalViewportLock:!1})}};r([c({attribute:"selection"})],L.prototype,"selection",void 0);r([c({attribute:"options"})],L.prototype,"options",void 0);r([c({attribute:"filter-selected",mode:"boolean"})],L.prototype,"filterSelected",void 0);r([c({attribute:"filter-query",mode:"boolean"})],L.prototype,"filterQuery",void 0);r([c({attribute:"max-selected"})],L.prototype,"maxSelected",void 0);r([c({attribute:"no-suggestions-text"})],L.prototype,"noSuggestionsText",void 0);r([c({attribute:"suggestions-available-text"})],L.prototype,"suggestionsAvailableText",void 0);r([c({attribute:"loading-text"})],L.prototype,"loadingText",void 0);r([c({attribute:"label"})],L.prototype,"label",void 0);r([c({attribute:"labelledby"})],L.prototype,"labelledBy",void 0);r([c({attribute:"placeholder"})],L.prototype,"placeholder",void 0);r([c({attribute:"menu-placement"})],L.prototype,"menuPlacement",void 0);r([u],L.prototype,"showLoading",void 0);r([u],L.prototype,"listItemTemplate",void 0);r([u],L.prototype,"defaultListItemTemplate",void 0);r([u],L.prototype,"activeListItemTemplate",void 0);r([u],L.prototype,"menuOptionTemplate",void 0);r([u],L.prototype,"defaultMenuOptionTemplate",void 0);r([u],L.prototype,"activeMenuOptionTemplate",void 0);r([u],L.prototype,"listItemContentsTemplate",void 0);r([u],L.prototype,"menuOptionContentsTemplate",void 0);r([u],L.prototype,"optionsList",void 0);r([u],L.prototype,"query",void 0);r([u],L.prototype,"filteredOptionsList",void 0);r([u],L.prototype,"flyoutOpen",void 0);r([u],L.prototype,"menuId",void 0);r([u],L.prototype,"selectedListTag",void 0);r([u],L.prototype,"menuTag",void 0);r([u],L.prototype,"menuFocusIndex",void 0);r([u],L.prototype,"menuFocusOptionId",void 0);r([u],L.prototype,"showNoOptions",void 0);r([u],L.prototype,"menuConfig",void 0);r([u],L.prototype,"selectedItems",void 0)});var _c=l(()=>{});var zc=l(()=>{});var Hc=l(()=>{});var Nc=l(()=>{});var Uc=l(()=>{Mc();Vc();_c();Lc();zc();$r();Hc();Pc();Nc();Ir()});var De,Sr,jc=l(()=>{De={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},Sr={[De.menuitem]:"menuitem",[De.menuitemcheckbox]:"menuitemcheckbox",[De.menuitemradio]:"menuitemradio"}});var Fe,qc=l(()=>{$();b();D();T();be();Lt();fe();jc();Fe=class extends g{constructor(){super(...arguments),this.role=De.menuitem,this.hasSubmenu=!1,this.currentDirection=R.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=e=>{if(e.defaultPrevented)return!1;switch(e.key){case te:case Ee:return this.invoke(),!1;case ye:return this.expandAndFocus(),!1;case xe:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=e=>(e.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=e=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=e=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case De.menuitemcheckbox:this.checked=!this.checked;break;case De.menuitem:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case De.menuitemradio:this.checked||(this.checked=!0);break}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find(e=>e.getAttribute("role")==="menu"),this.hasSubmenu=this.submenu!==void 0}}expandedChanged(e){if(this.$fastController.isConnected){if(this.submenu===void 0)return;this.expanded===!1?this.submenu.collapseExpandedItem():this.currentDirection=Pe(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(e,t){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),v.queueUpdate(()=>{this.updateSubmenu()}),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,this.observer!==void 0&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}};r([c({mode:"boolean"})],Fe.prototype,"disabled",void 0);r([c({mode:"boolean"})],Fe.prototype,"expanded",void 0);r([u],Fe.prototype,"startColumnCount",void 0);r([c],Fe.prototype,"role",void 0);r([c({mode:"boolean"})],Fe.prototype,"checked",void 0);r([u],Fe.prototype,"submenuRegion",void 0);r([u],Fe.prototype,"hasSubmenu",void 0);r([u],Fe.prototype,"currentDirection",void 0);r([u],Fe.prototype,"submenu",void 0);E(Fe,V)});var Gc=l(()=>{});var Er=l(()=>{Gc();qc()});var Wc=l(()=>{});var Ci,Yc=l(()=>{$();b();D();Er();T();Ci=class extends g{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&it(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=e=>{if(!this.contains(e.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();let t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=e=>{let t=e.target;this.menuItems!==void 0&&t!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.handleExpandedChanged=e=>{if(e.defaultPrevented||e.target===null||this.menuItems===void 0||this.menuItems.indexOf(e.target)<0)return;e.preventDefault();let t=e.target;if(this.expandedItem!==null&&t===this.expandedItem&&t.expanded===!1){this.expandedItem=null;return}t.expanded&&(this.expandedItem!==null&&this.expandedItem!==t&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=t,this.focusIndex=this.menuItems.indexOf(t),t.setAttribute("tabindex","0"))},this.removeItemListeners=()=>{this.menuItems!==void 0&&this.menuItems.forEach(e=>{e.removeEventListener("expanded-change",this.handleExpandedChanged),e.removeEventListener("focus",this.handleItemFocus)})},this.setItems=()=>{let e=this.domChildren();this.removeItemListeners(),this.menuItems=e;let t=this.menuItems.filter(this.isMenuItemElement);t.length&&(this.focusIndex=0);function i(n){let a=n.getAttribute("role"),d=n.querySelector("[slot=start]");return a!==De.menuitem&&d===null||a===De.menuitem&&d!==null?1:a!==De.menuitem&&d!==null?2:0}let s=t.reduce((n,a)=>{let d=i(a);return n>d?n:d},0);t.forEach((n,a)=>{n.setAttribute("tabindex",a===0?"0":"-1"),n.addEventListener("expanded-change",this.handleExpandedChanged),n.addEventListener("focus",this.handleItemFocus),n instanceof Fe&&(n.startColumnCount=s)})},this.changeHandler=e=>{if(this.menuItems===void 0)return;let t=e.target,i=this.menuItems.indexOf(t);if(i!==-1&&t.role==="menuitemradio"&&t.checked===!0){for(let n=i-1;n>=0;--n){let a=this.menuItems[n],d=a.getAttribute("role");if(d===De.menuitemradio&&(a.checked=!1),d==="separator")break}let s=this.menuItems.length-1;for(let n=i+1;n<=s;++n){let a=this.menuItems[n],d=a.getAttribute("role");if(d===De.menuitemradio&&(a.checked=!1),d==="separator")break}}},this.isMenuItemElement=e=>it(e)&&Ci.focusableElementRoles.hasOwnProperty(e.getAttribute("role")),this.isFocusableElement=e=>this.isMenuItemElement(e)}itemsChanged(e,t){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),v.queueUpdate(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(e){if(!(e.defaultPrevented||this.menuItems===void 0))switch(e.key){case Y:this.setFocus(this.focusIndex+1,1);return;case X:this.setFocus(this.focusIndex-1,-1);return;case de:this.setFocus(this.menuItems.length-1,-1);return;case ce:this.setFocus(0,1);return;default:return!0}}domChildren(){return Array.from(this.children).filter(e=>!e.hasAttribute("hidden"))}setFocus(e,t){if(this.menuItems!==void 0)for(;e>=0&&e<this.menuItems.length;){let i=this.menuItems[e];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=e,i.setAttribute("tabindex","0"),i.focus();break}e+=t}}};Ci.focusableElementRoles=Sr;r([u],Ci.prototype,"items",void 0)});var Xc=l(()=>{Wc();Yc()});var Qc=l(()=>{});var Or,Fo,Zc=l(()=>{Oe();T();Or=class extends g{},Fo=class extends ue(Or){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var Rr,Jc=l(()=>{Rr={email:"email",password:"password",tel:"tel",text:"text",url:"url"}});var Ce,Bt,Ao=l(()=>{$();b();Qt();fe();Zc();Jc();Ce=class extends Fo{constructor(){super(...arguments),this.type=Rr.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&v.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};r([c({attribute:"readonly",mode:"boolean"})],Ce.prototype,"readOnly",void 0);r([c({mode:"boolean"})],Ce.prototype,"autofocus",void 0);r([c],Ce.prototype,"placeholder",void 0);r([c],Ce.prototype,"type",void 0);r([c],Ce.prototype,"list",void 0);r([c({converter:O})],Ce.prototype,"maxlength",void 0);r([c({converter:O})],Ce.prototype,"minlength",void 0);r([c],Ce.prototype,"pattern",void 0);r([c({converter:O})],Ce.prototype,"size",void 0);r([c({mode:"boolean"})],Ce.prototype,"spellcheck",void 0);r([u],Ce.prototype,"defaultSlottedNodes",void 0);Bt=class{};E(Bt,A);E(Ce,V,Bt)});var Dr,Lo,Kc=l(()=>{Oe();T();Dr=class extends g{},Lo=class extends ue(Dr){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var $e,ed=l(()=>{$();b();D();be();fe();Ao();Kc();$e=class extends Lo{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(e,t){var i;this.max=Math.max(t,(i=this.min)!==null&&i!==void 0?i:t);let s=Math.min(this.min,this.max);this.min!==void 0&&this.min!==s&&(this.min=s),this.value=this.getValidValue(this.value)}minChanged(e,t){var i;this.min=Math.min(t,(i=this.max)!==null&&i!==void 0?i:t);let s=Math.max(this.min,this.max);this.max!==void 0&&this.max!==s&&(this.max=s),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,t){this.value=this.getValidValue(t),t===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(e,this.value),e!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(e){var t,i;let s=parseFloat(parseFloat(e).toPrecision(12));return isNaN(s)?s="":(s=Math.min(s,(t=this.max)!==null&&t!==void 0?t:s),s=Math.max(s,(i=this.min)!==null&&i!==void 0?i:s).toString()),s}stepUp(){let e=parseFloat(this.value),t=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:e+this.step;this.value=t.toString()}stepDown(){let e=parseFloat(this.value),t=isNaN(e)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:e-this.step;this.value=t.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&v.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case X:return this.stepUp(),!1;case Y:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};r([c({attribute:"readonly",mode:"boolean"})],$e.prototype,"readOnly",void 0);r([c({mode:"boolean"})],$e.prototype,"autofocus",void 0);r([c({attribute:"hide-step",mode:"boolean"})],$e.prototype,"hideStep",void 0);r([c],$e.prototype,"placeholder",void 0);r([c],$e.prototype,"list",void 0);r([c({converter:O})],$e.prototype,"maxlength",void 0);r([c({converter:O})],$e.prototype,"minlength",void 0);r([c({converter:O})],$e.prototype,"size",void 0);r([c({converter:O})],$e.prototype,"step",void 0);r([c({converter:O})],$e.prototype,"max",void 0);r([c({converter:O})],$e.prototype,"min",void 0);r([u],$e.prototype,"defaultSlottedNodes",void 0);E($e,V,Bt)});var td=l(()=>{Qc();ed()});var id,od,sd=l(()=>{b();id=44,od=(o,e)=>k`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${qt(t=>typeof t.value=="number",k`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>id*t.percentComplete/100}px ${id}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,k`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`});var rd=l(()=>{sd()});var gt,nd=l(()=>{$();b();T();gt=class extends g{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){let e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,s=t-e;this.percentComplete=s===0?0:Math.fround((i-e)/s*100)}};r([c({converter:O})],gt.prototype,"value",void 0);r([c({converter:O})],gt.prototype,"min",void 0);r([c({converter:O})],gt.prototype,"max",void 0);r([c({mode:"boolean"})],gt.prototype,"paused",void 0);r([u],gt.prototype,"percentComplete",void 0)});var ad=l(()=>{});var ld=l(()=>{nd();ad()});var cd,dd=l(()=>{b();D();cd=(o,e)=>k`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @focusout="${(t,i)=>t.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===j.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${J({property:"slottedRadioButtons",filter:Gt("[role=radio]")})}
            ></slot>
        </div>
    </template>
`});var Xe,hd=l(()=>{$();b();D();Lt();T();Xe=class extends g{constructor(){super(...arguments),this.orientation=j.horizontal,this.radioChangeHandler=e=>{let t=e.target;t.checked&&(this.slottedRadioButtons.forEach(i=>{i!==t&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{let i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(s=>{s!==i&&s.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{let t=this.slottedRadioButtons,i=e.target,s=i!==null?t.indexOf(i):0,n=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(n===0&&s===n||n===t.length-1&&n===s)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(a=>{a!==this.selectedRadio&&a.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(a=>{a!==this.focusedRadio&&a.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{let t=e.target;if(t){let i=this.slottedRadioButtons;t.checked||i.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===ye,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===xe,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{let t=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key)){this.moveRightOffGroup();return}else i===t.length&&(i=0);for(;i<t.length&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(t,i);break}},this.moveLeft=e=>{let t=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}else{this.moveToRadioByIndex(t,i);break}},this.keydownHandler=e=>{let t=e.key;if(t in Ft&&this.isInsideFoundationToolbar)return!0;switch(t){case te:{this.checkFocusedRadio();break}case ye:case Y:{this.direction===R.ltr?this.moveRight(e):this.moveLeft(e);break}case xe:case X:{this.direction===R.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Pe(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){let e=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),t=e?e.length:0;if(t>1){let s=e[t-1];s.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(s=>{this.name!==void 0&&s.setAttribute("name",this.name),this.disabled&&(s.disabled=!0),this.readOnly&&(s.readOnly=!0),this.value&&this.value===s.value?(this.selectedRadio=s,this.focusedRadio=s,s.checked=!0,s.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"),s.checked=!1),s.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){let s=this.slottedRadioButtons.filter(a=>a.hasAttribute("checked")),n=s!==null?s.length:0;if(n>0&&!i){let a=s[n-1];a.checked=!0,this.focusedRadio=a,a.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};r([c({attribute:"readonly",mode:"boolean"})],Xe.prototype,"readOnly",void 0);r([c({attribute:"disabled",mode:"boolean"})],Xe.prototype,"disabled",void 0);r([c],Xe.prototype,"name",void 0);r([c],Xe.prototype,"value",void 0);r([c],Xe.prototype,"orientation",void 0);r([u],Xe.prototype,"childItems",void 0);r([u],Xe.prototype,"slottedRadioButtons",void 0)});var ud=l(()=>{dd();hd()});var pd,fd=l(()=>{b();pd=(o,e)=>k`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${J("defaultSlottedNodes")}></slot>
        </label>
    </template>
`});var Fr,Po,md=l(()=>{Oe();T();Fr=class extends g{},Po=class extends pi(Fr){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var oi,bd=l(()=>{$();b();D();md();oi=class extends Po{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Ee:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};r([c({attribute:"readonly",mode:"boolean"})],oi.prototype,"readOnly",void 0);r([u],oi.prototype,"name",void 0);r([u],oi.prototype,"defaultSlottedNodes",void 0)});var gd=l(()=>{fd();bd()});var vt,vd=l(()=>{$();b();T();vt=class extends g{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(e,t){if(this.scrollContainer){let i=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(i,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(e,t){t&&!this.updatingItems&&v.queueUpdate(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;let e=this.scrollItems.reduce((t,i)=>i instanceof HTMLSlotElement?t.concat(i.assignedElements()):(t.push(i),t),[]);this.scrollItems=e,this.updatingItems=!1}setStops(){this.updateScrollStops();let{scrollContainer:e}=this,{scrollLeft:t}=e,{width:i,left:s}=e.getBoundingClientRect();this.width=i;let n=0,a=this.scrollItems.map((d,h)=>{let{left:p,width:f}=d.getBoundingClientRect(),m=Math.round(p+t-s),x=Math.round(m+f);return this.isRtl?-x:(n=x,h===0?0:m)}).concat(n);a=this.fixScrollMisalign(a),a.sort((d,h)=>Math.abs(d)-Math.abs(h)),this.scrollStops=a,this.setFlippers()}validateStops(e=!0){let t=()=>!!this.scrollStops.find(i=>i>0);return!t()&&e&&this.setStops(),t()}fixScrollMisalign(e){if(this.isRtl&&e.some(t=>t>0)){e.sort((i,s)=>s-i);let t=e[0];e=e.map(i=>i-t)}return e}setFlippers(){var e,t;let i=this.scrollContainer.scrollLeft;if((e=this.previousFlipperContainer)===null||e===void 0||e.classList.toggle("disabled",i===0),this.scrollStops){let s=Math.abs(this.scrollStops[this.scrollStops.length-1]);(t=this.nextFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(i)+this.width>=s)}}scrollInView(e,t=0,i){var s;if(typeof e!="number"&&e&&(e=this.scrollItems.findIndex(n=>n===e||n.contains(e))),e!==void 0){i=i??t;let{scrollContainer:n,scrollStops:a,scrollItems:d}=this,{scrollLeft:h}=this.scrollContainer,{width:p}=n.getBoundingClientRect(),f=a[e],{width:m}=d[e].getBoundingClientRect(),x=f+m,F=h+t>f;if(F||h+p-i<x){let ee=(s=[...a].sort((le,Ct)=>F?Ct-le:le-Ct).find(le=>F?le+t<f:le+p-(i??0)>x))!==null&&s!==void 0?s:0;this.scrollToPosition(ee)}}}keyupHandler(e){switch(e.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();let e=this.scrollContainer.scrollLeft,t=this.scrollStops.findIndex((n,a)=>n>=e&&(this.isRtl||a===this.scrollStops.length-1||this.scrollStops[a+1]>e)),i=Math.abs(this.scrollStops[t+1]),s=this.scrollStops.findIndex(n=>Math.abs(n)+this.width>i);(s>=t||s===-1)&&(s=t>0?t-1:0),this.scrollToPosition(this.scrollStops[s],e)}scrollToNext(){this.validateStops();let e=this.scrollContainer.scrollLeft,t=this.scrollStops.findIndex(n=>Math.abs(n)>=Math.abs(e)),i=this.scrollStops.findIndex(n=>Math.abs(e)+this.width<=Math.abs(n)),s=t;i>t+2?s=i-2:t<this.scrollStops.length-2&&(s=t+1),this.scrollToPosition(this.scrollStops[s],e)}scrollToPosition(e,t=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;let s=(i=this.duration)!==null&&i!==void 0?i:`${Math.abs(e-t)/this.speed}s`;this.content.style.setProperty("transition-duration",s);let n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),a=p=>{p&&p.target!==p.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=e,this.setFlippers(),this.content.removeEventListener("transitionend",a),this.scrolling=!1)};if(n===0){a();return}this.content.addEventListener("transitionend",a);let d=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth,h=this.scrollContainer.scrollLeft-Math.min(e,d);this.isRtl&&(h=this.scrollContainer.scrollLeft+Math.min(Math.abs(e),d)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${h}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};r([c({converter:O})],vt.prototype,"speed",void 0);r([c],vt.prototype,"duration",void 0);r([c],vt.prototype,"easing",void 0);r([c({attribute:"flippers-hidden-from-at",converter:Ut})],vt.prototype,"flippersHiddenFromAT",void 0);r([u],vt.prototype,"scrolling",void 0);r([u],vt.prototype,"scrollItems",void 0);r([c({attribute:"view"})],vt.prototype,"view",void 0)});var xd=l(()=>{});var yd=l(()=>{vd();xd()});function wd(o,e,t){return o.nodeType!==Node.TEXT_NODE?!0:typeof o.nodeValue=="string"&&!!o.nodeValue.trim().length}var Ar=l(()=>{});var Cd=l(()=>{});var Lr,Mo,kd=l(()=>{Oe();T();Lr=class extends g{},Mo=class extends ue(Lr){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var Ve,Bo,$d=l(()=>{$();b();Qt();fe();kd();Ve=class extends Mo{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&v.queueUpdate(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};r([c({attribute:"readonly",mode:"boolean"})],Ve.prototype,"readOnly",void 0);r([c({mode:"boolean"})],Ve.prototype,"autofocus",void 0);r([c],Ve.prototype,"placeholder",void 0);r([c],Ve.prototype,"list",void 0);r([c({converter:O})],Ve.prototype,"maxlength",void 0);r([c({converter:O})],Ve.prototype,"minlength",void 0);r([c],Ve.prototype,"pattern",void 0);r([c({converter:O})],Ve.prototype,"size",void 0);r([c({mode:"boolean"})],Ve.prototype,"spellcheck",void 0);r([u],Ve.prototype,"defaultSlottedNodes",void 0);Bo=class{};E(Bo,A);E(Ve,V,Bo)});var Id=l(()=>{Cd();$d()});var Pr,Vo,Td=l(()=>{kr();Oe();Pr=class extends ii{},Vo=class extends ue(Pr){constructor(){super(...arguments),this.proxy=document.createElement("select")}}});var Qe,qi,Sd=l(()=>{$();b();D();ei();be();fe();Td();$o();Qe=class extends Vo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Le("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,v.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return C.track(this,"value"),this._value}set value(e){var t,i,s,n,a,d,h;let p=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let f=this._options.findIndex(F=>F.value===e),m=(s=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:null,x=(a=(n=this._options[f])===null||n===void 0?void 0:n.value)!==null&&a!==void 0?a:null;(f===-1||m!==x)&&(e="",this.selectedIndex=f),e=(h=(d=this.firstSelectedOption)===null||d===void 0?void 0:d.value)!==null&&h!==void 0?h:e}p!==e&&(this._value=e,super.valueChanged(p,e),C.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?mt.above:mt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===mt.above?~~e.top:~~i}get displayValue(){var e,t;return C.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(i=>{C.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(i=>{C.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),(i=this.options)===null||i===void 0||i.forEach((s,n)=>{var a;let d=(a=this.proxy)===null||a===void 0?void 0:a.options.item(n);d&&(d.selected=s.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(oe.slottedOptionFilter),i=t?.findIndex(s=>s.hasAttribute("selected")||s.selected||s.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case Ee:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case ce:case de:{e.preventDefault();break}case te:{e.preventDefault(),this.open=!this.open;break}case Se:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Dt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Y||t===X)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&C.notify(this,"displayValue")}};r([c({attribute:"open",mode:"boolean"})],Qe.prototype,"open",void 0);r([Pn],Qe.prototype,"collapsible",null);r([u],Qe.prototype,"control",void 0);r([c({attribute:"position"})],Qe.prototype,"positionAttribute",void 0);r([u],Qe.prototype,"position",void 0);r([u],Qe.prototype,"maxHeight",void 0);qi=class{};r([u],qi.prototype,"ariaControls",void 0);E(qi,Ge);E(Qe,V,qi)});var Ed,Od=l(()=>{b();ei();be();Ed=(o,e)=>k`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @focusin="${(t,i)=>t.focusinHandler(i.event)}"
        @focusout="${(t,i)=>t.focusoutHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @mousedown="${(t,i)=>t.mousedownHandler(i.event)}"
    >
        ${qt(t=>t.collapsible,k`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${Q("control")}
                >
                    ${Ue(o,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${Ne(o,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${Q("listbox")}
        >
            <slot
                ${J({filter:oe.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`});var Rd=l(()=>{Sd();$o();Od()});var Dd=l(()=>{});var ki,Fd=l(()=>{$();b();T();ki=class extends g{constructor(){super(...arguments),this.shape="rect"}};r([c],ki.prototype,"fill",void 0);r([c],ki.prototype,"shape",void 0);r([c],ki.prototype,"pattern",void 0);r([c({mode:"boolean"})],ki.prototype,"shimmer",void 0)});var Ad=l(()=>{Dd();Fd()});var Ld=l(()=>{});function Gi(o,e,t,i){let s=At(0,1,(o-e)/(t-e));return i===R.rtl&&(s=1-s),s}var Mr=l(()=>{D()});var _o,rt,Pd=l(()=>{$();b();D();Mr();T();_o={min:0,max:0,direction:R.ltr,orientation:j.horizontal,disabled:!1},rt=class extends g{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=R.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=_o.direction||R.ltr,this.sliderOrientation=_o.orientation||j.horizontal,this.sliderMaxPosition=_o.max,this.sliderMinPosition=_o.min;else{let e=this.parentNode,{min:t,max:i,direction:s,orientation:n,disabled:a}=e;a!==void 0&&(this.disabled=a),this.sliderDirection=s||R.ltr,this.sliderOrientation=n||j.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=t}},this.positionAsStyle=()=>{let e=this.sliderDirection?this.sliderDirection:R.ltr,t=Gi(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition)),i=Math.round((1-t)*100),s=Math.round(t*100);return Number.isNaN(s)&&Number.isNaN(i)&&(i=50,s=50),this.sliderOrientation===j.horizontal?e===R.rtl?`right: ${s}%; left: ${i}%;`:`left: ${s}%; right: ${i}%;`:`top: ${s}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=C.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(e,t){switch(t){case"direction":this.sliderDirection=e.direction;break;case"orientation":this.sliderOrientation=e.orientation;break;case"max":this.sliderMaxPosition=e.max;break;case"min":this.sliderMinPosition=e.min;break;default:break}this.positionStyle=this.positionAsStyle()}isSliderConfig(e){return e.max!==void 0&&e.min!==void 0}};r([u],rt.prototype,"positionStyle",void 0);r([c],rt.prototype,"position",void 0);r([c({attribute:"hide-mark",mode:"boolean"})],rt.prototype,"hideMark",void 0);r([c({attribute:"disabled",mode:"boolean"})],rt.prototype,"disabled",void 0);r([u],rt.prototype,"sliderOrientation",void 0);r([u],rt.prototype,"sliderMinPosition",void 0);r([u],rt.prototype,"sliderMaxPosition",void 0);r([u],rt.prototype,"sliderDirection",void 0)});var Md=l(()=>{Ld();Pd()});var Bd=l(()=>{});var Br,zo,Vd=l(()=>{Oe();T();Br=class extends g{},zo=class extends ue(Br){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var bf,ve,_d=l(()=>{$();b();D();Lt();Mr();Vd();bf={singleValue:"single-value"},ve=class extends zo{constructor(){super(...arguments),this.direction=R.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=j.horizontal,this.mode=bf.singleValue,this.keypressHandler=e=>{if(!this.readOnly){if(e.key===ce)e.preventDefault(),this.value=`${this.min}`;else if(e.key===de)e.preventDefault(),this.value=`${this.max}`;else if(!e.shiftKey)switch(e.key){case ye:case X:e.preventDefault(),this.increment();break;case xe:case Y:e.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{let e=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=e.bottom,this.trackMinHeight=e.top,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(e=!1)=>{let t=`${e?"remove":"add"}EventListener`;this[t]("keydown",this.keypressHandler),this[t]("mousedown",this.handleMouseDown),this.thumb[t]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[t]("touchstart",this.handleThumbMouseDown,{passive:!0}),e&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=e=>{if(e){if(this.readOnly||this.disabled||e.defaultPrevented)return;e.target.focus()}let t=`${e!==null?"add":"remove"}EventListener`;window[t]("mouseup",this.handleWindowMouseUp),window[t]("mousemove",this.handleMouseMove,{passive:!0}),window[t]("touchmove",this.handleMouseMove,{passive:!0}),window[t]("touchend",this.handleWindowMouseUp),this.isDragging=e!==null},this.handleMouseMove=e=>{if(this.readOnly||this.disabled||e.defaultPrevented)return;let t=window.TouchEvent&&e instanceof TouchEvent?e.touches[0]:e,i=this.orientation===j.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=e=>{let t=Gi(e,this.orientation===j.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===j.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*t+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=e=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=e=>{let t=`${e!==null?"add":"remove"}EventListener`;if((e===null||!this.disabled&&!this.readOnly)&&(window[t]("mouseup",this.handleWindowMouseUp),window.document[t]("mouseleave",this.handleWindowMouseUp),window[t]("mousemove",this.handleMouseMove),e)){e.preventDefault(),this.setupTrackConstraints(),e.target.focus();let i=this.orientation===j.horizontal?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`}},this.convertToConstrainedValue=e=>{isNaN(e)&&(e=this.min);let t=e-this.min,i=Math.round(t/this.step),s=t-i*(this.stepMultiplier*this.step)/this.stepMultiplier;return t=s>=Number(this.step)/2?t-s+Number(this.step):t-s,t+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(e){this.value=e.toString()}valueChanged(e,t){super.valueChanged(e,t),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Pe(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){let e=this.direction!==R.rtl&&this.orientation!==j.vertical?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),t=this.convertToConstrainedValue(e),i=t<Number(this.max)?`${t}`:`${this.max}`;this.value=i}decrement(){let e=this.direction!==R.rtl&&this.orientation!==j.vertical?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),t=this.convertToConstrainedValue(e),i=t>Number(this.min)?`${t}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(e){let i=(1-Gi(Number(this.value),Number(this.min),Number(this.max),e))*100;this.orientation===j.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${i}%; transition: none;`:`bottom: ${i}%; transition: all 0.2s ease;`}updateStepMultiplier(){let e=this.step+"",t=this.step%1?e.length-e.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,t)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{let e=parseFloat(this.value);!Number.isNaN(e)&&(e<this.min||e>this.max)&&(this.value=this.midpoint)}}};r([c({attribute:"readonly",mode:"boolean"})],ve.prototype,"readOnly",void 0);r([u],ve.prototype,"direction",void 0);r([u],ve.prototype,"isDragging",void 0);r([u],ve.prototype,"position",void 0);r([u],ve.prototype,"trackWidth",void 0);r([u],ve.prototype,"trackMinWidth",void 0);r([u],ve.prototype,"trackHeight",void 0);r([u],ve.prototype,"trackLeft",void 0);r([u],ve.prototype,"trackMinHeight",void 0);r([u],ve.prototype,"valueTextFormatter",void 0);r([c({converter:O})],ve.prototype,"min",void 0);r([c({converter:O})],ve.prototype,"max",void 0);r([c({converter:O})],ve.prototype,"step",void 0);r([c],ve.prototype,"orientation",void 0);r([c],ve.prototype,"mode",void 0)});var zd=l(()=>{Bd();_d()});var Hd=l(()=>{});var Vr,Ho,Nd=l(()=>{Oe();T();Vr=class extends g{},Ho=class extends pi(Vr){constructor(){super(...arguments),this.proxy=document.createElement("input")}}});var No,Ud=l(()=>{$();b();D();Nd();No=class extends Ho{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case te:case Ee:this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(e,t){super.checkedChanged(e,t),this.checked?this.classList.add("checked"):this.classList.remove("checked")}};r([c({attribute:"readonly",mode:"boolean"})],No.prototype,"readOnly",void 0);r([u],No.prototype,"defaultSlottedNodes",void 0)});var jd=l(()=>{Hd();Ud()});var qd,Gd=l(()=>{b();qd=(o,e)=>k`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`});var Uo,Wd=l(()=>{T();Uo=class extends g{}});var Yd=l(()=>{Gd();Wd()});var Xd,Qd=l(()=>{b();Xd=(o,e)=>k`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`});var Wi,Zd=l(()=>{$();b();T();Wi=class extends g{};r([c({mode:"boolean"})],Wi.prototype,"disabled",void 0)});var Jd=l(()=>{Qd();Zd()});var Kd,eh=l(()=>{b();be();Kd=(o,e)=>k`
    <template class="${t=>t.orientation}">
        ${Ue(o,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${J("tabs")}></slot>

            ${qt(t=>t.showActiveIndicator,k`
                    <div
                        ${Q("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${Ne(o,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${J("tabpanels")}></slot>
        </div>
    </template>
`});var jo,We,th=l(()=>{$();b();D();be();fe();T();jo={vertical:"vertical",horizontal:"horizontal"},We=class extends g{constructor(){super(...arguments),this.orientation=jo.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{let e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((s,n)=>{if(s.slot==="tab"){let a=this.activeTabIndex===n&&this.isFocusableElement(s);this.activeindicator&&this.isFocusableElement(s)&&(this.showActiveIndicator=!0);let d=this.tabIds[n],h=this.tabpanelIds[n];s.setAttribute("id",d),s.setAttribute("aria-selected",a?"true":"false"),s.setAttribute("aria-controls",h),s.addEventListener("click",this.handleTabClick),s.addEventListener("keydown",this.handleTabKeyDown),s.setAttribute("tabindex",a?"0":"-1"),a&&(this.activetab=s,this.activeid=d)}s.style[e]="",s.style[t]="",s.style[i]=`${n+1}`,this.isHorizontal()?s.classList.remove("vertical"):s.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{let i=this.tabIds[t],s=this.tabpanelIds[t];e.setAttribute("id",s),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{let t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case xe:e.preventDefault(),this.adjustBackward(e);break;case ye:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case X:e.preventDefault(),this.adjustBackward(e);break;case Y:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case ce:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case de:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{let t=this.tabs,i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else{if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{let t=this.tabs,i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else i-1<0?i=t.length-1:i-=1},this.moveToTabByIndex=(e,t)=>{let i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${Le()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${Le()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===jo.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;let e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",s=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;let n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;let a=n-s;this.activeIndicatorRef.style.transform=`${t}(${a}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){let t=this.tabs.filter(a=>this.isFocusableElement(a)),i=t.indexOf(this.activetab),s=At(0,t.length-1,i+e),n=this.tabs.indexOf(t[s]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}};r([c],We.prototype,"orientation",void 0);r([c],We.prototype,"activeid",void 0);r([u],We.prototype,"tabs",void 0);r([u],We.prototype,"tabpanels",void 0);r([c({mode:"boolean"})],We.prototype,"activeindicator",void 0);r([u],We.prototype,"activeIndicatorRef",void 0);r([u],We.prototype,"showActiveIndicator",void 0);E(We,V)});var ih=l(()=>{eh();th()});var _r,qo,oh=l(()=>{Oe();T();_r=class extends g{},qo=class extends ue(_r){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}});var Yi,sh=l(()=>{Yi={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"}});var me,zr=l(()=>{$();b();Ao();fe();oh();sh();me=class extends qo{constructor(){super(...arguments),this.resize=Yi.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};r([c({mode:"boolean"})],me.prototype,"readOnly",void 0);r([c],me.prototype,"resize",void 0);r([c({mode:"boolean"})],me.prototype,"autofocus",void 0);r([c({attribute:"form"})],me.prototype,"formId",void 0);r([c],me.prototype,"list",void 0);r([c({converter:O})],me.prototype,"maxlength",void 0);r([c({converter:O})],me.prototype,"minlength",void 0);r([c],me.prototype,"name",void 0);r([c],me.prototype,"placeholder",void 0);r([c({converter:O,mode:"fromView"})],me.prototype,"cols",void 0);r([c({converter:O,mode:"fromView"})],me.prototype,"rows",void 0);r([c({mode:"boolean"})],me.prototype,"spellcheck",void 0);r([u],me.prototype,"defaultSlottedNodes",void 0);E(me,Bt)});var rh,nh=l(()=>{b();zr();rh=(o,e)=>k`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==Yi.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${J("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,i)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${Q("control")}
        ></textarea>
    </template>
`});var ah=l(()=>{nh();zr()});var lh,ch=l(()=>{b();be();Ar();lh=(o,e)=>k`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${J({property:"defaultSlottedNodes",filter:wd})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Ue(o,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${Q("control")}
            />
            ${Ne(o,e)}
        </div>
    </template>
`});var dh=l(()=>{ch();Ao()});var hh=l(()=>{});var uh,Ze,$i,ph=l(()=>{$();b();D();wr();T();Pi();be();fe();Lt();uh=Object.freeze({[Ft.ArrowUp]:{[j.vertical]:-1},[Ft.ArrowDown]:{[j.vertical]:1},[Ft.ArrowLeft]:{[j.horizontal]:{[R.ltr]:-1,[R.rtl]:1}},[Ft.ArrowRight]:{[j.horizontal]:{[R.ltr]:1,[R.rtl]:-1}}}),Ze=class extends g{constructor(){super(...arguments),this._activeIndex=0,this.direction=R.ltr,this.orientation=j.horizontal}get activeIndex(){return C.track(this,"activeIndex"),this._activeIndex}set activeIndex(e){this.$fastController.isConnected&&(this._activeIndex=At(0,this.focusableElements.length-1,e),C.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}mouseDownHandler(e){var t;let i=(t=this.focusableElements)===null||t===void 0?void 0:t.findIndex(s=>s.contains(e.target));return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(e,t){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Pe(this)}focusinHandler(e){let t=e.relatedTarget;!t||this.contains(t)||this.setFocusedElement()}getDirectionalIncrementer(e){var t,i,s,n,a;return(a=(s=(i=(t=uh[e])===null||t===void 0?void 0:t[this.orientation])===null||i===void 0?void 0:i[this.direction])!==null&&s!==void 0?s:(n=uh[e])===null||n===void 0?void 0:n[this.orientation])!==null&&a!==void 0?a:0}keydownHandler(e){let t=e.key;if(!(t in Ft)||e.defaultPrevented||e.shiftKey)return!0;let i=this.getDirectionalIncrementer(t);if(!i)return!e.target.closest("[role=radiogroup]");let s=this.activeIndex+i;return this.focusableElements[s]&&e.preventDefault(),this.setFocusedElement(s),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var e;let t=(e=this.focusableElements)===null||e===void 0?void 0:e[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(Ze.reduceFocusableItems,[]);let i=this.focusableElements.indexOf(t);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(e=this.activeIndex){var t;this.activeIndex=e,this.setFocusableElements(),(t=this.focusableElements[this.activeIndex])===null||t===void 0||t.focus()}static reduceFocusableItems(e,t){var i,s,n,a;let d=t.getAttribute("role")==="radio",h=(s=(i=t.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||s===void 0?void 0:s.delegatesFocus,p=Array.from((a=(n=t.shadowRoot)===null||n===void 0?void 0:n.querySelectorAll("*"))!==null&&a!==void 0?a:[]).some(f=>yr(f));return!t.hasAttribute("disabled")&&!t.hasAttribute("hidden")&&(yr(t)||d||h||p)?(e.push(t),e):t.childElementCount?e.concat(Array.from(t.children).reduce(Ze.reduceFocusableItems,[])):e}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((e,t)=>{e.tabIndex=this.activeIndex===t?0:-1})}};r([u],Ze.prototype,"direction",void 0);r([c],Ze.prototype,"orientation",void 0);r([u],Ze.prototype,"slottedItems",void 0);r([u],Ze.prototype,"slottedLabel",void 0);r([u],Ze.prototype,"childItems",void 0);$i=class{};r([c({attribute:"aria-labelledby"})],$i.prototype,"ariaLabelledby",void 0);r([c({attribute:"aria-label"})],$i.prototype,"ariaLabel",void 0);E($i,A);E(Ze,V,$i)});var fh=l(()=>{hh();ph()});var mh=l(()=>{});var Ie,bh=l(()=>{Ie={top:"top",right:"right",bottom:"bottom",left:"left",start:"start",end:"end",topLeft:"top-left",topRight:"top-right",bottomLeft:"bottom-left",bottomRight:"bottom-right",topStart:"top-start",topEnd:"top-end",bottomStart:"bottom-start",bottomEnd:"bottom-end"}});var ae,gh=l(()=>{$();b();D();Lt();T();bh();ae=class extends g{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=R.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=e=>{this.classList.toggle("top",this.region.verticalPosition==="start"),this.classList.toggle("bottom",this.region.verticalPosition==="end"),this.classList.toggle("inset-top",this.region.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.region.verticalPosition==="insetEnd"),this.classList.toggle("center-vertical",this.region.verticalPosition==="center"),this.classList.toggle("left",this.region.horizontalPosition==="start"),this.classList.toggle("right",this.region.horizontalPosition==="end"),this.classList.toggle("inset-left",this.region.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.region.horizontalPosition==="insetEnd"),this.classList.toggle("center-horizontal",this.region.horizontalPosition==="center")},this.handleRegionMouseOver=e=>{this.isRegionHovered=!0},this.handleRegionMouseOut=e=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=e=>{if(this.tooltipVisible){this.isAnchorHoveredFocused=!0;return}this.startShowDelayTimer()},this.handleAnchorMouseOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=e=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=e=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout(()=>{this.updateTooltipVisibility()},60))},this.clearHideDelayTimer=()=>{this.hideDelayTimer!==null&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{if(!this.isAnchorHoveredFocused){if(this.delay>1){this.showDelayTimer===null&&(this.showDelayTimer=window.setTimeout(()=>{this.startHover()},this.delay));return}this.startHover()}},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{this.showDelayTimer!==null&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{let e=this.getRootNode();return e instanceof ShadowRoot?e.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=e=>{if(!e.defaultPrevented&&this.tooltipVisible)switch(e.key){case Se:this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss");break}},this.updateTooltipVisibility=()=>{if(this.visible===!1)this.hideTooltip();else if(this.visible===!0){this.showTooltip();return}else{if(this.isAnchorHoveredFocused||this.isRegionHovered){this.showTooltip();return}this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Pe(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),v.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),this.region!==null&&this.region!==void 0&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(e){if(this.$fastController.isConnected){if(e!=null&&(e.removeEventListener("mouseover",this.handleAnchorMouseOver),e.removeEventListener("mouseout",this.handleAnchorMouseOut),e.removeEventListener("focusin",this.handleAnchorFocusIn),e.removeEventListener("focusout",this.handleAnchorFocusOut)),this.anchorElement!==null&&this.anchorElement!==void 0){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});let t=this.anchorElement.id;this.anchorElement.parentElement!==null&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach(i=>{i.id===t&&this.startShowDelayTimer()})}this.region!==null&&this.region!==void 0&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){this.region!==null&&this.region!==void 0&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case Ie.top:case Ie.bottom:this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case Ie.right:case Ie.left:case Ie.start:case Ie.end:this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case Ie.topLeft:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case Ie.topRight:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case Ie.bottomLeft:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case Ie.bottomRight:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case Ie.topStart:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case Ie.topEnd:this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case Ie.bottomStart:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case Ie.bottomEnd:this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center";break}}};r([c({mode:"boolean"})],ae.prototype,"visible",void 0);r([c],ae.prototype,"anchor",void 0);r([c],ae.prototype,"delay",void 0);r([c],ae.prototype,"position",void 0);r([c({attribute:"auto-update-mode"})],ae.prototype,"autoUpdateMode",void 0);r([c({attribute:"horizontal-viewport-lock"})],ae.prototype,"horizontalViewportLock",void 0);r([c({attribute:"vertical-viewport-lock"})],ae.prototype,"verticalViewportLock",void 0);r([u],ae.prototype,"anchorElement",void 0);r([u],ae.prototype,"viewportElement",void 0);r([u],ae.prototype,"verticalPositioningMode",void 0);r([u],ae.prototype,"horizontalPositioningMode",void 0);r([u],ae.prototype,"horizontalInset",void 0);r([u],ae.prototype,"verticalInset",void 0);r([u],ae.prototype,"horizontalScaling",void 0);r([u],ae.prototype,"verticalScaling",void 0);r([u],ae.prototype,"verticalDefaultPosition",void 0);r([u],ae.prototype,"horizontalDefaultPosition",void 0);r([u],ae.prototype,"tooltipVisible",void 0);r([u],ae.prototype,"currentDirection",void 0)});var vh=l(()=>{mh();gh()});var xh=l(()=>{});function xt(o){return it(o)&&o.getAttribute("role")==="treeitem"}var se,Hr=l(()=>{$();b();D();be();fe();T();se=class extends g{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>xt(this.parentElement),this.handleExpandCollapseButtonClick=e=>{!this.disabled&&!e.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=e=>{this.setAttribute("tabindex","0")},this.handleBlur=e=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(e,t){this.$fastController.isConnected&&this.items.forEach(i=>{xt(i)&&(i.nested=!0)})}static focusItem(e){e.focusable=!0,e.focus()}childItemLength(){let e=this.childItems.filter(t=>xt(t));return e?e.length:0}};r([c({mode:"boolean"})],se.prototype,"expanded",void 0);r([c({mode:"boolean"})],se.prototype,"selected",void 0);r([c({mode:"boolean"})],se.prototype,"disabled",void 0);r([u],se.prototype,"focusable",void 0);r([u],se.prototype,"childItems",void 0);r([u],se.prototype,"items",void 0);r([u],se.prototype,"nested",void 0);r([u],se.prototype,"renderCollapsedChildren",void 0);E(se,V)});var yh=l(()=>{xh();Hr()});var wh=l(()=>{});var Xi,Ch=l(()=>{$();b();D();Hr();T();Xi=class extends g{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=e=>{if(!(this.slottedTreeItems.length<1)){if(e.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&se.focusItem(this.currentFocused);return}this.contains(e.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=e.target)}},this.handleBlur=e=>{e.target instanceof HTMLElement&&(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=e=>{if(e.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;let t=this.getVisibleNodes();switch(e.key){case ce:t.length&&se.focusItem(t[0]);return;case de:t.length&&se.focusItem(t[t.length-1]);return;case xe:if(e.target&&this.isFocusableElement(e.target)){let i=e.target;i instanceof se&&i.childItemLength()>0&&i.expanded?i.expanded=!1:i instanceof se&&i.parentElement instanceof se&&se.focusItem(i.parentElement)}return!1;case ye:if(e.target&&this.isFocusableElement(e.target)){let i=e.target;i instanceof se&&i.childItemLength()>0&&!i.expanded?i.expanded=!0:i instanceof se&&i.childItemLength()>0&&this.focusNextNode(1,e.target)}return;case Y:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(1,e.target);return;case X:e.target&&this.isFocusableElement(e.target)&&this.focusNextNode(-1,e.target);return;case te:this.handleClick(e);return}return!0},this.handleSelectedChange=e=>{if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!xt(e.target))return!0;let t=e.target;t.selected?(this.currentSelected&&this.currentSelected!==t&&(this.currentSelected.selected=!1),this.currentSelected=t):!t.selected&&this.currentSelected===t&&(this.currentSelected=null)},this.setItems=()=>{let e=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=e,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(i=>{xt(i)&&(i.nested=this.nested)})},this.isFocusableElement=e=>xt(e),this.isSelectedElement=e=>e.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),v.queueUpdate(()=>{this.setItems()})}handleClick(e){if(e.defaultPrevented)return;if(!(e.target instanceof Element)||!xt(e.target))return!0;let t=e.target;t.disabled||(t.selected=!t.selected)}focusNextNode(e,t){let i=this.getVisibleNodes();if(!i)return;let s=i[i.indexOf(t)+e];it(s)&&se.focusItem(s)}getValidFocusableItem(){let e=this.getVisibleNodes(),t=e.findIndex(this.isSelectedElement);return t===-1&&(t=e.findIndex(this.isFocusableElement)),t!==-1?e[t]:null}checkForNestedItems(){return this.slottedTreeItems.some(e=>xt(e)&&e.querySelector("[role='treeitem']"))}getVisibleNodes(){return La(this,"[role='treeitem']")||[]}};r([c({attribute:"render-collapsed-nodes"})],Xi.prototype,"renderCollapsedNodes",void 0);r([u],Xi.prototype,"currentSelected",void 0);r([u],Xi.prototype,"slottedTreeItems",void 0)});var kh=l(()=>{wh();Ch()});var Nr,si,XS,QS,ZS,$h=l(()=>{Nr=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,i=this.constructListener(e);i.bind(t)(),t.addListener(i),this.listenerCache.set(e,i)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},si=class extends Nr{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new si(e,t)}constructListener(e){let t=!1,i=this.styles;return function(){let{matches:n}=this;n&&!t?(e.$fastController.addStyles(i),t=n):!n&&t&&(e.$fastController.removeStyles(i),t=n)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},XS=si.with(window.matchMedia("(forced-colors)")),QS=si.with(window.matchMedia("(prefers-color-scheme: dark)")),ZS=si.with(window.matchMedia("(prefers-color-scheme: light)"))});var Ih=l(()=>{});var Te,Th=l(()=>{Te="not-allowed"});function B(o){return`${gf}:host{display:${o}}`}var gf,Sh=l(()=>{gf=":host([hidden]){display:none}"});var q,Eh=l(()=>{D();q=Pa()?"focus-visible":"focus"});var Oh=l(()=>{Th();Sh();Eh()});var Rh=l(()=>{fe();To();$h();Ih();Oh();Lt();Ar()});var P=l(()=>{$a();tl();sl();Gs();pl();bl();vl();wl();Rl();Hl();jl();Xl();Kl();_l();sc();pr();rc();pc();bc();wc();Tc();Sc();Ec();Dc();Ac();Uc();Er();Xc();td();Qt();rd();ld();ud();gd();yd();Id();Rd();Ad();Md();zd();jd();Yd();Jd();ih();ah();dh();fh();vh();yh();kh();Rh()});function Dh(o){return gr.getOrCreate(o).withPrefix("vscode")}var Fh=l(()=>{P()});function Lh(o){window.addEventListener("load",()=>{new MutationObserver(()=>{Ah(o)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),Ah(o)})}function Ah(o){let e=getComputedStyle(document.body),t=document.querySelector("body");if(t){let i=t.getAttribute("data-vscode-theme-kind");for(let[s,n]of o){let a=e.getPropertyValue(s).toString();if(i==="vscode-high-contrast")a.length===0&&n.name.includes("background")&&(a="transparent"),n.name==="button-icon-hover-background"&&(a="transparent");else if(i==="vscode-high-contrast-light"){if(a.length===0&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":a="#0F4A85";break;case"button-secondary-hover-background":a="transparent";break;case"button-icon-hover-background":a="transparent";break}}else n.name==="contrast-active-border"&&(a="transparent");n.setValueFor(t,a)}}}var Ph=l(()=>{});function y(o,e){let t=Hi.create(o);if(e){if(e.includes("--fake-vscode-token")){let i="id"+Math.random().toString(16).slice(2);e=`${e}-${i}`}Mh.set(e,t)}return Bh||(Lh(Mh),Bh=!0),t}var Mh,Bh,Vh=l(()=>{P();Ph();Mh=new Map,Bh=!1});var _h,I,Go,wO,nt,at,w,Ae,_,Z,CO,G,Ii,Ti,U,W,Wo,Yo,kO,$O,IO,TO,zh,Hh,Nh,Uh,jh,Xo,Qo,Si,Ur,qh,Gh,jr,Wh,ri,qr,Gr,Zo,Yh,Xh,Qh,Zh,Je,Vt,Jh,SO,lt,yt,Kh,eu,Qi,Ke,EO,tu,wt,Jo,OO,Wr,iu,ou,su,_t,ru,RO,DO,nu,pe=l(()=>{Vh();_h=y("background","--vscode-editor-background").withDefault("#1e1e1e"),I=y("border-width").withDefault(1),Go=y("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),wO=y("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),nt=y("corner-radius").withDefault(0),at=y("corner-radius-round").withDefault(2),w=y("design-unit").withDefault(4),Ae=y("disabled-opacity").withDefault(.4),_=y("focus-border","--vscode-focusBorder").withDefault("#007fd4"),Z=y("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),CO=y("font-weight","--vscode-font-weight").withDefault("400"),G=y("foreground","--vscode-foreground").withDefault("#cccccc"),Ii=y("input-height").withDefault("26"),Ti=y("input-min-width").withDefault("100px"),U=y("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),W=y("type-ramp-base-line-height").withDefault("normal"),Wo=y("type-ramp-minus1-font-size").withDefault("11px"),Yo=y("type-ramp-minus1-line-height").withDefault("16px"),kO=y("type-ramp-minus2-font-size").withDefault("9px"),$O=y("type-ramp-minus2-line-height").withDefault("16px"),IO=y("type-ramp-plus1-font-size").withDefault("16px"),TO=y("type-ramp-plus1-line-height").withDefault("24px"),zh=y("scrollbarWidth").withDefault("10px"),Hh=y("scrollbarHeight").withDefault("10px"),Nh=y("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Uh=y("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),jh=y("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Xo=y("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Qo=y("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Si=y("button-border","--vscode-button-border").withDefault("transparent"),Ur=y("button-icon-background").withDefault("transparent"),qh=y("button-icon-corner-radius").withDefault("5px"),Gh=y("button-icon-outline-offset").withDefault(0),jr=y("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Wh=y("button-icon-padding").withDefault("3px"),ri=y("button-primary-background","--vscode-button-background").withDefault("#0e639c"),qr=y("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Gr=y("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Zo=y("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Yh=y("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Xh=y("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Qh=y("button-padding-horizontal").withDefault("11px"),Zh=y("button-padding-vertical").withDefault("4px"),Je=y("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Vt=y("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Jh=y("checkbox-corner-radius").withDefault(3),SO=y("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),lt=y("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),yt=y("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Kh=y("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),eu=y("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Qi=y("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Ke=y("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),EO=y("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),tu=y("dropdown-list-max-height").withDefault("200px"),wt=y("input-background","--vscode-input-background").withDefault("#3c3c3c"),Jo=y("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),OO=y("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Wr=y("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),iu=y("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),ou=y("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),su=y("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),_t=y("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),ru=y("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),RO=y("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),DO=y("panel-view-border","--vscode-panel-border").withDefault("#80808059"),nu=y("tag-corner-radius").withDefault("2px")});var au,lu=l(()=>{b();P();pe();au=(o,e)=>S`
	${B("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Z};
		font-size: ${Wo};
		line-height: ${Yo};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Xo};
		border: calc(${I} * 1px) solid ${Si};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Qo};
		display: flex;
		height: calc(${w} * 4px);
		justify-content: center;
		min-width: calc(${w} * 4px + 2px);
		min-height: calc(${w} * 4px + 2px);
		padding: 3px 6px;
	}
`});var Yr,_O,cu=l(()=>{P();lu();Yr=class extends ft{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}},_O=Yr.compose({baseName:"badge",template:xo,styles:au})});function du(o,e,t,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(a=o[d])&&(n=(s<3?a(n):s>3?a(e,t,n):a(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n}var hu=l(()=>{});var vf,xf,yf,wf,uu,pu=l(()=>{b();P();pe();vf=S`
	${B("inline-flex")} :host {
		outline: none;
		font-family: ${Z};
		font-size: ${U};
		line-height: ${W};
		color: ${qr};
		background: ${ri};
		border-radius: calc(${at} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Zh} ${Qh};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${I} * 1px) solid ${Si};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Gr};
	}
	:host(:active) {
		background: ${ri};
	}
	.control:${q} {
		outline: calc(${I} * 1px) solid ${_};
		outline-offset: calc(${I} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Ae};
		background: ${ri};
		cursor: ${Te};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${w} * 4px);
		height: calc(${w} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,xf=S`
	:host([appearance='primary']) {
		background: ${ri};
		color: ${qr};
	}
	:host([appearance='primary']:hover) {
		background: ${Gr};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${ri};
	}
	:host([appearance='primary']) .control:${q} {
		outline: calc(${I} * 1px) solid ${_};
		outline-offset: calc(${I} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${ri};
	}
`,yf=S`
	:host([appearance='secondary']) {
		background: ${Zo};
		color: ${Yh};
	}
	:host([appearance='secondary']:hover) {
		background: ${Xh};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Zo};
	}
	:host([appearance='secondary']) .control:${q} {
		outline: calc(${I} * 1px) solid ${_};
		outline-offset: calc(${I} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Zo};
	}
`,wf=S`
	:host([appearance='icon']) {
		background: ${Ur};
		border-radius: ${qh};
		color: ${G};
	}
	:host([appearance='icon']:hover) {
		background: ${jr};
		outline: 1px dotted ${Go};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Wh};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${jr};
	}
	:host([appearance='icon']) .control:${q} {
		outline: calc(${I} * 1px) solid ${_};
		outline-offset: ${Gh};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Ur};
	}
`,uu=(o,e)=>S`
	${vf}
	${xf}
	${yf}
	${wf}
`});var Ko,Xr,Qr=l(()=>{hu();b();P();pu();Ko=class extends Re{connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){e==="appearance"&&i==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=i),e==="disabled"&&(this.disabled=i!==null)}};du([c],Ko.prototype,"appearance",void 0);Xr=Ko.compose({baseName:"button",template:Cl,styles:uu,shadowOptions:{delegatesFocus:!0}})});var fu,mu=l(()=>{b();P();pe();fu=(o,e)=>S`
	${B("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${w} * 1px) 0;
		user-select: none;
		font-size: ${U};
		line-height: ${W};
	}
	.control {
		position: relative;
		width: calc(${w} * 4px + 2px);
		height: calc(${w} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Jh} * 1px);
		border: calc(${I} * 1px) solid ${Vt};
		background: ${Je};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${Z};
		color: ${G};
		padding-inline-start: calc(${w} * 2px + 2px);
		margin-inline-end: calc(${w} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${G};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${G};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${Je};
		border-color: ${Vt};
	}
	:host(:enabled) .control:active {
		background: ${Je};
		border-color: ${_};
	}
	:host(:${q}) .control {
		border: calc(${I} * 1px) solid ${_};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Te};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Ae};
	}
`});var Zr,oR,bu=l(()=>{P();mu();Zr=class extends Kt{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}},oR=Zr.compose({baseName:"checkbox",template:ql,styles:fu,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`})});var gu,vu=l(()=>{b();gu=(o,e)=>S`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`});var xu,yu=l(()=>{b();pe();xu=(o,e)=>S`
	:host {
		display: grid;
		padding: calc((${w} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${_h};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Kh};
		outline: 1px dotted ${Go};
		outline-offset: -1px;
	}
`});var wu,Cu=l(()=>{b();P();pe();wu=(o,e)=>S`
	:host {
		padding: calc(${w} * 1px) calc(${w} * 3px);
		color: ${G};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${Z};
		font-size: ${U};
		line-height: ${W};
		font-weight: 400;
		border: solid calc(${I} * 1px) transparent;
		border-radius: calc(${nt} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${q}),
	:host(:focus),
	:host(:active) {
		background: ${lt};
		border: solid calc(${I} * 1px) ${_};
		color: ${yt};
		outline: none;
	}
	:host(:${q}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${yt} !important;
	}
`});var Jr,tn,Kr,on,en,sn,rn=l(()=>{P();vu();yu();Cu();Jr=class extends ie{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}},tn=Jr.compose({baseName:"data-grid",baseClass:ie,template:Fl,styles:gu}),Kr=class extends he{},on=Kr.compose({baseName:"data-grid-row",baseClass:he,template:Pl,styles:xu}),en=class extends je{},sn=en.compose({baseName:"data-grid-cell",baseClass:je,template:Bl,styles:wu})});var ku,$u=l(()=>{b();P();pe();ku=(o,e)=>S`
	${B("block")} :host {
		border: none;
		border-top: calc(${I} * 1px) solid ${eu};
		box-sizing: content-box;
		height: 0;
		margin: calc(${w} * 1px) 0;
		width: 100%;
	}
`});var nn,an,ln=l(()=>{P();$u();nn=class extends vi{},an=nn.compose({baseName:"divider",template:gc,styles:ku})});var Iu,Tu=l(()=>{b();P();pe();Iu=(o,e)=>S`
	${B("inline-flex")} :host {
		background: ${Qi};
		border-radius: calc(${at} * 1px);
		box-sizing: border-box;
		color: ${G};
		contain: contents;
		font-family: ${Z};
		height: calc(${Ii} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Ti};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${I} * 1px) solid ${Ke};
		border-radius: calc(${at} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${U};
		line-height: ${W};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Qi};
		border: calc(${I} * 1px) solid ${_};
		border-radius: calc(${at} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${tu};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${q}) .control {
		border-color: ${_};
	}
	:host(:not([disabled]):hover) {
		background: ${Qi};
		border-color: ${Ke};
	}
	:host(:${q}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${lt};
		border: calc(${I} * 1px) solid transparent;
		color: ${yt};
	}
	:host([disabled]) {
		cursor: ${Te};
		opacity: ${Ae};
	}
	:host([disabled]) .control {
		cursor: ${Te};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Qi};
		color: ${G};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${_};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${_};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Ii} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Ii} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${w} * 4px);
		min-width: calc(${w} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`});var cn,dn,hn=l(()=>{P();Tu();cn=class extends Qe{},dn=cn.compose({baseName:"dropdown",template:Ed,styles:Iu,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`})});var Su,Eu=l(()=>{b();P();pe();Su=(o,e)=>S`
	${B("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${iu};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${Z};
		font-size: ${U};
		line-height: ${W};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${I} * 1px) solid transparent;
		border-radius: calc(${nt} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Wr};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Wr};
	}
	:host(:${q}) .control,
	:host(:focus) .control {
		border: calc(${I} * 1px) solid ${_};
	}
`});var un,_R,Ou=l(()=>{P();Eu();un=class extends we{},_R=un.compose({baseName:"link",template:il,styles:Su,shadowOptions:{delegatesFocus:!0}})});var Ru,Du=l(()=>{b();P();pe();Ru=(o,e)=>S`
	${B("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${nt};
		border: calc(${I} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${G};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${U};
		line-height: ${W};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${w} / 2) * 1px)
			calc((${w} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${q}) {
		border-color: ${_};
		background: ${lt};
		color: ${G};
	}
	:host([aria-selected='true']) {
		background: ${lt};
		border: calc(${I} * 1px) solid transparent;
		color: ${yt};
	}
	:host(:active) {
		background: ${lt};
		color: ${yt};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${lt};
		border: calc(${I} * 1px) solid transparent;
		color: ${yt};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${lt};
		color: ${G};
	}
	:host([disabled]) {
		cursor: ${Te};
		opacity: ${Ae};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`});var pn,fn,mn=l(()=>{P();Du();pn=class extends qe{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}},fn=pn.compose({baseName:"option",template:Oc,styles:Ru})});var Fu,Au=l(()=>{b();P();pe();Fu=(o,e)=>S`
	${B("grid")} :host {
		box-sizing: border-box;
		font-family: ${Z};
		font-size: ${U};
		line-height: ${W};
		color: ${G};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${w} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${w} * 1px) calc(${w} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${w} / 4) * 1px);
		justify-self: center;
		background: ${_t};
		margin: 0;
		border-radius: calc(${nt} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`});var Lu,Pu=l(()=>{b();P();pe();Lu=(o,e)=>S`
	${B("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${Z};
		font-size: ${U};
		line-height: ${W};
		height: calc(${w} * 7px);
		padding: calc(${w} * 1px) 0;
		color: ${ru};
		fill: currentcolor;
		border-radius: calc(${nt} * 1px);
		border: solid calc(${I} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${_t};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${_t};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${_t};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${_t};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${_t};
		fill: currentcolor;
	}
	:host(:${q}) {
		outline: none;
		border: solid calc(${I} * 1px) ${su};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${w} * 2px);
	}
`});var Mu,Bu=l(()=>{b();P();pe();Mu=(o,e)=>S`
	${B("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${I} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${U};
		line-height: ${W};
		padding: 10px calc((${w} + 2) * 1px);
	}
`});var bn,d1,gn,h1,vn,u1,Vu=l(()=>{P();Au();Pu();Bu();bn=class extends We{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=jo.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}},d1=bn.compose({baseName:"panels",template:Kd,styles:Fu}),gn=class extends Wi{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}},h1=gn.compose({baseName:"panel-tab",template:Xd,styles:Lu}),vn=class extends Uo{},u1=vn.compose({baseName:"panel-view",template:qd,styles:Mu})});var _u,zu=l(()=>{b();P();pe();_u=(o,e)=>S`
	${B("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${w} * 7px);
		width: calc(${w} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${w} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${ou};
		stroke-width: calc(${w} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`});var xn,y1,Hu=l(()=>{P();zu();xn=class extends gt{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){e==="value"&&this.removeAttribute("value")}},y1=xn.compose({baseName:"progress-ring",template:od,styles:_u,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`})});var Nu,Uu=l(()=>{b();P();pe();Nu=(o,e)=>S`
	${B("flex")} :host {
		align-items: flex-start;
		margin: calc(${w} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${G};
		font-size: ${U};
		margin: calc(${w} * 1px) 0;
	}
`});var yn,wn,Cn=l(()=>{P();Uu();yn=class extends Xe{connectedCallback(){super.connectedCallback();let e=this.querySelector("label");if(e){let t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}},wn=yn.compose({baseName:"radio-group",template:cd,styles:Nu})});var ju,qu=l(()=>{b();P();pe();ju=(o,e)=>S`
	${B("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${U};
		line-height: ${W};
		margin: calc(${w} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${Je};
		border-radius: 999px;
		border: calc(${I} * 1px) solid ${Vt};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${w} * 4px);
		position: relative;
		outline: none;
		width: calc(${w} * 4px);
	}
	.label {
		color: ${G};
		cursor: pointer;
		font-family: ${Z};
		margin-inline-end: calc(${w} * 2px + 2px);
		padding-inline-start: calc(${w} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${G};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${w} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${Je};
		border-color: ${Vt};
	}
	:host(:not([disabled])) .control:active {
		background: ${Je};
		border-color: ${_};
	}
	:host(:${q}) .control {
		border: calc(${I} * 1px) solid ${_};
	}
	:host([aria-checked='true']) .control {
		background: ${Je};
		border: calc(${I} * 1px) solid ${Vt};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${Je};
		border: calc(${I} * 1px) solid ${Vt};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${Je};
		border: calc(${I} * 1px) solid ${_};
	}
	:host([aria-checked="true"]:${q}:not([disabled])) .control {
		border: calc(${I} * 1px) solid ${_};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Te};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Ae};
	}
`});var kn,$n,In=l(()=>{P();qu();kn=class extends oi{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}},$n=kn.compose({baseName:"radio",template:pd,styles:ju,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`})});var Gu,Wu=l(()=>{b();P();pe();Gu=(o,e)=>S`
	${B("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${Z};
		font-size: ${Wo};
		line-height: ${Yo};
	}
	.control {
		background-color: ${Xo};
		border: calc(${I} * 1px) solid ${Si};
		border-radius: ${nu};
		color: ${Qo};
		padding: calc(${w} * 0.5px) calc(${w} * 1px);
		text-transform: uppercase;
	}
`});var Tn,N1,Yu=l(()=>{P();Wu();Tn=class extends ft{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}},N1=Tn.compose({baseName:"tag",template:xo,styles:Gu})});var Xu,Qu=l(()=>{b();P();pe();Xu=(o,e)=>S`
	${B("inline-block")} :host {
		font-family: ${Z};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Jo};
		background: ${wt};
		border-radius: calc(${at} * 1px);
		border: calc(${I} * 1px) solid ${Ke};
		font: inherit;
		font-size: ${U};
		line-height: ${W};
		padding: calc(${w} * 2px + 1px);
		width: 100%;
		min-width: ${Ti};
		resize: none;
	}
	.control:hover:enabled {
		background: ${wt};
		border-color: ${Ke};
	}
	.control:active:enabled {
		background: ${wt};
		border-color: ${_};
	}
	.control:hover,
	.control:${q},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${zh};
		height: ${Hh};
	}
	.control::-webkit-scrollbar-corner {
		background: ${wt};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Nh};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Uh};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${jh};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${_};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${G};
		cursor: pointer;
		font-size: ${U};
		line-height: ${W};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Te};
	}
	:host([disabled]) {
		opacity: ${Ae};
	}
	:host([disabled]) .control {
		border-color: ${Ke};
	}
`});var Sn,Q1,Zu=l(()=>{P();Qu();Sn=class extends me{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}},Q1=Sn.compose({baseName:"text-area",template:rh,styles:Xu,shadowOptions:{delegatesFocus:!0}})});var Ju,Ku=l(()=>{b();P();pe();Ju=(o,e)=>S`
	${B("inline-block")} :host {
		font-family: ${Z};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Jo};
		background: ${wt};
		border-radius: calc(${at} * 1px);
		border: calc(${I} * 1px) solid ${Ke};
		height: calc(${Ii} * 1px);
		min-width: ${Ti};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${w} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${w} * 2px + 1px);
		font-size: ${U};
		line-height: ${W};
	}
	.control:hover,
	.control:${q},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${G};
		cursor: pointer;
		font-size: ${U};
		line-height: ${W};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${w} * 4px);
		height: calc(${w} * 4px);
	}
	.start {
		margin-inline-start: calc(${w} * 2px);
	}
	.end {
		margin-inline-end: calc(${w} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${wt};
		border-color: ${Ke};
	}
	:host(:active:not([disabled])) .root {
		background: ${wt};
		border-color: ${_};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${_};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Te};
	}
	:host([disabled]) {
		opacity: ${Ae};
	}
	:host([disabled]) .control {
		border-color: ${Ke};
	}
`});var En,On,Rn=l(()=>{P();Ku();En=class extends Ce{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}},On=En.compose({baseName:"text-field",template:lh,styles:Ju,shadowOptions:{delegatesFocus:!0}})});var ep=l(()=>{Qr();rn();ln();hn();mn();Cn();In();Rn()});var tp=l(()=>{Fh();ep();cu();Qr();bu();rn();ln();hn();Ou();mn();Vu();Hu();Cn();In();Yu();Zu();Rn()});var Cf=sp(()=>{tp();Dh().register(Xr(),dn(),fn(),an(),tn(),on(),sn(),On(),wn(),$n())});export default Cf();
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 5.3.3
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
