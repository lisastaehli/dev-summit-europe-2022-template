"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[9112],{92557:(e,t,a)=>{a.d(t,{T:()=>n});const n={BingMapsLayer:async()=>(await a.e(1968).then(a.bind(a,31968))).default,BuildingSceneLayer:async()=>(await a.e(9871).then(a.bind(a,59871))).default,CSVLayer:async()=>(await a.e(9849).then(a.bind(a,89849))).default,ElevationLayer:async()=>(await a.e(5171).then(a.bind(a,45171))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(a,21187))).default,GroupLayer:async()=>(await a.e(6753).then(a.bind(a,56753))).default,GeoRSSLayer:async()=>(await a.e(4417).then(a.bind(a,84417))).default,GeoJSONLayer:async()=>(await a.e(1655).then(a.bind(a,81655))).default,ImageryLayer:async()=>(await Promise.all([a.e(1329),a.e(7594),a.e(8927),a.e(1825)]).then(a.bind(a,1825))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(1329),a.e(8299),a.e(7594),a.e(8927),a.e(4283)]).then(a.bind(a,54283))).default,IntegratedMeshLayer:async()=>(await a.e(6479).then(a.bind(a,96479))).default,KMLLayer:async()=>(await a.e(693).then(a.bind(a,80693))).default,LineOfSightLayer:async()=>(await a.e(2065).then(a.bind(a,92065))).default,MapImageLayer:async()=>(await Promise.all([a.e(7153),a.e(9420)]).then(a.bind(a,69420))).default,MapNotesLayer:async()=>(await a.e(849).then(a.bind(a,50849))).default,OGCFeatureLayer:async()=>(await a.e(3963).then(a.bind(a,53963))).default,OpenStreetMapLayer:async()=>(await a.e(3206).then(a.bind(a,33206))).default,PointCloudLayer:async()=>(await a.e(3108).then(a.bind(a,73108))).default,RouteLayer:async()=>(await Promise.all([a.e(3970),a.e(1741)]).then(a.bind(a,21741))).default,SceneLayer:async()=>(await Promise.resolve().then(a.bind(a,74606))).default,StreamLayer:async()=>(await a.e(5609).then(a.bind(a,75609))).default,TileLayer:async()=>(await Promise.all([a.e(7153),a.e(5369)]).then(a.bind(a,75369))).default,UnknownLayer:async()=>(await a.e(81).then(a.bind(a,40081))).default,UnsupportedLayer:async()=>(await a.e(4864).then(a.bind(a,74864))).default,VectorTileLayer:async()=>(await Promise.all([a.e(3043),a.e(8445)]).then(a.bind(a,19410))).default,VoxelLayer:async()=>(await a.e(4164).then(a.bind(a,94164))).default,WebTileLayer:async()=>(await a.e(9859).then(a.bind(a,89859))).default,WFSLayer:async()=>(await a.e(4420).then(a.bind(a,84420))).default,WMSLayer:async()=>(await a.e(1936).then(a.bind(a,61936))).default,WMTSLayer:async()=>(await a.e(9306).then(a.bind(a,9306))).default}},84513:(e,t,a)=>{a.d(t,{Y:()=>i,h:()=>l});var n=a(3466),r=a(26869);function l(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||r.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||r.Z.getDefault(),portalItem:e}}},49112:(e,t,a)=>{a.r(t),a.d(t,{getFirstLayerOrTableId:()=>f,getNumLayersAndTables:()=>h,load:()=>u,preprocessFSItemData:()=>p});var n=a(70375),r=a(92557),l=a(26869),i=a(84513),s=a(16603),o=a(40371);async function u(e,t){const a=e.instance.portalItem;if(a&&a.id)return await a.load(t),function(e){const t=e.instance.portalItem;if(!e.supportedTypes.includes(t.type))throw new n.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,l=a.portalItem,{url:u,title:y}=l,f=(0,i.h)(l);if("group"===a.type)return a.read({title:y},f),function(e,t){let a;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":a=r.T.FeatureLayer;break;case"Stream Service":a=r.T.StreamLayer;break;case"Scene Service":a=r.T.SceneLayer;break;default:throw new n.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let i;return a().then((e=>(i=e,c(t)))).then((async t=>"Feature Service"===l?(t=await p(t,e.portalItem.url),d(e,i,t)):h(t)>0?d(e,i,t):function(e,t){return e.portalItem.url?(0,o.b)(e.portalItem.url).then((a=>{function n(e){return{id:e.id,name:e.name}}a&&d(e,t,{layers:a.layers?.map(n),tables:a.tables?.map(n)})})):Promise.resolve()}(e,i)))}(a,e);u&&a.read({url:u},f);const b=await c(e,t);return b&&a.read(b,f),a.resourceReferences={portalItem:l,paths:f.readResourcePaths},a.read({title:y},f),(0,s.y)(a,f)}(e,t)}function d(e,t,a){let n=a.layers||[];const r=a.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{"Table"===e?.layerDefinition?.type&&r.push(e)})),n=n.filter((e=>"Table"!==e?.layerDefinition?.type))),n.reverse().forEach((n=>{const r=y(e,t,a,n);e.add(r)})),r.reverse().forEach((n=>{const r=y(e,t,a,n);e.tables.add(r)}))}function y(e,t,a,n){const r=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};r.read(n,t);const i=a.showLegend;null!=i&&r.read({showLegend:i},t)}return r}function c(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let t,n=!0;return e&&h(e)>0&&(null==a.layerId&&(a.layerId=f(e)),t=function(e,t){const a=e.layers;if(a)for(let e=0;e<a.length;e++)if(a[e].id===t)return a[e];const n=e.tables;if(n)for(let e=0;e<n.length;e++)if(n[e].id===t)return n[e];return null}(e,a.layerId),t&&(1===h(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),t}return e}))}async function p(e,t){if(null==e?.layers||null==e?.tables){const a=await(0,o.b)(t);(e=e||{}).layers=e.layers||a?.layers,e.tables=e.tables||a?.tables}return e}function f(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function h(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}},40371:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(66341);async function r(e){const{data:t}=await(0,n.default)(e,{responseType:"json",query:{f:"json"}});return t}}}]);