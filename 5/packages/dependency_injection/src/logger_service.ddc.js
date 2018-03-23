define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__logger_service = Object.create(_root);
  const $add = dartx.add;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  const _logs = Symbol('_logs');
  src__logger_service.Logger = class Logger extends core.Object {
    get logs() {
      return this[_logs];
    }
    log(message) {
      this[_logs][$add](message);
      core.print(message);
    }
  };
  (src__logger_service.Logger.new = function() {
    this[_logs] = JSArrayOfString().of([]);
  }).prototype = src__logger_service.Logger.prototype;
  dart.addTypeTests(src__logger_service.Logger);
  dart.setMethodSignature(src__logger_service.Logger, () => ({
    __proto__: dart.getMethods(src__logger_service.Logger.__proto__),
    log: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__logger_service.Logger, () => ({
    __proto__: dart.getGetters(src__logger_service.Logger.__proto__),
    logs: dart.fnType(core.List$(core.String), [])
  }));
  dart.setFieldSignature(src__logger_service.Logger, () => ({
    __proto__: dart.getFields(src__logger_service.Logger.__proto__),
    [_logs]: dart.fieldType(ListOfString())
  }));
  dart.trackLibraries("packages/dependency_injection/src/logger_service.ddc", {
    "package:dependency_injection/src/logger_service.dart": src__logger_service
  }, '{"version":3,"sourceRoot":"","sources":["logger_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;YAK2B,YAAK;;QAErB,OAAc;AACrB,iBAAK,MAAI,CAAC,OAAO;AACjB,gBAAK,CAAC,OAAO;IACf;;;IANa,WAAK,GAAG;EAOvB","file":"logger_service.ddc.js"}');
  // Exports:
  return {
    src__logger_service: src__logger_service
  };
});

//# sourceMappingURL=logger_service.ddc.js.map
