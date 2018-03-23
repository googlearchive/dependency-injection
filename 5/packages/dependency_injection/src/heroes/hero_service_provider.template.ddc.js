define(['dart_sdk', 'packages/dependency_injection/src/logger_service.template', 'packages/dependency_injection/src/user_service.template', 'packages/dependency_injection/src/heroes/hero_service.template', 'packages/angular/angular.template'], function(dart_sdk, logger_service, user_service, hero_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service$46template = logger_service.src__logger_service$46template;
  const src__user_service$46template = user_service.src__user_service$46template;
  const src__heroes__hero_service$46template = hero_service.src__heroes__hero_service$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__heroes__hero_service_provider$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__heroes__hero_service_provider$46template, {
    /*src__heroes__hero_service_provider$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__heroes__hero_service_provider$46template.initReflector = function() {
    if (dart.test(src__heroes__hero_service_provider$46template._visited)) {
      return;
    }
    src__heroes__hero_service_provider$46template._visited = true;
    src__logger_service$46template.initReflector();
    src__user_service$46template.initReflector();
    src__heroes__hero_service$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__heroes__hero_service_provider$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_service_provider.template.ddc", {
    "package:dependency_injection/src/heroes/hero_service_provider.template.dart": src__heroes__hero_service_provider$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service_provider.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAgBI,sDAAQ;YAAG;;;;;AAEb,kBAAI,sDAAQ,GAAE;AACZ;;AAEF,6DAAW;AAEX,IAAM,4CAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,kDAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service_provider.template.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_service_provider$46template: src__heroes__hero_service_provider$46template
  };
});

//# sourceMappingURL=hero_service_provider.template.ddc.js.map
