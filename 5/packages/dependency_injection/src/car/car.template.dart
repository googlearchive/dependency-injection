// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'car.dart';
export 'car.dart';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerFactory(
    Engine,
    () => new Engine(),
  );

  _ngRef.registerFactory(
    Tires,
    () => new Tires(),
  );

  _ngRef.registerFactory(
    Car,
    (Engine p0, Tires p1) => new Car(p0, p1),
  );
  _ngRef.registerDependencies(
    Car,
    const [
      const [
        Engine,
      ],
      const [
        Tires,
      ],
    ],
  );
}
