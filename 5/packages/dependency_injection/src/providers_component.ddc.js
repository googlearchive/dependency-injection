define(['dart_sdk', 'packages/dependency_injection/src/logger_service', 'packages/dependency_injection/src/user_service', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, logger_service, user_service, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__logger_service = logger_service.src__logger_service;
  const src__user_service = user_service.src__user_service;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__providers_component = Object.create(_root);
  const $_get = dartx._get;
  const $isEmpty = dartx.isEmpty;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  dart.defineLazy(src__providers_component, {
    /*src__providers_component.template*/get template() {
      return '{{log}}';
    }
  });
  src__providers_component.Provider1Component = class Provider1Component extends core.Object {
    get log() {
      return this[log];
    }
    set log(value) {
      this[log] = value;
    }
  };
  (src__providers_component.Provider1Component.new = function(logger) {
    this[log] = null;
    logger.log('Hello from logger provided with Logger class');
    this.log = logger.logs[$_get](0);
  }).prototype = src__providers_component.Provider1Component.prototype;
  dart.addTypeTests(src__providers_component.Provider1Component);
  const log = Symbol("Provider1Component.log");
  dart.setFieldSignature(src__providers_component.Provider1Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider1Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.Provider3Component = class Provider3Component extends core.Object {
    get log() {
      return this[log$];
    }
    set log(value) {
      this[log$] = value;
    }
  };
  (src__providers_component.Provider3Component.new = function(logger) {
    this[log$] = null;
    logger.log('Hello from logger provided with useClass:Logger');
    this.log = logger.logs[$_get](0);
  }).prototype = src__providers_component.Provider3Component.prototype;
  dart.addTypeTests(src__providers_component.Provider3Component);
  const log$ = Symbol("Provider3Component.log");
  dart.setFieldSignature(src__providers_component.Provider3Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider3Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.BetterLogger = class BetterLogger extends src__logger_service.Logger {};
  (src__providers_component.BetterLogger.new = function() {
    src__providers_component.BetterLogger.__proto__.new.call(this);
  }).prototype = src__providers_component.BetterLogger.prototype;
  dart.addTypeTests(src__providers_component.BetterLogger);
  src__providers_component.Provider4Component = class Provider4Component extends core.Object {
    get log() {
      return this[log$0];
    }
    set log(value) {
      this[log$0] = value;
    }
  };
  (src__providers_component.Provider4Component.new = function(logger) {
    this[log$0] = null;
    logger.log('Hello from logger provided with useClass:BetterLogger');
    this.log = logger.logs[$_get](0);
  }).prototype = src__providers_component.Provider4Component.prototype;
  dart.addTypeTests(src__providers_component.Provider4Component);
  const log$0 = Symbol("Provider4Component.log");
  dart.setFieldSignature(src__providers_component.Provider4Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider4Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  const _userService = Symbol('_userService');
  src__providers_component.EvenBetterLogger = class EvenBetterLogger extends src__logger_service.Logger {
    log(message) {
      let name = this[_userService].user.name;
      super.log(dart.str`Message to ${name}: ${message}`);
    }
  };
  (src__providers_component.EvenBetterLogger.new = function(userService) {
    this[_userService] = userService;
    src__providers_component.EvenBetterLogger.__proto__.new.call(this);
  }).prototype = src__providers_component.EvenBetterLogger.prototype;
  dart.addTypeTests(src__providers_component.EvenBetterLogger);
  dart.setFieldSignature(src__providers_component.EvenBetterLogger, () => ({
    __proto__: dart.getFields(src__providers_component.EvenBetterLogger.__proto__),
    [_userService]: dart.finalFieldType(src__user_service.UserService)
  }));
  src__providers_component.Provider5Component = class Provider5Component extends core.Object {
    get log() {
      return this[log$1];
    }
    set log(value) {
      this[log$1] = value;
    }
  };
  (src__providers_component.Provider5Component.new = function(logger) {
    this[log$1] = null;
    logger.log('Hello from EvenBetterlogger');
    this.log = logger.logs[$_get](0);
  }).prototype = src__providers_component.Provider5Component.prototype;
  dart.addTypeTests(src__providers_component.Provider5Component);
  const log$1 = Symbol("Provider5Component.log");
  dart.setFieldSignature(src__providers_component.Provider5Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider5Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.NewLogger = class NewLogger extends src__logger_service.Logger {};
  (src__providers_component.NewLogger.new = function() {
    src__providers_component.NewLogger.__proto__.new.call(this);
  }).prototype = src__providers_component.NewLogger.prototype;
  dart.addTypeTests(src__providers_component.NewLogger);
  src__providers_component.NewLogger[dart.implements] = () => [src__providers_component.OldLogger];
  src__providers_component.OldLogger = class OldLogger extends src__logger_service.Logger {
    log(message) {
      dart.throw(core.Exception.new('Should not call the old logger!'));
    }
  };
  (src__providers_component.OldLogger.new = function() {
    src__providers_component.OldLogger.__proto__.new.call(this);
  }).prototype = src__providers_component.OldLogger.prototype;
  dart.addTypeTests(src__providers_component.OldLogger);
  src__providers_component.Provider6aComponent = class Provider6aComponent extends core.Object {
    get log() {
      return this[log$2];
    }
    set log(value) {
      this[log$2] = value;
    }
  };
  (src__providers_component.Provider6aComponent.new = function(newLogger, oldLogger) {
    this[log$2] = null;
    if (dart.equals(newLogger, oldLogger)) {
      dart.throw(core.Exception.new('expected the two loggers to be different instances'));
    }
    oldLogger.log('Hello OldLogger (but we want NewLogger)');
    this.log = dart.test(newLogger.logs[$isEmpty]) ? oldLogger.logs[$_get](0) : newLogger.logs[$_get](0);
  }).prototype = src__providers_component.Provider6aComponent.prototype;
  dart.addTypeTests(src__providers_component.Provider6aComponent);
  const log$2 = Symbol("Provider6aComponent.log");
  dart.setFieldSignature(src__providers_component.Provider6aComponent, () => ({
    __proto__: dart.getFields(src__providers_component.Provider6aComponent.__proto__),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.Provider6bComponent = class Provider6bComponent extends core.Object {
    get log() {
      return this[log$3];
    }
    set log(value) {
      this[log$3] = value;
    }
  };
  (src__providers_component.Provider6bComponent.new = function(newLogger, oldLogger) {
    this[log$3] = null;
    if (!dart.equals(newLogger, oldLogger)) {
      dart.throw(core.Exception.new('expected the two loggers to be the same instance'));
    }
    oldLogger.log('Hello from NewLogger (via aliased OldLogger)');
    this.log = newLogger.logs[$_get](0);
  }).prototype = src__providers_component.Provider6bComponent.prototype;
  dart.addTypeTests(src__providers_component.Provider6bComponent);
  const log$3 = Symbol("Provider6bComponent.log");
  dart.setFieldSignature(src__providers_component.Provider6bComponent, () => ({
    __proto__: dart.getFields(src__providers_component.Provider6bComponent.__proto__),
    log: dart.fieldType(core.String)
  }));
  let const$;
  src__providers_component.SilentLogger = class SilentLogger extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      super.logs = value;
    }
    log(message) {}
  };
  (src__providers_component.SilentLogger.new = function() {
    this[logs] = const$ || (const$ = dart.constList(['Silent logger says "Shhhhh!". Provided via "useValue"'], core.String));
  }).prototype = src__providers_component.SilentLogger.prototype;
  dart.addTypeTests(src__providers_component.SilentLogger);
  const logs = Symbol("SilentLogger.logs");
  src__providers_component.SilentLogger[dart.implements] = () => [src__logger_service.Logger];
  dart.setMethodSignature(src__providers_component.SilentLogger, () => ({
    __proto__: dart.getMethods(src__providers_component.SilentLogger.__proto__),
    log: dart.fnType(dart.void, [core.String])
  }));
  dart.setFieldSignature(src__providers_component.SilentLogger, () => ({
    __proto__: dart.getFields(src__providers_component.SilentLogger.__proto__),
    logs: dart.finalFieldType(ListOfString())
  }));
  dart.defineLazy(src__providers_component, {
    /*src__providers_component.silentLogger*/get silentLogger() {
      return dart.const(new src__providers_component.SilentLogger.new());
    }
  });
  src__providers_component.Provider7Component = class Provider7Component extends core.Object {
    get log() {
      return this[log$4];
    }
    set log(value) {
      this[log$4] = value;
    }
  };
  (src__providers_component.Provider7Component.new = function(logger) {
    this[log$4] = null;
    logger.log('Hello from logger provided with useValue');
    this.log = logger.logs[$_get](0);
  }).prototype = src__providers_component.Provider7Component.prototype;
  dart.addTypeTests(src__providers_component.Provider7Component);
  const log$4 = Symbol("Provider7Component.log");
  dart.setFieldSignature(src__providers_component.Provider7Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider7Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.Provider8Component = class Provider8Component extends core.Object {
    get log() {
      return this[log$5];
    }
    set log(value) {
      this[log$5] = value;
    }
  };
  (src__providers_component.Provider8Component.new = function(heroService) {
    this[log$5] = 'Hero service injected successfully via heroServiceProvider';
  }).prototype = src__providers_component.Provider8Component.prototype;
  dart.addTypeTests(src__providers_component.Provider8Component);
  const log$5 = Symbol("Provider8Component.log");
  dart.setFieldSignature(src__providers_component.Provider8Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider8Component.__proto__),
    log: dart.fieldType(core.String)
  }));
  const _config = Symbol('_config');
  src__providers_component.Provider9Component = class Provider9Component extends core.Object {
    get log() {
      return this[log$6];
    }
    set log(value) {
      this[log$6] = value;
    }
    ngOnInit() {
      this.log = dart.str`AppConfig Application title is ${this[_config][$_get]('title')}`;
    }
  };
  (src__providers_component.Provider9Component.new = function(config) {
    this[log$6] = null;
    this[_config] = config;
  }).prototype = src__providers_component.Provider9Component.prototype;
  dart.addTypeTests(src__providers_component.Provider9Component);
  const log$6 = Symbol("Provider9Component.log");
  src__providers_component.Provider9Component[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__providers_component.Provider9Component, () => ({
    __proto__: dart.getMethods(src__providers_component.Provider9Component.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__providers_component.Provider9Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider9Component.__proto__),
    [_config]: dart.fieldType(core.Map),
    log: dart.fieldType(core.String)
  }));
  const _logger = Symbol('_logger');
  src__providers_component.Provider10Component = class Provider10Component extends core.Object {
    get log() {
      return this[log$7];
    }
    set log(value) {
      this[log$7] = value;
    }
    ngOnInit() {
      this.log = this[_logger] == null ? 'Optional logger was not available' : this[_logger].logs[$_get](0);
    }
  };
  (src__providers_component.Provider10Component.new = function(logger) {
    this[log$7] = null;
    this[_logger] = logger;
    let someMessage = 'Hello from the injected logger';
    this[_logger] == null ? null : this[_logger].log(someMessage);
  }).prototype = src__providers_component.Provider10Component.prototype;
  dart.addTypeTests(src__providers_component.Provider10Component);
  const log$7 = Symbol("Provider10Component.log");
  src__providers_component.Provider10Component[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__providers_component.Provider10Component, () => ({
    __proto__: dart.getMethods(src__providers_component.Provider10Component.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__providers_component.Provider10Component, () => ({
    __proto__: dart.getFields(src__providers_component.Provider10Component.__proto__),
    [_logger]: dart.finalFieldType(src__logger_service.Logger),
    log: dart.fieldType(core.String)
  }));
  src__providers_component.ProvidersComponent = class ProvidersComponent extends core.Object {};
  (src__providers_component.ProvidersComponent.new = function() {
  }).prototype = src__providers_component.ProvidersComponent.prototype;
  dart.addTypeTests(src__providers_component.ProvidersComponent);
  dart.trackLibraries("packages/dependency_injection/src/providers_component.ddc", {
    "package:dependency_injection/src/providers_component.dart": src__providers_component
  }, '{"version":3,"sourceRoot":"","sources":["providers_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAUM,iCAAQ;YAAG;;;;IAIR;;;;;;;8DAEY,MAAa;IAFzB,SAAG;AAGR,UAAM,IAAI,CAAC;AACX,YAAG,GAAG,MAAM,KAAK,QAAC;EACpB;;;;;;;;IASO;;;;;;;8DAEY,MAAa;IAFzB,UAAG;AAGR,UAAM,IAAI,CAAC;AACX,YAAG,GAAG,MAAM,KAAK,QAAC;EACpB;;;;;;;;;;EAIiC;;;IAO1B;;;;;;;8DAEY,MAAa;IAFzB,WAAG;AAGR,UAAM,IAAI,CAAC;AACX,YAAG,GAAG,MAAM,KAAK,QAAC;EACpB;;;;;;;;;QAUS,OAAc;AACrB,UAAI,OAAO,kBAAY,KAAK,KAAK;AACjC,eAAS,CAAC,sBAAa,IAAI,KAAG,OAAO;IACvC;;4DANsB,WAAY;IAAZ,kBAAY,GAAZ,WAAY;;EAAC;;;;;;;IAc5B;;;;;;;8DAEY,MAAa;IAFzB,WAAG;AAGR,UAAM,IAAI,CAAC;AACX,YAAG,GAAG,MAAM,KAAK,QAAC;EACpB;;;;;;;;;;EAImD;;;;QAI1C,OAAc;AACrB,iBAAM,AAAI,kBAAS,CAAC;IACtB;;;;EACF;;;IAQS;;;;;;;+DAEa,SAAmB,EAAE,SAAmB;IAFrD,WAAG;AAGR,oBAAI,SAAS,EAAI,SAAS,GAAE;AAC1B,iBAAM,AAAI,kBAAS,CAAC;;AAEtB,aAAS,IAAI,CAAC;AAGd,YAAG,aAAG,SAAS,KAAK,UAAQ,IAAG,SAAS,KAAK,QAAC,KAAK,SAAS,KAAK,QAAC;EACpE;;;;;;;;IASO;;;;;;;+DAEa,SAAmB,EAAE,SAAmB;IAFrD,WAAG;AAGR,qBAAI,SAAS,EAAI,SAAS,GAAE;AAC1B,iBAAM,AAAI,kBAAS,CAAC;;AAEtB,aAAS,IAAI,CAAC;AACd,YAAG,GAAG,SAAS,KAAK,QAAC;EACvB;;;;;;;;;IAKmB;;;;;;QAOV,OAAc,GAAG;;;IAPP,UAAI,GAAG,oCACxB;EAGkB;;;;;;;;;;;;;MAMhB,qCAAY;YAAG,gBAAM,yCAAY;;;;IAO9B;;;;;;;8DAEY,MAAa;IAFzB,WAAG;AAGR,UAAM,IAAI,CAAC;AACX,YAAG,GAAG,MAAM,KAAK,QAAC;EACpB;;;;;;;;IASI;;;;;;;8DAEe,WAAuB;IAFtC,WAAG,GAAG;EAEiC;;;;;;;;;IASpC;;;;;;;AAML,cAAG,GAAG,0CAAkC,aAAO,QAAC;IAClD;;8DALgD,MAAO;IAFhD,WAAG;IAEsC,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;;;;IAgBjD;;;;;;;AAYL,cAAG,GACC,aAAO,IAAI,OAAO,sCAAsC,aAAO,KAAK,QAAC;IAC3E;;+DATqC,MAAO;IALrC,WAAG;IAK2B,aAAO,GAAP,MAAO;AAC1C,QAAM,cAAc;AACpB,iBAAO,kBAAP,aAAO,IAAK,CAAC,WAAW;EAC1B;;;;;;;;;;;;;;;EAgCwB","file":"providers_component.ddc.js"}');
  // Exports:
  return {
    src__providers_component: src__providers_component
  };
});

//# sourceMappingURL=providers_component.ddc.js.map
