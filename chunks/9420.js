"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[9420],{68577:(e,r,t)=>{t.d(r,{dp:()=>a,yZ:()=>i});var s=t(17321);function i(e,r){const t=r||e.extent,i=e.width,a=(0,s.c9)(t&&t.spatialReference);return t&&i?t.width/i*a*s.hd*96:0}function a(e,r){return e/((0,s.c9)(r)*s.hd*96)}},69420:(e,r,t)=>{t.r(r),t.d(r,{default:()=>q});var s=t(36663),i=t(66341),a=t(37956),o=t(70375),n=t(53280),l=t(63592),y=t(61681),p=t(15842),u=t(78668),h=t(81977),c=(t(7753),t(39994),t(7283)),d=t(34248),m=t(40266),b=t(39835),f=t(65943),g=t(91772),v=t(68577),S=t(38481),_=t(91223),x=t(81432),C=t(87232),I=t(27668),O=t(63989),w=t(43330),L=t(18241),E=t(12478),N=t(95874),P=t(80002),D=t(2030),M=t(51599),F=t(24065),R=t(23875),T=t(93698),J=t(76912);let j=class extends((0,I.h)((0,D.n)((0,N.M)((0,P.x)((0,x.O)((0,C.Y)((0,w.q)((0,L.I)((0,p.R)((0,E.Q)((0,_.V)((0,O.N)((0,n.p)(S.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(u.r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,f.M9)(s.origin);if(e===f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,T.QV)(i,e,f.s3.SERVICE)}else if(e>f.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,T.QV)(i,e.sublayers,(0,f.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...s};let l=a;i.forEach((e=>{const r=e.write({},n);o.push(r),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(r.layers=o),l&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new F.R({layer:this,floors:s?.floors,scale:(0,v.yZ)({extent:e,width:r})*i}),o=a.toJSON();a.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;const p={};if(s?.timeExtent){const{start:e,end:r}=s.timeExtent.toJSON();p.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+t,...o,...n,...p}}async fetchImage(e,r,t,s){const a={responseType:"image",signal:s?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,r,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=a.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query});return(0,i.default)(n,a).then((e=>e.data)).catch((e=>{if((0,u.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,i.default)(this.url,r),{extent:s,fullExtent:o,timeExtent:n}=t,l=s||o;return{fullExtent:l&&g.Z.fromJSON(l),timeExtent:n&&a.Z.fromJSON({start:n[0],end:n[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,J.D)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:t}=await(0,i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});t&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}};(0,s._)([(0,h.Cb)({type:Boolean})],j.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"dpi",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"gdbVersion",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"imageFormat",void 0),(0,s._)([(0,d.r)("imageFormat",["supportedImageFormatTypes"])],j.prototype,"readImageFormat",null),(0,s._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],j.prototype,"imageMaxHeight",void 0),(0,s._)([(0,h.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],j.prototype,"imageMaxWidth",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"imageTransparency",void 0),(0,s._)([(0,h.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],j.prototype,"isReference",void 0),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],j.prototype,"labelsVisible",void 0),(0,s._)([(0,h.Cb)({type:["ArcGISMapServiceLayer"]})],j.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.Cb)({json:{read:!1,write:!1}})],j.prototype,"popupEnabled",void 0),(0,s._)([(0,h.Cb)()],j.prototype,"sourceJSON",void 0),(0,s._)([(0,h.Cb)({json:{write:{ignoreOrigin:!0}}})],j.prototype,"sublayers",void 0),(0,s._)([(0,b.c)("sublayers",{layers:{type:[R.Z]},visibleLayers:{type:[c.z8]}})],j.prototype,"writeSublayers",null),(0,s._)([(0,h.Cb)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,s._)([(0,h.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],j.prototype,"type",void 0),(0,s._)([(0,h.Cb)(M.HQ)],j.prototype,"url",void 0),j=(0,s._)([(0,m.j)("esri.layers.MapImageLayer")],j);const q=j},24065:(e,r,t)=>{t.d(r,{R:()=>d});var s=t(36663),i=t(53443),a=t(53280),o=t(61681),n=t(84684),l=t(81977),y=(t(7753),t(39994),t(7283),t(40266)),p=t(51599),u=t(21586),h=t(93698);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let d=class extends((0,a.p)(i.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,u.f)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,r=this.visibleSublayers.filter((r=>null!=r.definitionExpression||e&&null!=r.floorInfo));return r.length?JSON.stringify(r.reduce(((e,r)=>{const t=(0,u.f)(this.floors,r),s=(0,n._)(t,r.definitionExpression);return(0,o.pC)(s)&&(e[r.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,t=r=>{const s=this.scale,i=0===s,a=0===r.minScale||s<=r.minScale,o=0===r.maxScale||s>=r.maxScale;r.visible&&(i||a&&o)&&(r.sublayers?r.sublayers.forEach(t):e.unshift(r))};r&&r.forEach(t);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((r,t)=>e[t]!==r))?e:s}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"dynamicLayers",null),(0,s._)([(0,l.Cb)()],d.prototype,"floors",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"hasDynamicLayers",null),(0,s._)([(0,l.Cb)()],d.prototype,"layer",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"layers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"layerDefs",null),(0,s._)([(0,l.Cb)({type:Number})],d.prototype,"scale",void 0),(0,s._)([(0,l.Cb)(p.qG)],d.prototype,"timeExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"version",null),(0,s._)([(0,l.Cb)({readOnly:!0})],d.prototype,"visibleSublayers",null),d=(0,s._)([(0,y.j)("esri.layers.mixins.ExportImageParameters")],d)},21586:(e,r,t)=>{function s(e){const r=e.layer;return"floorInfo"in r&&r.floorInfo?.floorField&&"floors"in e.view?a(e.view.floors,r.floorInfo.floorField):null}function i(e,r){return"floorInfo"in r&&r.floorInfo?.floorField?a(e,r.floorInfo.floorField):null}function a(e,r){if(!e?.length)return null;const t=e.filter((e=>""!==e)).map((e=>`'${e}'`));return t.push("''"),`${r} IN (${t.join(",")}) OR ${r} IS NULL`}t.d(r,{c:()=>s,f:()=>i})}}]);