define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero = hero.src__heroes__hero;
  const _root = Object.create(null);
  const src__heroes__hero_list_component = Object.create(_root);
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__heroes__hero.Hero)))();
  src__heroes__hero_list_component.HeroListComponent = class HeroListComponent extends core.Object {
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      super.heroes = value;
    }
  };
  (src__heroes__hero_list_component.HeroListComponent.new = function(heroService) {
    this[heroes] = heroService.getAll();
  }).prototype = src__heroes__hero_list_component.HeroListComponent.prototype;
  dart.addTypeTests(src__heroes__hero_list_component.HeroListComponent);
  const heroes = Symbol("HeroListComponent.heroes");
  dart.setFieldSignature(src__heroes__hero_list_component.HeroListComponent, () => ({
    __proto__: dart.getFields(src__heroes__hero_list_component.HeroListComponent.__proto__),
    heroes: dart.finalFieldType(ListOfHero())
  }));
  dart.trackLibraries("packages/dependency_injection/src/heroes/hero_list_component.ddc", {
    "package:dependency_injection/src/heroes/hero_list_component.dart": src__heroes__hero_list_component
  }, '{"version":3,"sourceRoot":"","sources":["hero_list_component.dart"],"names":[],"mappings":";;;;;;;;;;IAemB;;;;;;;qEAEC,WAAuB;IAAI,YAAM,GAAG,WAAW,OAAO;EAAE","file":"hero_list_component.ddc.js"}');
  // Exports:
  return {
    src__heroes__hero_list_component: src__heroes__hero_list_component
  };
});

//# sourceMappingURL=hero_list_component.ddc.js.map
