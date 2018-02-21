// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/angular.dart';
import 'src/app_config.dart';
import 'src/car/car_component.dart';
import 'src/heroes/heroes_component.dart';
import 'src/logger_service.dart';
import 'src/user_service.dart';
import 'src/injector_component.dart';
import 'src/test_component.dart';
import 'src/providers_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/app_config.template.dart' as _ref1;
import 'src/car/car_component.template.dart' as _ref2;
import 'src/heroes/heroes_component.template.dart' as _ref3;
import 'src/injector_component.template.dart' as _ref4;
import 'src/logger_service.template.dart' as _ref5;
import 'src/providers_component.template.dart' as _ref6;
import 'src/test_component.template.dart' as _ref7;
import 'src/user_service.template.dart' as _ref8;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import1;
import 'dart:html' as import2;
import 'src/car/car_component.template.dart' as import3;
import 'src/car/car.dart' as import4;
import 'src/car/car_component.dart' as import5;
import 'src/injector_component.template.dart' as import6;
import 'src/injector_component.dart' as import7;
import 'src/logger_service.dart' as import8;
import 'src/test_component.template.dart' as import9;
import 'src/test_component.dart' as import10;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'src/providers_component.template.dart' as import13;
import 'src/providers_component.dart' as import14;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/angular.dart';
import 'src/heroes/hero_service_provider.dart' as import20;
import 'src/user_service.dart' as import21;
import 'package:angular/src/core/linker/template_ref.dart';
import 'src/heroes/hero_service.dart' as import23;
import 'src/heroes/heroes_component.template.dart' as import24;
import 'src/heroes/heroes_component.dart' as import25;
import 'src/app_config.dart' as import26;
import 'package:angular/src/core/di/opaque_token.dart' as import27;

const List<dynamic> styles$AppComponent = const [];

