define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/dependency_injection/src/test_component', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/heroes/hero.template', 'packages/dependency_injection/src/heroes/hero_list_component.template', 'packages/dependency_injection/src/heroes/hero_service.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, test_component, reflector, hero, hero_list_component, hero_service, angular) {
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
  const src__test_component = test_component.src__test_component;
  const src__di__reflector = reflector.src__di__reflector;
  const src__heroes__hero$46template = hero.src__heroes__hero$46template;
  const src__heroes__hero_list_component$46template = hero_list_component.src__heroes__hero_list_component$46template;
  const src__heroes__hero_service$46template = hero_service.src__heroes__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__test_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfTestComponent = () => (AppViewOfTestComponent = dart.constFn(src__core__linker__app_view.AppView$(src__test_component.TestComponent)))();
  let AppViewAndintToAppViewOfTestComponent = () => (AppViewAndintToAppViewOfTestComponent = dart.constFn(dart.fnType(AppViewOfTestComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfTestComponent = () => (ComponentRefOfTestComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__test_component.TestComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfTestComponent = () => (ComponentFactoryOfTestComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__test_component.TestComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__test_component$46template, {
    /*src__test_component$46template.styles$TestComponent*/get styles$TestComponent() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _text_4 = Symbol('_text_4');
  const _text_6 = Symbol('_text_6');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  let const$;
  src__test_component$46template.ViewTestComponent0 = class ViewTestComponent0 extends src__core__linker__app_view.AppView$(src__test_component.TestComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Tests');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.createAttr(this[_el_2], 'id', 'tests');
      let _text_3 = html.Text.new('Tests ');
      this[_el_2][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_2][$append](this[_text_4]);
      let _text_5 = html.Text.new(': ');
      this[_el_2][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_2][$append](this[_text_6]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(dart.dindex(_ctx.results, 'pass'));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_4][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(dart.dindex(_ctx.results, 'message'));
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (src__test_component$46template.ViewTestComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_text_4] = null;
    this[_text_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__test_component$46template.ViewTestComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-tests'));
    let t = src__test_component$46template.ViewTestComponent0._renderType;
    t == null ? src__test_component$46template.ViewTestComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__test_component$46template.styles$TestComponent) : t;
    this.setupComponentType(src__test_component$46template.ViewTestComponent0._renderType);
  }).prototype = src__test_component$46template.ViewTestComponent0.prototype;
  dart.addTypeTests(src__test_component$46template.ViewTestComponent0);
  dart.setMethodSignature(src__test_component$46template.ViewTestComponent0, () => ({
    __proto__: dart.getMethods(src__test_component$46template.ViewTestComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__test_component.TestComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__test_component$46template.ViewTestComponent0, () => ({
    __proto__: dart.getFields(src__test_component$46template.ViewTestComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_text_4]: dart.fieldType(html.Text),
    [_text_6]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__test_component$46template.ViewTestComponent0, {
    /*src__test_component$46template.ViewTestComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__test_component$46template.viewFactory_TestComponent0 = function(parentView, parentIndex) {
    return new src__test_component$46template.ViewTestComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__test_component$46template.viewFactory_TestComponent0, AppViewAndintToAppViewOfTestComponent());
  dart.defineLazy(src__test_component$46template, {
    /*src__test_component$46template.styles$TestComponentHost*/get styles$TestComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _TestComponent_0_5 = Symbol('_TestComponent_0_5');
  src__test_component$46template._ViewTestComponentHost0 = class _ViewTestComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__test_component$46template.ViewTestComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_TestComponent_0_5] = new src__test_component.TestComponent.new();
      this[_compView_0].create(this[_TestComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfTestComponent()).new(0, this, this.rootEl, this[_TestComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__test_component$46template._ViewTestComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_TestComponent_0_5] = null;
    src__test_component$46template._ViewTestComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__test_component$46template._ViewTestComponentHost0.prototype;
  dart.addTypeTests(src__test_component$46template._ViewTestComponentHost0);
  dart.setMethodSignature(src__test_component$46template._ViewTestComponentHost0, () => ({
    __proto__: dart.getMethods(src__test_component$46template._ViewTestComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__test_component$46template._ViewTestComponentHost0, () => ({
    __proto__: dart.getFields(src__test_component$46template._ViewTestComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__test_component$46template.ViewTestComponent0),
    [_TestComponent_0_5]: dart.fieldType(src__test_component.TestComponent)
  }));
  src__test_component$46template.viewFactory_TestComponentHost0 = function(parentView, parentIndex) {
    return new src__test_component$46template._ViewTestComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__test_component$46template.viewFactory_TestComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__test_component$46template, {
    /*src__test_component$46template.TestComponentNgFactory*/get TestComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfTestComponent()).new('my-tests', src__test_component$46template.viewFactory_TestComponentHost0, src__test_component$46template._TestComponentMetadata));
    },
    /*src__test_component$46template._TestComponentMetadata*/get _TestComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__test_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__test_component$46template.initReflector = function() {
    if (dart.test(src__test_component$46template._visited)) {
      return;
    }
    src__test_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__test_component.TestComponent), src__test_component$46template.TestComponentNgFactory);
    src__heroes__hero$46template.initReflector();
    src__heroes__hero_list_component$46template.initReflector();
    src__heroes__hero_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__test_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/test_component.template.ddc", {
    "package:dependency_injection/src/test_component.template.dart": src__test_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["test_component.template.dart"],"names":[],"mappings":"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","file":"test_component.template.ddc.js"}');
  // Exports:
  return {
    src__test_component$46template: src__test_component$46template
  };
});

//# sourceMappingURL=test_component.template.ddc.js.map
