define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero_service', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/user_service', 'packages/angular/src/di/providers'], function(dart_sdk, hero_service, logger_service, user_service, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero_service = hero_service.src__heroes__hero_service;
  const src__logger_service = logger_service.src__logger_service;
  const src__user_service = user_service.src__user_service;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__heroes__hero_service_provider = Object.create(_root);
  let LoggerAndUserServiceToHeroService = () => (LoggerAndUserServiceToHeroService = dart.constFn(dart.fnType(src__heroes__hero_service.HeroService, [src__logger_service.Logger, src__user_service.UserService])))();
  let ProviderOfHeroService = () => (ProviderOfHeroService = dart.constFn(src__di__providers.Provider$(src__heroes__hero_service.HeroService)))();
  src__heroes__hero_service_provider.heroServiceFactory = function(logger, userService) {
    return new src__heroes__hero_service.HeroService.new(logger, userService.user.isAuthorized);
  };
  dart.fn(src__heroes__hero_service_provider.heroServiceFactory, LoggerAndUserServiceToHeroService());
  dart.defineLazy(src__heroes__hero_service_provider, {
    /*src__heroes__hero_service_provider.heroServiceProvider*/get heroServiceProvider() {
      return dart.const(ProviderOfHeroService().new(dart.wrapType(src__heroes__hero_service.HeroService), {useFactory: src__heroes__hero_service_provider.heroServiceFactory, deps: dart.constList([dart.wrapType(src__logger_service.Logger), dart.wrapType(src__user_service.UserService)], core.Object)}));
    }
  });
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_service_provider.ddc", {
    "package:dependency_injection/src/heroes/hero_service_provider.dart": src__heroes__hero_service_provider
  }, '{"version":3,"sourceRoot":"","sources":["hero_service_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;mEAM+B,MAAa,EAAE,WAAuB;UACjE,KAAI,yCAAW,CAAC,MAAM,EAAE,WAAW,KAAK,aAAa;EAAC;;;MAEpD,sDAAmB;YAAG,YAAM,2BAAqB,CAAC,oDAAW,eACnD,qDAAkB,QAAQ,gBAAC,yCAAM,EAAE,4CAAW","file":"hero_service_provider.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_service_provider: src__heroes__hero_service_provider
  };
});

//# sourceMappingURL=hero_service_provider.ddc.js.map
