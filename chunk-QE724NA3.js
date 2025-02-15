import{c as Y,d as J,e as K}from"./chunk-3ZJKQJN5.js";import{c as X}from"./chunk-BTN4PW5Q.js";import{Oa as v,Q,R as Z,S as W,X as f,Z as U,ga as q}from"./chunk-LI5EQC2Z.js";import{Ca as p,Hb as M,Hc as G,Lb as T,Mb as A,N as D,Nb as B,Ob as j,Qa as c,Rb as O,Uc as V,Xc as l,Yb as P,Zc as H,dc as R,fa as I,ha as h,nc as k,oa as u,oc as F,q as C,qb as s,qc as $,sc as w,ta as y,tc as L,vb as z,w as N,x as b,xb as _,yb as m,zb as E}from"./chunk-CJZWYFTJ.js";var re=(()=>{class i{setHiddenAttribute(){this.hidden?typeof this.hidden=="string"?this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",this.hidden):this.renderer.setAttribute(this.elementRef.nativeElement,"hidden",""):this.renderer.removeAttribute(this.elementRef.nativeElement,"hidden")}constructor(r,a){this.elementRef=r,this.renderer=a,this.hidden=null,this.renderer.setAttribute(this.elementRef.nativeElement,"hidden","")}ngOnChanges(){this.setHiddenAttribute()}ngAfterViewInit(){this.setHiddenAttribute()}static{this.\u0275fac=function(a){return new(a||i)(s(c),s(z))}}static{this.\u0275dir=E({type:i,selectors:[["","nz-button",""],["nz-button-group"],["","nz-icon",""],["nz-icon"],["","nz-menu-item",""],["","nz-submenu",""],["nz-select-top-control"],["nz-select-placeholder"],["nz-input-group"]],inputs:{hidden:"hidden"},features:[p]})}}return i})(),x=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=u({})}}return i})();var ne=["nz-button",""],ie=["*"];function oe(i,g){i&1&&R(0,"nz-icon",0)}var ee="button",se=(()=>{let i,g=[],r=[];return class S{static{let n=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[W()],N(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,e)=>{t.nzSize=e}},metadata:n},g,r),n&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:n})}insertSpan(n,t){n.forEach(e=>{if(e.nodeName==="#text"){let o=t.createElement("span"),d=t.parentNode(e);t.insertBefore(d,o,e),t.appendChild(o,e)}})}get iconOnly(){let n=Array.from(this.elementRef?.nativeElement?.childNodes||[]),t=n.every(o=>o.nodeName!=="#text"),e=n.filter(o=>!(o.nodeName==="#comment"||o?.classList?.contains("anticon"))).length==0;return!!this.nzIconDirectiveElement&&e&&t}constructor(n,t,e,o,d){this.elementRef=n,this.cdr=t,this.renderer=e,this.nzConfigService=o,this.directionality=d,this._nzModuleName=ee,this.nzBlock=!1,this.nzGhost=!1,this.nzSearch=!1,this.nzLoading=!1,this.nzDanger=!1,this.disabled=!1,this.tabIndex=null,this.nzType=null,this.nzShape=null,this.nzSize=b(this,g,"default"),this.dir=(b(this,r),"ltr"),this.finalSize=H(()=>this.compactSize?this.compactSize():this.size()),this.size=M(this.nzSize),this.compactSize=y(Y,{optional:!0}),this.destroy$=y(v),this.loading$=new C}ngOnInit(){this.size.set(this.nzSize),this.nzConfigService.getConfigChangeEventForComponent(ee).pipe(h(this.destroy$)).subscribe(()=>{this.size.set(this.nzSize),this.cdr.markForCheck()}),this.directionality.change?.pipe(h(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,Q(this.elementRef.nativeElement,"click",{capture:!0}).pipe(h(this.destroy$)).subscribe(n=>{(this.disabled&&n.target?.tagName==="A"||this.nzLoading)&&(n.preventDefault(),n.stopImmediatePropagation())})}ngOnChanges({nzLoading:n,nzSize:t}){n&&this.loading$.next(this.nzLoading),t&&this.size.set(t.currentValue)}ngAfterViewInit(){this.insertSpan(this.elementRef.nativeElement.childNodes,this.renderer)}ngAfterContentInit(){this.loading$.pipe(I(this.nzLoading),D(()=>!!this.nzIconDirectiveElement),h(this.destroy$)).subscribe(n=>{let t=this.nzIconDirectiveElement.nativeElement;n?this.renderer.setStyle(t,"display","none"):this.renderer.removeStyle(t,"display")})}static{this.\u0275fac=function(t){return new(t||S)(s(c),s(V),s(z),s(Z),s(q))}}static{this.\u0275cmp=_({type:S,selectors:[["button","nz-button",""],["a","nz-button",""]],contentQueries:function(t,e,o){if(t&1&&$(o,f,5,c),t&2){let d;w(d=L())&&(e.nzIconDirectiveElement=d.first)}},hostAttrs:[1,"ant-btn"],hostVars:34,hostBindings:function(t,e){t&2&&(j("tabindex",e.disabled?-1:e.tabIndex===null?null:e.tabIndex)("disabled",e.disabled||null),O("ant-btn-default",e.nzType==="default")("ant-btn-primary",e.nzType==="primary")("ant-btn-dashed",e.nzType==="dashed")("ant-btn-link",e.nzType==="link")("ant-btn-text",e.nzType==="text")("ant-btn-circle",e.nzShape==="circle")("ant-btn-round",e.nzShape==="round")("ant-btn-lg",e.finalSize()==="large")("ant-btn-sm",e.finalSize()==="small")("ant-btn-dangerous",e.nzDanger)("ant-btn-loading",e.nzLoading)("ant-btn-background-ghost",e.nzGhost)("ant-btn-block",e.nzBlock)("ant-input-search-button",e.nzSearch)("ant-btn-rtl",e.dir==="rtl")("ant-btn-icon-only",e.iconOnly))},inputs:{nzBlock:[2,"nzBlock","nzBlock",l],nzGhost:[2,"nzGhost","nzGhost",l],nzSearch:[2,"nzSearch","nzSearch",l],nzLoading:[2,"nzLoading","nzLoading",l],nzDanger:[2,"nzDanger","nzDanger",l],disabled:[2,"disabled","disabled",l],tabIndex:"tabIndex",nzType:"nzType",nzShape:"nzShape",nzSize:"nzSize"},exportAs:["nzButton"],features:[G([v,{provide:J,useValue:"btn"}]),A,T([K]),p],attrs:ne,ngContentSelectors:ie,decls:2,vars:1,consts:[["nzType","loading"]],template:function(t,e){t&1&&(k(),B(0,oe,1,0,"nz-icon",0),F(1)),t&2&&P(e.nzLoading?0:-1)},dependencies:[U,f],encapsulation:2,changeDetection:0})}}})();var Ae=(()=>{class i{static{this.\u0275fac=function(a){return new(a||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=u({imports:[se,x,X]})}}return i})();export{re as a,se as b,Ae as c};
