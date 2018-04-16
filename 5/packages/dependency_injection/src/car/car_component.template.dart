// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'car_component.dart';
export 'car_component.dart';
import 'package:angular/angular.dart';
import 'car.dart';
import 'car_creations.dart' as carCreations;
import 'car_factory.dart';
import 'car_injector.dart';
import 'car_no_di.dart' as carNoDi;
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'car.template.dart' as _ref0;
import 'car_creations.template.dart' as _ref1;
import 'car_factory.template.dart' as _ref2;
import 'car_injector.template.dart' as _ref3;
import 'car_no_di.template.dart' as _ref4;
import 'package:angular/angular.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'car_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';
import 'car.dart' as import8;

const List<dynamic> styles$CarComponent = const [];

class ViewCarComponent0 extends AppView<import1.CarComponent> {
  import2.Element _el_0;
  import2.DivElement _el_2;
  import2.Text _text_3;
  import2.DivElement _el_4;
  import2.Text _text_5;
  import2.DivElement _el_6;
  import2.Text _text_7;
  import2.DivElement _el_8;
  import2.Text _text_9;
  import2.DivElement _el_10;
  import2.Text _text_11;
  import2.DivElement _el_12;
  import2.Text _text_13;
  import2.DivElement _el_14;
  import2.Text _text_15;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  static RenderComponentType _renderType;
  ViewCarComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-car');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$CarComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.CarComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Cars');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_2, 'id', 'di');
    _text_3 = new import2.Text('');
    _el_2.append(_text_3);
    _el_4 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_4, 'id', 'nodi');
    _text_5 = new import2.Text('');
    _el_4.append(_text_5);
    _el_6 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_6, 'id', 'injector');
    _text_7 = new import2.Text('');
    _el_6.append(_text_7);
    _el_8 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_8, 'id', 'factory');
    _text_9 = new import2.Text('');
    _el_8.append(_text_9);
    _el_10 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_10, 'id', 'simple');
    _text_11 = new import2.Text('');
    _el_10.append(_text_11);
    _el_12 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_12, 'id', 'super');
    _text_13 = new import2.Text('');
    _el_12.append(_text_13);
    _el_14 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_14, 'id', 'test');
    _text_15 = new import2.Text('');
    _el_14.append(_text_15);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.CarComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.car.drive());
    if (!identical(_expr_0, currVal_0)) {
      _text_3.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import6.interpolate0(_ctx.noDiCar.drive());
    if (!identical(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import6.interpolate0(_ctx.injectorCar.drive());
    if (!identical(_expr_2, currVal_2)) {
      _text_7.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import6.interpolate0(_ctx.factoryCar.drive());
    if (!identical(_expr_3, currVal_3)) {
      _text_9.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import6.interpolate0(_ctx.simpleCar.drive());
    if (!identical(_expr_4, currVal_4)) {
      _text_11.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import6.interpolate0(_ctx.superCar.drive());
    if (!identical(_expr_5, currVal_5)) {
      _text_13.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = import6.interpolate0(_ctx.testCar.drive());
    if (!identical(_expr_6, currVal_6)) {
      _text_15.text = currVal_6;
      _expr_6 = currVal_6;
    }
  }
}

AppView<import1.CarComponent> viewFactory_CarComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewCarComponent0(parentView, parentIndex);
}

const List<dynamic> styles$CarComponentHost = const [];

class _ViewCarComponentHost0 extends AppView<dynamic> {
  ViewCarComponent0 _compView_0;
  import8.Engine _Engine_0_5;
  import8.Tires _Tires_0_6;
  import8.Car _Car_0_7;
  import1.CarComponent _CarComponent_0_8;
  _ViewCarComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewCarComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Engine_0_5 = new import8.Engine();
    _Tires_0_6 = new import8.Tires();
    _Car_0_7 = new import8.Car(_Engine_0_5, _Tires_0_6);
    _CarComponent_0_8 = new import1.CarComponent(_Car_0_7);
    _compView_0.create(_CarComponent_0_8, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.CarComponent>(0, this, rootEl, _CarComponent_0_8);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Engine) && (0 == nodeIndex))) {
      return _Engine_0_5;
    }
    if ((identical(token, import8.Tires) && (0 == nodeIndex))) {
      return _Tires_0_6;
    }
    if ((identical(token, import8.Car) && (0 == nodeIndex))) {
      return _Car_0_7;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_CarComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewCarComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.CarComponent> CarComponentNgFactory = const ComponentFactory<import1.CarComponent>('my-car', viewFactory_CarComponentHost0, _CarComponentMetadata);
const _CarComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(CarComponent, CarComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
