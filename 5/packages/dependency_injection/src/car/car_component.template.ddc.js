define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/dependency_injection/src/car/car_component', 'packages/dependency_injection/src/car/car', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/car/car.template', 'packages/dependency_injection/src/car/car_creations.template', 'packages/dependency_injection/src/car/car_factory.template', 'packages/dependency_injection/src/car/car_injector.template', 'packages/dependency_injection/src/car/car_no_di.template', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, app_view, car_component, car, reflector, car$, car_creations, car_factory, car_injector, car_no_di, angular) {
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
  const src__car__car_component = car_component.src__car__car_component;
  const src__car__car = car.src__car__car;
  const src__di__reflector = reflector.src__di__reflector;
  const src__car__car$46template = car$.src__car__car$46template;
  const src__car__car_creations$46template = car_creations.src__car__car_creations$46template;
  const src__car__car_factory$46template = car_factory.src__car__car_factory$46template;
  const src__car__car_injector$46template = car_injector.src__car__car_injector$46template;
  const src__car__car_no_di$46template = car_no_di.src__car__car_no_di$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__car__car_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfCarComponent = () => (AppViewOfCarComponent = dart.constFn(src__core__linker__app_view.AppView$(src__car__car_component.CarComponent)))();
  let AppViewAndintToAppViewOfCarComponent = () => (AppViewAndintToAppViewOfCarComponent = dart.constFn(dart.fnType(AppViewOfCarComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfCarComponent = () => (ComponentRefOfCarComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__car__car_component.CarComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfCarComponent = () => (ComponentFactoryOfCarComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__car__car_component.CarComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__car__car_component$46template, {
    /*src__car__car_component$46template.styles$CarComponent*/get styles$CarComponent() {
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
  const _el_8 = Symbol('_el_8');
  const _text_9 = Symbol('_text_9');
  const _el_10 = Symbol('_el_10');
  const _text_11 = Symbol('_text_11');
  const _el_12 = Symbol('_el_12');
  const _text_13 = Symbol('_text_13');
  const _el_14 = Symbol('_el_14');
  const _text_15 = Symbol('_text_15');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  let const$;
  src__car__car_component$46template.ViewCarComponent0 = class ViewCarComponent0 extends src__core__linker__app_view.AppView$(src__car__car_component.CarComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      let _text_1 = html.Text.new('Cars');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_2], 'id', 'di');
      this[_text_3] = html.Text.new('');
      this[_el_2][$append](this[_text_3]);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_4], 'id', 'nodi');
      this[_text_5] = html.Text.new('');
      this[_el_4][$append](this[_text_5]);
      this[_el_6] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_6], 'id', 'injector');
      this[_text_7] = html.Text.new('');
      this[_el_6][$append](this[_text_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_8], 'id', 'factory');
      this[_text_9] = html.Text.new('');
      this[_el_8][$append](this[_text_9]);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_10], 'id', 'simple');
      this[_text_11] = html.Text.new('');
      this[_el_10][$append](this[_text_11]);
      this[_el_12] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_12], 'id', 'super');
      this[_text_13] = html.Text.new('');
      this[_el_12][$append](this[_text_13]);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.createAttr(this[_el_14], 'id', 'test');
      this[_text_15] = html.Text.new('');
      this[_el_14][$append](this[_text_15]);
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
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.noDiCar.drive());
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_5][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(_ctx.injectorCar.drive());
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_7][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.factoryCar.drive());
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_9][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.simpleCar.drive());
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_11][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.superCar.drive());
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_13][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = src__core__linker__app_view_utils.interpolate0(_ctx.testCar.drive());
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_text_15][$text] = core.String._check(currVal_6);
        this[_expr_6] = currVal_6;
      }
    }
  };
  (src__car__car_component$46template.ViewCarComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_text_3] = null;
    this[_el_4] = null;
    this[_text_5] = null;
    this[_el_6] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_text_9] = null;
    this[_el_10] = null;
    this[_text_11] = null;
    this[_el_12] = null;
    this[_text_13] = null;
    this[_el_14] = null;
    this[_text_15] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    src__car__car_component$46template.ViewCarComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-car'));
    let t = src__car__car_component$46template.ViewCarComponent0._renderType;
    t == null ? src__car__car_component$46template.ViewCarComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.None, src__car__car_component$46template.styles$CarComponent) : t;
    this.setupComponentType(src__car__car_component$46template.ViewCarComponent0._renderType);
  }).prototype = src__car__car_component$46template.ViewCarComponent0.prototype;
  dart.addTypeTests(src__car__car_component$46template.ViewCarComponent0);
  dart.setMethodSignature(src__car__car_component$46template.ViewCarComponent0, () => ({
    __proto__: dart.getMethods(src__car__car_component$46template.ViewCarComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__car__car_component.CarComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__car__car_component$46template.ViewCarComponent0, () => ({
    __proto__: dart.getFields(src__car__car_component$46template.ViewCarComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_text_3]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.DivElement),
    [_text_5]: dart.fieldType(html.Text),
    [_el_6]: dart.fieldType(html.DivElement),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.DivElement),
    [_text_9]: dart.fieldType(html.Text),
    [_el_10]: dart.fieldType(html.DivElement),
    [_text_11]: dart.fieldType(html.Text),
    [_el_12]: dart.fieldType(html.DivElement),
    [_text_13]: dart.fieldType(html.Text),
    [_el_14]: dart.fieldType(html.DivElement),
    [_text_15]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__car__car_component$46template.ViewCarComponent0, {
    /*src__car__car_component$46template.ViewCarComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__car__car_component$46template.viewFactory_CarComponent0 = function(parentView, parentIndex) {
    return new src__car__car_component$46template.ViewCarComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__car__car_component$46template.viewFactory_CarComponent0, AppViewAndintToAppViewOfCarComponent());
  dart.defineLazy(src__car__car_component$46template, {
    /*src__car__car_component$46template.styles$CarComponentHost*/get styles$CarComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _Engine_0_5 = Symbol('_Engine_0_5');
  const _Tires_0_6 = Symbol('_Tires_0_6');
  const _Car_0_7 = Symbol('_Car_0_7');
  const _CarComponent_0_8 = Symbol('_CarComponent_0_8');
  src__car__car_component$46template._ViewCarComponentHost0 = class _ViewCarComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__car__car_component$46template.ViewCarComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_Engine_0_5] = new src__car__car.Engine.new();
      this[_Tires_0_6] = new src__car__car.Tires.new();
      this[_Car_0_7] = new src__car__car.Car.new(this[_Engine_0_5], this[_Tires_0_6]);
      this[_CarComponent_0_8] = new src__car__car_component.CarComponent.new(this[_Car_0_7]);
      this[_compView_0].create(this[_CarComponent_0_8], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfCarComponent()).new(0, this, this.rootEl, this[_CarComponent_0_8]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__car__car.Engine) && 0 === nodeIndex) {
        return this[_Engine_0_5];
      }
      if (token === dart.wrapType(src__car__car.Tires) && 0 === nodeIndex) {
        return this[_Tires_0_6];
      }
      if (token === dart.wrapType(src__car__car.Car) && 0 === nodeIndex) {
        return this[_Car_0_7];
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
  (src__car__car_component$46template._ViewCarComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_Engine_0_5] = null;
    this[_Tires_0_6] = null;
    this[_Car_0_7] = null;
    this[_CarComponent_0_8] = null;
    src__car__car_component$46template._ViewCarComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__car__car_component$46template._ViewCarComponentHost0.prototype;
  dart.addTypeTests(src__car__car_component$46template._ViewCarComponentHost0);
  dart.setMethodSignature(src__car__car_component$46template._ViewCarComponentHost0, () => ({
    __proto__: dart.getMethods(src__car__car_component$46template._ViewCarComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__car__car_component$46template._ViewCarComponentHost0, () => ({
    __proto__: dart.getFields(src__car__car_component$46template._ViewCarComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__car__car_component$46template.ViewCarComponent0),
    [_Engine_0_5]: dart.fieldType(src__car__car.Engine),
    [_Tires_0_6]: dart.fieldType(src__car__car.Tires),
    [_Car_0_7]: dart.fieldType(src__car__car.Car),
    [_CarComponent_0_8]: dart.fieldType(src__car__car_component.CarComponent)
  }));
  src__car__car_component$46template.viewFactory_CarComponentHost0 = function(parentView, parentIndex) {
    return new src__car__car_component$46template._ViewCarComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__car__car_component$46template.viewFactory_CarComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__car__car_component$46template, {
    /*src__car__car_component$46template.CarComponentNgFactory*/get CarComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfCarComponent()).new('my-car', src__car__car_component$46template.viewFactory_CarComponentHost0, src__car__car_component$46template._CarComponentMetadata));
    },
    /*src__car__car_component$46template._CarComponentMetadata*/get _CarComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__car__car_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__car__car_component$46template.initReflector = function() {
    if (dart.test(src__car__car_component$46template._visited)) {
      return;
    }
    src__car__car_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__car__car_component.CarComponent), src__car__car_component$46template.CarComponentNgFactory);
    src__car__car$46template.initReflector();
    src__car__car_creations$46template.initReflector();
    src__car__car_factory$46template.initReflector();
    src__car__car_injector$46template.initReflector();
    src__car__car_no_di$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__car__car_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/car/car_component.template.ddc", {
    "package:dependency_injection/src/car/car_component.template.dart": src__car__car_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["car_component.template.dart"],"names":[],"mappings":"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","file":"car_component.template.ddc.js"}');
  // Exports:
  return {
    src__car__car_component$46template: src__car__car_component$46template
  };
});

//# sourceMappingURL=car_component.template.ddc.js.map
