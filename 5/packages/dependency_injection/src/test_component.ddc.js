define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero_service', 'packages/dependency_injection/src/heroes/hero', 'packages/dependency_injection/src/heroes/hero_list_component'], function(dart_sdk, hero_service, hero, hero_list_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__heroes__hero = hero.src__heroes__hero;
  const src__heroes__hero_list_component = hero_list_component.src__heroes__hero_list_component;
  const _root = Object.create(null);
  const src__test_component = Object.create(_root);
  const $length = dartx.length;
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__heroes__hero.Hero)))();
  let JSArrayOfHero = () => (JSArrayOfHero = dart.constFn(_interceptors.JSArray$(src__heroes__hero.Hero)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringAndFnTovoid = () => (StringAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, VoidTovoid()])))();
  src__test_component.TestComponent = class TestComponent extends core.Object {
    get results() {
      return this[results];
    }
    set results(value) {
      this[results] = value;
    }
  };
  (src__test_component.TestComponent.new = function() {
    this[results] = src__test_component.runTests();
  }).prototype = src__test_component.TestComponent.prototype;
  dart.addTypeTests(src__test_component.TestComponent);
  const results = Symbol("TestComponent.results");
  dart.setFieldSignature(src__test_component.TestComponent, () => ({
    __proto__: dart.getFields(src__test_component.TestComponent.__proto__),
    results: dart.fieldType(dart.dynamic)
  }));
  const _heroes = Symbol('_heroes');
  src__test_component.MockHeroService = class MockHeroService extends core.Object {
    getAll() {
      return this[_heroes];
    }
  };
  (src__test_component.MockHeroService.new = function(heroes) {
    this[_heroes] = heroes;
  }).prototype = src__test_component.MockHeroService.prototype;
  dart.addTypeTests(src__test_component.MockHeroService);
  src__test_component.MockHeroService[dart.implements] = () => [src__heroes__hero_service.HeroService];
  dart.setMethodSignature(src__test_component.MockHeroService, () => ({
    __proto__: dart.getMethods(src__test_component.MockHeroService.__proto__),
    getAll: dart.fnType(core.List$(src__heroes__hero.Hero), [])
  }));
  dart.setFieldSignature(src__test_component.MockHeroService, () => ({
    __proto__: dart.getFields(src__test_component.MockHeroService.__proto__),
    [_heroes]: dart.finalFieldType(ListOfHero())
  }));
  src__test_component.runTests = function() {
    let expectedHeroes = JSArrayOfHero().of([new src__heroes__hero.Hero.new(0, 'A'), new src__heroes__hero.Hero.new(1, 'B')]);
    let mockService = new src__test_component.MockHeroService.new(expectedHeroes);
    src__test_component.it('should have heroes when HeroListComponent created', dart.fn(() => {
      let hlc = new src__heroes__hero_list_component.HeroListComponent.new(mockService);
      dart.dsend(src__test_component.expect(hlc.heroes[$length]), 'toEqual', expectedHeroes[$length]);
    }, VoidToNull()));
    return src__test_component.testResults;
  };
  dart.fn(src__test_component.runTests, VoidTodynamic());
  dart.defineLazy(src__test_component, {
    /*src__test_component.testName*/get testName() {
      return null;
    },
    set testName(_) {},
    /*src__test_component.testResults*/get testResults() {
      return null;
    },
    set testResults(_) {}
  });
  src__test_component.expect = function(actual) {
    return new src__test_component.ExpectResult.new(actual);
  };
  dart.fn(src__test_component.expect, dynamicTodynamic());
  src__test_component.ExpectResult = class ExpectResult extends core.Object {
    get actual() {
      return this[actual$];
    }
    set actual(value) {
      super.actual = value;
    }
    toEqual(expected) {
      src__test_component.testResults = dart.equals(this.actual, expected) ? new (IdentityMapOfString$String()).from(['pass', 'passed', 'message', src__test_component.testName]) : new (IdentityMapOfString$String()).from(['pass', 'failed', 'message', dart.str`${src__test_component.testName}; expected ${this.actual} to equal ${expected}.`]);
    }
  };
  (src__test_component.ExpectResult.new = function(actual) {
    this[actual$] = actual;
  }).prototype = src__test_component.ExpectResult.prototype;
  dart.addTypeTests(src__test_component.ExpectResult);
  const actual$ = Symbol("ExpectResult.actual");
  dart.setMethodSignature(src__test_component.ExpectResult, () => ({
    __proto__: dart.getMethods(src__test_component.ExpectResult.__proto__),
    toEqual: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__test_component.ExpectResult, () => ({
    __proto__: dart.getFields(src__test_component.ExpectResult.__proto__),
    actual: dart.finalFieldType(dart.dynamic)
  }));
  src__test_component.it = function(label, test) {
    src__test_component.testName = label;
    test();
  };
  dart.fn(src__test_component.it, StringAndFnTovoid());
  dart.trackLibraries("packages/dependency_injection/src/test_component.ddc", {
    "package:dependency_injection/src/test_component.dart": src__test_component
  }, '{"version":3,"sourceRoot":"","sources":["test_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAcM;;;;;;;;iBAAO,GAAG,4BAAQ;EACxB;;;;;;;;;;YAOyB,cAAO;;;sDAHT,MAAO;IAAP,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;AAQ7B,QAAI,iBAAiB,oBAAC,IAAI,0BAAI,CAAC,GAAG,MAAM,IAAI,0BAAI,CAAC,GAAG;AACpD,QAAI,cAAc,IAAI,uCAAe,CAAC,cAAc;AACpD,0BAAE,CAAC,qDAAqD;AACtD,UAAI,MAAM,IAAI,sDAAiB,CAAC,WAAW;AAC3C,2CAAM,CAAC,GAAG,OAAO,SAAO,cAAU,cAAc,SAAO;;AAEzD,UAAO,gCAAW;EACpB;;;MAIO,4BAAQ;;;;MACP,+BAAW;;;;;wCACJ,MAAc;UAAK,KAAI,oCAAY,CAAC,MAAM;EAAC;;;IAGlD;;;;;;YAGO,QAAgB;AAC3B,oDAAc,WAAM,EAAI,QAAQ,IAC1B,yCAAC,QAAQ,UAAU,WAAW,4BAAQ,KACtC,yCACE,QAAQ,UACR,WAAW,WAAE,4BAAQ,cAAY,WAAM,aAAW,QAAQ;IAEpE;;mDATa,MAAW;IAAN,aAAM,GAAN,MAAM;EAAC;;;;;;;;;;;oCAYnB,KAAY,EAAE,IAAW;AAC/B,mCAAW,KAAK;AAChB,QAAI;EACN","file":"test_component.ddc.js"}');
  // Exports:
  return {
    src__test_component: src__test_component
  };
});

//# sourceMappingURL=test_component.ddc.js.map
