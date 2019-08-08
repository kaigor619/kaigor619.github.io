/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

document.getElementById("mobile-menu-trigger").addEventListener("click", function() {
    document.getElementsByTagName("html")[0].classList.toggle("js-mobile-menu-active")
});
document.body.addEventListener("click", function(t) {
    var e = t.target;
    for (; e && !e.hasAttribute("data-tooltip"); )
        e = e.parentElement;
    if (e) {
        for (var n = t.target; n && !n.hasAttribute("data-tooltip-ignore"); )
            n = n.parentElement;
        if (!n) {
            var a = document.querySelector(".active[data-tooltip]");
            a && a !== e && a.classList.remove("active"),
            e.classList.toggle("active")
        }
    }
});

let tabs_item=document.getElementsByClassName('tabs_item');
let tab_block=document.getElementsByClassName('tab_block');

for(let i=0;i<tabs_item.length;i++){
	tabs_item[i].onclick=function(){
		for(let i=0;i<tabs_item.length;i++){
			tabs_item[i].classList.remove('active');
		}
		for(let i=0;i<tab_block.length;i++){
			tab_block[i].classList.remove('active');
		}
		this.classList.add('active');
		tab_block[i].classList.add('active');
	}
}

const arrow_sub=document.getElementById('arrow_sublist');
const sub_block=document.getElementById('sub_block');

arrow_sub.onclick=function(){

	if(sub_block.classList.contains('active')){
		sub_block.classList.remove('active');
	}
	else{
		sub_block.classList.add('active');
	}
}




document.body.addEventListener("mousedown", function(t) {
    for (var e = t.target; null !== e && !e.hasAttribute("data-tooltip-ignore") && !e.hasAttribute("data-tooltip"); )
        e = e.parentElement;
    if (!e) {
        var n = document.querySelector(".active[data-tooltip]");
        n && n.classList.remove("active");
    }
});
var n = document.getElementById("faq-menu-trigger");
n && n.addEventListener("click", function() {
    document.getElementsByTagName("html")[0].classList.toggle("js-faq-menu-active")
});


function highlightTab(link_id) {
    $("a[id^='menu_']").parent().removeClass('selected');
    $(".crm_" + link_id).parent().addClass('selected');
}

$(document).ready(function () {
    $('.crm').on('click', 'a', function () {
        $('.display:visible').fadeOut();
        $('.display[id="' + $(this).data('target') + '"]').fadeIn();
    });
});
$(document).ready(function () {
    $('.copy-link').on('click', 'button', function () {
    	var $temp = $("<input>");
  		$("body").append($temp);
  		$temp.val($(this).prev('input').val()).select();
        document.execCommand("copy");
        $temp.remove();
        // alert($(this).prev('input').val());
    });
});
$(document).ready(function () {
	$(".for-fb").show();
	$(".for-telegram").hide();
	$(".for-whatsapp").hide();
	$(".for-vk").hide();
	$('input[type=radio][name=radio]').on('change', function() {
		if (this.value == 'fb') {
			$(".for-fb").show();
			$(".for-telegram").hide();
			$(".for-whatsapp").hide();
			$(".for-vk").hide();
		}
		else if (this.value == 'telegram') {
	        $(".for-fb").hide();
			$(".for-telegram").show();
			$(".for-whatsapp").hide();
			$(".for-vk").hide();
	    }
	    else if (this.value == 'whatsapp') {
	        $(".for-fb").hide();
			$(".for-telegram").hide();
			$(".for-whatsapp").show();
			$(".for-vk").hide();
	    }
	    else if (this.value == 'vk') {
	        $(".for-fb").hide();
			$(".for-telegram").hide();
			$(".for-whatsapp").hide();
			$(".for-vk").show();
	    }
	    else if (this.value == 'vk') {
	        $(".for-fb").hide();
			$(".for-telegram").hide();
			$(".for-whatsapp").hide();
			$(".for-vk").show();
	    }
		
	});
});

$('.ui-textarea-toolbar__btn--btn-text').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
    div.after('<div class="ui-message-row ui-message-row--replies createBtn"><div class="reply-wrapper js-block-wrapper js-block"><div class="ui-conversations__control-btn remove-btn" title="Удалить ответ"></div><div class="form-control-wrapper"><div contenteditable="true" aria-multiline="true" class="form-control form-control--textarea js-content js-vars js-contenteditable js-emoji-unified js-vars-parsed"></div><div class="ui-textarea-toolbar js-emoji-container"><div class="ui-textarea-toolbar__btn ui-textarea-toolbar__btn--emoji js-emoji-picker" data-action="variables_toolbar" data-tooltip=""></div><div class="ui-textarea-toolbar__btn ui-textarea-toolbar__btn--options data-action="variables_toolbar" data-tooltip=""><div class="text-tooltip text-tooltip--top">Условия отправки</div><div class="ui-tooltip right" data-tooltip-ignore=""><p class="title">Добавить теги</p><ul><li class="js-insert-variable" >тест тег 1</li><li class="js-insert-variable" >тест тег 1</li></ul></div></div><div class="ui-textarea-toolbar__btn ui-textarea-toolbar__btn--typing" data-action="variables_toolbar" data-tooltip=""><div class="text-tooltip text-tooltip--top">Эффект печати</div><div class="ui-tooltip top" data-tooltip-ignore=""><p class="title">Эффект печати</p></div></div><div class="ui-textarea-toolbar__btn ui-textarea-toolbar__btn--macros" data-action="variables_toolbar" data-tooltip=""><div class="text-tooltip text-tooltip--top">Вставить макрос</div><div class="ui-tooltip right" data-tooltip-ignore=""><div class="c-tooltip a-position"><a href="" target="_blank"></a>?<div class="c-tooltip__content"><p>Нажмите, чтобы узнать о макросах подробнее</p></div></div><p class="title">Макросы</p><ul><li class="js-insert-variable" >Имя</li><li class="js-insert-variable" >Фамилия</li></ul></div></div><div class="ui-textarea-toolbar__btn ui-textarea-toolbar__btn--autovoronka" data-action="variables_toolbar" data-tooltip=""><div class="text-tooltip text-tooltip--top">Подключить к автопотоку</div><div class="ui-tooltip right" data-tooltip-ignore=""><p class="title">Подключить к автопотоку</p><ul><li class="js-insert-variable">Автоворонка 1</li><li class="js-insert-variable">Автоворонки 2</li></ul></div></div></div></div><div class="form-control-wrapper"><div class="add-button ui-textarea-toolbar__btn ui-textarea-toolbar__btn--addbtn" data-action="variables_toolbar" data-tooltip="">+ ДОБАВИТЬ КНОПКУ<div class="ui-tooltip top" data-tooltip-ignore=""><div class="header__menu"><p class="title">Название кнопки</p><input type="text" placeholder="test"></div><ul><li class="js-insert-variable"><img src="../img/db/send.png" alt="">Отправить сообщение</li><li class="js-insert-variable"><img src="../img/db/link.png" alt="">Внешняя ссылка</li><li class="js-insert-variable"><img src="../img/db/select-step.png" alt="">Выберите существующий шаг</li></ul><div class="add-button add-button-bor ui-textarea-toolbar__btn ui-textarea-toolbar__btn--addbtn" data-action="variables_toolbar" data-tooltip="">+ Действия<div class="ui-tooltip right" data-tooltip-ignore=""><ul><li class="js-insert-variable">Убрать тег</li><li class="js-insert-variable">Добавить тег</li></ul></div></div></div></div></div></div></div>');
});
$('.ui-textarea-toolbar__btn--btn-image').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('<div class="ui-message-row ui-message-row--image createBtn"><div class="reply-wrapper js-block-wrapper"><div class="ui-conversations__control-btn remove-btn" title="Удалить ответ"></div><div class="form-control-wrapper"><div><img src="../img/buttons/image.png" alt=""><p>+ Картинка</p></div></div></div></div>');
});
$('.ui-textarea-toolbar__btn--btn-video').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('<div class="ui-message-row ui-message-row--video createBtn"><div class="reply-wrapper js-block-wrapper"><div class="ui-conversations__control-btn remove-btn" title="Удалить ответ"></div><div class="form-control-wrapper"><div><img src="../img/buttons/video.png" alt=""><p>+ Видео</p></div></div></div></div>');
});
$('.ui-textarea-toolbar__btn--btn-audio').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('<div class="ui-message-row ui-message-row--audio createBtn"><div class="reply-wrapper js-block-wrapper"><div class="ui-conversations__control-btn remove-btn" title="Удалить ответ"></div><div class="form-control-wrapper"><div><img src="../img/buttons/audio.png" alt=""><p>+ Аудио</p></div></div></div></div>');
});
$('.ui-textarea-toolbar__btn--btn-file').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('<div class="ui-message-row ui-message-row--file createBtn"><div class="reply-wrapper js-block-wrapper"><div class="ui-conversations__control-btn remove-btn" title="Удалить ответ"></div><div class="form-control-wrapper"><div><img src="../img/buttons/file.png" alt=""><p>+ Файл</p></div></div></div></div>');
});
$('.ui-textarea-toolbar__btn--btn-text').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('');
});
$('.ui-textarea-toolbar__btn--btn-text').click(function() {
	var div = $(this).parents("section").find(".createBtn:last");
	div.after('');
});
$('.ui-message-row').on('click','.remove-btn',function() {
 	$(this).parent().remove();
});
// bot-list-remove
$('.bot-list').on('click', '.bot-list__remove', function(){
	$('.bot-remove-modal').addClass('show');
});
$('.bot-remove-modal').on('click', '.cansel', function(){
	$('.bot-remove-modal').removeClass('show');
});
// account-avatar-remove
$('.account__photo').on('click', '.account-delete-avatar', function(){
	$('.bot-remove-modal').addClass('show');
});
$('.bot-remove-modal').on('click', '.cansel', function(){
	$('.bot-remove-modal').removeClass('show');
});


