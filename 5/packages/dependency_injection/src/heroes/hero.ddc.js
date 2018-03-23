define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__heroes__hero = Object.create(_root);
  src__heroes__hero.Hero = class Hero extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isSecret() {
      return this[isSecret$];
    }
    set isSecret(value) {
      super.isSecret = value;
    }
  };
  (src__heroes__hero.Hero.new = function(id, name, isSecret) {
    if (isSecret === void 0) isSecret = false;
    this[id$] = id;
    this[name$] = name;
    this[isSecret$] = isSecret;
  }).prototype = src__heroes__hero.Hero.prototype;
  dart.addTypeTests(src__heroes__hero.Hero);
  const id$ = Symbol("Hero.id");
  const name$ = Symbol("Hero.name");
  const isSecret$ = Symbol("Hero.isSecret");
  dart.setFieldSignature(src__heroes__hero.Hero, () => ({
    __proto__: dart.getFields(src__heroes__hero.Hero.__proto__),
    id: dart.finalFieldType(core.int),
    name: dart.finalFieldType(core.String),
    isSecret: dart.finalFieldType(core.bool)
  }));
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero.ddc", {
    "package:dependency_injection/src/heroes/hero.dart": src__heroes__hero
  }, '{"version":3,"sourceRoot":"","sources":["hero.dart"],"names":[],"mappings":";;;;;;;;IACY;;;;;;IACG;;;;;;IACF;;;;;;;yCAEN,EAAO,EAAE,IAAS,EAAG,QAAqB;6BAAhB,WAAW;IAAhC,SAAE,GAAF,EAAE;IAAO,WAAI,GAAJ,IAAI;IAAQ,eAAQ,GAAR,QAAQ;EAAU","file":"hero.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero: src__heroes__hero
  };
});

//# sourceMappingURL=hero.ddc.js.map
