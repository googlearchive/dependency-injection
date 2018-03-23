define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero = hero.src__heroes__hero;
  const _root = Object.create(null);
  const src__heroes__mock_heroes = Object.create(_root);
  const $toList = dartx.toList;
  const $map = dartx.map;
  const $_get = dartx._get;
  let JSArrayOfMap = () => (JSArrayOfMap = dart.constFn(_interceptors.JSArray$(core.Map)))();
  let MapToHero = () => (MapToHero = dart.constFn(dart.fnType(src__heroes__hero.Hero, [core.Map])))();
  dart.defineLazy(src__heroes__mock_heroes, {
    /*src__heroes__mock_heroes.mockHeroes*/get mockHeroes() {
      return JSArrayOfMap().of([new _js_helper.LinkedMap.from(['id', 11, 'isSecret', false, 'name', 'Mr. Nice']), new _js_helper.LinkedMap.from(['id', 12, 'isSecret', false, 'name', 'Narco']), new _js_helper.LinkedMap.from(['id', 13, 'isSecret', false, 'name', 'Bombasto']), new _js_helper.LinkedMap.from(['id', 14, 'isSecret', false, 'name', 'Celeritas']), new _js_helper.LinkedMap.from(['id', 15, 'isSecret', false, 'name', 'Magneta']), new _js_helper.LinkedMap.from(['id', 16, 'isSecret', false, 'name', 'RubberMan']), new _js_helper.LinkedMap.from(['id', 17, 'isSecret', false, 'name', 'Dynama']), new _js_helper.LinkedMap.from(['id', 18, 'isSecret', true, 'name', 'Dr IQ']), new _js_helper.LinkedMap.from(['id', 19, 'isSecret', true, 'name', 'Magma']), new _js_helper.LinkedMap.from(['id', 20, 'isSecret', true, 'name', 'Tornado'])])[$map](src__heroes__hero.Hero, src__heroes__mock_heroes._initHero)[$toList]();
    },
    set mockHeroes(_) {}
  });
  src__heroes__mock_heroes._initHero = function(heroProperties) {
    return new src__heroes__hero.Hero.new(core.int._check(heroProperties[$_get]('id')), core.String._check(heroProperties[$_get]('name')), core.bool._check(heroProperties[$_get]('isSecret')));
  };
  dart.fn(src__heroes__mock_heroes._initHero, MapToHero());
  dart.trackLibraries("packages/dependency_injection/src/heroes/mock_heroes.ddc", {
    "package:dependency_injection/src/heroes/mock_heroes.dart": src__heroes__mock_heroes
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;MAEW,mCAAU;YAAG,oBACtB,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,cACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,WACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,cACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,eACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,aACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,eACtC,+BAAC,MAAM,IAAI,YAAY,OAAO,QAAQ,YACtC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ,WACrC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ,WACrC,+BAAC,MAAM,IAAI,YAAY,MAAM,QAAQ,mBAClC,yBAAC,kCAAS,UAAQ;;;;gDAER,cAAkB;UAAK,KAAI,0BAAI,iBAC1C,cAAc,QAAC,2BAAO,cAAc,QAAC,2BAAS,cAAc,QAAC;EAAY","file":"mock_heroes.ddc.js"}');
  // Exports:
  return {
    src__heroes__mock_heroes: src__heroes__mock_heroes
  };
});

//# sourceMappingURL=mock_heroes.ddc.js.map
