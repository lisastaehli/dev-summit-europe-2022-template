"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[1691],{1691:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(70375),o=n(13802),s=n(61681),a=n(78668),i=n(35925),u=n(12065),c=n(4811),l=n(66069),p=n(14215),y=n(61957),f=n(24366),d=n(48662),m=n(28790);class g{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,n=await(0,d.Bm)(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,y.O3)(n),(0,a.k_)(e);const r=(0,y.lG)(n,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,i.fS)(this._queryEngine.spatialReference,i.Zn))for(const e of r)(0,s.pC)(e.geometry)&&(e.geometry=(0,u.GH)((0,l.iV)((0,u.di)(e.geometry,this._queryEngine.geometryType,!1,!1),i.Zn,this._queryEngine.spatialReference)));let o=1;for(const e of r){const n={};(0,f.O0)(this._fieldsIndex,n,e.attributes,!0),e.attributes=n,null==e.attributes[t]&&(e.objectId=e.attributes[t]=o++)}return r}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:n,getFeatureOutputFormat:r,spatialReference:o,fields:i,geometryType:u,featureType:l,objectIdField:y,customParameters:f}=e;this._featureType=l,this._customParameters=f,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._fieldsIndex=new m.Z(i),await this._checkProjection(o),(0,a.k_)(t),this._queryEngine=new p.q({fields:i,geometryType:u,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:o,timeInfo:null,featureStore:new c.Z({geometryType:u,hasM:!1,hasZ:!1})});const d=await this._snapshotFeatures((0,s.Wg)(t.signal));return this._queryEngine.featureStore.addMany(d),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new r.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,a.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||o.Z.getLogger("esri.layers.WFSLayer").error(new r.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,l._W)(i.Zn,e)}catch{throw new r.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}},61957:(e,t,n)=>{n.d(t,{O3:()=>S,lG:()=>_,my:()=>T,q9:()=>u});var r=n(70375),o=n(59958),s=n(15540),a=n(17095);const i={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return i[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function f(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function d(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return h(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)h(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){m(e,r[0],n);for(let t=1;t<r.length;t++)g(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;m(e,r[0],n);for(let t=1;t<r.length;t++)g(e,r[t],n);return e}(e,t,n)}}function m(e,t,n){const r=f(t);!function(e){return!y(e)}(r)?h(e,r,n):w(e,r,n)}function g(e,t,n){const r=f(t);!function(e){return y(e)}(r)?h(e,r,n):w(e,r,n)}function h(e,t,n){for(const r of t)b(e,r,n);e.lengths.push(t.length)}function w(e,t,n){for(let r=t.length-1;r>=0;r--)b(e,t[r],n);e.lengths.push(t.length)}function b(e,t,n){const[r,o,s]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(s||0)}function F(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function T(e,t={}){const n=[],r=new Set,o=new Set;let s,i=!1,y=null,f=!1,{geometryType:d=null}=t,m=!1;for(const t of c(e)){const{geometry:e,properties:a,id:c}=t;if((!e||(d||(d=u(e.type)),u(e.type)===d))&&(i||(i=p(l(e))),f||(f=null!=c,f&&(s=typeof c,y=Object.keys(a).filter((e=>a[e]===c)))),f&&null!=c&&(y.length>1?y=y.filter((e=>a[e]===c)):1===y.length&&(y=a[y[0]]===c?y:[])),!m&&a)){let e=!0;for(const t in a){if(r.has(t))continue;const s=a[t];if(null==s){e=!1,o.add(t);continue}const i=F(s);"unknown"!==i?(o.delete(t),r.add(t),n.push({name:t,alias:t,type:i})):o.add(t)}m=e}}const g=y&&1===y.length&&y[0]||null;if(g)for(const e of n)if(e.name===g&&(0,a.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:n,geometryType:d,hasZ:i,objectIdFieldName:g,objectIdFieldType:s,unknownFields:Array.from(o)}}function _(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const a of e){const{geometry:e,properties:i,id:c}=a;if(e&&u(e.type)!==n)continue;const l=i||{};let p=l[r]??null;r&&null!=c&&!l[r]&&(l[r]=p=c);const y=new o.u_(e?d(new s.Z,e,t):null,l,null,p);yield y}}(c(e),t))}},48662:(e,t,n)=>{n.d(t,{M8:()=>S,ft:()=>P,FU:()=>E,Bm:()=>R,be:()=>k,eB:()=>Z}),n(91957);var r=n(66341),o=n(70375),s=n(99118),a=n(61681),i=n(78668),u=n(3466),c=n(92376),l=n(35925),p=n(59659),y=n(61957);function f(e){return function(e){const t=d.exec(e);if(!t)return null;const n=t.groups,r=+n.year,o=+n.month-1,s=+n.day,a=+(n.hours??"0"),i=+(n.minutes??"0"),u=+(n.seconds??"0");if(a>23)return null;if(i>59)return null;if(u>59)return null;const c=n.ms??"0",l=c?+c.padEnd(3,"0").substring(0,3):0;let p;if(n.isUTC)p=Date.UTC(r,o,s,a,i,u,l);else if(n.offsetSign){const e=+n.offsetHours,t=+n.offsetMinutes;p=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,s,a,i,u,l)}else p=new Date(r,o,s,a,i,u,l).getTime();return Number.isNaN(p)?null:p}(e)??function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}const d=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var m=n(94477),g=n(12512),h=n(14685),w=n(91772);const b="xlink:href",F="2.0.0",S="__esri_wfs_id__",T="wfs-layer:feature-type-not-found",_="wfs-layer:unknown-geometry-type";async function E(e,t){const n=function(e){const t=v(e);(function(e){const t=e.firstElementChild.getAttribute("version");if(t&&t!==F)throw new o.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: ${F}`)})(t),M(t);const n=t.firstElementChild,r=(0,s.Fs)(function(e){return(0,m.H)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{const t=parseInt(e.textContent.match(/(?<wkid>\d+$)/i)?.groups?.wkid,10);Number.isNaN(t)||n.add(t)};return(0,m.h)(e,{Name:e=>{const{name:n,prefix:r}=I(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,r,o;for(const s of e.children)switch(s.localName){case"LowerCorner":[t,n]=s.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=s.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:l.Zn}}(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:C(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,u.$U)(e)&&((0,u.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,u.hO)(t.operations.DescribeFeatureType.url)),(0,u.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,u.hO)(t.operations.GetFeature.url)))}(e,n),n}const x=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function C(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,m.h)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(b)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(b)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(b)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;x.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new o.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,a.Wi)(n.GetFeature.outputFormat))throw new o.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function P(e,t,n){return(0,s.sE)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function k(e,t,n,r={}){const{featureType:s,extent:u}=await async function(e,t,n,r={}){const{spatialReference:s=h.Z.WGS84}=r,i=e.readFeatureTypes(),u=t?P(i,t,n):i.next().value;if((0,a.Wi)(u))throw t?new o.Z(T,`The type '${t}' could not be found in the service`):new o.Z("wfs-layer:empty-service","The service is empty");let p=new w.Z({...u.extent,spatialReference:s});if(!(0,l.fS)(s,l.Zn))try{await(0,c.iQ)(l.Zn,s,void 0,r),p=(0,c.iV)(p,l.Zn)}catch{throw new o.Z("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:p,spatialReference:s,featureType:u}}(e,t,n,r),{fields:p,geometryType:y,swapXY:f,objectIdField:d,geometryField:m}=await async function(e,t,n={}){const[r,s]=await(0,i.as)([G(e.operations.DescribeFeatureType.url,t,n),N(e,t,n)]);if(r.error||s.error)throw new o.Z("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:r.error||s.error});const{fields:u,errors:c}=r.value,l=r.value.geometryType||s.value.geometryType,p=s.value.swapXY;if((0,a.Wi)(l))throw new o.Z(_,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:l,fields:u,errors:c});return{...Z(u),geometryType:l,swapXY:p}}(e,s.typeName,r);return{url:e.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:p,geometryField:m,geometryType:y,objectIdField:d,spatialReference:r.spatialReference??h.Z.WGS84,extent:u,swapXY:f,wfsCapabilities:e,customParameters:r.customParameters}}function Z(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new g.Z({name:S,type:"oid",alias:S}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function N(e,t,n={}){let o,s=!1;const[a,i]=await Promise.all([R(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),(0,r.default)(e.operations.GetFeature.url,{responseType:"text",query:j(t,void 0,{...n,count:1}),signal:n?.signal})]),u="FeatureCollection"===a.type&&a.features[0]?.geometry;if(u){let e;switch(o=p.Mk.fromJSON((0,y.q9)(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(s=!0)}}return{geometryType:o,swapXY:s}}async function G(e,t,n){return function(e,t){const{name:n}=I(e),r=v(t);M(r);const i=(0,s.sE)((0,m.H)(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:I(e.getAttribute("type")).name})}),(({name:e})=>e===n));if((0,a.pC)(i)){const e=(0,s.sE)((0,m.H)(r.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===i.typeName));if((0,a.pC)(e))return function(e){const t=[],n=[];let r;const s=(0,m.H)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of s){const s=a.getAttribute("name");if(!s)continue;let i,u;if(a.hasAttribute("type")?i=I(a.getAttribute("type")).name:(0,m.h)(a,{simpleType:{restriction:e=>(i=I(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!i)continue;const c="true"===a.getAttribute("nillable");let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new g.Z({name:s,alias:s,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":n.push(new g.Z({name:s,alias:s,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new g.Z({name:s,alias:s,type:"string",nullable:c,length:u??255}));break;case"datetime":case"date":n.push(new g.Z({name:s,alias:s,type:"date",nullable:c,length:u??36}));break;case"pointpropertytype":r="point",l=!0;break;case"multipointpropertytype":r="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new o.Z(_,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.Z("wfs-layer:unknown-field-type",`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}))}l&&n.push(new g.Z({name:s,alias:s,type:"geometry",nullable:c}))}for(const e of n)if("integer"===e.type&&!e.nullable&&q.has(e.name.toLowerCase())){e.type="oid";break}return{geometryType:r,fields:n,errors:t}}(e)}throw new o.Z(T,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:t,...n?.customParameters},signal:n?.signal})).data)}const q=new Set(["objectid","fid"]);async function R(e,t,n,s){let{data:a}=await(0,r.default)(e,{responseType:"text",query:j(t,n,s),signal:s?.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(s?.dateFields?.length){const e=new Set(s.dateFields);return JSON.parse(a,((t,n)=>e.has(t)?f(n):n))}return JSON.parse(a)}catch(e){throw new o.Z("wfs-layer:malformed-json","Error while parsing the response",{response:a,error:e})}}function j(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}function v(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function I(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function M(e){let t,n;if((0,m.h)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.Z(`wfs-layer:${t}`,n)}},94477:(e,t,n)=>{function r(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{H:()=>o,h:()=>r})}}]);