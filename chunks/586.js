"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[586,3751],{86630:(e,t,n)=>{n.d(t,{F:()=>p,M:()=>r});const r={Base64:0,Hex:1,String:2,Raw:3};function i(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function l(e,t,n,r,l,s){return i(function(e,t){return e<<t|e>>>32-t}(i(i(t,e),i(r,s)),l),n)}function s(e,t,n,r,i,s,a){return l(t&n|~t&r,e,t,i,s,a)}function a(e,t,n,r,i,s,a){return l(t&r|n&~r,e,t,i,s,a)}function o(e,t,n,r,i,s,a){return l(t^n^r,e,t,i,s,a)}function u(e,t,n,r,i,s,a){return l(n^(t|~r),e,t,i,s,a)}function c(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let n=1732584193,r=-271733879,l=-1732584194,c=271733878;for(let t=0;t<e.length;t+=16){const p=n,f=r,m=l,d=c;n=s(n,r,l,c,e[t+0],7,-680876936),c=s(c,n,r,l,e[t+1],12,-389564586),l=s(l,c,n,r,e[t+2],17,606105819),r=s(r,l,c,n,e[t+3],22,-1044525330),n=s(n,r,l,c,e[t+4],7,-176418897),c=s(c,n,r,l,e[t+5],12,1200080426),l=s(l,c,n,r,e[t+6],17,-1473231341),r=s(r,l,c,n,e[t+7],22,-45705983),n=s(n,r,l,c,e[t+8],7,1770035416),c=s(c,n,r,l,e[t+9],12,-1958414417),l=s(l,c,n,r,e[t+10],17,-42063),r=s(r,l,c,n,e[t+11],22,-1990404162),n=s(n,r,l,c,e[t+12],7,1804603682),c=s(c,n,r,l,e[t+13],12,-40341101),l=s(l,c,n,r,e[t+14],17,-1502002290),r=s(r,l,c,n,e[t+15],22,1236535329),n=a(n,r,l,c,e[t+1],5,-165796510),c=a(c,n,r,l,e[t+6],9,-1069501632),l=a(l,c,n,r,e[t+11],14,643717713),r=a(r,l,c,n,e[t+0],20,-373897302),n=a(n,r,l,c,e[t+5],5,-701558691),c=a(c,n,r,l,e[t+10],9,38016083),l=a(l,c,n,r,e[t+15],14,-660478335),r=a(r,l,c,n,e[t+4],20,-405537848),n=a(n,r,l,c,e[t+9],5,568446438),c=a(c,n,r,l,e[t+14],9,-1019803690),l=a(l,c,n,r,e[t+3],14,-187363961),r=a(r,l,c,n,e[t+8],20,1163531501),n=a(n,r,l,c,e[t+13],5,-1444681467),c=a(c,n,r,l,e[t+2],9,-51403784),l=a(l,c,n,r,e[t+7],14,1735328473),r=a(r,l,c,n,e[t+12],20,-1926607734),n=o(n,r,l,c,e[t+5],4,-378558),c=o(c,n,r,l,e[t+8],11,-2022574463),l=o(l,c,n,r,e[t+11],16,1839030562),r=o(r,l,c,n,e[t+14],23,-35309556),n=o(n,r,l,c,e[t+1],4,-1530992060),c=o(c,n,r,l,e[t+4],11,1272893353),l=o(l,c,n,r,e[t+7],16,-155497632),r=o(r,l,c,n,e[t+10],23,-1094730640),n=o(n,r,l,c,e[t+13],4,681279174),c=o(c,n,r,l,e[t+0],11,-358537222),l=o(l,c,n,r,e[t+3],16,-722521979),r=o(r,l,c,n,e[t+6],23,76029189),n=o(n,r,l,c,e[t+9],4,-640364487),c=o(c,n,r,l,e[t+12],11,-421815835),l=o(l,c,n,r,e[t+15],16,530742520),r=o(r,l,c,n,e[t+2],23,-995338651),n=u(n,r,l,c,e[t+0],6,-198630844),c=u(c,n,r,l,e[t+7],10,1126891415),l=u(l,c,n,r,e[t+14],15,-1416354905),r=u(r,l,c,n,e[t+5],21,-57434055),n=u(n,r,l,c,e[t+12],6,1700485571),c=u(c,n,r,l,e[t+3],10,-1894986606),l=u(l,c,n,r,e[t+10],15,-1051523),r=u(r,l,c,n,e[t+1],21,-2054922799),n=u(n,r,l,c,e[t+8],6,1873313359),c=u(c,n,r,l,e[t+15],10,-30611744),l=u(l,c,n,r,e[t+6],15,-1560198380),r=u(r,l,c,n,e[t+13],21,1309151649),n=u(n,r,l,c,e[t+4],6,-145523070),c=u(c,n,r,l,e[t+11],10,-1120210379),l=u(l,c,n,r,e[t+2],15,718787259),r=u(r,l,c,n,e[t+9],21,-343485551),n=i(n,p),r=i(r,f),l=i(l,m),c=i(c,d)}return[n,r,l,c]}function p(e,t=r.Hex){const n=t||r.Base64,i=c(function(e){const t=[];for(let n=0,r=8*e.length;n<r;n+=8)t[n>>5]|=(255&e.charCodeAt(n/8))<<n%32;return t}(e),8*e.length);switch(n){case r.Raw:return i;case r.Hex:return function(e){const t="0123456789abcdef",n=[];for(let r=0,i=4*e.length;r<i;r++)n.push(t.charAt(e[r>>2]>>r%4*8+4&15)+t.charAt(e[r>>2]>>r%4*8&15));return n.join("")}(i);case r.String:return function(e){const t=[];for(let n=0,r=32*e.length;n<r;n+=8)t.push(String.fromCharCode(e[n>>5]>>>n%32&255));return t.join("")}(i);case r.Base64:return function(e){const t=[];for(let n=0,r=4*e.length;n<r;n+=3){const r=(e[n>>2]>>n%4*8&255)<<16|(e[n+1>>2]>>(n+1)%4*8&255)<<8|e[n+2>>2]>>(n+2)%4*8&255;for(let i=0;i<4;i++)8*n+6*i>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r>>6*(3-i)&63))}return t.join("")}(i)}}},57989:(e,t,n)=>{function r(e){return e=e||globalThis.location.hostname,u.some((t=>null!=e?.match(t)))}function i(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(a)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)||null!=t.match(o)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}n.d(t,{XO:()=>r,pJ:()=>i});const l=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,a=/^[\w-]*\.mapsdevext.arcgis.com$/,o=/^[\w-]*\.mapsqa.arcgis.com$/,u=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,s,/^jsapps.esri.com$/,a,o]},7505:(e,t,n)=>{n.d(t,{G6:()=>S,Ie:()=>v,J9:()=>h,RF:()=>g,U1:()=>x,vY:()=>o,ym:()=>b});var r=n(61681),i=n(53736);const l=(e,t,n)=>[t,n],s=(e,t,n)=>[t,n,e[2]],a=(e,t,n)=>[t,n,e[2],e[3]];function o(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,r.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function c({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function p(e,t,n){const r=[];let i,l,s,a;for(let o=0;o<n.length;o++){const p=n[o];o>0?(s=u(e,p[0]),a=c(e,p[1]),s===i&&a===l||(r.push(t(p,s-i,a-l)),i=s,l=a)):(i=u(e,p[0]),l=c(e,p[1]),r.push(t(p,i,l)))}return r.length>0?r:null}function f({scale:e,translate:t},n){return n*e[0]+t[0]}function m({scale:e,translate:t},n){return t[1]-n*e[1]}function d(e,t,n){const r=new Array(n.length);if(!n.length)return r;const[i,l]=e.scale;let s=f(e,n[0][0]),a=m(e,n[0][1]);r[0]=t(n[0],s,a);for(let e=1;e<n.length;e++){const o=n[e];s+=o[0]*i,a-=o[1]*l,r[e]=t(o,s,a)}return r}function y(e,t,n){const r=new Array(n.length);for(let i=0;i<n.length;i++)r[i]=d(e,t,n[i]);return r}function g(e,t,n,r,i){return t.x=u(e,n.x),t.y=c(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function b(e,t){return e&&t?(0,i.wp)(t)?g(e,{},t,!1,!1):(0,i.l9)(t)?function(e,t,n,r,i){const o=function(e,t,n,r){const i=[],o=n?r?a:s:r?s:l;for(let n=0;n<t.length;n++){const r=p(e,o,t[n]);r&&r.length>=2&&i.push(r)}return i.length?i:null}(e,n.paths,r,i);return o?(t.paths=o,t):null}(e,{},t,!1,!1):(0,i.oU)(t)?function(e,t,n,r,i){const o=function(e,t,n,r){const i=[],o=n?r?a:s:r?s:l;for(let n=0;n<t.length;n++){const r=p(e,o,t[n]);r&&r.length>=3&&i.push(r)}return i.length?i:null}(e,n.rings,r,i);return o?(t.rings=o,t):null}(e,{},t,!1,!1):(0,i.aW)(t)?function(e,t,n,r,i){return t.points=function(e,t,n,r){return p(e,n?r?a:s:r?s:l,t)}(e,n.points,r,i),t}(e,{},t,!1,!1):(0,i.YX)(t)?function(e,t,n,r,i){return t.xmin=u(e,n.xmin),t.ymin=c(e,n.ymin),t.xmax=u(e,n.xmax),t.ymax=c(e,n.ymax),t}(e,{},t):null:null}function h(e,t,n,i,o){return(0,r.pC)(n)&&(t.points=function(e,t,n,r){return d(e,n?r?a:s:r?s:l,t)}(e,n.points,i,o)),t}function x(e,t,n,i,l){return(0,r.Wi)(n)||(t.x=f(e,n.x),t.y=m(e,n.y),t!==n&&(i&&(t.z=n.z),l&&(t.m=n.m))),t}function v(e,t,n,i,o){return(0,r.pC)(n)&&(t.rings=function(e,t,n,r){return y(e,n?r?a:s:r?s:l,t)}(e,n.rings,i,o)),t}function S(e,t,n,i,o){return(0,r.pC)(n)&&(t.paths=function(e,t,n,r){return y(e,n?r?a:s:r?s:l,t)}(e,n.paths,i,o)),t}},41657:(e,t,n)=>{n.d(t,{a:()=>o});var r=n(70375),i=n(13802),l=n(38716),s=n(15875);const a=i.Z.getLogger("esri.views.2d.engine.webgl");function o(e){return(0,s.hj)(e.minDataValue)&&(0,s.hj)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.X.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.X.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.X.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.X.SIZE_UNIT_VALUE:(a.error(new r.Z("mapview-bad-type","Found invalid size VisualVariable",e)),l.X.NONE)}},93751:(e,t,n)=>{n.r(t),n.d(t,{createSymbolSchema:()=>a});var r=n(38716),i=n(89106);function l(e){return"line-marker"===e.type?{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,i.hF)(e)}function a(e,t,n){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,n){const a=(0,i.jj)(r.LW.FILL,t),o=n?s(a):a,u=e.clone(),c=u.outline,p=(0,i.jy)(t.symbologyType);p||(u.outline=null);const f={materialKey:o,hash:u.hash(),...l(u)};if(p)return f;const m=[];if(m.push(f),c){const e=(0,i.jj)(r.LW.LINE,{...t,isOutline:!0}),a={materialKey:n?s(e):e,hash:c.hash(),...l(c)};m.push(a)}return{type:"composite-symbol",layers:m,hash:m.reduce(((e,t)=>t.hash+e),"")}}(e,t,n);case"simple-marker":case"picture-marker":return function(e,t,n){const a=(0,i.jj)(r.LW.MARKER,t),o=n?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,n);case"simple-line":return function(e,t,n){const a=(0,i.jy)(t.symbologyType)?r.mD.DEFAULT:t.symbologyType,o=(0,i.jj)(r.LW.LINE,{...t,symbologyType:a}),u=n?s(o):o,c=e.clone(),p=c.marker;c.marker=null;const f=[];if(f.push({materialKey:u,hash:c.hash(),...l(c)}),p){const e=(0,i.jj)(r.LW.MARKER,t),a=n?s(e):e;p.color=p.color??c.color,f.push({materialKey:a,hash:p.hash(),lineWidth:c.width,...l(p)})}return{type:"composite-symbol",layers:f,hash:f.reduce(((e,t)=>t.hash+e),"")}}(e,t,n);case"text":return function(e,t,n){const a=(0,i.jj)(r.LW.TEXT,t),o=n?s(a):a,u=l(e);return{materialKey:o,hash:e.hash(),...u,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,n);case"label":return function(e,t,n){const l=e.toJSON(),a=(0,i.jj)(r.LW.LABEL,{...t,placement:l.labelPlacement});return{materialKey:n?s(a):a,hash:e.hash(),...l,labelPlacement:l.labelPlacement}}(e,t,n);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...l(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}},92927:(e,t,n)=>{n.d(t,{MD:()=>Z,Ew:()=>z,q5:()=>T});var r=n(70375),i=n(39994),l=n(67134),s=n(13802),a=n(61681),o=n(95550),u=n(84684),c=n(38716),p=n(15875),f=n(98313),m=n(41657),d=n(93751),y=(n(95215),n(10927)),g=n(14266);function b(e,t){return Math.max(e,t)}n(62611),n(81666),g.eF.metrics,new y.Z(0,0,24,24);var h=n(54680),x=n(6377),v=n(67437);const S=s.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),w="ValidationError",E={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function T(e){let t=0,n=0,r=c.mD.DEFAULT;if((0,a.pC)(e)){if(n=function(e){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;const t=e.getVisualVariablesForType("size");if(!t[0])return 0;const n=t[0];if("outline"===n.target)return 0;if("stops"===n.transformationType)return n.stops.map((e=>e.size)).reduce(b,0);if("clamped-linear"===n.transformationType){let e=-1/0,t=-1/0;return e="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map((e=>e.size)).reduce(b,0),t="number"==typeof n.minSize?n.minSize:n.minSize.stops.map((e=>e.size)).reduce(b,0),Math.max(e,t)}return"real-world-size"===n.transformationType?30:void 0}(e),"visualVariables"in e&&(t=function(e){if(!e)return c.X.NONE;let t=0;for(const n of e)if("size"===n.type){const e=(0,m.a)(n);t|=e,"outline"===n.target&&(t|=e<<4)}else"color"===n.type?t|=c.X.COLOR:"opacity"===n.type?t|=c.X.OPACITY:"rotation"===n.type&&(t|=c.X.ROTATION);return t}(e.visualVariables||[]),"dot-density"===e.type&&(r=c.mD.DOT_DENSITY)),"heatmap"===e.type&&(r=c.mD.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:t,symbologyType:c.mD.DEFAULT};if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:t,symbologyType:c.mD.PIE_CHART};if(r!==c.mD.DOT_DENSITY&&r!==c.mD.HEATMAP){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);let n=!0,i=!0;for(const e of t)if("cim"===e.type&&(i=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline,r=t&&"none"!==t.style&&"solid"!==t.style,l="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style,s="picture-fill"===e.type||l||r;r&&(n=!1),s&&(i=!1)}n?r=i?c.mD.OUTLINE_FILL_SIMPLE:c.mD.OUTLINE_FILL:i&&(r=c.mD.SIMPLE)}}return{vvFlags:t,maxVVSize:n,symbologyType:r}}function V(e,t){const n=(0,l.d9)(e);return n.some((e=>function(e,t){const n=e.labelPlacement,i=E[t];if(!e.symbol)return S.warn("No ILabelClass symbol specified."),!0;if(!i)return S.error(new r.Z("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${t} is not supported`)),!0;if(!i.includes(n)){const r=i[0];n&&S.warn(`Found invalid label placement type ${n} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}(e,t)))?[]:n}function z(e){return(0,i.Z)("esri-2d-update-debug")&&console.debug("Created new schema",F(e,!0)),F(e)}function F(e,t=!1){try{const n=function(e,t=!1){const n=new Array;return n.push(function(e,t,n=!1){const i={indexCount:0,fields:{}},l="featureReduction"in e&&e.featureReduction?"aggregate":"feature";if("sublayers"in e){const t={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:c.mD.DEFAULT},s={type:"subtype",mapping:{},target:"feature"},o={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:i,storage:s,mesh:{matcher:t,aggregateMatcher:null,labels:o,sortKey:null}},p=new Set;let f=0;for(const{renderer:u,subtypeCode:c,labelingInfo:m,labelsVisible:d}of e.sublayers){const e=Z(i,l,u,n),y=N(i,l,u),g=d&&m;if("visualVariables"in u&&u.visualVariables&&u.visualVariables.length)throw new r.Z(w,"Visual variables are currently not supported for subtype layers");if("dictionary"===e.type)throw new r.Z(w,"Dictionary renderer is not supported in subtype layers");if("subtype"===e.type)throw new r.Z(w,"Nested subtype renderers is not supported");if((0,a.pC)(y)&&"subtype"===y.type)throw new r.Z(w,"Nested subtype storage is not supported");if((0,a.pC)(y)&&(0,a.pC)(y.attributeMapping))throw new r.Z(w,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===e.type)throw new r.Z(w,"Heatmaps are not supported in subtype layers");if("pie-chart"===e.type)throw new r.Z(w,"Pie-charts are not supported in subtype layers");if(p.has(c))throw new r.Z(w,"Subtype codes for sublayers must be unique");p.add(c),t.renderers[c]=e,s.mapping[c]=y,g&&(o.classes[c]=g.map((e=>M(u,i,e,"feature",f++,n))))}return u}if("heatmap"===e.renderer.type&&"raster"===(0,h.rk)()){const{radius:t,fieldOffset:n,field:r}=e.renderer;return{type:"heatmap",aggregateFields:[],attributes:i,target:l,storage:null,mesh:{radius:t,fieldOffset:n,field:_(i,{target:l,field:r,resultType:"numeric"}).field}}}const s=function(e,t,n){const i="featureReduction"in t&&t.featureReduction;if(!i)return{fields:[],labels:[],matcher:null,rendererOverride:null};const l=[];let s=null,a=(0,v.oq)(t.geometryType),o=[],u=null;if(i)switch(i.type){case"selection":throw new r.Z(w,"Mapview does not support `selection` reduction type",i);case"cluster":case"binning":if("cluster"===i.type?a="esriGeometryPoint":"binning"===i.type&&(a="esriGeometryPolygon"),i.renderer){for(const e of i.fields)(0,x.OQ)(l,e);u=i.renderer,s=Z(null,"aggregate",i.renderer,n),o=i&&i.labelsVisible&&i.labelingInfo||[]}else if("cluster"===i.type){if(u=(0,x.S1)(l,t.renderer,i,null),i.symbol){const e=T(u);s={type:"simple",symbol:(0,d.createSymbolSchema)(i.symbol,e,n),symbologyType:e.symbologyType}}o=i&&i.labelsVisible&&i.labelingInfo||[]}}return function(e,t){const n={mesh:!0,storage:!0};for(const r of t){const{name:t,outStatistic:i}=r,{statisticType:l,onStatisticField:s}=i;let a=null,o=null,u=null;const c="numeric",p="feature";"onStatisticValueExpression"in i?o=O(e,{type:"expression",target:p,valueExpression:i.onStatisticValueExpression,resultType:c}).fieldIndex:"onStatisticNormalizationField"in i?(a=O(e,{type:"field",target:p,field:s,resultType:c}).field,u=i.onStatisticNormalizationField):a=O(e,{type:"field",target:p,field:s,resultType:c}).field,O(e,{type:"statistic",target:"aggregate",name:t,context:n,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}(e,l),{labels:V(o,"binning"===i.type?"esriGeometryPolygon":a),matcher:s,fields:l,rendererOverride:u}}(i,e,n),o=(0,v.oq)(e.geometryType),u=s.rendererOverride??e.renderer,p=Z(i,l,u,n),f=N(i,l,u),m=function(e,t){if((0,a.Wi)(t)||!t.length)return null;t.length>1&&S.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${t.length}. All but the first will be discarded`);const n=t[0],i="ascending"===n.order?"asc":"desc";return n.field?{field:n.field,order:i}:n.valueExpression?{fieldIndex:O(e,{type:"expression",target:"feature",valueExpression:n.valueExpression,resultType:"numeric"}).fieldIndex,order:i}:(S.error(new r.Z(w,"Expected to find a field or valueExpression for OrderByInfo",n)),null)}(i,e.orderBy),y=V(e.labelsVisible&&e.labelingInfo||[],o);let g=0;const b=[...y.map((e=>M(u,i,e,"feature",g++,n))),...s.labels.map((e=>M(u,i,e,"aggregate",g++,n)))];return{type:"symbol",target:l,attributes:i,aggregateFields:s.fields,storage:f,mesh:{matcher:p,labels:{type:"simple",classes:b},aggregateMatcher:s.matcher,sortKey:m}}}(e)),n}(e,t),i=function(e){return"heatmap"===e.renderer?.type&&"raster"===(0,h.rk)()?{type:"heatmap"}:{type:"symbol"}}(e),l={};n.map((t=>function(e,t,n){switch(n.target){case"feature":return void C(e,L(t),n);case"aggregate":{if(!("featureReduction"in t))return;const i=t.featureReduction;switch(i.type){case"selection":throw new r.Z(w,"Mapview does not support `selection` reduction type",i);case"binning":return C(e,L(t),n),void function(e,t,n){e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel},attributes:{}}),I(e.aggregate,n.attributes.fields)}(e,i,n);case"cluster":return C(e,L(t),n),void function(e,t,n){e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,o.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,o.F2)(t.clusterMaxSize)/64),fields:n.aggregateFields}}),I(e.aggregate,n.attributes.fields)}(e,i,n)}}}}(l,e,t)));const s=(0,a.pC)(e.subtypeCode)?`${e.subtypeField} = ${e.subtypeCode}`:null;return{source:{definitionExpression:(0,u._)(e.definitionExpression,s),fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:e.historicMoment?.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:e.timeExtent?.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,tileRenderer:i,targets:l}}catch(e){if(e.fieldName===w)return S.error(e),null;throw e}}function I(e,t){for(const n in t){const r=t[n];if(r.target!==e.name)continue;const i=e.attributes[n];i?(i.context.mesh=i.context.mesh||r.context.mesh,i.context.storage=i.context.storage||r.context.storage):e.attributes[n]=r}return e}function L(e){return[(0,a.Wg)(e.filter)?.toJSON()??null,(0,a.Wg)((0,a.Wg)(e.featureEffect)?.filter)?.toJSON()??null]}function C(e,t,n){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),I(e.feature,n.attributes.fields),e}function _(e,t){return t.field?O(e,{...t,type:"field",field:t.field}):t.valueExpression?O(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function O(e,t){switch(t.type){case"expression":{const n=t.valueExpression;if(!e.fields[n]){const r=e.indexCount++;e.fields[n]={...t,name:n,fieldIndex:r}}return{fieldIndex:e.fields[n].fieldIndex}}case"label-expression":{const n=JSON.stringify(t.label);if(!e.fields[n]){const r=e.indexCount++;e.fields[n]={...t,name:n,fieldIndex:r}}return{fieldIndex:e.fields[n].fieldIndex}}case"field":{const n=t.field;return"aggregate"===t.target&&e.fields[n]||(e.fields[n]={...t,name:n}),{field:n}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function M(e,t,n,r,i,l=!1){const s=O(t,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:n.labelExpression,labelExpressionInfo:n.labelExpressionInfo?{expression:n.labelExpressionInfo.expression}:null,symbol:!!n.symbol,where:n.where}}),{fieldIndex:a}=s,o=T(e);return{...(0,d.createSymbolSchema)(n,o,l),fieldIndex:a,target:r,index:i}}function N(e,t,n){let r;switch(n.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":r={visualVariables:!0,attributes:null};break;default:r=(0,f.EJ)(n).getStorageSpec(n)}return function(e,t,n,r){if((0,a.Wi)(n))return null;const{visualVariables:i,attributes:l}=n;let s=null;i&&"visualVariables"in r&&(s=function(e,t,n){if(!n||!n.length)return[];const r={storage:!0},i="numeric";return(0,h.tv)(n).map((n=>{const l=(0,p.nU)(n.type),{field:s,fieldIndex:a}=_(e,{target:t,valueExpression:n.valueExpression,field:n.field,context:r,resultType:i});switch(n.type){case"size":return"$view.scale"===n.valueExpression?null:{type:"size",binding:l,field:s,fieldIndex:a,normalizationField:_(e,{target:t,field:n.normalizationField,context:r,resultType:i}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:l,field:s,fieldIndex:a,normalizationField:_(e,{target:t,field:n.normalizationField,context:r,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:s,fieldIndex:a,normalizationField:_(e,{target:t,field:n.normalizationField,context:r,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:s,fieldIndex:a}}})).filter((e=>e))}(e,t,r.visualVariables));const o=(0,a.pC)(s)?4:0;let u=null;return(0,a.pC)(l)&&(u=l.map(((n,r)=>{const{field:i,fieldIndex:l}=_(e,{valueExpression:n.valueExpression,field:n.field,resultType:"numeric",target:t});return{binding:r+o,field:i,fieldIndex:l}}))),{type:"simple",target:t,attributeMapping:u,vvMapping:s}}(e,t,r,n)}function Z(e,t,n,i=!1){const l=(0,a.Pt)(e,{indexCount:0,fields:{}});switch(n.type){case"simple":case"dot-density":return function(e,t,n=!1){const r=t.getSymbols(),i=r.length?r[0]:null,l=T(t);return{type:"simple",symbol:(0,d.createSymbolSchema)(i,l,n),symbologyType:l.symbologyType}}(0,n,i);case"class-breaks":return function(e,t,n,r=!1){const i=n.backgroundFillSymbol,{field:l,fieldIndex:s}=_(e,{target:t,field:n.field,valueExpression:n.valueExpression,resultType:"numeric",context:{mesh:!0,use:"renderer.field"}}),a=n.normalizationType,o="log"===a?"esriNormalizeByLog":"percent-of-total"===a?"esriNormalizeByPercentOfTotal":"field"===a?"esriNormalizeByField":null,u=T(n),c=n.classBreakInfos.map((e=>({symbol:(0,d.createSymbolSchema)(e.symbol,u,r),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:l,fieldIndex:s,backgroundFillSymbol:(0,d.createSymbolSchema)(i,u,r),defaultSymbol:(0,d.createSymbolSchema)(n.defaultSymbol,u,r),intervals:c,normalizationField:n.normalizationField,normalizationTotal:n.normalizationTotal,normalizationType:o,isMaxInclusive:n.isMaxInclusive,symbologyType:u.symbologyType}}(l,t,n,i);case"unique-value":return function(e,t,n,i=!1){const l=[],s=n.backgroundFillSymbol,a={target:t,context:{mesh:!0},resultType:"string"};if(n.field&&"string"!=typeof n.field)throw new r.Z(w,"Expected renderer.field to be a string",n);const{field:o,fieldIndex:u}=_(e,{...a,field:n.field,valueExpression:n.valueExpression}),c=T(n);for(const e of n.uniqueValueInfos)l.push({value:""+e.value,symbol:(0,d.createSymbolSchema)(e.symbol,c,i)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:_(e,{...a,field:n.field2}).field,field3:_(e,{...a,field:n.field3}).field,fieldDelimiter:n.fieldDelimiter,backgroundFillSymbol:(0,d.createSymbolSchema)(s,c),defaultSymbol:(0,d.createSymbolSchema)(n.defaultSymbol,c),map:l,symbologyType:c.symbologyType}}(l,t,n,i);case"dictionary":return function(e,t,n=!1){const r=T(t);return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}(0,n,i);case"heatmap":return function(e,t,n=!1){const r=t.getSymbols(),i=r.length?r[0]:null,l=T(t);return{type:"heatmap",symbol:(0,d.createSymbolSchema)(i,l,n),symbologyType:l.symbologyType}}(0,n,i);case"pie-chart":return function(e,t,n=!1){const r=t.getSymbols(),i=r[0],l=r.length>1?r[1]:null,s=T(t);return{type:"pie-chart",markerSymbol:(0,d.createSymbolSchema)(i,s,n),fillSymbol:(0,d.createSymbolSchema)(l,s,n),symbologyType:s.symbologyType}}(0,n,i)}}},54680:(e,t,n)=>{n.d(t,{TT:()=>y,aR:()=>u,rk:()=>d,tv:()=>c});var r=n(70375),i=n(39994),l=n(13802),s=n(95550),a=n(35119);const o=l.Z.getLogger("esri.views.2d.layers.features.support.rendererUtils"),u=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const t=e.clone(),n=t.visualVariables.map((e=>p(e)?f(e):e));return t.visualVariables=n,t};function c(e){return e.map((e=>p(e)?f(e.clone()):e))}function p(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function f(e){return e.stops=function(e,t){return t.length<=8?t:(o.warn(`Found ${t.length} Visual Variable stops, but MapView only supports 8. Displayed stops will be simplified.`),t.length>16?function(e,t){const[n,...r]=t,i=r.pop(),l=r[0].value,a=r[r.length-1].value,o=(a-l)/6,u=[];for(let n=l;n<a;n+=o){let i=0;for(;n>=r[i].value;)i++;const l=r[i],a=t[i-1],o=n-a.value,c=l.value===a.value?1:o/(l.value-a.value);if("color"===e){const e=r[i],l=t[i-1],s=e.color.clone();s.r=m(l.color.r,s.r,c),s.g=m(l.color.g,s.g,c),s.b=m(l.color.b,s.b,c),s.a=m(l.color.a,s.a,c),u.push({value:n,color:s,label:e.label})}else if("size"===e){const e=r[i],l=t[i-1],a=(0,s.t_)(e.size),o=m((0,s.t_)(l.size),a,c);u.push({value:n,size:o,label:e.label})}else{const e=r[i],l=m(t[i-1].opacity,e.opacity,c);u.push({value:n,opacity:l,label:e.label})}}return[n,...u,i]}(e,t):function(e){const[t,...n]=e,r=n.pop();for(;n.length>6;){let e=0,t=0;for(let r=1;r<n.length;r++){const i=n[r-1],l=n[r],s=Math.abs(l.value-i.value);s>t&&(t=s,e=r)}n.splice(e,1)}return[t,...n,r]}(t))}(e.type,e.stops),e}function m(e,t,n){return(1-n)*e+n*t}function d(){if((0,i.Z)("heatmap-force-raster"))return"raster";const{supportsTextureFloat:e,supportsTextureHalfFloat:t,supportsColorBufferFloat:n,supportsColorBufferFloatBlend:r,supportsColorBufferHalfFloat:l}=(0,a.hc)("2d");return e&&n&&r||t&&l?"symbol":(0,i.Z)("heatmap-allow-raster-fallback")?"raster":"none"}function y(e){if(!e)return!0;switch(e.type){case"dot-density":if(!(0,a.hc)("2d").supportsTextureFloat)return o.error(new r.Z("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const e=d();if("none"===e||"raster"===e&&!(0,i.Z)("heatmap-force-raster")){const t=(0,a.hc)("2d"),n=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((e=>!t[e])).join(", ");if("none"===e)return o.errorOnce(new r.Z("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${n}`)),!1;"raster"===e&&o.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${n}. Feature support may be limited.`)}break}}return!0}},62611:(e,t,n)=>{n.d(t,{I_:()=>a,XA:()=>m,Zu:()=>u,ab:()=>c,eT:()=>f,y1:()=>o,yA:()=>p}),n(89060);var r=n(61681),i=n(89542),l=n(24568),s=n(35925);n(31090),n(14266),n(83264);const a=512,o=50;function u(e,t){const n=(0,s.C5)(t);if(!n)return null;const[r,i]=n.valid;return e[2]>i?[(0,l.Ue)([e[0],e[1],i,e[3]]),(0,l.Ue)([r,e[1],r+e[2]-i,e[3]])]:e[0]<r?[(0,l.Ue)([r,e[1],e[2],e[3]]),(0,l.Ue)([i-(r-e[0]),e[1],i,e[3]])]:null}function c(e){return"text"===e||"esriTS"===e}function p(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function f(e){switch((0,r.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function m(e){if(!e)return null;const{xmin:t,ymin:n,xmax:r,ymax:l,spatialReference:s}=e;return new i.Z({rings:[[[t,n],[t,l],[r,l],[r,n],[t,n]]],spatialReference:s})}},81666:(e,t,n)=>{n.d(t,{xS:()=>x,B3:()=>h});var r=n(75312),i=n(38716),l=n(89106);const s={marker:i.LW.MARKER,fill:i.LW.FILL,line:i.LW.LINE,text:i.LW.TEXT};class a{constructor(e,t,n,r){const a={minScale:t?.minScale,maxScale:t?.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(a);this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=n;const u={isOutline:!1,placement:null,symbologyType:i.mD.DEFAULT,vvFlags:n};for(const t of e){const e=s[t.type];u.isOutline="line"===t.type&&t.isOutline,t.materialKey=(0,l.jj)(e,u),t.maxVVSize=r,t.scaleInfo=a,t.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}var o=n(57989),u=n(70375),c=n(61681),p=n(78668),f=n(3466),m=n(26869),d=n(16641),y=n(38453);async function g(e,t,n){if(!e.name)throw new u.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");if(e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName)return async function(e,t){const n=y.wm.replace(/\{SymbolName\}/gi,e.name);try{const e=await(0,y.EJ)(n,t);return(0,y.KV)(e.data)}catch(e){return(0,p.k_)(e),null}}(e,n);try{return async function(e,t,n,r){const i=e.data,l={portal:n&&(0,c.pC)(n.portal)?n.portal:m.Z.getDefault(),url:(0,f.mN)(e.baseUrl),origin:"portal-item"},s=i.items.find((e=>e.name===t));if(!s)throw new u.Z("symbolstyleutils:symbol-name-not-found",`The symbol name '${t}' could not be found`,{symbolName:t});let a=(0,d.f)((0,y.v9)(s,"cimRef"),l);(0,o.XO)()&&(a=(0,o.pJ)(a));try{const e=await(0,y.EJ)(a,r);return(0,y.KV)(e.data)}catch(e){return(0,p.k_)(e),null}}(await(0,y.n2)(e,t,n),e.name,t,n)}catch(e){return(0,p.k_)(e),null}}const b=async(e,t,n)=>new a(await(0,r.c)(e.data,t,n),e.data,e.rendererKey,e.maxVVSize),h=async(e,t,n,r)=>{if(!e)return null;if("cim"===e.type)return b(e,t,n);if("web-style"===e.type){const i={type:"cim",data:await g(e,null,r),rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return b(i,t,n)}return e};function x(e){if(!e)return null;const{type:t,cim:n,url:r,materialHash:i}=e,l={cim:n,type:t,mosaicHash:i,url:r,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null};switch(t){case"marker":l.size=e.size,l.path=e.path,l.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}},6377:(e,t,n)=>{n.d(t,{OQ:()=>V,aV:()=>E,S1:()=>v,os:()=>S,yR:()=>T});var r,i=n(70375),l=n(39994),s=n(13802),a=n(61681),o=n(86630),u=n(82638),c=n(98872),p=n(36663),f=n(67134),m=n(81977),d=(n(7283),n(40266)),y=n(39835),g=n(67272);let b=r=class extends u.Z{writeLevels(e,t,n){for(const n in e){const e=this.levels[n];return void(t.stops=e)}}clone(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,g.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,g.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,f.d9)(this.levels)})}};(0,p._)([(0,m.Cb)()],b.prototype,"levels",void 0),(0,p._)([(0,y.c)("levels")],b.prototype,"writeLevels",null),b=r=(0,p._)([(0,d.j)("esri.views.2d.engine.LevelDependentSizeVariable")],b);const h=s.Z.getLogger("esri.views.2d.layers.support.clusterUtils");l.Z.add("esri-cluster-arcade-enabled",!0);const x=(0,l.Z)("esri-cluster-arcade-enabled"),v=(e,t,n,r)=>{const i=t.clone();if(!T(i))return i;if(n.fields)for(const t of n.fields)V(e,t);if("visualVariables"in i){const t=(i.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),l=S(t);t.forEach((t=>{"rotation"===t.type?t.field?t.field=F(e,t.field,"avg_angle"):t.valueExpression&&(t.field=z(e,t.valueExpression,"avg_angle"),t.valueExpression=null):t.normalizationField?(t.field=F(e,t.field,"norm",t.normalizationField),t.normalizationField=null):t.field?t.field=F(e,t.field,"avg"):(t.field=z(e,t.valueExpression,"avg"),t.valueExpression=null)})),(0,a.Wi)(l)&&!w(t)&&(t.push(E(n,r)),i.dynamicClusterSize=!0),i.visualVariables=t}switch(i.type){case"simple":break;case"unique-value":i.field?i.field=F(e,i.field,"mode"):i.valueExpression&&(i.field=z(e,i.valueExpression,"mode"),i.valueExpression=null);break;case"class-breaks":i.normalizationField?(i.field=F(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=F(e,i.field,"avg"):(i.field=z(e,i.valueExpression,"avg"),i.valueExpression=null)}return i},S=e=>{for(const t of e)if("size"===t.type)return t;return null},w=e=>{for(const t of e)if("cluster_count"===t.field)return!0;return!1},E=(e,t)=>{const n=[new c.Z({value:0,size:0}),new c.Z({value:1})];if((0,a.Wi)(t))return new u.Z({field:"cluster_count",stops:[...n,new c.Z({value:2,size:0})]});const r=Object.keys(t).reduce(((r,i)=>({...r,[i]:[...n,new c.Z({value:Math.max(2,t[i].minValue),size:e.clusterMinSize}),new c.Z({value:Math.max(3,t[i].maxValue),size:e.clusterMaxSize})]})),{});return new b({field:"cluster_count",levels:r})},T=e=>{const t=t=>h.error(new i.Z("Unsupported-renderer",t,{renderer:e}));if("unique-value"===e.type){if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===e.type){if(e.normalizationField){const n=e.normalizationType;if("field"!==n)return t(`FeatureReductionCluster does not support a normalizationType of ${n}`),!1}}else if("simple"!==e.type)return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1;if(!x){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function V(e,t){const{name:n,outStatistic:r}=t,{onStatisticField:l,onStatisticValueExpression:s,statisticType:a}=r;if(s){const t=(0,o.F)(s.toLowerCase());e.push({name:n,outStatistic:{onStatisticField:t,onStatisticValueExpression:s,statisticType:a}})}else l?e.push({name:n,outStatistic:{onStatisticField:l,statisticType:a}}):h.error(new i.Z("mapview-unsupported-field","Unable to handle field",{field:t}))}function z(e,t,n){const r=(0,o.F)(t),i="mode"===n?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===i))||e.push({name:i,outStatistic:{onStatisticField:r,onStatisticValueExpression:t,statisticType:n}}),i}function F(e,t,n,r){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const i=function(e,t,n){switch(e){case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"norm":{const e=n,r="field",i=t.toLowerCase()+",norm:"+r+","+e.toLowerCase();return"cluster_avg_"+(0,o.F)(i)}}}(n,t,r);return e.some((e=>e.name===i))||("norm"===n?e.push({name:i,outStatistic:{onStatisticField:t,onStatisticNormalizationField:r,statisticType:n}}):e.push({name:i,outStatistic:{onStatisticField:t,statisticType:n}})),i}},67437:(e,t,n)=>{n.d(t,{JV:()=>l,oq:()=>i});const r=new(n(25709).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function i(e){return r.toJSON(e)}function l(e){const{bandCount:t,attributeTable:n,colormap:r,pixelType:i}=e.rasterInfo;return 1===t&&(null!=n||null!=r||"u8"===i||"s8"===i)}}}]);