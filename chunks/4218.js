"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[4218],{26488:(t,e,n)=>{n.d(e,{Q:()=>a});var i=n(7753),s=n(61681),r=n(17135),o=n(80657);class a{constructor(t=9,e){this.compareMinX=d,this.compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),I.prune(),b.prune(),F.prune(),N.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this._toBBox;if(y(t,n))for(I.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;y(t,o)&&(n.leaf?e(r):_(t,o)?this._all(r,e):I.push(r))}n=I.pop()}}collides(t){let e=this.data;const n=this._toBBox;if(!y(t,e))return!1;for(I.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(y(t,r)){if(e.leaf||_(t,r))return!0;I.push(s)}}e=I.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new M([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,a=!1;const l=this._toBBox(t);for(F.clear(),N.clear();n||F.length>0;){if(n||(n=(0,s.j0)(F.pop()),r=F.data[F.length-1],o=N.pop()??0,a=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),F.push(n),this._condense(F),this;a||n.leaf||!_(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(F.push(n),N.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(b.clear();n;){if(!0===n.leaf)for(const t of n.children)e(t);else b.pushArray(n.children);n=b.pop()??null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new M(t.slice(e,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new v([]);o.height=i;const a=Math.ceil(s/r),h=a*Math.ceil(Math.sqrt(r));x(t,e,n,h,this.compareMinX);for(let s=e;s<=n;s+=h){const e=Math.min(s+h-1,n);x(t,s,e,a,this.compareMinY);for(let n=s;n<=e;n+=a){const s=Math.min(n+a-1,e);o.children.push(this._build(t,n,s,i-1))}}return l(o,this._toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],a=m(o),l=p(t,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,s=n?t:i(t);F.clear();const r=this._chooseSubtree(s,this.data,e,F);for(r.children.push(t),u(r,s);e>=0&&F.data[e].children.length>this._maxEntries;)this._split(F,e),e--;this._adjustParentBBoxes(s,F,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new M(o):new v(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this.data=new v([t,e]),this.data.height=t.height+1,l(this.data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=h(t,0,o,this._toBBox),a=h(t,o,n,this._toBBox),l=g(e,a),u=m(e)+m(a);l<i?(i=l,r=o,s=u<s?u:s):l===i&&u<s&&(s=u,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:d,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this._toBBox,r=h(t,0,e,s),o=h(t,n-e,n,s);let a=f(r)+f(o);for(let i=e;i<n-e;i++){const e=t.children[i];u(r,t.leaf?s(e):e),a+=f(r)}for(let i=n-e-1;i>=e;i--){const e=t.children[i];u(o,t.leaf?s(e):e),a+=f(o)}return a}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){h(t,0,t.children.length,e,t)}function h(t,e,n,i,s){s||(s=new M([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],u(s,t.leaf?i(r):r);return s}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function d(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function y(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function x(t,e,n,i,r){const a=[e,n];for(;a.length;){const e=(0,s.j0)(a.pop()),n=(0,s.j0)(a.pop());if(e-n<=i)continue;const l=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,l,n,e,r),a.push(n,l,l,e)}}const I=new r.Z,b=new r.Z,F=new r.Z,N=new r.Z({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class w extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class M extends w{constructor(t){super(),this.children=t,this.leaf=!0}}class v extends w{constructor(t){super(),this.children=t,this.leaf=!1}}},61107:(t,e,n)=>{n.d(e,{N:()=>i});const i={convertToGEGeometry:function(t,e){return null==e?null:t.convertJSONToGeometry(e)},exportPoint:function(t,e,n){const i=new s(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i},exportPolygon:function(t,e,n){return new r(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportPolyline:function(t,e,n){return new o(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))},exportMultipoint:function(t,e,n){return new a(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))},exportExtent:function(t,e,n){const i=t.hasZ(e),s=t.hasM(e),r=new l(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}};class s{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}class r{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(t,e,n,i,s){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},33480:(t,e,n)=>{n.d(e,{Y:()=>r});var i=n(61681);function s(t,e){return t?e?4:3:e?3:2}function r(t,e,n,r,l){if((0,i.Wi)(e)||!e.lengths.length)return null;const h="upperLeft"===l?.originPosition?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const u=t.coords,d=[],c=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:f}=e,p=s(n,r);let g=0;for(const t of m){const e=o(c,f,g,t,n,r,h);e&&d.push(e),g+=t*p}if(d.sort(((t,e)=>{let i=h*t[2]-h*e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),d.length){let t=6*d[0][2];u[0]=d[0][0]/t,u[1]=d[0][1]/t,n&&(t=6*d[0][4],u[2]=0!==t?d[0][3]/t:0),(u[0]<c[0]||u[0]>c[1]||u[1]<c[2]||u[1]>c[3]||n&&(u[2]<c[4]||u[2]>c[5]))&&(u.length=0)}if(!u.length){const t=e.lengths[0]?a(f,0,m[0],n,r):null;if(!t)return null;u[0]=t[0],u[1]=t[1],n&&t.length>2&&(u[2]=t[2])}return t}function o(t,e,n,i,r,o,a=1){const l=s(r,o);let h=n,u=n+l,d=0,c=0,m=0,f=0,p=0;for(let n=0,s=i-1;n<s;n++,h+=l,u+=l){const n=e[h],i=e[h+1],s=e[h+2],o=e[u],a=e[u+1],l=e[u+2];let g=n*a-o*i;f+=g,d+=(n+o)*g,c+=(i+a)*g,r&&(g=n*l-o*s,m+=(s+l)*g,p+=g),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(f*a>0&&(f*=-1),p*a>0&&(p*=-1),!f)return null;const g=[d,c,.5*f];return r&&(g[3]=m,g[4]=.5*p),g}function a(t,e,n,i,r){const o=s(i,r);let a=e,c=e+o,m=0,f=0,p=0,g=0;for(let e=0,s=n-1;e<s;e++,a+=o,c+=o){const e=t[a],n=t[a+1],s=t[a+2],r=t[c],o=t[c+1],_=t[c+2],y=i?h(e,n,s,r,o,_):l(e,n,r,o);if(y)if(m+=y,i){const t=d(e,n,s,r,o,_);f+=y*t[0],p+=y*t[1],g+=y*t[2]}else{const t=u(e,n,r,o);f+=y*t[0],p+=y*t[1]}}return m>0?i?[f/m,p/m,g/m]:[f/m,p/m]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function l(t,e,n,i){const s=n-t,r=i-e;return Math.sqrt(s*s+r*r)}function h(t,e,n,i,s,r){const o=i-t,a=s-e,l=r-n;return Math.sqrt(o*o+a*a+l*l)}function u(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function d(t,e,n,i,s,r){return[t+.5*(i-t),e+.5*(s-e),n+.5*(r-n)]}},117:(t,e,n)=>{n.d(e,{H:()=>a});var i=n(39994),s=n(26488),r=n(24568);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),function(t,e,n){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,n)}(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},4811:(t,e,n)=>{n.d(e,{Z:()=>p});var i=n(70375),s=n(31355),r=n(13802),o=n(61681),a=n(37116),l=n(24568),h=n(12065),u=n(117),d=n(33480),c=n(59958),m=n(15540);const f={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new c.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,o.Wi)(t.centroid)&&(t.centroid=(0,d.Y)(new m.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)};class p{constructor(t){this.geometryInfo=t,this._boundsStore=new u.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&e((0,a.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}toArray(){return Array.from(this._featuresById.values())}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let s;if(this._markedIds.add(e),n?(t.displayId=n.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,h.$)((0,o.pC)(s)?s:(0,l.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},66069:(t,e,n)=>{n.d(e,{_W:()=>c,iV:()=>p,oj:()=>_});var i=n(61681),s=n(92376),r=n(61107),o=n(35925),a=n(39536);const l=[0,0];function h(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,l),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,l),[n.xmax,n.ymax]=t(e.xmax,e.ymax,l),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:d(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const i of t)n.push(d(i,e));return n}function d(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function c(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(n.map((t=>({source:t,dest:e}))))}const m=h.bind(null,a.hG),f=h.bind(null,a.R6);function p(t,e,n,i){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,a.Q8)(e,n)){const e=(0,o.sS)(n)?m(t):f(t);return e.spatialReference=n,e}return(0,s.oj)(r.N,[t],e,n,null,i)[0]}const g=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:l}=t;(0,a.Q8)(n,i)?(0,o.sS)(i)?l(e.map(m)):l(e.map(f)):l((0,s.oj)(r.N,e,n,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function _(t,e,n){return g.push(t,e,n)}},94218:(t,e,n)=>{n.r(e),n.d(e,{default:()=>G}),n(91957);var i=n(66341),s=n(70375),r=n(13802),o=n(78668),a=n(3466),l=n(92376),h=n(61107),u=n(35925),d=n(39536),c=n(59958),m=n(15540),f=n(4811),p=n(66069),g=n(14215);const _=/^\s*"([\S\s]*)"\s*$/,y=/""/g,x=[","," ",";","|","\t"];function*I(t,e,n){let i=0;for(;i<=t.length;){const s=t.indexOf(e,i),r=t.substring(i,s>-1?s:void 0);i+=r.length+e.length,n&&!r.trim()||(yield r)}}function b(t){const e=t.includes("\r\n")?"\r\n":"\n";return I(t,e,!0)}function F(t,e){return I(t,e,!1)}function*N(t,e,n,i=(()=>Object.create(null))){let s="",r="",o=0,a=i(),l=0;t:for(const h of t){const t=F(h,n);for(const h of t)if(s+=r+h,r="",o+=B(h),o%2==0){if(o>0){const t=_.exec(s);if(!t){a=i(),l=0,s="",o=0;continue t}a[e[l]]=t[1].replace(y,'"'),l++}else a[e[l]]=s,l++;s="",o=0}else r=n;0===o?(yield a,a=i(),l=0):r="\n"}}function B(t){let e=0,n=0;for(n=t.indexOf('"',n);n>=0;)e++,n=t.indexOf('"',n+1);return e}var w=n(40400),M=n(94978);function v(t){const e=t.map((t=>t.toLowerCase()));return{longitudeFieldName:t[e.indexOf(j.find((t=>e.includes(t))))],latitudeFieldName:t[e.indexOf(X.find((t=>e.includes(t))))]}}function T(t,e,n,i){const s=[],r=N(t,n,e),o=[];for(const t of r){if(10===o.length)break;o.push(t)}for(const t of n)if(t===i.longitudeFieldName||t===i.latitudeFieldName)s.push({name:t,type:"esriFieldTypeDouble",alias:t});else{const e=E(o.map((e=>e[t]))),n={name:t,type:null,alias:t};switch(e){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}return s}function E(t){if(!t.length)return"string";const e=/[^+-.,0-9]/;return t.map((t=>{let n=!1;if(""!==t){if(e.test(t))n=!0;else{let e=Y(t);if(!isNaN(e))return/[.,]/.test(t)||!Number.isInteger(e)||e>214783647||e<-214783648?"double":"integer";if(t.includes("E")){if(e=Number(t),!isNaN(e))return"double";if(t.includes(",")){if(t=t.replace(",","."),e=Number(t),!isNaN(e))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(t)?"string":S(new Date(t),t)?"date":"string":"string"}})).reduce(((t,e)=>void 0===t||t===e?e:"string"===t||"string"===e?"string":"double"===t||"double"===e?"double":void 0))}function S(t,e){if(!t||"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))return!1;let n=!0;if(!C&&/\d+\W*$/.test(e)){const t=e.match(/[a-zA-Z]{2,}/);if(t){let e=!1,i=0;for(;!e&&i<=t.length;)e=!Z.test(t[i]),i++;n=!e}}return n}const Y=function(){const t=(0,M.lt)(),e=new RegExp("^"+t.regexp+"$"),n=new RegExp("["+t.group+"\\s\\xa0]","g"),i=t.factor;return s=>{const r=e.exec(s);if(t.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1}return o=o.replace(n,"").replace(t.decimal,"."),+o*t.factor}}(),Z=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,C=Number.isNaN(new Date("technology 10").getTime()),X=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],j=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];var q=n(28790),O=n(17095),P=n(14685);const A=(0,w.bU)("esriGeometryPoint"),R=["csv"],k=[0,0];class D{constructor(t,e){this.x=t,this.y=e}}class G{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e={}){this.loadOptions=t;const[n]=await Promise.all([this._fetch(e.signal),this._checkProjection(t?.parsingOptions?.spatialReference)]),i=function(t,e){const n=e.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=b(t);let o=r.next().value;if(!o)throw new s.Z("csv-layer:empty-csv","CSV is empty",{csv:t});if(o=o.trim(),!n.delimiter){const t=function(t){const e=t.trim();let n=0,i="";for(const t of x){const s=e.split(t).length;s>n&&(n=s,i=t)}return""===i?null:i}(o);if(!t)throw new s.Z("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=t}const l=o.split(i.delimiter).filter((t=>!!t)),h=i.layerDefinition={name:(0,a.vt)(e.url,R)||"csv",drawingInfo:A,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const t=v(l);if(!n.longitudeField&&!t.longitudeFieldName||!n.latitudeField&&!t.latitudeFieldName)throw new s.Z("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||t.longitudeFieldName,latitudeFieldName:n.latitudeField||t.latitudeFieldName}}const u=T(r,i.delimiter,l,i.locationInfo);if(n.fields&&n.fields.length){const t=new Map;for(const e of n.fields)t.set(e.name.toLowerCase(),e);for(const e of u){const n=t.get(e.name.toLowerCase());if(n){const t=e.name;Object.assign(e,n),e.name=t}}}if(h.fields=u,!h.fields.some((t=>"esriFieldTypeOID"===t.type&&(h.objectIdField=t.name,!0)))){const t={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};h.objectIdField=t.name,h.fields.unshift(t)}if(h.timeInfo){const t=new q.Z(h.fields),e=h.timeInfo;if(e.startTimeField){const n=t.get(e.startTimeField);n?(e.startTimeField=n.name,n.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const n=t.get(e.endTimeField);n?(e.endTimeField=n.name,n.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const n=t.get(e.trackIdField);e.trackIdField=n?n.name:null}e.startTimeField||e.endTimeField||(h.timeInfo=null)}return i}(n,t);this.locationInfo=i.locationInfo,this.delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const r=await this._createFeatures(n);if(this._queryEngine.featureStore.addMany(r),i.layerDefinition.extent=this._queryEngine.fullExtent,i.layerDefinition.timeInfo){const{start:t,end:e}=this._queryEngine.timeExtent;i.layerDefinition.timeInfo.timeExtent=[t,e]}return i}async applyEdits(){throw new s.Z("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this.loadOptions.customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=(0,o.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),(0,o.D_)(t)||r.Z.getLogger("esri.layers.CSVLayer").error(new s.Z("csv-layer:refresh","An error occurred during refresh",{error:t}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:n}=this.loadOptions;if(!e)throw new s.Z("csv-layer:invalid-source","url not defined");const r=(0,a.mN)(e);return(await(0,i.default)(r.path,{query:{...r.query,...n},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:n,extent:i,timeInfo:s}=t.layerDefinition,r=new f.Z({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new g.q({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:n}=this.locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:r}=this._queryEngine;let o=[];const a=[],f=s.fields.filter((t=>t.name!==i)).map((t=>t.name));let p=0;const g=b(t);g.next();const _={};for(const t of s.fields)if("esriFieldTypeOID"!==t.type&&"esriFieldTypeGlobalID"!==t.type){const e=(0,O.os)(t);void 0!==e&&(_[t.name]=e)}const y=N(g,f,this.delimiter,(0,w.Dm)(_,i));for(const t of y){const r=this._parseCoordinateValue(t[e]),l=this._parseCoordinateValue(t[n]);if(null!=l&&null!=r&&!isNaN(r)&&!isNaN(l)){t[e]=r,t[n]=l;for(const i in t)if(i!==e&&i!==n)if(s.isDateField(i)){const e=new Date(t[i]);t[i]=S(e,t[i])?e.getTime():null}else if(s.isNumericField(i)){const e=Y(t[i]);isNaN(e)?t[i]=null:t[i]=e}t[i]=p,p++,o.push(new D(l,r)),a.push(t)}}if(!(0,u.fS)({wkid:4326},r))if((0,u.sS)(r))for(const t of o)[t.x,t.y]=(0,d.hG)(t.x,t.y,k);else o=(0,l.oj)(h.N,o,P.Z.WGS84,r,null,null);const x=[];for(let t=0;t<o.length;t++){const{x:e,y:n}=o[t],s=a[t];s[i]=t+1,x.push(new c.u_(new m.Z([],[e,n]),s,null,s[i]))}return x}_parseCoordinateValue(t){if(null==t||""===t)return null;let e=Y(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await(0,p._W)(u.Zn,t)}catch{throw new s.Z("csv-layer:projection-not-supported","Projection not supported")}}}},40400:(t,e,n)=>{n.d(e,{Dm:()=>u,Hq:()=>d,MS:()=>c,bU:()=>a});var i=n(39994),s=n(67134),r=n(10287),o=n(86094);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?o.I4:"esriGeometryPolyline"===t?o.ET:o.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let h=1;function u(t,e){if((0,i.Z)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let n=`this.${e} = null;`;for(const e in t)n+=`this${l.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(t[e])};`;const i=new Function(`\n      return class AttributesClass$${h++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new i}catch(n){return()=>({[e]:null,...t})}}function d(t={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(t)}}]}function c(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);