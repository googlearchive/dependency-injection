define(['dart_sdk', 'packages/dependency_injection/src/car/car.template'], function(dart_sdk, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car$46template = car.src__car__car$46template;
  const _root = Object.create(null);
  const src__car__car_no_di$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__car__car_no_di$46template, {
    /*src__car__car_no_di$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__car__car_no_di$46template.initReflector = function() {
    if (dart.test(src__car__car_no_di$46template._visited)) {
      return;
    }
    src__car__car_no_di$46template._visited = true;
    src__car__car$46template.initReflector();
  };
  dart.fn(src__car__car_no_di$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/car/car_no_di.template.ddc", {
    "package:dependency_injection/src/car/car_no_di.template.dart": src__car__car_no_di$46template
  }, '{"version":3,"sourceRoot":"","sources":["car_no_di.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,uCAAQ;YAAG;;;;;AAEb,kBAAI,uCAAQ,GAAE;AACZ;;AAEF,8CAAW;AAEX,IAAM,sCAAa;EACrB","file":"car_no_di.template.ddc.js"}');
  // Exports:
  return {
    src__car__car_no_di$46template: src__car__car_no_di$46template
  };
});

//# sourceMappingURL=car_no_di.template.ddc.js.map
