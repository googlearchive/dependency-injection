define(['dart_sdk', 'packages/dependency_injection/src/logger_service.template', 'packages/dependency_injection/src/car/car.template', 'packages/angular/angular.template'], function(dart_sdk, logger_service, car, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service$46template = logger_service.src__logger_service$46template;
  const src__car__car$46template = car.src__car__car$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__car__car_injector$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__car__car_injector$46template, {
    /*src__car__car_injector$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__car__car_injector$46template.initReflector = function() {
    if (dart.test(src__car__car_injector$46template._visited)) {
      return;
    }
    src__car__car_injector$46template._visited = true;
    src__logger_service$46template.initReflector();
    src__car__car$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__car__car_injector$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/car/car_injector.template.ddc", {
    "package:dependency_injection/src/car/car_injector.template.dart": src__car__car_injector$46template
  }, '{"version":3,"sourceRoot":"","sources":["car_injector.template.dart"],"names":[],"mappings":";;;;;;;;;;;;MAcI,0CAAQ;YAAG;;;;;AAEb,kBAAI,0CAAQ,GAAE;AACZ;;AAEF,iDAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,sCAAa;AACnB,IAAM,gCAAa;EACrB","file":"car_injector.template.ddc.js"}');
  // Exports:
  return {
    src__car__car_injector$46template: src__car__car_injector$46template
  };
});

//# sourceMappingURL=car_injector.template.ddc.js.map
