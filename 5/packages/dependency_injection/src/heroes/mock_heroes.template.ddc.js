define(['dart_sdk', 'packages/dependency_injection/src/heroes/hero.template'], function(dart_sdk, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__heroes__hero$46template = hero.src__heroes__hero$46template;
  const _root = Object.create(null);
  const src__heroes__mock_heroes$46template = Object.create(_root);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__heroes__mock_heroes$46template, {
    /*src__heroes__mock_heroes$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__heroes__mock_heroes$46template.initReflector = function() {
    if (dart.test(src__heroes__mock_heroes$46template._visited)) {
      return;
    }
    src__heroes__mock_heroes$46template._visited = true;
    src__heroes__hero$46template.initReflector();
  };
  dart.fn(src__heroes__mock_heroes$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/dependency_injection/src/heroes/mock_heroes.template.ddc", {
    "package:dependency_injection/src/heroes/mock_heroes.template.dart": src__heroes__mock_heroes$46template
  }, '{"version":3,"sourceRoot":"","sources":["mock_heroes.template.dart"],"names":[],"mappings":";;;;;;;;;;MAUI,4CAAQ;YAAG;;;;;AAEb,kBAAI,4CAAQ,GAAE;AACZ;;AAEF,mDAAW;AAEX,IAAM,0CAAa;EACrB","file":"mock_heroes.template.ddc.js"}');
  // Exports:
  return {
    src__heroes__mock_heroes$46template: src__heroes__mock_heroes$46template
  };
});

//# sourceMappingURL=mock_heroes.template.ddc.js.map
