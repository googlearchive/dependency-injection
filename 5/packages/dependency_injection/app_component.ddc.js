define(['dart_sdk', 'packages/dependency_injection/src/user_service'], function(dart_sdk, user_service) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__user_service = user_service.src__user_service;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  const _userService = Symbol('_userService');
  app_component.AppComponent = class AppComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get isAuthorized() {
      return this.user.isAuthorized;
    }
    nextUser() {
      this[_userService].getNewUser();
    }
    get user() {
      return this[_userService].user;
    }
    get userInfo() {
      return dart.str`Current user, ${this.user.name}, is` + (dart.test(this.isAuthorized) ? '' : ' not') + ' authorized. ';
    }
  };
  (app_component.AppComponent.new = function(config, userService) {
    this[_userService] = userService;
    this[title] = config.title;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const title = Symbol("AppComponent.title");
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    nextUser: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(app_component.AppComponent, () => ({
    __proto__: dart.getGetters(app_component.AppComponent.__proto__),
    isAuthorized: dart.fnType(core.bool, []),
    user: dart.fnType(src__user_service.User, []),
    userInfo: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    [_userService]: dart.finalFieldType(src__user_service.UserService),
    title: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/dependency_injection/app_component.ddc", {
    "package:dependency_injection/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;IA2Ce;;;;;;;AAMX,YAAO,UAAI,aAAa;IAC1B;;AAGE,wBAAY,WAAW;IACzB;;AAGE,YAAO,mBAAY,KAAK;IAC1B;;YAGI,AAAiC,AACJ,0BADZ,SAAI,KAAK,oBACzB,iBAAY,IAAG,KAAK,UACrB;IAAe;;6CAlBN,MAAwC,EAAO,WAAY;IAAZ,kBAAY,GAAZ,WAAY;IAClE,WAAK,GAAG,MAAM,MAAM","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
