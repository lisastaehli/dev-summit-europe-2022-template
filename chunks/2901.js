"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[2901],{62901:(e,r,t)=>{t.r(r),t.d(r,{clearBoundingBoxCache:()=>y,computeIconLayerResourceSize:()=>m,computeLayerResourceSize:()=>f,computeLayerSize:()=>p,computeObjectLayerResourceSize:()=>h});var n=t(66341),o=t(70375),i=t(77234),s=t(61681),u=t(37116),c=t(19049);let a=l();function l(){return new i.Z(50)}function y(){a=l()}function f(e,r){if("icon"===e.type)return m(e,r);if("object"===e.type)return h(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,r){if("icon"===e.type)return function(e,r){return m(e,r).then((r=>{if(null==e.size)return r;const t=r[0]/r[1];return t>1?[e.size,e.size/t]:[e.size*t,e.size]}))}(e,r);if("object"===e.type)return async function(e,r){const t=await h(e,r);return(0,c.$K)(t,e)}(e,r);throw new o.Z("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function m(e,r){if(e.resource.href)return(t=e.resource.href,(0,n.default)(t,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var t;if(e.resource.primitive)return(0,s.pC)(r)?[r,r]:[256,256];throw new o.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function h(e,r){return async function(e,r){if(!e.isPrimitive){const r=e.resource.href,n=a.get(r);if(void 0!==n)return n;const o=await Promise.all([t.e(3487),t.e(3086),t.e(7312),t.e(7571),t.e(1692)]).then(t.bind(t,31692)),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let n=null;if(e.resource&&e.resource.primitive&&(n=(0,u.Ue)((0,c.Uz)(e.resource.primitive)),(0,s.pC)(r)))for(let e=0;e<n.length;e++)n[e]*=r;return n?Promise.resolve(n):Promise.reject(new o.Z("symbol:invalid-resource","The symbol does not have a valid resource"))}(e,r).then((e=>(0,u.dp)(e)))}}}]);