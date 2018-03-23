define(['dart_sdk', 'packages/angular/src/core/di/opaque_token', 'packages/angular/src/di/providers'], function(dart_sdk, opaque_token, providers) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__di__providers = providers.src__di__providers;
  const _root = Object.create(null);
  const src__app_config = Object.create(_root);
  let VoidToAppConfig = () => (VoidToAppConfig = dart.constFn(dart.fnType(src__app_config.AppConfig, [])))();
  let ProviderOfAppConfig = () => (ProviderOfAppConfig = dart.constFn(src__di__providers.Provider$(src__app_config.AppConfig)))();
  dart.defineLazy(src__app_config, {
    /*src__app_config.appConfigToken*/get appConfigToken() {
      return dart.const(new src__core__di__opaque_token.OpaqueToken.new('app.config'));
    },
    /*src__app_config.heroDiConfig*/get heroDiConfig() {
      return dart.constMap(core.String, core.String, ['apiEndpoint', 'api.heroes.com', 'title', 'Dependency Injection']);
    }
  });
  src__app_config.AppConfig = class AppConfig extends core.Object {
    get apiEndpoint() {
      return this[apiEndpoint];
    }
    set apiEndpoint(value) {
      this[apiEndpoint] = value;
    }
    get title() {
      return this[title];
    }
    set title(value) {
      this[title] = value;
    }
  };
  (src__app_config.AppConfig.new = function() {
    this[apiEndpoint] = null;
    this[title] = null;
  }).prototype = src__app_config.AppConfig.prototype;
  dart.addTypeTests(src__app_config.AppConfig);
  const apiEndpoint = Symbol("AppConfig.apiEndpoint");
  const title = Symbol("AppConfig.title");
  dart.setFieldSignature(src__app_config.AppConfig, () => ({
    __proto__: dart.getFields(src__app_config.AppConfig.__proto__),
    apiEndpoint: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  src__app_config.heroDiConfigFactory = function() {
    let _ = new src__app_config.AppConfig.new();
    _.apiEndpoint = 'api.heroes.com';
    _.title = 'Dependency Injection';
    return _;
  };
  dart.fn(src__app_config.heroDiConfigFactory, VoidToAppConfig());
  dart.defineLazy(src__app_config, {
    /*src__app_config.appConfigProvider*/get appConfigProvider() {
      return dart.const(ProviderOfAppConfig().new(src__app_config.appConfigToken, {useFactory: src__app_config.heroDiConfigFactory, deps: dart.constList([], core.Object)}));
    }
  });
  dart.trackLibraries("packages/dependency_injection/src/app_config.ddc", {
    "package:dependency_injection/src/app_config.dart": src__app_config
  }, '{"version":3,"sourceRoot":"","sources":["app_config.dart"],"names":[],"mappings":";;;;;;;;;;;;MAEM,8BAAc;YAAG,gBAAM,2CAAW,CAAC;;MAE/B,4BAAY;YAAG,0CACvB,eAAe,kBACf,SAAS;;;;IAIF;;;;;;IACA;;;;;;;;IADA,iBAAW;IACX,WAAK;EACd;;;;;;;;;;YAEmC,IAAI,6BAAS;oBAC9B;cACN;;EAAsB;;;MAE5B,iCAAiB;YAAG,YAAM,yBAAmB,CAAC,8BAAc,eAClD,mCAAmB,QAAQ","file":"app_config.ddc.js"}');
  // Exports:
  return {
    src__app_config: src__app_config
  };
});

//# sourceMappingURL=app_config.ddc.js.map
