define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/user_service', 'packages/angular/angular.template'], function(dart_sdk, reflector, user_service, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__user_service = user_service.src__user_service;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__user_service$46template = Object.create(_root);
  let VoidToUserService = () => (VoidToUserService = dart.constFn(dart.fnType(src__user_service.UserService, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__user_service$46template, {
    /*src__user_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__user_service$46template.initReflector = function() {
    if (dart.test(src__user_service$46template._visited)) {
      return;
    }
    src__user_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__user_service.UserService), dart.fn(() => new src__user_service.UserService.new(), VoidToUserService()));
    angular$46template.initReflector();
  };
  dart.fn(src__user_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/user_service.template.ddc", {
    "package:dependency_injection/src/user_service.template.dart": src__user_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["user_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAWI,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,kCAAe,CAAC,4CAAW,EAAE,cAAM,IAAI,iCAAW;AACzD,IAAM,gCAAa;EACrB","file":"user_service.template.ddc.js"}');
  // Exports:
  return {
    src__user_service$46template: src__user_service$46template
  };
});

//# sourceMappingURL=user_service.template.ddc.js.map