class ViewAppComponent0 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import2.Text _text_1;
  import2.Element _el_2;
  import3.ViewCarComponent0 _compView_2;
  import4.Engine _Engine_2_4;
  import4.Tires _Tires_2_5;
  import4.Car _Car_2_6;
  import5.CarComponent _CarComponent_2_7;
  import2.Element _el_3;
  import6.ViewInjectorComponent0 _compView_3;
  import7.InjectorComponent _InjectorComponent_3_4;
  import4.Engine __Engine_3_5;
  import4.Tires __Tires_3_6;
  import4.Car __Car_3_7;
  import8.Logger __Logger_3_8;
  dynamic __HeroService_3_9;
  import2.Element _el_4;
  import9.ViewTestComponent0 _compView_4;
  import10.TestComponent _TestComponent_4_4;
  import2.Element _el_5;
  import2.Element _el_7;
  import2.Text _text_8;
  import2.ButtonElement _el_9;
  ViewContainer _appEl_11;
  NgIf _NgIf_11_7;
  ViewContainer _appEl_12;
  NgIf _NgIf_12_7;
  import2.Element _el_13;
  import13.ViewProvidersComponent0 _compView_13;
  import14.ProvidersComponent _ProvidersComponent_13_4;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-app');
    _renderType ??= import18.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$AppComponent);
    setupComponentType(_renderType);
  }
  import4.Engine get _Engine_3_5 {
    if ((this.__Engine_3_5 == null)) {
      (__Engine_3_5 = new import4.Engine());
    }
    return this.__Engine_3_5;
  }

  import4.Tires get _Tires_3_6 {
    if ((this.__Tires_3_6 == null)) {
      (__Tires_3_6 = new import4.Tires());
    }
    return this.__Tires_3_6;
  }

  import4.Car get _Car_3_7 {
    if ((this.__Car_3_7 == null)) {
      (__Car_3_7 = new import4.Car(this._Engine_3_5, this._Tires_3_6));
    }
    return this.__Car_3_7;
  }

  import8.Logger get _Logger_3_8 {
    if ((this.__Logger_3_8 == null)) {
      (__Logger_3_8 = new import8.Logger());
    }
    return this.__Logger_3_8;
  }

  dynamic get _HeroService_3_9 {
    if ((this.__HeroService_3_9 == null)) {
      (__HeroService_3_9 = import20.heroServiceFactory(this._Logger_3_8, this.parentView.injectorGet(import21.UserService, this.viewData.parentIndex)));
    }
    return this.__HeroService_3_9;
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    _text_1 = new import2.Text('');
    _el_0.append(_text_1);
    _compView_2 = new import3.ViewCarComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _Engine_2_4 = new import4.Engine();
    _Tires_2_5 = new import4.Tires();
    _Car_2_6 = new import4.Car(_Engine_2_4, _Tires_2_5);
    _CarComponent_2_7 = new import5.CarComponent(_Car_2_6);
    _compView_2.create(_CarComponent_2_7, []);
    _compView_3 = new import6.ViewInjectorComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    _InjectorComponent_3_4 = new import7.InjectorComponent(injector(3));
    _compView_3.create(_InjectorComponent_3_4, []);
    _compView_4 = new import9.ViewTestComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    _TestComponent_4_4 = new import10.TestComponent();
    _compView_4.create(_TestComponent_4_4, []);
    _el_5 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_6 = new import2.Text('User');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'p', parentRenderNode);
    createAttr(_el_7, 'id', 'user');
    _text_8 = new import2.Text('');
    _el_7.append(_text_8);
    _el_9 = createAndAppend(doc, 'button', _el_7);
    import2.Text _text_10 = new import2.Text('Next User');
    _el_9.append(_text_10);
    var _anchor_11 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_11);
    _appEl_11 = new ViewContainer(11, null, this, _anchor_11);
    TemplateRef _TemplateRef_11_6 = new TemplateRef(_appEl_11, viewFactory_AppComponent1);
    _NgIf_11_7 = new NgIf(_appEl_11, _TemplateRef_11_6);
    var _anchor_12 = ngAnchor.clone(false);
    parentRenderNode.append(_anchor_12);
    _appEl_12 = new ViewContainer(12, null, this, _anchor_12);
    TemplateRef _TemplateRef_12_6 = new TemplateRef(_appEl_12, viewFactory_AppComponent2);
    _NgIf_12_7 = new NgIf(_appEl_12, _TemplateRef_12_6);
    _compView_13 = new import13.ViewProvidersComponent0(this, 13);
    _el_13 = _compView_13.rootEl;
    parentRenderNode.append(_el_13);
    _ProvidersComponent_13_4 = new import14.ProvidersComponent();
    _compView_13.create(_ProvidersComponent_13_4, []);
    _el_9.addEventListener('click', eventHandler0(ctx.nextUser));
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.Engine) && (2 == nodeIndex))) {
      return _Engine_2_4;
    }
    if ((identical(token, import4.Tires) && (2 == nodeIndex))) {
      return _Tires_2_5;
    }
    if ((identical(token, import4.Car) && (2 == nodeIndex))) {
      return _Car_2_6;
    }
    if ((identical(token, import5.CarComponent) && (2 == nodeIndex))) {
      return _CarComponent_2_7;
    }
    if ((identical(token, import7.InjectorComponent) && (3 == nodeIndex))) {
      return _InjectorComponent_3_4;
    }
    if ((identical(token, import4.Engine) && (3 == nodeIndex))) {
      return _Engine_3_5;
    }
    if ((identical(token, import4.Tires) && (3 == nodeIndex))) {
      return _Tires_3_6;
    }
    if ((identical(token, import4.Car) && (3 == nodeIndex))) {
      return _Car_3_7;
    }
    if ((identical(token, import8.Logger) && (3 == nodeIndex))) {
      return _Logger_3_8;
    }
    if ((identical(token, import23.HeroService) && (3 == nodeIndex))) {
      return _HeroService_3_9;
    }
    if ((identical(token, import10.TestComponent) && (4 == nodeIndex))) {
      return _TestComponent_4_4;
    }
    if ((identical(token, import14.ProvidersComponent) && (13 == nodeIndex))) {
      return _ProvidersComponent_13_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import1.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _InjectorComponent_3_4.ngOnInit();
    }
    _NgIf_11_7.ngIf = _ctx.isAuthorized;
    _NgIf_12_7.ngIf = !_ctx.isAuthorized;
    _appEl_11.detectChangesInNestedViews();
    _appEl_12.detectChangesInNestedViews();
    if (firstCheck) {
      (_text_1.text = (_ctx.title ?? ''));
    }
    final currVal_1 = (_ctx.userInfo ?? '');
    if (!identical(_expr_1, currVal_1)) {
      _text_8.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_13.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_11?.destroyNestedViews();
    _appEl_12?.destroyNestedViews();
    _compView_2?.destroy();
    _compView_3?.destroy();
    _compView_4?.destroy();
    _compView_13?.destroy();
  }
}

