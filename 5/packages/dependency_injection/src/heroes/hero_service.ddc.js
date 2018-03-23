define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero', 'packages/dependency_injection/src/heroes/mock_heroes', 'packages/dependency_injection/src/logger_service'], function(dart_sdk, hero, mock_heroes, logger_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero = hero.src__heroes__hero;
  const src__heroes__mock_heroes = mock_heroes.src__heroes__mock_heroes;
  const src__logger_service = logger_service.src__logger_service;
  const _root = Object.create(null);
  const src__heroes__hero_service = Object.create(_root);
  const $toList = dartx.toList;
  const $where = dartx.where;
  let HeroTobool = () => (HeroTobool = dart.constFn(dart.fnType(core.bool, [src__heroes__hero.Hero])))();
  const _logger = Symbol('_logger');
  const _isAuthorized = Symbol('_isAuthorized');
  src__heroes__hero_service.HeroService = class HeroService extends core.Object {
    getAll() {
      let auth = dart.test(this[_isAuthorized]) ? 'authorized' : 'unauthorized';
      this[_logger].log(dart.str`Getting heroes for ${auth} user.`);
      return src__heroes__mock_heroes.mockHeroes[$where](dart.fn(hero => dart.test(this[_isAuthorized]) || !dart.test(hero.isSecret), HeroTobool()))[$toList]();
    }
  };
  (src__heroes__hero_service.HeroService.new = function(logger, isAuthorized) {
    this[_logger] = logger;
    this[_isAuthorized] = isAuthorized;
  }).prototype = src__heroes__hero_service.HeroService.prototype;
  dart.addTypeTests(src__heroes__hero_service.HeroService);
  dart.setMethodSignature(src__heroes__hero_service.HeroService, () => ({
    __proto__: dart.getMethods(src__heroes__hero_service.HeroService.__proto__),
    getAll: dart.fnType(core.List$(src__heroes__hero.Hero), [])
  }));
  dart.setFieldSignature(src__heroes__hero_service.HeroService, () => ({
    __proto__: dart.getFields(src__heroes__hero_service.HeroService.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.Logger),
    [_isAuthorized]: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_service.ddc", {
    "package:dependency_injection/src/heroes/hero_service.dart": src__heroes__hero_service
  }, '{"version":3,"sourceRoot":"","sources":["hero_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAcI,UAAI,iBAAO,mBAAa,IAAG,eAAe;AAC1C,mBAAO,IAAI,CAAC,8BAAqB,IAAI;AACrC,YAAO,oCAAU,QAAM,CAAC,QAAC,IAAI,IAAmB,UAAd,mBAAa,gBAAK,IAAI,SAAS,0BAAQ;IAC3E;;wDANiB,MAAO,EAAO,YAAa;IAA3B,aAAO,GAAP,MAAO;IAAO,mBAAa,GAAb,YAAa;EAAC","file":"hero_service.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_service: src__heroes__hero_service
  };
});

//# sourceMappingURL=hero_service.ddc.js.map
