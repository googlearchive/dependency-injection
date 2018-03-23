define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__user_service = Object.create(_root);
  src__user_service.User = class User extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get isAuthorized() {
      return this[isAuthorized$];
    }
    set isAuthorized(value) {
      super.isAuthorized = value;
    }
  };
  (src__user_service.User.new = function(name, isAuthorized) {
    if (isAuthorized === void 0) isAuthorized = false;
    this[name$] = name;
    this[isAuthorized$] = isAuthorized;
  }).prototype = src__user_service.User.prototype;
  dart.addTypeTests(src__user_service.User);
  const name$ = Symbol("User.name");
  const isAuthorized$ = Symbol("User.isAuthorized");
  dart.setFieldSignature(src__user_service.User, () => ({
    __proto__: dart.getFields(src__user_service.User.__proto__),
    name: dart.finalFieldType(core.String),
    isAuthorized: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(src__user_service, {
    /*src__user_service._alice*/get _alice() {
      return new src__user_service.User.new('Alice', true);
    },
    /*src__user_service._bob*/get _bob() {
      return new src__user_service.User.new('Bob', false);
    }
  });
  src__user_service.UserService = class UserService extends core.Object {
    get user() {
      return this[user];
    }
    set user(value) {
      this[user] = value;
    }
    getNewUser() {
      return this.user = dart.equals(this.user, src__user_service._bob) ? src__user_service._alice : src__user_service._bob;
    }
  };
  (src__user_service.UserService.new = function() {
    this[user] = src__user_service._bob;
  }).prototype = src__user_service.UserService.prototype;
  dart.addTypeTests(src__user_service.UserService);
  const user = Symbol("UserService.user");
  dart.setMethodSignature(src__user_service.UserService, () => ({
    __proto__: dart.getMethods(src__user_service.UserService.__proto__),
    getNewUser: dart.fnType(src__user_service.User, [])
  }));
  dart.setFieldSignature(src__user_service.UserService, () => ({
    __proto__: dart.getFields(src__user_service.UserService.__proto__),
    user: dart.fieldType(src__user_service.User)
  }));
  dart.trackLibraries("packages/dependency_injection/src/user_service.ddc", {
    "package:dependency_injection/src/user_service.dart": src__user_service
  }, '{"version":3,"sourceRoot":"","sources":["user_service.dart"],"names":[],"mappings":";;;;;;;;IAGe;;;;;;IACF;;;;;;;yCAEN,IAAS,EAAG,YAAyB;iCAApB,eAAe;IAA3B,WAAI,GAAJ,IAAI;IAAQ,mBAAY,GAAZ,YAAY;EAAU;;;;;;;;;;MAInC,wBAAM;YAAG,KAAI,0BAAI,CAAC,SAAS;;MAC3B,sBAAI;YAAG,KAAI,0BAAI,CAAC,OAAO;;;;IAI3B;;;;;;;YAKgB,UAAI,eAAG,SAAI,EAAI,sBAAI,IAAG,wBAAM,GAAG,sBAAI;;;;IAHxC,UAAI,GAAG,sBAAI","file":"user_service.ddc.js"}');
  // Exports:
  return {
    src__user_service: src__user_service
  };
});

//# sourceMappingURL=user_service.ddc.js.map