AppView<import1.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

class _ViewAppComponent1 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import24.ViewHeroesComponent0 _compView_0;
  import25.HeroesComponent _HeroesComponent_0_4;
  dynamic __HeroService_0_5;
  _ViewAppComponent1(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  dynamic get _HeroService_0_5 {
    if ((this.__HeroService_0_5 == null)) {
      (__HeroService_0_5 = import20.heroServiceFactory(this.parentView.injectorGet(import8.Logger, this.viewData.parentIndex), this.parentView.injectorGet(import21.UserService, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_5;
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    _compView_0 = new import24.ViewHeroesComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'id', 'authorized');
    _HeroesComponent_0_4 = new import25.HeroesComponent();
    _compView_0.create(_HeroesComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.HeroesComponent) && (0 == nodeIndex))) {
      return _HeroesComponent_0_4;
    }
    if ((identical(token, import23.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_5;
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

AppView<import1.AppComponent> viewFactory_AppComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent1(parentView, parentIndex);
}

class _ViewAppComponent2 extends AppView<import1.AppComponent> {
  import2.Element _el_0;
  import24.ViewHeroesComponent0 _compView_0;
  import25.HeroesComponent _HeroesComponent_0_4;
  dynamic __HeroService_0_5;
  _ViewAppComponent2(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewAppComponent0._renderType;
  }
  dynamic get _HeroService_0_5 {
    if ((this.__HeroService_0_5 == null)) {
      (__HeroService_0_5 = import20.heroServiceFactory(this.parentView.injectorGet(import8.Logger, this.viewData.parentIndex), this.parentView.injectorGet(import21.UserService, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_5;
  }

  @override
  ComponentRef<import1.AppComponent> build() {
    _compView_0 = new import24.ViewHeroesComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    createAttr(_el_0, 'id', 'unauthorized');
    _HeroesComponent_0_4 = new import25.HeroesComponent();
    _compView_0.create(_HeroesComponent_0_4, []);
    init0(_el_0);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import25.HeroesComponent) && (0 == nodeIndex))) {
      return _HeroesComponent_0_4;
    }
    if ((identical(token, import23.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_5;
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

AppView<import1.AppComponent> viewFactory_AppComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponent2(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  dynamic _app_config_0_4;
  import21.UserService _UserService_0_5;
  import1.AppComponent _AppComponent_0_6;
  import8.Logger __Logger_0_7;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  import8.Logger get _Logger_0_7 {
    if ((this.__Logger_0_7 == null)) {
      (__Logger_0_7 = new import8.Logger());
    }
    return this.__Logger_0_7;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _app_config_0_4 = import26.heroDiConfigFactory();
    _UserService_0_5 = new import21.UserService();
    _AppComponent_0_6 = new import1.AppComponent(_app_config_0_4, _UserService_0_5);
    _compView_0.create(_AppComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.AppComponent>(0, this, rootEl, _AppComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import27.OpaqueToken('app.config')) && (0 == nodeIndex))) {
      return _app_config_0_4;
    }
    if ((identical(token, import21.UserService) && (0 == nodeIndex))) {
      return _UserService_0_5;
    }
    if ((identical(token, import1.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_6;
    }
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_7;
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

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.AppComponent> AppComponentNgFactory = const ComponentFactory<import1.AppComponent>('my-app', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ref7.initReflector();
  _ref8.initReflector();
}
