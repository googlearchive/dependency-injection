define(['dart_sdk', 'packages/dependency_injection/src/car/car'], function(dart_sdk, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car = car.src__car__car;
  const _root = Object.create(null);
  const src__car__car_no_di = Object.create(_root);
  src__car__car_no_di.Car = class Car extends core.Object {
    get engine() {
      return this[engine];
    }
    set engine(value) {
      this[engine] = value;
    }
    get tires() {
      return this[tires];
    }
    set tires(value) {
      this[tires] = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      this[description] = value;
    }
    drive() {
      return dart.str`${this.description} car with ` + dart.str`${this.engine.cylinders} cylinders and ` + dart.str`${this.tires.make} tires.`;
    }
  };
  (src__car__car_no_di.Car.new = function() {
    this[engine] = null;
    this[tires] = null;
    this[description] = 'No DI';
    this.engine = new src__car__car.Engine.new();
    this.tires = new src__car__car.Tires.new();
  }).prototype = src__car__car_no_di.Car.prototype;
  dart.addTypeTests(src__car__car_no_di.Car);
  const engine = Symbol("Car.engine");
  const tires = Symbol("Car.tires");
  const description = Symbol("Car.description");
  dart.setMethodSignature(src__car__car_no_di.Car, () => ({
    __proto__: dart.getMethods(src__car__car_no_di.Car.__proto__),
    drive: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__car__car_no_di.Car, () => ({
    __proto__: dart.getFields(src__car__car_no_di.Car.__proto__),
    engine: dart.fieldType(src__car__car.Engine),
    tires: dart.fieldType(src__car__car.Tires),
    description: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/dependency_injection/src/car/car_no_di.ddc", {
    "package:dependency_injection/src/car/car_no_di.dart": src__car__car_no_di
  }, '{"version":3,"sourceRoot":"","sources":["car_no_di.dart"],"names":[],"mappings":";;;;;;;;;IAKS;;;;;;IACD;;;;;;IACF;;;;;;;YAQc,YAAE,gBAAW,eAC3B,WAAG,WAAM,UAAU,oBACnB,WAAG,UAAK,KAAK;IAAS;;;IAZnB,YAAM;IACP,WAAK;IACP,iBAAW,GAAG;AAGhB,eAAM,GAAG,IAAI,wBAAM;AACnB,cAAK,GAAG,IAAI,uBAAK;EACnB","file":"car_no_di.ddc.js"}');
  // Exports:
  return {
    src__car__car_no_di: src__car__car_no_di
  };
});

//# sourceMappingURL=car_no_di.ddc.js.map
