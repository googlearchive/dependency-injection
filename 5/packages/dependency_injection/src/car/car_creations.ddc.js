define(['dart_sdk', 'packages/dependency_injection/src/car/car'], function(dart_sdk, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car = car.src__car__car;
  const _root = Object.create(null);
  const src__car__car_creations = Object.create(_root);
  let VoidToCar = () => (VoidToCar = dart.constFn(dart.fnType(src__car__car.Car, [])))();
  src__car__car_creations.simpleCar = function() {
    let _ = new src__car__car.Car.new(new src__car__car.Engine.new(), new src__car__car.Tires.new());
    _.description = 'Simple';
    return _;
  };
  dart.fn(src__car__car_creations.simpleCar, VoidToCar());
  src__car__car_creations.Engine2 = class Engine2 extends src__car__car.Engine {};
  (src__car__car_creations.Engine2.new = function(cylinders) {
    src__car__car_creations.Engine2.__proto__.withCylinders.call(this, core.int._check(cylinders));
  }).prototype = src__car__car_creations.Engine2.prototype;
  dart.addTypeTests(src__car__car_creations.Engine2);
  src__car__car_creations.superCar = function() {
    let _ = new src__car__car.Car.new(new src__car__car_creations.Engine2.new(12), new src__car__car.Tires.new());
    _.description = 'Super';
    return _;
  };
  dart.fn(src__car__car_creations.superCar, VoidToCar());
  src__car__car_creations.MockEngine = class MockEngine extends src__car__car.Engine {};
  (src__car__car_creations.MockEngine.new = function() {
    src__car__car_creations.MockEngine.__proto__.withCylinders.call(this, 8);
  }).prototype = src__car__car_creations.MockEngine.prototype;
  dart.addTypeTests(src__car__car_creations.MockEngine);
  src__car__car_creations.MockTires = class MockTires extends src__car__car.Tires {};
  (src__car__car_creations.MockTires.new = function() {
    src__car__car_creations.MockTires.__proto__.new.call(this);
    this.make = 'YokoGoodStone';
  }).prototype = src__car__car_creations.MockTires.prototype;
  dart.addTypeTests(src__car__car_creations.MockTires);
  src__car__car_creations.testCar = function() {
    let _ = new src__car__car.Car.new(new src__car__car_creations.MockEngine.new(), new src__car__car_creations.MockTires.new());
    _.description = 'Test';
    return _;
  };
  dart.fn(src__car__car_creations.testCar, VoidToCar());
  dart.trackLibraries("packages/dependency_injection/src/car/car_creations.ddc", {
    "package:dependency_injection/src/car/car_creations.dart": src__car__car_creations
  }, '{"version":3,"sourceRoot":"","sources":["car_creations.dart"],"names":[],"mappings":";;;;;;;;;;YAMI,IAAI,qBAAG,CAAC,IAAI,wBAAM,IAAI,IAAI,uBAAK;oBAAmB;;EAAQ;;;kDAKpD,SAAS;AAAI,uFAAoB,SAAS;EAAC;;;YAKjD,IAAI,qBAAG,CAAC,IAAI,mCAAO,CAAC,KAAK,IAAI,uBAAK;oBAAmB;;EAAO;;;;AAK/C,0EAAoB;EAAE;;;;;AAKnC,aAAI,GAAG;EACT;;;YAKE,IAAI,qBAAG,CAAC,IAAI,sCAAU,IAAI,IAAI,qCAAS;oBAAmB;;EAAM","file":"car_creations.ddc.js"}');
  // Exports:
  return {
    src__car__car_creations: src__car__car_creations
  };
});

//# sourceMappingURL=car_creations.ddc.js.map
