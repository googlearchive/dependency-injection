define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/dependency_injection/src/heroes/hero_list_component', 'packages/dependency_injection/src/heroes/hero', 'packages/dependency_injection/src/heroes/hero_service', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/heroes/hero.template', 'packages/dependency_injection/src/heroes/hero_service.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, ng_for, hero_list_component, hero, hero_service, reflector, hero$, hero_service$, angular) {
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
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__heroes__hero_list_component = hero_list_component.src__heroes__hero_list_component;
  const src__heroes__hero = hero.src__heroes__hero;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__di__reflector = reflector.src__di__reflector;
  const src__heroes__hero$46template = hero$.src__heroes__hero$46template;
  const src__heroes__hero_service$46template = hero_service$.src__heroes__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__heroes__hero_list_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHeroListComponent = () => (AppViewOfHeroListComponent = dart.constFn(src__core__linker__app_view.AppView$(src__heroes__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppViewOfHeroListComponent = () => (AppViewAndintToAppViewOfHeroListComponent = dart.constFn(dart.fnType(AppViewOfHeroListComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHeroListComponent = () => (ComponentRefOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__heroes__hero_list_component.HeroListComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHeroListComponent = () => (ComponentFactoryOfHeroListComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__heroes__hero_list_component.HeroListComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__heroes__hero_list_component$46template, {
    /*src__heroes__hero_list_component$46template.styles$HeroListComponent*/get styles$HeroListComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _appEl_0 = Symbol('_appEl_0');
  const _NgFor_0_9 = Symbol('_NgFor_0_9');
  let const$;
  src__heroes__hero_list_component$46template.ViewHeroListComponent0 = class ViewHeroListComponent0 extends src__core__linker__app_view.AppView$(src__heroes__hero_list_component.HeroListComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let _anchor_0 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_0);
      this[_appEl_0] = new src__core__linker__view_container.ViewContainer.new(0, null, this, _anchor_0);
      let _TemplateRef_0_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_0], src__heroes__hero_list_component$46template.viewFactory_HeroListComponent1);
      this[_NgFor_0_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_0], _TemplateRef_0_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.heroes == null)) {
          this[_NgFor_0_9].ngForOf = _ctx.heroes;
        }
      }
      this[_NgFor_0_9].ngDoCheck();
      this[_appEl_0].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_0];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__heroes__hero_list_component$46template.ViewHeroListComponent0.new = function(parentView, parentIndex) {
    this[_appEl_0] = null;
    this[_NgFor_0_9] = null;
    src__heroes__hero_list_component$46template.ViewHeroListComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('hero-list'));
    let t = src__heroes__hero_list_component$46template.ViewHeroListComponent0._renderType;
    t == null ? src__heroes__hero_list_component$46template.ViewHeroListComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__heroes__hero_list_component$46template.styles$HeroListComponent) : t;
    this.setupComponentType(src__heroes__hero_list_component$46template.ViewHeroListComponent0._renderType);
  }).prototype = src__heroes__hero_list_component$46template.ViewHeroListComponent0.prototype;
  dart.addTypeTests(src__heroes__hero_list_component$46template.ViewHeroListComponent0);
  dart.setMethodSignature(src__heroes__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getMethods(src__heroes__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__heroes__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__heroes__hero_list_component$46template.ViewHeroListComponent0, () => ({
    __proto__: dart.getFields(src__heroes__hero_list_component$46template.ViewHeroListComponent0.__proto__),
    [_appEl_0]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_0_9]: dart.fieldType(src__common__directives__ng_for.NgFor)
  }));
  dart.defineLazy(src__heroes__hero_list_component$46template.ViewHeroListComponent0, {
    /*src__heroes__hero_list_component$46template.ViewHeroListComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__heroes__hero_list_component$46template.viewFactory_HeroListComponent0 = function(parentView, parentIndex) {
    return new src__heroes__hero_list_component$46template.ViewHeroListComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__heroes__hero_list_component$46template.viewFactory_HeroListComponent0, AppViewAndintToAppViewOfHeroListComponent());
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _text_3 = Symbol('_text_3');
  const _text_5 = Symbol('_text_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  src__heroes__hero_list_component$46template._ViewHeroListComponent1 = class _ViewHeroListComponent1 extends src__core__linker__app_view.AppView$(src__heroes__hero_list_component.HeroListComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this[_text_1] = html.Text.new('');
      this[_el_0][$append](this[_text_1]);
      let _text_2 = html.Text.new(' - ');
      this[_el_0][$append](_text_2);
      this[_text_3] = html.Text.new('');
      this[_el_0][$append](this[_text_3]);
      let _text_4 = html.Text.new('\n      (');
      this[_el_0][$append](_text_4);
      this[_text_5] = html.Text.new('');
      this[_el_0][$append](this[_text_5]);
      let _text_6 = html.Text.new(')');
      this[_el_0][$append](_text_6);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_hero = src__heroes__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_1][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(dart.test(local_hero.isSecret) ? 'secret' : 'public');
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_5][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__heroes__hero_list_component$46template._ViewHeroListComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_text_3] = null;
    this[_text_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__heroes__hero_list_component$46template._ViewHeroListComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__heroes__hero_list_component$46template.ViewHeroListComponent0._renderType;
  }).prototype = src__heroes__hero_list_component$46template._ViewHeroListComponent1.prototype;
  dart.addTypeTests(src__heroes__hero_list_component$46template._ViewHeroListComponent1);
  dart.setMethodSignature(src__heroes__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getMethods(src__heroes__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__heroes__hero_list_component.HeroListComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__heroes__hero_list_component$46template._ViewHeroListComponent1, () => ({
    __proto__: dart.getFields(src__heroes__hero_list_component$46template._ViewHeroListComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_1]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_text_5]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__heroes__hero_list_component$46template.viewFactory_HeroListComponent1 = function(parentView, parentIndex) {
    return new src__heroes__hero_list_component$46template._ViewHeroListComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__heroes__hero_list_component$46template.viewFactory_HeroListComponent1, AppViewAndintToAppViewOfHeroListComponent());
  dart.defineLazy(src__heroes__hero_list_component$46template, {
    /*src__heroes__hero_list_component$46template.styles$HeroListComponentHost*/get styles$HeroListComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HeroListComponent_0_5 = Symbol('_HeroListComponent_0_5');
  src__heroes__hero_list_component$46template._ViewHeroListComponentHost0 = class _ViewHeroListComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__heroes__hero_list_component$46template.ViewHeroListComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HeroListComponent_0_5] = new src__heroes__hero_list_component.HeroListComponent.new(src__heroes__hero_service.HeroService._check(this.injectorGet(dart.wrapType(src__heroes__hero_service.HeroService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_HeroListComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHeroListComponent()).new(0, this, this.rootEl, this[_HeroListComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HeroListComponent_0_5] = null;
    src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.prototype;
  dart.addTypeTests(src__heroes__hero_list_component$46template._ViewHeroListComponentHost0);
  dart.setMethodSignature(src__heroes__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getMethods(src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__heroes__hero_list_component$46template._ViewHeroListComponentHost0, () => ({
    __proto__: dart.getFields(src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__heroes__hero_list_component$46template.ViewHeroListComponent0),
    [_HeroListComponent_0_5]: dart.fieldType(src__heroes__hero_list_component.HeroListComponent)
  }));
  src__heroes__hero_list_component$46template.viewFactory_HeroListComponentHost0 = function(parentView, parentIndex) {
    return new src__heroes__hero_list_component$46template._ViewHeroListComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__heroes__hero_list_component$46template.viewFactory_HeroListComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__heroes__hero_list_component$46template, {
    /*src__heroes__hero_list_component$46template.HeroListComponentNgFactory*/get HeroListComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHeroListComponent()).new('hero-list', src__heroes__hero_list_component$46template.viewFactory_HeroListComponentHost0, src__heroes__hero_list_component$46template._HeroListComponentMetadata));
    },
    /*src__heroes__hero_list_component$46template._HeroListComponentMetadata*/get _HeroListComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__heroes__hero_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__heroes__hero_list_component$46template.initReflector = function() {
    if (dart.test(src__heroes__hero_list_component$46template._visited)) {
      return;
    }
    src__heroes__hero_list_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__heroes__hero_list_component.HeroListComponent), src__heroes__hero_list_component$46template.HeroListComponentNgFactory);
    src__heroes__hero$46template.initReflector();
    src__heroes__hero_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__heroes__hero_list_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_list_component.template.ddc", {
    "package:dependency_injection/src/heroes/hero_list_component.template.dart": src__heroes__hero_list_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.template.dart"],"names":[],"mappings":"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","file":"hero_list_component.template.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_list_component$46template: src__heroes__hero_list_component$46template
  };
});

//# sourceMappingURL=hero_list_component.template.ddc.js.map
