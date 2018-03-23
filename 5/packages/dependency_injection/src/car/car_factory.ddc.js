define(['dart_sdk', 'packages/dependency_injection/src/car/car'], function(dart_sdk, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car = car.src__car__car;
  const _root = Object.create(null);
  const src__car__car_factory = Object.create(_root);
  src__car__car_factory.CarFactory = class CarFactory extends core.Object {
    createCar() {
      let _ = new src__car__car.Car.new(this.createEngine(), this.createTires());
      _.description = 'Factory';
      return _;
    }
    createEngine() {
      return new src__car__car.Engine.new();
    }
    createTires() {
      return new src__car__car.Tires.new();
    }
  };
  (src__car__car_factory.CarFactory.new = function() {
  }).prototype = src__car__car_factory.CarFactory.prototype;
  dart.addTypeTests(src__car__car_factory.CarFactory);
  dart.setMethodSignature(src__car__car_factory.CarFactory, () => ({
    __proto__: dart.getMethods(src__car__car_factory.CarFactory.__proto__),
    createCar: dart.fnType(src__car__car.Car, []),
    createEngine: dart.fnType(src__car__car.Engine, []),
    createTires: dart.fnType(src__car__car.Tires, [])
  }));
  dart.trackLibraries("packages/dependency_injection/src/car/car_factory.ddc", {
    "package:dependency_injection/src/car/car_factory.dart": src__car__car_factory
  }, '{"version":3,"sourceRoot":"","sources":["car_factory.dart"],"names":[],"mappings":";;;;;;;;;;cAKM,IAAI,qBAAG,CAAC,iBAAY,IAAI,gBAAW;sBAAmB;;IAAS;;YAE1C,KAAI,wBAAM;IAAE;;YACd,KAAI,uBAAK;IAAE;;;EACpC","file":"car_factory.ddc.js"}');
  // Exports:
  return {
    src__car__car_factory: src__car__car_factory
  };
});

//# sourceMappingURL=car_factory.ddc.js.map
