define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/car/car', 'packages/angular/angular.template'], function(dart_sdk, reflector, car, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__car__car = car.src__car__car;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__car__car$46template = Object.create(_root);
  let VoidToEngine = () => (VoidToEngine = dart.constFn(dart.fnType(src__car__car.Engine, [])))();
  let VoidToTires = () => (VoidToTires = dart.constFn(dart.fnType(src__car__car.Tires, [])))();
  let EngineAndTiresToCar = () => (EngineAndTiresToCar = dart.constFn(dart.fnType(src__car__car.Car, [src__car__car.Engine, src__car__car.Tires])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__car__car$46template, {
    /*src__car__car$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  src__car__car$46template.initReflector = function() {
    if (dart.test(src__car__car$46template._visited)) {
      return;
    }
    src__car__car$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__car__car.Engine), dart.fn(() => new src__car__car.Engine.new(), VoidToEngine()));
    src__di__reflector.registerFactory(dart.wrapType(src__car__car.Tires), dart.fn(() => new src__car__car.Tires.new(), VoidToTires()));
    src__di__reflector.registerFactory(dart.wrapType(src__car__car.Car), dart.fn((p0, p1) => new src__car__car.Car.new(p0, p1), EngineAndTiresToCar()));
    src__di__reflector.registerDependencies(dart.wrapType(src__car__car.Car), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__car__car.Engine)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(src__car__car.Tires)], core.Object))], ListOfObject())));
    angular$46template.initReflector();
  };
  dart.fn(src__car__car$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/car/car.template.ddc", {
    "package:dependency_injection/src/car/car.template.dart": src__car__car$46template
  }, '{"version":3,"sourceRoot":"","sources":["car.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAYI,iCAAQ;YAAG;;;;;;;;AAEb,kBAAI,iCAAQ,GAAE;AACZ;;AAEF,wCAAW;AAEX,IAAO,kCAAe,CAAC,mCAAM,EAAE,cAAM,IAAI,wBAAM;AAC/C,IAAO,kCAAe,CAAC,kCAAK,EAAE,cAAM,IAAI,uBAAK;AAC7C,IAAO,kCAAe,CAAC,gCAAG,EAAE,SAAC,EAAa,EAAE,EAAY,KAAK,IAAI,qBAAG,CAAC,EAAE,EAAE,EAAE;AAC3E,IAAO,uCAAoB,CAAC,gCAAG,EAAE,sCAC/B,oCAAW,mCAAM,kBACjB,sCAAW,kCAAK;AAElB,IAAM,gCAAa;EACrB","file":"car.template.ddc.js"}');
  // Exports:
  return {
    src__car__car$46template: src__car__car$46template
  };
});

//# sourceMappingURL=car.template.ddc.js.map
