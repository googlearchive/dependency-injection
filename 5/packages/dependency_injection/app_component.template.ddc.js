define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/dependency_injection/src/car/car', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/heroes/hero_service_provider', 'packages/dependency_injection/src/user_service', 'packages/angular/src/core/linker/app_view', 'packages/dependency_injection/src/car/car_component.template', 'packages/dependency_injection/src/car/car_component', 'packages/dependency_injection/src/injector_component.template', 'packages/dependency_injection/src/injector_component', 'packages/dependency_injection/src/test_component.template', 'packages/dependency_injection/src/test_component', 'packages/angular/src/common/directives/ng_if', 'packages/dependency_injection/src/providers_component.template', 'packages/dependency_injection/src/providers_component', 'packages/dependency_injection/src/heroes/hero_service', 'packages/dependency_injection/app_component', 'packages/dependency_injection/src/heroes/heroes_component.template', 'packages/dependency_injection/src/heroes/heroes_component', 'packages/dependency_injection/src/app_config', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/dependency_injection/src/app_config.template', 'packages/dependency_injection/src/logger_service.template', 'packages/dependency_injection/src/user_service.template'], function(dart_sdk, view_type, constants, view, app_view_utils, car, logger_service, hero_service_provider, user_service, app_view, car_component, car_component$, injector_component, injector_component$, test_component, test_component$, ng_if, providers_component, providers_component$, hero_service, app_component, heroes_component, heroes_component$, app_config, opaque_token, reflector, angular, app_config$, logger_service$, user_service$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__car__car = car.src__car__car;
  const src__logger_service = logger_service.src__logger_service;
  const src__heroes__hero_service_provider = hero_service_provider.src__heroes__hero_service_provider;
  const src__user_service = user_service.src__user_service;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__car__car_component$46template = car_component.src__car__car_component$46template;
  const src__car__car_component = car_component$.src__car__car_component;
  const src__injector_component$46template = injector_component.src__injector_component$46template;
  const src__injector_component = injector_component$.src__injector_component;
  const src__test_component$46template = test_component.src__test_component$46template;
  const src__test_component = test_component$.src__test_component;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__providers_component$46template = providers_component.src__providers_component$46template;
  const src__providers_component = providers_component$.src__providers_component;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const app_component$ = app_component.app_component;
  const src__heroes__heroes_component$46template = heroes_component.src__heroes__heroes_component$46template;
  const src__heroes__heroes_component = heroes_component$.src__heroes__heroes_component;
  const src__app_config = app_config.src__app_config;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__app_config$46template = app_config$.src__app_config$46template;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const src__user_service$46template = user_service$.src__user_service$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _Engine_2_5 = Symbol('_Engine_2_5');
  const _Tires_2_6 = Symbol('_Tires_2_6');
  const _Car_2_7 = Symbol('_Car_2_7');
  const _CarComponent_2_8 = Symbol('_CarComponent_2_8');
  const _el_3 = Symbol('_el_3');
  const _compView_3 = Symbol('_compView_3');
  const _InjectorComponent_3_5 = Symbol('_InjectorComponent_3_5');
  const __Engine_3_6 = Symbol('__Engine_3_6');
  const __Tires_3_7 = Symbol('__Tires_3_7');
  const __Car_3_8 = Symbol('__Car_3_8');
  const __Logger_3_9 = Symbol('__Logger_3_9');
  const __HeroService_3_10 = Symbol('__HeroService_3_10');
  const _el_4 = Symbol('_el_4');
  const _compView_4 = Symbol('_compView_4');
  const _TestComponent_4_5 = Symbol('_TestComponent_4_5');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _text_8 = Symbol('_text_8');
  const _el_9 = Symbol('_el_9');
  const _appEl_11 = Symbol('_appEl_11');
  const _NgIf_11_9 = Symbol('_NgIf_11_9');
  const _appEl_12 = Symbol('_appEl_12');
  const _NgIf_12_9 = Symbol('_NgIf_12_9');
  const _el_13 = Symbol('_el_13');
  const _compView_13 = Symbol('_compView_13');
  const _ProvidersComponent_13_5 = Symbol('_ProvidersComponent_13_5');
  const _expr_0 = Symbol('_expr_0');
  const _Engine_3_6 = Symbol('_Engine_3_6');
  const _Tires_3_7 = Symbol('_Tires_3_7');
  const _Car_3_8 = Symbol('_Car_3_8');
  const _Logger_3_9 = Symbol('_Logger_3_9');
  const _HeroService_3_10 = Symbol('_HeroService_3_10');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_Engine_3_6]() {
      if (this[__Engine_3_6] == null) {
        this[__Engine_3_6] = new src__car__car.Engine.new();
      }
      return this[__Engine_3_6];
    }
    get [_Tires_3_7]() {
      if (this[__Tires_3_7] == null) {
        this[__Tires_3_7] = new src__car__car.Tires.new();
      }
      return this[__Tires_3_7];
    }
    get [_Car_3_8]() {
      if (this[__Car_3_8] == null) {
        this[__Car_3_8] = new src__car__car.Car.new(this[_Engine_3_6], this[_Tires_3_7]);
      }
      return this[__Car_3_8];
    }
    get [_Logger_3_9]() {
      if (this[__Logger_3_9] == null) {
        this[__Logger_3_9] = new src__logger_service.Logger.new();
      }
      return this[__Logger_3_9];
    }
    get [_HeroService_3_10]() {
      if (this[__HeroService_3_10] == null) {
        this[__HeroService_3_10] = src__heroes__hero_service_provider.heroServiceFactory(this[_Logger_3_9], src__user_service.UserService._check(this.parentView.injectorGet(dart.wrapType(src__user_service.UserService), this.viewData.parentIndex)));
      }
      return this[__HeroService_3_10];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : '');
      this[_el_0][$append](this[_text_1]);
      this[_compView_2] = new src__car__car_component$46template.ViewCarComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this[_Engine_2_5] = new src__car__car.Engine.new();
      this[_Tires_2_6] = new src__car__car.Tires.new();
      this[_Car_2_7] = new src__car__car.Car.new(this[_Engine_2_5], this[_Tires_2_6]);
      this[_CarComponent_2_8] = new src__car__car_component.CarComponent.new(this[_Car_2_7]);
      this[_compView_2].create(this[_CarComponent_2_8], []);
      this[_compView_3] = new src__injector_component$46template.ViewInjectorComponent0.new(this, 3);
      this[_el_3] = this[_compView_3].rootEl;
      parentRenderNode[$append](this[_el_3]);
      this[_InjectorComponent_3_5] = new src__injector_component.InjectorComponent.new(this.injector(3));
      this[_compView_3].create(this[_InjectorComponent_3_5], []);
      this[_compView_4] = new src__test_component$46template.ViewTestComponent0.new(this, 4);
      this[_el_4] = this[_compView_4].rootEl;
      parentRenderNode[$append](this[_el_4]);
      this[_TestComponent_4_5] = new src__test_component.TestComponent.new();
      this[_compView_4].create(this[_TestComponent_4_5], []);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_6 = html.Text.new('User');
      this[_el_5][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.createAttr(this[_el_7], 'id', 'user');
      this[_text_8] = html.Text.new('');
      this[_el_7][$append](this[_text_8]);
      this[_el_9] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_7]));
      let _text_10 = html.Text.new('Next User');
      this[_el_9][$append](_text_10);
      let _anchor_11 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_11);
      this[_appEl_11] = new src__core__linker__view_container.ViewContainer.new(11, null, this, _anchor_11);
      let _TemplateRef_11_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_11], app_component$46template.viewFactory_AppComponent1);
      this[_NgIf_11_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_11], _TemplateRef_11_8);
      let _anchor_12 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_12);
      this[_appEl_12] = new src__core__linker__view_container.ViewContainer.new(12, null, this, _anchor_12);
      let _TemplateRef_12_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_12], app_component$46template.viewFactory_AppComponent2);
      this[_NgIf_12_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_12], _TemplateRef_12_8);
      this[_compView_13] = new src__providers_component$46template.ViewProvidersComponent0.new(this, 13);
      this[_el_13] = this[_compView_13].rootEl;
      parentRenderNode[$append](this[_el_13]);
      this[_ProvidersComponent_13_5] = new src__providers_component.ProvidersComponent.new();
      this[_compView_13].create(this[_ProvidersComponent_13_5], []);
      this[_el_9][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'nextUser')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__car__car.Engine) && 2 === nodeIndex) {
        return this[_Engine_2_5];
      }
      if (token === dart.wrapType(src__car__car.Tires) && 2 === nodeIndex) {
        return this[_Tires_2_6];
      }
      if (token === dart.wrapType(src__car__car.Car) && 2 === nodeIndex) {
        return this[_Car_2_7];
      }
      if (token === dart.wrapType(src__car__car.Engine) && 3 === nodeIndex) {
        return this[_Engine_3_6];
      }
      if (token === dart.wrapType(src__car__car.Tires) && 3 === nodeIndex) {
        return this[_Tires_3_7];
      }
      if (token === dart.wrapType(src__car__car.Car) && 3 === nodeIndex) {
        return this[_Car_3_8];
      }
      if (token === dart.wrapType(src__logger_service.Logger) && 3 === nodeIndex) {
        return this[_Logger_3_9];
      }
      if (token === dart.wrapType(src__heroes__hero_service.HeroService) && 3 === nodeIndex) {
        return this[_HeroService_3_10];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_InjectorComponent_3_5].ngOnInit();
      }
      this[_NgIf_11_9].ngIf = _ctx.isAuthorized;
      this[_NgIf_12_9].ngIf = !dart.test(_ctx.isAuthorized);
      this[_appEl_11].detectChangesInNestedViews();
      this[_appEl_12].detectChangesInNestedViews();
      let l = _ctx.userInfo;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_8][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
      this[_compView_4].detectChanges();
      this[_compView_13].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_11];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_12];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_compView_2];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_3];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_4];
      t$2 == null ? null : t$2.destroy();
      let t$3 = this[_compView_13];
      t$3 == null ? null : t$3.destroy();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_Engine_2_5] = null;
    this[_Tires_2_6] = null;
    this[_Car_2_7] = null;
    this[_CarComponent_2_8] = null;
    this[_el_3] = null;
    this[_compView_3] = null;
    this[_InjectorComponent_3_5] = null;
    this[__Engine_3_6] = null;
    this[__Tires_3_7] = null;
    this[__Car_3_8] = null;
    this[__Logger_3_9] = null;
    this[__HeroService_3_10] = null;
    this[_el_4] = null;
    this[_compView_4] = null;
    this[_TestComponent_4_5] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_text_8] = null;
    this[_el_9] = null;
    this[_appEl_11] = null;
    this[_NgIf_11_9] = null;
    this[_appEl_12] = null;
    this[_NgIf_12_9] = null;
    this[_el_13] = null;
    this[_compView_13] = null;
    this[_ProvidersComponent_13_5] = null;
    this[_expr_0] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(app_component$46template.ViewAppComponent0.__proto__),
    [_Engine_3_6]: dart.fnType(src__car__car.Engine, []),
    [_Tires_3_7]: dart.fnType(src__car__car.Tires, []),
    [_Car_3_8]: dart.fnType(src__car__car.Car, []),
    [_Logger_3_9]: dart.fnType(src__logger_service.Logger, []),
    [_HeroService_3_10]: dart.fnType(src__heroes__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__car__car_component$46template.ViewCarComponent0),
    [_Engine_2_5]: dart.fieldType(src__car__car.Engine),
    [_Tires_2_6]: dart.fieldType(src__car__car.Tires),
    [_Car_2_7]: dart.fieldType(src__car__car.Car),
    [_CarComponent_2_8]: dart.fieldType(src__car__car_component.CarComponent),
    [_el_3]: dart.fieldType(html.Element),
    [_compView_3]: dart.fieldType(src__injector_component$46template.ViewInjectorComponent0),
    [_InjectorComponent_3_5]: dart.fieldType(src__injector_component.InjectorComponent),
    [__Engine_3_6]: dart.fieldType(src__car__car.Engine),
    [__Tires_3_7]: dart.fieldType(src__car__car.Tires),
    [__Car_3_8]: dart.fieldType(src__car__car.Car),
    [__Logger_3_9]: dart.fieldType(src__logger_service.Logger),
    [__HeroService_3_10]: dart.fieldType(src__heroes__hero_service.HeroService),
    [_el_4]: dart.fieldType(html.Element),
    [_compView_4]: dart.fieldType(src__test_component$46template.ViewTestComponent0),
    [_TestComponent_4_5]: dart.fieldType(src__test_component.TestComponent),
    [_el_5]: dart.fieldType(html.Element),
    [_el_7]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_el_9]: dart.fieldType(html.ButtonElement),
    [_appEl_11]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_11_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_12]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_12_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_el_13]: dart.fieldType(html.Element),
    [_compView_13]: dart.fieldType(src__providers_component$46template.ViewProvidersComponent0),
    [_ProvidersComponent_13_5]: dart.fieldType(src__providers_component.ProvidersComponent),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  const _compView_0 = Symbol('_compView_0');
  const _HeroesComponent_0_5 = Symbol('_HeroesComponent_0_5');
  const __HeroService_0_6 = Symbol('__HeroService_0_6');
  const _HeroService_0_6 = Symbol('_HeroService_0_6');
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_HeroService_0_6]() {
      if (this[__HeroService_0_6] == null) {
        this[__HeroService_0_6] = src__heroes__hero_service_provider.heroServiceFactory(src__logger_service.Logger._check(this.parentView.injectorGet(dart.wrapType(src__logger_service.Logger), this.viewData.parentIndex)), src__user_service.UserService._check(this.parentView.injectorGet(dart.wrapType(src__user_service.UserService), this.viewData.parentIndex)));
      }
      return this[__HeroService_0_6];
    }
    build() {
      this[_compView_0] = new src__heroes__heroes_component$46template.ViewHeroesComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'id', 'authorized');
      this[_HeroesComponent_0_5] = new src__heroes__heroes_component.HeroesComponent.new();
      this[_compView_0].create(this[_HeroesComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__heroes__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeroesComponent_0_5] = null;
    this[__HeroService_0_6] = null;
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponent1.__proto__),
    [_HeroService_0_6]: dart.fnType(src__heroes__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__heroes__heroes_component$46template.ViewHeroesComponent0),
    [_HeroesComponent_0_5]: dart.fieldType(src__heroes__heroes_component.HeroesComponent),
    [__HeroService_0_6]: dart.fieldType(src__heroes__hero_service.HeroService)
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent());
  app_component$46template._ViewAppComponent2 = class _ViewAppComponent2 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    get [_HeroService_0_6]() {
      if (this[__HeroService_0_6] == null) {
        this[__HeroService_0_6] = src__heroes__hero_service_provider.heroServiceFactory(src__logger_service.Logger._check(this.parentView.injectorGet(dart.wrapType(src__logger_service.Logger), this.viewData.parentIndex)), src__user_service.UserService._check(this.parentView.injectorGet(dart.wrapType(src__user_service.UserService), this.viewData.parentIndex)));
      }
      return this[__HeroService_0_6];
    }
    build() {
      this[_compView_0] = new src__heroes__heroes_component$46template.ViewHeroesComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.createAttr(this[_el_0], 'id', 'unauthorized');
      this[_HeroesComponent_0_5] = new src__heroes__heroes_component.HeroesComponent.new();
      this[_compView_0].create(this[_HeroesComponent_0_5], []);
      this.init0(this[_el_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__heroes__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_6];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_HeroesComponent_0_5] = null;
    this[__HeroService_0_6] = null;
    app_component$46template._ViewAppComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent2.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent2);
  dart.setMethodSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponent2.__proto__),
    [_HeroService_0_6]: dart.fnType(src__heroes__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(src__heroes__heroes_component$46template.ViewHeroesComponent0),
    [_HeroesComponent_0_5]: dart.fieldType(src__heroes__heroes_component.HeroesComponent),
    [__HeroService_0_6]: dart.fieldType(src__heroes__hero_service.HeroService)
  }));
  app_component$46template.viewFactory_AppComponent2 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent2.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent2, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _app_config_0_5 = Symbol('_app_config_0_5');
  const _UserService_0_6 = Symbol('_UserService_0_6');
  const _AppComponent_0_7 = Symbol('_AppComponent_0_7');
  const __Logger_0_8 = Symbol('__Logger_0_8');
  const _Logger_0_8 = Symbol('_Logger_0_8');
  let const$0;
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    get [_Logger_0_8]() {
      if (this[__Logger_0_8] == null) {
        this[__Logger_0_8] = new src__logger_service.Logger.new();
      }
      return this[__Logger_0_8];
    }
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_app_config_0_5] = src__app_config.heroDiConfigFactory();
      this[_UserService_0_6] = new src__user_service.UserService.new();
      this[_AppComponent_0_7] = new app_component$.AppComponent.new(src__app_config.AppConfig._check(this[_app_config_0_5]), this[_UserService_0_6]);
      this[_compView_0].create(this[_AppComponent_0_7], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_7]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$0 || (const$0 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('app.config')))) && 0 === nodeIndex) {
        return this[_app_config_0_5];
      }
      if (token === dart.wrapType(src__user_service.UserService) && 0 === nodeIndex) {
        return this[_UserService_0_6];
      }
      if (token === dart.wrapType(src__logger_service.Logger) && 0 === nodeIndex) {
        return this[_Logger_0_8];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_app_config_0_5] = null;
    this[_UserService_0_6] = null;
    this[_AppComponent_0_7] = null;
    this[__Logger_0_8] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(app_component$46template._ViewAppComponentHost0.__proto__),
    [_Logger_0_8]: dart.fnType(src__logger_service.Logger, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_app_config_0_5]: dart.fieldType(dart.dynamic),
    [_UserService_0_6]: dart.fieldType(src__user_service.UserService),
    [_AppComponent_0_7]: dart.fieldType(app_component$.AppComponent),
    [__Logger_0_8]: dart.fieldType(src__logger_service.Logger)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__app_config$46template.initReflector();
    src__car__car_component$46template.initReflector();
    src__heroes__heroes_component$46template.initReflector();
    src__injector_component$46template.initReflector();
    src__logger_service$46template.initReflector();
    src__providers_component$46template.initReflector();
    src__test_component$46template.initReflector();
    src__user_service$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/app_component.template.ddc", {
    "package:dependency_injection/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
