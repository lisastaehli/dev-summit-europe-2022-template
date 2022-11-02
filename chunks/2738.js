"use strict";(self.webpackChunkberlin_equal_street_names=self.webpackChunkberlin_equal_street_names||[]).push([[2738],{42738:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var i=s(36663),r=s(80020),n=s(6865),a=s(76868),o=(s(13802),s(7283),s(7753),s(39994),s(33156),s(40266)),l=s(50172),p=s(72506),h=s(51211),d=s(80347),c=s(68114),u=s(4862),y=s(26216);let g=class extends((0,d.y)(y.Z)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,t){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((t=>{const i=this._popupTemplates.get(t),r=t.hitTest(e);for(const e of r)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return r})).flat().map((t=>({type:"graphic",graphic:t,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.handles.add([(0,a.YP)((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:t,featureSet:s,layerDefinition:i}of e){const e=h.default.fromJSON(s),a=new n.Z(e.features),o=i.drawingInfo,l=t?r.Z.fromJSON(t):null,d=(0,p.i)(o.renderer),y=new u.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:a,renderer:d,container:new c.Z(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=y,this._popupTemplates.set(y,l),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=d.symbol):this.layer.lineSymbol=d.symbol:this.layer.polygonSymbol=d.symbol,this.graphicsViews.push(y),this.container.addChild(y.container)}}),a.nn),(0,a.YP)((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new l.Z({symbol:e})}),a.nn),(0,a.YP)((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new l.Z({symbol:e})}),a.nn)],"georsslayerview")}detach(){this.handles.remove("georsslayerview"),this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};g=(0,i._)([(0,o.j)("esri.views.2d.layers.GeoRSSLayerView2D")],g);const v=g},80347:(e,t,s)=>{s.d(t,{y:()=>Z});var i=s(36663),r=s(6865),n=s(58811),a=s(70375),o=s(76868),l=s(81977),p=(s(7753),s(39994),s(7283),s(40266)),h=s(10530),d=s(82064);s(13802),s(33156);let c=class extends d.wq{};c=(0,i._)([(0,p.j)("esri.views.layers.support.ClipArea")],c);const u=c;var y;let g=y=class extends u{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],g.prototype,"version",null),g=y=(0,i._)([(0,p.j)("esri.views.layers.support.ClipRect")],g);const v=g;s(91957);var b,w=s(20031),f=s(53736),m=s(91772),_=s(89542);const C={base:w.Z,key:"type",typeMap:{extent:m.Z,polygon:_.Z}};let S=b=class extends u{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new b({geometry:this.geometry.clone()})}};(0,i._)([(0,l.Cb)({types:C,json:{read:f.im,write:!0}})],S.prototype,"geometry",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],S.prototype,"version",null),S=b=(0,i._)([(0,p.j)("esri.views.layers.support.Geometry")],S);const R=S;let V=class extends u{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],V.prototype,"path",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],V.prototype,"version",null),V=(0,i._)([(0,p.j)("esri.views.layers.support.Path")],V);const P=V,q=r.Z.ofType({key:"type",base:u,typeMap:{rect:v,path:P,geometry:R}}),Z=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new q,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new h.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return(0,i._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,i._)([(0,l.Cb)({type:q,set(e){const t=(0,n.Z)(e,this._get("clips"),q);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updating",null),(0,i._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,i._)([(0,p.j)("esri.views.2d.layers.LayerView2D")],t),t}},68114:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(38716),r=s(26204);class n extends r.Z{renderChildren(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.drawPhase===i.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===i.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,s=t.effects.highlight;s.bind(e),this._renderChildren(e,s.defines),s.draw(e),s.unbind()}}},26216:(e,t,s)=>{s.d(t,{Z:()=>y});var i=s(36663),r=s(53443),n=s(31355),a=s(53280),o=s(86618),l=s(13802),p=s(61681),h=s(64189),d=s(81977),c=(s(7753),s(39994),s(7283),s(40266));let u=class extends((0,a.p)((0,o.IG)((0,h.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,p.Pt)(this.get("layer.opacity"),1)*(0,p.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,i._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,i._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,i._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,i._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,i._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,i._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,i._)([(0,d.Cb)()],u.prototype,"visible",null),(0,i._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,i._)([(0,c.j)("esri.views.layers.LayerView")],u);const y=u}}]);