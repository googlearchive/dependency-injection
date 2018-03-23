define(['dart_sdk', 'packages/dependency_injection/src/car/car', 'packages/dependency_injection/src/heroes/hero_service', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/angular/src/di/injector/empty', 'packages/dependency_injection/src/heroes/hero'], function(dart_sdk, car, hero_service, lifecycle_hooks, empty, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car = car.src__car__car;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__di__injector__injector = empty.src__di__injector__injector;
  const src__heroes__hero = hero.src__heroes__hero;
  const _root = Object.create(null);
  const src__injector_component = Object.create(_root);
  const $_get = dartx._get;
  const _injector = Symbol('_injector');
  src__injector_component.InjectorComponent = class InjectorComponent extends core.Object {
    get car() {
      return this[car$];
    }
    set car(value) {
      this[car$] = value;
    }
    get heroService() {
      return this[heroService];
    }
    set heroService(value) {
      this[heroService] = value;
    }
    get hero() {
      return this[hero$];
    }
    set hero(value) {
      this[hero$] = value;
    }
    ngOnInit() {
      this.car = src__car__car.Car._check(this[_injector].get(dart.wrapType(src__car__car.Car)));
      this.heroService = src__heroes__hero_service.HeroService._check(this[_injector].get(dart.wrapType(src__heroes__hero_service.HeroService)));
      this.hero = this.heroService.getAll()[$_get](0);
    }
    get rodent() {
      return core.String._check(this[_injector].get(dart.wrapType(src__injector_component.ROUS), "R.O.U.S.'s? I don't think they exist!"));
    }
  };
  (src__injector_component.InjectorComponent.new = function(injector) {
    this[car$] = null;
    this[heroService] = null;
    this[hero$] = null;
    this[_injector] = injector;
  }).prototype = src__injector_component.InjectorComponent.prototype;
  dart.addTypeTests(src__injector_component.InjectorComponent);
  const car$ = Symbol("InjectorComponent.car");
  const heroService = Symbol("InjectorComponent.heroService");
  const hero$ = Symbol("InjectorComponent.hero");
  src__injector_component.InjectorComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__injector_component.InjectorComponent, () => ({
    __proto__: dart.getMethods(src__injector_component.InjectorComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__injector_component.InjectorComponent, () => ({
    __proto__: dart.getGetters(src__injector_component.InjectorComponent.__proto__),
    rodent: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__injector_component.InjectorComponent, () => ({
    __proto__: dart.getFields(src__injector_component.InjectorComponent.__proto__),
    [_injector]: dart.finalFieldType(src__di__injector__injector.Injector),
    car: dart.fieldType(src__car__car.Car),
    heroService: dart.fieldType(src__heroes__hero_service.HeroService),
    hero: dart.fieldType(src__heroes__hero.Hero)
  }));
  src__injector_component.ROUS = class ROUS extends core.Object {};
  (src__injector_component.ROUS.new = function() {
  }).prototype = src__injector_component.ROUS.prototype;
  dart.addTypeTests(src__injector_component.ROUS);
  dart.trackLibraries("packages/dependency_injection/src/injector_component.ddc", {
    "package:dependency_injection/src/injector_component.dart": src__injector_component
  }, '{"version":3,"sourceRoot":"","sources":["injector_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;IAyBM;;;;;;IACQ;;;;;;IACP;;;;;;;AAMH,cAAG,4BAAG,eAAS,IAAI,CAAC,gCAAG;AACvB,sBAAW,gDAAG,eAAS,IAAI,CAAC,oDAAW;AACvC,eAAI,GAAG,gBAAW,OAAO,UAAG;IAC9B;;gCAGI,eAAS,IAAI,CAAC,2CAAI,EAAE;IAAwC;;4DAVzC,QAAS;IAJ5B,UAAG;IACK,iBAAW;IAClB,WAAI;IAEc,eAAS,GAAT,QAAS;EAAC;;;;;;;;;;;;;;;;;;;;;;;EAevB","file":"injector_component.ddc.js"}');
  // Exports:
  return {
    src__injector_component: src__injector_component
  };
});

//# sourceMappingURL=injector_component.ddc.js.map
