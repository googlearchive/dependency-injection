define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/dependency_injection/src/heroes/hero_service', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/logger_service.template', 'packages/dependency_injection/src/heroes/hero.template', 'packages/dependency_injection/src/heroes/mock_heroes.template', 'packages/angular/angular.template'], function(dart_sdk, reflector, hero_service, logger_service, logger_service$, hero, mock_heroes, angular) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__logger_service = logger_service.src__logger_service;
  const src__logger_service$46template = logger_service$.src__logger_service$46template;
  const src__heroes__hero$46template = hero.src__heroes__hero$46template;
  const src__heroes__mock_heroes$46template = mock_heroes.src__heroes__mock_heroes$46template;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__heroes__hero_service$46template = Object.create(_root);
  let LoggerAndboolToHeroService = () => (LoggerAndboolToHeroService = dart.constFn(dart.fnType(src__heroes__hero_service.HeroService, [src__logger_service.Logger, core.bool])))();
  let ListOfObject = () => (ListOfObject = dart.constFn(core.List$(core.Object)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__heroes__hero_service$46template, {
    /*src__heroes__hero_service$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  let const$;
  let const$0;
  let const$1;
  src__heroes__hero_service$46template.initReflector = function() {
    if (dart.test(src__heroes__hero_service$46template._visited)) {
      return;
    }
    src__heroes__hero_service$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__heroes__hero_service.HeroService), dart.fn((p0, p1) => new src__heroes__hero_service.HeroService.new(p0, p1), LoggerAndboolToHeroService()));
    src__di__reflector.registerDependencies(dart.wrapType(src__heroes__hero_service.HeroService), const$1 || (const$1 = dart.constList([const$ || (const$ = dart.constList([dart.wrapType(src__logger_service.Logger)], core.Object)), const$0 || (const$0 = dart.constList([dart.wrapType(core.bool)], core.Object))], ListOfObject())));
    src__logger_service$46template.initReflector();
    src__heroes__hero$46template.initReflector();
    src__heroes__mock_heroes$46template.initReflector();
    angular$46template.initReflector();
  };
  dart.fn(src__heroes__hero_service$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_service.template.ddc", {
    "package:dependency_injection/src/heroes/hero_service.template.dart": src__heroes__hero_service$46template
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;MAkBI,6CAAQ;YAAG;;;;;;;;AAEb,kBAAI,6CAAQ,GAAE;AACZ;;AAEF,oDAAW;AAEX,IAAO,kCAAe,CAAC,oDAAW,EAAE,SAAC,EAAa,EAAE,EAAO,KAAK,IAAI,yCAAW,CAAC,EAAE,EAAE,EAAE;AACtF,IAAO,uCAAoB,CAAC,oDAAW,EAAE,sCACvC,oCAAW,yCAAM,kBACjB,sCAAO,wBAAI;AAEb,IAAM,4CAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,iDAAa;AACnB,IAAM,gCAAa;EACrB","file":"hero_service.template.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_service$46template: src__heroes__hero_service$46template
  };
});

//# sourceMappingURL=hero_service.template.ddc.js.map
