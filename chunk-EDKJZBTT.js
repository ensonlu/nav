import{a as de,b as he}from"./chunk-KB3PTUB6.js";import{n as me}from"./chunk-6JYYOYUX.js";import{c as re,e as le,f as ce}from"./chunk-6JUMGQJM.js";import{b as qt,g as Gt,h as Ut}from"./chunk-JIPRTMW7.js";import{Ga as kt,O as Jt,R as te,S as tt,X as pt,Z as ut,aa as ee,db as oe,f as Kt,fb as et,ga as Nt,gb as it,ja as ie,pa as ne,t as wt,va as ae,wa as se}from"./chunk-LI5EQC2Z.js";import{$b as ot,Ac as jt,Ca as vt,Da as T,Ea as g,Hc as Zt,Ic as ct,J as Z,La as z,M as at,Ma as q,Mb as V,N as Mt,Nb as f,O as Lt,Ob as G,Pb as p,Qa as W,Qb as xt,Qc as dt,Ra as Ct,Rb as R,Sb as Qt,Uc as ht,W as Ot,Wa as Ht,Xc as y,Yb as k,Z as Ft,_b as st,ac as rt,bc as C,cc as x,dc as Q,ec as U,fa as gt,fc as K,ha as F,hc as B,jc as Xt,kc as D,l as Y,ma as Wt,mc as h,nc as It,oa as Pt,oc as lt,pb as u,q as nt,qa as $t,qb as b,qc as X,rb as yt,rc as L,sc as S,t as Rt,ta as H,tc as w,u as Bt,ud as mt,w as j,x as E,xb as M,xc as J,yb as Vt,yc as St,z as Tt,zb as P,zc as Yt}from"./chunk-CJZWYFTJ.js";function Se(n,d){if(n&1&&(U(0),Q(1,"nz-icon",1),K()),n&2){let t=d.$implicit;u(),p("nzType",t)}}var we=()=>({minWidth:"46px"}),Ne=()=>({visible:!1});function ke(n,d){if(n&1&&(U(0),St(1),K()),n&2){let t=h().$implicit;u(),jt(" ",t.tab.label," ")}}function De(n,d){if(n&1){let t=B();C(0,"li",7),D("click",function(){let i=T(t).$implicit,a=h(2);return g(a.onSelect(i))})("contextmenu",function(i){let a=T(t).$implicit,l=h(2);return g(l.onContextmenu(a,i))}),f(1,ke,2,1,"ng-container",8),x()}if(n&2){let t=d.$implicit;R("ant-tabs-dropdown-menu-item-disabled",t.disabled),p("nzSelected",t.active)("nzDisabled",t.disabled),u(),p("nzStringTemplateOutlet",t.tab.label)("nzStringTemplateOutletContext",ct(6,Ne))}}function Ae(n,d){if(n&1&&(C(0,"ul",4),ot(1,De,2,7,"li",6,st),x()),n&2){let t=h();u(),rt(t.items)}}function Ee(n,d){if(n&1){let t=B();C(0,"button",9),D("click",function(){T(t);let i=h();return g(i.addClicked.emit())}),x()}if(n&2){let t=h();p("addIcon",t.addIcon)}}var Re=["navWarp"],Be=["navList"],Me=["*"];function Le(n,d){if(n&1){let t=B();C(0,"button",8),D("click",function(){T(t);let i=h();return g(i.addClicked.emit())}),x()}if(n&2){let t=h();p("addIcon",t.addIcon),G("tabindex",-1)}}function Oe(n,d){}function Fe(n,d){if(n&1&&(C(0,"div",7),f(1,Oe,0,0,"ng-template",9),x()),n&2){let t=h();u(),p("ngTemplateOutlet",t.extraTemplate)}}var We=["nz-tab-body",""];function Pe(n,d){}function $e(n,d){if(n&1&&(U(0),Q(1,"nz-icon",1),K()),n&2){let t=d.$implicit;u(),p("nzType",t)}}var He=["contentTemplate"],Ve=[[["","nz-tab-link",""]],"*"],Qe=["[nz-tab-link]","*"];function Xe(n,d){n&1&&lt(0)}function Ye(n,d){n&1&&lt(0,1)}var je=()=>({visible:!0});function Ze(n,d){if(n&1&&(U(0),St(1),K()),n&2){let t=h().$implicit;u(),Yt(t.label)}}function qe(n,d){if(n&1){let t=B();C(0,"button",10),D("click",function(i){T(t);let a=h().$index,l=h(2);return g(l.onClose(a,i))}),x()}if(n&2){let t=h().$implicit;p("closeIcon",t.nzCloseIcon)}}function Ge(n,d){if(n&1){let t=B();C(0,"div",6),D("click",function(i){let a=T(t),l=a.$implicit,c=a.$index,m=h(2);return g(m.clickNavItem(l,c,i))})("contextmenu",function(i){let a=T(t).$implicit,l=h(2);return g(l.contextmenuNavItem(a,i))}),C(1,"button",7),f(2,Ze,2,1,"ng-container",8)(3,qe,1,1,"button",9),x()()}if(n&2){let t=d.$implicit,e=d.$index,i=h(2);xt("margin-right",i.position==="horizontal"?i.nzTabBarGutter:null,"px")("margin-bottom",i.position==="vertical"?i.nzTabBarGutter:null,"px"),R("ant-tabs-tab-active",i.nzSelectedIndex===e)("ant-tabs-tab-disabled",t.nzDisabled),u(),p("id",i.getTabContentId(e))("disabled",t.nzDisabled)("tab",t)("active",i.nzSelectedIndex===e),G("tabIndex",i.getTabIndex(t,e))("aria-disabled",t.nzDisabled)("aria-selected",i.nzSelectedIndex===e&&!i.nzHideAll)("aria-controls",i.getTabContentId(e)),u(),p("nzStringTemplateOutlet",t.label)("nzStringTemplateOutletContext",ct(19,je)),u(),k(t.nzClosable&&i.closable&&!t.nzDisabled?3:-1)}}function Ue(n,d){if(n&1){let t=B();C(0,"nz-tabs-nav",4),D("tabScroll",function(i){T(t);let a=h();return g(a.nzTabListScroll.emit(i))})("selectFocusedIndex",function(i){T(t);let a=h();return g(a.setSelectedIndex(i))})("addClicked",function(){T(t);let i=h();return g(i.onAdd())}),ot(1,Ge,4,20,"div",5,st),x()}if(n&2){let t=h();Qt(t.nzTabBarStyle),p("selectedIndex",t.nzSelectedIndex||0)("inkBarAnimated",t.inkBarAnimated)("addable",t.addable)("addIcon",t.nzAddIcon)("hideBar",t.nzHideAll)("position",t.position)("extraTemplate",t.nzTabBarExtraContent),u(),rt(t.tabs)}}function Ke(n,d){}function Je(n,d){if(n&1&&f(0,Ke,0,0,"ng-template",11),n&2){h();let t=J(4);p("ngTemplateOutlet",t)}}function ti(n,d){}function ei(n,d){if(n&1&&f(0,ti,0,0,"ng-template",11),n&2){h(2);let t=J(4);p("ngTemplateOutlet",t)}}function ii(n,d){if(n&1&&f(0,ei,1,1,null,11),n&2){let t=h().$index,e=h(2);k(e.nzSelectedIndex===t?0:-1)}}function ni(n,d){}function ai(n,d){if(n&1&&f(0,ni,0,0,"ng-template",11),n&2){h(2);let t=J(4);p("ngTemplateOutlet",t)}}function si(n,d){if(n&1&&f(0,ai,1,1,null,11),n&2){let t=h(),e=t.$implicit,i=t.$index,a=h(2);k(a.nzSelectedIndex===i||e.hasBeenActive?0:-1)}}function oi(n,d){if(n&1&&Q(0,"div",12),n&2){let t=h(),e=t.$implicit,i=t.$index,a=h(2);p("id",a.getTabContentId(i))("active",a.nzSelectedIndex===i)("content",e.content)("animated",a.tabPaneAnimated),G("aria-labelledby",a.getTabContentId(i))}}function ri(n,d){if(n&1&&f(0,Je,1,1,null,11)(1,ii,1,1)(2,si,1,1)(3,oi,1,5,"ng-template",null,0,dt),n&2){let t=d.$implicit,e=h(2);k(t.nzForceRender?0:e.nzDestroyInactiveTabPane?1:2)}}function li(n,d){if(n&1&&ot(0,ri,5,1,null,null,st),n&2){let t=h();rt(t.tabs)}}var zt=(()=>{class n{constructor(t){this.elementRef=t,this.addIcon="plus",this.element=this.elementRef.nativeElement}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}static{this.\u0275fac=function(e){return new(e||n)(b(W))}}static{this.\u0275cmp=M({type:n,selectors:[["nz-tab-add-button"],["button","nz-tab-add-button",""]],hostAttrs:["aria-label","Add tab","type","button",1,"ant-tabs-nav-add"],inputs:{addIcon:"addIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&f(0,Se,2,1,"ng-container",0),e&2&&p("nzStringTemplateOutlet",i.addIcon)},dependencies:[it,et,ut,pt],encapsulation:2})}}return n})(),pe=(()=>{class n{get _animated(){return this.animationMode!=="NoopAnimations"&&this.animated}constructor(t,e){this.elementRef=t,this.ngZone=e,this.position="horizontal",this.animated=!0,this.animationMode=H(Ht,{optional:!0})}alignToElement(t){this.ngZone.runOutsideAngular(()=>{kt(()=>this.setStyles(t))})}setStyles(t){let e=this.elementRef.nativeElement;this.position==="horizontal"?(e.style.top="",e.style.height="",e.style.left=this.getLeftPosition(t),e.style.width=this.getElementWidth(t)):(e.style.left="",e.style.width="",e.style.top=this.getTopPosition(t),e.style.height=this.getElementHeight(t))}getLeftPosition(t){return t?`${t.offsetLeft||0}px`:"0"}getElementWidth(t){return t?`${t.offsetWidth||0}px`:"0"}getTopPosition(t){return t?`${t.offsetTop||0}px`:"0"}getElementHeight(t){return t?`${t.offsetHeight||0}px`:"0"}static{this.\u0275fac=function(e){return new(e||n)(b(W),b(q))}}static{this.\u0275dir=P({type:n,selectors:[["nz-tabs-ink-bar"],["","nz-tabs-ink-bar",""]],hostAttrs:[1,"ant-tabs-ink-bar"],hostVars:2,hostBindings:function(e,i){e&2&&R("ant-tabs-ink-bar-animated",i._animated)},inputs:{position:"position",animated:"animated"}})}}return n})(),ze=(()=>{class n{constructor(t){this.elementRef=t,this.disabled=!1,this.active=!1,this.el=t.nativeElement,this.parentElement=this.el.parentElement}focus(){this.el.focus()}get width(){return this.parentElement.offsetWidth}get height(){return this.parentElement.offsetHeight}get left(){return this.parentElement.offsetLeft}get top(){return this.parentElement.offsetTop}static{this.\u0275fac=function(e){return new(e||n)(b(W))}}static{this.\u0275dir=P({type:n,selectors:[["","nzTabNavItem",""]],inputs:{disabled:[2,"disabled","disabled",y],tab:"tab",active:[2,"active","active",y]},features:[V]})}}return n})(),Dt=(()=>{class n{constructor(t,e){this.cdr=t,this.elementRef=e,this.items=[],this.addable=!1,this.addIcon="plus",this.addClicked=new z,this.selected=new z,this.menuOpened=!1,this.element=this.elementRef.nativeElement}onSelect(t){t.disabled||(t.tab.nzClick.emit(),this.selected.emit(t))}onContextmenu(t,e){t.disabled||t.tab.nzContextmenu.emit(e)}showItems(){clearTimeout(this.closeAnimationWaitTimeoutId),this.menuOpened=!0,this.cdr.markForCheck()}menuVisChange(t){t||(this.closeAnimationWaitTimeoutId=setTimeout(()=>{this.menuOpened=!1,this.cdr.markForCheck()},150))}getElementWidth(){return this.element?.offsetWidth||0}getElementHeight(){return this.element?.offsetHeight||0}ngOnDestroy(){clearTimeout(this.closeAnimationWaitTimeoutId)}static{this.\u0275fac=function(e){return new(e||n)(b(ht),b(W))}}static{this.\u0275cmp=M({type:n,selectors:[["nz-tab-nav-operation"]],hostAttrs:[1,"ant-tabs-nav-operations"],hostVars:2,hostBindings:function(e,i){e&2&&R("ant-tabs-nav-operations-hidden",i.items.length===0)},inputs:{items:"items",addable:[2,"addable","addable",y],addIcon:"addIcon"},outputs:{addClicked:"addClicked",selected:"selected"},exportAs:["nzTabNavOperation"],features:[V],decls:7,vars:6,consts:[["dropdownTrigger","nzDropdown"],["menu","nzDropdownMenu"],["nz-dropdown","","type","button","tabindex","-1","aria-hidden","true","nzOverlayClassName","nz-tabs-dropdown",1,"ant-tabs-nav-more",3,"nzVisibleChange","mouseenter","nzDropdownMenu","nzOverlayStyle","nzMatchWidthElement"],["nzType","ellipsis"],["nz-menu",""],["nz-tab-add-button","",3,"addIcon"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"ant-tabs-dropdown-menu-item-disabled","nzSelected","nzDisabled"],["nz-menu-item","",1,"ant-tabs-dropdown-menu-item",3,"click","contextmenu","nzSelected","nzDisabled"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["nz-tab-add-button","",3,"click","addIcon"]],template:function(e,i){if(e&1){let a=B();C(0,"button",2,0),D("nzVisibleChange",function(c){return T(a),g(i.menuVisChange(c))})("mouseenter",function(){return T(a),g(i.showItems())}),Q(2,"nz-icon",3),x(),C(3,"nz-dropdown-menu",null,1),f(5,Ae,3,0,"ul",4),x(),f(6,Ee,1,1,"button",5)}if(e&2){let a=J(4);p("nzDropdownMenu",a)("nzOverlayStyle",ct(5,we))("nzMatchWidthElement",null),u(5),k(i.menuOpened?5:-1),u(),k(i.addable?6:-1)}},dependencies:[ut,pt,it,et,zt,he,ce,le,re,de],encapsulation:2,changeDetection:0})}}return n})(),ci=.1,ue=.01,ft=20,fe=.995**ft,di=(()=>{class n{constructor(t,e){this.ngZone=t,this.elementRef=e,this.lastWheelDirection=null,this.lastWheelTimestamp=0,this.lastTimestamp=0,this.lastTimeDiff=0,this.lastMixedWheel=0,this.lastWheelPrevent=!1,this.touchPosition=null,this.lastOffset=null,this.motion=-1,this.unsubscribe=()=>{},this.offsetChange=new z,this.tabScroll=new z,this.onTouchEnd=i=>{if(!this.touchPosition)return;let a=this.lastOffset,l=this.lastTimeDiff;if(this.lastOffset=this.touchPosition=null,a){let c=a.x/l,m=a.y/l,I=Math.abs(c),A=Math.abs(m);if(Math.max(I,A)<ci)return;let N=c,O=m;this.motion=window.setInterval(()=>{if(Math.abs(N)<ue&&Math.abs(O)<ue){window.clearInterval(this.motion);return}N*=fe,O*=fe,this.onOffset(N*ft,O*ft,i)},ft)}},this.onTouchMove=i=>{if(!this.touchPosition)return;i.preventDefault();let{screenX:a,screenY:l}=i.touches[0],c=a-this.touchPosition.x,m=l-this.touchPosition.y;this.onOffset(c,m,i);let I=Date.now();this.lastTimeDiff=I-this.lastTimestamp,this.lastTimestamp=I,this.lastOffset={x:c,y:m},this.touchPosition={x:a,y:l}},this.onTouchStart=i=>{let{screenX:a,screenY:l}=i.touches[0];this.touchPosition={x:a,y:l},window.clearInterval(this.motion)},this.onWheel=i=>{let{deltaX:a,deltaY:l}=i,c,m=Math.abs(a),I=Math.abs(l);m===I?c=this.lastWheelDirection==="x"?a:l:m>I?(c=a,this.lastWheelDirection="x"):(c=l,this.lastWheelDirection="y");let A=Date.now(),N=Math.abs(c);(A-this.lastWheelTimestamp>100||N-this.lastMixedWheel>10)&&(this.lastWheelPrevent=!1),this.onOffset(-c,-c,i),(i.defaultPrevented||this.lastWheelPrevent)&&(this.lastWheelPrevent=!0),this.lastWheelTimestamp=A,this.lastMixedWheel=N}}ngOnInit(){this.unsubscribe=this.ngZone.runOutsideAngular(()=>{let t=this.elementRef.nativeElement,e=Z(t,"wheel"),i=Z(t,"touchstart"),a=Z(t,"touchmove"),l=Z(t,"touchend"),c=new Y;return c.add(this.subscribeWrap("wheel",e,this.onWheel)),c.add(this.subscribeWrap("touchstart",i,this.onTouchStart)),c.add(this.subscribeWrap("touchmove",a,this.onTouchMove)),c.add(this.subscribeWrap("touchend",l,this.onTouchEnd)),()=>{c.unsubscribe()}})}subscribeWrap(t,e,i){return e.subscribe(a=>{this.tabScroll.emit({type:t,event:a}),a.defaultPrevented||i(a)})}onOffset(t,e,i){this.ngZone.run(()=>{this.offsetChange.emit({x:t,y:e,event:i})})}ngOnDestroy(){this.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(b(q),b(W))}}static{this.\u0275dir=P({type:n,selectors:[["","nzTabScrollList",""]],outputs:{offsetChange:"offsetChange",tabScroll:"tabScroll"}})}}return n})(),hi=typeof requestAnimationFrame<"u"?Bt:Rt,be=150,At=(()=>{class n{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=wt(t);this._selectedIndex!==e&&(this._selectedIndex=t,this.selectedIndexChanged=!0,this.keyManager&&this.keyManager.updateActiveItem(t))}get focusIndex(){return this.keyManager?this.keyManager.activeItemIndex:0}set focusIndex(t){!this.isValidIndex(t)||this.focusIndex===t||!this.keyManager||this.keyManager.setActiveItem(t)}get showAddButton(){return this.hiddenItems.length===0&&this.addable}constructor(t,e,i,a,l){this.cdr=t,this.ngZone=e,this.viewportRuler=i,this.nzResizeObserver=a,this.dir=l,this.indexFocused=new z,this.selectFocusedIndex=new z,this.addClicked=new z,this.tabScroll=new z,this.position="horizontal",this.addable=!1,this.hideBar=!1,this.addIcon="plus",this.inkBarAnimated=!0,this.translate=null,this.transformX=0,this.transformY=0,this.pingLeft=!1,this.pingRight=!1,this.pingTop=!1,this.pingBottom=!1,this.hiddenItems=[],this.destroy$=new nt,this._selectedIndex=0,this.wrapperWidth=0,this.wrapperHeight=0,this.scrollListWidth=0,this.scrollListHeight=0,this.operationWidth=0,this.operationHeight=0,this.addButtonWidth=0,this.addButtonHeight=0,this.selectedIndexChanged=!1}ngAfterViewInit(){let t=this.dir?this.dir.change.asObservable():Tt(null),e=this.viewportRuler.change(150),i=()=>{this.updateScrollListPosition(),this.alignInkBarToSelectedTab()};this.keyManager=new ne(this.items).withHorizontalOrientation(this.getLayoutDirection()).withWrap(),this.keyManager.updateActiveItem(this.selectedIndex),kt(i),at(this.nzResizeObserver.observe(this.navWarpRef),this.nzResizeObserver.observe(this.navListRef)).pipe(F(this.destroy$),Lt(16,hi)).subscribe(()=>{i()}),at(t,e,this.items.changes).pipe(F(this.destroy$)).subscribe(()=>{Promise.resolve().then(i),this.keyManager.withHorizontalOrientation(this.getLayoutDirection())}),this.keyManager.change.pipe(F(this.destroy$)).subscribe(a=>{this.indexFocused.emit(a),this.setTabFocus(a),this.scrollToTab(this.keyManager.activeItem)})}ngAfterContentChecked(){this.selectedIndexChanged&&(this.updateScrollListPosition(),this.alignInkBarToSelectedTab(),this.selectedIndexChanged=!1,this.cdr.markForCheck())}ngOnDestroy(){clearTimeout(this.lockAnimationTimeoutId),clearTimeout(this.cssTransformTimeWaitingId),this.destroy$.next(),this.destroy$.complete()}onSelectedFromMenu(t){let e=this.items.toArray().findIndex(i=>i===t);e!==-1&&(this.keyManager.updateActiveItem(e),this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this.scrollToTab(t)))}onOffsetChange(t){if(this.position==="horizontal"){if(!this.lockAnimationTimeoutId&&(this.transformX>=0&&t.x>0||this.transformX<=this.wrapperWidth-this.scrollListWidth&&t.x<0))return;t.event.preventDefault(),this.transformX=this.clampTransformX(this.transformX+t.x),this.setTransform(this.transformX,0)}else{if(!this.lockAnimationTimeoutId&&(this.transformY>=0&&t.y>0||this.transformY<=this.wrapperHeight-this.scrollListHeight&&t.y<0))return;t.event.preventDefault(),this.transformY=this.clampTransformY(this.transformY+t.y),this.setTransform(0,this.transformY)}this.lockAnimation(),this.setVisibleRange(),this.setPingStatus()}handleKeydown(t){let e=this.navWarpRef.nativeElement.contains(t.target);if(!(ee(t)||!e))switch(t.keyCode){case 37:case 38:case 39:case 40:this.lockAnimation(),this.keyManager.onKeydown(t);break;case 13:case 32:this.focusIndex!==this.selectedIndex&&this.selectFocusedIndex.emit(this.focusIndex);break;default:this.keyManager.onKeydown(t)}}isValidIndex(t){if(!this.items)return!0;let e=this.items?this.items.toArray()[t]:null;return!!e&&!e.disabled}scrollToTab(t){if(!this.items.find(i=>i===t))return;let e=this.items.toArray();if(this.position==="horizontal"){let i=this.transformX;if(this.getLayoutDirection()==="rtl"){let a=e[0].left+e[0].width-t.left-t.width;a<this.transformX?i=a:a+t.width>this.transformX+this.wrapperWidth&&(i=a+t.width-this.wrapperWidth)}else t.left<-this.transformX?i=-t.left:t.left+t.width>-this.transformX+this.wrapperWidth&&(i=-(t.left+t.width-this.wrapperWidth));this.transformX=i,this.transformY=0,this.setTransform(i,0)}else{let i=this.transformY;t.top<-this.transformY?i=-t.top:t.top+t.height>-this.transformY+this.wrapperHeight&&(i=-(t.top+t.height-this.wrapperHeight)),this.transformY=i,this.transformX=0,this.setTransform(0,i)}clearTimeout(this.cssTransformTimeWaitingId),this.cssTransformTimeWaitingId=setTimeout(()=>{this.setVisibleRange()},be)}lockAnimation(){this.lockAnimationTimeoutId||this.ngZone.runOutsideAngular(()=>{this.navListRef.nativeElement.style.transition="none",this.lockAnimationTimeoutId=setTimeout(()=>{this.navListRef.nativeElement.style.transition="",this.lockAnimationTimeoutId=void 0},be)})}setTransform(t,e){this.navListRef.nativeElement.style.transform=`translate(${t}px, ${e}px)`}clampTransformX(t){let e=this.wrapperWidth-this.scrollListWidth;return this.getLayoutDirection()==="rtl"?Math.max(Math.min(e,t),0):Math.min(Math.max(e,t),0)}clampTransformY(t){return Math.min(Math.max(this.wrapperHeight-this.scrollListHeight,t),0)}updateScrollListPosition(){this.resetSizes(),this.transformX=this.clampTransformX(this.transformX),this.transformY=this.clampTransformY(this.transformY),this.setVisibleRange(),this.setPingStatus(),this.keyManager&&(this.keyManager.updateActiveItem(this.keyManager.activeItemIndex),this.keyManager.activeItem&&this.scrollToTab(this.keyManager.activeItem))}resetSizes(){this.addButtonWidth=this.addBtnRef?this.addBtnRef.getElementWidth():0,this.addButtonHeight=this.addBtnRef?this.addBtnRef.getElementHeight():0,this.operationWidth=this.operationRef.getElementWidth(),this.operationHeight=this.operationRef.getElementHeight(),this.wrapperWidth=this.navWarpRef.nativeElement.offsetWidth||0,this.wrapperHeight=this.navWarpRef.nativeElement.offsetHeight||0,this.scrollListHeight=this.navListRef.nativeElement.offsetHeight||0,this.scrollListWidth=this.navListRef.nativeElement.offsetWidth||0}alignInkBarToSelectedTab(){let t=this.items&&this.items.length?this.items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e&&this.inkBar.alignToElement(e.parentElement)}setPingStatus(){let t={top:!1,right:!1,bottom:!1,left:!1},e=this.navWarpRef.nativeElement;this.position==="horizontal"?this.getLayoutDirection()==="rtl"?(t.right=this.transformX>0,t.left=this.transformX+this.wrapperWidth<this.scrollListWidth):(t.left=this.transformX<0,t.right=-this.transformX+this.wrapperWidth<this.scrollListWidth):(t.top=this.transformY<0,t.bottom=-this.transformY+this.wrapperHeight<this.scrollListHeight),Object.keys(t).forEach(i=>{let a=`ant-tabs-nav-wrap-ping-${i}`;t[i]?e.classList.add(a):e.classList.remove(a)})}setVisibleRange(){let t,e,i,a,l,c,m=this.items.toArray(),I={width:0,height:0,left:0,top:0,right:0},A=_=>{let $,_t=m[_]||I;return e==="right"?$=m[0].left+m[0].width-m[_].left-m[_].width:$=_t[e],$};this.position==="horizontal"?(t="width",a=this.wrapperWidth,l=this.scrollListWidth-(this.hiddenItems.length?this.operationWidth:0),c=this.addButtonWidth,i=Math.abs(this.transformX),this.getLayoutDirection()==="rtl"?(e="right",this.pingRight=this.transformX>0,this.pingLeft=this.transformX+this.wrapperWidth<this.scrollListWidth):(this.pingLeft=this.transformX<0,this.pingRight=-this.transformX+this.wrapperWidth<this.scrollListWidth,e="left")):(t="height",a=this.wrapperHeight,l=this.scrollListHeight-(this.hiddenItems.length?this.operationHeight:0),c=this.addButtonHeight,e="top",i=-this.transformY,this.pingTop=this.transformY<0,this.pingBottom=-this.transformY+this.wrapperHeight<this.scrollListHeight);let N=a;if(l+c>a&&(N=a-c),!m.length){this.hiddenItems=[],this.cdr.markForCheck();return}let O=m.length,o=O;for(let _=0;_<O;_+=1){let $=A(_),_t=m[_]||I;if($+_t[t]>i+N){o=_-1;break}}let s=0;for(let _=O-1;_>=0;_-=1)if(A(_)<i){s=_+1;break}let r=m.slice(0,s),v=m.slice(o+1);this.hiddenItems=[...r,...v],this.cdr.markForCheck()}getLayoutDirection(){return this.dir&&this.dir.value==="rtl"?"rtl":"ltr"}setTabFocus(t){}ngOnChanges(t){let{position:e}=t;e&&!e.isFirstChange()&&(this.alignInkBarToSelectedTab(),this.lockAnimation(),this.updateScrollListPosition())}static{this.\u0275fac=function(e){return new(e||n)(b(ht),b(q),b(ie),b(me),b(Nt))}}static{this.\u0275cmp=M({type:n,selectors:[["nz-tabs-nav"]],contentQueries:function(e,i,a){if(e&1&&X(a,ze,5),e&2){let l;S(l=w())&&(i.items=l)}},viewQuery:function(e,i){if(e&1&&(L(Re,7),L(Be,7),L(Dt,7),L(zt,5),L(pe,7)),e&2){let a;S(a=w())&&(i.navWarpRef=a.first),S(a=w())&&(i.navListRef=a.first),S(a=w())&&(i.operationRef=a.first),S(a=w())&&(i.addBtnRef=a.first),S(a=w())&&(i.inkBar=a.first)}},hostAttrs:[1,"ant-tabs-nav"],hostBindings:function(e,i){e&1&&D("keydown",function(l){return i.handleKeydown(l)})},inputs:{position:"position",addable:[2,"addable","addable",y],hideBar:[2,"hideBar","hideBar",y],addIcon:"addIcon",inkBarAnimated:"inkBarAnimated",extraTemplate:"extraTemplate",selectedIndex:"selectedIndex"},outputs:{indexFocused:"indexFocused",selectFocusedIndex:"selectFocusedIndex",addClicked:"addClicked",tabScroll:"tabScroll"},exportAs:["nzTabsNav"],features:[V,vt],ngContentSelectors:Me,decls:9,vars:16,consts:[["navWarp",""],["navList",""],[1,"ant-tabs-nav-wrap"],["nzTabScrollList","","role","tablist",1,"ant-tabs-nav-list",3,"offsetChange","tabScroll"],["role","tab","nz-tab-add-button","",3,"addIcon"],["nz-tabs-ink-bar","",3,"hidden","position","animated"],[3,"addClicked","selected","addIcon","addable","items"],[1,"ant-tabs-extra-content"],["role","tab","nz-tab-add-button","",3,"click","addIcon"],[3,"ngTemplateOutlet"]],template:function(e,i){if(e&1){let a=B();It(),C(0,"div",2,0)(2,"div",3,1),D("offsetChange",function(c){return T(a),g(i.onOffsetChange(c))})("tabScroll",function(c){return T(a),g(i.tabScroll.emit(c))}),lt(4),f(5,Le,1,2,"button",4),Q(6,"div",5),x()(),C(7,"nz-tab-nav-operation",6),D("addClicked",function(){return T(a),g(i.addClicked.emit())})("selected",function(c){return T(a),g(i.onSelectedFromMenu(c))}),x(),f(8,Fe,2,1,"div",7)}e&2&&(R("ant-tabs-nav-wrap-ping-left",i.pingLeft)("ant-tabs-nav-wrap-ping-right",i.pingRight)("ant-tabs-nav-wrap-ping-top",i.pingTop)("ant-tabs-nav-wrap-ping-bottom",i.pingBottom),u(5),k(i.showAddButton?5:-1),u(),p("hidden",i.hideBar)("position",i.position)("animated",i.inkBarAnimated),u(),p("addIcon",i.addIcon)("addable",i.addable)("items",i.hiddenItems),u(),k(i.extraTemplate?8:-1))},dependencies:[di,zt,pe,Dt,mt],encapsulation:2,changeDetection:0})}}return n})(),mi=(()=>{class n{constructor(){this.content=null,this.active=!1,this.animated=!0}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=M({type:n,selectors:[["","nz-tab-body",""]],hostAttrs:[1,"ant-tabs-tabpane"],hostVars:10,hostBindings:function(e,i){e&2&&(Xt("@tabSwitchMotion",i.active?"enter":"leave")("@.disabled",!i.animated),G("tabindex",i.active?0:-1)("aria-hidden",!i.active),xt("overflow-y",i.animated?i.active?null:"none":null),R("ant-tabs-tabpane-active",i.active)("ant-tabs-tabpane-hidden",i.animated?null:!i.active))},inputs:{content:"content",active:"active",animated:"animated"},exportAs:["nzTabBody"],attrs:We,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(e,i){e&1&&f(0,Pe,0,0,"ng-template",0),e&2&&p("ngTemplateOutlet",i.content)},dependencies:[mt],encapsulation:2,data:{animation:[oe]},changeDetection:0})}}return n})(),_e=(()=>{class n{constructor(){this.closeIcon="close"}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=M({type:n,selectors:[["nz-tab-close-button"],["button","nz-tab-close-button",""]],hostAttrs:["aria-label","Close tab","type","button",1,"ant-tabs-tab-remove"],inputs:{closeIcon:"closeIcon"},decls:1,vars:1,consts:[[4,"nzStringTemplateOutlet"],["nzTheme","outline",3,"nzType"]],template:function(e,i){e&1&&f(0,$e,2,1,"ng-container",0),e&2&&p("nzStringTemplateOutlet",i.closeIcon)},dependencies:[it,et,ut,pt],encapsulation:2})}}return n})(),pi=(()=>{class n{constructor(){this.templateRef=H(yt,{host:!0})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=P({type:n,selectors:[["ng-template","nzTabLink",""]],exportAs:["nzTabLinkTemplate"]})}}return n})(),ui=(()=>{class n{constructor(t){this.elementRef=t,this.routerLink=H(Ut,{self:!0,optional:!0})}static{this.\u0275fac=function(e){return new(e||n)(b(W))}}static{this.\u0275dir=P({type:n,selectors:[["a","nz-tab-link",""]],exportAs:["nzTabLink"]})}}return n})(),fi=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275dir=P({type:n,selectors:[["","nz-tab",""]],exportAs:["nzTab"]})}}return n})(),Te=new $t("NZ_TAB_SET"),bi=(()=>{class n{constructor(){this.nzTitle="",this.nzClosable=!1,this.nzCloseIcon="close",this.nzDisabled=!1,this.nzForceRender=!1,this.nzSelect=new z,this.nzDeselect=new z,this.nzClick=new z,this.nzContextmenu=new z,this.template=null,this.isActive=!1,this.hasBeenActive=!1,this.position=null,this.origin=null,this.closestTabSet=H(Te),this.stateChanges=new nt}get content(){return this.template||this.contentTemplate}get label(){return this.nzTitle||this.nzTabLinkTemplateDirective?.templateRef}ngOnChanges(t){let{nzTitle:e,nzDisabled:i,nzForceRender:a}=t;(e||i||a)&&this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete()}setActive(t){this.isActive=t,t&&(this.hasBeenActive=!0)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=M({type:n,selectors:[["nz-tab"]],contentQueries:function(e,i,a){if(e&1&&(X(a,pi,5),X(a,fi,5,yt),X(a,ui,5)),e&2){let l;S(l=w())&&(i.nzTabLinkTemplateDirective=l.first),S(l=w())&&(i.template=l.first),S(l=w())&&(i.linkDirective=l.first)}},viewQuery:function(e,i){if(e&1&&L(He,7),e&2){let a;S(a=w())&&(i.contentTemplate=a.first)}},inputs:{nzTitle:"nzTitle",nzClosable:[2,"nzClosable","nzClosable",y],nzCloseIcon:"nzCloseIcon",nzDisabled:[2,"nzDisabled","nzDisabled",y],nzForceRender:[2,"nzForceRender","nzForceRender",y]},outputs:{nzSelect:"nzSelect",nzDeselect:"nzDeselect",nzClick:"nzClick",nzContextmenu:"nzContextmenu"},exportAs:["nzTab"],features:[V,vt],ngContentSelectors:Qe,decls:4,vars:0,consts:[["tabLinkTemplate",""],["contentTemplate",""]],template:function(e,i){e&1&&(It(Ve),f(0,Xe,1,0,"ng-template",null,0,dt)(2,Ye,1,0,"ng-template",null,1,dt))},encapsulation:2,changeDetection:0})}}return n})(),Et=class{},zi="tabs",_i=0,Ti=(()=>{let n,d=[],t=[],e,i=[],a=[],l,c=[],m=[],I,A=[],N=[];return class bt{static{let o=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;n=[tt()],e=[tt()],l=[tt()],I=[tt()],j(null,null,n,{kind:"field",name:"nzType",static:!1,private:!1,access:{has:s=>"nzType"in s,get:s=>s.nzType,set:(s,r)=>{s.nzType=r}},metadata:o},d,t),j(null,null,e,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:s=>"nzSize"in s,get:s=>s.nzSize,set:(s,r)=>{s.nzSize=r}},metadata:o},i,a),j(null,null,l,{kind:"field",name:"nzAnimated",static:!1,private:!1,access:{has:s=>"nzAnimated"in s,get:s=>s.nzAnimated,set:(s,r)=>{s.nzAnimated=r}},metadata:o},c,m),j(null,null,I,{kind:"field",name:"nzTabBarGutter",static:!1,private:!1,access:{has:s=>"nzTabBarGutter"in s,get:s=>s.nzTabBarGutter,set:(s,r)=>{s.nzTabBarGutter=r}},metadata:o},A,N),o&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:o})}get nzSelectedIndex(){return this.selectedIndex}set nzSelectedIndex(o){this.indexToSelect=wt(o,null)}get position(){return["top","bottom"].indexOf(this.nzTabPosition)===-1?"vertical":"horizontal"}get addable(){return this.nzType==="editable-card"&&!this.nzHideAdd}get closable(){return this.nzType==="editable-card"}get line(){return this.nzType==="line"}get inkBarAnimated(){return this.line&&(typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.inkBar)}get tabPaneAnimated(){return typeof this.nzAnimated=="boolean"?this.nzAnimated:this.nzAnimated.tabPane}constructor(o,s,r,v){this.nzConfigService=o,this.ngZone=s,this.cdr=r,this.directionality=v,this._nzModuleName=zi,this.nzTabPosition="top",this.nzCanDeactivate=null,this.nzAddIcon="plus",this.nzTabBarStyle=null,this.nzType=E(this,d,"line"),this.nzSize=(E(this,t),E(this,i,"default")),this.nzAnimated=(E(this,a),E(this,c,!0)),this.nzTabBarGutter=(E(this,m),E(this,A,void 0)),this.nzHideAdd=(E(this,N),!1),this.nzCentered=!1,this.nzHideAll=!1,this.nzLinkRouter=!1,this.nzLinkExact=!0,this.nzDestroyInactiveTabPane=!1,this.nzSelectChange=new z(!0),this.nzSelectedIndexChange=new z,this.nzTabListScroll=new z,this.nzClose=new z,this.nzAdd=new z,this.allTabs=new Ct,this.tabs=new Ct,this.dir="ltr",this.destroy$=new nt,this.indexToSelect=0,this.selectedIndex=null,this.tabLabelSubscription=Y.EMPTY,this.tabsSubscription=Y.EMPTY,this.canDeactivateSubscription=Y.EMPTY,this.router=H(Gt,{optional:!0}),this.tabSetId=_i++}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(F(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.tabs.destroy(),this.tabLabelSubscription.unsubscribe(),this.tabsSubscription.unsubscribe(),this.canDeactivateSubscription.unsubscribe()}ngAfterContentInit(){this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>this.setUpRouter())}),this.subscribeToTabLabels(),this.subscribeToAllTabChanges(),this.tabsSubscription=this.tabs.changes.subscribe(()=>{if(this.clampTabIndex(this.indexToSelect)===this.selectedIndex){let s=this.tabs.toArray();for(let r=0;r<s.length;r++)if(s[r].isActive){this.indexToSelect=this.selectedIndex=r;break}}this.subscribeToTabLabels(),this.cdr.markForCheck()})}ngAfterContentChecked(){let o=this.indexToSelect=this.clampTabIndex(this.indexToSelect);if(this.selectedIndex!==o){let s=this.selectedIndex==null;s||this.nzSelectChange.emit(this.createChangeEvent(o)),Promise.resolve().then(()=>{this.tabs.forEach((r,v)=>r.setActive(v===o)),s||this.nzSelectedIndexChange.emit(o)})}this.tabs.forEach((s,r)=>{s.position=r-o,this.selectedIndex!=null&&s.position===0&&!s.origin&&(s.origin=o-this.selectedIndex)}),this.selectedIndex!==o&&(this.selectedIndex=o,this.cdr.markForCheck())}onClose(o,s){s.preventDefault(),s.stopPropagation(),this.nzClose.emit({index:o})}onAdd(){this.nzAdd.emit()}clampTabIndex(o){return Math.min(this.tabs.length-1,Math.max(o||0,0))}createChangeEvent(o){let s=new Et;return s.index=o,this.tabs&&this.tabs.length&&(s.tab=this.tabs.toArray()[o],this.tabs.forEach((r,v)=>{v!==o&&r.nzDeselect.emit()}),s.tab.nzSelect.emit()),s}subscribeToTabLabels(){this.tabLabelSubscription&&this.tabLabelSubscription.unsubscribe(),this.tabLabelSubscription=at(...this.tabs.map(o=>o.stateChanges)).subscribe(()=>this.cdr.markForCheck())}subscribeToAllTabChanges(){this.allTabs.changes.pipe(gt(this.allTabs)).subscribe(o=>{this.tabs.reset(o.filter(s=>s.closestTabSet===this)),this.tabs.notifyOnChanges()})}canDeactivateFun(o,s){return typeof this.nzCanDeactivate=="function"?Jt(this.nzCanDeactivate(o,s)).pipe(Ft(),F(this.destroy$)):Tt(!0)}clickNavItem(o,s,r){o.nzDisabled||(o.nzClick.emit(),this.isRouterLinkClickEvent(s,r)||this.setSelectedIndex(s))}isRouterLinkClickEvent(o,s){let r=s.target;return this.nzLinkRouter?!!this.tabs.toArray()[o]?.linkDirective?.elementRef.nativeElement.contains(r):!1}contextmenuNavItem(o,s){o.nzDisabled||o.nzContextmenu.emit(s)}setSelectedIndex(o){this.canDeactivateSubscription.unsubscribe(),this.canDeactivateSubscription=this.canDeactivateFun(this.selectedIndex,o).subscribe(s=>{s&&(this.nzSelectedIndex=o,this.tabNavBarRef.focusIndex=o,this.cdr.markForCheck())})}getTabIndex(o,s){return o.nzDisabled?null:this.selectedIndex===s?0:-1}getTabContentId(o){return`nz-tabs-${this.tabSetId}-tab-${o}`}setUpRouter(){if(this.nzLinkRouter){if(!this.router)throw new Error(`${Kt} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);this.router.events.pipe(F(this.destroy$),Mt(o=>o instanceof qt),gt(!0),Ot(0)).subscribe(()=>{this.updateRouterActive(),this.cdr.markForCheck()})}}updateRouterActive(){if(this.router?.navigated){let o=this.findShouldActiveTabIndex();o!==this.selectedIndex&&this.setSelectedIndex(o),this.nzHideAll=o===-1}}findShouldActiveTabIndex(){let o=this.tabs.toArray(),s=this.isLinkActive(this.router);return o.findIndex(r=>{let v=r.linkDirective;return v?s(v.routerLink):!1})}isLinkActive(o){return s=>s?!!o?.isActive(s.urlTree||"",{paths:this.nzLinkExact?"exact":"subset",queryParams:this.nzLinkExact?"exact":"subset",fragment:"ignored",matrixParams:"ignored"}):!1}static{this.\u0275fac=function(s){return new(s||bt)(b(te),b(q),b(ht),b(Nt))}}static{this.\u0275cmp=M({type:bt,selectors:[["nz-tabset"]],contentQueries:function(s,r,v){if(s&1&&X(v,bi,5),s&2){let _;S(_=w())&&(r.allTabs=_)}},viewQuery:function(s,r){if(s&1&&L(At,5),s&2){let v;S(v=w())&&(r.tabNavBarRef=v.first)}},hostAttrs:[1,"ant-tabs"],hostVars:24,hostBindings:function(s,r){s&2&&R("ant-tabs-card",r.nzType==="card"||r.nzType==="editable-card")("ant-tabs-editable",r.nzType==="editable-card")("ant-tabs-editable-card",r.nzType==="editable-card")("ant-tabs-centered",r.nzCentered)("ant-tabs-rtl",r.dir==="rtl")("ant-tabs-top",r.nzTabPosition==="top")("ant-tabs-bottom",r.nzTabPosition==="bottom")("ant-tabs-left",r.nzTabPosition==="left")("ant-tabs-right",r.nzTabPosition==="right")("ant-tabs-default",r.nzSize==="default")("ant-tabs-small",r.nzSize==="small")("ant-tabs-large",r.nzSize==="large")},inputs:{nzSelectedIndex:"nzSelectedIndex",nzTabPosition:"nzTabPosition",nzTabBarExtraContent:"nzTabBarExtraContent",nzCanDeactivate:"nzCanDeactivate",nzAddIcon:"nzAddIcon",nzTabBarStyle:"nzTabBarStyle",nzType:"nzType",nzSize:"nzSize",nzAnimated:"nzAnimated",nzTabBarGutter:"nzTabBarGutter",nzHideAdd:[2,"nzHideAdd","nzHideAdd",y],nzCentered:[2,"nzCentered","nzCentered",y],nzHideAll:[2,"nzHideAll","nzHideAll",y],nzLinkRouter:[2,"nzLinkRouter","nzLinkRouter",y],nzLinkExact:[2,"nzLinkExact","nzLinkExact",y],nzDestroyInactiveTabPane:[2,"nzDestroyInactiveTabPane","nzDestroyInactiveTabPane",y]},outputs:{nzSelectChange:"nzSelectChange",nzSelectedIndexChange:"nzSelectedIndexChange",nzTabListScroll:"nzTabListScroll",nzClose:"nzClose",nzAdd:"nzAdd"},exportAs:["nzTabset"],features:[Zt([{provide:Te,useExisting:Wt(()=>bt)}]),V],decls:4,vars:12,consts:[["tabpaneTmpl",""],[3,"style","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-content-holder"],[1,"ant-tabs-content"],[3,"tabScroll","selectFocusedIndex","addClicked","selectedIndex","inkBarAnimated","addable","addIcon","hideBar","position","extraTemplate"],[1,"ant-tabs-tab",3,"margin-right","margin-bottom","ant-tabs-tab-active","ant-tabs-tab-disabled"],[1,"ant-tabs-tab",3,"click","contextmenu"],["type","button","role","tab","nzTabNavItem","","cdkMonitorElementFocus","",1,"ant-tabs-tab-btn",3,"id","disabled","tab","active"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"],["type","button","nz-tab-close-button","",3,"closeIcon"],["type","button","nz-tab-close-button","",3,"click","closeIcon"],[3,"ngTemplateOutlet"],["role","tabpanel","nz-tab-body","",3,"id","active","content","animated"]],template:function(s,r){s&1&&(f(0,Ue,3,9,"nz-tabs-nav",1),C(1,"div",2)(2,"div",3),f(3,li,2,0),x()()),s&2&&(k(r.tabs.length||r.addable?0:-1),u(2),R("ant-tabs-content-top",r.nzTabPosition==="top")("ant-tabs-content-bottom",r.nzTabPosition==="bottom")("ant-tabs-content-left",r.nzTabPosition==="left")("ant-tabs-content-right",r.nzTabPosition==="right")("ant-tabs-content-animated",r.tabPaneAnimated),u(),k(r.nzHideAll?-1:3))},dependencies:[At,mt,ze,se,ae,it,et,_e,mi],encapsulation:2})}}})();var sn=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=Vt({type:n})}static{this.\u0275inj=Pt({imports:[Ti,At,Dt,zt,_e]})}}return n})();export{bi as a,Ti as b,sn as c};
