define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/dependency_injection/src/heroes/hero_list_component.template', 'packages/dependency_injection/src/heroes/hero_service', 'packages/dependency_injection/src/heroes/hero_list_component', 'packages/dependency_injection/src/heroes/heroes_component', 'packages/dependency_injection/src/heroes/hero_service_provider', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/user_service', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/heroes/hero_service_provider.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, hero_list_component, hero_service, hero_list_component$, heroes_component, hero_service_provider, logger_service, user_service, reflector, hero_service_provider$, angular) {
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
  const src__heroes__hero_list_component$46template = hero_list_component.src__heroes__hero_list_component$46template;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__heroes__hero_list_component = hero_list_component$.src__heroes__hero_list_component;
  const src__heroes__heroes_component = heroes_component.src__heroes__heroes_component;
  const src__heroes__hero_service_provider = hero_service_provider.src__heroes__hero_service_provider;
  const src__logger_service = logger_service.src__logger_service;
  const src__user_service = user_service.src__user_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__heroes__hero_service_provider$46template = hero_service_provider$.src__heroes__hero_service_provider$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__heroes__heroes_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroesComponent = () => (AppViewOfHeroesComponent = dart.constFn(src__core__linker__app_view.AppView$(src__heroes__heroes_component.HeroesComponent)))();
  let AppViewAndintToAppViewOfHeroesComponent = () => (AppViewAndintToAppViewOfHeroesComponent = dart.constFn(dart.fnType(AppViewOfHeroesComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroesComponent = () => (ComponentRefOfHeroesComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__heroes__heroes_component.HeroesComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroesComponent = () => (ComponentFactoryOfHeroesComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__heroes__heroes_component.HeroesComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__heroes__heroes_component$46template, {
    /*src__heroes__heroes_component$46template.styles$HeroesComponent*/get styles$HeroesComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _compView_2 = Symbol('_compView_2');
  const _HeroListComponent_2_5 = Symbol('_HeroListComponent_2_5');
  let const$;
  src__heroes__heroes_component$46template.ViewHeroesComponent0 = class ViewHeroesComponent0 extends src__core__linker__app_view.AppView$(src__heroes__heroes_component.HeroesComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Heroes');
      this[_el_0][$append](_text_1);
      this[_compView_2] = new src__heroes__hero_list_component$46template.ViewHeroListComponent0.new(this, 2);
      this[_el_2] = this[_compView_2].rootEl;
      parentRenderNode[$append](this[_el_2]);
      this[_HeroListComponent_2_5] = new src__heroes__hero_list_component.HeroListComponent.new(src__heroes__hero_service.HeroService._check(this.parentView.injectorGet(dart.wrapType(src__heroes__hero_service.HeroService), this.viewData.parentIndex)));
      this[_compView_2].create(this[_HeroListComponent_2_5], []);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      this[_compView_2].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_2];
      t == null ? null : t.destroy();
    }
  };
  (src__heroes__heroes_component$46template.ViewHeroesComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_compView_2] = null;
    this[_HeroListComponent_2_5] = null;
    src__heroes__heroes_component$46template.ViewHeroesComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-heroes'));
    let t = src__heroes__heroes_component$46template.ViewHeroesComponent0._renderType;
    t == null ? src__heroes__heroes_component$46template.ViewHeroesComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__heroes__heroes_component$46template.styles$HeroesComponent) : t;
    this.setupComponentType(src__heroes__heroes_component$46template.ViewHeroesComponent0._renderType);
  }).prototype = src__heroes__heroes_component$46template.ViewHeroesComponent0.prototype;
  dart.addTypeTests(src__heroes__heroes_component$46template.ViewHeroesComponent0);
  dart.setMethodSignature(src__heroes__heroes_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getMethods(src__heroes__heroes_component$46template.ViewHeroesComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__heroes__heroes_component.HeroesComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__heroes__heroes_component$46template.ViewHeroesComponent0, () => ({
    __proto__: dart.getFields(src__heroes__heroes_component$46template.ViewHeroesComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_compView_2]: dart.fieldType(src__heroes__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_2_5]: dart.fieldType(src__heroes__hero_list_component.HeroListComponent)
  }));
  dart.defineLazy(src__heroes__heroes_component$46template.ViewHeroesComponent0, {
    /*src__heroes__heroes_component$46template.ViewHeroesComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__heroes__heroes_component$46template.viewFactory_HeroesComponent0 = function(parentView, parentIndex) {
    return new src__heroes__heroes_component$46template.ViewHeroesComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__heroes__heroes_component$46template.viewFactory_HeroesComponent0, AppViewAndintToAppViewOfHeroesComponent());
  dart.defineLazy(src__heroes__heroes_component$46template, {
    /*src__heroes__heroes_component$46template.styles$HeroesComponentHost*/get styles$HeroesComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroesComponent_0_5 = Symbol('_HeroesComponent_0_5');
  const __HeroService_0_6 = Symbol('__HeroService_0_6');
  const _HeroService_0_6 = Symbol('_HeroService_0_6');
  src__heroes__heroes_component$46template._ViewHeroesComponentHost0 = class _ViewHeroesComponentHost0 extends src__core__linker__app_view.AppView {
    get [_HeroService_0_6]() {
      if (this[__HeroService_0_6] == null) {
        this[__HeroService_0_6] = src__heroes__hero_service_provider.heroServiceFactory(src__logger_service.Logger._check(this.injectorGet(dart.wrapType(src__logger_service.Logger), this.viewData.parentIndex)), src__user_service.UserService._check(this.injectorGet(dart.wrapType(src__user_service.UserService), this.viewData.parentIndex)));
      }
      return this[__HeroService_0_6];
    }
    build() {
      this[_compView_0] = new src__heroes__heroes_component$46template.ViewHeroesComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroesComponent_0_5] = new src__heroes__heroes_component.HeroesComponent.new();
      this[_compView_0].create(this[_HeroesComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroesComponent()).new(0, this, this.rootEl, this[_HeroesComponent_0_5]);
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
  (src__heroes__heroes_component$46template._ViewHeroesComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroesComponent_0_5] = null;
    this[__HeroService_0_6] = null;
    src__heroes__heroes_component$46template._ViewHeroesComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__heroes__heroes_component$46template._ViewHeroesComponentHost0.prototype;
  dart.addTypeTests(src__heroes__heroes_component$46template._ViewHeroesComponentHost0);
  dart.setMethodSignature(src__heroes__heroes_component$46template._ViewHeroesComponentHost0, () => ({
    __proto__: dart.getMethods(src__heroes__heroes_component$46template._ViewHeroesComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__heroes__heroes_component$46template._ViewHeroesComponentHost0, () => ({
    __proto__: dart.getGetters(src__heroes__heroes_component$46template._ViewHeroesComponentHost0.__proto__),
    [_HeroService_0_6]: dart.fnType(src__heroes__hero_service.HeroService, [])
  }));
  dart.setFieldSignature(src__heroes__heroes_component$46template._ViewHeroesComponentHost0, () => ({
    __proto__: dart.getFields(src__heroes__heroes_component$46template._ViewHeroesComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__heroes__heroes_component$46template.ViewHeroesComponent0),
    [_HeroesComponent_0_5]: dart.fieldType(src__heroes__heroes_component.HeroesComponent),
    [__HeroService_0_6]: dart.fieldType(src__heroes__hero_service.HeroService)
  }));
  src__heroes__heroes_component$46template.viewFactory_HeroesComponentHost0 = function(parentView, parentIndex) {
    return new src__heroes__heroes_component$46template._ViewHeroesComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__heroes__heroes_component$46template.viewFactory_HeroesComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__heroes__heroes_component$46template, {
    /*src__heroes__heroes_component$46template.HeroesComponentNgFactory*/get HeroesComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroesComponent()).new('my-heroes', src__heroes__heroes_component$46template.viewFactory_HeroesComponentHost0, src__heroes__heroes_component$46template._HeroesComponentMetadata));
    },
    /*src__heroes__heroes_component$46template._HeroesComponentMetadata*/get _HeroesComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__heroes__heroes_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__heroes__heroes_component$46template.initReflector = function() {
    if (dart.test(src__heroes__heroes_component$46template._visited)) {
      return;
    }
    src__heroes__heroes_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__heroes__heroes_component.HeroesComponent), src__heroes__heroes_component$46template.HeroesComponentNgFactory);
    src__heroes__hero_list_component$46template.initReflector();
    src__heroes__hero_service_provider$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__heroes__heroes_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/heroes/heroes_component.template.ddc", {
    "package:dependency_injection/src/heroes/heroes_component.template.dart": src__heroes__heroes_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["heroes_component.template.dart"],"names":[],"mappings":"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","file":"heroes_component.template.ddc.js"}');
  // Exports:
  return {
    src__heroes__heroes_component$46template: src__heroes__heroes_component$46template
  };
});

//# sourceMappingURL=heroes_component.template.ddc.js.map
