define(['dart_sdk', 'packages/dependency_injection/src/car/car', 'packages/angular/src/di/injector/empty', 'packages/dependency_injection/src/logger_service'], function(dart_sdk, car, empty, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car = car.src__car__car;
  const src__di__injector__runtime = empty.src__di__injector__runtime;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__car__car_injector = Object.create(_root);
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let VoidToCar = () => (VoidToCar = dart.constFn(dart.fnType(src__car__car.Car, [])))();
  src__car__car_injector.useInjector = function() {
    let injector = null;
    injector = src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(src__car__car.Car), dart.wrapType(src__car__car.Engine), dart.wrapType(src__car__car.Tires)]));
    let car = injector.get(dart.wrapType(src__car__car.Car));
    dart.dput(car, 'description', 'Injector');
    injector = src__di__injector__runtime.ReflectiveInjector.resolveAndCreate(JSArrayOfObject().of([dart.wrapType(src__logger_service.Logger)]));
    let logger = injector.get(dart.wrapType(src__logger_service.Logger));
    dart.dsend(logger, 'log', 'Injector car.drive() said: ' + dart.notNull(core.String._check(dart.dsend(car, 'drive'))));
    return src__car__car.Car._check(car);
  };
  dart.fn(src__car__car_injector.useInjector, VoidToCar());
  dart.trackLibraries("packages/dependency_injection/src/car/car_injector.ddc", {
    "package:dependency_injection/src/car/car_injector.dart": src__car__car_injector
  }, '{"version":3,"sourceRoot":"","sources":["car_injector.dart"],"names":[],"mappings":";;;;;;;;;;;;;;AAME,QAAmB;AAKnB,YAAQ,GAAG,6CAAkB,iBAAiB,CAAC,sBAAC,gCAAG,EAAE,mCAAM,EAAE,kCAAK;AAClE,QAAI,MAAM,QAAQ,IAAI,CAAC,gCAAG;AAC1B,iBAAG,iBAAe;AAElB,YAAQ,GAAG,6CAAkB,iBAAiB,CAAC,sBAAC,yCAAM;AACtD,QAAI,SAAS,QAAQ,IAAI,CAAC,yCAAM;AAChC,qBAAM,SAAK,AAA8B,2EAAE,GAAG;AAC9C,oCAAO,GAAG;EACZ","file":"car_injector.ddc.js"}');
  // Exports:
  return {
    src__car__car_injector: src__car__car_injector
  };
});

//# sourceMappingURL=car_injector.ddc.js.map