function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
var EmojiConvertor = function() {
    var e = function() {
        var e = this;
        return e.img_set = "apple",
        e.img_sets = {
            apple: {
                path: "/emoji-data/img-apple-64/",
                sheet: "../img/sheets/sheet_apple_64_indexed_128.png",
                mask: 1
            },
            google: {
                path: "/emoji-data/img-google-64/",
                sheet: "/emoji-data/sheet_google_64.png",
                mask: 2
            },
            twitter: {
                path: "/emoji-data/img-twitter-64/",
                sheet: "/emoji-data/sheet_twitter_64.png",
                mask: 4
            },
            emojione: {
                path: "/emoji-data/img-emojione-64/",
                sheet: "/emoji-data/sheet_emojione_64.png",
                mask: 8
            },
            facebook: {
                path: "/emoji-data/img-facebook-64/",
                sheet: "/emoji-data/sheet_facebook_64.png",
                mask: 16
            },
            messenger: {
                path: "/emoji-data/img-messenger-64/",
                sheet: "/emoji-data/sheet_messenger_64.png",
                mask: 32
            }
        },
        e.use_css_imgs = !1,
        e.colons_mode = !1,
        e.text_mode = !1,
        e.include_title = !1,
        e.include_text = !1,
        e.allow_native = !0,
        e.use_sheet = !0,
        e.avoid_ms_emoji = !0,
        e.allow_caps = !1,
        e.img_suffix = "",
        e.inits = {},
        e.map = {},
        e.init_env(),
        e
    };
    return e.prototype.replace_emoticons = function(e) {
        var t = this.replace_emoticons_with_colons(e);
        return this.replace_colons(t)
    }
    ,
    e.prototype.colonToUnicode = function(e) {
        return e ? (this.init_unified(),
        this.map.unified_inverted[e] || "") : ""
    }
    ,
    e.prototype.replace_emoticons_with_colons = function(d) {
        var m = this;
        m.init_emoticons();
        var f = 0
          , u = []
          , e = d.replace(m.rx_emoticons, function(e, t, a, n) {
            var s = f;
            f = n + e.length;
            var o = -1 !== a.indexOf("(")
              , r = -1 !== a.indexOf(")");
            if ((o || r) && -1 == u.indexOf(a) && u.push(a),
            r && !o) {
                var i = d.substring(s, n);
                if (-1 !== i.indexOf("(") && -1 === i.indexOf(")"))
                    return e
            }
            if ("\n8)" === e) {
                var l = d.substring(0, n);
                if (/\n?(6\)|7\))/.test(l))
                    return e
            }
            var c = m.data[m.map.emoticons[a]][3][0];
            return c ? t + ":" + c + ":" : e
        });
        if (u.length) {
            var t = u.map(m.escape_rx)
              , a = new RegExp("(\\(.+)(" + t.join("|") + ")(.+\\))","g");
            e = e.replace(a, function(e, t, a, n) {
                var s = m.data[m.map.emoticons[a]][3][0];
                return s ? t + ":" + s + ":" + n : e
            })
        }
        return e
    }
    ,
    e.prototype.replace_colons = function(e) {
        var o = this;
        return o.init_colons(),
        e.replace(o.rx_colons, function(e) {
            var t = e.substr(1, e.length - 2);
            if (-1 < (t = t.toLowerCase()).indexOf("::skin-tone-")) {
                var a, n = "skin-tone-" + t.substr(-1, 1), s = o.map.colons[n];
                return t = t.substr(0, t.length - 13),
                (a = o.map.colons[t]) ? o.replacement(a, t, ":", {
                    idx: s,
                    actual: n,
                    wrapper: ":"
                }) : ":" + t + ":" + o.replacement(s, n, ":")
            }
            return (a = o.map.colons[t]) ? o.replacement(a, t, ":") : e
        })
    }
    ,
    e.prototype.replace_unified = function(e) {
        var o = this;
        return o.init_unified(),
        e.replace(o.rx_unified, function(e, t, a) {
            var n = o.map.unified[t];
            if (!n)
                return e;
            var s = null;
            return "🏻" == a && (s = "1f3fb"),
            "🏼" == a && (s = "1f3fc"),
            "🏽" == a && (s = "1f3fd"),
            "🏾" == a && (s = "1f3fe"),
            "🏿" == a && (s = "1f3ff"),
            s ? o.replacement(n, null, null, {
                idx: s,
                actual: a,
                wrapper: ""
            }, !0) : o.replacement(n, null, null, null, !0)
        })
    }
    ,
    e.prototype.addAliases = function(e) {
        for (var t in this.init_colons(),
        e)
            this.map.colons[t] = e[t]
    }
    ,
    e.prototype.removeAliases = function(e) {
        for (var t = this, a = 0; a < e.length; a++) {
            var n = e[a];
            delete t.map.colons[n];
            e: for (var s in t.data)
                for (var o = 0; o < t.data[s][3].length; o++)
                    if (n == t.data[s][3][o]) {
                        t.map.colons[n] = s;
                        break e
                    }
        }
    }
    ,
    e.prototype.replacement = function(e, t, a, n, s) {
        var o = this
          , r = e
          , i = "";
        n && "object" === _typeof(n) && (i = o.replacement(n.idx, n.actual, n.wrapper),
        n.idx);
        var l = o.img_set;
        if (a = a || "",
        o.colons_mode)
            return ":" + o.data[e][3][0] + ":" + i;
        var c = t ? a + t + a : o.data[e][8] || a + o.data[e][3][0] + a;
        if (o.text_mode)
            return c + i;
        if (o.init_env(),
        "unified" == o.replace_mode && o.allow_native && o.data[e][0][0])
            return o.data[e][0][0] + i;
        if ("softbank" == o.replace_mode && o.allow_native && o.data[e][1])
            return o.data[e][1] + i;
        if ("google" == o.replace_mode && o.allow_native && o.data[e][2])
            return o.data[e][2] + i;
        o.data[e][7] || (o.img_sets[l].path,
        o.img_suffix);
        var d = o.include_title ? ' title="' + (t || o.data[e][3][0]) + '"' : ""
          , m = o.include_text ? a + (t || o.data[e][3][0]) + a : ""
          , f = o.data[e][4]
          , u = o.data[e][5];
        function _(e) {
            var t = parseInt("1111111111", 2);
            function a(e) {
                return "\\u" + e.toString(16).toUpperCase()
            }
            if (e <= 65535)
                return a(e);
            var n = 56320 + ((e -= 65536) & t);
            return a(55296 + (e >> 10)) + a(n)
        }
        if (s) {
            var h = _(o.data[e][0][0].codePointAt(0));
            return h.length < 5 ? (h = "00" + h,
            h += _(o.data[e][0][0].codePointAt(2))) : ~o.data[e][3][0].indexOf("flag-") && (h += _(o.data[e][0][0].codePointAt(2))),
            '<img src="https://vk.com/images/emoji/' + (h = h.replace(/\\u/g, "")) + '.png" alt="' + o.data[e][0][0] + '">'
        }
        var p = 100 / (o.sheet_size - 1);
        return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + ("background: url(" + o.img_sets[l].sheet + ");background-position:" + p * f + "% " + p * u + "%;background-size:" + o.sheet_size + "00%") + '"' + d + ' data-codepoints="' + r + '">' + m + "</span></span>" + i
    }
    ,
    e.prototype.init_emoticons = function() {
        var e = this;
        if (!e.inits.emoticons) {
            e.init_colons(),
            e.inits.emoticons = 1;
            var t = [];
            for (var a in e.map.emoticons = {},
            e.emoticons_data) {
                var n = a.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
                e.map.colons[e.emoticons_data[a]] && (e.map.emoticons[n] = e.map.colons[e.emoticons_data[a]],
                t.push(e.escape_rx(n)))
            }
            e.rx_emoticons = new RegExp("(^|\\s)(" + t.join("|") + ")(?=$|[\\s|\\?\\.,!])","g")
        }
    }
    ,
    e.prototype.init_colons = function() {
        var e = this;
        if (!e.inits.colons)
            for (var t in e.inits.colons = 1,
            e.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?","g"),
            e.map.colons = {},
            e.data)
                for (var a = 0; a < e.data[t][3].length; a++)
                    e.map.colons[e.data[t][3][a]] = t
    }
    ,
    e.prototype.init_unified = function() {
        var e = this;
        if (!e.inits.unified) {
            e.inits.unified = 1;
            var t = [];
            for (var a in e.map.unified = {},
            e.map.unified_inverted = {},
            e.data)
                for (var n = 0; n < e.data[a][0].length; n++)
                    t.push(e.data[a][0][n].replace("*", "\\*")),
                    e.map.unified[e.data[a][0][n]] = a,
                    e.map.unified_inverted[e.data[a][3][0]] = e.data[a][0][0];
            t = t.sort(function(e, t) {
                return t.length - e.length
            }),
            e.rx_unified = new RegExp("(" + t.join("|") + ")(\ud83c[\udffb-\udfff])?","g")
        }
    }
    ,
    e.prototype.init_env = function() {
        var t = this;
        if (!t.inits.env) {
            if (t.inits.env = 1,
            t.replace_mode = "img",
            t.supports_css = !1,
            "undefined" != typeof navigator) {
                var a = navigator.userAgent;
                if (window.getComputedStyle)
                    try {
                        var e = window.getComputedStyle(document.body);
                        (e["background-size"] || e.backgroundSize) && (t.supports_css = !0)
                    } catch (e) {
                        a.match(/Firefox/i) && (t.supports_css = !0)
                    }
                if (a.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
                    if (a.match(/OS\s+[12345]/i))
                        return void (t.replace_mode = "softbank");
                    if (a.match(/OS\s+[6789]/i))
                        return void (t.replace_mode = "unified")
                }
                if (a.match(/Mac OS X 10[._ ](?:[789]|1\d)/i))
                    return void (t.replace_mode = "unified");
                if (!t.avoid_ms_emoji && (a.match(/Windows NT 6.[1-9]/i) || a.match(/Windows NT 10.[0-9]/i)) && !a.match(/Chrome/i) && !a.match(/MSIE 8/i))
                    return void (t.replace_mode = "unified")
            }
            0,
            t.supports_css && (t.replace_mode = "css")
        }
    }
    ,
    e.prototype.escape_rx = function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }
    ,
    e.prototype.sheet_size = 41,
    e.prototype.data = {
        "00a9": [["©️", "©"], "", "󾬩", ["copyright"], 0, 0, 11, 0],
        "00ae": [["®️", "®"], "", "󾬭", ["registered"], 0, 1, 11, 0],
        "203c": [["‼️", "‼"], "", "󾬆", ["bangbang"], 0, 2, 15, 0],
        2049: [["⁉️", "⁉"], "", "󾬅", ["interrobang"], 0, 3, 15, 0],
        2122: [["™️", "™"], "", "󾬪", ["tm"], 0, 4, 11, 0],
        2139: [["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 0, 5, 15, 0],
        2194: [["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 0, 6, 15, 0],
        2195: [["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 0, 7, 15, 0],
        2196: [["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 0, 8, 15, 0],
        2197: [["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 0, 9, 15, 0],
        2198: [["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 0, 10, 15, 0],
        2199: [["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 0, 11, 15, 0],
        "21a9": [["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 0, 12, 15, 0],
        "21aa": [["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 0, 13, 15, 0],
        "231a": [["⌚️", "⌚"], "", "󾀝", ["watch"], 0, 14, 15, 0],
        "231b": [["⌛️", "⌛"], "", "󾀜", ["hourglass"], 0, 15, 15, 0],
        2328: [["⌨️", "⌨"], "", "", ["keyboard"], 0, 16, 15, 0],
        "23cf": [["⏏"], "", "", ["eject"], 0, 17, 2, 0],
        "23e9": [["⏩"], "", "󾫾", ["fast_forward"], 0, 18, 15, 0],
        "23ea": [["⏪"], "", "󾫿", ["rewind"], 0, 19, 15, 0],
        "23eb": [["⏫"], "", "󾬃", ["arrow_double_up"], 0, 20, 15, 0],
        "23ec": [["⏬"], "", "󾬂", ["arrow_double_down"], 0, 21, 15, 0],
        "23ed": [["⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 0, 22, 15, 0],
        "23ee": [["⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 0, 23, 15, 0],
        "23ef": [["⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 0, 24, 15, 0],
        "23f0": [["⏰"], "", "󾀪", ["alarm_clock"], 0, 25, 15, 0],
        "23f1": [["⏱"], "", "", ["stopwatch"], 0, 26, 15, 0],
        "23f2": [["⏲"], "", "", ["timer_clock"], 0, 27, 15, 0],
        "23f3": [["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 0, 28, 15, 0],
        "23f8": [["⏸"], "", "", ["double_vertical_bar"], 0, 29, 15, 0],
        "23f9": [["⏹"], "", "", ["black_square_for_stop"], 0, 30, 15, 0],
        "23fa": [["⏺"], "", "", ["black_circle_for_record"], 0, 31, 15, 0],
        "24c2": [["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 0, 32, 15, 0],
        "25aa": [["▪️", "▪"], "", "󾭮", ["black_small_square"], 0, 33, 15, 0],
        "25ab": [["▫️", "▫"], "", "󾭭", ["white_small_square"], 0, 34, 15, 0],
        "25b6": [["▶️", "▶"], "", "󾫼", ["arrow_forward"], 0, 35, 15, 0],
        "25c0": [["◀️", "◀"], "", "󾫽", ["arrow_backward"], 0, 36, 15, 0],
        "25fb": [["◻️", "◻"], "", "󾭱", ["white_medium_square"], 0, 37, 15, 0],
        "25fc": [["◼️", "◼"], "", "󾭲", ["black_medium_square"], 0, 38, 15, 0],
        "25fd": [["◽️", "◽"], "", "󾭯", ["white_medium_small_square"], 0, 39, 15, 0],
        "25fe": [["◾️", "◾"], "", "󾭰", ["black_medium_small_square"], 0, 40, 15, 0],
        2600: [["☀️", "☀"], "", "󾀀", ["sunny"], 1, 0, 15, 0],
        2601: [["☁️", "☁"], "", "󾀁", ["cloud"], 1, 1, 15, 0],
        2602: [["☂️", "☂"], "", "", ["umbrella"], 1, 2, 15, 0],
        2603: [["☃️", "☃"], "", "", ["snowman"], 1, 3, 15, 0],
        2604: [["☄️", "☄"], "", "", ["comet"], 1, 4, 15, 0],
        "260e": [["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 1, 5, 15, 0],
        2611: [["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 1, 6, 15, 0],
        2614: [["☔️", "☔"], "", "󾀂", ["umbrella_with_rain_drops"], 1, 7, 15, 0],
        2615: [["☕️", "☕"], "", "󾦁", ["coffee"], 1, 8, 15, 0],
        2618: [["☘"], "", "", ["shamrock"], 1, 9, 15, 0],
        "261d": [["☝️", "☝"], "", "󾮘", ["point_up"], 1, 10, 15, 0],
        2620: [["☠️", "☠"], "", "", ["skull_and_crossbones"], 1, 16, 15, 0],
        2622: [["☢️", "☢"], "", "", ["radioactive_sign"], 1, 17, 15, 0],
        2623: [["☣️", "☣"], "", "", ["biohazard_sign"], 1, 18, 15, 0],
        2626: [["☦️", "☦"], "", "", ["orthodox_cross"], 1, 19, 15, 0],
        "262a": [["☪️", "☪"], "", "", ["star_and_crescent"], 1, 20, 15, 0],
        "262e": [["☮️", "☮"], "", "", ["peace_symbol"], 1, 21, 15, 0],
        "262f": [["☯️", "☯"], "", "", ["yin_yang"], 1, 22, 15, 0],
        2638: [["☸️", "☸"], "", "", ["wheel_of_dharma"], 1, 23, 15, 0],
        2639: [["☹️", "☹"], "", "", ["white_frowning_face"], 1, 24, 15, 0],
        "263a": [["☺️", "☺"], "", "󾌶", ["relaxed"], 1, 25, 15, 0],
        2648: [["♈️", "♈"], "", "󾀫", ["aries"], 1, 26, 15, 0],
        2649: [["♉️", "♉"], "", "󾀬", ["taurus"], 1, 27, 15, 0],
        "264a": [["♊️", "♊"], "", "󾀭", ["gemini"], 1, 28, 15, 0],
        "264b": [["♋️", "♋"], "", "󾀮", ["cancer"], 1, 29, 15, 0],
        "264c": [["♌️", "♌"], "", "󾀯", ["leo"], 1, 30, 15, 0],
        "264d": [["♍️", "♍"], "", "󾀰", ["virgo"], 1, 31, 15, 0],
        "264e": [["♎️", "♎"], "", "󾀱", ["libra"], 1, 32, 15, 0],
        "264f": [["♏️", "♏"], "", "󾀲", ["scorpius"], 1, 33, 15, 0],
        2650: [["♐️", "♐"], "", "󾀳", ["sagittarius"], 1, 34, 15, 0],
        2651: [["♑️", "♑"], "", "󾀴", ["capricorn"], 1, 35, 15, 0],
        2652: [["♒️", "♒"], "", "󾀵", ["aquarius"], 1, 36, 15, 0],
        2653: [["♓️", "♓"], "", "󾀶", ["pisces"], 1, 37, 15, 0],
        2660: [["♠️", "♠"], "", "󾬛", ["spades"], 1, 38, 15, 0],
        2663: [["♣️", "♣"], "", "󾬝", ["clubs"], 1, 39, 15, 0],
        2665: [["♥️", "♥"], "", "󾬚", ["hearts"], 1, 40, 15, 0],
        2666: [["♦️", "♦"], "", "󾬜", ["diamonds"], 2, 0, 15, 0],
        2668: [["♨️", "♨"], "", "󾟺", ["hotsprings"], 2, 1, 15, 0],
        "267b": [["♻️", "♻"], "", "󾬬", ["recycle"], 2, 2, 15, 0],
        "267f": [["♿️", "♿"], "", "󾬠", ["wheelchair"], 2, 3, 15, 0],
        2692: [["⚒"], "", "", ["hammer_and_pick"], 2, 4, 15, 0],
        2693: [["⚓️", "⚓"], "", "󾓁", ["anchor"], 2, 5, 15, 0],
        2694: [["⚔"], "", "", ["crossed_swords"], 2, 6, 15, 0],
        2696: [["⚖"], "", "", ["scales"], 2, 7, 15, 0],
        2697: [["⚗"], "", "", ["alembic"], 2, 8, 15, 0],
        2699: [["⚙"], "", "", ["gear"], 2, 9, 15, 0],
        "269b": [["⚛"], "", "", ["atom_symbol"], 2, 10, 15, 0],
        "269c": [["⚜"], "", "", ["fleur_de_lis"], 2, 11, 15, 0],
        "26a0": [["⚠️", "⚠"], "", "󾬣", ["warning"], 2, 12, 15, 0],
        "26a1": [["⚡️", "⚡"], "", "󾀄", ["zap"], 2, 13, 15, 0],
        "26aa": [["⚪️", "⚪"], "", "󾭥", ["white_circle"], 2, 14, 15, 0],
        "26ab": [["⚫️", "⚫"], "", "󾭦", ["black_circle"], 2, 15, 15, 0],
        "26b0": [["⚰"], "", "", ["coffin"], 2, 16, 15, 0],
        "26b1": [["⚱"], "", "", ["funeral_urn"], 2, 17, 15, 0],
        "26bd": [["⚽️", "⚽"], "", "󾟔", ["soccer"], 2, 18, 15, 0],
        "26be": [["⚾️", "⚾"], "", "󾟑", ["baseball"], 2, 19, 15, 0],
        "26c4": [["⛄️", "⛄"], "", "󾀃", ["snowman_without_snow"], 2, 20, 15, 0],
        "26c5": [["⛅️", "⛅"], "", "󾀏", ["partly_sunny"], 2, 21, 15, 0],
        "26c8": [["⛈"], "", "", ["thunder_cloud_and_rain"], 2, 22, 15, 0],
        "26ce": [["⛎"], "", "󾀷", ["ophiuchus"], 2, 23, 15, 0],
        "26cf": [["⛏"], "", "", ["pick"], 2, 24, 15, 0],
        "26d1": [["⛑"], "", "", ["helmet_with_white_cross"], 2, 25, 15, 0],
        "26d3": [["⛓"], "", "", ["chains"], 2, 26, 15, 0],
        "26d4": [["⛔️", "⛔"], "", "󾬦", ["no_entry"], 2, 27, 15, 0],
        "26e9": [["⛩"], "", "", ["shinto_shrine"], 2, 28, 15, 0],
        "26ea": [["⛪️", "⛪"], "", "󾒻", ["church"], 2, 29, 15, 0],
        "26f0": [["⛰"], "", "", ["mountain"], 2, 30, 15, 0],
        "26f1": [["⛱"], "", "", ["umbrella_on_ground"], 2, 31, 15, 0],
        "26f2": [["⛲️", "⛲"], "", "󾒼", ["fountain"], 2, 32, 15, 0],
        "26f3": [["⛳️", "⛳"], "", "󾟒", ["golf"], 2, 33, 15, 0],
        "26f4": [["⛴"], "", "", ["ferry"], 2, 34, 15, 0],
        "26f5": [["⛵️", "⛵"], "", "󾟪", ["boat", "sailboat"], 2, 35, 15, 0],
        "26f7": [["⛷"], "", "", ["skier"], 2, 36, 15, 0],
        "26f8": [["⛸"], "", "", ["ice_skate"], 2, 37, 15, 0],
        "26f9": [["⛹"], "", "", ["person_with_ball"], 2, 38, 15, 0],
        "26fa": [["⛺️", "⛺"], "", "󾟻", ["tent"], 3, 3, 15, 0],
        "26fd": [["⛽️", "⛽"], "", "󾟵", ["fuelpump"], 3, 4, 15, 0],
        2702: [["✂️", "✂"], "", "󾔾", ["scissors"], 3, 5, 15, 0],
        2705: [["✅"], "", "󾭊", ["white_check_mark"], 3, 6, 15, 0],
        2708: [["✈️", "✈"], "", "󾟩", ["airplane"], 3, 7, 15, 0],
        2709: [["✉️", "✉"], "", "󾔩", ["email", "envelope"], 3, 8, 15, 0],
        "270a": [["✊"], "", "󾮓", ["fist"], 3, 9, 15, 0],
        "270b": [["✋"], "", "󾮕", ["hand", "raised_hand"], 3, 15, 15, 0],
        "270c": [["✌️", "✌"], "", "󾮔", ["v"], 3, 21, 15, 0],
        "270d": [["✍️", "✍"], "", "", ["writing_hand"], 3, 27, 15, 0],
        "270f": [["✏️", "✏"], "", "󾔹", ["pencil2"], 3, 33, 15, 0],
        2712: [["✒️", "✒"], "", "󾔶", ["black_nib"], 3, 34, 15, 0],
        2714: [["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 3, 35, 15, 0],
        2716: [["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 3, 36, 15, 0],
        "271d": [["✝️", "✝"], "", "", ["latin_cross"], 3, 37, 15, 0],
        2721: [["✡️", "✡"], "", "", ["star_of_david"], 3, 38, 15, 0],
        2728: [["✨"], "", "󾭠", ["sparkles"], 3, 39, 15, 0],
        2733: [["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 3, 40, 15, 0],
        2734: [["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 4, 0, 15, 0],
        2744: [["❄️", "❄"], "", "󾀎", ["snowflake"], 4, 1, 15, 0],
        2747: [["❇️", "❇"], "", "󾭷", ["sparkle"], 4, 2, 15, 0],
        "274c": [["❌"], "", "󾭅", ["x"], 4, 3, 15, 0],
        "274e": [["❎"], "", "󾭆", ["negative_squared_cross_mark"], 4, 4, 15, 0],
        2753: [["❓"], "", "󾬉", ["question"], 4, 5, 15, 0],
        2754: [["❔"], "", "󾬊", ["grey_question"], 4, 6, 15, 0],
        2755: [["❕"], "", "󾬋", ["grey_exclamation"], 4, 7, 15, 0],
        2757: [["❗️", "❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 4, 8, 15, 0],
        2763: [["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 4, 9, 15, 0],
        2764: [["❤️", "❤"], "", "󾬌", ["heart"], 4, 10, 15, 0, "<3"],
        2795: [["➕"], "", "󾭑", ["heavy_plus_sign"], 4, 11, 15, 0],
        2796: [["➖"], "", "󾭒", ["heavy_minus_sign"], 4, 12, 15, 0],
        2797: [["➗"], "", "󾭔", ["heavy_division_sign"], 4, 13, 15, 0],
        "27a1": [["➡️", "➡"], "", "󾫺", ["arrow_right"], 4, 14, 15, 0],
        "27b0": [["➰"], "", "󾬈", ["curly_loop"], 4, 15, 15, 0],
        "27bf": [["➿"], "", "󾠫", ["loop"], 4, 16, 15, 0],
        2934: [["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 4, 17, 15, 0],
        2935: [["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 4, 18, 15, 0],
        "2b05": [["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 4, 19, 15, 0],
        "2b06": [["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 4, 20, 15, 0],
        "2b07": [["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 4, 21, 15, 0],
        "2b1b": [["⬛️", "⬛"], "", "󾭬", ["black_large_square"], 4, 22, 15, 0],
        "2b1c": [["⬜️", "⬜"], "", "󾭫", ["white_large_square"], 4, 23, 15, 0],
        "2b50": [["⭐️", "⭐"], "", "󾭨", ["star"], 4, 24, 15, 0],
        "2b55": [["⭕️", "⭕"], "", "󾭄", ["o"], 4, 25, 15, 0],
        3030: [["〰️", "〰"], "", "󾬇", ["wavy_dash"], 4, 26, 15, 0],
        "303d": [["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 4, 27, 15, 0],
        3297: [["㊗️", "㊗"], "", "󾭃", ["congratulations"], 4, 28, 15, 0],
        3299: [["㊙️", "㊙"], "", "󾬫", ["secret"], 4, 29, 15, 0],
        "1f004": [["🀄️", "🀄"], "", "󾠋", ["mahjong"], 4, 30, 15, 0],
        "1f0cf": [["🃏"], "", "󾠒", ["black_joker"], 4, 31, 15, 0],
        "1f170": [["🅰️", "🅰"], "", "󾔋", ["a"], 4, 32, 15, 0],
        "1f171": [["🅱️", "🅱"], "", "󾔌", ["b"], 4, 33, 15, 0],
        "1f17e": [["🅾️", "🅾"], "", "󾔎", ["o2"], 4, 34, 15, 0],
        "1f17f": [["🅿️", "🅿"], "", "󾟶", ["parking"], 4, 35, 15, 0],
        "1f18e": [["🆎"], "", "󾔍", ["ab"], 4, 36, 15, 0],
        "1f191": [["🆑"], "", "󾮄", ["cl"], 4, 37, 15, 0],
        "1f192": [["🆒"], "", "󾬸", ["cool"], 4, 38, 15, 0],
        "1f193": [["🆓"], "", "󾬡", ["free"], 4, 39, 15, 0],
        "1f194": [["🆔"], "", "󾮁", ["id"], 4, 40, 15, 0],
        "1f195": [["🆕"], "", "󾬶", ["new"], 5, 0, 15, 0],
        "1f196": [["🆖"], "", "󾬨", ["ng"], 5, 1, 15, 0],
        "1f197": [["🆗"], "", "󾬧", ["ok"], 5, 2, 15, 0],
        "1f198": [["🆘"], "", "󾭏", ["sos"], 5, 3, 15, 0],
        "1f199": [["🆙"], "", "󾬷", ["up"], 5, 4, 15, 0],
        "1f19a": [["🆚"], "", "󾬲", ["vs"], 5, 5, 15, 0],
        "1f201": [["🈁"], "", "󾬤", ["koko"], 5, 6, 15, 0],
        "1f202": [["🈂️", "🈂"], "", "󾬿", ["sa"], 5, 7, 15, 0],
        "1f21a": [["🈚️", "🈚"], "", "󾬺", ["u7121"], 5, 8, 15, 0],
        "1f22f": [["🈯️", "🈯"], "", "󾭀", ["u6307"], 5, 9, 15, 0],
        "1f232": [["🈲"], "", "󾬮", ["u7981"], 5, 10, 15, 0],
        "1f233": [["🈳"], "", "󾬯", ["u7a7a"], 5, 11, 15, 0],
        "1f234": [["🈴"], "", "󾬰", ["u5408"], 5, 12, 15, 0],
        "1f235": [["🈵"], "", "󾬱", ["u6e80"], 5, 13, 15, 0],
        "1f236": [["🈶"], "", "󾬹", ["u6709"], 5, 14, 15, 0],
        "1f237": [["🈷️", "🈷"], "", "󾬻", ["u6708"], 5, 15, 15, 0],
        "1f238": [["🈸"], "", "󾬼", ["u7533"], 5, 16, 15, 0],
        "1f239": [["🈹"], "", "󾬾", ["u5272"], 5, 17, 15, 0],
        "1f23a": [["🈺"], "", "󾭁", ["u55b6"], 5, 18, 15, 0],
        "1f250": [["🉐"], "", "󾬽", ["ideograph_advantage"], 5, 19, 15, 0],
        "1f251": [["🉑"], "", "󾭐", ["accept"], 5, 20, 15, 0],
        "1f300": [["🌀"], "", "󾀅", ["cyclone"], 5, 21, 15, 0],
        "1f301": [["🌁"], "", "󾀆", ["foggy"], 5, 22, 15, 0],
        "1f302": [["🌂"], "", "󾀇", ["closed_umbrella"], 5, 23, 15, 0],
        "1f303": [["🌃"], "", "󾀈", ["night_with_stars"], 5, 24, 15, 0],
        "1f304": [["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 25, 15, 0],
        "1f305": [["🌅"], "", "󾀊", ["sunrise"], 5, 26, 15, 0],
        "1f306": [["🌆"], "", "󾀋", ["city_sunset"], 5, 27, 15, 0],
        "1f307": [["🌇"], "", "󾀌", ["city_sunrise"], 5, 28, 15, 0],
        "1f308": [["🌈"], "", "󾀍", ["rainbow"], 5, 29, 15, 0],
        "1f309": [["🌉"], "", "󾀐", ["bridge_at_night"], 5, 30, 15, 0],
        "1f30a": [["🌊"], "", "󾀸", ["ocean"], 5, 31, 15, 0],
        "1f30b": [["🌋"], "", "󾀺", ["volcano"], 5, 32, 15, 0],
        "1f30c": [["🌌"], "", "󾀻", ["milky_way"], 5, 33, 15, 0],
        "1f30d": [["🌍"], "", "", ["earth_africa"], 5, 34, 15, 0],
        "1f30e": [["🌎"], "", "", ["earth_americas"], 5, 35, 15, 0],
        "1f30f": [["🌏"], "", "󾀹", ["earth_asia"], 5, 36, 15, 0],
        "1f310": [["🌐"], "", "", ["globe_with_meridians"], 5, 37, 15, 0],
        "1f311": [["🌑"], "", "󾀑", ["new_moon"], 5, 38, 15, 0],
        "1f312": [["🌒"], "", "", ["waxing_crescent_moon"], 5, 39, 15, 0],
        "1f313": [["🌓"], "", "󾀓", ["first_quarter_moon"], 5, 40, 15, 0],
        "1f314": [["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 6, 0, 15, 0],
        "1f315": [["🌕"], "", "󾀕", ["full_moon"], 6, 1, 15, 0],
        "1f316": [["🌖"], "", "", ["waning_gibbous_moon"], 6, 2, 15, 0],
        "1f317": [["🌗"], "", "", ["last_quarter_moon"], 6, 3, 15, 0],
        "1f318": [["🌘"], "", "", ["waning_crescent_moon"], 6, 4, 15, 0],
        "1f319": [["🌙"], "", "󾀔", ["crescent_moon"], 6, 5, 15, 0],
        "1f31a": [["🌚"], "", "", ["new_moon_with_face"], 6, 6, 15, 0],
        "1f31b": [["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 6, 7, 15, 0],
        "1f31c": [["🌜"], "", "", ["last_quarter_moon_with_face"], 6, 8, 15, 0],
        "1f31d": [["🌝"], "", "", ["full_moon_with_face"], 6, 9, 15, 0],
        "1f31e": [["🌞"], "", "", ["sun_with_face"], 6, 10, 15, 0],
        "1f31f": [["🌟"], "", "󾭩", ["star2"], 6, 11, 15, 0],
        "1f320": [["🌠"], "", "󾭪", ["stars"], 6, 12, 15, 0],
        "1f321": [["🌡"], "", "", ["thermometer"], 6, 13, 15, 0],
        "1f324": [["🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 6, 14, 15, 0],
        "1f325": [["🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 6, 15, 15, 0],
        "1f326": [["🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 6, 16, 15, 0],
        "1f327": [["🌧"], "", "", ["rain_cloud"], 6, 17, 15, 0],
        "1f328": [["🌨"], "", "", ["snow_cloud"], 6, 18, 15, 0],
        "1f329": [["🌩"], "", "", ["lightning", "lightning_cloud"], 6, 19, 15, 0],
        "1f32a": [["🌪"], "", "", ["tornado", "tornado_cloud"], 6, 20, 15, 0],
        "1f32b": [["🌫"], "", "", ["fog"], 6, 21, 15, 0],
        "1f32c": [["🌬"], "", "", ["wind_blowing_face"], 6, 22, 15, 0],
        "1f32d": [["🌭"], "", "", ["hotdog"], 6, 23, 15, 0],
        "1f32e": [["🌮"], "", "", ["taco"], 6, 24, 15, 0],
        "1f32f": [["🌯"], "", "", ["burrito"], 6, 25, 15, 0],
        "1f330": [["🌰"], "", "󾁌", ["chestnut"], 6, 26, 15, 0],
        "1f331": [["🌱"], "", "󾀾", ["seedling"], 6, 27, 15, 0],
        "1f332": [["🌲"], "", "", ["evergreen_tree"], 6, 28, 15, 0],
        "1f333": [["🌳"], "", "", ["deciduous_tree"], 6, 29, 15, 0],
        "1f334": [["🌴"], "", "󾁇", ["palm_tree"], 6, 30, 15, 0],
        "1f335": [["🌵"], "", "󾁈", ["cactus"], 6, 31, 15, 0],
        "1f336": [["🌶"], "", "", ["hot_pepper"], 6, 32, 15, 0],
        "1f337": [["🌷"], "", "󾀽", ["tulip"], 6, 33, 15, 0],
        "1f338": [["🌸"], "", "󾁀", ["cherry_blossom"], 6, 34, 15, 0],
        "1f339": [["🌹"], "", "󾁁", ["rose"], 6, 35, 15, 0],
        "1f33a": [["🌺"], "", "󾁅", ["hibiscus"], 6, 36, 15, 0],
        "1f33b": [["🌻"], "", "󾁆", ["sunflower"], 6, 37, 15, 0],
        "1f33c": [["🌼"], "", "󾁍", ["blossom"], 6, 38, 15, 0],
        "1f33d": [["🌽"], "", "󾁊", ["corn"], 6, 39, 15, 0],
        "1f33e": [["🌾"], "", "󾁉", ["ear_of_rice"], 6, 40, 15, 0],
        "1f33f": [["🌿"], "", "󾁎", ["herb"], 7, 0, 15, 0],
        "1f340": [["🍀"], "", "󾀼", ["four_leaf_clover"], 7, 1, 15, 0],
        "1f341": [["🍁"], "", "󾀿", ["maple_leaf"], 7, 2, 15, 0],
        "1f342": [["🍂"], "", "󾁂", ["fallen_leaf"], 7, 3, 15, 0],
        "1f343": [["🍃"], "", "󾁃", ["leaves"], 7, 4, 15, 0],
        "1f344": [["🍄"], "", "󾁋", ["mushroom"], 7, 5, 15, 0],
        "1f345": [["🍅"], "", "󾁕", ["tomato"], 7, 6, 15, 0],
        "1f346": [["🍆"], "", "󾁖", ["eggplant"], 7, 7, 15, 0],
        "1f347": [["🍇"], "", "󾁙", ["grapes"], 7, 8, 15, 0],
        "1f348": [["🍈"], "", "󾁗", ["melon"], 7, 9, 15, 0],
        "1f349": [["🍉"], "", "󾁔", ["watermelon"], 7, 10, 15, 0],
        "1f34a": [["🍊"], "", "󾁒", ["tangerine"], 7, 11, 15, 0],
        "1f34b": [["🍋"], "", "", ["lemon"], 7, 12, 15, 0],
        "1f34c": [["🍌"], "", "󾁐", ["banana"], 7, 13, 15, 0],
        "1f34d": [["🍍"], "", "󾁘", ["pineapple"], 7, 14, 15, 0],
        "1f34e": [["🍎"], "", "󾁑", ["apple"], 7, 15, 15, 0],
        "1f34f": [["🍏"], "", "󾁛", ["green_apple"], 7, 16, 15, 0],
        "1f350": [["🍐"], "", "", ["pear"], 7, 17, 15, 0],
        "1f351": [["🍑"], "", "󾁚", ["peach"], 7, 18, 15, 0],
        "1f352": [["🍒"], "", "󾁏", ["cherries"], 7, 19, 15, 0],
        "1f353": [["🍓"], "", "󾁓", ["strawberry"], 7, 20, 15, 0],
        "1f354": [["🍔"], "", "󾥠", ["hamburger"], 7, 21, 15, 0],
        "1f355": [["🍕"], "", "󾥵", ["pizza"], 7, 22, 15, 0],
        "1f356": [["🍖"], "", "󾥲", ["meat_on_bone"], 7, 23, 15, 0],
        "1f357": [["🍗"], "", "󾥶", ["poultry_leg"], 7, 24, 15, 0],
        "1f358": [["🍘"], "", "󾥩", ["rice_cracker"], 7, 25, 15, 0],
        "1f359": [["🍙"], "", "󾥡", ["rice_ball"], 7, 26, 15, 0],
        "1f35a": [["🍚"], "", "󾥪", ["rice"], 7, 27, 15, 0],
        "1f35b": [["🍛"], "", "󾥬", ["curry"], 7, 28, 15, 0],
        "1f35c": [["🍜"], "", "󾥣", ["ramen"], 7, 29, 15, 0],
        "1f35d": [["🍝"], "", "󾥫", ["spaghetti"], 7, 30, 15, 0],
        "1f35e": [["🍞"], "", "󾥤", ["bread"], 7, 31, 15, 0],
        "1f35f": [["🍟"], "", "󾥧", ["fries"], 7, 32, 15, 0],
        "1f360": [["🍠"], "", "󾥴", ["sweet_potato"], 7, 33, 15, 0],
        "1f361": [["🍡"], "", "󾥨", ["dango"], 7, 34, 15, 0],
        "1f362": [["🍢"], "", "󾥭", ["oden"], 7, 35, 15, 0],
        "1f363": [["🍣"], "", "󾥮", ["sushi"], 7, 36, 15, 0],
        "1f364": [["🍤"], "", "󾥿", ["fried_shrimp"], 7, 37, 15, 0],
        "1f365": [["🍥"], "", "󾥳", ["fish_cake"], 7, 38, 15, 0],
        "1f366": [["🍦"], "", "󾥦", ["icecream"], 7, 39, 15, 0],
        "1f367": [["🍧"], "", "󾥱", ["shaved_ice"], 7, 40, 15, 0],
        "1f368": [["🍨"], "", "󾥷", ["ice_cream"], 8, 0, 15, 0],
        "1f369": [["🍩"], "", "󾥸", ["doughnut"], 8, 1, 15, 0],
        "1f36a": [["🍪"], "", "󾥹", ["cookie"], 8, 2, 15, 0],
        "1f36b": [["🍫"], "", "󾥺", ["chocolate_bar"], 8, 3, 15, 0],
        "1f36c": [["🍬"], "", "󾥻", ["candy"], 8, 4, 15, 0],
        "1f36d": [["🍭"], "", "󾥼", ["lollipop"], 8, 5, 15, 0],
        "1f36e": [["🍮"], "", "󾥽", ["custard"], 8, 6, 15, 0],
        "1f36f": [["🍯"], "", "󾥾", ["honey_pot"], 8, 7, 15, 0],
        "1f370": [["🍰"], "", "󾥢", ["cake"], 8, 8, 15, 0],
        "1f371": [["🍱"], "", "󾥯", ["bento"], 8, 9, 15, 0],
        "1f372": [["🍲"], "", "󾥰", ["stew"], 8, 10, 15, 0],
        "1f373": [["🍳"], "", "󾥥", ["egg"], 8, 11, 15, 0],
        "1f374": [["🍴"], "", "󾦀", ["fork_and_knife"], 8, 12, 15, 0],
        "1f375": [["🍵"], "", "󾦄", ["tea"], 8, 13, 15, 0],
        "1f376": [["🍶"], "", "󾦅", ["sake"], 8, 14, 15, 0],
        "1f377": [["🍷"], "", "󾦆", ["wine_glass"], 8, 15, 15, 0],
        "1f378": [["🍸"], "", "󾦂", ["cocktail"], 8, 16, 15, 0],
        "1f379": [["🍹"], "", "󾦈", ["tropical_drink"], 8, 17, 15, 0],
        "1f37a": [["🍺"], "", "󾦃", ["beer"], 8, 18, 15, 0],
        "1f37b": [["🍻"], "", "󾦇", ["beers"], 8, 19, 15, 0],
        "1f37c": [["🍼"], "", "", ["baby_bottle"], 8, 20, 15, 0],
        "1f37d": [["🍽"], "", "", ["knife_fork_plate"], 8, 21, 15, 0],
        "1f37e": [["🍾"], "", "", ["champagne"], 8, 22, 15, 0],
        "1f37f": [["🍿"], "", "", ["popcorn"], 8, 23, 15, 0],
        "1f380": [["🎀"], "", "󾔏", ["ribbon"], 8, 24, 15, 0],
        "1f381": [["🎁"], "", "󾔐", ["gift"], 8, 25, 15, 0],
        "1f382": [["🎂"], "", "󾔑", ["birthday"], 8, 26, 15, 0],
        "1f383": [["🎃"], "", "󾔟", ["jack_o_lantern"], 8, 27, 15, 0],
        "1f384": [["🎄"], "", "󾔒", ["christmas_tree"], 8, 28, 15, 0],
        "1f385": [["🎅"], "", "󾔓", ["santa"], 8, 29, 15, 0],
        "1f386": [["🎆"], "", "󾔕", ["fireworks"], 8, 35, 15, 0],
        "1f387": [["🎇"], "", "󾔝", ["sparkler"], 8, 36, 15, 0],
        "1f388": [["🎈"], "", "󾔖", ["balloon"], 8, 37, 15, 0],
        "1f389": [["🎉"], "", "󾔗", ["tada"], 8, 38, 15, 0],
        "1f38a": [["🎊"], "", "󾔠", ["confetti_ball"], 8, 39, 15, 0],
        "1f38b": [["🎋"], "", "󾔡", ["tanabata_tree"], 8, 40, 15, 0],
        "1f38c": [["🎌"], "", "󾔔", ["crossed_flags"], 9, 0, 15, 0],
        "1f38d": [["🎍"], "", "󾔘", ["bamboo"], 9, 1, 15, 0],
        "1f38e": [["🎎"], "", "󾔙", ["dolls"], 9, 2, 15, 0],
        "1f38f": [["🎏"], "", "󾔜", ["flags"], 9, 3, 15, 0],
        "1f390": [["🎐"], "", "󾔞", ["wind_chime"], 9, 4, 15, 0],
        "1f391": [["🎑"], "", "󾀗", ["rice_scene"], 9, 5, 15, 0],
        "1f392": [["🎒"], "", "󾔛", ["school_satchel"], 9, 6, 15, 0],
        "1f393": [["🎓"], "", "󾔚", ["mortar_board"], 9, 7, 15, 0],
        "1f396": [["🎖"], "", "", ["medal"], 9, 8, 15, 0],
        "1f397": [["🎗"], "", "", ["reminder_ribbon"], 9, 9, 15, 0],
        "1f399": [["🎙"], "", "", ["studio_microphone"], 9, 10, 15, 0],
        "1f39a": [["🎚"], "", "", ["slider"], 9, 11, 15, 0],
        "1f39b": [["🎛"], "", "", ["control_knobs"], 9, 12, 15, 0],
        "1f39e": [["🎞"], "", "", ["film_frames"], 9, 13, 15, 0],
        "1f39f": [["🎟"], "", "", ["admission_tickets"], 9, 14, 15, 0],
        "1f3a0": [["🎠"], "", "󾟼", ["carousel_horse"], 9, 15, 15, 0],
        "1f3a1": [["🎡"], "", "󾟽", ["ferris_wheel"], 9, 16, 15, 0],
        "1f3a2": [["🎢"], "", "󾟾", ["roller_coaster"], 9, 17, 15, 0],
        "1f3a3": [["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 9, 18, 15, 0],
        "1f3a4": [["🎤"], "", "󾠀", ["microphone"], 9, 19, 15, 0],
        "1f3a5": [["🎥"], "", "󾠁", ["movie_camera"], 9, 20, 15, 0],
        "1f3a6": [["🎦"], "", "󾠂", ["cinema"], 9, 21, 15, 0],
        "1f3a7": [["🎧"], "", "󾠃", ["headphones"], 9, 22, 15, 0],
        "1f3a8": [["🎨"], "", "󾠄", ["art"], 9, 23, 15, 0],
        "1f3a9": [["🎩"], "", "󾠅", ["tophat"], 9, 24, 15, 0],
        "1f3aa": [["🎪"], "", "󾠆", ["circus_tent"], 9, 25, 15, 0],
        "1f3ab": [["🎫"], "", "󾠇", ["ticket"], 9, 26, 15, 0],
        "1f3ac": [["🎬"], "", "󾠈", ["clapper"], 9, 27, 15, 0],
        "1f3ad": [["🎭"], "", "󾠉", ["performing_arts"], 9, 28, 15, 0],
        "1f3ae": [["🎮"], "", "󾠊", ["video_game"], 9, 29, 15, 0],
        "1f3af": [["🎯"], "", "󾠌", ["dart"], 9, 30, 15, 0],
        "1f3b0": [["🎰"], "", "󾠍", ["slot_machine"], 9, 31, 15, 0],
        "1f3b1": [["🎱"], "", "󾠎", ["8ball"], 9, 32, 15, 0],
        "1f3b2": [["🎲"], "", "󾠏", ["game_die"], 9, 33, 15, 0],
        "1f3b3": [["🎳"], "", "󾠐", ["bowling"], 9, 34, 15, 0],
        "1f3b4": [["🎴"], "", "󾠑", ["flower_playing_cards"], 9, 35, 15, 0],
        "1f3b5": [["🎵"], "", "󾠓", ["musical_note"], 9, 36, 15, 0],
        "1f3b6": [["🎶"], "", "󾠔", ["notes"], 9, 37, 15, 0],
        "1f3b7": [["🎷"], "", "󾠕", ["saxophone"], 9, 38, 15, 0],
        "1f3b8": [["🎸"], "", "󾠖", ["guitar"], 9, 39, 15, 0],
        "1f3b9": [["🎹"], "", "󾠗", ["musical_keyboard"], 9, 40, 15, 0],
        "1f3ba": [["🎺"], "", "󾠘", ["trumpet"], 10, 0, 15, 0],
        "1f3bb": [["🎻"], "", "󾠙", ["violin"], 10, 1, 15, 0],
        "1f3bc": [["🎼"], "", "󾠚", ["musical_score"], 10, 2, 15, 0],
        "1f3bd": [["🎽"], "", "󾟐", ["running_shirt_with_sash"], 10, 3, 15, 0],
        "1f3be": [["🎾"], "", "󾟓", ["tennis"], 10, 4, 15, 0],
        "1f3bf": [["🎿"], "", "󾟕", ["ski"], 10, 5, 15, 0],
        "1f3c0": [["🏀"], "", "󾟖", ["basketball"], 10, 6, 15, 0],
        "1f3c1": [["🏁"], "", "󾟗", ["checkered_flag"], 10, 7, 15, 0],
        "1f3c2": [["🏂"], "", "󾟘", ["snowboarder"], 10, 8, 15, 0],
        "1f3c3": [["🏃"], "", "󾟙", ["runner", "running"], 10, 9, 15, 0],
        "1f3c4": [["🏄"], "", "󾟚", ["surfer"], 10, 15, 15, 0],
        "1f3c5": [["🏅"], "", "", ["sports_medal"], 10, 21, 15, 0],
        "1f3c6": [["🏆"], "", "󾟛", ["trophy"], 10, 22, 15, 0],
        "1f3c7": [["🏇"], "", "", ["horse_racing"], 10, 23, 15, 0],
        "1f3c8": [["🏈"], "", "󾟝", ["football"], 10, 24, 15, 0],
        "1f3c9": [["🏉"], "", "", ["rugby_football"], 10, 25, 15, 0],
        "1f3ca": [["🏊"], "", "󾟞", ["swimmer"], 10, 26, 15, 0],
        "1f3cb": [["🏋"], "", "", ["weight_lifter"], 10, 32, 15, 0],
        "1f3cc": [["🏌"], "", "", ["golfer"], 10, 38, 15, 0],
        "1f3cd": [["🏍"], "", "", ["racing_motorcycle"], 10, 39, 15, 0],
        "1f3ce": [["🏎"], "", "", ["racing_car"], 10, 40, 15, 0],
        "1f3cf": [["🏏"], "", "", ["cricket_bat_and_ball"], 11, 0, 15, 0],
        "1f3d0": [["🏐"], "", "", ["volleyball"], 11, 1, 15, 0],
        "1f3d1": [["🏑"], "", "", ["field_hockey_stick_and_ball"], 11, 2, 15, 0],
        "1f3d2": [["🏒"], "", "", ["ice_hockey_stick_and_puck"], 11, 3, 15, 0],
        "1f3d3": [["🏓"], "", "", ["table_tennis_paddle_and_ball"], 11, 4, 15, 0],
        "1f3d4": [["🏔"], "", "", ["snow_capped_mountain"], 11, 5, 15, 0],
        "1f3d5": [["🏕"], "", "", ["camping"], 11, 6, 15, 0],
        "1f3d6": [["🏖"], "", "", ["beach_with_umbrella"], 11, 7, 15, 0],
        "1f3d7": [["🏗"], "", "", ["building_construction"], 11, 8, 15, 0],
        "1f3d8": [["🏘"], "", "", ["house_buildings"], 11, 9, 15, 0],
        "1f3d9": [["🏙"], "", "", ["cityscape"], 11, 10, 15, 0],
        "1f3da": [["🏚"], "", "", ["derelict_house_building"], 11, 11, 15, 0],
        "1f3db": [["🏛"], "", "", ["classical_building"], 11, 12, 15, 0],
        "1f3dc": [["🏜"], "", "", ["desert"], 11, 13, 15, 0],
        "1f3dd": [["🏝"], "", "", ["desert_island"], 11, 14, 15, 0],
        "1f3de": [["🏞"], "", "", ["national_park"], 11, 15, 15, 0],
        "1f3df": [["🏟"], "", "", ["stadium"], 11, 16, 15, 0],
        "1f3e0": [["🏠"], "", "󾒰", ["house"], 11, 17, 15, 0],
        "1f3e1": [["🏡"], "", "󾒱", ["house_with_garden"], 11, 18, 15, 0],
        "1f3e2": [["🏢"], "", "󾒲", ["office"], 11, 19, 15, 0],
        "1f3e3": [["🏣"], "", "󾒳", ["post_office"], 11, 20, 15, 0],
        "1f3e4": [["🏤"], "", "", ["european_post_office"], 11, 21, 15, 0],
        "1f3e5": [["🏥"], "", "󾒴", ["hospital"], 11, 22, 15, 0],
        "1f3e6": [["🏦"], "", "󾒵", ["bank"], 11, 23, 15, 0],
        "1f3e7": [["🏧"], "", "󾒶", ["atm"], 11, 24, 15, 0],
        "1f3e8": [["🏨"], "", "󾒷", ["hotel"], 11, 25, 15, 0],
        "1f3e9": [["🏩"], "", "󾒸", ["love_hotel"], 11, 26, 15, 0],
        "1f3ea": [["🏪"], "", "󾒹", ["convenience_store"], 11, 27, 15, 0],
        "1f3eb": [["🏫"], "", "󾒺", ["school"], 11, 28, 15, 0],
        "1f3ec": [["🏬"], "", "󾒽", ["department_store"], 11, 29, 15, 0],
        "1f3ed": [["🏭"], "", "󾓀", ["factory"], 11, 30, 15, 0],
        "1f3ee": [["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 11, 31, 15, 0],
        "1f3ef": [["🏯"], "", "󾒾", ["japanese_castle"], 11, 32, 15, 0],
        "1f3f0": [["🏰"], "", "󾒿", ["european_castle"], 11, 33, 15, 0],
        "1f3f3": [["🏳"], "", "", ["waving_white_flag"], 11, 34, 15, 0],
        "1f3f4": [["🏴"], "", "", ["waving_black_flag"], 11, 35, 15, 0],
        "1f3f5": [["🏵"], "", "", ["rosette"], 11, 36, 15, 0],
        "1f3f7": [["🏷"], "", "", ["label"], 11, 37, 15, 0],
        "1f3f8": [["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 11, 38, 15, 0],
        "1f3f9": [["🏹"], "", "", ["bow_and_arrow"], 11, 39, 15, 0],
        "1f3fa": [["🏺"], "", "", ["amphora"], 11, 40, 15, 0],
        "1f3fb": [["🏻"], "", "", ["skin-tone-2"], 12, 0, 15, 0],
        "1f3fc": [["🏼"], "", "", ["skin-tone-3"], 12, 1, 15, 0],
        "1f3fd": [["🏽"], "", "", ["skin-tone-4"], 12, 2, 15, 0],
        "1f3fe": [["🏾"], "", "", ["skin-tone-5"], 12, 3, 15, 0],
        "1f3ff": [["🏿"], "", "", ["skin-tone-6"], 12, 4, 15, 0],
        "1f400": [["🐀"], "", "", ["rat"], 12, 5, 15, 0],
        "1f401": [["🐁"], "", "", ["mouse2"], 12, 6, 15, 0],
        "1f402": [["🐂"], "", "", ["ox"], 12, 7, 15, 0],
        "1f403": [["🐃"], "", "", ["water_buffalo"], 12, 8, 15, 0],
        "1f404": [["🐄"], "", "", ["cow2"], 12, 9, 15, 0],
        "1f405": [["🐅"], "", "", ["tiger2"], 12, 10, 15, 0],
        "1f406": [["🐆"], "", "", ["leopard"], 12, 11, 15, 0],
        "1f407": [["🐇"], "", "", ["rabbit2"], 12, 12, 15, 0],
        "1f408": [["🐈"], "", "", ["cat2"], 12, 13, 15, 0],
        "1f409": [["🐉"], "", "", ["dragon"], 12, 14, 15, 0],
        "1f40a": [["🐊"], "", "", ["crocodile"], 12, 15, 15, 0],
        "1f40b": [["🐋"], "", "", ["whale2"], 12, 16, 15, 0],
        "1f40c": [["🐌"], "", "󾆹", ["snail"], 12, 17, 15, 0],
        "1f40d": [["🐍"], "", "󾇓", ["snake"], 12, 18, 15, 0],
        "1f40e": [["🐎"], "", "󾟜", ["racehorse"], 12, 19, 15, 0],
        "1f40f": [["🐏"], "", "", ["ram"], 12, 20, 15, 0],
        "1f410": [["🐐"], "", "", ["goat"], 12, 21, 15, 0],
        "1f411": [["🐑"], "", "󾇏", ["sheep"], 12, 22, 15, 0],
        "1f412": [["🐒"], "", "󾇎", ["monkey"], 12, 23, 15, 0],
        "1f413": [["🐓"], "", "", ["rooster"], 12, 24, 15, 0],
        "1f414": [["🐔"], "", "󾇔", ["chicken"], 12, 25, 15, 0],
        "1f415": [["🐕"], "", "", ["dog2"], 12, 26, 15, 0],
        "1f416": [["🐖"], "", "", ["pig2"], 12, 27, 15, 0],
        "1f417": [["🐗"], "", "󾇕", ["boar"], 12, 28, 15, 0],
        "1f418": [["🐘"], "", "󾇌", ["elephant"], 12, 29, 15, 0],
        "1f419": [["🐙"], "", "󾇅", ["octopus"], 12, 30, 15, 0],
        "1f41a": [["🐚"], "", "󾇆", ["shell"], 12, 31, 15, 0],
        "1f41b": [["🐛"], "", "󾇋", ["bug"], 12, 32, 15, 0],
        "1f41c": [["🐜"], "", "󾇚", ["ant"], 12, 33, 15, 0],
        "1f41d": [["🐝"], "", "󾇡", ["bee", "honeybee"], 12, 34, 15, 0],
        "1f41e": [["🐞"], "", "󾇢", ["beetle"], 12, 35, 15, 0],
        "1f41f": [["🐟"], "", "󾆽", ["fish"], 12, 36, 15, 0],
        "1f420": [["🐠"], "", "󾇉", ["tropical_fish"], 12, 37, 15, 0],
        "1f421": [["🐡"], "", "󾇙", ["blowfish"], 12, 38, 15, 0],
        "1f422": [["🐢"], "", "󾇜", ["turtle"], 12, 39, 15, 0],
        "1f423": [["🐣"], "", "󾇝", ["hatching_chick"], 12, 40, 15, 0],
        "1f424": [["🐤"], "", "󾆺", ["baby_chick"], 13, 0, 15, 0],
        "1f425": [["🐥"], "", "󾆻", ["hatched_chick"], 13, 1, 15, 0],
        "1f426": [["🐦"], "", "󾇈", ["bird"], 13, 2, 15, 0],
        "1f427": [["🐧"], "", "󾆼", ["penguin"], 13, 3, 15, 0],
        "1f428": [["🐨"], "", "󾇍", ["koala"], 13, 4, 15, 0],
        "1f429": [["🐩"], "", "󾇘", ["poodle"], 13, 5, 15, 0],
        "1f42a": [["🐪"], "", "", ["dromedary_camel"], 13, 6, 15, 0],
        "1f42b": [["🐫"], "", "󾇖", ["camel"], 13, 7, 15, 0],
        "1f42c": [["🐬"], "", "󾇇", ["dolphin", "flipper"], 13, 8, 15, 0],
        "1f42d": [["🐭"], "", "󾇂", ["mouse"], 13, 9, 15, 0],
        "1f42e": [["🐮"], "", "󾇑", ["cow"], 13, 10, 15, 0],
        "1f42f": [["🐯"], "", "󾇀", ["tiger"], 13, 11, 15, 0],
        "1f430": [["🐰"], "", "󾇒", ["rabbit"], 13, 12, 15, 0],
        "1f431": [["🐱"], "", "󾆸", ["cat"], 13, 13, 15, 0],
        "1f432": [["🐲"], "", "󾇞", ["dragon_face"], 13, 14, 15, 0],
        "1f433": [["🐳"], "", "󾇃", ["whale"], 13, 15, 15, 0],
        "1f434": [["🐴"], "", "󾆾", ["horse"], 13, 16, 15, 0],
        "1f435": [["🐵"], "", "󾇄", ["monkey_face"], 13, 17, 15, 0],
        "1f436": [["🐶"], "", "󾆷", ["dog"], 13, 18, 15, 0],
        "1f437": [["🐷"], "", "󾆿", ["pig"], 13, 19, 15, 0],
        "1f438": [["🐸"], "", "󾇗", ["frog"], 13, 20, 15, 0],
        "1f439": [["🐹"], "", "󾇊", ["hamster"], 13, 21, 15, 0],
        "1f43a": [["🐺"], "", "󾇐", ["wolf"], 13, 22, 15, 0],
        "1f43b": [["🐻"], "", "󾇁", ["bear"], 13, 23, 15, 0],
        "1f43c": [["🐼"], "", "󾇟", ["panda_face"], 13, 24, 15, 0],
        "1f43d": [["🐽"], "", "󾇠", ["pig_nose"], 13, 25, 15, 0],
        "1f43e": [["🐾"], "", "󾇛", ["feet", "paw_prints"], 13, 26, 15, 0],
        "1f43f": [["🐿"], "", "", ["chipmunk"], 13, 27, 15, 0],
        "1f440": [["👀"], "", "󾆐", ["eyes"], 13, 28, 15, 0],
        "1f441": [["👁"], "", "", ["eye"], 13, 29, 15, 0],
        "1f442": [["👂"], "", "󾆑", ["ear"], 13, 30, 15, 0],
        "1f443": [["👃"], "", "󾆒", ["nose"], 13, 36, 15, 0],
        "1f444": [["👄"], "", "󾆓", ["lips"], 14, 1, 15, 0],
        "1f445": [["👅"], "", "󾆔", ["tongue"], 14, 2, 15, 0],
        "1f446": [["👆"], "", "󾮙", ["point_up_2"], 14, 3, 15, 0],
        "1f447": [["👇"], "", "󾮚", ["point_down"], 14, 9, 15, 0],
        "1f448": [["👈"], "", "󾮛", ["point_left"], 14, 15, 15, 0],
        "1f449": [["👉"], "", "󾮜", ["point_right"], 14, 21, 15, 0],
        "1f44a": [["👊"], "", "󾮖", ["facepunch", "punch"], 14, 27, 15, 0],
        "1f44b": [["👋"], "", "󾮝", ["wave"], 14, 33, 15, 0],
        "1f44c": [["👌"], "", "󾮟", ["ok_hand"], 14, 39, 15, 0],
        "1f44d": [["👍"], "", "󾮗", ["+1", "thumbsup"], 15, 4, 15, 0],
        "1f44e": [["👎"], "", "󾮠", ["-1", "thumbsdown"], 15, 10, 15, 0],
        "1f44f": [["👏"], "", "󾮞", ["clap"], 15, 16, 15, 0],
        "1f450": [["👐"], "", "󾮡", ["open_hands"], 15, 22, 15, 0],
        "1f451": [["👑"], "", "󾓑", ["crown"], 15, 28, 15, 0],
        "1f452": [["👒"], "", "󾓔", ["womans_hat"], 15, 29, 15, 0],
        "1f453": [["👓"], "", "󾓎", ["eyeglasses"], 15, 30, 15, 0],
        "1f454": [["👔"], "", "󾓓", ["necktie"], 15, 31, 15, 0],
        "1f455": [["👕"], "", "󾓏", ["shirt", "tshirt"], 15, 32, 15, 0],
        "1f456": [["👖"], "", "󾓐", ["jeans"], 15, 33, 15, 0],
        "1f457": [["👗"], "", "󾓕", ["dress"], 15, 34, 15, 0],
        "1f458": [["👘"], "", "󾓙", ["kimono"], 15, 35, 15, 0],
        "1f459": [["👙"], "", "󾓚", ["bikini"], 15, 36, 15, 0],
        "1f45a": [["👚"], "", "󾓛", ["womans_clothes"], 15, 37, 15, 0],
        "1f45b": [["👛"], "", "󾓜", ["purse"], 15, 38, 15, 0],
        "1f45c": [["👜"], "", "󾓰", ["handbag"], 15, 39, 15, 0],
        "1f45d": [["👝"], "", "󾓱", ["pouch"], 15, 40, 15, 0],
        "1f45e": [["👞"], "", "󾓌", ["mans_shoe", "shoe"], 16, 0, 15, 0],
        "1f45f": [["👟"], "", "󾓍", ["athletic_shoe"], 16, 1, 15, 0],
        "1f460": [["👠"], "", "󾓖", ["high_heel"], 16, 2, 15, 0],
        "1f461": [["👡"], "", "󾓗", ["sandal"], 16, 3, 15, 0],
        "1f462": [["👢"], "", "󾓘", ["boot"], 16, 4, 15, 0],
        "1f463": [["👣"], "", "󾕓", ["footprints"], 16, 5, 15, 0],
        "1f464": [["👤"], "", "󾆚", ["bust_in_silhouette"], 16, 6, 15, 0],
        "1f465": [["👥"], "", "", ["busts_in_silhouette"], 16, 7, 15, 0],
        "1f466": [["👦"], "", "󾆛", ["boy"], 16, 8, 15, 0],
        "1f467": [["👧"], "", "󾆜", ["girl"], 16, 14, 15, 0],
        "1f468": [["👨"], "", "󾆝", ["man"], 16, 20, 15, 0],
        "1f469": [["👩"], "", "󾆞", ["woman"], 16, 26, 15, 0],
        "1f46a": [["👨‍👩‍👦", "👪"], "", "󾆟", ["family", "man-woman-boy"], 16, 32, 15, 0],
        "1f46b": [["👫"], "", "󾆠", ["couple", "man_and_woman_holding_hands"], 16, 33, 15, 0],
        "1f46c": [["👬"], "", "", ["two_men_holding_hands"], 16, 34, 15, 0],
        "1f46d": [["👭"], "", "", ["two_women_holding_hands"], 16, 35, 15, 0],
        "1f46e": [["👮"], "", "󾆡", ["cop"], 16, 36, 15, 0],
        "1f46f": [["👯"], "", "󾆢", ["dancers"], 17, 1, 15, 0],
        "1f470": [["👰"], "", "󾆣", ["bride_with_veil"], 17, 2, 15, 0],
        "1f471": [["👱"], "", "󾆤", ["person_with_blond_hair"], 17, 8, 15, 0],
        "1f472": [["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 17, 14, 15, 0],
        "1f473": [["👳"], "", "󾆦", ["man_with_turban"], 17, 20, 15, 0],
        "1f474": [["👴"], "", "󾆧", ["older_man"], 17, 26, 15, 0],
        "1f475": [["👵"], "", "󾆨", ["older_woman"], 17, 32, 15, 0],
        "1f476": [["👶"], "", "󾆩", ["baby"], 17, 38, 15, 0],
        "1f477": [["👷"], "", "󾆪", ["construction_worker"], 18, 3, 15, 0],
        "1f478": [["👸"], "", "󾆫", ["princess"], 18, 9, 15, 0],
        "1f479": [["👹"], "", "󾆬", ["japanese_ogre"], 18, 15, 15, 0],
        "1f47a": [["👺"], "", "󾆭", ["japanese_goblin"], 18, 16, 15, 0],
        "1f47b": [["👻"], "", "󾆮", ["ghost"], 18, 17, 15, 0],
        "1f47c": [["👼"], "", "󾆯", ["angel"], 18, 18, 15, 0],
        "1f47d": [["👽"], "", "󾆰", ["alien"], 18, 24, 15, 0],
        "1f47e": [["👾"], "", "󾆱", ["space_invader"], 18, 25, 15, 0],
        "1f47f": [["👿"], "", "󾆲", ["imp"], 18, 26, 15, 0],
        "1f480": [["💀"], "", "󾆳", ["skull"], 18, 27, 15, 0],
        "1f481": [["💁"], "", "󾆴", ["information_desk_person"], 18, 28, 15, 0],
        "1f482": [["💂"], "", "󾆵", ["guardsman"], 18, 34, 15, 0],
        "1f483": [["💃"], "", "󾆶", ["dancer"], 18, 40, 15, 0],
        "1f484": [["💄"], "", "󾆕", ["lipstick"], 19, 5, 15, 0],
        "1f485": [["💅"], "", "󾆖", ["nail_care"], 19, 6, 15, 0],
        "1f486": [["💆"], "", "󾆗", ["massage"], 19, 12, 15, 0],
        "1f487": [["💇"], "", "󾆘", ["haircut"], 19, 18, 15, 0],
        "1f488": [["💈"], "", "󾆙", ["barber"], 19, 24, 15, 0],
        "1f489": [["💉"], "", "󾔉", ["syringe"], 19, 25, 15, 0],
        "1f48a": [["💊"], "", "󾔊", ["pill"], 19, 26, 15, 0],
        "1f48b": [["💋"], "", "󾠣", ["kiss"], 19, 27, 15, 0],
        "1f48c": [["💌"], "", "󾠤", ["love_letter"], 19, 28, 15, 0],
        "1f48d": [["💍"], "", "󾠥", ["ring"], 19, 29, 15, 0],
        "1f48e": [["💎"], "", "󾠦", ["gem"], 19, 30, 15, 0],
        "1f48f": [["💏"], "", "󾠧", ["couplekiss"], 19, 31, 15, 0],
        "1f490": [["💐"], "", "󾠨", ["bouquet"], 19, 32, 15, 0],
        "1f491": [["💑"], "", "󾠩", ["couple_with_heart"], 19, 33, 15, 0],
        "1f492": [["💒"], "", "󾠪", ["wedding"], 19, 34, 15, 0],
        "1f493": [["💓"], "", "󾬍", ["heartbeat"], 19, 35, 15, 0],
        "1f494": [["💔"], "", "󾬎", ["broken_heart"], 19, 36, 15, 0, "</3"],
        "1f495": [["💕"], "", "󾬏", ["two_hearts"], 19, 37, 15, 0],
        "1f496": [["💖"], "", "󾬐", ["sparkling_heart"], 19, 38, 15, 0],
        "1f497": [["💗"], "", "󾬑", ["heartpulse"], 19, 39, 15, 0],
        "1f498": [["💘"], "", "󾬒", ["cupid"], 19, 40, 15, 0],
        "1f499": [["💙"], "", "󾬓", ["blue_heart"], 20, 0, 15, 0, "<3"],
        "1f49a": [["💚"], "", "󾬔", ["green_heart"], 20, 1, 15, 0, "<3"],
        "1f49b": [["💛"], "", "󾬕", ["yellow_heart"], 20, 2, 15, 0, "<3"],
        "1f49c": [["💜"], "", "󾬖", ["purple_heart"], 20, 3, 15, 0, "<3"],
        "1f49d": [["💝"], "", "󾬗", ["gift_heart"], 20, 4, 15, 0],
        "1f49e": [["💞"], "", "󾬘", ["revolving_hearts"], 20, 5, 15, 0],
        "1f49f": [["💟"], "", "󾬙", ["heart_decoration"], 20, 6, 15, 0],
        "1f4a0": [["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 20, 7, 15, 0],
        "1f4a1": [["💡"], "", "󾭖", ["bulb"], 20, 8, 15, 0],
        "1f4a2": [["💢"], "", "󾭗", ["anger"], 20, 9, 15, 0],
        "1f4a3": [["💣"], "", "󾭘", ["bomb"], 20, 10, 15, 0],
        "1f4a4": [["💤"], "", "󾭙", ["zzz"], 20, 11, 15, 0],
        "1f4a5": [["💥"], "", "󾭚", ["boom", "collision"], 20, 12, 15, 0],
        "1f4a6": [["💦"], "", "󾭛", ["sweat_drops"], 20, 13, 15, 0],
        "1f4a7": [["💧"], "", "󾭜", ["droplet"], 20, 14, 15, 0],
        "1f4a8": [["💨"], "", "󾭝", ["dash"], 20, 15, 15, 0],
        "1f4a9": [["💩"], "", "󾓴", ["hankey", "poop", "shit"], 20, 16, 15, 0],
        "1f4aa": [["💪"], "", "󾭞", ["muscle"], 20, 17, 15, 0],
        "1f4ab": [["💫"], "", "󾭟", ["dizzy"], 20, 23, 15, 0],
        "1f4ac": [["💬"], "", "󾔲", ["speech_balloon"], 20, 24, 15, 0],
        "1f4ad": [["💭"], "", "", ["thought_balloon"], 20, 25, 15, 0],
        "1f4ae": [["💮"], "", "󾭺", ["white_flower"], 20, 26, 15, 0],
        "1f4af": [["💯"], "", "󾭻", ["100"], 20, 27, 15, 0],
        "1f4b0": [["💰"], "", "󾓝", ["moneybag"], 20, 28, 15, 0],
        "1f4b1": [["💱"], "", "󾓞", ["currency_exchange"], 20, 29, 15, 0],
        "1f4b2": [["💲"], "", "󾓠", ["heavy_dollar_sign"], 20, 30, 15, 0],
        "1f4b3": [["💳"], "", "󾓡", ["credit_card"], 20, 31, 15, 0],
        "1f4b4": [["💴"], "", "󾓢", ["yen"], 20, 32, 15, 0],
        "1f4b5": [["💵"], "", "󾓣", ["dollar"], 20, 33, 15, 0],
        "1f4b6": [["💶"], "", "", ["euro"], 20, 34, 15, 0],
        "1f4b7": [["💷"], "", "", ["pound"], 20, 35, 15, 0],
        "1f4b8": [["💸"], "", "󾓤", ["money_with_wings"], 20, 36, 15, 0],
        "1f4b9": [["💹"], "", "󾓟", ["chart"], 20, 37, 15, 0],
        "1f4ba": [["💺"], "", "󾔷", ["seat"], 20, 38, 15, 0],
        "1f4bb": [["💻"], "", "󾔸", ["computer"], 20, 39, 15, 0],
        "1f4bc": [["💼"], "", "󾔻", ["briefcase"], 20, 40, 15, 0],
        "1f4bd": [["💽"], "", "󾔼", ["minidisc"], 21, 0, 15, 0],
        "1f4be": [["💾"], "", "󾔽", ["floppy_disk"], 21, 1, 15, 0],
        "1f4bf": [["💿"], "", "󾠝", ["cd"], 21, 2, 15, 0],
        "1f4c0": [["📀"], "", "󾠞", ["dvd"], 21, 3, 15, 0],
        "1f4c1": [["📁"], "", "󾕃", ["file_folder"], 21, 4, 15, 0],
        "1f4c2": [["📂"], "", "󾕄", ["open_file_folder"], 21, 5, 15, 0],
        "1f4c3": [["📃"], "", "󾕀", ["page_with_curl"], 21, 6, 15, 0],
        "1f4c4": [["📄"], "", "󾕁", ["page_facing_up"], 21, 7, 15, 0],
        "1f4c5": [["📅"], "", "󾕂", ["date"], 21, 8, 15, 0],
        "1f4c6": [["📆"], "", "󾕉", ["calendar"], 21, 9, 15, 0],
        "1f4c7": [["📇"], "", "󾕍", ["card_index"], 21, 10, 15, 0],
        "1f4c8": [["📈"], "", "󾕋", ["chart_with_upwards_trend"], 21, 11, 15, 0],
        "1f4c9": [["📉"], "", "󾕌", ["chart_with_downwards_trend"], 21, 12, 15, 0],
        "1f4ca": [["📊"], "", "󾕊", ["bar_chart"], 21, 13, 15, 0],
        "1f4cb": [["📋"], "", "󾕈", ["clipboard"], 21, 14, 15, 0],
        "1f4cc": [["📌"], "", "󾕎", ["pushpin"], 21, 15, 15, 0],
        "1f4cd": [["📍"], "", "󾔿", ["round_pushpin"], 21, 16, 15, 0],
        "1f4ce": [["📎"], "", "󾔺", ["paperclip"], 21, 17, 15, 0],
        "1f4cf": [["📏"], "", "󾕐", ["straight_ruler"], 21, 18, 15, 0],
        "1f4d0": [["📐"], "", "󾕑", ["triangular_ruler"], 21, 19, 15, 0],
        "1f4d1": [["📑"], "", "󾕒", ["bookmark_tabs"], 21, 20, 15, 0],
        "1f4d2": [["📒"], "", "󾕏", ["ledger"], 21, 21, 15, 0],
        "1f4d3": [["📓"], "", "󾕅", ["notebook"], 21, 22, 15, 0],
        "1f4d4": [["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 21, 23, 15, 0],
        "1f4d5": [["📕"], "", "󾔂", ["closed_book"], 21, 24, 15, 0],
        "1f4d6": [["📖"], "", "󾕆", ["book", "open_book"], 21, 25, 15, 0],
        "1f4d7": [["📗"], "", "󾓿", ["green_book"], 21, 26, 15, 0],
        "1f4d8": [["📘"], "", "󾔀", ["blue_book"], 21, 27, 15, 0],
        "1f4d9": [["📙"], "", "󾔁", ["orange_book"], 21, 28, 15, 0],
        "1f4da": [["📚"], "", "󾔃", ["books"], 21, 29, 15, 0],
        "1f4db": [["📛"], "", "󾔄", ["name_badge"], 21, 30, 15, 0],
        "1f4dc": [["📜"], "", "󾓽", ["scroll"], 21, 31, 15, 0],
        "1f4dd": [["📝"], "", "󾔧", ["memo", "pencil"], 21, 32, 15, 0],
        "1f4de": [["📞"], "", "󾔤", ["telephone_receiver"], 21, 33, 15, 0],
        "1f4df": [["📟"], "", "󾔢", ["pager"], 21, 34, 15, 0],
        "1f4e0": [["📠"], "", "󾔨", ["fax"], 21, 35, 15, 0],
        "1f4e1": [["📡"], "", "󾔱", ["satellite_antenna"], 21, 36, 15, 0],
        "1f4e2": [["📢"], "", "󾔯", ["loudspeaker"], 21, 37, 15, 0],
        "1f4e3": [["📣"], "", "󾔰", ["mega"], 21, 38, 15, 0],
        "1f4e4": [["📤"], "", "󾔳", ["outbox_tray"], 21, 39, 15, 0],
        "1f4e5": [["📥"], "", "󾔴", ["inbox_tray"], 21, 40, 15, 0],
        "1f4e6": [["📦"], "", "󾔵", ["package"], 22, 0, 15, 0],
        "1f4e7": [["📧"], "", "󾮒", ["e-mail"], 22, 1, 15, 0],
        "1f4e8": [["📨"], "", "󾔪", ["incoming_envelope"], 22, 2, 15, 0],
        "1f4e9": [["📩"], "", "󾔫", ["envelope_with_arrow"], 22, 3, 15, 0],
        "1f4ea": [["📪"], "", "󾔬", ["mailbox_closed"], 22, 4, 15, 0],
        "1f4eb": [["📫"], "", "󾔭", ["mailbox"], 22, 5, 15, 0],
        "1f4ec": [["📬"], "", "", ["mailbox_with_mail"], 22, 6, 15, 0],
        "1f4ed": [["📭"], "", "", ["mailbox_with_no_mail"], 22, 7, 15, 0],
        "1f4ee": [["📮"], "", "󾔮", ["postbox"], 22, 8, 15, 0],
        "1f4ef": [["📯"], "", "", ["postal_horn"], 22, 9, 15, 0],
        "1f4f0": [["📰"], "", "󾠢", ["newspaper"], 22, 10, 15, 0],
        "1f4f1": [["📱"], "", "󾔥", ["iphone"], 22, 11, 15, 0],
        "1f4f2": [["📲"], "", "󾔦", ["calling"], 22, 12, 15, 0],
        "1f4f3": [["📳"], "", "󾠹", ["vibration_mode"], 22, 13, 15, 0],
        "1f4f4": [["📴"], "", "󾠺", ["mobile_phone_off"], 22, 14, 15, 0],
        "1f4f5": [["📵"], "", "", ["no_mobile_phones"], 22, 15, 15, 0],
        "1f4f6": [["📶"], "", "󾠸", ["signal_strength"], 22, 16, 15, 0],
        "1f4f7": [["📷"], "", "󾓯", ["camera"], 22, 17, 15, 0],
        "1f4f8": [["📸"], "", "", ["camera_with_flash"], 22, 18, 15, 0],
        "1f4f9": [["📹"], "", "󾓹", ["video_camera"], 22, 19, 15, 0],
        "1f4fa": [["📺"], "", "󾠜", ["tv"], 22, 20, 15, 0],
        "1f4fb": [["📻"], "", "󾠟", ["radio"], 22, 21, 15, 0],
        "1f4fc": [["📼"], "", "󾠠", ["vhs"], 22, 22, 15, 0],
        "1f4fd": [["📽"], "", "", ["film_projector"], 22, 23, 15, 0],
        "1f4ff": [["📿"], "", "", ["prayer_beads"], 22, 24, 15, 0],
        "1f500": [["🔀"], "", "", ["twisted_rightwards_arrows"], 22, 25, 15, 0],
        "1f501": [["🔁"], "", "", ["repeat"], 22, 26, 15, 0],
        "1f502": [["🔂"], "", "", ["repeat_one"], 22, 27, 15, 0],
        "1f503": [["🔃"], "", "󾮑", ["arrows_clockwise"], 22, 28, 15, 0],
        "1f504": [["🔄"], "", "", ["arrows_counterclockwise"], 22, 29, 15, 0],
        "1f505": [["🔅"], "", "", ["low_brightness"], 22, 30, 15, 0],
        "1f506": [["🔆"], "", "", ["high_brightness"], 22, 31, 15, 0],
        "1f507": [["🔇"], "", "", ["mute"], 22, 32, 15, 0],
        "1f508": [["🔈"], "", "", ["speaker"], 22, 33, 15, 0],
        "1f509": [["🔉"], "", "", ["sound"], 22, 34, 15, 0],
        "1f50a": [["🔊"], "", "󾠡", ["loud_sound"], 22, 35, 15, 0],
        "1f50b": [["🔋"], "", "󾓼", ["battery"], 22, 36, 15, 0],
        "1f50c": [["🔌"], "", "󾓾", ["electric_plug"], 22, 37, 15, 0],
        "1f50d": [["🔍"], "", "󾮅", ["mag"], 22, 38, 15, 0],
        "1f50e": [["🔎"], "", "󾮍", ["mag_right"], 22, 39, 15, 0],
        "1f50f": [["🔏"], "", "󾮐", ["lock_with_ink_pen"], 22, 40, 15, 0],
        "1f510": [["🔐"], "", "󾮊", ["closed_lock_with_key"], 23, 0, 15, 0],
        "1f511": [["🔑"], "", "󾮂", ["key"], 23, 1, 15, 0],
        "1f512": [["🔒"], "", "󾮆", ["lock"], 23, 2, 15, 0],
        "1f513": [["🔓"], "", "󾮇", ["unlock"], 23, 3, 15, 0],
        "1f514": [["🔔"], "", "󾓲", ["bell"], 23, 4, 15, 0],
        "1f515": [["🔕"], "", "", ["no_bell"], 23, 5, 15, 0],
        "1f516": [["🔖"], "", "󾮏", ["bookmark"], 23, 6, 15, 0],
        "1f517": [["🔗"], "", "󾭋", ["link"], 23, 7, 15, 0],
        "1f518": [["🔘"], "", "󾮌", ["radio_button"], 23, 8, 15, 0],
        "1f519": [["🔙"], "", "󾮎", ["back"], 23, 9, 15, 0],
        "1f51a": [["🔚"], "", "󾀚", ["end"], 23, 10, 15, 0],
        "1f51b": [["🔛"], "", "󾀙", ["on"], 23, 11, 15, 0],
        "1f51c": [["🔜"], "", "󾀘", ["soon"], 23, 12, 15, 0],
        "1f51d": [["🔝"], "", "󾭂", ["top"], 23, 13, 15, 0],
        "1f51e": [["🔞"], "", "󾬥", ["underage"], 23, 14, 15, 0],
        "1f51f": [["🔟"], "", "󾠻", ["keycap_ten"], 23, 15, 15, 0],
        "1f520": [["🔠"], "", "󾭼", ["capital_abcd"], 23, 16, 15, 0],
        "1f521": [["🔡"], "", "󾭽", ["abcd"], 23, 17, 15, 0],
        "1f522": [["🔢"], "", "󾭾", ["1234"], 23, 18, 15, 0],
        "1f523": [["🔣"], "", "󾭿", ["symbols"], 23, 19, 15, 0],
        "1f524": [["🔤"], "", "󾮀", ["abc"], 23, 20, 15, 0],
        "1f525": [["🔥"], "", "󾓶", ["fire"], 23, 21, 15, 0],
        "1f526": [["🔦"], "", "󾓻", ["flashlight"], 23, 22, 15, 0],
        "1f527": [["🔧"], "", "󾓉", ["wrench"], 23, 23, 15, 0],
        "1f528": [["🔨"], "", "󾓊", ["hammer"], 23, 24, 15, 0],
        "1f529": [["🔩"], "", "󾓋", ["nut_and_bolt"], 23, 25, 15, 0],
        "1f52a": [["🔪"], "", "󾓺", ["hocho", "knife"], 23, 26, 15, 0],
        "1f52b": [["🔫"], "", "󾓵", ["gun"], 23, 27, 15, 0],
        "1f52c": [["🔬"], "", "", ["microscope"], 23, 28, 15, 0],
        "1f52d": [["🔭"], "", "", ["telescope"], 23, 29, 15, 0],
        "1f52e": [["🔮"], "", "󾓷", ["crystal_ball"], 23, 30, 15, 0],
        "1f52f": [["🔯"], "", "󾓸", ["six_pointed_star"], 23, 31, 15, 0],
        "1f530": [["🔰"], "", "󾁄", ["beginner"], 23, 32, 15, 0],
        "1f531": [["🔱"], "", "󾓒", ["trident"], 23, 33, 15, 0],
        "1f532": [["🔲"], "", "󾭤", ["black_square_button"], 23, 34, 15, 0],
        "1f533": [["🔳"], "", "󾭧", ["white_square_button"], 23, 35, 15, 0],
        "1f534": [["🔴"], "", "󾭣", ["red_circle"], 23, 36, 15, 0],
        "1f535": [["🔵"], "", "󾭤", ["large_blue_circle"], 23, 37, 15, 0],
        "1f536": [["🔶"], "", "󾭳", ["large_orange_diamond"], 23, 38, 15, 0],
        "1f537": [["🔷"], "", "󾭴", ["large_blue_diamond"], 23, 39, 15, 0],
        "1f538": [["🔸"], "", "󾭵", ["small_orange_diamond"], 23, 40, 15, 0],
        "1f539": [["🔹"], "", "󾭶", ["small_blue_diamond"], 24, 0, 15, 0],
        "1f53a": [["🔺"], "", "󾭸", ["small_red_triangle"], 24, 1, 15, 0],
        "1f53b": [["🔻"], "", "󾭹", ["small_red_triangle_down"], 24, 2, 15, 0],
        "1f53c": [["🔼"], "", "󾬁", ["arrow_up_small"], 24, 3, 15, 0],
        "1f53d": [["🔽"], "", "󾬀", ["arrow_down_small"], 24, 4, 15, 0],
        "1f549": [["🕉"], "", "", ["om_symbol"], 24, 5, 15, 0],
        "1f54a": [["🕊"], "", "", ["dove_of_peace"], 24, 6, 15, 0],
        "1f54b": [["🕋"], "", "", ["kaaba"], 24, 7, 15, 0],
        "1f54c": [["🕌"], "", "", ["mosque"], 24, 8, 15, 0],
        "1f54d": [["🕍"], "", "", ["synagogue"], 24, 9, 15, 0],
        "1f54e": [["🕎"], "", "", ["menorah_with_nine_branches"], 24, 10, 15, 0],
        "1f550": [["🕐"], "", "󾀞", ["clock1"], 24, 11, 15, 0],
        "1f551": [["🕑"], "", "󾀟", ["clock2"], 24, 12, 15, 0],
        "1f552": [["🕒"], "", "󾀠", ["clock3"], 24, 13, 15, 0],
        "1f553": [["🕓"], "", "󾀡", ["clock4"], 24, 14, 15, 0],
        "1f554": [["🕔"], "", "󾀢", ["clock5"], 24, 15, 15, 0],
        "1f555": [["🕕"], "", "󾀣", ["clock6"], 24, 16, 15, 0],
        "1f556": [["🕖"], "", "󾀤", ["clock7"], 24, 17, 15, 0],
        "1f557": [["🕗"], "", "󾀥", ["clock8"], 24, 18, 15, 0],
        "1f558": [["🕘"], "", "󾀦", ["clock9"], 24, 19, 15, 0],
        "1f559": [["🕙"], "", "󾀧", ["clock10"], 24, 20, 15, 0],
        "1f55a": [["🕚"], "", "󾀨", ["clock11"], 24, 21, 15, 0],
        "1f55b": [["🕛"], "", "󾀩", ["clock12"], 24, 22, 15, 0],
        "1f55c": [["🕜"], "", "", ["clock130"], 24, 23, 15, 0],
        "1f55d": [["🕝"], "", "", ["clock230"], 24, 24, 15, 0],
        "1f55e": [["🕞"], "", "", ["clock330"], 24, 25, 15, 0],
        "1f55f": [["🕟"], "", "", ["clock430"], 24, 26, 15, 0],
        "1f560": [["🕠"], "", "", ["clock530"], 24, 27, 15, 0],
        "1f561": [["🕡"], "", "", ["clock630"], 24, 28, 15, 0],
        "1f562": [["🕢"], "", "", ["clock730"], 24, 29, 15, 0],
        "1f563": [["🕣"], "", "", ["clock830"], 24, 30, 15, 0],
        "1f564": [["🕤"], "", "", ["clock930"], 24, 31, 15, 0],
        "1f565": [["🕥"], "", "", ["clock1030"], 24, 32, 15, 0],
        "1f566": [["🕦"], "", "", ["clock1130"], 24, 33, 15, 0],
        "1f567": [["🕧"], "", "", ["clock1230"], 24, 34, 15, 0],
        "1f56f": [["🕯"], "", "", ["candle"], 24, 35, 15, 0],
        "1f570": [["🕰"], "", "", ["mantelpiece_clock"], 24, 36, 15, 0],
        "1f573": [["🕳"], "", "", ["hole"], 24, 37, 15, 0],
        "1f574": [["🕴"], "", "", ["man_in_business_suit_levitating"], 24, 38, 15, 0],
        "1f575": [["🕵"], "", "", ["sleuth_or_spy"], 24, 39, 15, 0],
        "1f576": [["🕶"], "", "", ["dark_sunglasses"], 25, 4, 15, 0],
        "1f577": [["🕷"], "", "", ["spider"], 25, 5, 15, 0],
        "1f578": [["🕸"], "", "", ["spider_web"], 25, 6, 15, 0],
        "1f579": [["🕹"], "", "", ["joystick"], 25, 7, 15, 0],
        "1f587": [["🖇"], "", "", ["linked_paperclips"], 25, 8, 15, 0],
        "1f58a": [["🖊"], "", "", ["lower_left_ballpoint_pen"], 25, 9, 15, 0],
        "1f58b": [["🖋"], "", "", ["lower_left_fountain_pen"], 25, 10, 15, 0],
        "1f58c": [["🖌"], "", "", ["lower_left_paintbrush"], 25, 11, 15, 0],
        "1f58d": [["🖍"], "", "", ["lower_left_crayon"], 25, 12, 15, 0],
        "1f590": [["🖐"], "", "", ["raised_hand_with_fingers_splayed"], 25, 13, 15, 0],
        "1f595": [["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 25, 19, 15, 0],
        "1f596": [["🖖"], "", "", ["spock-hand"], 25, 25, 15, 0],
        "1f5a5": [["🖥"], "", "", ["desktop_computer"], 25, 31, 15, 0],
        "1f5a8": [["🖨"], "", "", ["printer"], 25, 32, 15, 0],
        "1f5b1": [["🖱"], "", "", ["three_button_mouse"], 25, 33, 15, 0],
        "1f5b2": [["🖲"], "", "", ["trackball"], 25, 34, 15, 0],
        "1f5bc": [["🖼"], "", "", ["frame_with_picture"], 25, 35, 15, 0],
        "1f5c2": [["🗂"], "", "", ["card_index_dividers"], 25, 36, 15, 0],
        "1f5c3": [["🗃"], "", "", ["card_file_box"], 25, 37, 15, 0],
        "1f5c4": [["🗄"], "", "", ["file_cabinet"], 25, 38, 15, 0],
        "1f5d1": [["🗑"], "", "", ["wastebasket"], 25, 39, 15, 0],
        "1f5d2": [["🗒"], "", "", ["spiral_note_pad"], 25, 40, 15, 0],
        "1f5d3": [["🗓"], "", "", ["spiral_calendar_pad"], 26, 0, 15, 0],
        "1f5dc": [["🗜"], "", "", ["compression"], 26, 1, 15, 0],
        "1f5dd": [["🗝"], "", "", ["old_key"], 26, 2, 15, 0],
        "1f5de": [["🗞"], "", "", ["rolled_up_newspaper"], 26, 3, 15, 0],
        "1f5e1": [["🗡"], "", "", ["dagger_knife"], 26, 4, 15, 0],
        "1f5e3": [["🗣"], "", "", ["speaking_head_in_silhouette"], 26, 5, 15, 0],
        "1f5e8": [["🗨"], "", "", ["left_speech_bubble"], 26, 6, 7, 0],
        "1f5ef": [["🗯"], "", "", ["right_anger_bubble"], 26, 7, 15, 0],
        "1f5f3": [["🗳"], "", "", ["ballot_box_with_ballot"], 26, 8, 15, 0],
        "1f5fa": [["🗺"], "", "", ["world_map"], 26, 9, 15, 0],
        "1f5fb": [["🗻"], "", "󾓃", ["mount_fuji"], 26, 10, 15, 0],
        "1f5fc": [["🗼"], "", "󾓄", ["tokyo_tower"], 26, 11, 15, 0],
        "1f5fd": [["🗽"], "", "󾓆", ["statue_of_liberty"], 26, 12, 15, 0],
        "1f5fe": [["🗾"], "", "󾓇", ["japan"], 26, 13, 15, 0],
        "1f5ff": [["🗿"], "", "󾓈", ["moyai"], 26, 14, 15, 0],
        "1f600": [["😀"], "", "", ["grinning"], 26, 15, 15, 0, ":D"],
        "1f601": [["😁"], "", "󾌳", ["grin"], 26, 16, 15, 0],
        "1f602": [["😂"], "", "󾌴", ["joy"], 26, 17, 15, 0],
        "1f603": [["😃"], "", "󾌰", ["smiley"], 26, 18, 15, 0, ":)"],
        "1f604": [["😄"], "", "󾌸", ["smile"], 26, 19, 15, 0, ":)"],
        "1f605": [["😅"], "", "󾌱", ["sweat_smile"], 26, 20, 15, 0],
        "1f606": [["😆"], "", "󾌲", ["laughing", "satisfied"], 26, 21, 15, 0],
        "1f607": [["😇"], "", "", ["innocent"], 26, 22, 15, 0],
        "1f608": [["😈"], "", "", ["smiling_imp"], 26, 23, 15, 0],
        "1f609": [["😉"], "", "󾍇", ["wink"], 26, 24, 15, 0, ";)"],
        "1f60a": [["😊"], "", "󾌵", ["blush"], 26, 25, 15, 0, ":)"],
        "1f60b": [["😋"], "", "󾌫", ["yum"], 26, 26, 15, 0],
        "1f60c": [["😌"], "", "󾌾", ["relieved"], 26, 27, 15, 0],
        "1f60d": [["😍"], "", "󾌧", ["heart_eyes"], 26, 28, 15, 0],
        "1f60e": [["😎"], "", "", ["sunglasses"], 26, 29, 15, 0],
        "1f60f": [["😏"], "", "󾍃", ["smirk"], 26, 30, 15, 0],
        "1f610": [["😐"], "", "", ["neutral_face"], 26, 31, 15, 0],
        "1f611": [["😑"], "", "", ["expressionless"], 26, 32, 15, 0],
        "1f612": [["😒"], "", "󾌦", ["unamused"], 26, 33, 15, 0, ":("],
        "1f613": [["😓"], "", "󾍄", ["sweat"], 26, 34, 15, 0],
        "1f614": [["😔"], "", "󾍀", ["pensive"], 26, 35, 15, 0],
        "1f615": [["😕"], "", "", ["confused"], 26, 36, 15, 0],
        "1f616": [["😖"], "", "󾌿", ["confounded"], 26, 37, 15, 0],
        "1f617": [["😗"], "", "", ["kissing"], 26, 38, 15, 0],
        "1f618": [["😘"], "", "󾌬", ["kissing_heart"], 26, 39, 15, 0],
        "1f619": [["😙"], "", "", ["kissing_smiling_eyes"], 26, 40, 15, 0],
        "1f61a": [["😚"], "", "󾌭", ["kissing_closed_eyes"], 27, 0, 15, 0],
        "1f61b": [["😛"], "", "", ["stuck_out_tongue"], 27, 1, 15, 0, ":p"],
        "1f61c": [["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 27, 2, 15, 0, ";p"],
        "1f61d": [["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 27, 3, 15, 0],
        "1f61e": [["😞"], "", "󾌣", ["disappointed"], 27, 4, 15, 0, ":("],
        "1f61f": [["😟"], "", "", ["worried"], 27, 5, 15, 0],
        "1f620": [["😠"], "", "󾌠", ["angry"], 27, 6, 15, 0],
        "1f621": [["😡"], "", "󾌽", ["rage"], 27, 7, 15, 0],
        "1f622": [["😢"], "", "󾌹", ["cry"], 27, 8, 15, 0, ":'("],
        "1f623": [["😣"], "", "󾌼", ["persevere"], 27, 9, 15, 0],
        "1f624": [["😤"], "", "󾌨", ["triumph"], 27, 10, 15, 0],
        "1f625": [["😥"], "", "󾍅", ["disappointed_relieved"], 27, 11, 15, 0],
        "1f626": [["😦"], "", "", ["frowning"], 27, 12, 15, 0],
        "1f627": [["😧"], "", "", ["anguished"], 27, 13, 15, 0],
        "1f628": [["😨"], "", "󾌻", ["fearful"], 27, 14, 15, 0],
        "1f629": [["😩"], "", "󾌡", ["weary"], 27, 15, 15, 0],
        "1f62a": [["😪"], "", "󾍂", ["sleepy"], 27, 16, 15, 0],
        "1f62b": [["😫"], "", "󾍆", ["tired_face"], 27, 17, 15, 0],
        "1f62c": [["😬"], "", "", ["grimacing"], 27, 18, 15, 0],
        "1f62d": [["😭"], "", "󾌺", ["sob"], 27, 19, 15, 0, ":'("],
        "1f62e": [["😮"], "", "", ["open_mouth"], 27, 20, 15, 0],
        "1f62f": [["😯"], "", "", ["hushed"], 27, 21, 15, 0],
        "1f630": [["😰"], "", "󾌥", ["cold_sweat"], 27, 22, 15, 0],
        "1f631": [["😱"], "", "󾍁", ["scream"], 27, 23, 15, 0],
        "1f632": [["😲"], "", "󾌢", ["astonished"], 27, 24, 15, 0],
        "1f633": [["😳"], "", "󾌯", ["flushed"], 27, 25, 15, 0],
        "1f634": [["😴"], "", "", ["sleeping"], 27, 26, 15, 0],
        "1f635": [["😵"], "", "󾌤", ["dizzy_face"], 27, 27, 15, 0],
        "1f636": [["😶"], "", "", ["no_mouth"], 27, 28, 15, 0],
        "1f637": [["😷"], "", "󾌮", ["mask"], 27, 29, 15, 0],
        "1f638": [["😸"], "", "󾍉", ["smile_cat"], 27, 30, 15, 0],
        "1f639": [["😹"], "", "󾍊", ["joy_cat"], 27, 31, 15, 0],
        "1f63a": [["😺"], "", "󾍈", ["smiley_cat"], 27, 32, 15, 0],
        "1f63b": [["😻"], "", "󾍌", ["heart_eyes_cat"], 27, 33, 15, 0],
        "1f63c": [["😼"], "", "󾍏", ["smirk_cat"], 27, 34, 15, 0],
        "1f63d": [["😽"], "", "󾍋", ["kissing_cat"], 27, 35, 15, 0],
        "1f63e": [["😾"], "", "󾍎", ["pouting_cat"], 27, 36, 15, 0],
        "1f63f": [["😿"], "", "󾍍", ["crying_cat_face"], 27, 37, 15, 0],
        "1f640": [["🙀"], "", "󾍐", ["scream_cat"], 27, 38, 15, 0],
        "1f641": [["🙁"], "", "", ["slightly_frowning_face"], 27, 39, 15, 0],
        "1f642": [["🙂"], "", "", ["slightly_smiling_face"], 27, 40, 15, 0],
        "1f643": [["🙃"], "", "", ["upside_down_face"], 28, 0, 15, 0],
        "1f644": [["🙄"], "", "", ["face_with_rolling_eyes"], 28, 1, 15, 0],
        "1f645": [["🙅"], "", "󾍑", ["no_good"], 28, 2, 15, 0],
        "1f646": [["🙆"], "", "󾍒", ["ok_woman"], 28, 8, 15, 0],
        "1f647": [["🙇"], "", "󾍓", ["bow"], 28, 14, 15, 0],
        "1f648": [["🙈"], "", "󾍔", ["see_no_evil"], 28, 20, 15, 0],
        "1f649": [["🙉"], "", "󾍖", ["hear_no_evil"], 28, 21, 15, 0],
        "1f64a": [["🙊"], "", "󾍕", ["speak_no_evil"], 28, 22, 15, 0],
        "1f64b": [["🙋"], "", "󾍗", ["raising_hand"], 28, 23, 15, 0],
        "1f64c": [["🙌"], "", "󾍘", ["raised_hands"], 28, 29, 15, 0],
        "1f64d": [["🙍"], "", "󾍙", ["person_frowning"], 28, 35, 15, 0],
        "1f64e": [["🙎"], "", "󾍚", ["person_with_pouting_face"], 29, 0, 15, 0],
        "1f64f": [["🙏"], "", "󾍛", ["pray"], 29, 6, 15, 0],
        "1f680": [["🚀"], "", "󾟭", ["rocket"], 29, 12, 15, 0],
        "1f681": [["🚁"], "", "", ["helicopter"], 29, 13, 15, 0],
        "1f682": [["🚂"], "", "", ["steam_locomotive"], 29, 14, 15, 0],
        "1f683": [["🚃"], "", "󾟟", ["railway_car"], 29, 15, 15, 0],
        "1f684": [["🚄"], "", "󾟢", ["bullettrain_side"], 29, 16, 15, 0],
        "1f685": [["🚅"], "", "󾟣", ["bullettrain_front"], 29, 17, 15, 0],
        "1f686": [["🚆"], "", "", ["train2"], 29, 18, 15, 0],
        "1f687": [["🚇"], "", "󾟠", ["metro"], 29, 19, 15, 0],
        "1f688": [["🚈"], "", "", ["light_rail"], 29, 20, 15, 0],
        "1f689": [["🚉"], "", "󾟬", ["station"], 29, 21, 15, 0],
        "1f68a": [["🚊"], "", "", ["tram"], 29, 22, 15, 0],
        "1f68b": [["🚋"], "", "", ["train"], 29, 23, 15, 0],
        "1f68c": [["🚌"], "", "󾟦", ["bus"], 29, 24, 15, 0],
        "1f68d": [["🚍"], "", "", ["oncoming_bus"], 29, 25, 15, 0],
        "1f68e": [["🚎"], "", "", ["trolleybus"], 29, 26, 15, 0],
        "1f68f": [["🚏"], "", "󾟧", ["busstop"], 29, 27, 15, 0],
        "1f690": [["🚐"], "", "", ["minibus"], 29, 28, 15, 0],
        "1f691": [["🚑"], "", "󾟳", ["ambulance"], 29, 29, 15, 0],
        "1f692": [["🚒"], "", "󾟲", ["fire_engine"], 29, 30, 15, 0],
        "1f693": [["🚓"], "", "󾟴", ["police_car"], 29, 31, 15, 0],
        "1f694": [["🚔"], "", "", ["oncoming_police_car"], 29, 32, 15, 0],
        "1f695": [["🚕"], "", "󾟯", ["taxi"], 29, 33, 15, 0],
        "1f696": [["🚖"], "", "", ["oncoming_taxi"], 29, 34, 15, 0],
        "1f697": [["🚗"], "", "󾟤", ["car", "red_car"], 29, 35, 15, 0],
        "1f698": [["🚘"], "", "", ["oncoming_automobile"], 29, 36, 15, 0],
        "1f699": [["🚙"], "", "󾟥", ["blue_car"], 29, 37, 15, 0],
        "1f69a": [["🚚"], "", "󾟱", ["truck"], 29, 38, 15, 0],
        "1f69b": [["🚛"], "", "", ["articulated_lorry"], 29, 39, 15, 0],
        "1f69c": [["🚜"], "", "", ["tractor"], 29, 40, 15, 0],
        "1f69d": [["🚝"], "", "", ["monorail"], 30, 0, 15, 0],
        "1f69e": [["🚞"], "", "", ["mountain_railway"], 30, 1, 15, 0],
        "1f69f": [["🚟"], "", "", ["suspension_railway"], 30, 2, 15, 0],
        "1f6a0": [["🚠"], "", "", ["mountain_cableway"], 30, 3, 15, 0],
        "1f6a1": [["🚡"], "", "", ["aerial_tramway"], 30, 4, 15, 0],
        "1f6a2": [["🚢"], "", "󾟨", ["ship"], 30, 5, 15, 0],
        "1f6a3": [["🚣"], "", "", ["rowboat"], 30, 6, 15, 0],
        "1f6a4": [["🚤"], "", "󾟮", ["speedboat"], 30, 12, 15, 0],
        "1f6a5": [["🚥"], "", "󾟷", ["traffic_light"], 30, 13, 15, 0],
        "1f6a6": [["🚦"], "", "", ["vertical_traffic_light"], 30, 14, 15, 0],
        "1f6a7": [["🚧"], "", "󾟸", ["construction"], 30, 15, 15, 0],
        "1f6a8": [["🚨"], "", "󾟹", ["rotating_light"], 30, 16, 15, 0],
        "1f6a9": [["🚩"], "", "󾬢", ["triangular_flag_on_post"], 30, 17, 15, 0],
        "1f6aa": [["🚪"], "", "󾓳", ["door"], 30, 18, 15, 0],
        "1f6ab": [["🚫"], "", "󾭈", ["no_entry_sign"], 30, 19, 15, 0],
        "1f6ac": [["🚬"], "", "󾬞", ["smoking"], 30, 20, 15, 0],
        "1f6ad": [["🚭"], "", "󾬟", ["no_smoking"], 30, 21, 15, 0],
        "1f6ae": [["🚮"], "", "", ["put_litter_in_its_place"], 30, 22, 15, 0],
        "1f6af": [["🚯"], "", "", ["do_not_litter"], 30, 23, 15, 0],
        "1f6b0": [["🚰"], "", "", ["potable_water"], 30, 24, 15, 0],
        "1f6b1": [["🚱"], "", "", ["non-potable_water"], 30, 25, 15, 0],
        "1f6b2": [["🚲"], "", "󾟫", ["bike"], 30, 26, 15, 0],
        "1f6b3": [["🚳"], "", "", ["no_bicycles"], 30, 27, 15, 0],
        "1f6b4": [["🚴"], "", "", ["bicyclist"], 30, 28, 15, 0],
        "1f6b5": [["🚵"], "", "", ["mountain_bicyclist"], 30, 34, 15, 0],
        "1f6b6": [["🚶"], "", "󾟰", ["walking"], 30, 40, 15, 0],
        "1f6b7": [["🚷"], "", "", ["no_pedestrians"], 31, 5, 15, 0],
        "1f6b8": [["🚸"], "", "", ["children_crossing"], 31, 6, 15, 0],
        "1f6b9": [["🚹"], "", "󾬳", ["mens"], 31, 7, 15, 0],
        "1f6ba": [["🚺"], "", "󾬴", ["womens"], 31, 8, 15, 0],
        "1f6bb": [["🚻"], "", "󾔆", ["restroom"], 31, 9, 15, 0],
        "1f6bc": [["🚼"], "", "󾬵", ["baby_symbol"], 31, 10, 15, 0],
        "1f6bd": [["🚽"], "", "󾔇", ["toilet"], 31, 11, 15, 0],
        "1f6be": [["🚾"], "", "󾔈", ["wc"], 31, 12, 15, 0],
        "1f6bf": [["🚿"], "", "", ["shower"], 31, 13, 15, 0],
        "1f6c0": [["🛀"], "", "󾔅", ["bath"], 31, 14, 15, 0],
        "1f6c1": [["🛁"], "", "", ["bathtub"], 31, 20, 15, 0],
        "1f6c2": [["🛂"], "", "", ["passport_control"], 31, 21, 15, 0],
        "1f6c3": [["🛃"], "", "", ["customs"], 31, 22, 15, 0],
        "1f6c4": [["🛄"], "", "", ["baggage_claim"], 31, 23, 15, 0],
        "1f6c5": [["🛅"], "", "", ["left_luggage"], 31, 24, 15, 0],
        "1f6cb": [["🛋"], "", "", ["couch_and_lamp"], 31, 25, 15, 0],
        "1f6cc": [["🛌"], "", "", ["sleeping_accommodation"], 31, 26, 15, 0],
        "1f6cd": [["🛍"], "", "", ["shopping_bags"], 31, 27, 15, 0],
        "1f6ce": [["🛎"], "", "", ["bellhop_bell"], 31, 28, 15, 0],
        "1f6cf": [["🛏"], "", "", ["bed"], 31, 29, 15, 0],
        "1f6d0": [["🛐"], "", "", ["place_of_worship"], 31, 30, 15, 0],
        "1f6e0": [["🛠"], "", "", ["hammer_and_wrench"], 31, 31, 15, 0],
        "1f6e1": [["🛡"], "", "", ["shield"], 31, 32, 15, 0],
        "1f6e2": [["🛢"], "", "", ["oil_drum"], 31, 33, 15, 0],
        "1f6e3": [["🛣"], "", "", ["motorway"], 31, 34, 15, 0],
        "1f6e4": [["🛤"], "", "", ["railway_track"], 31, 35, 15, 0],
        "1f6e5": [["🛥"], "", "", ["motor_boat"], 31, 36, 15, 0],
        "1f6e9": [["🛩"], "", "", ["small_airplane"], 31, 37, 15, 0],
        "1f6eb": [["🛫"], "", "", ["airplane_departure"], 31, 38, 15, 0],
        "1f6ec": [["🛬"], "", "", ["airplane_arriving"], 31, 39, 15, 0],
        "1f6f0": [["🛰"], "", "", ["satellite"], 31, 40, 15, 0],
        "1f6f3": [["🛳"], "", "", ["passenger_ship"], 32, 0, 15, 0],
        "1f910": [["🤐"], "", "", ["zipper_mouth_face"], 32, 1, 15, 0],
        "1f911": [["🤑"], "", "", ["money_mouth_face"], 32, 2, 15, 0],
        "1f912": [["🤒"], "", "", ["face_with_thermometer"], 32, 3, 15, 0],
        "1f913": [["🤓"], "", "", ["nerd_face"], 32, 4, 15, 0],
        "1f914": [["🤔"], "", "", ["thinking_face"], 32, 5, 15, 0],
        "1f915": [["🤕"], "", "", ["face_with_head_bandage"], 32, 6, 15, 0],
        "1f916": [["🤖"], "", "", ["robot_face"], 32, 7, 15, 0],
        "1f917": [["🤗"], "", "", ["hugging_face"], 32, 8, 15, 0],
        "1f918": [["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 32, 9, 15, 0],
        "1f980": [["🦀"], "", "", ["crab"], 32, 15, 15, 0],
        "1f981": [["🦁"], "", "", ["lion_face"], 32, 16, 15, 0],
        "1f982": [["🦂"], "", "", ["scorpion"], 32, 17, 15, 0],
        "1f983": [["🦃"], "", "", ["turkey"], 32, 18, 15, 0],
        "1f984": [["🦄"], "", "", ["unicorn_face"], 32, 19, 15, 0],
        "1f9c0": [["🧀"], "", "", ["cheese_wedge"], 32, 20, 15, 0],
        "0023-20e3": [["#️⃣", "#⃣"], "", "󾠬", ["hash"], 32, 21, 15, 0],
        "002a-20e3": [["*⃣"], "", "", ["keycap_star"], 32, 22, 15, 0],
        "0030-20e3": [["0️⃣", "0⃣"], "", "󾠷", ["zero"], 32, 23, 15, 0],
        "0031-20e3": [["1️⃣", "1⃣"], "", "󾠮", ["one"], 32, 24, 15, 0],
        "0032-20e3": [["2️⃣", "2⃣"], "", "󾠯", ["two"], 32, 25, 15, 0],
        "0033-20e3": [["3️⃣", "3⃣"], "", "󾠰", ["three"], 32, 26, 15, 0],
        "0034-20e3": [["4️⃣", "4⃣"], "", "󾠱", ["four"], 32, 27, 15, 0],
        "0035-20e3": [["5️⃣", "5⃣"], "", "󾠲", ["five"], 32, 28, 15, 0],
        "0036-20e3": [["6️⃣", "6⃣"], "", "󾠳", ["six"], 32, 29, 15, 0],
        "0037-20e3": [["7️⃣", "7⃣"], "", "󾠴", ["seven"], 32, 30, 15, 0],
        "0038-20e3": [["8️⃣", "8⃣"], "", "󾠵", ["eight"], 32, 31, 15, 0],
        "0039-20e3": [["9️⃣", "9⃣"], "", "󾠶", ["nine"], 32, 32, 15, 0],
        "1f1e6-1f1e8": [["🇦🇨"], "", "", ["flag-ac"], 32, 33, 15, 0],
        "1f1e6-1f1e9": [["🇦🇩"], "", "", ["flag-ad"], 32, 34, 15, 0],
        "1f1e6-1f1ea": [["🇦🇪"], "", "", ["flag-ae"], 32, 35, 15, 0],
        "1f1e6-1f1eb": [["🇦🇫"], "", "", ["flag-af"], 32, 36, 15, 0],
        "1f1e6-1f1ec": [["🇦🇬"], "", "", ["flag-ag"], 32, 37, 15, 0],
        "1f1e6-1f1ee": [["🇦🇮"], "", "", ["flag-ai"], 32, 38, 15, 0],
        "1f1e6-1f1f1": [["🇦🇱"], "", "", ["flag-al"], 32, 39, 15, 0],
        "1f1e6-1f1f2": [["🇦🇲"], "", "", ["flag-am"], 32, 40, 15, 0],
        "1f1e6-1f1f4": [["🇦🇴"], "", "", ["flag-ao"], 33, 0, 15, 0],
        "1f1e6-1f1f6": [["🇦🇶"], "", "", ["flag-aq"], 33, 1, 15, 0],
        "1f1e6-1f1f7": [["🇦🇷"], "", "", ["flag-ar"], 33, 2, 15, 0],
        "1f1e6-1f1f8": [["🇦🇸"], "", "", ["flag-as"], 33, 3, 15, 0],
        "1f1e6-1f1f9": [["🇦🇹"], "", "", ["flag-at"], 33, 4, 15, 0],
        "1f1e6-1f1fa": [["🇦🇺"], "", "", ["flag-au"], 33, 5, 15, 0],
        "1f1e6-1f1fc": [["🇦🇼"], "", "", ["flag-aw"], 33, 6, 15, 0],
        "1f1e6-1f1fd": [["🇦🇽"], "", "", ["flag-ax"], 33, 7, 15, 0],
        "1f1e6-1f1ff": [["🇦🇿"], "", "", ["flag-az"], 33, 8, 15, 0],
        "1f1e7-1f1e6": [["🇧🇦"], "", "", ["flag-ba"], 33, 9, 15, 0],
        "1f1e7-1f1e7": [["🇧🇧"], "", "", ["flag-bb"], 33, 10, 15, 0],
        "1f1e7-1f1e9": [["🇧🇩"], "", "", ["flag-bd"], 33, 11, 15, 0],
        "1f1e7-1f1ea": [["🇧🇪"], "", "", ["flag-be"], 33, 12, 15, 0],
        "1f1e7-1f1eb": [["🇧🇫"], "", "", ["flag-bf"], 33, 13, 15, 0],
        "1f1e7-1f1ec": [["🇧🇬"], "", "", ["flag-bg"], 33, 14, 15, 0],
        "1f1e7-1f1ed": [["🇧🇭"], "", "", ["flag-bh"], 33, 15, 15, 0],
        "1f1e7-1f1ee": [["🇧🇮"], "", "", ["flag-bi"], 33, 16, 15, 0],
        "1f1e7-1f1ef": [["🇧🇯"], "", "", ["flag-bj"], 33, 17, 15, 0],
        "1f1e7-1f1f1": [["🇧🇱"], "", "", ["flag-bl"], 33, 18, 13, 0],
        "1f1e7-1f1f2": [["🇧🇲"], "", "", ["flag-bm"], 33, 19, 15, 0],
        "1f1e7-1f1f3": [["🇧🇳"], "", "", ["flag-bn"], 33, 20, 15, 0],
        "1f1e7-1f1f4": [["🇧🇴"], "", "", ["flag-bo"], 33, 21, 15, 0],
        "1f1e7-1f1f6": [["🇧🇶"], "", "", ["flag-bq"], 33, 22, 13, 0],
        "1f1e7-1f1f7": [["🇧🇷"], "", "", ["flag-br"], 33, 23, 15, 0],
        "1f1e7-1f1f8": [["🇧🇸"], "", "", ["flag-bs"], 33, 24, 15, 0],
        "1f1e7-1f1f9": [["🇧🇹"], "", "", ["flag-bt"], 33, 25, 15, 0],
        "1f1e7-1f1fb": [["🇧🇻"], "", "", ["flag-bv"], 33, 26, 13, 0],
        "1f1e7-1f1fc": [["🇧🇼"], "", "", ["flag-bw"], 33, 27, 15, 0],
        "1f1e7-1f1fe": [["🇧🇾"], "", "", ["flag-by"], 33, 28, 15, 0],
        "1f1e7-1f1ff": [["🇧🇿"], "", "", ["flag-bz"], 33, 29, 15, 0],
        "1f1e8-1f1e6": [["🇨🇦"], "", "", ["flag-ca"], 33, 30, 15, 0],
        "1f1e8-1f1e8": [["🇨🇨"], "", "", ["flag-cc"], 33, 31, 15, 0],
        "1f1e8-1f1e9": [["🇨🇩"], "", "", ["flag-cd"], 33, 32, 15, 0],
        "1f1e8-1f1eb": [["🇨🇫"], "", "", ["flag-cf"], 33, 33, 15, 0],
        "1f1e8-1f1ec": [["🇨🇬"], "", "", ["flag-cg"], 33, 34, 15, 0],
        "1f1e8-1f1ed": [["🇨🇭"], "", "", ["flag-ch"], 33, 35, 15, 0],
        "1f1e8-1f1ee": [["🇨🇮"], "", "", ["flag-ci"], 33, 36, 15, 0],
        "1f1e8-1f1f0": [["🇨🇰"], "", "", ["flag-ck"], 33, 37, 15, 0],
        "1f1e8-1f1f1": [["🇨🇱"], "", "", ["flag-cl"], 33, 38, 15, 0],
        "1f1e8-1f1f2": [["🇨🇲"], "", "", ["flag-cm"], 33, 39, 15, 0],
        "1f1e8-1f1f3": [["🇨🇳"], "", "󾓭", ["flag-cn", "cn"], 33, 40, 15, 0],
        "1f1e8-1f1f4": [["🇨🇴"], "", "", ["flag-co"], 34, 0, 15, 0],
        "1f1e8-1f1f5": [["🇨🇵"], "", "", ["flag-cp"], 34, 1, 13, 0],
        "1f1e8-1f1f7": [["🇨🇷"], "", "", ["flag-cr"], 34, 2, 15, 0],
        "1f1e8-1f1fa": [["🇨🇺"], "", "", ["flag-cu"], 34, 3, 15, 0],
        "1f1e8-1f1fb": [["🇨🇻"], "", "", ["flag-cv"], 34, 4, 15, 0],
        "1f1e8-1f1fc": [["🇨🇼"], "", "", ["flag-cw"], 34, 5, 15, 0],
        "1f1e8-1f1fd": [["🇨🇽"], "", "", ["flag-cx"], 34, 6, 15, 0],
        "1f1e8-1f1fe": [["🇨🇾"], "", "", ["flag-cy"], 34, 7, 15, 0],
        "1f1e8-1f1ff": [["🇨🇿"], "", "", ["flag-cz"], 34, 8, 15, 0],
        "1f1e9-1f1ea": [["🇩🇪"], "", "󾓨", ["flag-de", "de"], 34, 9, 15, 0],
        "1f1e9-1f1ec": [["🇩🇬"], "", "", ["flag-dg"], 34, 10, 13, 0],
        "1f1e9-1f1ef": [["🇩🇯"], "", "", ["flag-dj"], 34, 11, 15, 0],
        "1f1e9-1f1f0": [["🇩🇰"], "", "", ["flag-dk"], 34, 12, 15, 0],
        "1f1e9-1f1f2": [["🇩🇲"], "", "", ["flag-dm"], 34, 13, 15, 0],
        "1f1e9-1f1f4": [["🇩🇴"], "", "", ["flag-do"], 34, 14, 15, 0],
        "1f1e9-1f1ff": [["🇩🇿"], "", "", ["flag-dz"], 34, 15, 15, 0],
        "1f1ea-1f1e6": [["🇪🇦"], "", "", ["flag-ea"], 34, 16, 13, 0],
        "1f1ea-1f1e8": [["🇪🇨"], "", "", ["flag-ec"], 34, 17, 15, 0],
        "1f1ea-1f1ea": [["🇪🇪"], "", "", ["flag-ee"], 34, 18, 15, 0],
        "1f1ea-1f1ec": [["🇪🇬"], "", "", ["flag-eg"], 34, 19, 15, 0],
        "1f1ea-1f1ed": [["🇪🇭"], "", "", ["flag-eh"], 34, 20, 13, 0],
        "1f1ea-1f1f7": [["🇪🇷"], "", "", ["flag-er"], 34, 21, 15, 0],
        "1f1ea-1f1f8": [["🇪🇸"], "", "󾓫", ["flag-es", "es"], 34, 22, 15, 0],
        "1f1ea-1f1f9": [["🇪🇹"], "", "", ["flag-et"], 34, 23, 15, 0],
        "1f1ea-1f1fa": [["🇪🇺"], "", "", ["flag-eu"], 34, 24, 15, 0],
        "1f1eb-1f1ee": [["🇫🇮"], "", "", ["flag-fi"], 34, 25, 15, 0],
        "1f1eb-1f1ef": [["🇫🇯"], "", "", ["flag-fj"], 34, 26, 15, 0],
        "1f1eb-1f1f0": [["🇫🇰"], "", "", ["flag-fk"], 34, 27, 13, 0],
        "1f1eb-1f1f2": [["🇫🇲"], "", "", ["flag-fm"], 34, 28, 15, 0],
        "1f1eb-1f1f4": [["🇫🇴"], "", "", ["flag-fo"], 34, 29, 15, 0],
        "1f1eb-1f1f7": [["🇫🇷"], "", "󾓧", ["flag-fr", "fr"], 34, 30, 15, 0],
        "1f1ec-1f1e6": [["🇬🇦"], "", "", ["flag-ga"], 34, 31, 15, 0],
        "1f1ec-1f1e7": [["🇬🇧"], "", "󾓪", ["flag-gb", "gb", "uk"], 34, 32, 15, 0],
        "1f1ec-1f1e9": [["🇬🇩"], "", "", ["flag-gd"], 34, 33, 15, 0],
        "1f1ec-1f1ea": [["🇬🇪"], "", "", ["flag-ge"], 34, 34, 15, 0],
        "1f1ec-1f1eb": [["🇬🇫"], "", "", ["flag-gf"], 34, 35, 13, 0],
        "1f1ec-1f1ec": [["🇬🇬"], "", "", ["flag-gg"], 34, 36, 15, 0],
        "1f1ec-1f1ed": [["🇬🇭"], "", "", ["flag-gh"], 34, 37, 15, 0],
        "1f1ec-1f1ee": [["🇬🇮"], "", "", ["flag-gi"], 34, 38, 15, 0],
        "1f1ec-1f1f1": [["🇬🇱"], "", "", ["flag-gl"], 34, 39, 15, 0],
        "1f1ec-1f1f2": [["🇬🇲"], "", "", ["flag-gm"], 34, 40, 15, 0],
        "1f1ec-1f1f3": [["🇬🇳"], "", "", ["flag-gn"], 35, 0, 15, 0],
        "1f1ec-1f1f5": [["🇬🇵"], "", "", ["flag-gp"], 35, 1, 13, 0],
        "1f1ec-1f1f6": [["🇬🇶"], "", "", ["flag-gq"], 35, 2, 15, 0],
        "1f1ec-1f1f7": [["🇬🇷"], "", "", ["flag-gr"], 35, 3, 15, 0],
        "1f1ec-1f1f8": [["🇬🇸"], "", "", ["flag-gs"], 35, 4, 13, 0],
        "1f1ec-1f1f9": [["🇬🇹"], "", "", ["flag-gt"], 35, 5, 15, 0],
        "1f1ec-1f1fa": [["🇬🇺"], "", "", ["flag-gu"], 35, 6, 15, 0],
        "1f1ec-1f1fc": [["🇬🇼"], "", "", ["flag-gw"], 35, 7, 15, 0],
        "1f1ec-1f1fe": [["🇬🇾"], "", "", ["flag-gy"], 35, 8, 15, 0],
        "1f1ed-1f1f0": [["🇭🇰"], "", "", ["flag-hk"], 35, 9, 15, 0],
        "1f1ed-1f1f2": [["🇭🇲"], "", "", ["flag-hm"], 35, 10, 13, 0],
        "1f1ed-1f1f3": [["🇭🇳"], "", "", ["flag-hn"], 35, 11, 15, 0],
        "1f1ed-1f1f7": [["🇭🇷"], "", "", ["flag-hr"], 35, 12, 15, 0],
        "1f1ed-1f1f9": [["🇭🇹"], "", "", ["flag-ht"], 35, 13, 15, 0],
        "1f1ed-1f1fa": [["🇭🇺"], "", "", ["flag-hu"], 35, 14, 15, 0],
        "1f1ee-1f1e8": [["🇮🇨"], "", "", ["flag-ic"], 35, 15, 15, 0],
        "1f1ee-1f1e9": [["🇮🇩"], "", "", ["flag-id"], 35, 16, 15, 0],
        "1f1ee-1f1ea": [["🇮🇪"], "", "", ["flag-ie"], 35, 17, 15, 0],
        "1f1ee-1f1f1": [["🇮🇱"], "", "", ["flag-il"], 35, 18, 15, 0],
        "1f1ee-1f1f2": [["🇮🇲"], "", "", ["flag-im"], 35, 19, 15, 0],
        "1f1ee-1f1f3": [["🇮🇳"], "", "", ["flag-in"], 35, 20, 15, 0],
        "1f1ee-1f1f4": [["🇮🇴"], "", "", ["flag-io"], 35, 21, 15, 0],
        "1f1ee-1f1f6": [["🇮🇶"], "", "", ["flag-iq"], 35, 22, 15, 0],
        "1f1ee-1f1f7": [["🇮🇷"], "", "", ["flag-ir"], 35, 23, 15, 0],
        "1f1ee-1f1f8": [["🇮🇸"], "", "", ["flag-is"], 35, 24, 15, 0],
        "1f1ee-1f1f9": [["🇮🇹"], "", "󾓩", ["flag-it", "it"], 35, 25, 15, 0],
        "1f1ef-1f1ea": [["🇯🇪"], "", "", ["flag-je"], 35, 26, 15, 0],
        "1f1ef-1f1f2": [["🇯🇲"], "", "", ["flag-jm"], 35, 27, 15, 0],
        "1f1ef-1f1f4": [["🇯🇴"], "", "", ["flag-jo"], 35, 28, 15, 0],
        "1f1ef-1f1f5": [["🇯🇵"], "", "󾓥", ["flag-jp", "jp"], 35, 29, 15, 0],
        "1f1f0-1f1ea": [["🇰🇪"], "", "", ["flag-ke"], 35, 30, 15, 0],
        "1f1f0-1f1ec": [["🇰🇬"], "", "", ["flag-kg"], 35, 31, 15, 0],
        "1f1f0-1f1ed": [["🇰🇭"], "", "", ["flag-kh"], 35, 32, 15, 0],
        "1f1f0-1f1ee": [["🇰🇮"], "", "", ["flag-ki"], 35, 33, 15, 0],
        "1f1f0-1f1f2": [["🇰🇲"], "", "", ["flag-km"], 35, 34, 15, 0],
        "1f1f0-1f1f3": [["🇰🇳"], "", "", ["flag-kn"], 35, 35, 15, 0],
        "1f1f0-1f1f5": [["🇰🇵"], "", "", ["flag-kp"], 35, 36, 15, 0],
        "1f1f0-1f1f7": [["🇰🇷"], "", "󾓮", ["flag-kr", "kr"], 35, 37, 15, 0],
        "1f1f0-1f1fc": [["🇰🇼"], "", "", ["flag-kw"], 35, 38, 15, 0],
        "1f1f0-1f1fe": [["🇰🇾"], "", "", ["flag-ky"], 35, 39, 15, 0],
        "1f1f0-1f1ff": [["🇰🇿"], "", "", ["flag-kz"], 35, 40, 15, 0],
        "1f1f1-1f1e6": [["🇱🇦"], "", "", ["flag-la"], 36, 0, 15, 0],
        "1f1f1-1f1e7": [["🇱🇧"], "", "", ["flag-lb"], 36, 1, 15, 0],
        "1f1f1-1f1e8": [["🇱🇨"], "", "", ["flag-lc"], 36, 2, 15, 0],
        "1f1f1-1f1ee": [["🇱🇮"], "", "", ["flag-li"], 36, 3, 15, 0],
        "1f1f1-1f1f0": [["🇱🇰"], "", "", ["flag-lk"], 36, 4, 15, 0],
        "1f1f1-1f1f7": [["🇱🇷"], "", "", ["flag-lr"], 36, 5, 15, 0],
        "1f1f1-1f1f8": [["🇱🇸"], "", "", ["flag-ls"], 36, 6, 15, 0],
        "1f1f1-1f1f9": [["🇱🇹"], "", "", ["flag-lt"], 36, 7, 15, 0],
        "1f1f1-1f1fa": [["🇱🇺"], "", "", ["flag-lu"], 36, 8, 15, 0],
        "1f1f1-1f1fb": [["🇱🇻"], "", "", ["flag-lv"], 36, 9, 15, 0],
        "1f1f1-1f1fe": [["🇱🇾"], "", "", ["flag-ly"], 36, 10, 15, 0],
        "1f1f2-1f1e6": [["🇲🇦"], "", "", ["flag-ma"], 36, 11, 15, 0],
        "1f1f2-1f1e8": [["🇲🇨"], "", "", ["flag-mc"], 36, 12, 15, 0],
        "1f1f2-1f1e9": [["🇲🇩"], "", "", ["flag-md"], 36, 13, 15, 0],
        "1f1f2-1f1ea": [["🇲🇪"], "", "", ["flag-me"], 36, 14, 15, 0],
        "1f1f2-1f1eb": [["🇲🇫"], "", "", ["flag-mf"], 36, 15, 13, 0],
        "1f1f2-1f1ec": [["🇲🇬"], "", "", ["flag-mg"], 36, 16, 15, 0],
        "1f1f2-1f1ed": [["🇲🇭"], "", "", ["flag-mh"], 36, 17, 15, 0],
        "1f1f2-1f1f0": [["🇲🇰"], "", "", ["flag-mk"], 36, 18, 15, 0],
        "1f1f2-1f1f1": [["🇲🇱"], "", "", ["flag-ml"], 36, 19, 15, 0],
        "1f1f2-1f1f2": [["🇲🇲"], "", "", ["flag-mm"], 36, 20, 15, 0],
        "1f1f2-1f1f3": [["🇲🇳"], "", "", ["flag-mn"], 36, 21, 15, 0],
        "1f1f2-1f1f4": [["🇲🇴"], "", "", ["flag-mo"], 36, 22, 15, 0],
        "1f1f2-1f1f5": [["🇲🇵"], "", "", ["flag-mp"], 36, 23, 15, 0],
        "1f1f2-1f1f6": [["🇲🇶"], "", "", ["flag-mq"], 36, 24, 13, 0],
        "1f1f2-1f1f7": [["🇲🇷"], "", "", ["flag-mr"], 36, 25, 15, 0],
        "1f1f2-1f1f8": [["🇲🇸"], "", "", ["flag-ms"], 36, 26, 15, 0],
        "1f1f2-1f1f9": [["🇲🇹"], "", "", ["flag-mt"], 36, 27, 15, 0],
        "1f1f2-1f1fa": [["🇲🇺"], "", "", ["flag-mu"], 36, 28, 15, 0],
        "1f1f2-1f1fb": [["🇲🇻"], "", "", ["flag-mv"], 36, 29, 15, 0],
        "1f1f2-1f1fc": [["🇲🇼"], "", "", ["flag-mw"], 36, 30, 15, 0],
        "1f1f2-1f1fd": [["🇲🇽"], "", "", ["flag-mx"], 36, 31, 15, 0],
        "1f1f2-1f1fe": [["🇲🇾"], "", "", ["flag-my"], 36, 32, 15, 0],
        "1f1f2-1f1ff": [["🇲🇿"], "", "", ["flag-mz"], 36, 33, 15, 0],
        "1f1f3-1f1e6": [["🇳🇦"], "", "", ["flag-na"], 36, 34, 15, 0],
        "1f1f3-1f1e8": [["🇳🇨"], "", "", ["flag-nc"], 36, 35, 13, 0],
        "1f1f3-1f1ea": [["🇳🇪"], "", "", ["flag-ne"], 36, 36, 15, 0],
        "1f1f3-1f1eb": [["🇳🇫"], "", "", ["flag-nf"], 36, 37, 15, 0],
        "1f1f3-1f1ec": [["🇳🇬"], "", "", ["flag-ng"], 36, 38, 15, 0],
        "1f1f3-1f1ee": [["🇳🇮"], "", "", ["flag-ni"], 36, 39, 15, 0],
        "1f1f3-1f1f1": [["🇳🇱"], "", "", ["flag-nl"], 36, 40, 15, 0],
        "1f1f3-1f1f4": [["🇳🇴"], "", "", ["flag-no"], 37, 0, 15, 0],
        "1f1f3-1f1f5": [["🇳🇵"], "", "", ["flag-np"], 37, 1, 15, 0],
        "1f1f3-1f1f7": [["🇳🇷"], "", "", ["flag-nr"], 37, 2, 15, 0],
        "1f1f3-1f1fa": [["🇳🇺"], "", "", ["flag-nu"], 37, 3, 15, 0],
        "1f1f3-1f1ff": [["🇳🇿"], "", "", ["flag-nz"], 37, 4, 15, 0],
        "1f1f4-1f1f2": [["🇴🇲"], "", "", ["flag-om"], 37, 5, 15, 0],
        "1f1f5-1f1e6": [["🇵🇦"], "", "", ["flag-pa"], 37, 6, 15, 0],
        "1f1f5-1f1ea": [["🇵🇪"], "", "", ["flag-pe"], 37, 7, 15, 0],
        "1f1f5-1f1eb": [["🇵🇫"], "", "", ["flag-pf"], 37, 8, 15, 0],
        "1f1f5-1f1ec": [["🇵🇬"], "", "", ["flag-pg"], 37, 9, 15, 0],
        "1f1f5-1f1ed": [["🇵🇭"], "", "", ["flag-ph"], 37, 10, 15, 0],
        "1f1f5-1f1f0": [["🇵🇰"], "", "", ["flag-pk"], 37, 11, 15, 0],
        "1f1f5-1f1f1": [["🇵🇱"], "", "", ["flag-pl"], 37, 12, 15, 0],
        "1f1f5-1f1f2": [["🇵🇲"], "", "", ["flag-pm"], 37, 13, 13, 0],
        "1f1f5-1f1f3": [["🇵🇳"], "", "", ["flag-pn"], 37, 14, 15, 0],
        "1f1f5-1f1f7": [["🇵🇷"], "", "", ["flag-pr"], 37, 15, 15, 0],
        "1f1f5-1f1f8": [["🇵🇸"], "", "", ["flag-ps"], 37, 16, 15, 0],
        "1f1f5-1f1f9": [["🇵🇹"], "", "", ["flag-pt"], 37, 17, 15, 0],
        "1f1f5-1f1fc": [["🇵🇼"], "", "", ["flag-pw"], 37, 18, 15, 0],
        "1f1f5-1f1fe": [["🇵🇾"], "", "", ["flag-py"], 37, 19, 15, 0],
        "1f1f6-1f1e6": [["🇶🇦"], "", "", ["flag-qa"], 37, 20, 15, 0],
        "1f1f7-1f1ea": [["🇷🇪"], "", "", ["flag-re"], 37, 21, 13, 0],
        "1f1f7-1f1f4": [["🇷🇴"], "", "", ["flag-ro"], 37, 22, 15, 0],
        "1f1f7-1f1f8": [["🇷🇸"], "", "", ["flag-rs"], 37, 23, 15, 0],
        "1f1f7-1f1fa": [["🇷🇺"], "", "󾓬", ["flag-ru", "ru"], 37, 24, 15, 0],
        "1f1f7-1f1fc": [["🇷🇼"], "", "", ["flag-rw"], 37, 25, 15, 0],
        "1f1f8-1f1e6": [["🇸🇦"], "", "", ["flag-sa"], 37, 26, 15, 0],
        "1f1f8-1f1e7": [["🇸🇧"], "", "", ["flag-sb"], 37, 27, 15, 0],
        "1f1f8-1f1e8": [["🇸🇨"], "", "", ["flag-sc"], 37, 28, 15, 0],
        "1f1f8-1f1e9": [["🇸🇩"], "", "", ["flag-sd"], 37, 29, 15, 0],
        "1f1f8-1f1ea": [["🇸🇪"], "", "", ["flag-se"], 37, 30, 15, 0],
        "1f1f8-1f1ec": [["🇸🇬"], "", "", ["flag-sg"], 37, 31, 15, 0],
        "1f1f8-1f1ed": [["🇸🇭"], "", "", ["flag-sh"], 37, 32, 15, 0],
        "1f1f8-1f1ee": [["🇸🇮"], "", "", ["flag-si"], 37, 33, 15, 0],
        "1f1f8-1f1ef": [["🇸🇯"], "", "", ["flag-sj"], 37, 34, 13, 0],
        "1f1f8-1f1f0": [["🇸🇰"], "", "", ["flag-sk"], 37, 35, 15, 0],
        "1f1f8-1f1f1": [["🇸🇱"], "", "", ["flag-sl"], 37, 36, 15, 0],
        "1f1f8-1f1f2": [["🇸🇲"], "", "", ["flag-sm"], 37, 37, 15, 0],
        "1f1f8-1f1f3": [["🇸🇳"], "", "", ["flag-sn"], 37, 38, 15, 0],
        "1f1f8-1f1f4": [["🇸🇴"], "", "", ["flag-so"], 37, 39, 15, 0],
        "1f1f8-1f1f7": [["🇸🇷"], "", "", ["flag-sr"], 37, 40, 15, 0],
        "1f1f8-1f1f8": [["🇸🇸"], "", "", ["flag-ss"], 38, 0, 15, 0],
        "1f1f8-1f1f9": [["🇸🇹"], "", "", ["flag-st"], 38, 1, 15, 0],
        "1f1f8-1f1fb": [["🇸🇻"], "", "", ["flag-sv"], 38, 2, 15, 0],
        "1f1f8-1f1fd": [["🇸🇽"], "", "", ["flag-sx"], 38, 3, 15, 0],
        "1f1f8-1f1fe": [["🇸🇾"], "", "", ["flag-sy"], 38, 4, 15, 0],
        "1f1f8-1f1ff": [["🇸🇿"], "", "", ["flag-sz"], 38, 5, 15, 0],
        "1f1f9-1f1e6": [["🇹🇦"], "", "", ["flag-ta"], 38, 6, 15, 0],
        "1f1f9-1f1e8": [["🇹🇨"], "", "", ["flag-tc"], 38, 7, 15, 0],
        "1f1f9-1f1e9": [["🇹🇩"], "", "", ["flag-td"], 38, 8, 15, 0],
        "1f1f9-1f1eb": [["🇹🇫"], "", "", ["flag-tf"], 38, 9, 13, 0],
        "1f1f9-1f1ec": [["🇹🇬"], "", "", ["flag-tg"], 38, 10, 15, 0],
        "1f1f9-1f1ed": [["🇹🇭"], "", "", ["flag-th"], 38, 11, 15, 0],
        "1f1f9-1f1ef": [["🇹🇯"], "", "", ["flag-tj"], 38, 12, 15, 0],
        "1f1f9-1f1f0": [["🇹🇰"], "", "", ["flag-tk"], 38, 13, 15, 0],
        "1f1f9-1f1f1": [["🇹🇱"], "", "", ["flag-tl"], 38, 14, 15, 0],
        "1f1f9-1f1f2": [["🇹🇲"], "", "", ["flag-tm"], 38, 15, 15, 0],
        "1f1f9-1f1f3": [["🇹🇳"], "", "", ["flag-tn"], 38, 16, 15, 0],
        "1f1f9-1f1f4": [["🇹🇴"], "", "", ["flag-to"], 38, 17, 15, 0],
        "1f1f9-1f1f7": [["🇹🇷"], "", "", ["flag-tr"], 38, 18, 15, 0],
        "1f1f9-1f1f9": [["🇹🇹"], "", "", ["flag-tt"], 38, 19, 15, 0],
        "1f1f9-1f1fb": [["🇹🇻"], "", "", ["flag-tv"], 38, 20, 15, 0],
        "1f1f9-1f1fc": [["🇹🇼"], "", "", ["flag-tw"], 38, 21, 15, 0],
        "1f1f9-1f1ff": [["🇹🇿"], "", "", ["flag-tz"], 38, 22, 15, 0],
        "1f1fa-1f1e6": [["🇺🇦"], "", "", ["flag-ua"], 38, 23, 15, 0],
        "1f1fa-1f1ec": [["🇺🇬"], "", "", ["flag-ug"], 38, 24, 15, 0],
        "1f1fa-1f1f2": [["🇺🇲"], "", "", ["flag-um"], 38, 25, 13, 0],
        "1f1fa-1f1f8": [["🇺🇸"], "", "󾓦", ["flag-us", "us"], 38, 26, 15, 0],
        "1f1fa-1f1fe": [["🇺🇾"], "", "", ["flag-uy"], 38, 27, 15, 0],
        "1f1fa-1f1ff": [["🇺🇿"], "", "", ["flag-uz"], 38, 28, 15, 0],
        "1f1fb-1f1e6": [["🇻🇦"], "", "", ["flag-va"], 38, 29, 15, 0],
        "1f1fb-1f1e8": [["🇻🇨"], "", "", ["flag-vc"], 38, 30, 15, 0],
        "1f1fb-1f1ea": [["🇻🇪"], "", "", ["flag-ve"], 38, 31, 15, 0],
        "1f1fb-1f1ec": [["🇻🇬"], "", "", ["flag-vg"], 38, 32, 15, 0],
        "1f1fb-1f1ee": [["🇻🇮"], "", "", ["flag-vi"], 38, 33, 15, 0],
        "1f1fb-1f1f3": [["🇻🇳"], "", "", ["flag-vn"], 38, 34, 15, 0],
        "1f1fb-1f1fa": [["🇻🇺"], "", "", ["flag-vu"], 38, 35, 15, 0],
        "1f1fc-1f1eb": [["🇼🇫"], "", "", ["flag-wf"], 38, 36, 13, 0],
        "1f1fc-1f1f8": [["🇼🇸"], "", "", ["flag-ws"], 38, 37, 15, 0],
        "1f1fd-1f1f0": [["🇽🇰"], "", "", ["flag-xk"], 38, 38, 13, 0],
        "1f1fe-1f1ea": [["🇾🇪"], "", "", ["flag-ye"], 38, 39, 15, 0],
        "1f1fe-1f1f9": [["🇾🇹"], "", "", ["flag-yt"], 38, 40, 13, 0],
        "1f1ff-1f1e6": [["🇿🇦"], "", "", ["flag-za"], 39, 0, 15, 0],
        "1f1ff-1f1f2": [["🇿🇲"], "", "", ["flag-zm"], 39, 1, 15, 0],
        "1f1ff-1f1fc": [["🇿🇼"], "", "", ["flag-zw"], 39, 2, 15, 0],
        "1f468-200d-1f468-200d-1f466": [["👨‍👨‍👦"], "", "", ["man-man-boy"], 39, 3, 15, 0],
        "1f468-200d-1f468-200d-1f466-200d-1f466": [["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 39, 4, 15, 0],
        "1f468-200d-1f468-200d-1f467": [["👨‍👨‍👧"], "", "", ["man-man-girl"], 39, 5, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f466": [["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 39, 6, 15, 0],
        "1f468-200d-1f468-200d-1f467-200d-1f467": [["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 39, 7, 15, 0],
        "1f468-200d-1f469-200d-1f466-200d-1f466": [["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 39, 8, 15, 0],
        "1f468-200d-1f469-200d-1f467": [["👨‍👩‍👧"], "", "", ["man-woman-girl"], 39, 9, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f466": [["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 39, 10, 15, 0],
        "1f468-200d-1f469-200d-1f467-200d-1f467": [["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 39, 11, 15, 0],
        "1f468-200d-2764-fe0f-200d-1f468": [["👨‍❤️‍👨"], "", "", ["man-heart-man"], 39, 12, 7, 0],
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [["👨‍❤️‍💋‍👨"], "", "", ["man-kiss-man"], 39, 13, 7, 0],
        "1f469-200d-1f469-200d-1f466": [["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 39, 14, 15, 0],
        "1f469-200d-1f469-200d-1f466-200d-1f466": [["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 39, 15, 15, 0],
        "1f469-200d-1f469-200d-1f467": [["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 39, 16, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f466": [["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 39, 17, 15, 0],
        "1f469-200d-1f469-200d-1f467-200d-1f467": [["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 39, 18, 15, 0],
        "1f469-200d-2764-fe0f-200d-1f469": [["👩‍❤️‍👩"], "", "", ["woman-heart-woman"], 39, 19, 7, 0],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [["👩‍❤️‍💋‍👩"], "", "", ["woman-kiss-woman"], 39, 20, 7, 0]
    },
    e.prototype.emoticons_data = {
        "<3": "heart",
        ":o)": "monkey_face",
        ":*": "kiss",
        ":-*": "kiss",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth",
        ":O": "open_mouth",
        ":-O": "open_mouth",
        ":)": "slightly_smiling_face",
        "(:": "slightly_smiling_face",
        ":-)": "slightly_smiling_face"
    },
    e.prototype.variations_data = {
        "261d-1f3fb": [1, 11, 15],
        "261d-1f3fc": [1, 12, 15],
        "261d-1f3fd": [1, 13, 15],
        "261d-1f3fe": [1, 14, 15],
        "261d-1f3ff": [1, 15, 15],
        "26f9-1f3fb": [2, 39, 15],
        "26f9-1f3fc": [2, 40, 15],
        "26f9-1f3fd": [3, 0, 15],
        "26f9-1f3fe": [3, 1, 15],
        "26f9-1f3ff": [3, 2, 15],
        "270a-1f3fb": [3, 10, 15],
        "270a-1f3fc": [3, 11, 15],
        "270a-1f3fd": [3, 12, 15],
        "270a-1f3fe": [3, 13, 15],
        "270a-1f3ff": [3, 14, 15],
        "270b-1f3fb": [3, 16, 15],
        "270b-1f3fc": [3, 17, 15],
        "270b-1f3fd": [3, 18, 15],
        "270b-1f3fe": [3, 19, 15],
        "270b-1f3ff": [3, 20, 15],
        "270c-1f3fb": [3, 22, 15],
        "270c-1f3fc": [3, 23, 15],
        "270c-1f3fd": [3, 24, 15],
        "270c-1f3fe": [3, 25, 15],
        "270c-1f3ff": [3, 26, 15],
        "270d-1f3fb": [3, 28, 15],
        "270d-1f3fc": [3, 29, 15],
        "270d-1f3fd": [3, 30, 15],
        "270d-1f3fe": [3, 31, 15],
        "270d-1f3ff": [3, 32, 15],
        "1f385-1f3fb": [8, 30, 15],
        "1f385-1f3fc": [8, 31, 15],
        "1f385-1f3fd": [8, 32, 15],
        "1f385-1f3fe": [8, 33, 15],
        "1f385-1f3ff": [8, 34, 15],
        "1f3c3-1f3fb": [10, 10, 15],
        "1f3c3-1f3fc": [10, 11, 15],
        "1f3c3-1f3fd": [10, 12, 15],
        "1f3c3-1f3fe": [10, 13, 15],
        "1f3c3-1f3ff": [10, 14, 15],
        "1f3c4-1f3fb": [10, 16, 15],
        "1f3c4-1f3fc": [10, 17, 15],
        "1f3c4-1f3fd": [10, 18, 15],
        "1f3c4-1f3fe": [10, 19, 15],
        "1f3c4-1f3ff": [10, 20, 15],
        "1f3ca-1f3fb": [10, 27, 15],
        "1f3ca-1f3fc": [10, 28, 15],
        "1f3ca-1f3fd": [10, 29, 15],
        "1f3ca-1f3fe": [10, 30, 15],
        "1f3ca-1f3ff": [10, 31, 15],
        "1f3cb-1f3fb": [10, 33, 15],
        "1f3cb-1f3fc": [10, 34, 15],
        "1f3cb-1f3fd": [10, 35, 15],
        "1f3cb-1f3fe": [10, 36, 15],
        "1f3cb-1f3ff": [10, 37, 15],
        "1f442-1f3fb": [13, 31, 15],
        "1f442-1f3fc": [13, 32, 15],
        "1f442-1f3fd": [13, 33, 15],
        "1f442-1f3fe": [13, 34, 15],
        "1f442-1f3ff": [13, 35, 15],
        "1f443-1f3fb": [13, 37, 15],
        "1f443-1f3fc": [13, 38, 15],
        "1f443-1f3fd": [13, 39, 15],
        "1f443-1f3fe": [13, 40, 15],
        "1f443-1f3ff": [14, 0, 15],
        "1f446-1f3fb": [14, 4, 15],
        "1f446-1f3fc": [14, 5, 15],
        "1f446-1f3fd": [14, 6, 15],
        "1f446-1f3fe": [14, 7, 15],
        "1f446-1f3ff": [14, 8, 15],
        "1f447-1f3fb": [14, 10, 15],
        "1f447-1f3fc": [14, 11, 15],
        "1f447-1f3fd": [14, 12, 15],
        "1f447-1f3fe": [14, 13, 15],
        "1f447-1f3ff": [14, 14, 15],
        "1f448-1f3fb": [14, 16, 15],
        "1f448-1f3fc": [14, 17, 15],
        "1f448-1f3fd": [14, 18, 15],
        "1f448-1f3fe": [14, 19, 15],
        "1f448-1f3ff": [14, 20, 15],
        "1f449-1f3fb": [14, 22, 15],
        "1f449-1f3fc": [14, 23, 15],
        "1f449-1f3fd": [14, 24, 15],
        "1f449-1f3fe": [14, 25, 15],
        "1f449-1f3ff": [14, 26, 15],
        "1f44a-1f3fb": [14, 28, 15],
        "1f44a-1f3fc": [14, 29, 15],
        "1f44a-1f3fd": [14, 30, 15],
        "1f44a-1f3fe": [14, 31, 15],
        "1f44a-1f3ff": [14, 32, 15],
        "1f44b-1f3fb": [14, 34, 15],
        "1f44b-1f3fc": [14, 35, 15],
        "1f44b-1f3fd": [14, 36, 15],
        "1f44b-1f3fe": [14, 37, 15],
        "1f44b-1f3ff": [14, 38, 15],
        "1f44c-1f3fb": [14, 40, 15],
        "1f44c-1f3fc": [15, 0, 15],
        "1f44c-1f3fd": [15, 1, 15],
        "1f44c-1f3fe": [15, 2, 15],
        "1f44c-1f3ff": [15, 3, 15],
        "1f44d-1f3fb": [15, 5, 15],
        "1f44d-1f3fc": [15, 6, 15],
        "1f44d-1f3fd": [15, 7, 15],
        "1f44d-1f3fe": [15, 8, 15],
        "1f44d-1f3ff": [15, 9, 15],
        "1f44e-1f3fb": [15, 11, 15],
        "1f44e-1f3fc": [15, 12, 15],
        "1f44e-1f3fd": [15, 13, 15],
        "1f44e-1f3fe": [15, 14, 15],
        "1f44e-1f3ff": [15, 15, 15],
        "1f44f-1f3fb": [15, 17, 15],
        "1f44f-1f3fc": [15, 18, 15],
        "1f44f-1f3fd": [15, 19, 15],
        "1f44f-1f3fe": [15, 20, 15],
        "1f44f-1f3ff": [15, 21, 15],
        "1f450-1f3fb": [15, 23, 15],
        "1f450-1f3fc": [15, 24, 15],
        "1f450-1f3fd": [15, 25, 15],
        "1f450-1f3fe": [15, 26, 15],
        "1f450-1f3ff": [15, 27, 15],
        "1f466-1f3fb": [16, 9, 15],
        "1f466-1f3fc": [16, 10, 15],
        "1f466-1f3fd": [16, 11, 15],
        "1f466-1f3fe": [16, 12, 15],
        "1f466-1f3ff": [16, 13, 15],
        "1f467-1f3fb": [16, 15, 15],
        "1f467-1f3fc": [16, 16, 15],
        "1f467-1f3fd": [16, 17, 15],
        "1f467-1f3fe": [16, 18, 15],
        "1f467-1f3ff": [16, 19, 15],
        "1f468-1f3fb": [16, 21, 15],
        "1f468-1f3fc": [16, 22, 15],
        "1f468-1f3fd": [16, 23, 15],
        "1f468-1f3fe": [16, 24, 15],
        "1f468-1f3ff": [16, 25, 15],
        "1f469-1f3fb": [16, 27, 15],
        "1f469-1f3fc": [16, 28, 15],
        "1f469-1f3fd": [16, 29, 15],
        "1f469-1f3fe": [16, 30, 15],
        "1f469-1f3ff": [16, 31, 15],
        "1f46e-1f3fb": [16, 37, 15],
        "1f46e-1f3fc": [16, 38, 15],
        "1f46e-1f3fd": [16, 39, 15],
        "1f46e-1f3fe": [16, 40, 15],
        "1f46e-1f3ff": [17, 0, 15],
        "1f470-1f3fb": [17, 3, 15],
        "1f470-1f3fc": [17, 4, 15],
        "1f470-1f3fd": [17, 5, 15],
        "1f470-1f3fe": [17, 6, 15],
        "1f470-1f3ff": [17, 7, 15],
        "1f471-1f3fb": [17, 9, 15],
        "1f471-1f3fc": [17, 10, 15],
        "1f471-1f3fd": [17, 11, 15],
        "1f471-1f3fe": [17, 12, 15],
        "1f471-1f3ff": [17, 13, 15],
        "1f472-1f3fb": [17, 15, 15],
        "1f472-1f3fc": [17, 16, 15],
        "1f472-1f3fd": [17, 17, 15],
        "1f472-1f3fe": [17, 18, 15],
        "1f472-1f3ff": [17, 19, 15],
        "1f473-1f3fb": [17, 21, 15],
        "1f473-1f3fc": [17, 22, 15],
        "1f473-1f3fd": [17, 23, 15],
        "1f473-1f3fe": [17, 24, 15],
        "1f473-1f3ff": [17, 25, 15],
        "1f474-1f3fb": [17, 27, 15],
        "1f474-1f3fc": [17, 28, 15],
        "1f474-1f3fd": [17, 29, 15],
        "1f474-1f3fe": [17, 30, 15],
        "1f474-1f3ff": [17, 31, 15],
        "1f475-1f3fb": [17, 33, 15],
        "1f475-1f3fc": [17, 34, 15],
        "1f475-1f3fd": [17, 35, 15],
        "1f475-1f3fe": [17, 36, 15],
        "1f475-1f3ff": [17, 37, 15],
        "1f476-1f3fb": [17, 39, 15],
        "1f476-1f3fc": [17, 40, 15],
        "1f476-1f3fd": [18, 0, 15],
        "1f476-1f3fe": [18, 1, 15],
        "1f476-1f3ff": [18, 2, 15],
        "1f477-1f3fb": [18, 4, 15],
        "1f477-1f3fc": [18, 5, 15],
        "1f477-1f3fd": [18, 6, 15],
        "1f477-1f3fe": [18, 7, 15],
        "1f477-1f3ff": [18, 8, 15],
        "1f478-1f3fb": [18, 10, 15],
        "1f478-1f3fc": [18, 11, 15],
        "1f478-1f3fd": [18, 12, 15],
        "1f478-1f3fe": [18, 13, 15],
        "1f478-1f3ff": [18, 14, 15],
        "1f47c-1f3fb": [18, 19, 15],
        "1f47c-1f3fc": [18, 20, 15],
        "1f47c-1f3fd": [18, 21, 15],
        "1f47c-1f3fe": [18, 22, 15],
        "1f47c-1f3ff": [18, 23, 15],
        "1f481-1f3fb": [18, 29, 15],
        "1f481-1f3fc": [18, 30, 15],
        "1f481-1f3fd": [18, 31, 15],
        "1f481-1f3fe": [18, 32, 15],
        "1f481-1f3ff": [18, 33, 15],
        "1f482-1f3fb": [18, 35, 15],
        "1f482-1f3fc": [18, 36, 15],
        "1f482-1f3fd": [18, 37, 15],
        "1f482-1f3fe": [18, 38, 15],
        "1f482-1f3ff": [18, 39, 15],
        "1f483-1f3fb": [19, 0, 15],
        "1f483-1f3fc": [19, 1, 15],
        "1f483-1f3fd": [19, 2, 15],
        "1f483-1f3fe": [19, 3, 15],
        "1f483-1f3ff": [19, 4, 15],
        "1f485-1f3fb": [19, 7, 15],
        "1f485-1f3fc": [19, 8, 15],
        "1f485-1f3fd": [19, 9, 15],
        "1f485-1f3fe": [19, 10, 15],
        "1f485-1f3ff": [19, 11, 15],
        "1f486-1f3fb": [19, 13, 15],
        "1f486-1f3fc": [19, 14, 15],
        "1f486-1f3fd": [19, 15, 15],
        "1f486-1f3fe": [19, 16, 15],
        "1f486-1f3ff": [19, 17, 15],
        "1f487-1f3fb": [19, 19, 15],
        "1f487-1f3fc": [19, 20, 15],
        "1f487-1f3fd": [19, 21, 15],
        "1f487-1f3fe": [19, 22, 15],
        "1f487-1f3ff": [19, 23, 15],
        "1f4aa-1f3fb": [20, 18, 15],
        "1f4aa-1f3fc": [20, 19, 15],
        "1f4aa-1f3fd": [20, 20, 15],
        "1f4aa-1f3fe": [20, 21, 15],
        "1f4aa-1f3ff": [20, 22, 15],
        "1f575-1f3fb": [24, 40, 11],
        "1f575-1f3fc": [25, 0, 11],
        "1f575-1f3fd": [25, 1, 11],
        "1f575-1f3fe": [25, 2, 11],
        "1f575-1f3ff": [25, 3, 11],
        "1f590-1f3fb": [25, 14, 15],
        "1f590-1f3fc": [25, 15, 15],
        "1f590-1f3fd": [25, 16, 15],
        "1f590-1f3fe": [25, 17, 15],
        "1f590-1f3ff": [25, 18, 15],
        "1f595-1f3fb": [25, 20, 15],
        "1f595-1f3fc": [25, 21, 15],
        "1f595-1f3fd": [25, 22, 15],
        "1f595-1f3fe": [25, 23, 15],
        "1f595-1f3ff": [25, 24, 15],
        "1f596-1f3fb": [25, 26, 15],
        "1f596-1f3fc": [25, 27, 15],
        "1f596-1f3fd": [25, 28, 15],
        "1f596-1f3fe": [25, 29, 15],
        "1f596-1f3ff": [25, 30, 15],
        "1f645-1f3fb": [28, 3, 15],
        "1f645-1f3fc": [28, 4, 15],
        "1f645-1f3fd": [28, 5, 15],
        "1f645-1f3fe": [28, 6, 15],
        "1f645-1f3ff": [28, 7, 15],
        "1f646-1f3fb": [28, 9, 15],
        "1f646-1f3fc": [28, 10, 15],
        "1f646-1f3fd": [28, 11, 15],
        "1f646-1f3fe": [28, 12, 15],
        "1f646-1f3ff": [28, 13, 15],
        "1f647-1f3fb": [28, 15, 15],
        "1f647-1f3fc": [28, 16, 15],
        "1f647-1f3fd": [28, 17, 15],
        "1f647-1f3fe": [28, 18, 15],
        "1f647-1f3ff": [28, 19, 15],
        "1f64b-1f3fb": [28, 24, 15],
        "1f64b-1f3fc": [28, 25, 15],
        "1f64b-1f3fd": [28, 26, 15],
        "1f64b-1f3fe": [28, 27, 15],
        "1f64b-1f3ff": [28, 28, 15],
        "1f64c-1f3fb": [28, 30, 15],
        "1f64c-1f3fc": [28, 31, 15],
        "1f64c-1f3fd": [28, 32, 15],
        "1f64c-1f3fe": [28, 33, 15],
        "1f64c-1f3ff": [28, 34, 15],
        "1f64d-1f3fb": [28, 36, 15],
        "1f64d-1f3fc": [28, 37, 15],
        "1f64d-1f3fd": [28, 38, 15],
        "1f64d-1f3fe": [28, 39, 15],
        "1f64d-1f3ff": [28, 40, 15],
        "1f64e-1f3fb": [29, 1, 15],
        "1f64e-1f3fc": [29, 2, 15],
        "1f64e-1f3fd": [29, 3, 15],
        "1f64e-1f3fe": [29, 4, 15],
        "1f64e-1f3ff": [29, 5, 15],
        "1f64f-1f3fb": [29, 7, 15],
        "1f64f-1f3fc": [29, 8, 15],
        "1f64f-1f3fd": [29, 9, 15],
        "1f64f-1f3fe": [29, 10, 15],
        "1f64f-1f3ff": [29, 11, 15],
        "1f6a3-1f3fb": [30, 7, 15],
        "1f6a3-1f3fc": [30, 8, 15],
        "1f6a3-1f3fd": [30, 9, 15],
        "1f6a3-1f3fe": [30, 10, 15],
        "1f6a3-1f3ff": [30, 11, 15],
        "1f6b4-1f3fb": [30, 29, 15],
        "1f6b4-1f3fc": [30, 30, 15],
        "1f6b4-1f3fd": [30, 31, 15],
        "1f6b4-1f3fe": [30, 32, 15],
        "1f6b4-1f3ff": [30, 33, 15],
        "1f6b5-1f3fb": [30, 35, 15],
        "1f6b5-1f3fc": [30, 36, 15],
        "1f6b5-1f3fd": [30, 37, 15],
        "1f6b5-1f3fe": [30, 38, 15],
        "1f6b5-1f3ff": [30, 39, 15],
        "1f6b6-1f3fb": [31, 0, 15],
        "1f6b6-1f3fc": [31, 1, 15],
        "1f6b6-1f3fd": [31, 2, 15],
        "1f6b6-1f3fe": [31, 3, 15],
        "1f6b6-1f3ff": [31, 4, 15],
        "1f6c0-1f3fb": [31, 15, 15],
        "1f6c0-1f3fc": [31, 16, 15],
        "1f6c0-1f3fd": [31, 17, 15],
        "1f6c0-1f3fe": [31, 18, 15],
        "1f6c0-1f3ff": [31, 19, 15],
        "1f918-1f3fb": [32, 10, 15],
        "1f918-1f3fc": [32, 11, 15],
        "1f918-1f3fd": [32, 12, 15],
        "1f918-1f3fe": [32, 13, 15],
        "1f918-1f3ff": [32, 14, 15]
    },
    e
}()
  , wdtEmojiBundle = function() {
    var u = {
        defaults: {
            sectionOrders: {
                People: 8,
                Nature: 7,
                Foods: 6,
                Activity: 5,
                Places: 4,
                Objects: 3,
                Symbols: 2,
                Flags: 1
            },
            skinColor: "skin-1",
            allowNative: !1,
            emojiType: "apple",
            emojiSheets: {
                apple: "../img/db/sheets/sheet_apple_64_indexed_128.png"
            },
            sections: {
                People: "Эмоции и люди",
                Nature: "Животные и растения",
                Foods: "Еда и напитки",
                Activity: "Спорт и активности",
                Places: "Путешествия и транспорт",
                Objects: "Объекты",
                Symbols: "Символы",
                Flags: "Флаги"
            },
            emojiData: {
                Symbols: [{
                    short_name: "heart",
                    short_names: ["heart"]
                }, {
                    short_name: "yellow_heart",
                    short_names: ["yellow_heart"]
                }, {
                    short_name: "green_heart",
                    short_names: ["green_heart"]
                }, {
                    short_name: "blue_heart",
                    short_names: ["blue_heart"]
                }, {
                    short_name: "purple_heart",
                    short_names: ["purple_heart"]
                }, {
                    short_name: "broken_heart",
                    short_names: ["broken_heart"]
                }, {
                    short_name: "heavy_heart_exclamation_mark_ornament",
                    short_names: ["heavy_heart_exclamation_mark_ornament"]
                }, {
                    short_name: "two_hearts",
                    short_names: ["two_hearts"]
                }, {
                    short_name: "revolving_hearts",
                    short_names: ["revolving_hearts"]
                }, {
                    short_name: "heartbeat",
                    short_names: ["heartbeat"]
                }, {
                    short_name: "heartpulse",
                    short_names: ["heartpulse"]
                }, {
                    short_name: "sparkling_heart",
                    short_names: ["sparkling_heart"]
                }, {
                    short_name: "cupid",
                    short_names: ["cupid"]
                }, {
                    short_name: "gift_heart",
                    short_names: ["gift_heart"]
                }, {
                    short_name: "heart_decoration",
                    short_names: ["heart_decoration"]
                }, {
                    short_name: "peace_symbol",
                    short_names: ["peace_symbol"]
                }, {
                    short_name: "latin_cross",
                    short_names: ["latin_cross"]
                }, {
                    short_name: "star_and_crescent",
                    short_names: ["star_and_crescent"]
                }, {
                    short_name: "om_symbol",
                    short_names: ["om_symbol"]
                }, {
                    short_name: "wheel_of_dharma",
                    short_names: ["wheel_of_dharma"]
                }, {
                    short_name: "star_of_david",
                    short_names: ["star_of_david"]
                }, {
                    short_name: "six_pointed_star",
                    short_names: ["six_pointed_star"]
                }, {
                    short_name: "menorah_with_nine_branches",
                    short_names: ["menorah_with_nine_branches"]
                }, {
                    short_name: "yin_yang",
                    short_names: ["yin_yang"]
                }, {
                    short_name: "orthodox_cross",
                    short_names: ["orthodox_cross"]
                }, {
                    short_name: "place_of_worship",
                    short_names: ["place_of_worship"]
                }, {
                    short_name: "ophiuchus",
                    short_names: ["ophiuchus"]
                }, {
                    short_name: "aries",
                    short_names: ["aries"]
                }, {
                    short_name: "taurus",
                    short_names: ["taurus"]
                }, {
                    short_name: "gemini",
                    short_names: ["gemini"]
                }, {
                    short_name: "cancer",
                    short_names: ["cancer"]
                }, {
                    short_name: "leo",
                    short_names: ["leo"]
                }, {
                    short_name: "virgo",
                    short_names: ["virgo"]
                }, {
                    short_name: "libra",
                    short_names: ["libra"]
                }, {
                    short_name: "scorpius",
                    short_names: ["scorpius"]
                }, {
                    short_name: "sagittarius",
                    short_names: ["sagittarius"]
                }, {
                    short_name: "capricorn",
                    short_names: ["capricorn"]
                }, {
                    short_name: "aquarius",
                    short_names: ["aquarius"]
                }, {
                    short_name: "pisces",
                    short_names: ["pisces"]
                }, {
                    short_name: "id",
                    short_names: ["id"]
                }, {
                    short_name: "atom_symbol",
                    short_names: ["atom_symbol"]
                }, {
                    short_name: "u7a7a",
                    short_names: ["u7a7a"]
                }, {
                    short_name: "u5272",
                    short_names: ["u5272"]
                }, {
                    short_name: "radioactive_sign",
                    short_names: ["radioactive_sign"]
                }, {
                    short_name: "biohazard_sign",
                    short_names: ["biohazard_sign"]
                }, {
                    short_name: "mobile_phone_off",
                    short_names: ["mobile_phone_off"]
                }, {
                    short_name: "vibration_mode",
                    short_names: ["vibration_mode"]
                }, {
                    short_name: "u6709",
                    short_names: ["u6709"]
                }, {
                    short_name: "u7121",
                    short_names: ["u7121"]
                }, {
                    short_name: "u7533",
                    short_names: ["u7533"]
                }, {
                    short_name: "u55b6",
                    short_names: ["u55b6"]
                }, {
                    short_name: "u6708",
                    short_names: ["u6708"]
                }, {
                    short_name: "eight_pointed_black_star",
                    short_names: ["eight_pointed_black_star"]
                }, {
                    short_name: "vs",
                    short_names: ["vs"]
                }, {
                    short_name: "accept",
                    short_names: ["accept"]
                }, {
                    short_name: "white_flower",
                    short_names: ["white_flower"]
                }, {
                    short_name: "ideograph_advantage",
                    short_names: ["ideograph_advantage"]
                }, {
                    short_name: "secret",
                    short_names: ["secret"]
                }, {
                    short_name: "congratulations",
                    short_names: ["congratulations"]
                }, {
                    short_name: "u5408",
                    short_names: ["u5408"]
                }, {
                    short_name: "u6e80",
                    short_names: ["u6e80"]
                }, {
                    short_name: "u7981",
                    short_names: ["u7981"]
                }, {
                    short_name: "a",
                    short_names: ["a"]
                }, {
                    short_name: "b",
                    short_names: ["b"]
                }, {
                    short_name: "ab",
                    short_names: ["ab"]
                }, {
                    short_name: "cl",
                    short_names: ["cl"]
                }, {
                    short_name: "o2",
                    short_names: ["o2"]
                }, {
                    short_name: "sos",
                    short_names: ["sos"]
                }, {
                    short_name: "no_entry",
                    short_names: ["no_entry"]
                }, {
                    short_name: "name_badge",
                    short_names: ["name_badge"]
                }, {
                    short_name: "no_entry_sign",
                    short_names: ["no_entry_sign"]
                }, {
                    short_name: "x",
                    short_names: ["x"]
                }, {
                    short_name: "o",
                    short_names: ["o"]
                }, {
                    short_name: "anger",
                    short_names: ["anger"]
                }, {
                    short_name: "hotsprings",
                    short_names: ["hotsprings"]
                }, {
                    short_name: "no_pedestrians",
                    short_names: ["no_pedestrians"]
                }, {
                    short_name: "do_not_litter",
                    short_names: ["do_not_litter"]
                }, {
                    short_name: "no_bicycles",
                    short_names: ["no_bicycles"]
                }, {
                    short_name: "non-potable_water",
                    short_names: ["non-potable_water"]
                }, {
                    short_name: "underage",
                    short_names: ["underage"]
                }, {
                    short_name: "no_mobile_phones",
                    short_names: ["no_mobile_phones"]
                }, {
                    short_name: "exclamation",
                    short_names: ["exclamation", "heavy_exclamation_mark"]
                }, {
                    short_name: "grey_exclamation",
                    short_names: ["grey_exclamation"]
                }, {
                    short_name: "question",
                    short_names: ["question"]
                }, {
                    short_name: "grey_question",
                    short_names: ["grey_question"]
                }, {
                    short_name: "bangbang",
                    short_names: ["bangbang"]
                }, {
                    short_name: "interrobang",
                    short_names: ["interrobang"]
                }, {
                    short_name: "100",
                    short_names: ["100"]
                }, {
                    short_name: "low_brightness",
                    short_names: ["low_brightness"]
                }, {
                    short_name: "high_brightness",
                    short_names: ["high_brightness"]
                }, {
                    short_name: "trident",
                    short_names: ["trident"]
                }, {
                    short_name: "fleur_de_lis",
                    short_names: ["fleur_de_lis"]
                }, {
                    short_name: "part_alternation_mark",
                    short_names: ["part_alternation_mark"]
                }, {
                    short_name: "warning",
                    short_names: ["warning"]
                }, {
                    short_name: "children_crossing",
                    short_names: ["children_crossing"]
                }, {
                    short_name: "beginner",
                    short_names: ["beginner"]
                }, {
                    short_name: "recycle",
                    short_names: ["recycle"]
                }, {
                    short_name: "u6307",
                    short_names: ["u6307"]
                }, {
                    short_name: "chart",
                    short_names: ["chart"]
                }, {
                    short_name: "sparkle",
                    short_names: ["sparkle"]
                }, {
                    short_name: "eight_spoked_asterisk",
                    short_names: ["eight_spoked_asterisk"]
                }, {
                    short_name: "negative_squared_cross_mark",
                    short_names: ["negative_squared_cross_mark"]
                }, {
                    short_name: "white_check_mark",
                    short_names: ["white_check_mark"]
                }, {
                    short_name: "diamond_shape_with_a_dot_inside",
                    short_names: ["diamond_shape_with_a_dot_inside"]
                }, {
                    short_name: "cyclone",
                    short_names: ["cyclone"]
                }, {
                    short_name: "loop",
                    short_names: ["loop"]
                }, {
                    short_name: "globe_with_meridians",
                    short_names: ["globe_with_meridians"]
                }, {
                    short_name: "m",
                    short_names: ["m"]
                }, {
                    short_name: "atm",
                    short_names: ["atm"]
                }, {
                    short_name: "sa",
                    short_names: ["sa"]
                }, {
                    short_name: "passport_control",
                    short_names: ["passport_control"]
                }, {
                    short_name: "customs",
                    short_names: ["customs"]
                }, {
                    short_name: "baggage_claim",
                    short_names: ["baggage_claim"]
                }, {
                    short_name: "left_luggage",
                    short_names: ["left_luggage"]
                }, {
                    short_name: "wheelchair",
                    short_names: ["wheelchair"]
                }, {
                    short_name: "no_smoking",
                    short_names: ["no_smoking"]
                }, {
                    short_name: "wc",
                    short_names: ["wc"]
                }, {
                    short_name: "parking",
                    short_names: ["parking"]
                }, {
                    short_name: "potable_water",
                    short_names: ["potable_water"]
                }, {
                    short_name: "mens",
                    short_names: ["mens"]
                }, {
                    short_name: "womens",
                    short_names: ["womens"]
                }, {
                    short_name: "baby_symbol",
                    short_names: ["baby_symbol"]
                }, {
                    short_name: "restroom",
                    short_names: ["restroom"]
                }, {
                    short_name: "put_litter_in_its_place",
                    short_names: ["put_litter_in_its_place"]
                }, {
                    short_name: "cinema",
                    short_names: ["cinema"]
                }, {
                    short_name: "signal_strength",
                    short_names: ["signal_strength"]
                }, {
                    short_name: "koko",
                    short_names: ["koko"]
                }, {
                    short_name: "ng",
                    short_names: ["ng"]
                }, {
                    short_name: "ok",
                    short_names: ["ok"]
                }, {
                    short_name: "up",
                    short_names: ["up"]
                }, {
                    short_name: "cool",
                    short_names: ["cool"]
                }, {
                    short_name: "new",
                    short_names: ["new"]
                }, {
                    short_name: "free",
                    short_names: ["free"]
                }, {
                    short_name: "zero",
                    short_names: ["zero"]
                }, {
                    short_name: "one",
                    short_names: ["one"]
                }, {
                    short_name: "two",
                    short_names: ["two"]
                }, {
                    short_name: "three",
                    short_names: ["three"]
                }, {
                    short_name: "four",
                    short_names: ["four"]
                }, {
                    short_name: "five",
                    short_names: ["five"]
                }, {
                    short_name: "six",
                    short_names: ["six"]
                }, {
                    short_name: "seven",
                    short_names: ["seven"]
                }, {
                    short_name: "eight",
                    short_names: ["eight"]
                }, {
                    short_name: "nine",
                    short_names: ["nine"]
                }, {
                    short_name: "keycap_ten",
                    short_names: ["keycap_ten"]
                }, {
                    name: null,
                    short_name: "keycap_star",
                    short_names: ["keycap_star"]
                }, {
                    short_name: "1234",
                    short_names: ["1234"]
                }, {
                    short_name: "arrow_forward",
                    short_names: ["arrow_forward"]
                }, {
                    short_name: "double_vertical_bar",
                    short_names: ["double_vertical_bar"]
                }, {
                    short_name: "black_right_pointing_triangle_with_double_vertical_bar",
                    short_names: ["black_right_pointing_triangle_with_double_vertical_bar"]
                }, {
                    short_name: "black_square_for_stop",
                    short_names: ["black_square_for_stop"]
                }, {
                    short_name: "eject",
                    short_names: ["eject"]
                }, {
                    short_name: "black_circle_for_record",
                    short_names: ["black_circle_for_record"]
                }, {
                    short_name: "black_right_pointing_double_triangle_with_vertical_bar",
                    short_names: ["black_right_pointing_double_triangle_with_vertical_bar"]
                }, {
                    short_name: "black_left_pointing_double_triangle_with_vertical_bar",
                    short_names: ["black_left_pointing_double_triangle_with_vertical_bar"]
                }, {
                    short_name: "fast_forward",
                    short_names: ["fast_forward"]
                }, {
                    short_name: "rewind",
                    short_names: ["rewind"]
                }, {
                    short_name: "twisted_rightwards_arrows",
                    short_names: ["twisted_rightwards_arrows"]
                }, {
                    short_name: "repeat",
                    short_names: ["repeat"]
                }, {
                    short_name: "repeat_one",
                    short_names: ["repeat_one"]
                }, {
                    short_name: "arrow_backward",
                    short_names: ["arrow_backward"]
                }, {
                    short_name: "arrow_up_small",
                    short_names: ["arrow_up_small"]
                }, {
                    short_name: "arrow_down_small",
                    short_names: ["arrow_down_small"]
                }, {
                    short_name: "arrow_double_up",
                    short_names: ["arrow_double_up"]
                }, {
                    short_name: "arrow_double_down",
                    short_names: ["arrow_double_down"]
                }, {
                    short_name: "arrow_right",
                    short_names: ["arrow_right"]
                }, {
                    short_name: "arrow_left",
                    short_names: ["arrow_left"]
                }, {
                    short_name: "arrow_up",
                    short_names: ["arrow_up"]
                }, {
                    short_name: "arrow_down",
                    short_names: ["arrow_down"]
                }, {
                    short_name: "arrow_upper_right",
                    short_names: ["arrow_upper_right"]
                }, {
                    short_name: "arrow_lower_right",
                    short_names: ["arrow_lower_right"]
                }, {
                    short_name: "arrow_lower_left",
                    short_names: ["arrow_lower_left"]
                }, {
                    short_name: "arrow_upper_left",
                    short_names: ["arrow_upper_left"]
                }, {
                    short_name: "arrow_up_down",
                    short_names: ["arrow_up_down"]
                }, {
                    short_name: "left_right_arrow",
                    short_names: ["left_right_arrow"]
                }, {
                    short_name: "arrows_counterclockwise",
                    short_names: ["arrows_counterclockwise"]
                }, {
                    short_name: "arrow_right_hook",
                    short_names: ["arrow_right_hook"]
                }, {
                    short_name: "leftwards_arrow_with_hook",
                    short_names: ["leftwards_arrow_with_hook"]
                }, {
                    short_name: "arrow_heading_up",
                    short_names: ["arrow_heading_up"]
                }, {
                    short_name: "arrow_heading_down",
                    short_names: ["arrow_heading_down"]
                }, {
                    short_name: "hash",
                    short_names: ["hash"]
                }, {
                    short_name: "information_source",
                    short_names: ["information_source"]
                }, {
                    short_name: "abc",
                    short_names: ["abc"]
                }, {
                    short_name: "abcd",
                    short_names: ["abcd"]
                }, {
                    short_name: "capital_abcd",
                    short_names: ["capital_abcd"]
                }, {
                    short_name: "symbols",
                    short_names: ["symbols"]
                }, {
                    short_name: "musical_note",
                    short_names: ["musical_note"]
                }, {
                    short_name: "notes",
                    short_names: ["notes"]
                }, {
                    short_name: "wavy_dash",
                    short_names: ["wavy_dash"]
                }, {
                    short_name: "curly_loop",
                    short_names: ["curly_loop"]
                }, {
                    short_name: "heavy_check_mark",
                    short_names: ["heavy_check_mark"]
                }, {
                    short_name: "arrows_clockwise",
                    short_names: ["arrows_clockwise"]
                }, {
                    short_name: "heavy_plus_sign",
                    short_names: ["heavy_plus_sign"]
                }, {
                    short_name: "heavy_minus_sign",
                    short_names: ["heavy_minus_sign"]
                }, {
                    short_name: "heavy_division_sign",
                    short_names: ["heavy_division_sign"]
                }, {
                    short_name: "heavy_multiplication_x",
                    short_names: ["heavy_multiplication_x"]
                }, {
                    short_name: "heavy_dollar_sign",
                    short_names: ["heavy_dollar_sign"]
                }, {
                    short_name: "currency_exchange",
                    short_names: ["currency_exchange"]
                }, {
                    short_name: "copyright",
                    short_names: ["copyright"]
                }, {
                    short_name: "registered",
                    short_names: ["registered"]
                }, {
                    short_name: "tm",
                    short_names: ["tm"]
                }, {
                    short_name: "end",
                    short_names: ["end"]
                }, {
                    short_name: "back",
                    short_names: ["back"]
                }, {
                    short_name: "on",
                    short_names: ["on"]
                }, {
                    short_name: "top",
                    short_names: ["top"]
                }, {
                    short_name: "soon",
                    short_names: ["soon"]
                }, {
                    short_name: "ballot_box_with_check",
                    short_names: ["ballot_box_with_check"]
                }, {
                    short_name: "radio_button",
                    short_names: ["radio_button"]
                }, {
                    short_name: "white_circle",
                    short_names: ["white_circle"]
                }, {
                    short_name: "black_circle",
                    short_names: ["black_circle"]
                }, {
                    short_name: "red_circle",
                    short_names: ["red_circle"]
                }, {
                    short_name: "large_blue_circle",
                    short_names: ["large_blue_circle"]
                }, {
                    short_name: "small_orange_diamond",
                    short_names: ["small_orange_diamond"]
                }, {
                    short_name: "small_blue_diamond",
                    short_names: ["small_blue_diamond"]
                }, {
                    short_name: "large_orange_diamond",
                    short_names: ["large_orange_diamond"]
                }, {
                    short_name: "large_blue_diamond",
                    short_names: ["large_blue_diamond"]
                }, {
                    short_name: "small_red_triangle",
                    short_names: ["small_red_triangle"]
                }, {
                    short_name: "black_small_square",
                    short_names: ["black_small_square"]
                }, {
                    short_name: "white_small_square",
                    short_names: ["white_small_square"]
                }, {
                    short_name: "black_large_square",
                    short_names: ["black_large_square"]
                }, {
                    short_name: "white_large_square",
                    short_names: ["white_large_square"]
                }, {
                    short_name: "small_red_triangle_down",
                    short_names: ["small_red_triangle_down"]
                }, {
                    short_name: "black_medium_square",
                    short_names: ["black_medium_square"]
                }, {
                    short_name: "white_medium_square",
                    short_names: ["white_medium_square"]
                }, {
                    short_name: "black_medium_small_square",
                    short_names: ["black_medium_small_square"]
                }, {
                    short_name: "white_medium_small_square",
                    short_names: ["white_medium_small_square"]
                }, {
                    short_name: "black_square_button",
                    short_names: ["black_square_button"]
                }, {
                    short_name: "white_square_button",
                    short_names: ["white_square_button"]
                }, {
                    short_name: "speaker",
                    short_names: ["speaker"]
                }, {
                    short_name: "sound",
                    short_names: ["sound"]
                }, {
                    short_name: "loud_sound",
                    short_names: ["loud_sound"]
                }, {
                    short_name: "mute",
                    short_names: ["mute"]
                }, {
                    short_name: "mega",
                    short_names: ["mega"]
                }, {
                    short_name: "loudspeaker",
                    short_names: ["loudspeaker"]
                }, {
                    short_name: "bell",
                    short_names: ["bell"]
                }, {
                    short_name: "no_bell",
                    short_names: ["no_bell"]
                }, {
                    short_name: "black_joker",
                    short_names: ["black_joker"]
                }, {
                    short_name: "mahjong",
                    short_names: ["mahjong"]
                }, {
                    short_name: "spades",
                    short_names: ["spades"]
                }, {
                    short_name: "clubs",
                    short_names: ["clubs"]
                }, {
                    short_name: "hearts",
                    short_names: ["hearts"]
                }, {
                    short_name: "diamonds",
                    short_names: ["diamonds"]
                }, {
                    short_name: "flower_playing_cards",
                    short_names: ["flower_playing_cards"]
                }, {
                    short_name: "thought_balloon",
                    short_names: ["thought_balloon"]
                }, {
                    short_name: "right_anger_bubble",
                    short_names: ["right_anger_bubble"]
                }, {
                    short_name: "speech_balloon",
                    short_names: ["speech_balloon"]
                }, {
                    short_name: "left_speech_bubble",
                    short_names: ["left_speech_bubble"]
                }, {
                    short_name: "clock1",
                    short_names: ["clock1"]
                }, {
                    short_name: "clock2",
                    short_names: ["clock2"]
                }, {
                    short_name: "clock3",
                    short_names: ["clock3"]
                }, {
                    short_name: "clock4",
                    short_names: ["clock4"]
                }, {
                    short_name: "clock5",
                    short_names: ["clock5"]
                }, {
                    short_name: "clock6",
                    short_names: ["clock6"]
                }, {
                    short_name: "clock7",
                    short_names: ["clock7"]
                }, {
                    short_name: "clock8",
                    short_names: ["clock8"]
                }, {
                    short_name: "clock9",
                    short_names: ["clock9"]
                }, {
                    short_name: "clock10",
                    short_names: ["clock10"]
                }, {
                    short_name: "clock11",
                    short_names: ["clock11"]
                }, {
                    short_name: "clock12",
                    short_names: ["clock12"]
                }, {
                    short_name: "clock130",
                    short_names: ["clock130"]
                }, {
                    short_name: "clock230",
                    short_names: ["clock230"]
                }, {
                    short_name: "clock330",
                    short_names: ["clock330"]
                }, {
                    short_name: "clock430",
                    short_names: ["clock430"]
                }, {
                    short_name: "clock530",
                    short_names: ["clock530"]
                }, {
                    short_name: "clock630",
                    short_names: ["clock630"]
                }, {
                    short_name: "clock730",
                    short_names: ["clock730"]
                }, {
                    short_name: "clock830",
                    short_names: ["clock830"]
                }, {
                    short_name: "clock930",
                    short_names: ["clock930"]
                }, {
                    short_name: "clock1030",
                    short_names: ["clock1030"]
                }, {
                    short_name: "clock1130",
                    short_names: ["clock1130"]
                }, {
                    short_name: "clock1230",
                    short_names: ["clock1230"]
                }],
                Objects: [{
                    short_name: "watch",
                    short_names: ["watch"]
                }, {
                    short_name: "iphone",
                    short_names: ["iphone"]
                }, {
                    short_name: "calling",
                    short_names: ["calling"]
                }, {
                    short_name: "computer",
                    short_names: ["computer"]
                }, {
                    short_name: "keyboard",
                    short_names: ["keyboard"]
                }, {
                    short_name: "desktop_computer",
                    short_names: ["desktop_computer"]
                }, {
                    short_name: "printer",
                    short_names: ["printer"]
                }, {
                    short_name: "three_button_mouse",
                    short_names: ["three_button_mouse"]
                }, {
                    short_name: "trackball",
                    short_names: ["trackball"]
                }, {
                    short_name: "joystick",
                    short_names: ["joystick"]
                }, {
                    short_name: "compression",
                    short_names: ["compression"]
                }, {
                    short_name: "minidisc",
                    short_names: ["minidisc"]
                }, {
                    short_name: "floppy_disk",
                    short_names: ["floppy_disk"]
                }, {
                    short_name: "cd",
                    short_names: ["cd"]
                }, {
                    short_name: "dvd",
                    short_names: ["dvd"]
                }, {
                    short_name: "vhs",
                    short_names: ["vhs"]
                }, {
                    short_name: "camera",
                    short_names: ["camera"]
                }, {
                    short_name: "camera_with_flash",
                    short_names: ["camera_with_flash"]
                }, {
                    short_name: "video_camera",
                    short_names: ["video_camera"]
                }, {
                    short_name: "movie_camera",
                    short_names: ["movie_camera"]
                }, {
                    short_name: "film_projector",
                    short_names: ["film_projector"]
                }, {
                    short_name: "film_frames",
                    short_names: ["film_frames"]
                }, {
                    short_name: "telephone_receiver",
                    short_names: ["telephone_receiver"]
                }, {
                    short_name: "phone",
                    short_names: ["phone", "telephone"]
                }, {
                    short_name: "pager",
                    short_names: ["pager"]
                }, {
                    short_name: "fax",
                    short_names: ["fax"]
                }, {
                    short_name: "tv",
                    short_names: ["tv"]
                }, {
                    short_name: "radio",
                    short_names: ["radio"]
                }, {
                    short_name: "studio_microphone",
                    short_names: ["studio_microphone"]
                }, {
                    short_name: "level_slider",
                    short_names: ["level_slider"]
                }, {
                    short_name: "control_knobs",
                    short_names: ["control_knobs"]
                }, {
                    short_name: "stopwatch",
                    short_names: ["stopwatch"]
                }, {
                    short_name: "timer_clock",
                    short_names: ["timer_clock"]
                }, {
                    short_name: "alarm_clock",
                    short_names: ["alarm_clock"]
                }, {
                    short_name: "mantelpiece_clock",
                    short_names: ["mantelpiece_clock"]
                }, {
                    short_name: "hourglass_flowing_sand",
                    short_names: ["hourglass_flowing_sand"]
                }, {
                    short_name: "hourglass",
                    short_names: ["hourglass"]
                }, {
                    short_name: "satellite_antenna",
                    short_names: ["satellite_antenna"]
                }, {
                    short_name: "battery",
                    short_names: ["battery"]
                }, {
                    short_name: "electric_plug",
                    short_names: ["electric_plug"]
                }, {
                    short_name: "bulb",
                    short_names: ["bulb"]
                }, {
                    short_name: "flashlight",
                    short_names: ["flashlight"]
                }, {
                    short_name: "candle",
                    short_names: ["candle"]
                }, {
                    short_name: "wastebasket",
                    short_names: ["wastebasket"]
                }, {
                    short_name: "oil_drum",
                    short_names: ["oil_drum"]
                }, {
                    short_name: "money_with_wings",
                    short_names: ["money_with_wings"]
                }, {
                    short_name: "dollar",
                    short_names: ["dollar"]
                }, {
                    short_name: "yen",
                    short_names: ["yen"]
                }, {
                    short_name: "euro",
                    short_names: ["euro"]
                }, {
                    short_name: "pound",
                    short_names: ["pound"]
                }, {
                    short_name: "moneybag",
                    short_names: ["moneybag"]
                }, {
                    short_name: "credit_card",
                    short_names: ["credit_card"]
                }, {
                    short_name: "gem",
                    short_names: ["gem"]
                }, {
                    short_name: "scales",
                    short_names: ["scales"]
                }, {
                    short_name: "wrench",
                    short_names: ["wrench"]
                }, {
                    short_name: "hammer",
                    short_names: ["hammer"]
                }, {
                    short_name: "hammer_and_pick",
                    short_names: ["hammer_and_pick"]
                }, {
                    short_name: "hammer_and_wrench",
                    short_names: ["hammer_and_wrench"]
                }, {
                    short_name: "pick",
                    short_names: ["pick"]
                }, {
                    short_name: "nut_and_bolt",
                    short_names: ["nut_and_bolt"]
                }, {
                    short_name: "gear",
                    short_names: ["gear"]
                }, {
                    short_name: "chains",
                    short_names: ["chains"]
                }, {
                    short_name: "gun",
                    short_names: ["gun"]
                }, {
                    short_name: "bomb",
                    short_names: ["bomb"]
                }, {
                    short_name: "hocho",
                    short_names: ["hocho", "knife"]
                }, {
                    short_name: "dagger_knife",
                    short_names: ["dagger_knife"]
                }, {
                    short_name: "crossed_swords",
                    short_names: ["crossed_swords"]
                }, {
                    short_name: "shield",
                    short_names: ["shield"]
                }, {
                    short_name: "smoking",
                    short_names: ["smoking"]
                }, {
                    short_name: "skull_and_crossbones",
                    short_names: ["skull_and_crossbones"]
                }, {
                    short_name: "coffin",
                    short_names: ["coffin"]
                }, {
                    short_name: "funeral_urn",
                    short_names: ["funeral_urn"]
                }, {
                    short_name: "amphora",
                    short_names: ["amphora"]
                }, {
                    short_name: "crystal_ball",
                    short_names: ["crystal_ball"]
                }, {
                    short_name: "prayer_beads",
                    short_names: ["prayer_beads"]
                }, {
                    short_name: "barber",
                    short_names: ["barber"]
                }, {
                    short_name: "alembic",
                    short_names: ["alembic"]
                }, {
                    short_name: "telescope",
                    short_names: ["telescope"]
                }, {
                    short_name: "microscope",
                    short_names: ["microscope"]
                }, {
                    short_name: "hole",
                    short_names: ["hole"]
                }, {
                    short_name: "pill",
                    short_names: ["pill"]
                }, {
                    short_name: "syringe",
                    short_names: ["syringe"]
                }, {
                    short_name: "thermometer",
                    short_names: ["thermometer"]
                }, {
                    short_name: "label",
                    short_names: ["label"]
                }, {
                    short_name: "bookmark",
                    short_names: ["bookmark"]
                }, {
                    short_name: "toilet",
                    short_names: ["toilet"]
                }, {
                    short_name: "shower",
                    short_names: ["shower"]
                }, {
                    short_name: "bathtub",
                    short_names: ["bathtub"]
                }, {
                    short_name: "key",
                    short_names: ["key"]
                }, {
                    short_name: "old_key",
                    short_names: ["old_key"]
                }, {
                    short_name: "couch_and_lamp",
                    short_names: ["couch_and_lamp"]
                }, {
                    short_name: "sleeping_accommodation",
                    short_names: ["sleeping_accommodation"]
                }, {
                    short_name: "bed",
                    short_names: ["bed"]
                }, {
                    short_name: "door",
                    short_names: ["door"]
                }, {
                    short_name: "bellhop_bell",
                    short_names: ["bellhop_bell"]
                }, {
                    short_name: "frame_with_picture",
                    short_names: ["frame_with_picture"]
                }, {
                    short_name: "world_map",
                    short_names: ["world_map"]
                }, {
                    short_name: "umbrella_on_ground",
                    short_names: ["umbrella_on_ground"]
                }, {
                    short_name: "moyai",
                    short_names: ["moyai"]
                }, {
                    short_name: "shopping_bags",
                    short_names: ["shopping_bags"]
                }, {
                    short_name: "balloon",
                    short_names: ["balloon"]
                }, {
                    short_name: "flags",
                    short_names: ["flags"]
                }, {
                    short_name: "ribbon",
                    short_names: ["ribbon"]
                }, {
                    short_name: "gift",
                    short_names: ["gift"]
                }, {
                    short_name: "confetti_ball",
                    short_names: ["confetti_ball"]
                }, {
                    short_name: "tada",
                    short_names: ["tada"]
                }, {
                    short_name: "dolls",
                    short_names: ["dolls"]
                }, {
                    short_name: "wind_chime",
                    short_names: ["wind_chime"]
                }, {
                    short_name: "crossed_flags",
                    short_names: ["crossed_flags"]
                }, {
                    short_name: "izakaya_lantern",
                    short_names: ["izakaya_lantern", "lantern"]
                }, {
                    short_name: "email",
                    short_names: ["email", "envelope"]
                }, {
                    short_name: "envelope_with_arrow",
                    short_names: ["envelope_with_arrow"]
                }, {
                    short_name: "incoming_envelope",
                    short_names: ["incoming_envelope"]
                }, {
                    short_name: "e-mail",
                    short_names: ["e-mail"]
                }, {
                    short_name: "love_letter",
                    short_names: ["love_letter"]
                }, {
                    short_name: "postbox",
                    short_names: ["postbox"]
                }, {
                    short_name: "mailbox_closed",
                    short_names: ["mailbox_closed"]
                }, {
                    short_name: "mailbox",
                    short_names: ["mailbox"]
                }, {
                    short_name: "mailbox_with_mail",
                    short_names: ["mailbox_with_mail"]
                }, {
                    short_name: "mailbox_with_no_mail",
                    short_names: ["mailbox_with_no_mail"]
                }, {
                    short_name: "package",
                    short_names: ["package"]
                }, {
                    short_name: "postal_horn",
                    short_names: ["postal_horn"]
                }, {
                    short_name: "inbox_tray",
                    short_names: ["inbox_tray"]
                }, {
                    short_name: "outbox_tray",
                    short_names: ["outbox_tray"]
                }, {
                    short_name: "scroll",
                    short_names: ["scroll"]
                }, {
                    short_name: "page_with_curl",
                    short_names: ["page_with_curl"]
                }, {
                    short_name: "bookmark_tabs",
                    short_names: ["bookmark_tabs"]
                }, {
                    short_name: "bar_chart",
                    short_names: ["bar_chart"]
                }, {
                    short_name: "chart_with_upwards_trend",
                    short_names: ["chart_with_upwards_trend"]
                }, {
                    short_name: "chart_with_downwards_trend",
                    short_names: ["chart_with_downwards_trend"]
                }, {
                    short_name: "page_facing_up",
                    short_names: ["page_facing_up"]
                }, {
                    short_name: "date",
                    short_names: ["date"]
                }, {
                    short_name: "calendar",
                    short_names: ["calendar"]
                }, {
                    short_name: "spiral_calendar_pad",
                    short_names: ["spiral_calendar_pad"]
                }, {
                    short_name: "card_index",
                    short_names: ["card_index"]
                }, {
                    short_name: "card_file_box",
                    short_names: ["card_file_box"]
                }, {
                    short_name: "ballot_box_with_ballot",
                    short_names: ["ballot_box_with_ballot"]
                }, {
                    short_name: "file_cabinet",
                    short_names: ["file_cabinet"]
                }, {
                    short_name: "clipboard",
                    short_names: ["clipboard"]
                }, {
                    short_name: "spiral_note_pad",
                    short_names: ["spiral_note_pad"]
                }, {
                    short_name: "file_folder",
                    short_names: ["file_folder"]
                }, {
                    short_name: "open_file_folder",
                    short_names: ["open_file_folder"]
                }, {
                    short_name: "card_index_dividers",
                    short_names: ["card_index_dividers"]
                }, {
                    short_name: "rolled_up_newspaper",
                    short_names: ["rolled_up_newspaper"]
                }, {
                    short_name: "newspaper",
                    short_names: ["newspaper"]
                }, {
                    short_name: "notebook",
                    short_names: ["notebook"]
                }, {
                    short_name: "closed_book",
                    short_names: ["closed_book"]
                }, {
                    short_name: "green_book",
                    short_names: ["green_book"]
                }, {
                    short_name: "blue_book",
                    short_names: ["blue_book"]
                }, {
                    short_name: "orange_book",
                    short_names: ["orange_book"]
                }, {
                    short_name: "notebook_with_decorative_cover",
                    short_names: ["notebook_with_decorative_cover"]
                }, {
                    short_name: "ledger",
                    short_names: ["ledger"]
                }, {
                    short_name: "books",
                    short_names: ["books"]
                }, {
                    short_name: "book",
                    short_names: ["book", "open_book"]
                }, {
                    short_name: "link",
                    short_names: ["link"]
                }, {
                    short_name: "paperclip",
                    short_names: ["paperclip"]
                }, {
                    short_name: "linked_paperclips",
                    short_names: ["linked_paperclips"]
                }, {
                    short_name: "scissors",
                    short_names: ["scissors"]
                }, {
                    short_name: "triangular_ruler",
                    short_names: ["triangular_ruler"]
                }, {
                    short_name: "straight_ruler",
                    short_names: ["straight_ruler"]
                }, {
                    short_name: "pushpin",
                    short_names: ["pushpin"]
                }, {
                    short_name: "round_pushpin",
                    short_names: ["round_pushpin"]
                }, {
                    short_name: "triangular_flag_on_post",
                    short_names: ["triangular_flag_on_post"]
                }, {
                    short_name: "waving_white_flag",
                    short_names: ["waving_white_flag"]
                }, {
                    short_name: "waving_black_flag",
                    short_names: ["waving_black_flag"]
                }, {
                    short_name: "closed_lock_with_key",
                    short_names: ["closed_lock_with_key"]
                }, {
                    short_name: "lock",
                    short_names: ["lock"]
                }, {
                    short_name: "unlock",
                    short_names: ["unlock"]
                }, {
                    short_name: "lock_with_ink_pen",
                    short_names: ["lock_with_ink_pen"]
                }, {
                    short_name: "lower_left_ballpoint_pen",
                    short_names: ["lower_left_ballpoint_pen"]
                }, {
                    short_name: "lower_left_fountain_pen",
                    short_names: ["lower_left_fountain_pen"]
                }, {
                    short_name: "black_nib",
                    short_names: ["black_nib"]
                }, {
                    short_name: "memo",
                    short_names: ["memo", "pencil"]
                }, {
                    short_name: "pencil2",
                    short_names: ["pencil2"]
                }, {
                    short_name: "lower_left_crayon",
                    short_names: ["lower_left_crayon"]
                }, {
                    short_name: "lower_left_paintbrush",
                    short_names: ["lower_left_paintbrush"]
                }, {
                    short_name: "mag",
                    short_names: ["mag"]
                }, {
                    short_name: "mag_right",
                    short_names: ["mag_right"]
                }],
                Nature: [{
                    short_name: "dog",
                    short_names: ["dog"]
                }, {
                    short_name: "cat",
                    short_names: ["cat"]
                }, {
                    short_name: "mouse",
                    short_names: ["mouse"]
                }, {
                    short_name: "hamster",
                    short_names: ["hamster"]
                }, {
                    short_name: "rabbit",
                    short_names: ["rabbit"]
                }, {
                    short_name: "bear",
                    short_names: ["bear"]
                }, {
                    short_name: "panda_face",
                    short_names: ["panda_face"]
                }, {
                    short_name: "koala",
                    short_names: ["koala"]
                }, {
                    short_name: "tiger",
                    short_names: ["tiger"]
                }, {
                    short_name: "lion_face",
                    short_names: ["lion_face"]
                }, {
                    short_name: "cow",
                    short_names: ["cow"]
                }, {
                    short_name: "pig",
                    short_names: ["pig"]
                }, {
                    short_name: "pig_nose",
                    short_names: ["pig_nose"]
                }, {
                    short_name: "frog",
                    short_names: ["frog"]
                }, {
                    short_name: "octopus",
                    short_names: ["octopus"]
                }, {
                    short_name: "monkey_face",
                    short_names: ["monkey_face"]
                }, {
                    short_name: "see_no_evil",
                    short_names: ["see_no_evil"]
                }, {
                    short_name: "hear_no_evil",
                    short_names: ["hear_no_evil"]
                }, {
                    short_name: "speak_no_evil",
                    short_names: ["speak_no_evil"]
                }, {
                    short_name: "monkey",
                    short_names: ["monkey"]
                }, {
                    short_name: "chicken",
                    short_names: ["chicken"]
                }, {
                    short_name: "penguin",
                    short_names: ["penguin"]
                }, {
                    short_name: "bird",
                    short_names: ["bird"]
                }, {
                    short_name: "baby_chick",
                    short_names: ["baby_chick"]
                }, {
                    short_name: "hatching_chick",
                    short_names: ["hatching_chick"]
                }, {
                    short_name: "hatched_chick",
                    short_names: ["hatched_chick"]
                }, {
                    short_name: "wolf",
                    short_names: ["wolf"]
                }, {
                    short_name: "boar",
                    short_names: ["boar"]
                }, {
                    short_name: "horse",
                    short_names: ["horse"]
                }, {
                    short_name: "unicorn_face",
                    short_names: ["unicorn_face"]
                }, {
                    short_name: "bee",
                    short_names: ["bee", "honeybee"]
                }, {
                    short_name: "bug",
                    short_names: ["bug"]
                }, {
                    short_name: "snail",
                    short_names: ["snail"]
                }, {
                    short_name: "beetle",
                    short_names: ["beetle"]
                }, {
                    short_name: "ant",
                    short_names: ["ant"]
                }, {
                    short_name: "spider",
                    short_names: ["spider"]
                }, {
                    short_name: "scorpion",
                    short_names: ["scorpion"]
                }, {
                    short_name: "crab",
                    short_names: ["crab"]
                }, {
                    short_name: "snake",
                    short_names: ["snake"]
                }, {
                    short_name: "turtle",
                    short_names: ["turtle"]
                }, {
                    short_name: "tropical_fish",
                    short_names: ["tropical_fish"]
                }, {
                    short_name: "fish",
                    short_names: ["fish"]
                }, {
                    short_name: "blowfish",
                    short_names: ["blowfish"]
                }, {
                    short_name: "dolphin",
                    short_names: ["dolphin", "flipper"]
                }, {
                    short_name: "whale",
                    short_names: ["whale"]
                }, {
                    short_name: "whale2",
                    short_names: ["whale2"]
                }, {
                    short_name: "crocodile",
                    short_names: ["crocodile"]
                }, {
                    short_name: "leopard",
                    short_names: ["leopard"]
                }, {
                    short_name: "tiger2",
                    short_names: ["tiger2"]
                }, {
                    short_name: "water_buffalo",
                    short_names: ["water_buffalo"]
                }, {
                    short_name: "ox",
                    short_names: ["ox"]
                }, {
                    short_name: "cow2",
                    short_names: ["cow2"]
                }, {
                    short_name: "dromedary_camel",
                    short_names: ["dromedary_camel"]
                }, {
                    short_name: "camel",
                    short_names: ["camel"]
                }, {
                    short_name: "elephant",
                    short_names: ["elephant"]
                }, {
                    short_name: "goat",
                    short_names: ["goat"]
                }, {
                    short_name: "ram",
                    short_names: ["ram"]
                }, {
                    short_name: "sheep",
                    short_names: ["sheep"]
                }, {
                    short_name: "racehorse",
                    short_names: ["racehorse"]
                }, {
                    short_name: "pig2",
                    short_names: ["pig2"]
                }, {
                    short_name: "rat",
                    short_names: ["rat"]
                }, {
                    short_name: "mouse2",
                    short_names: ["mouse2"]
                }, {
                    short_name: "rooster",
                    short_names: ["rooster"]
                }, {
                    short_name: "turkey",
                    short_names: ["turkey"]
                }, {
                    short_name: "dove_of_peace",
                    short_names: ["dove_of_peace"]
                }, {
                    short_name: "dog2",
                    short_names: ["dog2"]
                }, {
                    short_name: "poodle",
                    short_names: ["poodle"]
                }, {
                    short_name: "cat2",
                    short_names: ["cat2"]
                }, {
                    short_name: "rabbit2",
                    short_names: ["rabbit2"]
                }, {
                    short_name: "chipmunk",
                    short_names: ["chipmunk"]
                }, {
                    short_name: "feet",
                    short_names: ["feet", "paw_prints"]
                }, {
                    short_name: "dragon",
                    short_names: ["dragon"]
                }, {
                    short_name: "dragon_face",
                    short_names: ["dragon_face"]
                }, {
                    short_name: "cactus",
                    short_names: ["cactus"]
                }, {
                    short_name: "christmas_tree",
                    short_names: ["christmas_tree"]
                }, {
                    short_name: "evergreen_tree",
                    short_names: ["evergreen_tree"]
                }, {
                    short_name: "deciduous_tree",
                    short_names: ["deciduous_tree"]
                }, {
                    short_name: "palm_tree",
                    short_names: ["palm_tree"]
                }, {
                    short_name: "seedling",
                    short_names: ["seedling"]
                }, {
                    short_name: "herb",
                    short_names: ["herb"]
                }, {
                    short_name: "shamrock",
                    short_names: ["shamrock"]
                }, {
                    short_name: "four_leaf_clover",
                    short_names: ["four_leaf_clover"]
                }, {
                    short_name: "bamboo",
                    short_names: ["bamboo"]
                }, {
                    short_name: "tanabata_tree",
                    short_names: ["tanabata_tree"]
                }, {
                    short_name: "leaves",
                    short_names: ["leaves"]
                }, {
                    short_name: "fallen_leaf",
                    short_names: ["fallen_leaf"]
                }, {
                    short_name: "maple_leaf",
                    short_names: ["maple_leaf"]
                }, {
                    short_name: "ear_of_rice",
                    short_names: ["ear_of_rice"]
                }, {
                    short_name: "hibiscus",
                    short_names: ["hibiscus"]
                }, {
                    short_name: "sunflower",
                    short_names: ["sunflower"]
                }, {
                    short_name: "rose",
                    short_names: ["rose"]
                }, {
                    short_name: "tulip",
                    short_names: ["tulip"]
                }, {
                    short_name: "blossom",
                    short_names: ["blossom"]
                }, {
                    short_name: "cherry_blossom",
                    short_names: ["cherry_blossom"]
                }, {
                    short_name: "bouquet",
                    short_names: ["bouquet"]
                }, {
                    short_name: "mushroom",
                    short_names: ["mushroom"]
                }, {
                    short_name: "chestnut",
                    short_names: ["chestnut"]
                }, {
                    short_name: "jack_o_lantern",
                    short_names: ["jack_o_lantern"]
                }, {
                    short_name: "shell",
                    short_names: ["shell"]
                }, {
                    short_name: "spider_web",
                    short_names: ["spider_web"]
                }, {
                    short_name: "earth_americas",
                    short_names: ["earth_americas"]
                }, {
                    short_name: "earth_africa",
                    short_names: ["earth_africa"]
                }, {
                    short_name: "earth_asia",
                    short_names: ["earth_asia"]
                }, {
                    short_name: "full_moon",
                    short_names: ["full_moon"]
                }, {
                    short_name: "waning_gibbous_moon",
                    short_names: ["waning_gibbous_moon"]
                }, {
                    short_name: "last_quarter_moon",
                    short_names: ["last_quarter_moon"]
                }, {
                    short_name: "waning_crescent_moon",
                    short_names: ["waning_crescent_moon"]
                }, {
                    short_name: "new_moon",
                    short_names: ["new_moon"]
                }, {
                    short_name: "waxing_crescent_moon",
                    short_names: ["waxing_crescent_moon"]
                }, {
                    short_name: "first_quarter_moon",
                    short_names: ["first_quarter_moon"]
                }, {
                    short_name: "moon",
                    short_names: ["moon", "waxing_gibbous_moon"]
                }, {
                    short_name: "new_moon_with_face",
                    short_names: ["new_moon_with_face"]
                }, {
                    short_name: "full_moon_with_face",
                    short_names: ["full_moon_with_face"]
                }, {
                    short_name: "first_quarter_moon_with_face",
                    short_names: ["first_quarter_moon_with_face"]
                }, {
                    short_name: "last_quarter_moon_with_face",
                    short_names: ["last_quarter_moon_with_face"]
                }, {
                    short_name: "sun_with_face",
                    short_names: ["sun_with_face"]
                }, {
                    short_name: "crescent_moon",
                    short_names: ["crescent_moon"]
                }, {
                    short_name: "star",
                    short_names: ["star"]
                }, {
                    short_name: "star2",
                    short_names: ["star2"]
                }, {
                    short_name: "dizzy",
                    short_names: ["dizzy"]
                }, {
                    short_name: "sparkles",
                    short_names: ["sparkles"]
                }, {
                    short_name: "comet",
                    short_names: ["comet"]
                }, {
                    short_name: "sunny",
                    short_names: ["sunny"]
                }, {
                    short_name: "mostly_sunny",
                    short_names: ["mostly_sunny", "sun_small_cloud"]
                }, {
                    short_name: "partly_sunny",
                    short_names: ["partly_sunny"]
                }, {
                    short_name: "barely_sunny",
                    short_names: ["barely_sunny", "sun_behind_cloud"]
                }, {
                    short_name: "partly_sunny_rain",
                    short_names: ["partly_sunny_rain", "sun_behind_rain_cloud"]
                }, {
                    short_name: "cloud",
                    short_names: ["cloud"]
                }, {
                    short_name: "rain_cloud",
                    short_names: ["rain_cloud"]
                }, {
                    short_name: "thunder_cloud_and_rain",
                    short_names: ["thunder_cloud_and_rain"]
                }, {
                    short_name: "lightning",
                    short_names: ["lightning", "lightning_cloud"]
                }, {
                    short_name: "zap",
                    short_names: ["zap"]
                }, {
                    short_name: "fire",
                    short_names: ["fire"]
                }, {
                    short_name: "boom",
                    short_names: ["boom", "collision"]
                }, {
                    short_name: "snowflake",
                    short_names: ["snowflake"]
                }, {
                    short_name: "snow_cloud",
                    short_names: ["snow_cloud"]
                }, {
                    short_name: "snowman",
                    short_names: ["snowman"]
                }, {
                    short_name: "snowman_without_snow",
                    short_names: ["snowman_without_snow"]
                }, {
                    short_name: "wind_blowing_face",
                    short_names: ["wind_blowing_face"]
                }, {
                    short_name: "dash",
                    short_names: ["dash"]
                }, {
                    short_name: "tornado",
                    short_names: ["tornado", "tornado_cloud"]
                }, {
                    short_name: "fog",
                    short_names: ["fog"]
                }, {
                    short_name: "umbrella",
                    short_names: ["umbrella"]
                }, {
                    short_name: "umbrella_with_rain_drops",
                    short_names: ["umbrella_with_rain_drops"]
                }, {
                    short_name: "droplet",
                    short_names: ["droplet"]
                }, {
                    short_name: "sweat_drops",
                    short_names: ["sweat_drops"]
                }, {
                    short_name: "ocean",
                    short_names: ["ocean"]
                }],
                Foods: [{
                    short_name: "green_apple",
                    short_names: ["green_apple"]
                }, {
                    short_name: "apple",
                    short_names: ["apple"]
                }, {
                    short_name: "pear",
                    short_names: ["pear"]
                }, {
                    short_name: "tangerine",
                    short_names: ["tangerine"]
                }, {
                    short_name: "lemon",
                    short_names: ["lemon"]
                }, {
                    short_name: "banana",
                    short_names: ["banana"]
                }, {
                    short_name: "watermelon",
                    short_names: ["watermelon"]
                }, {
                    short_name: "grapes",
                    short_names: ["grapes"]
                }, {
                    short_name: "strawberry",
                    short_names: ["strawberry"]
                }, {
                    short_name: "melon",
                    short_names: ["melon"]
                }, {
                    short_name: "cherries",
                    short_names: ["cherries"]
                }, {
                    short_name: "peach",
                    short_names: ["peach"]
                }, {
                    short_name: "pineapple",
                    short_names: ["pineapple"]
                }, {
                    short_name: "tomato",
                    short_names: ["tomato"]
                }, {
                    short_name: "eggplant",
                    short_names: ["eggplant"]
                }, {
                    short_name: "hot_pepper",
                    short_names: ["hot_pepper"]
                }, {
                    short_name: "corn",
                    short_names: ["corn"]
                }, {
                    short_name: "sweet_potato",
                    short_names: ["sweet_potato"]
                }, {
                    short_name: "honey_pot",
                    short_names: ["honey_pot"]
                }, {
                    short_name: "bread",
                    short_names: ["bread"]
                }, {
                    short_name: "cheese_wedge",
                    short_names: ["cheese_wedge"]
                }, {
                    short_name: "poultry_leg",
                    short_names: ["poultry_leg"]
                }, {
                    short_name: "meat_on_bone",
                    short_names: ["meat_on_bone"]
                }, {
                    short_name: "fried_shrimp",
                    short_names: ["fried_shrimp"]
                }, {
                    short_name: "egg",
                    short_names: ["egg"]
                }, {
                    short_name: "hamburger",
                    short_names: ["hamburger"]
                }, {
                    short_name: "fries",
                    short_names: ["fries"]
                }, {
                    short_name: "hotdog",
                    short_names: ["hotdog"]
                }, {
                    short_name: "pizza",
                    short_names: ["pizza"]
                }, {
                    short_name: "spaghetti",
                    short_names: ["spaghetti"]
                }, {
                    short_name: "taco",
                    short_names: ["taco"]
                }, {
                    short_name: "burrito",
                    short_names: ["burrito"]
                }, {
                    short_name: "ramen",
                    short_names: ["ramen"]
                }, {
                    short_name: "stew",
                    short_names: ["stew"]
                }, {
                    short_name: "fish_cake",
                    short_names: ["fish_cake"]
                }, {
                    short_name: "sushi",
                    short_names: ["sushi"]
                }, {
                    short_name: "bento",
                    short_names: ["bento"]
                }, {
                    short_name: "curry",
                    short_names: ["curry"]
                }, {
                    short_name: "rice_ball",
                    short_names: ["rice_ball"]
                }, {
                    short_name: "rice",
                    short_names: ["rice"]
                }, {
                    short_name: "rice_cracker",
                    short_names: ["rice_cracker"]
                }, {
                    short_name: "oden",
                    short_names: ["oden"]
                }, {
                    short_name: "dango",
                    short_names: ["dango"]
                }, {
                    short_name: "shaved_ice",
                    short_names: ["shaved_ice"]
                }, {
                    short_name: "ice_cream",
                    short_names: ["ice_cream"]
                }, {
                    short_name: "icecream",
                    short_names: ["icecream"]
                }, {
                    short_name: "cake",
                    short_names: ["cake"]
                }, {
                    short_name: "birthday",
                    short_names: ["birthday"]
                }, {
                    short_name: "custard",
                    short_names: ["custard"]
                }, {
                    short_name: "candy",
                    short_names: ["candy"]
                }, {
                    short_name: "lollipop",
                    short_names: ["lollipop"]
                }, {
                    short_name: "chocolate_bar",
                    short_names: ["chocolate_bar"]
                }, {
                    short_name: "popcorn",
                    short_names: ["popcorn"]
                }, {
                    short_name: "doughnut",
                    short_names: ["doughnut"]
                }, {
                    short_name: "cookie",
                    short_names: ["cookie"]
                }, {
                    short_name: "beer",
                    short_names: ["beer"]
                }, {
                    short_name: "beers",
                    short_names: ["beers"]
                }, {
                    short_name: "wine_glass",
                    short_names: ["wine_glass"]
                }, {
                    short_name: "cocktail",
                    short_names: ["cocktail"]
                }, {
                    short_name: "tropical_drink",
                    short_names: ["tropical_drink"]
                }, {
                    short_name: "champagne",
                    short_names: ["champagne"]
                }, {
                    short_name: "sake",
                    short_names: ["sake"]
                }, {
                    short_name: "tea",
                    short_names: ["tea"]
                }, {
                    short_name: "coffee",
                    short_names: ["coffee"]
                }, {
                    short_name: "baby_bottle",
                    short_names: ["baby_bottle"]
                }, {
                    short_name: "fork_and_knife",
                    short_names: ["fork_and_knife"]
                }, {
                    short_name: "knife_fork_plate",
                    short_names: ["knife_fork_plate"]
                }],
                People: [{
                    short_name: "grinning",
                    short_names: ["grinning"]
                }, {
                    short_name: "grimacing",
                    short_names: ["grimacing"]
                }, {
                    short_name: "grin",
                    short_names: ["grin"]
                }, {
                    short_name: "joy",
                    short_names: ["joy"]
                }, {
                    short_name: "smiley",
                    short_names: ["smiley"]
                }, {
                    short_name: "smile",
                    short_names: ["smile"]
                }, {
                    short_name: "sweat_smile",
                    short_names: ["sweat_smile"]
                }, {
                    short_name: "laughing",
                    short_names: ["laughing", "satisfied"]
                }, {
                    short_name: "innocent",
                    short_names: ["innocent"]
                }, {
                    short_name: "wink",
                    short_names: ["wink"]
                }, {
                    short_name: "blush",
                    short_names: ["blush"]
                }, {
                    short_name: "slightly_smiling_face",
                    short_names: ["slightly_smiling_face"]
                }, {
                    short_name: "upside_down_face",
                    short_names: ["upside_down_face"]
                }, {
                    short_name: "relaxed",
                    short_names: ["relaxed"]
                }, {
                    short_name: "yum",
                    short_names: ["yum"]
                }, {
                    short_name: "relieved",
                    short_names: ["relieved"]
                }, {
                    short_name: "heart_eyes",
                    short_names: ["heart_eyes"]
                }, {
                    short_name: "kissing_heart",
                    short_names: ["kissing_heart"]
                }, {
                    short_name: "kissing",
                    short_names: ["kissing"]
                }, {
                    short_name: "kissing_smiling_eyes",
                    short_names: ["kissing_smiling_eyes"]
                }, {
                    short_name: "kissing_closed_eyes",
                    short_names: ["kissing_closed_eyes"]
                }, {
                    short_name: "stuck_out_tongue_winking_eye",
                    short_names: ["stuck_out_tongue_winking_eye"]
                }, {
                    short_name: "stuck_out_tongue_closed_eyes",
                    short_names: ["stuck_out_tongue_closed_eyes"]
                }, {
                    short_name: "stuck_out_tongue",
                    short_names: ["stuck_out_tongue"]
                }, {
                    short_name: "money_mouth_face",
                    short_names: ["money_mouth_face"]
                }, {
                    short_name: "nerd_face",
                    short_names: ["nerd_face"]
                }, {
                    short_name: "sunglasses",
                    short_names: ["sunglasses"]
                }, {
                    short_name: "hugging_face",
                    short_names: ["hugging_face"]
                }, {
                    short_name: "smirk",
                    short_names: ["smirk"]
                }, {
                    short_name: "no_mouth",
                    short_names: ["no_mouth"]
                }, {
                    short_name: "neutral_face",
                    short_names: ["neutral_face"]
                }, {
                    short_name: "expressionless",
                    short_names: ["expressionless"]
                }, {
                    short_name: "unamused",
                    short_names: ["unamused"]
                }, {
                    short_name: "face_with_rolling_eyes",
                    short_names: ["face_with_rolling_eyes"]
                }, {
                    short_name: "thinking_face",
                    short_names: ["thinking_face"]
                }, {
                    short_name: "flushed",
                    short_names: ["flushed"]
                }, {
                    short_name: "disappointed",
                    short_names: ["disappointed"]
                }, {
                    short_name: "worried",
                    short_names: ["worried"]
                }, {
                    short_name: "angry",
                    short_names: ["angry"]
                }, {
                    short_name: "rage",
                    short_names: ["rage"]
                }, {
                    short_name: "pensive",
                    short_names: ["pensive"]
                }, {
                    short_name: "confused",
                    short_names: ["confused"]
                }, {
                    short_name: "slightly_frowning_face",
                    short_names: ["slightly_frowning_face"]
                }, {
                    short_name: "white_frowning_face",
                    short_names: ["white_frowning_face"]
                }, {
                    short_name: "persevere",
                    short_names: ["persevere"]
                }, {
                    short_name: "confounded",
                    short_names: ["confounded"]
                }, {
                    short_name: "tired_face",
                    short_names: ["tired_face"]
                }, {
                    short_name: "weary",
                    short_names: ["weary"]
                }, {
                    short_name: "triumph",
                    short_names: ["triumph"]
                }, {
                    short_name: "open_mouth",
                    short_names: ["open_mouth"]
                }, {
                    short_name: "scream",
                    short_names: ["scream"]
                }, {
                    short_name: "fearful",
                    short_names: ["fearful"]
                }, {
                    short_name: "cold_sweat",
                    short_names: ["cold_sweat"]
                }, {
                    short_name: "hushed",
                    short_names: ["hushed"]
                }, {
                    short_name: "frowning",
                    short_names: ["frowning"]
                }, {
                    short_name: "anguished",
                    short_names: ["anguished"]
                }, {
                    short_name: "cry",
                    short_names: ["cry"]
                }, {
                    short_name: "disappointed_relieved",
                    short_names: ["disappointed_relieved"]
                }, {
                    short_name: "sleepy",
                    short_names: ["sleepy"]
                }, {
                    short_name: "sweat",
                    short_names: ["sweat"]
                }, {
                    short_name: "sob",
                    short_names: ["sob"]
                }, {
                    short_name: "dizzy_face",
                    short_names: ["dizzy_face"]
                }, {
                    short_name: "astonished",
                    short_names: ["astonished"]
                }, {
                    short_name: "zipper_mouth_face",
                    short_names: ["zipper_mouth_face"]
                }, {
                    short_name: "mask",
                    short_names: ["mask"]
                }, {
                    short_name: "face_with_thermometer",
                    short_names: ["face_with_thermometer"]
                }, {
                    short_name: "face_with_head_bandage",
                    short_names: ["face_with_head_bandage"]
                }, {
                    short_name: "sleeping",
                    short_names: ["sleeping"]
                }, {
                    short_name: "zzz",
                    short_names: ["zzz"]
                }, {
                    short_name: "hankey",
                    short_names: ["hankey", "poop", "shit"]
                }, {
                    short_name: "smiling_imp",
                    short_names: ["smiling_imp"]
                }, {
                    short_name: "imp",
                    short_names: ["imp"]
                }, {
                    short_name: "japanese_ogre",
                    short_names: ["japanese_ogre"]
                }, {
                    short_name: "japanese_goblin",
                    short_names: ["japanese_goblin"]
                }, {
                    short_name: "skull",
                    short_names: ["skull"]
                }, {
                    short_name: "ghost",
                    short_names: ["ghost"]
                }, {
                    short_name: "alien",
                    short_names: ["alien"]
                }, {
                    short_name: "robot_face",
                    short_names: ["robot_face"]
                }, {
                    short_name: "smiley_cat",
                    short_names: ["smiley_cat"]
                }, {
                    short_name: "smile_cat",
                    short_names: ["smile_cat"]
                }, {
                    short_name: "joy_cat",
                    short_names: ["joy_cat"]
                }, {
                    short_name: "heart_eyes_cat",
                    short_names: ["heart_eyes_cat"]
                }, {
                    short_name: "smirk_cat",
                    short_names: ["smirk_cat"]
                }, {
                    short_name: "kissing_cat",
                    short_names: ["kissing_cat"]
                }, {
                    short_name: "scream_cat",
                    short_names: ["scream_cat"]
                }, {
                    short_name: "crying_cat_face",
                    short_names: ["crying_cat_face"]
                }, {
                    short_name: "pouting_cat",
                    short_names: ["pouting_cat"]
                }, {
                    short_name: "raised_hands",
                    short_names: ["raised_hands"]
                }, {
                    short_name: "clap",
                    short_names: ["clap"]
                }, {
                    short_name: "wave",
                    short_names: ["wave"]
                }, {
                    short_name: "+1",
                    short_names: ["+1", "thumbsup"]
                }, {
                    short_name: "-1",
                    short_names: ["-1", "thumbsdown"]
                }, {
                    short_name: "facepunch",
                    short_names: ["facepunch", "punch"]
                }, {
                    short_name: "fist",
                    short_names: ["fist"]
                }, {
                    short_name: "v",
                    short_names: ["v"]
                }, {
                    short_name: "ok_hand",
                    short_names: ["ok_hand"]
                }, {
                    short_name: "hand",
                    short_names: ["hand", "raised_hand"]
                }, {
                    short_name: "open_hands",
                    short_names: ["open_hands"]
                }, {
                    short_name: "muscle",
                    short_names: ["muscle"]
                }, {
                    short_name: "pray",
                    short_names: ["pray"]
                }, {
                    short_name: "point_up",
                    short_names: ["point_up"]
                }, {
                    short_name: "point_up_2",
                    short_names: ["point_up_2"]
                }, {
                    short_name: "point_down",
                    short_names: ["point_down"]
                }, {
                    short_name: "point_left",
                    short_names: ["point_left"]
                }, {
                    short_name: "point_right",
                    short_names: ["point_right"]
                }, {
                    short_name: "middle_finger",
                    short_names: ["middle_finger", "reversed_hand_with_middle_finger_extended"]
                }, {
                    short_name: "raised_hand_with_fingers_splayed",
                    short_names: ["raised_hand_with_fingers_splayed"]
                }, {
                    short_name: "the_horns",
                    short_names: ["the_horns", "sign_of_the_horns"]
                }, {
                    short_name: "spock-hand",
                    short_names: ["spock-hand"]
                }, {
                    short_name: "writing_hand",
                    short_names: ["writing_hand"]
                }, {
                    short_name: "nail_care",
                    short_names: ["nail_care"]
                }, {
                    short_name: "lips",
                    short_names: ["lips"]
                }, {
                    short_name: "tongue",
                    short_names: ["tongue"]
                }, {
                    short_name: "ear",
                    short_names: ["ear"]
                }, {
                    short_name: "nose",
                    short_names: ["nose"]
                }, {
                    short_name: "eye",
                    short_names: ["eye"]
                }, {
                    short_name: "eyes",
                    short_names: ["eyes"]
                }, {
                    short_name: "bust_in_silhouette",
                    short_names: ["bust_in_silhouette"]
                }, {
                    short_name: "busts_in_silhouette",
                    short_names: ["busts_in_silhouette"]
                }, {
                    short_name: "speaking_head_in_silhouette",
                    short_names: ["speaking_head_in_silhouette"]
                }, {
                    short_name: "baby",
                    short_names: ["baby"]
                }, {
                    short_name: "boy",
                    short_names: ["boy"]
                }, {
                    short_name: "girl",
                    short_names: ["girl"]
                }, {
                    short_name: "man",
                    short_names: ["man"]
                }, {
                    short_name: "woman",
                    short_names: ["woman"]
                }, {
                    short_name: "person_with_blond_hair",
                    short_names: ["person_with_blond_hair"]
                }, {
                    short_name: "older_man",
                    short_names: ["older_man"]
                }, {
                    short_name: "older_woman",
                    short_names: ["older_woman"]
                }, {
                    short_name: "man_with_gua_pi_mao",
                    short_names: ["man_with_gua_pi_mao"]
                }, {
                    short_name: "man_with_turban",
                    short_names: ["man_with_turban"]
                }, {
                    short_name: "cop",
                    short_names: ["cop"]
                }, {
                    short_name: "construction_worker",
                    short_names: ["construction_worker"]
                }, {
                    short_name: "guardsman",
                    short_names: ["guardsman"]
                }, {
                    short_name: "sleuth_or_spy",
                    short_names: ["sleuth_or_spy"]
                }, {
                    short_name: "santa",
                    short_names: ["santa"]
                }, {
                    short_name: "angel",
                    short_names: ["angel"]
                }, {
                    short_name: "princess",
                    short_names: ["princess"]
                }, {
                    short_name: "bride_with_veil",
                    short_names: ["bride_with_veil"]
                }, {
                    short_name: "walking",
                    short_names: ["walking"]
                }, {
                    short_name: "runner",
                    short_names: ["runner", "running"]
                }, {
                    short_name: "dancer",
                    short_names: ["dancer"]
                }, {
                    short_name: "dancers",
                    short_names: ["dancers"]
                }, {
                    short_name: "couple",
                    short_names: ["couple", "man_and_woman_holding_hands"]
                }, {
                    short_name: "two_men_holding_hands",
                    short_names: ["two_men_holding_hands"]
                }, {
                    short_name: "two_women_holding_hands",
                    short_names: ["two_women_holding_hands"]
                }, {
                    short_name: "bow",
                    short_names: ["bow"]
                }, {
                    short_name: "information_desk_person",
                    short_names: ["information_desk_person"]
                }, {
                    short_name: "no_good",
                    short_names: ["no_good"]
                }, {
                    short_name: "ok_woman",
                    short_names: ["ok_woman"]
                }, {
                    short_name: "raising_hand",
                    short_names: ["raising_hand"]
                }, {
                    short_name: "person_with_pouting_face",
                    short_names: ["person_with_pouting_face"]
                }, {
                    short_name: "person_frowning",
                    short_names: ["person_frowning"]
                }, {
                    short_name: "haircut",
                    short_names: ["haircut"]
                }, {
                    short_name: "massage",
                    short_names: ["massage"]
                }, {
                    short_name: "couple_with_heart",
                    short_names: ["couple_with_heart"]
                }, {
                    short_name: "womans_clothes",
                    short_names: ["womans_clothes"]
                }, {
                    short_name: "shirt",
                    short_names: ["shirt", "tshirt"]
                }, {
                    short_name: "jeans",
                    short_names: ["jeans"]
                }, {
                    short_name: "necktie",
                    short_names: ["necktie"]
                }, {
                    short_name: "dress",
                    short_names: ["dress"]
                }, {
                    short_name: "bikini",
                    short_names: ["bikini"]
                }, {
                    short_name: "kimono",
                    short_names: ["kimono"]
                }, {
                    short_name: "lipstick",
                    short_names: ["lipstick"]
                }, {
                    short_name: "kiss",
                    short_names: ["kiss"]
                }, {
                    short_name: "footprints",
                    short_names: ["footprints"]
                }, {
                    short_name: "high_heel",
                    short_names: ["high_heel"]
                }, {
                    short_name: "sandal",
                    short_names: ["sandal"]
                }, {
                    short_name: "boot",
                    short_names: ["boot"]
                }, {
                    short_name: "mans_shoe",
                    short_names: ["mans_shoe", "shoe"]
                }, {
                    short_name: "athletic_shoe",
                    short_names: ["athletic_shoe"]
                }, {
                    short_name: "womans_hat",
                    short_names: ["womans_hat"]
                }, {
                    short_name: "tophat",
                    short_names: ["tophat"]
                }, {
                    short_name: "helmet_with_white_cross",
                    short_names: ["helmet_with_white_cross"]
                }, {
                    short_name: "mortar_board",
                    short_names: ["mortar_board"]
                }, {
                    short_name: "crown",
                    short_names: ["crown"]
                }, {
                    short_name: "school_satchel",
                    short_names: ["school_satchel"]
                }, {
                    short_name: "pouch",
                    short_names: ["pouch"]
                }, {
                    short_name: "purse",
                    short_names: ["purse"]
                }, {
                    short_name: "handbag",
                    short_names: ["handbag"]
                }, {
                    short_name: "briefcase",
                    short_names: ["briefcase"]
                }, {
                    short_name: "eyeglasses",
                    short_names: ["eyeglasses"]
                }, {
                    short_name: "dark_sunglasses",
                    short_names: ["dark_sunglasses"]
                }, {
                    short_name: "ring",
                    short_names: ["ring"]
                }, {
                    short_name: "closed_umbrella",
                    short_names: ["closed_umbrella"]
                }],
                Places: [{
                    short_name: "car",
                    short_names: ["car", "red_car"]
                }, {
                    short_name: "taxi",
                    short_names: ["taxi"]
                }, {
                    short_name: "blue_car",
                    short_names: ["blue_car"]
                }, {
                    short_name: "bus",
                    short_names: ["bus"]
                }, {
                    short_name: "trolleybus",
                    short_names: ["trolleybus"]
                }, {
                    short_name: "racing_car",
                    short_names: ["racing_car"]
                }, {
                    short_name: "police_car",
                    short_names: ["police_car"]
                }, {
                    short_name: "ambulance",
                    short_names: ["ambulance"]
                }, {
                    short_name: "fire_engine",
                    short_names: ["fire_engine"]
                }, {
                    short_name: "minibus",
                    short_names: ["minibus"]
                }, {
                    short_name: "truck",
                    short_names: ["truck"]
                }, {
                    short_name: "articulated_lorry",
                    short_names: ["articulated_lorry"]
                }, {
                    short_name: "tractor",
                    short_names: ["tractor"]
                }, {
                    short_name: "racing_motorcycle",
                    short_names: ["racing_motorcycle"]
                }, {
                    short_name: "bike",
                    short_names: ["bike"]
                }, {
                    short_name: "rotating_light",
                    short_names: ["rotating_light"]
                }, {
                    short_name: "oncoming_police_car",
                    short_names: ["oncoming_police_car"]
                }, {
                    short_name: "oncoming_bus",
                    short_names: ["oncoming_bus"]
                }, {
                    short_name: "oncoming_automobile",
                    short_names: ["oncoming_automobile"]
                }, {
                    short_name: "oncoming_taxi",
                    short_names: ["oncoming_taxi"]
                }, {
                    short_name: "aerial_tramway",
                    short_names: ["aerial_tramway"]
                }, {
                    short_name: "mountain_cableway",
                    short_names: ["mountain_cableway"]
                }, {
                    short_name: "suspension_railway",
                    short_names: ["suspension_railway"]
                }, {
                    short_name: "railway_car",
                    short_names: ["railway_car"]
                }, {
                    short_name: "train",
                    short_names: ["train"]
                }, {
                    short_name: "monorail",
                    short_names: ["monorail"]
                }, {
                    short_name: "bullettrain_side",
                    short_names: ["bullettrain_side"]
                }, {
                    short_name: "bullettrain_front",
                    short_names: ["bullettrain_front"]
                }, {
                    short_name: "light_rail",
                    short_names: ["light_rail"]
                }, {
                    short_name: "mountain_railway",
                    short_names: ["mountain_railway"]
                }, {
                    short_name: "steam_locomotive",
                    short_names: ["steam_locomotive"]
                }, {
                    short_name: "train2",
                    short_names: ["train2"]
                }, {
                    short_name: "metro",
                    short_names: ["metro"]
                }, {
                    short_name: "tram",
                    short_names: ["tram"]
                }, {
                    short_name: "station",
                    short_names: ["station"]
                }, {
                    short_name: "helicopter",
                    short_names: ["helicopter"]
                }, {
                    short_name: "small_airplane",
                    short_names: ["small_airplane"]
                }, {
                    short_name: "airplane",
                    short_names: ["airplane"]
                }, {
                    short_name: "airplane_departure",
                    short_names: ["airplane_departure"]
                }, {
                    short_name: "airplane_arriving",
                    short_names: ["airplane_arriving"]
                }, {
                    short_name: "boat",
                    short_names: ["boat", "sailboat"]
                }, {
                    short_name: "motor_boat",
                    short_names: ["motor_boat"]
                }, {
                    short_name: "speedboat",
                    short_names: ["speedboat"]
                }, {
                    short_name: "ferry",
                    short_names: ["ferry"]
                }, {
                    short_name: "passenger_ship",
                    short_names: ["passenger_ship"]
                }, {
                    short_name: "rocket",
                    short_names: ["rocket"]
                }, {
                    short_name: "satellite",
                    short_names: ["satellite"]
                }, {
                    short_name: "seat",
                    short_names: ["seat"]
                }, {
                    short_name: "anchor",
                    short_names: ["anchor"]
                }, {
                    short_name: "construction",
                    short_names: ["construction"]
                }, {
                    short_name: "fuelpump",
                    short_names: ["fuelpump"]
                }, {
                    short_name: "busstop",
                    short_names: ["busstop"]
                }, {
                    short_name: "vertical_traffic_light",
                    short_names: ["vertical_traffic_light"]
                }, {
                    short_name: "traffic_light",
                    short_names: ["traffic_light"]
                }, {
                    short_name: "checkered_flag",
                    short_names: ["checkered_flag"]
                }, {
                    short_name: "ship",
                    short_names: ["ship"]
                }, {
                    short_name: "ferris_wheel",
                    short_names: ["ferris_wheel"]
                }, {
                    short_name: "roller_coaster",
                    short_names: ["roller_coaster"]
                }, {
                    short_name: "carousel_horse",
                    short_names: ["carousel_horse"]
                }, {
                    short_name: "building_construction",
                    short_names: ["building_construction"]
                }, {
                    short_name: "foggy",
                    short_names: ["foggy"]
                }, {
                    short_name: "tokyo_tower",
                    short_names: ["tokyo_tower"]
                }, {
                    short_name: "factory",
                    short_names: ["factory"]
                }, {
                    short_name: "fountain",
                    short_names: ["fountain"]
                }, {
                    short_name: "rice_scene",
                    short_names: ["rice_scene"]
                }, {
                    short_name: "mountain",
                    short_names: ["mountain"]
                }, {
                    short_name: "snow_capped_mountain",
                    short_names: ["snow_capped_mountain"]
                }, {
                    short_name: "mount_fuji",
                    short_names: ["mount_fuji"]
                }, {
                    short_name: "volcano",
                    short_names: ["volcano"]
                }, {
                    short_name: "japan",
                    short_names: ["japan"]
                }, {
                    short_name: "camping",
                    short_names: ["camping"]
                }, {
                    short_name: "tent",
                    short_names: ["tent"]
                }, {
                    short_name: "national_park",
                    short_names: ["national_park"]
                }, {
                    short_name: "motorway",
                    short_names: ["motorway"]
                }, {
                    short_name: "railway_track",
                    short_names: ["railway_track"]
                }, {
                    short_name: "sunrise",
                    short_names: ["sunrise"]
                }, {
                    short_name: "sunrise_over_mountains",
                    short_names: ["sunrise_over_mountains"]
                }, {
                    short_name: "desert",
                    short_names: ["desert"]
                }, {
                    short_name: "beach_with_umbrella",
                    short_names: ["beach_with_umbrella"]
                }, {
                    short_name: "desert_island",
                    short_names: ["desert_island"]
                }, {
                    short_name: "city_sunrise",
                    short_names: ["city_sunrise"]
                }, {
                    short_name: "city_sunset",
                    short_names: ["city_sunset"]
                }, {
                    short_name: "cityscape",
                    short_names: ["cityscape"]
                }, {
                    short_name: "night_with_stars",
                    short_names: ["night_with_stars"]
                }, {
                    short_name: "bridge_at_night",
                    short_names: ["bridge_at_night"]
                }, {
                    short_name: "milky_way",
                    short_names: ["milky_way"]
                }, {
                    short_name: "stars",
                    short_names: ["stars"]
                }, {
                    short_name: "sparkler",
                    short_names: ["sparkler"]
                }, {
                    short_name: "fireworks",
                    short_names: ["fireworks"]
                }, {
                    short_name: "rainbow",
                    short_names: ["rainbow"]
                }, {
                    short_name: "house_buildings",
                    short_names: ["house_buildings"]
                }, {
                    short_name: "european_castle",
                    short_names: ["european_castle"]
                }, {
                    short_name: "japanese_castle",
                    short_names: ["japanese_castle"]
                }, {
                    short_name: "stadium",
                    short_names: ["stadium"]
                }, {
                    short_name: "statue_of_liberty",
                    short_names: ["statue_of_liberty"]
                }, {
                    short_name: "house",
                    short_names: ["house"]
                }, {
                    short_name: "house_with_garden",
                    short_names: ["house_with_garden"]
                }, {
                    short_name: "derelict_house_building",
                    short_names: ["derelict_house_building"]
                }, {
                    short_name: "office",
                    short_names: ["office"]
                }, {
                    short_name: "department_store",
                    short_names: ["department_store"]
                }, {
                    short_name: "post_office",
                    short_names: ["post_office"]
                }, {
                    short_name: "european_post_office",
                    short_names: ["european_post_office"]
                }, {
                    short_name: "hospital",
                    short_names: ["hospital"]
                }, {
                    short_name: "bank",
                    short_names: ["bank"]
                }, {
                    short_name: "hotel",
                    short_names: ["hotel"]
                }, {
                    short_name: "convenience_store",
                    short_names: ["convenience_store"]
                }, {
                    short_name: "school",
                    short_names: ["school"]
                }, {
                    short_name: "love_hotel",
                    short_names: ["love_hotel"]
                }, {
                    short_name: "wedding",
                    short_names: ["wedding"]
                }, {
                    short_name: "classical_building",
                    short_names: ["classical_building"]
                }, {
                    short_name: "church",
                    short_names: ["church"]
                }, {
                    short_name: "mosque",
                    short_names: ["mosque"]
                }, {
                    short_name: "synagogue",
                    short_names: ["synagogue"]
                }, {
                    short_name: "kaaba",
                    short_names: ["kaaba"]
                }, {
                    short_name: "shinto_shrine",
                    short_names: ["shinto_shrine"]
                }],
                Activity: [{
                    short_name: "soccer",
                    short_names: ["soccer"]
                }, {
                    short_name: "basketball",
                    short_names: ["basketball"]
                }, {
                    short_name: "football",
                    short_names: ["football"]
                }, {
                    short_name: "baseball",
                    short_names: ["baseball"]
                }, {
                    short_name: "tennis",
                    short_names: ["tennis"]
                }, {
                    short_name: "volleyball",
                    short_names: ["volleyball"]
                }, {
                    short_name: "rugby_football",
                    short_names: ["rugby_football"]
                }, {
                    short_name: "8ball",
                    short_names: ["8ball"]
                }, {
                    short_name: "golf",
                    short_names: ["golf"]
                }, {
                    short_name: "golfer",
                    short_names: ["golfer"]
                }, {
                    short_name: "table_tennis_paddle_and_ball",
                    short_names: ["table_tennis_paddle_and_ball"]
                }, {
                    short_name: "badminton_racquet_and_shuttlecock",
                    short_names: ["badminton_racquet_and_shuttlecock"]
                }, {
                    short_name: "ice_hockey_stick_and_puck",
                    short_names: ["ice_hockey_stick_and_puck"]
                }, {
                    short_name: "field_hockey_stick_and_ball",
                    short_names: ["field_hockey_stick_and_ball"]
                }, {
                    short_name: "cricket_bat_and_ball",
                    short_names: ["cricket_bat_and_ball"]
                }, {
                    short_name: "ski",
                    short_names: ["ski"]
                }, {
                    short_name: "skier",
                    short_names: ["skier"]
                }, {
                    short_name: "snowboarder",
                    short_names: ["snowboarder"]
                }, {
                    short_name: "ice_skate",
                    short_names: ["ice_skate"]
                }, {
                    short_name: "bow_and_arrow",
                    short_names: ["bow_and_arrow"]
                }, {
                    short_name: "fishing_pole_and_fish",
                    short_names: ["fishing_pole_and_fish"]
                }, {
                    short_name: "rowboat",
                    short_names: ["rowboat"]
                }, {
                    short_name: "swimmer",
                    short_names: ["swimmer"]
                }, {
                    short_name: "surfer",
                    short_names: ["surfer"]
                }, {
                    short_name: "bath",
                    short_names: ["bath"]
                }, {
                    short_name: "person_with_ball",
                    short_names: ["person_with_ball"]
                }, {
                    short_name: "weight_lifter",
                    short_names: ["weight_lifter"]
                }, {
                    short_name: "bicyclist",
                    short_names: ["bicyclist"]
                }, {
                    short_name: "mountain_bicyclist",
                    short_names: ["mountain_bicyclist"]
                }, {
                    short_name: "horse_racing",
                    short_names: ["horse_racing"]
                }, {
                    short_name: "man_in_business_suit_levitating",
                    short_names: ["man_in_business_suit_levitating"]
                }, {
                    short_name: "trophy",
                    short_names: ["trophy"]
                }, {
                    short_name: "running_shirt_with_sash",
                    short_names: ["running_shirt_with_sash"]
                }, {
                    short_name: "sports_medal",
                    short_names: ["sports_medal"]
                }, {
                    short_name: "medal",
                    short_names: ["medal"]
                }, {
                    short_name: "reminder_ribbon",
                    short_names: ["reminder_ribbon"]
                }, {
                    short_name: "rosette",
                    short_names: ["rosette"]
                }, {
                    short_name: "ticket",
                    short_names: ["ticket"]
                }, {
                    short_name: "admission_tickets",
                    short_names: ["admission_tickets"]
                }, {
                    short_name: "performing_arts",
                    short_names: ["performing_arts"]
                }, {
                    short_name: "art",
                    short_names: ["art"]
                }, {
                    short_name: "circus_tent",
                    short_names: ["circus_tent"]
                }, {
                    short_name: "microphone",
                    short_names: ["microphone"]
                }, {
                    short_name: "headphones",
                    short_names: ["headphones"]
                }, {
                    short_name: "musical_score",
                    short_names: ["musical_score"]
                }, {
                    short_name: "musical_keyboard",
                    short_names: ["musical_keyboard"]
                }, {
                    short_name: "saxophone",
                    short_names: ["saxophone"]
                }, {
                    short_name: "trumpet",
                    short_names: ["trumpet"]
                }, {
                    short_name: "guitar",
                    short_names: ["guitar"]
                }, {
                    short_name: "violin",
                    short_names: ["violin"]
                }, {
                    short_name: "clapper",
                    short_names: ["clapper"]
                }, {
                    short_name: "video_game",
                    short_names: ["video_game"]
                }, {
                    short_name: "space_invader",
                    short_names: ["space_invader"]
                }, {
                    short_name: "dart",
                    short_names: ["dart"]
                }, {
                    short_name: "game_die",
                    short_names: ["game_die"]
                }, {
                    short_name: "slot_machine",
                    short_names: ["slot_machine"]
                }, {
                    short_name: "bowling",
                    short_names: ["bowling"]
                }],
                Flags: [{
                    short_name: "flag-cn",
                    short_names: ["flag-cn"]
                }, {
                    short_name: "flag-de",
                    short_names: ["flag-de"]
                }, {
                    short_name: "flag-es",
                    short_names: ["flag-es"]
                }, {
                    short_name: "flag-fr",
                    short_names: ["flag-fr"]
                }, {
                    short_name: "flag-gb",
                    short_names: ["flag-gb"]
                }, {
                    short_name: "flag-it",
                    short_names: ["flag-it"]
                }, {
                    short_name: "flag-jp",
                    short_names: ["flag-jp"]
                }, {
                    short_name: "flag-kr",
                    short_names: ["flag-kr"]
                }, {
                    short_name: "flag-ru",
                    short_names: ["flag-ru"]
                }, {
                    short_name: "flag-us",
                    short_names: ["flag-us"]
                }, {
                    short_name: "flag-ua",
                    short_names: ["flag-ua"]
                }, {
                    short_name: "flag-ae",
                    short_names: ["flag-ae"]
                }, {
                    short_name: "flag-at",
                    short_names: ["flag-at"]
                }, {
                    short_name: "flag-au",
                    short_names: ["flag-au"]
                }, {
                    short_name: "flag-be",
                    short_names: ["flag-be"]
                }, {
                    short_name: "flag-br",
                    short_names: ["flag-br"]
                }, {
                    short_name: "flag-ca",
                    short_names: ["flag-ca"]
                }, {
                    short_name: "flag-ch",
                    short_names: ["flag-ch"]
                }, {
                    short_name: "flag-cl",
                    short_names: ["flag-cl"]
                }, {
                    short_name: "flag-co",
                    short_names: ["flag-co"]
                }, {
                    short_name: "flag-dk",
                    short_names: ["flag-dk"]
                }, {
                    short_name: "flag-fi",
                    short_names: ["flag-fi"]
                }, {
                    short_name: "flag-hk",
                    short_names: ["flag-hk"]
                }, {
                    short_name: "flag-id",
                    short_names: ["flag-id"]
                }, {
                    short_name: "flag-ie",
                    short_names: ["flag-ie"]
                }, {
                    short_name: "flag-in",
                    short_names: ["flag-in"]
                }, {
                    short_name: "flag-mo",
                    short_names: ["flag-mo"]
                }, {
                    short_name: "flag-mx",
                    short_names: ["flag-mx"]
                }, {
                    short_name: "flag-my",
                    short_names: ["flag-my"]
                }, {
                    short_name: "flag-nl",
                    short_names: ["flag-nl"]
                }, {
                    short_name: "flag-no",
                    short_names: ["flag-no"]
                }, {
                    short_name: "flag-nz",
                    short_names: ["flag-nz"]
                }, {
                    short_name: "flag-ph",
                    short_names: ["flag-ph"]
                }, {
                    short_name: "flag-pl",
                    short_names: ["flag-pl"]
                }, {
                    short_name: "flag-pr",
                    short_names: ["flag-pr"]
                }, {
                    short_name: "flag-pt",
                    short_names: ["flag-pt"]
                }, {
                    short_name: "flag-sa",
                    short_names: ["flag-sa"]
                }, {
                    short_name: "flag-se",
                    short_names: ["flag-se"]
                }, {
                    short_name: "flag-sg",
                    short_names: ["flag-sg"]
                }, {
                    short_name: "flag-vn",
                    short_names: ["flag-vn"]
                }, {
                    short_name: "flag-za",
                    short_names: ["flag-za"]
                }, {
                    short_name: "flag-kz",
                    short_names: ["flag-kz"]
                }, {
                    short_name: "flag-by",
                    short_names: ["flag-by"]
                }, {
                    short_name: "flag-il",
                    short_names: ["flag-il"]
                }, {
                    short_name: "flag-tr",
                    short_names: ["flag-tr"]
                }]
            }
        },
        init: function() {
            var e = this;
            return e.emoji = new EmojiConvertor,
            e.emoji.allow_native = this.defaults.allowNative,
            e.emoji.img_set = this.defaults.emojiType,
            e.emoji.use_sheet = !0,
            e.emoji.supports_css = !0,
            e.emoji.img_sets.apple.sheet = this.defaults.emojiSheets.apple,
            e.popup = document.getElementById("emoji-popup"),
            e.scroller = e.popup.querySelector("#emoji-scroll-wrapper"),
            document.body.dataset.wdtEmojiBundle = u.defaults.emojiType,
            e.popup.querySelector('[data-group-name="People"]').innerHTML = e.emoji.replace_colons(":sunglasses:"),
            e.popup.querySelector('[data-group-name="Nature"]').innerHTML = e.emoji.replace_colons(":shamrock:"),
            e.popup.querySelector('[data-group-name="Foods"]').innerHTML = e.emoji.replace_colons(":pizza:"),
            e.popup.querySelector('[data-group-name="Activity"]').innerHTML = e.emoji.replace_colons(":football:"),
            e.popup.querySelector('[data-group-name="Places"]').innerHTML = e.emoji.replace_colons(":airplane:"),
            e.popup.querySelector('[data-group-name="Objects"]').innerHTML = e.emoji.replace_colons(":bulb:"),
            e.popup.querySelector('[data-group-name="Symbols"]').innerHTML = e.emoji.replace_colons(":heart:"),
            e.popup.querySelector('[data-group-name="Flags"]').innerHTML = e.emoji.replace_colons(":waving_white_flag:"),
            e
        },
        addEditor: function(e) {
            u.emoji || u.init(),
            this.popup.parentNode !== e.parentNode && (e.parentNode.getElementsByClassName("js-emoji-container")[0].appendChild(this.popup),
            this.addPicker(e))
        },
        addPicker: function(e) {
            if (!e.classList.contains("js-picker-ready")) {
                var t = e.parentNode.getElementsByClassName("js-emoji-picker")[0];
                t.addEventListener("click", u.openPicker),
                e.parentNode.classList.add("wdt-emoji-picker-parent"),
                e.classList.add("js-picker-ready"),
                u.openPicker.call(t, {
                    target: t
                })
            }
        },
        replaceDefaultEmoji: function(e) {
            return u.emoji || u.init(),
            u.emoji.replace_unified(e)
        },
        openPicker: function(e) {
            u.input = e.target.parentNode.parentNode.parentNode.querySelector("[contenteditable]"),
            u.popup.classList.add("open"),
            u.fillPickerPopup(),
            u.closePickers(),
            this.classList.add("js-emoji-picker-open")
        },
        fillPickerPopup: function() {
            if (this.popup.classList.contains("ready"))
                return !1;
            var e = this.popup.getElementsByClassName("wdt-emoji-sections")[0]
              , t = {}
              , a = [];
            for (var n in u.defaults.emojiData)
                u.defaults.emojiData.hasOwnProperty(n) && (i = u.defaults.emojiData[n],
                t[n] = i);
            for (var s = Object.keys(t).sort(function(e, t) {
                return u.defaults.sectionOrders[e] < u.defaults.sectionOrders[t] ? 1 : -1
            }), o = 0; o < s.length; o++)
                a[s[o]] = t[s[o]];
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    var i = a[r];
                    if (0 < i.length) {
                        var l = document.createElement("div")
                          , c = document.createElement("h3")
                          , d = document.createElement("div");
                        for (c.innerHTML = u.defaults.sections[r],
                        c.dataset.emojiGroup = r,
                        d.dataset.emojiGroup = r,
                        d.classList.add("wdt-emoji-list"),
                        l.classList.add("wdt-emoji-section"),
                        o = 0; o < i.length; o++) {
                            var m = i[o]
                              , f = document.createElement("a");
                            f.classList.add("wdt-emoji"),
                            f.dataset.wdtEmojiShortnames = ":" + m.short_names.join(": :") + ":",
                            f.dataset.wdtEmojiShortname = m.short_name,
                            f.innerHTML = this.emoji.replace_colons(":" + m.short_name + ":"),
                            d.appendChild(f)
                        }
                        l.appendChild(c),
                        l.appendChild(d),
                        e.appendChild(l)
                    }
                }
            this.popup.classList.add("ready"),
            u.bindEvents()
        },
        close: function() {
            u.popup.classList.remove("open"),
            u.closePickers()
        },
        closePickers: function() {
            for (var e = document.getElementsByClassName("js-emoji-picker-open"), t = 0; t < e.length; t++)
                u.closePicker(e[t])
        },
        closePicker: function(e) {
            e.classList.remove("js-emoji-picker-open")
        },
        bindEvents: function() {
            for (var t = this, e = t.popup.getElementsByTagName("h3"), a = 0; a < e.length; a++)
                s(e[a]);
            document.getElementById("emoji-popup-mobile-closer").addEventListener("click", function() {
                return u.close(),
                !1
            }),
            t.popup.addEventListener("mouseenter", function() {
                u.emojiPickerHideTimer && clearTimeout(u.emojiPickerHideTimer)
            }),
            t.popup.addEventListener("mouseout", function(e) {
                for (var t = e.relatedTarget; t && "emoji-popup" != t.id; )
                    t = t.parentElement;
                t || (u.emojiPickerHideTimer = setTimeout(function() {
                    u.close()
                }, 300))
            }),
            r("click", ".wdt-emoji-list a.wdt-emoji", function() {
                o(u.input, t.emoji.colonToUnicode(this.dataset.wdtEmojiShortname));
                var e = new Event("keyup");
                return u.input.dispatchEvent(e),
                !1
            }),
            Array.prototype.forEach.call(document.getElementsByClassName("wdt-emoji-tab"), function(e) {
                e.addEventListener("click", function() {
                    var e = this.dataset.groupName
                      , t = u.popup.querySelector('.wdt-emoji-section h3[data-emoji-group="' + e + '"]');
                    return t && (u.setActiveTab(e),
                    u.scroller.scrollTop = t.getAttribute("data-offset") - t.getBoundingClientRect().height + 38),
                    !1
                })
            }),
            n(u.scroller, "mousewheel DOMMouseScroll", function(e) {
                var t = e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail
                  , a = 0 <= this.scrollTop + this.getBoundingClientRect().height - this.scrollHeight
                  , n = this.scrollTop <= 0;
                (t < 0 && a || 0 < t && n) && e.preventDefault()
            })
        }
    }
      , n = function(e, t, a) {
        t = t.split(" ");
        for (var n = 0; n < t.length; n++)
            e.addEventListener(t[n], a, !1)
    }
      , s = function(n) {
        var e = u.scroller.getBoundingClientRect()
          , s = n.getBoundingClientRect().top - e.top
          , o = u.popup.querySelector("#wdt-emoji-menu-header").getBoundingClientRect().height;
        n.setAttribute("data-offset", n.offsetTop),
        u.scroller.addEventListener("scroll", function() {
            var e = u.scroller.scrollTop;
            if (n.classList.contains("sticky") && e < s)
                n.classList.remove("sticky"),
                i(n, {
                    top: null
                }),
                i(n.parentNode, {
                    "padding-top": null
                });
            else if (s < e && !n.classList.contains("sticky")) {
                for (var t = document.querySelectorAll(".wdt-emoji-section h3"), a = 0; a < t.length; a++)
                    t[a].classList.remove("sticky"),
                    i(t[a], {
                        top: null
                    }),
                    i(t[a].parentNode, {
                        "padding-top": null
                    });
                n.classList.add("sticky"),
                i(n, {
                    top: o + "px"
                }),
                i(n.parentNode, {
                    "padding-top": n.getBoundingClientRect().height + "px"
                }),
                u.setActiveTab(n.dataset.emojiGroup)
            }
        })
    };
    u.setActiveTab = function(e) {
        for (var t = document.getElementsByClassName("wdt-emoji-tab"), a = 0; a < t.length; a++)
            t[a].classList.remove("active");
        u.popup.querySelector('.wdt-emoji-tab[data-group-name="' + e + '"]').classList.add("active")
    }
    ;
    var o = function(e, t) {
        var a;
        if (e.focus(),
        t = u.emoji.replace_unified(t),
        window.getSelection && 0 < window.getSelection().rangeCount) {
            var n = window.getSelection();
            (a = n.getRangeAt(0)).deleteContents();
            var s = document.createElement("div");
            s.innerHTML = t;
            var o = s.firstChild;
            a.insertNode(s.firstChild),
            a.startContainer.nextSibling && "IMG" === a.startContainer.nextSibling.tagName ? a.setStartAfter(a.startContainer.nextSibling) : Array.prototype.some.call(a.startContainer.children, function(e) {
                return e === o && (a.setStartAfter(e),
                !0)
            }),
            a.collapse(!0),
            n.removeAllRanges(),
            n.addRange(a)
        } else
            document.selection && document.selection.createRange && ((a = document.selection.createRange()).pasteHTML(t),
            a.collapse(!0))
    }
      , r = function(e, s, o) {
        document.addEventListener(e, function(e) {
            var t = u.popup.querySelectorAll(s);
            if (t) {
                for (var a, n = e.target; n && -1 === (a = Array.prototype.indexOf.call(t, n)); )
                    n = n.parentElement;
                -1 < a && o.call(n, e)
            }
        })
    }
      , i = function() {
        var o = ["Webkit", "O", "Moz", "ms"]
          , t = {};
        function n(e) {
            return e = e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                return t.toUpperCase()
            }),
            t[e] || (t[e] = function(e) {
                var t = document.body.style;
                if (e in t)
                    return e;
                for (var a, n = o.length, s = e.charAt(0).toUpperCase() + e.slice(1); n--; )
                    if ((a = o[n] + s)in t)
                        return a;
                return e
            }(e))
        }
        function r(e, t, a) {
            t = n(t),
            e.style[t] = a
        }
        return function(e, t) {
            var a, n, s = arguments;
            if (2 == s.length)
                for (a in t)
                    void 0 !== (n = t[a]) && t.hasOwnProperty(a) && r(e, a, n);
            else
                r(e, s[1], s[2])
        }
    }();
    return u
}()
  , BotConstructor = {
    
    initApp: function() {
        BotConstructor.$wideColumn = $(BotConstructor.wideColumn),
        BotConstructor.addListeners(),
        document.execCommand("enableObjectResizing", !1, !1),
        document.execCommand("autoUrlDetect", !1, !1),
        BotConstructor.$wideColumn.on({
            mouseenter: function() {
                "vars-menu js-tooltip-menu" !== this.parentNode.parentNode.className && (Emoji.setEmojiTooltip(this.innerHTML, "text-var" !== this.className),
                BotConstructor.tooltip.innerHTML = Emoji.tooltipText,
                BotConstructor.tooltip.timout = setTimeout(function() {
                    BotConstructor.tooltip.style.display = "inline-block"
                }, 100))
            },
            mouseleave: function() {
                clearTimeout(BotConstructor.tooltip.timout),
                BotConstructor.tooltip.style.display = "none"
            },
            mousemove: function(e) {
                BotConstructor.tooltip.style.top = "".concat(e.pageY + 15, "px"),
                BotConstructor.tooltip.style.left = "".concat(e.pageX, "px")
            }
        }, "span.text-var")
    },

    addListeners: function() {
        
        document.body.addEventListener("click", function(e) {
            for (var t = e.target; t && !t.classList.contains("js-link"); )
                t = t.parentElement;
            if (!t) {
                for (t = e.target; t && !t.classList.contains("js-emoji-picker"); )
                    t = t.parentElement;
                return t && wdtEmojiBundle.addEditor(t.parentNode.parentNode.querySelector("[contenteditable]")),
                !0
            }
            var a = t.getAttribute("data-action")
              , n = t.getAttribute("data-type")
              , s = t.getAttribute("data-id");
            BotConstructor.loadPage({
                id: s,
                type: n,
                action: a
            })
        })
        
    },
    getDataManager: function(e) {
    	function o(e) {
            var t = e.innerHTML;
            t = (t = (t = (t = (t = this.filterContent(t)).split(",")).map(function(e) {
                return e.trim()
            })).filter(function(e, t, a) {
                return "" !== e.trim() && a.indexOf(e) === t
            })).join(", "),
            e.innerHTML = t
        }
        function t() {
            this.get = function() {
                try {
                    return this.clearData(),
                    this.setReplies(),
                    this.beforeSend(),
                    JSON.stringify(this.data)
                } catch (e) {
                    console.error(e)
                }
            }
        }
        function a() {
            t.apply(this, arguments)
        }
        function n() {
            t.apply(this, arguments)
        }
        function s() {
            t.apply(this, arguments)
        }
        return t.prototype.getContainers = function() {
            var e = BotConstructor.wideColumn.querySelector("#constructor-messages-section").getElementsByClassName("js-content");
            return Array.prototype.reduce.call(e, function(e, t) {
                return t.parentNode.parentNode.classList.contains("js-advanced-reply") || e.push(t),
                e
            }, [])
        }
        ,
        t.prototype.filterContent = function(e) {
            return (e = (e = (e = e.replace(/((<br>)+$)|^(<br>)+/g, "")).replace(/&nbsp;/g, " ")).replace(/\s\s+/g, " ")).trim()
        }
        ,
        t.prototype.clearData = function() {
            var e;
            this.data = {
                template_id: document.getElementById("header-chat-bot-selector").getAttribute("data-template-id"),
                replies: [],
                deleted_replies: BotConstructor.deletedReplies.get(),
                message: {
                    id: document.getElementById("constructor-messages-section").getAttribute("data-id"),
                    reply_type: document.getElementById("message-reply-type").getAttribute("data-value"),
                    type: BotConstructor.search.get("type") || BotConstructor.EDITOR_ACTIONS.COMMON_MESSAGE,
                    match_type: this.getMatchType(),
                    keywords: this.getKeywords(),
                    event_id: this.getEventId(),
                    market_item_id: (e = BotConstructor.search.get("id"),
                    /\d+-\d+/.test(e) ? e.split("-")[1] : null)
                }
            }
        }
        ,
        t.prototype.setReplies = function() {
            var s = this
              , e = s.getContainers();
            Array.prototype.forEach.call(e, function(e) {
                var t = 0
                  , a = e.nextElementSibling.getElementsByClassName("js-settings active");
                Array.prototype.forEach.call(a, function(e) {
                    t += +e.getAttribute("data-value")
                });
                var n = e.nextElementSibling.getElementsByClassName("js-reply-send-conditions js-pointed")[0];
                n && (t += +n.getAttribute("data-value")),
                e.setAttribute("data-settings", t),
                e.innerHTML = e.innerHTML.replace(/(<div><br><\/div>){2,}/g, "<div><br></div>"),
                e.innerHTML = e.innerHTML.replace(/(<br>){3,}/g, "<br><br>"),
                s.data.replies.push(wrapDomElement(e))
            });
        }
        ,
        t.prototype.getEventId = function() {
            var e = BotConstructor.search.get("id");
            return /\d+-\d+/.test(e) ? e.split("-")[0] : null
        }
        ,
        t.prototype.clearContainers = function(a) {
            var e, n = this, t = n.getContainers();
            e = a ? function(e, t) {
                e.setAttribute("data-id", a[t]),
                e.getAttribute("data-type") == ENUM_REPLY_TYPES.TYPE_TEXT && (e.innerHTML = n.filterContent(e.innerHTML))
            }
            : function(e) {
                e.getAttribute("data-type") == ENUM_REPLY_TYPES.TYPE_TEXT && (e.innerHTML = n.filterContent(e.innerHTML))
            }
            ,
            Array.prototype.forEach.call(t, e)
        }
        ,
        t.prototype.getMatchType = function() {
            var e = document.getElementById("message-match-type");
            return e ? e.getAttribute("data-value") : null
        }
     

    }
    
};
BotConstructor.initApp();


