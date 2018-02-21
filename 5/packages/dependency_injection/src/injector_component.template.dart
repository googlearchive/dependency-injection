// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'injector_component.dart';
export 'injector_component.dart';
import 'package:angular/angular.dart';
import 'car/car.dart';
import 'heroes/hero.dart';
import 'heroes/hero_service.dart';
import 'heroes/hero_service_provider.dart';
import 'logger_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'car/car.template.dart' as _ref0;
import 'heroes/hero.template.dart' as _ref1;
import 'heroes/hero_service.template.dart' as _ref2;
import 'heroes/hero_service_provider.template.dart' as _ref3;
import 'logger_service.template.dart' as _ref4;
import 'package:angular/angular.template.dart' as _ref5;
import 'package:angular/src/core/linker/app_view.dart';
import 'injector_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';
import 'car/car.dart' as import8;
import 'logger_service.dart' as import9;
import 'heroes/hero_service_provider.dart' as import10;
import 'user_service.dart' as import11;
import 'heroes/hero_service.dart' as import12;

const List<dynamic> styles$InjectorComponent = const [];

class ViewInjectorComponent0 extends AppView<import1.InjectorComponent> {
  import2.Element _el_0;
  import2.DivElement _el_2;
  import2.Text _text_3;
  import2.DivElement _el_4;
  import2.Text _text_5;
  import2.DivElement _el_6;
  import2.Text _text_7;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  static RenderComponentType _renderType;
  ViewInjectorComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-injectors');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$InjectorComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.InjectorComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Other Injections');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_2, 'id', 'car');
    _text_3 = new import2.Text('');
    _el_2.append(_text_3);
    _el_4 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_4, 'id', 'hero');
    _text_5 = new import2.Text('');
    _el_4.append(_text_5);
    _el_6 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_6, 'id', 'rodent');
    _text_7 = new import2.Text('');
    _el_6.append(_text_7);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.InjectorComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.car.drive());
    if (!identical(_expr_0, currVal_0)) {
      _text_3.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import6.interpolate0(_ctx.hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.rodent ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _text_7.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import1.InjectorComponent> viewFactory_InjectorComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewInjectorComponent0(parentView, parentIndex);
}

const List<dynamic> styles$InjectorComponentHost = const [];

class _ViewInjectorComponentHost0 extends AppView<dynamic> {
  ViewInjectorComponent0 _compView_0;
  import1.InjectorComponent _InjectorComponent_0_4;
  import8.Engine __Engine_0_5;
  import8.Tires __Tires_0_6;
  import8.Car __Car_0_7;
  import9.Logger __Logger_0_8;
  dynamic __HeroService_0_9;
  _ViewInjectorComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import8.Engine get _Engine_0_5 {
    if ((this.__Engine_0_5 == null)) {
      (__Engine_0_5 = new import8.Engine());
    }
    return this.__Engine_0_5;
  }

  import8.Tires get _Tires_0_6 {
    if ((this.__Tires_0_6 == null)) {
      (__Tires_0_6 = new import8.Tires());
    }
    return this.__Tires_0_6;
  }

  import8.Car get _Car_0_7 {
    if ((this.__Car_0_7 == null)) {
      (__Car_0_7 = new import8.Car(this._Engine_0_5, this._Tires_0_6));
    }
    return this.__Car_0_7;
  }

  import9.Logger get _Logger_0_8 {
    if ((this.__Logger_0_8 == null)) {
      (__Logger_0_8 = new import9.Logger());
    }
    return this.__Logger_0_8;
  }

  dynamic get _HeroService_0_9 {
    if ((this.__HeroService_0_9 == null)) {
      (__HeroService_0_9 = import10.heroServiceFactory(this._Logger_0_8, this.injectorGet(import11.UserService, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_9;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewInjectorComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _InjectorComponent_0_4 = new import1.InjectorComponent(injector(0));
    _compView_0.create(_InjectorComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.InjectorComponent>(0, this, rootEl, _InjectorComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.InjectorComponent) && (0 == nodeIndex))) {
      return _InjectorComponent_0_4;
    }
    if ((identical(token, import8.Engine) && (0 == nodeIndex))) {
      return _Engine_0_5;
    }
    if ((identical(token, import8.Tires) && (0 == nodeIndex))) {
      return _Tires_0_6;
    }
    if ((identical(token, import8.Car) && (0 == nodeIndex))) {
      return _Car_0_7;
    }
    if ((identical(token, import9.Logger) && (0 == nodeIndex))) {
      return _Logger_0_8;
    }
    if ((identical(token, import12.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_9;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _InjectorComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_InjectorComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewInjectorComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.InjectorComponent> InjectorComponentNgFactory = const ComponentFactory<import1.InjectorComponent>('my-injectors', viewFactory_InjectorComponentHost0, _InjectorComponentMetadata);
const _InjectorComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(InjectorComponent, InjectorComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
