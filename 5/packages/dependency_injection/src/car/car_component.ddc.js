define(['dart_sdk', 'packages/dependency_injection/src/car/car_factory', 'packages/dependency_injection/src/car/car_injector', 'packages/dependency_injection/src/car/car_no_di', 'packages/dependency_injection/src/car/car_creations', 'packages/dependency_injection/src/car/car'], function(dart_sdk, car_factory, car_injector, car_no_di, car_creations, car) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__car__car_factory = car_factory.src__car__car_factory;
  const src__car__car_injector = car_injector.src__car__car_injector;
  const src__car__car_no_di = car_no_di.src__car__car_no_di;
  const src__car__car_creations = car_creations.src__car__car_creations;
  const src__car__car = car.src__car__car;
  const _root = Object.create(null);
  const src__car__car_component = Object.create(_root);
  src__car__car_component.CarComponent = class CarComponent extends core.Object {
    get car() {
      return this[car$];
    }
    set car(value) {
      super.car = value;
    }
    get factoryCar() {
      return this[factoryCar];
    }
    set factoryCar(value) {
      this[factoryCar] = value;
    }
    get injectorCar() {
      return this[injectorCar];
    }
    set injectorCar(value) {
      this[injectorCar] = value;
    }
    get noDiCar() {
      return this[noDiCar];
    }
    set noDiCar(value) {
      this[noDiCar] = value;
    }
    get simpleCar() {
      return this[simpleCar];
    }
    set simpleCar(value) {
      this[simpleCar] = value;
    }
    get superCar() {
      return this[superCar];
    }
    set superCar(value) {
      this[superCar] = value;
    }
    get testCar() {
      return this[testCar];
    }
    set testCar(value) {
      this[testCar] = value;
    }
  };
  (src__car__car_component.CarComponent.new = function(car) {
    this[factoryCar] = new src__car__car_factory.CarFactory.new().createCar();
    this[injectorCar] = src__car__car_injector.useInjector();
    this[noDiCar] = new src__car__car_no_di.Car.new();
    this[simpleCar] = src__car__car_creations.simpleCar();
    this[superCar] = src__car__car_creations.superCar();
    this[testCar] = src__car__car_creations.testCar();
    this[car$] = car;
  }).prototype = src__car__car_component.CarComponent.prototype;
  dart.addTypeTests(src__car__car_component.CarComponent);
  const car$ = Symbol("CarComponent.car");
  const factoryCar = Symbol("CarComponent.factoryCar");
  const injectorCar = Symbol("CarComponent.injectorCar");
  const noDiCar = Symbol("CarComponent.noDiCar");
  const simpleCar = Symbol("CarComponent.simpleCar");
  const superCar = Symbol("CarComponent.superCar");
  const testCar = Symbol("CarComponent.testCar");
  dart.setFieldSignature(src__car__car_component.CarComponent, () => ({
    __proto__: dart.getFields(src__car__car_component.CarComponent.__proto__),
    car: dart.finalFieldType(src__car__car.Car),
    factoryCar: dart.fieldType(src__car__car.Car),
    injectorCar: dart.fieldType(src__car__car.Car),
    noDiCar: dart.fieldType(src__car__car_no_di.Car),
    simpleCar: dart.fieldType(src__car__car.Car),
    superCar: dart.fieldType(src__car__car.Car),
    testCar: dart.fieldType(src__car__car.Car)
  }));
  dart.trackLibraries("packages/dependency_injection/src/car/car_component.ddc", {
    "package:dependency_injection/src/car/car_component.dart": src__car__car_component
  }, '{"version":3,"sourceRoot":"","sources":["car_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;IAqBY;;;;;;IAIN;;;;;;IACA;;;;;;IACQ;;;;;;IACR;;;;;;IACA;;;;;;IACA;;;;;;;uDAPS,GAAQ;IAEjB,gBAAU,GAAG,AAAC,IAAI,oCAAU,YAAa;IACzC,iBAAW,GAAG,kCAAW;IACjB,aAAO,GAAG,IAAI,2BAAW;IACjC,eAAS,GAAG,AAAa,iCAAS;IAClC,cAAQ,GAAG,AAAa,gCAAQ;IAChC,aAAO,GAAG,AAAa,+BAAO;IAPhB,UAAG,GAAH,GAAG;EAAC","file":"car_component.ddc.js"}');
  // Exports:
  return {
    src__car__car_component: src__car__car_component
  };
});

//# sourceMappingURL=car_component.ddc.js.map
