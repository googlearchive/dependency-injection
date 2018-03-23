define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__car__car = Object.create(_root);
  src__car__car.Engine = class Engine extends core.Object {
    get cylinders() {
      return this[cylinders$];
    }
    set cylinders(value) {
      super.cylinders = value;
    }
  };
  (src__car__car.Engine.new = function() {
    this[cylinders$] = 4;
  }).prototype = src__car__car.Engine.prototype;
  (src__car__car.Engine.withCylinders = function(cylinders) {
    this[cylinders$] = cylinders;
  }).prototype = src__car__car.Engine.prototype;
  dart.addTypeTests(src__car__car.Engine);
  const cylinders$ = Symbol("Engine.cylinders");
  dart.setFieldSignature(src__car__car.Engine, () => ({
    __proto__: dart.getFields(src__car__car.Engine.__proto__),
    cylinders: dart.finalFieldType(core.int)
  }));
  src__car__car.Tires = class Tires extends core.Object {
    get make() {
      return this[make];
    }
    set make(value) {
      this[make] = value;
    }
    get model() {
      return this[model];
    }
    set model(value) {
      this[model] = value;
    }
  };
  (src__car__car.Tires.new = function() {
    this[make] = 'Flintstone';
    this[model] = 'Square';
  }).prototype = src__car__car.Tires.prototype;
  dart.addTypeTests(src__car__car.Tires);
  const make = Symbol("Tires.make");
  const model = Symbol("Tires.model");
  dart.setFieldSignature(src__car__car.Tires, () => ({
    __proto__: dart.getFields(src__car__car.Tires.__proto__),
    make: dart.fieldType(core.String),
    model: dart.fieldType(core.String)
  }));
  src__car__car.Car = class Car extends core.Object {
    get engine() {
      return this[engine$];
    }
    set engine(value) {
      super.engine = value;
    }
    get tires() {
      return this[tires$];
    }
    set tires(value) {
      super.tires = value;
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
  (src__car__car.Car.new = function(engine, tires) {
    this[description] = 'DI';
    this[engine$] = engine;
    this[tires$] = tires;
  }).prototype = src__car__car.Car.prototype;
  dart.addTypeTests(src__car__car.Car);
  const engine$ = Symbol("Car.engine");
  const tires$ = Symbol("Car.tires");
  const description = Symbol("Car.description");
  dart.setMethodSignature(src__car__car.Car, () => ({
    __proto__: dart.getMethods(src__car__car.Car.__proto__),
    drive: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__car__car.Car, () => ({
    __proto__: dart.getFields(src__car__car.Car.__proto__),
    engine: dart.finalFieldType(src__car__car.Engine),
    tires: dart.finalFieldType(src__car__car.Tires),
    description: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/dependency_injection/src/car/car.ddc", {
    "package:dependency_injection/src/car/car.dart": src__car__car
  }, '{"version":3,"sourceRoot":"","sources":["car.dart"],"names":[],"mappings":";;;;;;;;IAIY;;;;;;;;IAEC,gBAAS,GAAG;EAAC;iDACH,SAAc;IAAT,gBAAS,GAAT,SAAS;EAAC;;;;;;;;IAK7B;;;;;;IACA;;;;;;;;IADA,UAAI,GAAG;IACP,WAAK,GAAG;EACjB;;;;;;;;;;IAIe;;;;;;IACD;;;;;;IACL;;;;;;;YAKW,YAAE,gBAAW,eAC3B,WAAG,WAAM,UAAU,oBACnB,WAAG,UAAK,KAAK;IAAS;;oCALtB,MAAW,EAAE,KAAU;IAFpB,iBAAW,GAAG;IAEZ,aAAM,GAAN,MAAM;IAAO,YAAK,GAAL,KAAK;EAAC","file":"car.ddc.js"}');
  // Exports:
  return {
    src__car__car: src__car__car
  };
});

//# sourceMappingURL=car.ddc.js.map
