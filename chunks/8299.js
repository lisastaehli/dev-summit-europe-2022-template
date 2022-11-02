"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[8299],{18486:(t,e,n)=>{n.d(e,{Hq:()=>W,Mk:()=>p,P_:()=>F,Qp:()=>V,VO:()=>b,_D:()=>k,kZ:()=>L,kr:()=>z,nF:()=>S,tB:()=>A,ut:()=>T,vF:()=>q,zD:()=>M}),n(91957);var r,o,i=n(70375),s=n(61681),a=n(17321),l=n(96926),c=n(92376),f=n(91772),u=n(53446),h=n(89542),m=n(14685);function p(t,e,n){return!(0,c.Up)(t,e,n)}function x(t,e,n){const r=p(t,e,n);if(r&&!(0,c.kR)())throw new i.Z("rasterprojectionhelper-project","projection engine is not loaded");return r}(o=r||(r={}))[o.None=0]="None",o[o.North=1]="North",o[o.South=2]="South",o[o.Both=3]="Both";const g=(t,e,n,r=0)=>{if(1===n[0])return[0,0];let o=1,i=-1,s=1,a=-1;for(let e=0;e<t.length;e+=2)isNaN(t[e])||(o=o>t[e]?t[e]:o,i=i>t[e]?i:t[e],s=s>t[e+1]?t[e+1]:s,a=a>t[e+1]?a:t[e+1]);const{cols:l,rows:c}=e,f=(i-o)/l/n[0],u=(a-s)/c/n[1],h=2*r;let m=0,p=!1,x=[0,0];for(let e=0;e<l-3;e++){for(let n=0;n<c-3;n++){const r=e*c*2+2*n,o=(t[r]+t[r+4]+t[r+4*c]+t[r+4*c+4])/4,i=(t[r+1]+t[r+5]+t[r+4*c+1]+t[r+4*c+5])/4,s=Math.abs((o-t[r+2*c+2])/f),a=Math.abs((i-t[r+2*c+3])/u);if(s+a>m&&(m=s+a,x=[s,a]),h&&m>h){p=!0;break}}if(p)break}return x},d={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},y=new Map,w=new Map;async function M(){if((0,c.kR)())return null;await(0,c.zD)()}function k(t,e,n){return x(t.spatialReference,e)?n?(0,c.rS)(e,t.spatialReference,t):(0,c.rS)(t.spatialReference,e,t):null}function b(t,e,n,r=null){const o=t.spatialReference;if(o.equals(e))return t;x(o,e,r);const i=n.center,l=new f.Z({xmin:i.x-t.x/2,xmax:i.x+t.x/2,ymin:i.y-t.y/2,ymax:i.y+t.y/2,spatialReference:o}),u=(0,c.iV)(l,e,r),h=T(e);let m;if((0,s.Wi)(u)||(0,s.pC)(h)&&u.width>=h){const n=(0,a.c9)(o)/(0,a.c9)(e);m={x:t.x*n,y:t.y*n}}else m={x:u.width,y:u.height};return m}function P(t,e=.01){return(0,a.c9)(t)?e/(0,a.c9)(t):0}function S(t,e,n=null,r=!0){const o=t.spatialReference;if(o.equals(e))return t;x(o,e,n);const i=(0,c.iV)(t,e,n);if(!r||!i)return i;const a=G(o,!0),l=G(e,!0),f=P(o);return f&&(0,s.pC)(a)&&(0,s.pC)(l)&&(i.x>0&&Math.abs(t.x-a[0])<f?i.x-=l[1]-l[0]:i.x<0&&Math.abs(t.x-a[1])<f&&(i.x+=l[1]-l[0])),i}function R(t){const{inSR:e,outSR:n,datumTransformation:r,preferPE:o}=t;if(e.equals(n)){const{points:e}=I(t,null);return e}if(e.isWebMercator&&n.isWGS84||e.isWGS84&&n.isWebMercator)return function(t){const{cols:e,rows:n,xres:r,yres:o,usePixelCenter:i,inSR:s,outSR:a}=t;let{xmin:l,ymax:f}=t;i&&(l+=r/2,f-=o/2);const h=[],m=[],p=Math.max(e,n);for(let t=0;t<p;t++){const i=l+r*Math.min(e,t),p=f-o*Math.min(n,t),x=(0,c.iV)(new u.Z({x:i,y:p,spatialReference:s}),a);t<=e&&h.push(x.x),t<=n&&m.push(x.y)}const x=[];for(let t=0;t<e;t++)for(let e=0;e<n;e++)x.push([h[t],m[e]]);return x}(t);if(x(e,n,r)&&o){if(e.isGeographic)return v(t);const n=C(e);if((0,s.pC)(n))return v(t)}return function(t){const{points:e}=I(t,null),n=e.map((e=>new u.Z(e[0],e[1],t.inSR)));return(0,c.iV)(n,t.outSR,t.datumTransformation).map((t=>t?[t.x,t.y]:[NaN,NaN]))}(t)}function v(t){const{inSR:e,outSR:n,datumTransformation:r}=t,o=C(e),{points:i,mask:a}=I(t,o);if(!e.isGeographic){const t=e.wkid?l.e.coordsys(e.wkid):l.e.fromString(e.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,e.wkt);l.g.projToGeog(t,i.length,i)}if((0,s.pC)(r)&&r.steps.length&&r.steps.forEach((t=>{const e=t.wkid?l.e.geogtran(t.wkid):l.e.fromString(l.f.PE_TYPE_GEOGTRAN,t.wkt);l.h.geogToGeog(e,i.length,i,null,t.isInverse?l.f.PE_TRANSFORM_2_TO_1:l.f.PE_TRANSFORM_1_TO_2)})),!n.isGeographic){const t=C(n,!0),e=(0,s.pC)(t)&&t.isEnvelope?[t.bbox[1],t.bbox[3]]:[-90,90];!function(t,e){const[n,r]=e;for(let e=0;e<t.length;e++){const o=t[e][1];(o<n||o>r)&&(t[e]=[NaN,NaN])}}(i,e);const r=n.wkid?l.e.coordsys(n.wkid):l.e.fromString(n.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,n.wkt);l.g.geogToProj(r,i.length,i)}let c=i;if(a&&i.length!==a.length){c=[];for(let t=0,e=0;t<a.length;t++)a[t]?c.push(i[e++]):c.push([NaN,NaN])}return c}function C(t,e=!1){let n=t.wkid||t.wkt;if(!n||t.isGeographic)return null;if(n=String(n),y.has(n)){const t=y.get(n);return e?t?.gcs:t?.pcs}const r=t.wkid?l.e.coordsys(t.wkid):l.e.fromString(t.isGeographic?l.f.PE_TYPE_GEOGCS:l.f.PE_TYPE_PROJCS,t.wkt),o=_(r,P(t,1e-4)),i=_(r,0,!0);return y.set(n,{pcs:o,gcs:i}),e?i:o}function _(t,e=0,n=!1){const r=l.j.generate(t),o=n?t.horizonGcsGenerate():t.horizonPcsGenerate();if(!o?.length)return null;let i=!1,s=o.find((t=>1===t.getInclusive()&&1===t.getKind()));if(!s){if(s=o.find((t=>1===t.getInclusive()&&0===t.getKind())),!s)return null;i=!0}const a=n?0:(2===r.getNorthPoleLocation()?1:0)|(2===r.getSouthPoleLocation()?2:0),c=r.isPannableRectangle(),f=s.getCoord();if(i)return{isEnvelope:i,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-e,f[0][1]-e,f[1][0]+e,f[1][1]+e],poleLocation:a};let u=0;const h=[];let[m,p]=f[0],[x,g]=f[0];for(let t=0,e=f.length;t<e;t++){u++,u===e&&(u=0);const[n,r]=f[t],[o,i]=f[u];if(i===r)h.push([n,o,r,i,2]);else{const t=(o-n)/(i-r||1e-4),e=n-t*r;r<i?h.push([t,e,r,i,0]):h.push([t,e,i,r,1])}m=m<n?m:n,p=p<r?p:r,x=x>n?x:n,g=g>r?g:r}return{isEnvelope:!1,isPannable:c,vertices:f,coef:h,bbox:[m,p,x,g],poleLocation:a}}function I(t,e){const n=[],{cols:r,rows:o,xres:i,yres:a,usePixelCenter:l}=t;let{xmin:c,ymax:f}=t;if(l&&(c+=i/2,f-=a/2),(0,s.Wi)(e)){for(let t=0;t<r;t++)for(let e=0;e<o;e++)n.push([c+i*t,f-a*e]);return{points:n}}const u=new Uint8Array(r*o);if(e.isEnvelope){const{bbox:[t,s,l,h]}=e;for(let m=0,p=0;m<r;m++){const r=c+i*m,x=e.isPannable||r>=t&&r<=l;for(let t=0;t<o;t++,p++){const e=f-a*t;x&&e>=s&&e<=h&&(n.push([r,e]),u[p]=1)}}return{points:n,mask:u}}const{coef:h}=e,m=[];for(let t=0;t<o;t++){const e=f-a*t,n=[],r=[];for(let t=0;t<h.length;t++){const[o,i,s,a,l]=h[t];if(e===s&&s===a)n.push(o),n.push(i),r.push(2),r.push(2);else if(e>=s&&e<=a){const t=o*e+i;n.push(t),r.push(l)}}let o=n;if(n.length>2){let t=2===r[0]?0:r[0],e=n[0];o=[];for(let i=1;i<r.length;i++)2===r[i]&&i!==r.length-1||(r[i]!==t&&(o.push(0===t?Math.min(e,n[i-1]):Math.max(e,n[i-1])),t=r[i],e=n[i]),i===r.length-1&&o.push(0===r[i]?Math.min(e,n[i]):Math.max(e,n[i])));o.sort(((t,e)=>t-e))}else n[0]>n[1]&&(o=[n[1],n[0]]);m.push(o)}for(let t=0,e=0;t<r;t++){const r=c+i*t;for(let t=0;t<o;t++,e++){const o=f-a*t,i=m[t];if(2===i.length)r>=i[0]&&r<=i[1]&&(n.push([r,o]),u[e]=1);else if(i.length>2){let t=!1;for(let e=0;e<i.length;e+=2)if(r>=i[e]&&r<=i[e+1]){t=!0;break}t&&(n.push([r,o]),u[e]=1)}}}return{points:n,mask:u}}function N(t){const e=T(t[0].spatialReference);if(t.length<2||(0,s.Wi)(e))return t[0];let{xmin:n,xmax:r,ymin:o,ymax:i}=t[0];for(let n=1;n<t.length;n++){const s=t[n];r=s.xmax+e*n,o=Math.min(o,s.ymin),i=Math.max(i,s.ymax)}return new f.Z({xmin:n,xmax:r,ymin:o,ymax:i,spatialReference:t[0].spatialReference})}function A(t,e,n=null,o=!0){const i=t.spatialReference;if(i.equals(e))return t;const a=W(t),l=T(i,!0),u=T(e);if(0===a||(0,s.Wi)(l)||(0,s.Wi)(u)){const a=E(t,e,n,o);if((0,s.Wi)(l)&&(0,s.pC)(u)&&Math.abs(a.width-u)<P(e)&&(0,c.kR)()){const n=C(i);if((0,s.pC)(n)&&n.poleLocation===r.None&&t.width<(n.bbox[2]-n.bbox[0])/2)return function(t,e){const n=T(e);if((0,s.Wi)(n))return null;let{xmin:r,ymin:o,xmax:i,ymax:a}=t;const l=t.spatialReference,u=new h.Z({spatialReference:l,rings:[[[r,o],[i,o],[i,a],[r,a],[r,o]]]}),m=(0,c.iV)(u,e);if(2!==m.rings.length||!m.rings[0].length||!m.rings[1].length)return null;const{rings:p}=m,x=P(l),g=new f.Z({spatialReference:e});for(let t=0;t<2;t++){r=i=p[t][0][0],o=a=p[t][0][1];for(let e=0;e<p[t].length;e++)r=r>p[t][e][0]?p[t][e][0]:r,i=i<p[t][e][0]?p[t][e][0]:i,o=o>p[t][e][1]?p[t][e][1]:o,a=a<p[t][e][1]?p[t][e][1]:a;if(0===t)g.ymin=o,g.ymax=a,g.xmin=r,g.xmax=i;else if(g.ymin=Math.min(g.ymin,o),g.ymax=Math.max(g.ymax,a),Math.abs(i-n/2)<x)g.xmin=r,g.xmax=g.xmax+n;else{if(!(Math.abs(r+n/2)<x))return null;g.xmax=i+n}}return g}(t,e)||a}return a}const m=t.clone().normalize();if(1===m.length&&t.xmax<l&&t.xmax-l/2>P(i)){const{xmin:e,xmax:n}=t;for(let r=0;r<=a;r++){const o=0===r?e:-l/2,s=r===a?n-l*r:l/2;m[r]=new f.Z({xmin:o,xmax:s,ymin:t.ymin,ymax:t.ymax,spatialReference:i})}}return N(m.map((t=>E(t,e,n,o))).filter((t=>!!t)))}function E(t,e,n=null,r=!0,o=!0){const i=t.spatialReference;if(i.equals(e))return t;x(i,e,n);const a=(0,c.iV)(t,e,n);if(o&&e.isWebMercator&&a&&(a.ymax=Math.min(20037508.342787,a.ymax),a.ymin=Math.max(-20037508.342787,a.ymin),a.ymin>=a.ymax))return null;if(!r||!a)return a;const l=G(i,!0),f=G(e,!0);if((0,s.Wi)(l)||(0,s.Wi)(f))return a;const h=P(i,.001),m=P(i,500),p=P(e,.001);if(Math.abs(a.xmin-f[0])<p&&Math.abs(a.xmax-f[1])<p){const r=Math.abs(t.xmin-l[0]),o=Math.abs(l[1]-t.xmax);if(r<h&&o>m){a.xmin=f[0];const r=[];r.push(new u.Z(t.xmax,t.ymin,i)),r.push(new u.Z(t.xmax,(t.ymin+t.ymax)/2,i)),r.push(new u.Z(t.xmax,t.ymax,i));const o=r.map((t=>S(t,e,n))).filter((t=>!isNaN(t?.x))).map((t=>t.x));a.xmax=Math.max.apply(null,o)}if(o<h&&r>m){a.xmax=f[1];const r=[];r.push(new u.Z(t.xmin,t.ymin,i)),r.push(new u.Z(t.xmin,(t.ymin+t.ymax)/2,i)),r.push(new u.Z(t.xmin,t.ymax,i));const o=r.map((t=>S(t,e,n))).filter((t=>!isNaN(t?.x))).map((t=>t.x));a.xmin=Math.min.apply(null,o)}}else{const t=P(e,.001);Math.abs(a.xmin-f[0])<t&&(a.xmin=f[0]),Math.abs(a.xmax-f[1])<t&&(a.xmax=f[1])}return a}function T(t,e=!1){const n=e?20037508.342787:20037508.342788905;return t.isWebMercator?2*n:t.wkid&&t.isGeographic?360:2*d[t.wkid]||null}function G(t,e=!1){if(t.isGeographic)return[-180,180];const n=T(t,e);return(0,s.pC)(n)?[-n/2,n/2]:null}function Z(t,e,n,r){let o=(t-e)/n;return o-Math.floor(o)!=0?o=Math.floor(o):r&&(o-=1),o}function W(t,e=!1){const n=T(t.spatialReference);if((0,s.Wi)(n))return 0;const r=e?0:-n/2,o=P(t.spatialReference),i=!e&&Math.abs(t.xmax-n/2)<o?n/2:t.xmax,a=!e&&Math.abs(t.xmin+n/2)<o?-n/2:t.xmin;return Z(i,r,n,!0)-Z(a,r,n,!1)}function F(t){const e=t.storageInfo.origin.x,n=T(t.spatialReference,!0);if((0,s.Wi)(n))return{originX:e,halfWorldWidth:null,pyramidsInfo:null};const r=n/2,{nativePixelSize:o,storageInfo:i,extent:a}=t,{maximumPyramidLevel:l,blockWidth:c,pyramidScalingFactor:f}=i;let u=o.x;const h=[],m=(0,s.pC)(t.transform)&&"gcs-shift"===t.transform.type,p=e+(m?0:r),x=m?n-e:r-e;for(let t=0;t<=l;t++){const t=(a.xmax-e)/u/c,n=t-Math.floor(t)==0?t:Math.ceil(t),r=x/u/c,o=r-Math.floor(r)==0?r:Math.ceil(r),i=Math.floor(p/u/c),s=Math.round(p/u)%c,l=(c-Math.round(x/u)%c)%c;h.push({resolutionX:u,blockWidth:c,datsetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:s,rightPadding:l,originColumnOffset:i}),u*=f}return{originX:e,halfWorldWidth:r,pyramidsInfo:h,hasGCSSShiftTransform:m}}function V(t){const e=t.isAdaptive&&null==t.spacing;let n=t.spacing||[32,32],r=O(t),o={cols:r.size[0]+1,rows:r.size[1]+1};const i=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let a=r.outofBoundPointCount===r.offsets.length/2||e&&i?[0,0]:g(r.offsets,o,n,4);const c=(a[0]+a[1])/2,f=t.projectedExtent.spatialReference,u=t.srcBufferExtent.spatialReference;if(e&&(i||c>4)&&(p(f,u,t.datumTransformation)&&(f.isGeographic||(0,s.pC)(C(f))),n=[4,4],r=O({...t,spacing:n}),o={cols:r.size[0]+1,rows:r.size[1]+1},a=g(r.offsets,o,n,4)),r.error=a,n[0]>1&&(r.coefficients=D(r.offsets,o,i)),t.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(u.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:n};else{const e=C(f);if((0,s.pC)(e)&&!e.isEnvelope){const e=function(t){if(!t||t.isGeographic)return t;const e=String(t.wkid||t.wkt);let n;return w.has(e)?n=w.get(e):(n=(t.wkid?l.e.coordsys(t.wkid):l.e.fromString(l.f.PE_TYPE_PROJCS,t.wkt)).getGeogcs().getCode(),w.set(e,n)),new m.Z({wkid:n})}(f),s=A(t.projectedExtent,e),{offsets:a}=O({...t,srcBufferExtent:s,spacing:n}),c=D(a,o,i);r.gcsGrid={offsets:a,coefficients:c,spacing:n}}}return r}function O(t){const{projectedExtent:e,srcBufferExtent:n,pixelSize:r,datumTransformation:o,rasterTransform:i}=t,a=e.spatialReference,l=n.spatialReference,c=x(a,l),{xmin:f,ymin:h,xmax:m,ymax:p}=e,g=T(l),d=(0,s.pC)(g)&&(t.hasWrapAround||"gcs-shift"===i?.type),y=t.spacing||[32,32],w=y[0]*r.x,M=y[1]*r.y,k=1===y[0],b=Math.ceil((m-f)/w-.1/y[0])+(k?0:1),S=Math.ceil((p-h)/M-.1/y[1])+(k?0:1),v=R({cols:b,rows:S,xmin:f,ymax:p,xres:w,yres:M,inSR:a,outSR:l,datumTransformation:o,preferPE:y[0]<=4,usePixelCenter:k}),_=[];let I,N=0;const A=k?-1:NaN,{xmin:E,xmax:G,ymax:Z,width:W,height:F}=n,V=P(l,500),O=(0,s.pC)(g)&&E>0&&G>g/2;let D=!1;if(c){const t=C(a);D=(0,s.pC)(t)&&t.poleLocation>0}for(let t=0;t<b;t++){const e=[];for(let n=0;n<S;n++){let r=v[t*S+n];if(d&&r[0]>G&&r[0]>g/2-V?r[0]-=g:d&&0===t&&r[0]<0&&O&&!i&&(r[0]+=g),!r||isNaN(r[0])||isNaN(r[1]))_.push(A),_.push(A),e.push(null),N++;else{if(i){const t=i.inverseTransform(new u.Z({x:r[0],y:r[1],spatialReference:l}));r=[t.x,t.y]}e.push(r),t>0&&d&&I[n]&&r[0]<I[n][0]&&(r[0]+=g,D&&r[0]>G&&r[0]>g&&(r[0]-=g)),_.push((r[0]-E)/W),_.push((Z-r[1])/F)}}I=e}return{offsets:_,error:null,coefficients:null,outofBoundPointCount:N,spacing:y,size:k?[b,S]:[b-1,S-1]}}function D(t,e,n){const{cols:r,rows:o}=e,i=new Float32Array((r-1)*(o-1)*2*6),s=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let e=0;e<r-1;e++){for(let n=0;n<o-1;n++){let l=e*o*2+2*n;const c=t[l],f=t[l+1],u=t[l+2],h=t[l+3];l+=2*o;const m=t[l],p=t[l+1],x=t[l+2],g=t[l+3];let d=0,y=12*(n*(r-1)+e);for(let t=0;t<3;t++)i[y++]=s[d++]*c+s[d++]*u+s[d++]*x;d=0;for(let t=0;t<3;t++)i[y++]=s[d++]*f+s[d++]*h+s[d++]*g;d=0;for(let t=0;t<3;t++)i[y++]=a[d++]*c+a[d++]*m+a[d++]*x;d=0;for(let t=0;t<3;t++)i[y++]=a[d++]*f+a[d++]*p+a[d++]*g}if(n)for(let t=0;t<i.length;t++)isNaN(i[t])&&(i[t]=-1)}return i}function L(t){const e=t.clone().normalize();return 1===e.length?e[0]:N(e)}function z(t,e,n){const{storageInfo:r,pixelSize:o}=e;let i,l=!1;const{pyramidResolutions:c}=r;if((0,s.pC)(c)&&c.length){const r=(t.x+t.y)/2,s=c[c.length-1],f=(s.x+s.y)/2,h=(o.x+o.y)/2;if(r<=h)i=0;else if(r>=f)i=c.length,l=r/f>8;else{let t,e=h;for(let o=1;o<=c.length;o++){if(t=(c[o-1].x+c[o-1].y)/2,r<=t){r===t?i=o:"down"===n?(i=o-1,l=r/e>8):i="up"===n||r-e>t-r||r/e>2?o:o-1;break}e=t}}const m=0===i?o:c[i-1];return l&&Math.min(m.x,m.y)*(0,a.c9)(e.spatialReference)>19567&&(l=!1),{pyramidLevel:i,pyramidResolution:new u.Z({x:m.x,y:m.y,spatialReference:e.spatialReference}),excessiveReading:l}}const f=Math.log(t.x/o.x)/Math.LN2,h=Math.log(t.y/o.y)/Math.LN2,m=e.storageInfo.maximumPyramidLevel||0;i="down"===n?Math.floor(Math.min(f,h)):"up"===n?Math.ceil(Math.max(f,h)):Math.round((f+h)/2),i<0?i=0:i>m&&(l=i>m+3,i=m);const p=2**i;return{pyramidLevel:i,pyramidResolution:new u.Z({x:p*e.nativePixelSize.x,y:p*e.nativePixelSize.y,spatialReference:e.spatialReference}),excessiveReading:l}}function q(t,e,n=512,r=!0){const{extent:o,spatialReference:i,pixelSize:s}=t,l=b(new u.Z({x:s.x,y:s.y,spatialReference:i}),e,o);if(null==l)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const c=(l.x+l.y)/2,f=(0,a.c9)(e),h=c*f*96*39.37,m=e.isGeographic?256/n*295828763.7958547:256/n*591657527.591555;let p="vector-magdir"===t.dataType||"vector-uv"===t.dataType;const x=A(o,e);p||r&&(e.isGeographic||e.isWebMercator)&&(p=x.xmin*x.xmax<0);let g,d=h;const y=1.001;if(p){d=m;const t=e.isGeographic?1341104507446289e-21:.29858214164761665,n=t*(96*f*39.37),r=e.isGeographic?4326:3857;g=b(new u.Z({x:t,y:t,spatialReference:{wkid:r}}),i,x),g.x*=d/n,g.y*=d/n}else{g={x:s.x,y:s.y};const e=Math.ceil(Math.log(Math.min(t.width,t.height)/32)/Math.LN2);let n=0;for(;d<m*(y/2)&&n<e;)n++,d*=2,g.x*=2,g.y*=2;Math.max(d,m)/Math.min(d,m)<=y&&(d=m)}const w=[d],M=[{x:g.x,y:g.y}],k=Math.min(70.5310735,h)/y;for(;d>=k;)d/=2,g.x/=2,g.y/=2,w.push(d),M.push({x:g.x,y:g.y});return{projectedPixelSize:l,scales:w,srcResolutions:M,isCustomTilingScheme:!p}}},7928:(t,e,n)=>{n.d(e,{BH:()=>d,K:()=>C,KC:()=>x,NL:()=>c,QI:()=>g,Tg:()=>h,Yx:()=>f,nb:()=>I,wF:()=>_,xQ:()=>p});var r=n(25709),o=n(61681),i=n(34780),s=n(31329);const a=new Map;a.set("meter-per-second",1),a.set("kilometer-per-hour",.277778),a.set("knots",.514444),a.set("feet-per-second",.3048),a.set("mile-per-hour",.44704);const l=180/Math.PI,c=new r.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function f(t,e){return a.get(t)/a.get(e)||1}function u(t){return(450-t)%360}function h(t,e="geographic"){const[n,r]=t,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n)*l;return i=(360+i)%360,"geographic"===e&&(i=u(i)),[o,i]}function m(t,e="geographic"){let n=t[1];"geographic"===e&&(n=u(n)),n%=360;const r=t[0];return[r*Math.cos(n/l),r*Math.sin(n/l)]}function p(t,e,n,r="geographic"){if(!(0,s.nk)(t)||(0,o.Wi)(n))return t;const i="vector-magdir"===e?t.clone():(0,o.Wg)(x(t,e)),a=i.pixels[1];for(let t=0;t<a.length;t++)a[t]="geographic"===r?(a[t]+n[t]+270)%360:(a[t]+360-n[t])%360;return"vector-magdir"===e?i:x(i,"vector-magdir")}function x(t,e,n="geographic",r=1){if(!(0,s.nk)(t))return t;const{pixels:o,width:a,height:l}=t,c=a*l,f=o[0],u=o[1],p=t.pixelType.startsWith("f")?t.pixelType:"f32",x=i.Z.createEmptyBand(p,c),g=i.Z.createEmptyBand(p,c);let d=0;for(let t=0;t<l;t++)for(let t=0;t<a;t++)"vector-uv"===e?([x[d],g[d]]=h([f[d],u[d]],n),x[d]*=r):([x[d],g[d]]=m([f[d],u[d]],n),x[d]*=r,g[d]*=r),d++;const y=new i.Z({pixelType:p,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[x,g]});return y.updateStatistics(),y}function g(t,e,n=1){if(1===n||!(0,s.nk)(t))return t;const r=t.clone(),{pixels:o,width:i,height:a}=r,l=o[0],c=o[1];let f=0;for(let t=0;t<a;t++)for(let t=0;t<i;t++)"vector-uv"===e?(l[f]*=n,c[f]*=n):l[f]*=n,f++;return r.updateStatistics(),r}function d(t,e,n,r,i){if((0,o.Wi)(i)||!i.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(e/r),height:Math.round(n/r),resolution:t.width/e};const s=i.xmin,a=i.ymax,l=(t.xmax-t.xmin)/e*r,c=(t.ymax-t.ymin)/n*r,f=(l+c)/2;return t.xmin=s+Math.floor((t.xmin-s)/l)*l,t.xmax=s+Math.ceil((t.xmax-s)/l)*l,t.ymin=a+Math.floor((t.ymin-a)/c)*c,t.ymax=a+Math.ceil((t.ymax-a)/c)*c,{extent:t,width:Math.round(t.width/l),height:Math.round(t.height/c),resolution:f}}const y=function(t=0,e=0,n=Math.PI,r=!0){r&&(n=(2*Math.PI-n)%(2*Math.PI));const o=r?-1:1,i=13*o,s=-7*o,a=-2*o,l=-16*o,c=21.75,[f,u]=M(0,e+i,n,c),[h,m]=M(t-5.5,e+s,n,c),[p,x]=M(t+5.5,e+s,n,c),[g,d]=M(t-1.5,e+a,n,c),[y,w]=M(t+1.5,e+a,n,c),[k,b]=M(t-1.5,e+l,n,c),[P,S]=M(t+1.5,e+l,n,c);return[f,u,h,m,g,d,y,w,p,x,k,b,P,S]}(0,0,0);function w(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));const r=n?-1:1,o=5*r,i=20*r,s=25*r,a=45,l=2*r;let[c,f]=[5,0-i],[u,h]=[c+2,f],[m,p]=[u-0,h+l],[x,g]=[-5,0-s],[d,y]=[x+0,g-l],w=Math.ceil(t/5),k=Math.floor(w/10);w-=8*k;const b=[],P=[];for(let t=0;t<w/2;t++,k--){k<=0&&w%2==1&&t===(w-1)/2&&(x=0,d=x+0,g=(g+f)/2,y=g-l);const[n,r]=M(x,g,e,a);if(k>0){const[t,o]=M(u,g,e,a),[i,s]=M(c,f,e,a);b.push(t),b.push(o),b.push(n),b.push(r),b.push(i),b.push(s)}else{const[t,o]=M(u,h,e,a),[i,s]=M(m,p,e,a),[l,c]=M(d,y,e,a);P.push(n),P.push(r),P.push(l),P.push(c),P.push(i),P.push(s),P.push(t),P.push(o)}g+=o,f+=o,h+=o,p+=o,y+=o}const[S,R]=M(5,0+i,e,a),[v,C]=M(7,0+i,e,a),[_,I]=M(5,0-s,e,a),[N,A]=M(7,0-s,e,a);return{pennants:b,barbs:P,shaft:[S,R,v,C,_,I,N,A]}}function M(t,e,n,r=1){const o=Math.sqrt(t*t+e*e)/r,i=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return[o,(2*Math.PI+i-n)%(2*Math.PI)]}const k=[0,1,3,6,10,16,21,27,33,40,47,55,63],b=[0,.5,1,1.5,2],P=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function S(t,e,n,r){const o=f(r||"knots",n);let i;for(i=1;i<e.length;i++)if(i===e.length-1){if(t<e[i]*o)break}else if(t<=e[i]*o)break;return Math.min(i-1,e.length-2)}function R(t,e,n,r,o){let i=0;switch(e){case"beaufort_kn":i=S(t,k,"knots",n);break;case"beaufort_km":i=S(t,k,"kilometer-per-hour",n);break;case"beaufort_ft":i=S(t,k,"feet-per-second",n);break;case"beaufort_m":i=S(t,k,"meter-per-second",n);break;case"classified_arrow":i=S(t,o,r,n);break;case"ocean_current_m":i=S(t,b,"meter-per-second",n);break;case"ocean_current_kn":i=S(t,P,"knots",n)}return i}const v=[];function C(t,e){let n=0,r=0;const{width:o,height:i,mask:s}=t,a=t.pixels[0],l=[],u=[],h=f(c.fromJSON(e.inputUnit),"knots"),m="wind_speed"===e.style?5:Number.MAX_VALUE;for(let t=0;t<i;t++)for(let e=0;e<o;e++){const c=a[t*o+e]*h;if((!s||s[t*o+e])&&c<m){for(let r=0;r<4;r++)l[n++]=(e+.5)/o,l[n++]=(t+.5)/i,l[n++]=r<2?-.5:.5,l[n++]=r%2==0?-.5:.5,l[n++]=0,l[n++]=c;const s=4*(n/24-1);u[r++]=s,u[r++]=s+1,u[r++]=s+2,u[r++]=s+1,u[r++]=s+2,u[r++]=s+3}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(u)}}function _(t,e){return"simple_scalar"===e.style?C(t,e):"wind_speed"===e.style?function(t,e){if(0===v.length)for(let t=0;t<30;t++)v.push(w(5*t,0));const n=f(c.fromJSON(e.inputUnit),"knots"),{width:r,height:o,mask:i}=t,s=t.pixels[0],a=t.pixels[1],l=[],u=[];let h=0,m=0;for(let t=0;t<o;t++)for(let e=0;e<r;e++){const c=t*r+e,f=s[c]*n;if((!i||i[t*r+e])&&f>=5){const n=(a[c]+360)%360/180*Math.PI??2*Math.PI*Math.random(),{pennants:i,barbs:s,shaft:p}=v[Math.min(Math.floor(f/5),29)];if(i.length+s.length===0)continue;let x=l.length/6;const g=(e+.5)/r,d=(t+.5)/o;for(let t=0;t<i.length;t+=2)l[h++]=g,l[h++]=d,l[h++]=i[t],l[h++]=i[t+1]+n,l[h++]=0,l[h++]=f;for(let t=0;t<s.length;t+=2)l[h++]=g,l[h++]=d,l[h++]=s[t],l[h++]=s[t+1]+n,l[h++]=0,l[h++]=f;for(let t=0;t<p.length;t+=2)l[h++]=g,l[h++]=d,l[h++]=p[t],l[h++]=p[t+1]+n,l[h++]=0,l[h++]=f;for(let t=0;t<i.length/6;t++)u[m++]=x,u[m++]=x+1,u[m++]=x+2,x+=3;for(let t=0;t<s.length/8;t++)u[m++]=x,u[m++]=x+1,u[m++]=x+2,u[m++]=x+1,u[m++]=x+2,u[m++]=x+3,x+=4;u[m++]=x+0,u[m++]=x+1,u[m++]=x+2,u[m++]=x+1,u[m++]=x+3,u[m++]=x+2,x+=4}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(u)}}(t,e):function(t,e){const{style:n,inputUnit:r,outputUnit:o,breakValues:i}=e,s=c.fromJSON(r),a=c.fromJSON(o);let l=0,f=0;const{width:u,height:h,mask:m}=t,p=t.pixels[0],x=t.pixels[1],g=m?m.filter((t=>t>0)).length:u*h,d=new Float32Array(42*g),w=new Uint32Array(15*g);for(let t=0;t<h;t++)for(let e=0;e<u;e++){const r=t*u+e;if(!m||m[t*u+e]){const o=(x[r]+360)%360/180*Math.PI??2*Math.PI*Math.random(),c=R(p[r],n,s,a,i);for(let n=0;n<y.length;n+=2)d[l++]=(e+.5)/u,d[l++]=(t+.5)/h,d[l++]=y[n],d[l++]=y[n+1]+o,d[l++]=c,d[l++]=p[r];const m=7*(l/42-1);w[f++]=m,w[f++]=m+1,w[f++]=m+2,w[f++]=m+0,w[f++]=m+4,w[f++]=m+3,w[f++]=m+0,w[f++]=m+2,w[f++]=m+3,w[f++]=m+2,w[f++]=m+5,w[f++]=m+3,w[f++]=m+5,w[f++]=m+6,w[f++]=m+3}}return{vertexData:d,indexData:w}}(t,e)}function I(t,e,n,r=[0,0],o=.5){const{width:s,height:a,mask:l}=t,[c,f]=t.pixels,[u,p]=r,x=Math.round((s-u)/n),g=Math.round((a-p)/n),d=x*g,y=new Float32Array(d),w=new Float32Array(d),M=new Uint8Array(d),k="vector-uv"===e;for(let t=0;t<g;t++)for(let e=0;e<x;e++){let r=0;const i=t*x+e,g=Math.max(0,t*n+p),d=Math.max(0,e*n+u),b=Math.min(a,g+n),P=Math.min(s,d+n);for(let t=g;t<b;t++)for(let e=d;e<P;e++){const n=t*s+e;if(!l||l[n]){r++;const t=k?[c[n],f[n]]:[c[n],(360+f[n])%360],[e,o]=k?t:m(t);y[i]+=e,w[i]+=o}}if(r>=(b-g)*(P-d)*(1-o)){M[i]=1;const[t,e]=h([y[i]/r,w[i]/r]);y[i]=t,w[i]=e}else M[i]=0,y[i]=0,w[i]=0}const b=new i.Z({width:x,height:g,pixels:[y,w],mask:M});return b.updateStatistics(),b}},88243:(t,e,n)=>{n.d(e,{GE:()=>h,KK:()=>g}),n(91957);var r=n(39994),o=n(13802),i=n(19431),s=n(61681),a=n(78668),l=n(4157),c=n(35925),f=n(91772);const u=o.Z.getLogger("esri.views.2d.engine.flow.dataUtils");async function h(t,e,n,o){const i=performance.now(),s=function(t,e){const n=function(t,e,n,r){if(0===r)return t;const o=Math.round(3*r),i=new Array(2*o+1);let s=0;for(let t=-o;t<=o;t++){const e=Math.exp(-t*t/(r*r));i[t+o]=e,s+=e}for(let t=-o;t<=o;t++)i[t+o]/=s;const a=new Float32Array(t.length);for(let r=0;r<n;r++)for(let n=0;n<e;n++){let s=0,l=0;for(let a=-o;a<=o;a++){if(n+a<0||n+a>=e)continue;const c=i[a+o];s+=c*t[2*(r*e+(n+a))+0],l+=c*t[2*(r*e+(n+a))+1]}a[2*(r*e+n)+0]=s,a[2*(r*e+n)+1]=l}const l=new Float32Array(t.length);for(let t=0;t<e;t++)for(let r=0;r<n;r++){let s=0,c=0;for(let l=-o;l<=o;l++){if(r+l<0||r+l>=n)continue;const f=i[l+o];s+=f*a[2*((r+l)*e+t)+0],c+=f*a[2*((r+l)*e+t)+1]}l[2*(r*e+t)+0]=s,l[2*(r*e+t)+1]=c}return l}(e.data,e.width,e.height,t.smoothing);return t.interpolate?(t,r)=>{const o=Math.floor(t),i=Math.floor(r);if(o<0||o>=e.width)return[0,0];if(i<0||i>=e.height)return[0,0];const s=t-o,a=r-i,l=o,c=i,f=o<e.width-1?o+1:o,u=i<e.height-1?i+1:i,h=n[2*(c*e.width+l)],m=n[2*(c*e.width+f)],p=n[2*(u*e.width+l)],x=n[2*(u*e.width+f)],g=n[2*(c*e.width+l)+1],d=n[2*(c*e.width+f)+1];return[(h*(1-a)+p*a)*(1-s)+(m*(1-a)+x*a)*s,(g*(1-a)+n[2*(u*e.width+l)+1]*a)*(1-s)+(d*(1-a)+n[2*(u*e.width+f)+1]*a)*s]}:(t,r)=>{const o=Math.round(t),i=Math.round(r);return o<0||o>=e.width||i<0||i>=e.height?[0,0]:[n[2*(i*e.width+o)+0],n[2*(i*e.width+o)+1]]}}(e,n),c=performance.now(),f=p(e,s,n.width,n.height),h=performance.now(),m=function(t,e){const n=new l.Z,r=t.reduce(((t,e)=>t+e.length),0),o=new Float32Array(4*r),i=new Array(t.length);let s=0,a=0;for(const e of t){const t=s;for(const t of e)o[4*s+0]=t.x,o[4*s+1]=t.y,o[4*s+2]=t.t,o[4*s+3]=t.speed,s++;i[a++]={startVertex:t,numberOfVertices:e.length,totalTime:e[e.length-1].t,timeSeed:n.getFloat()}}return{lineVertices:o,lineDescriptors:i}}(f),x=performance.now(),g="Streamlines"===t?function(t,e){const{lineVertices:n,lineDescriptors:r}=t;let o=0,i=0;for(const t of r)o+=2*t.numberOfVertices,i+=6*(t.numberOfVertices-1);const s=new Float32Array(9*o),a=new Uint32Array(i);let l=0,c=0;function f(){a[c++]=l-2,a[c++]=l,a[c++]=l-1,a[c++]=l,a[c++]=l+1,a[c++]=l-1}function u(t,e,n,r,o,i,a,c){const f=9*l;let u=0;s[f+u++]=t,s[f+u++]=e,s[f+u++]=1,s[f+u++]=n,s[f+u++]=i,s[f+u++]=a,s[f+u++]=r/2,s[f+u++]=o/2,s[f+u++]=c,l++,s[f+u++]=t,s[f+u++]=e,s[f+u++]=-1,s[f+u++]=n,s[f+u++]=i,s[f+u++]=a,s[f+u++]=-r/2,s[f+u++]=-o/2,s[f+u++]=c,l++}for(const t of r){const{totalTime:e,timeSeed:r}=t;let o=null,i=null,s=null,a=null,l=null,c=null;for(let h=0;h<t.numberOfVertices;h++){const m=n[4*(t.startVertex+h)+0],p=n[4*(t.startVertex+h)+1],x=n[4*(t.startVertex+h)+2],g=n[4*(t.startVertex+h)+3];let d=null,y=null,w=null,M=null;if(h>0){d=m-o,y=p-i;const t=Math.sqrt(d*d+y*y);if(d/=t,y/=t,h>1){let t=d+l,e=y+c;const n=Math.sqrt(t*t+e*e);t/=n,e/=n;const r=Math.min(1/(t*d+e*y),10);t*=r,e*=r,w=-e,M=t}else w=-y,M=d;null!==w&&null!==M&&(u(o,i,s,w,M,e,r,g),f())}o=m,i=p,s=x,l=d,c=y,a=g}u(o,i,s,-c,l,e,r,a)}return{vertexData:s,indexData:a}}(m):function(t){const{lineVertices:e,lineDescriptors:n}=t;let r=0,o=0;for(const t of n){const e=t.numberOfVertices-1;r+=4*e*2,o+=6*e*2}const i=new Float32Array(16*r),s=new Uint32Array(o);let a,l,c,f,u,h,m,p,x,g,d,y,w,M,k=0,b=0;function P(){s[b++]=k-8,s[b++]=k-7,s[b++]=k-6,s[b++]=k-7,s[b++]=k-5,s[b++]=k-6,s[b++]=k-4,s[b++]=k-3,s[b++]=k-2,s[b++]=k-3,s[b++]=k-1,s[b++]=k-2}function S(t,e,n,r,o,s,a,l,c,f,u,h,m,p){const x=16*k;let g=0;for(const d of[1,2])for(const y of[1,2,3,4])i[x+g++]=t,i[x+g++]=e,i[x+g++]=n,i[x+g++]=r,i[x+g++]=a,i[x+g++]=l,i[x+g++]=c,i[x+g++]=f,i[x+g++]=d,i[x+g++]=y,i[x+g++]=m,i[x+g++]=p,i[x+g++]=o/2,i[x+g++]=s/2,i[x+g++]=u/2,i[x+g++]=h/2,k++}function R(t,e){let n=x+d,r=g+y;const o=Math.sqrt(n*n+r*r);n/=o,r/=o;const i=x*n+g*r;n/=i,r/=i;let s=d+w,k=y+M;const b=Math.sqrt(s*s+k*k);s/=b,k/=b;const R=d*s+y*k;s/=R,k/=R,S(a,l,c,f,-r,n,u,h,m,p,-k,s,t,e),P()}function v(t,e,n,r,o,i){if(x=d,g=y,d=w,y=M,null==x&&null==g&&(x=d,g=y),null!=u&&null!=h){w=t-u,M=e-h;const n=Math.sqrt(w*w+M*M);w/=n,M/=n}null!=x&&null!=g&&R(o,i),a=u,l=h,c=m,f=p,u=t,h=e,m=n,p=r}function C(t,e){x=d,g=y,d=w,y=M,null==x&&null==g&&(x=d,g=y),null!=x&&null!=g&&R(t,e)}for(const t of n){a=null,l=null,c=null,f=null,u=null,h=null,m=null,p=null,x=null,g=null,d=null,y=null,w=null,M=null;const{totalTime:n,timeSeed:r}=t;for(let o=0;o<t.numberOfVertices;o++)v(e[4*(t.startVertex+o)+0],e[4*(t.startVertex+o)+1],e[4*(t.startVertex+o)+2],e[4*(t.startVertex+o)+3],n,r);C(n,r)}return{vertexData:i,indexData:s}}(m),d=performance.now();return(0,r.Z)("esri-2d-profiler")&&(u.info("I.1","_createFlowFieldFromData (ms)",Math.round(c-i)),u.info("I.2","_getStreamlines (ms)",Math.round(h-c)),u.info("I.3","createAnimatedLinesData (ms)",Math.round(x-h)),u.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(d-x)),u.info("I.5","createFlowMesh (ms)",Math.round(d-i)),u.info("I.6","Mesh size (bytes)",g.vertexData.buffer.byteLength+g.indexData.buffer.byteLength)),await Promise.resolve(),(0,a.k_)(o),g}function m(t,e,n,r,o,i,s,a,l){const c=[];let f=n,u=r,h=0,[m,p]=e(f,u);m*=t.velocityScale,p*=t.velocityScale;const x=Math.sqrt(m*m+p*p);let g,d;c.push({x:f,y:u,t:h,speed:x});for(let n=0;n<t.verticesPerLine;n++){let[n,r]=e(f,u);n*=t.velocityScale,r*=t.velocityScale;const m=Math.sqrt(n*n+r*r);if(m<t.minSpeedThreshold)return c;const p=n/m,x=r/m;if(f+=p*t.segmentLength,u+=x*t.segmentLength,h+=t.segmentLength/m,Math.acos(p*g+x*d)>t.maxTurnAngle)return c;if(t.collisions){const t=Math.round(f*l),e=Math.round(u*l);if(t<0||t>s-1||e<0||e>a-1)return c;const n=i[e*s+t];if(-1!==n&&n!==o)return c;i[e*s+t]=o}c.push({x:f,y:u,t:h,speed:m}),g=p,d=x}return c}function p(t,e,n,r){const o=[],i=new l.Z,s=1/Math.max(t.lineCollisionWidth,1),a=Math.round(n*s),c=Math.round(r*s),f=new Int32Array(a*c);for(let t=0;t<f.length;t++)f[t]=-1;const u=[];for(let e=0;e<r;e+=t.lineSpacing)for(let r=0;r<n;r+=t.lineSpacing)u.push({x:r,y:e,sort:i.getFloat()});u.sort(((t,e)=>t.sort-e.sort));for(const{x:n,y:r}of u)if(i.getFloat()<t.density){const i=m(t,e,n,r,o.length,f,a,c,s);if(i.length<2)continue;o.push(i)}return o}function x(t,e){const n=e.pixels,{width:r,height:o}=e,s=new Float32Array(r*o*2),a=e.mask||new Uint8Array(r*o*2);if(e.mask||a.fill(255),"vector-uv"===t)for(let t=0;t<r*o;t++)s[2*t+0]=n[0][t],s[2*t+1]=-n[1][t];else if("vector-magdir"===t)for(let t=0;t<r*o;t++){const e=n[0][t],r=(0,i.Vl)(n[1][t]),o=Math.cos(r-Math.PI/2),a=Math.sin(r-Math.PI/2);s[2*t+0]=o*e,s[2*t+1]=a*e}return{data:s,mask:a,width:r,height:o}}async function g(t,e,n,o,i,s){const a=performance.now(),l=(0,c.C5)(e.spatialReference);if(!l){const l=await d(t,e,n,o,i,s);return(0,r.Z)("esri-2d-profiler")&&u.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-a)),(0,r.Z)("esri-2d-profiler")&&u.info("I.9","Number of parts",1),l}const[h,m]=l.valid,p=m-h,x=Math.ceil(e.width/p),g=e.width/x,y=Math.round(n/x);let w=e.xmin;const M=[],k=performance.now();for(let n=0;n<x;n++){const n=new f.Z({xmin:w,xmax:w+g,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference});M.push(d(t,n,y,o,i,s)),w+=g}const b=await Promise.all(M);(0,r.Z)("esri-2d-profiler")&&u.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-k)),(0,r.Z)("esri-2d-profiler")&&u.info("I.9","Number of parts",b.length);const P={data:new Float32Array(n*o*2),mask:new Uint8Array(n*o),width:n,height:o};let S=0;for(const t of b){for(let e=0;e<t.height;e++)for(let r=0;r<t.width;r++)S+r>=n||(P.data[2*(e*n+S+r)+0]=t.data[2*(e*t.width+r)+0],P.data[2*(e*n+S+r)+1]=t.data[2*(e*t.width+r)+1],P.mask[e*n+S+r]=t.mask[e*t.width+r]);S+=t.width}return(0,r.Z)("esri-2d-profiler")&&u.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-a)),P}async function d(t,e,n,r,o,i){const a={requestProjectedLocalDirections:!0,signal:i};if((0,s.pC)(o)&&(a.timeExtent=o),"imagery"===t.type){await t.load({signal:i});const o=t.rasterInfo.dataType,l=await t.fetchImage(e,n,r,a);return!l||(0,s.Wi)(l.pixelData)||(0,s.Wi)(l.pixelData.pixelBlock)?{data:new Float32Array(n*r*2),mask:new Uint8Array(n*r),width:n,height:r}:x(o,l.pixelData.pixelBlock)}await t.load({signal:i});const l=t.rasterInfo.dataType,c=await t.fetchPixels(e,n,r,a);return!c||(0,s.Wi)(c.pixelBlock)?{data:new Float32Array(n*r*2),mask:new Uint8Array(n*r),width:n,height:r}:x(l,c.pixelBlock)}}}]);