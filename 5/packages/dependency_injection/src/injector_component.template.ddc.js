define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/dependency_injection/src/injector_component', 'packages/dependency_injection/src/car/car', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/heroes/hero_service_provider', 'packages/dependency_injection/src/user_service', 'packages/dependency_injection/src/heroes/hero_service', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/car/car.template', 'packages/dependency_injection/src/heroes/hero.template', 'packages/dependency_injection/src/heroes/hero_service.template', 'packages/dependency_injection/src/heroes/hero_service_provider.template', 'packages/dependency_injection/src/logger_service.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, injector_component, car, logger_service, hero_service_provider, user_service, hero_service, reflector, car$, hero, hero_service$, hero_service_provider$, logger_service$, angular) {
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
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__injector_component = injector_component.src__injector_component;
  const src__car__car = car.src__car__car;
  const src__logger_service = logger_service.src__logger_service;
  const src__heroes__hero_service_provider = hero_service_provider.src__heroes__hero_service_provider;
  const src__user_service = user_service.src__user_service;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__car__car$46template = car$.src__car__car$46template;
  const src__heroes__hero$46template = hero.src__heroes__hero$46template;
  const src__heroes__hero_service$46template = hero_service$.src__heroes__hero_service$46template;
  const src__heroes__hero_service_provider$46template = hero_service_provider$.src__heroes__hero_service_provider$46template;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__injector_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfInjectorComponent = () => (AppViewOfInjectorComponent = dart.constFn(src__core__linker__app_view.AppView$(src__injector_component.InjectorComponent)))();
  let AppViewAndintToAppViewOfInjectorComponent = () => (AppViewAndintToAppViewOfInjectorComponent = dart.constFn(dart.fnType(AppViewOfInjectorComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfInjectorComponent = () => (ComponentRefOfInjectorComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__injector_component.InjectorComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfInjectorComponent = () => (ComponentFactoryOfInjectorComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__injector_component.InjectorComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__injector_component$46template, {
    /*src__injector_component$46template.styles$InjectorComponent*/get styles$InjectorComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _text_3 = Symbol('_text_3');
  const _el_4 = Symbol('_el_4');
  const _text_5 = Symbol('_text_5');
  const _el_6 = Symbol('_el_6');
  const _text_7 = Symbol('_text_7');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  let const$;
  src__injector_component$46template.ViewInjectorComponent0 = class ViewInjectorComponent0 extends src__core__linker__app_view.AppView$(src__injector_component.InjectorComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Other Injections');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_2], 'id', 'car');
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_4], 'id', 'hero');
      this[_text_5] = html.Text.new('');
      this[_el_4][$append](this[_text_5]);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_6], 'id', 'rodent');
      this[_text_7] = html.Text.new('');
      this[_el_6][$append](this[_text_7]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.car.drive());
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_3][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.hero.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_5][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.rodent;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_7][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__injector_component$46template.ViewInjectorComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_el_4] = null;
    this[_text_5] = null;
    this[_el_6] = null;
    this[_text_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__injector_component$46template.ViewInjectorComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-injectors'));
    let t = src__injector_component$46template.ViewInjectorComponent0._renderType;
    t == null ? src__injector_component$46template.ViewInjectorComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__injector_component$46template.styles$InjectorComponent) : t;
    this.setupComponentType(src__injector_component$46template.ViewInjectorComponent0._renderType);
  }).prototype = src__injector_component$46template.ViewInjectorComponent0.prototype;
  dart.addTypeTests(src__injector_component$46template.ViewInjectorComponent0);
  dart.setMethodSignature(src__injector_component$46template.ViewInjectorComponent0, () => ({
    __proto__: dart.getMethods(src__injector_component$46template.ViewInjectorComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__injector_component.InjectorComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__injector_component$46template.ViewInjectorComponent0, () => ({
    __proto__: dart.getFields(src__injector_component$46template.ViewInjectorComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_text_3]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.DivElement),
    [_text_5]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.DivElement),
    [_text_7]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__injector_component$46template.ViewInjectorComponent0, {
    /*src__injector_component$46template.ViewInjectorComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__injector_component$46template.viewFactory_InjectorComponent0 = function(parentView, parentIndex) {
    return new src__injector_component$46template.ViewInjectorComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__injector_component$46template.viewFactory_InjectorComponent0, AppViewAndintToAppViewOfInjectorComponent());
  dart.defineLazy(src__injector_component$46template, {
    /*src__injector_component$46template.styles$InjectorComponentHost*/get styles$InjectorComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _InjectorComponent_0_5 = Symbol('_InjectorComponent_0_5');
  const __Engine_0_6 = Symbol('__Engine_0_6');
  const __Tires_0_7 = Symbol('__Tires_0_7');
  const __Car_0_8 = Symbol('__Car_0_8');
  const __Logger_0_9 = Symbol('__Logger_0_9');
  const __HeroService_0_10 = Symbol('__HeroService_0_10');
  const _Engine_0_6 = Symbol('_Engine_0_6');
  const _Tires_0_7 = Symbol('_Tires_0_7');
  const _Car_0_8 = Symbol('_Car_0_8');
  const _Logger_0_9 = Symbol('_Logger_0_9');
  const _HeroService_0_10 = Symbol('_HeroService_0_10');
  src__injector_component$46template._ViewInjectorComponentHost0 = class _ViewInjectorComponentHost0 extends src__core__linker__app_view.AppView {
    get [_Engine_0_6]() {
      if (this[__Engine_0_6] == null) {
        this[__Engine_0_6] = new src__car__car.Engine.new();
      }
      return this[__Engine_0_6];
    }
    get [_Tires_0_7]() {
      if (this[__Tires_0_7] == null) {
        this[__Tires_0_7] = new src__car__car.Tires.new();
      }
      return this[__Tires_0_7];
    }
    get [_Car_0_8]() {
      if (this[__Car_0_8] == null) {
        this[__Car_0_8] = new src__car__car.Car.new(this[_Engine_0_6], this[_Tires_0_7]);
      }
      return this[__Car_0_8];
    }
    get [_Logger_0_9]() {
      if (this[__Logger_0_9] == null) {
        this[__Logger_0_9] = new src__logger_service.Logger.new();
      }
      return this[__Logger_0_9];
    }
    get [_HeroService_0_10]() {
      if (this[__HeroService_0_10] == null) {
        this[__HeroService_0_10] = src__heroes__hero_service_provider.heroServiceFactory(this[_Logger_0_9], src__user_service.UserService._check(this.injectorGet(dart.wrapType(src__user_service.UserService), this.viewData.parentIndex)));
      }
      return this[__HeroService_0_10];
    }
    build() {
      this[_compView_0] = new src__injector_component$46template.ViewInjectorComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_InjectorComponent_0_5] = new src__injector_component.InjectorComponent.new(this.injector(0));
      this[_compView_0].create(this[_InjectorComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfInjectorComponent()).new(0, this, this.rootEl, this[_InjectorComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__car__car.Engine) && 0 === nodeIndex) {
        return this[_Engine_0_6];
      }
      if (token === dart.wrapType(src__car__car.Tires) && 0 === nodeIndex) {
        return this[_Tires_0_7];
      }
      if (token === dart.wrapType(src__car__car.Car) && 0 === nodeIndex) {
        return this[_Car_0_8];
      }
      if (token === dart.wrapType(src__logger_service.Logger) && 0 === nodeIndex) {
        return this[_Logger_0_9];
      }
      if (token === dart.wrapType(src__heroes__hero_service.HeroService) && 0 === nodeIndex) {
        return this[_HeroService_0_10];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_InjectorComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__injector_component$46template._ViewInjectorComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_InjectorComponent_0_5] = null;
    this[__Engine_0_6] = null;
    this[__Tires_0_7] = null;
    this[__Car_0_8] = null;
    this[__Logger_0_9] = null;
    this[__HeroService_0_10] = null;
    src__injector_component$46template._ViewInjectorComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__injector_component$46template._ViewInjectorComponentHost0.prototype;
  dart.addTypeTests(src__injector_component$46template._ViewInjectorComponentHost0);
  dart.setMethodSignature(src__injector_component$46template._ViewInjectorComponentHost0, () => ({
    __proto__: dart.getMethods(src__injector_component$46template._ViewInjectorComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__injector_component$46template._ViewInjectorComponentHost0, () => ({
    __proto__: dart.getGetters(src__injector_component$46template._ViewInjectorComponentHost0.__proto__),
    [_Engine_0_6]: dart.fnType(src__car__car.Engine, []),
    [_Tires_0_7]: dart.fnType(src__car__car.Tires, []),
    [_Car_0_8]: dart.fnType(src__car__car.Car, []),
    [_Logger_0_9]: dart.fnType(src__logger_service.Logger, []),
    [_HeroService_0_10]: dart.fnType(src__heroes__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(src__injector_component$46template._ViewInjectorComponentHost0, () => ({
    __proto__: dart.getFields(src__injector_component$46template._ViewInjectorComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__injector_component$46template.ViewInjectorComponent0),
    [_InjectorComponent_0_5]: dart.fieldType(src__injector_component.InjectorComponent),
    [__Engine_0_6]: dart.fieldType(src__car__car.Engine),
    [__Tires_0_7]: dart.fieldType(src__car__car.Tires),
    [__Car_0_8]: dart.fieldType(src__car__car.Car),
    [__Logger_0_9]: dart.fieldType(src__logger_service.Logger),
    [__HeroService_0_10]: dart.fieldType(src__heroes__hero_service.HeroService)
  }));
  src__injector_component$46template.viewFactory_InjectorComponentHost0 = function(parentView, parentIndex) {
    return new src__injector_component$46template._ViewInjectorComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__injector_component$46template.viewFactory_InjectorComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__injector_component$46template, {
    /*src__injector_component$46template.InjectorComponentNgFactory*/get InjectorComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfInjectorComponent()).new('my-injectors', src__injector_component$46template.viewFactory_InjectorComponentHost0, src__injector_component$46template._InjectorComponentMetadata));
    },
    /*src__injector_component$46template._InjectorComponentMetadata*/get _InjectorComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__injector_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__injector_component$46template.initReflector = function() {
    if (dart.test(src__injector_component$46template._visited)) {
      return;
    }
    src__injector_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__injector_component.InjectorComponent), src__injector_component$46template.InjectorComponentNgFactory);
    src__car__car$46template.initReflector();
    src__heroes__hero$46template.initReflector();
    src__heroes__hero_service$46template.initReflector();
    src__heroes__hero_service_provider$46template.initReflector();
    src__logger_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__injector_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/injector_component.template.ddc", {
    "package:dependency_injection/src/injector_component.template.dart": src__injector_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["injector_component.template.dart"],"names":[],"mappings":"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","file":"injector_component.template.ddc.js"}');
  // Exports:
  return {
    src__injector_component$46template: src__injector_component$46template
  };
});

//# sourceMappingURL=injector_component.template.ddc.js.map
