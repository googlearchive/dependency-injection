define(['dart_sdk', 'packages/dependency_injection/src/car/car.template'], function(dart_sdk, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car$46template = car.src__car__car$46template;
  const _root = Object.create(null);
  const src__car__car_factory$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__car__car_factory$46template, {
    /*src__car__car_factory$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__car__car_factory$46template.initReflector = function() {
    if (dart.test(src__car__car_factory$46template._visited)) {
      return;
    }
    src__car__car_factory$46template._visited = true;
    src__car__car$46template.initReflector();
  };
  dart.fn(src__car__car_factory$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/car/car_factory.template.ddc", {
    "package:dependency_injection/src/car/car_factory.template.dart": src__car__car_factory$46template
  }, '{"version":3,"sourceRoot":"","sources":["car_factory.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,yCAAQ;YAAG;;;;;AAEb,kBAAI,yCAAQ,GAAE;AACZ;;AAEF,gDAAW;AAEX,IAAM,sCAAa;EACrB","file":"car_factory.template.ddc.js"}');
  // Exports:
  return {
    src__car__car_factory$46template: src__car__car_factory$46template
  };
});

//# sourceMappingURL=car_factory.template.ddc.js.map
