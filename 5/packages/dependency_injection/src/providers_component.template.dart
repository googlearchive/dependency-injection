// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'providers_component.dart';
export 'providers_component.dart';
import 'package:angular/angular.dart';
import 'app_config.dart';
import 'heroes/hero_service_provider.dart';
import 'heroes/hero_service.dart';
import 'logger_service.dart';
import 'user_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'app_config.template.dart' as _ref0;
import 'heroes/hero_service.template.dart' as _ref1;
import 'heroes/hero_service_provider.template.dart' as _ref2;
import 'logger_service.template.dart' as _ref3;
import 'package:angular/angular.template.dart' as _ref4;
import 'user_service.template.dart' as _ref5;
import 'package:dependency_injection/src/user_service.dart' as _i1;
import 'package:angular/src/core/linker/app_view.dart';
import 'providers_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';
import 'logger_service.dart' as import8;
import 'user_service.dart' as import9;
import 'heroes/hero_service.dart' as import10;
import 'heroes/hero_service_provider.dart' as import11;
import 'package:angular/src/core/di/opaque_token.dart' as import12;

const List<dynamic> styles$Provider1Component = const [];

class ViewProvider1Component0 extends AppView<import1.Provider1Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider1Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-1');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider1Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider1Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider1Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider1Component> viewFactory_Provider1Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider1Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider1ComponentHost = const [];

class _ViewProvider1ComponentHost0 extends AppView<dynamic> {
  ViewProvider1Component0 _compView_0;
  import8.Logger _Logger_0_5;
  import1.Provider1Component _Provider1Component_0_6;
  _ViewProvider1ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider1Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import8.Logger();
    _Provider1Component_0_6 = new import1.Provider1Component(_Logger_0_5);
    _compView_0.create(_Provider1Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider1Component>(0, this, rootEl, _Provider1Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
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

AppView viewFactory_Provider1ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider1ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider1Component> Provider1ComponentNgFactory = const ComponentFactory<import1.Provider1Component>('provider-1', viewFactory_Provider1ComponentHost0, _Provider1ComponentMetadata);
const List<dynamic> styles$Provider3Component = const [];

class ViewProvider3Component0 extends AppView<import1.Provider3Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider3Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-3');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider3Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider3Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider3Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider3Component> viewFactory_Provider3Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider3Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider3ComponentHost = const [];

class _ViewProvider3ComponentHost0 extends AppView<dynamic> {
  ViewProvider3Component0 _compView_0;
  import8.Logger _Logger_0_5;
  import1.Provider3Component _Provider3Component_0_6;
  _ViewProvider3ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider3Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import8.Logger();
    _Provider3Component_0_6 = new import1.Provider3Component(_Logger_0_5);
    _compView_0.create(_Provider3Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider3Component>(0, this, rootEl, _Provider3Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
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

AppView viewFactory_Provider3ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider3ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider3Component> Provider3ComponentNgFactory = const ComponentFactory<import1.Provider3Component>('provider-3', viewFactory_Provider3ComponentHost0, _Provider3ComponentMetadata);
const List<dynamic> styles$Provider4Component = const [];

class ViewProvider4Component0 extends AppView<import1.Provider4Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider4Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-4');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider4Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider4Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider4Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider4Component> viewFactory_Provider4Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider4Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider4ComponentHost = const [];

class _ViewProvider4ComponentHost0 extends AppView<dynamic> {
  ViewProvider4Component0 _compView_0;
  import1.BetterLogger _Logger_0_5;
  import1.Provider4Component _Provider4Component_0_6;
  _ViewProvider4ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider4Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import1.BetterLogger();
    _Provider4Component_0_6 = new import1.Provider4Component(_Logger_0_5);
    _compView_0.create(_Provider4Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider4Component>(0, this, rootEl, _Provider4Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
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

AppView viewFactory_Provider4ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider4ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider4Component> Provider4ComponentNgFactory = const ComponentFactory<import1.Provider4Component>('provider-4', viewFactory_Provider4ComponentHost0, _Provider4ComponentMetadata);
const List<dynamic> styles$Provider5Component = const [];

class ViewProvider5Component0 extends AppView<import1.Provider5Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider5Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-5');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider5Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider5Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider5Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider5Component> viewFactory_Provider5Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider5Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider5ComponentHost = const [];

class _ViewProvider5ComponentHost0 extends AppView<dynamic> {
  ViewProvider5Component0 _compView_0;
  import9.UserService _UserService_0_5;
  import1.EvenBetterLogger _Logger_0_6;
  import1.Provider5Component _Provider5Component_0_7;
  _ViewProvider5ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider5Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _UserService_0_5 = new import9.UserService();
    _Logger_0_6 = new import1.EvenBetterLogger(_UserService_0_5);
    _Provider5Component_0_7 = new import1.Provider5Component(_Logger_0_6);
    _compView_0.create(_Provider5Component_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider5Component>(0, this, rootEl, _Provider5Component_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.UserService) && (0 == nodeIndex))) {
      return _UserService_0_5;
    }
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_6;
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

AppView viewFactory_Provider5ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider5ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider5Component> Provider5ComponentNgFactory = const ComponentFactory<import1.Provider5Component>('provider-5', viewFactory_Provider5ComponentHost0, _Provider5ComponentMetadata);
const List<dynamic> styles$Provider6aComponent = const [];

class ViewProvider6aComponent0 extends AppView<import1.Provider6aComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider6aComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-6a');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider6aComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider6aComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider6aComponent _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider6aComponent> viewFactory_Provider6aComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider6aComponent0(parentView, parentIndex);
}

const List<dynamic> styles$Provider6aComponentHost = const [];

class _ViewProvider6aComponentHost0 extends AppView<dynamic> {
  ViewProvider6aComponent0 _compView_0;
  import1.NewLogger _NewLogger_0_5;
  import1.NewLogger _OldLogger_0_6;
  import1.Provider6aComponent _Provider6aComponent_0_7;
  _ViewProvider6aComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider6aComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NewLogger_0_5 = new import1.NewLogger();
    _OldLogger_0_6 = new import1.NewLogger();
    _Provider6aComponent_0_7 = new import1.Provider6aComponent(_NewLogger_0_5, _OldLogger_0_6);
    _compView_0.create(_Provider6aComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider6aComponent>(0, this, rootEl, _Provider6aComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.NewLogger) && (0 == nodeIndex))) {
      return _NewLogger_0_5;
    }
    if ((identical(token, import1.OldLogger) && (0 == nodeIndex))) {
      return _OldLogger_0_6;
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

AppView viewFactory_Provider6aComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider6aComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider6aComponent> Provider6aComponentNgFactory = const ComponentFactory<import1.Provider6aComponent>('provider-6a', viewFactory_Provider6aComponentHost0, _Provider6aComponentMetadata);
const List<dynamic> styles$Provider6bComponent = const [];

class ViewProvider6bComponent0 extends AppView<import1.Provider6bComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider6bComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-6b');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider6bComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider6bComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider6bComponent _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider6bComponent> viewFactory_Provider6bComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider6bComponent0(parentView, parentIndex);
}

const List<dynamic> styles$Provider6bComponentHost = const [];

class _ViewProvider6bComponentHost0 extends AppView<dynamic> {
  ViewProvider6bComponent0 _compView_0;
  import1.NewLogger _NewLogger_0_5;
  import1.NewLogger _OldLogger_0_6;
  import1.Provider6bComponent _Provider6bComponent_0_7;
  _ViewProvider6bComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider6bComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NewLogger_0_5 = new import1.NewLogger();
    _OldLogger_0_6 = _NewLogger_0_5;
    _Provider6bComponent_0_7 = new import1.Provider6bComponent(_NewLogger_0_5, _OldLogger_0_6);
    _compView_0.create(_Provider6bComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider6bComponent>(0, this, rootEl, _Provider6bComponent_0_7);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.NewLogger) && (0 == nodeIndex))) {
      return _NewLogger_0_5;
    }
    if ((identical(token, import1.OldLogger) && (0 == nodeIndex))) {
      return _OldLogger_0_6;
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

AppView viewFactory_Provider6bComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider6bComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider6bComponent> Provider6bComponentNgFactory = const ComponentFactory<import1.Provider6bComponent>('provider-6b', viewFactory_Provider6bComponentHost0, _Provider6bComponentMetadata);
const List<dynamic> styles$Provider7Component = const [];

class ViewProvider7Component0 extends AppView<import1.Provider7Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider7Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-7');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider7Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider7Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider7Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider7Component> viewFactory_Provider7Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider7Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider7ComponentHost = const [];

class _ViewProvider7ComponentHost0 extends AppView<dynamic> {
  ViewProvider7Component0 _compView_0;
  import1.SilentLogger _Logger_0_5;
  import1.Provider7Component _Provider7Component_0_6;
  _ViewProvider7ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider7Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = const import1.SilentLogger();
    _Provider7Component_0_6 = new import1.Provider7Component(_Logger_0_5);
    _compView_0.create(_Provider7Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider7Component>(0, this, rootEl, _Provider7Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
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

AppView viewFactory_Provider7ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider7ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider7Component> Provider7ComponentNgFactory = const ComponentFactory<import1.Provider7Component>('provider-7', viewFactory_Provider7ComponentHost0, _Provider7ComponentMetadata);
const List<dynamic> styles$Provider8Component = const [];

class ViewProvider8Component0 extends AppView<import1.Provider8Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider8Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-8');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider8Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider8Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider8Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider8Component> viewFactory_Provider8Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider8Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider8ComponentHost = const [];

class _ViewProvider8ComponentHost0 extends AppView<dynamic> {
  ViewProvider8Component0 _compView_0;
  import8.Logger _Logger_0_5;
  import9.UserService _UserService_0_6;
  import10.HeroService _HeroService_0_7;
  import1.Provider8Component _Provider8Component_0_8;
  _ViewProvider8ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider8Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import8.Logger();
    _UserService_0_6 = new import9.UserService();
    _HeroService_0_7 = import11.heroServiceFactory(_Logger_0_5, _UserService_0_6);
    _Provider8Component_0_8 = new import1.Provider8Component(_HeroService_0_7);
    _compView_0.create(_Provider8Component_0_8, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider8Component>(0, this, rootEl, _Provider8Component_0_8);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
    }
    if ((identical(token, import9.UserService) && (0 == nodeIndex))) {
      return _UserService_0_6;
    }
    if ((identical(token, import10.HeroService) && (0 == nodeIndex))) {
      return _HeroService_0_7;
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

AppView viewFactory_Provider8ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider8ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider8Component> Provider8ComponentNgFactory = const ComponentFactory<import1.Provider8Component>('provider-8', viewFactory_Provider8ComponentHost0, _Provider8ComponentMetadata);
const List<dynamic> styles$Provider9Component = const [];

class ViewProvider9Component0 extends AppView<import1.Provider9Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider9Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-9');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider9Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider9Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider9Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider9Component> viewFactory_Provider9Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider9Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider9ComponentHost = const [];

class _ViewProvider9ComponentHost0 extends AppView<dynamic> {
  ViewProvider9Component0 _compView_0;
  Map<String, dynamic> _app_config_0_5;
  import1.Provider9Component _Provider9Component_0_6;
  _ViewProvider9ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider9Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _app_config_0_5 = const {'apiEndpoint': 'api.heroes.com', 'title': 'Dependency Injection'};
    _Provider9Component_0_6 = new import1.Provider9Component(_app_config_0_5);
    _compView_0.create(_Provider9Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider9Component>(0, this, rootEl, _Provider9Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import12.OpaqueToken('app.config')) && (0 == nodeIndex))) {
      return _app_config_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _Provider9Component_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_Provider9ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider9ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider9Component> Provider9ComponentNgFactory = const ComponentFactory<import1.Provider9Component>('provider-9', viewFactory_Provider9ComponentHost0, _Provider9ComponentMetadata);
const List<dynamic> styles$Provider10Component = const [];

class ViewProvider10Component0 extends AppView<import1.Provider10Component> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewProvider10Component0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('provider-10');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$Provider10Component);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.Provider10Component> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.Provider10Component _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.Provider10Component> viewFactory_Provider10Component0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvider10Component0(parentView, parentIndex);
}

const List<dynamic> styles$Provider10ComponentHost = const [];

class _ViewProvider10ComponentHost0 extends AppView<dynamic> {
  ViewProvider10Component0 _compView_0;
  dynamic _Logger_0_5;
  import1.Provider10Component _Provider10Component_0_6;
  _ViewProvider10ComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvider10Component0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = null;
    _Provider10Component_0_6 = new import1.Provider10Component(_Logger_0_5);
    _compView_0.create(_Provider10Component_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.Provider10Component>(0, this, rootEl, _Provider10Component_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _Provider10Component_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_Provider10ComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvider10ComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.Provider10Component> Provider10ComponentNgFactory = const ComponentFactory<import1.Provider10Component>('provider-10', viewFactory_Provider10ComponentHost0, _Provider10ComponentMetadata);
const List<dynamic> styles$ProvidersComponent = const [];

class ViewProvidersComponent0 extends AppView<import1.ProvidersComponent> {
  import2.Element _el_0;
  import2.DivElement _el_2;
  import2.Element _el_3;
  ViewProvider1Component0 _compView_3;
  import8.Logger _Logger_3_5;
  import1.Provider1Component _Provider1Component_3_6;
  import2.DivElement _el_4;
  import2.Element _el_5;
  ViewProvider3Component0 _compView_5;
  import8.Logger _Logger_5_5;
  import1.Provider3Component _Provider3Component_5_6;
  import2.DivElement _el_6;
  import2.Element _el_7;
  ViewProvider4Component0 _compView_7;
  import1.BetterLogger _Logger_7_5;
  import1.Provider4Component _Provider4Component_7_6;
  import2.DivElement _el_8;
  import2.Element _el_9;
  ViewProvider5Component0 _compView_9;
  import9.UserService _UserService_9_5;
  import1.EvenBetterLogger _Logger_9_6;
  import1.Provider5Component _Provider5Component_9_7;
  import2.DivElement _el_10;
  import2.Element _el_11;
  ViewProvider6aComponent0 _compView_11;
  import1.NewLogger _NewLogger_11_5;
  import1.NewLogger _OldLogger_11_6;
  import1.Provider6aComponent _Provider6aComponent_11_7;
  import2.DivElement _el_12;
  import2.Element _el_13;
  ViewProvider6bComponent0 _compView_13;
  import1.NewLogger _NewLogger_13_5;
  import1.NewLogger _OldLogger_13_6;
  import1.Provider6bComponent _Provider6bComponent_13_7;
  import2.DivElement _el_14;
  import2.Element _el_15;
  ViewProvider7Component0 _compView_15;
  import1.SilentLogger _Logger_15_5;
  import1.Provider7Component _Provider7Component_15_6;
  import2.DivElement _el_16;
  import2.Element _el_17;
  ViewProvider8Component0 _compView_17;
  import8.Logger _Logger_17_5;
  import9.UserService _UserService_17_6;
  import10.HeroService _HeroService_17_7;
  import1.Provider8Component _Provider8Component_17_8;
  import2.DivElement _el_18;
  import2.Element _el_19;
  ViewProvider9Component0 _compView_19;
  Map<String, dynamic> _app_config_19_5;
  import1.Provider9Component _Provider9Component_19_6;
  import2.DivElement _el_20;
  import2.Element _el_21;
  ViewProvider10Component0 _compView_21;
  dynamic _Logger_21_5;
  import1.Provider10Component _Provider10Component_21_6;
  static RenderComponentType _renderType;
  ViewProvidersComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-providers');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ProvidersComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ProvidersComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Provider variations');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_2, 'id', 'p1');
    _compView_3 = new ViewProvider1Component0(this, 3);
    _el_3 = _compView_3.rootEl;
    _el_2.append(_el_3);
    _Logger_3_5 = new import8.Logger();
    _Provider1Component_3_6 = new import1.Provider1Component(_Logger_3_5);
    _compView_3.create(_Provider1Component_3_6, []);
    _el_4 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_4, 'id', 'p3');
    _compView_5 = new ViewProvider3Component0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_4.append(_el_5);
    _Logger_5_5 = new import8.Logger();
    _Provider3Component_5_6 = new import1.Provider3Component(_Logger_5_5);
    _compView_5.create(_Provider3Component_5_6, []);
    _el_6 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_6, 'id', 'p4');
    _compView_7 = new ViewProvider4Component0(this, 7);
    _el_7 = _compView_7.rootEl;
    _el_6.append(_el_7);
    _Logger_7_5 = new import1.BetterLogger();
    _Provider4Component_7_6 = new import1.Provider4Component(_Logger_7_5);
    _compView_7.create(_Provider4Component_7_6, []);
    _el_8 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_8, 'id', 'p5');
    _compView_9 = new ViewProvider5Component0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_8.append(_el_9);
    _UserService_9_5 = new import9.UserService();
    _Logger_9_6 = new import1.EvenBetterLogger(_UserService_9_5);
    _Provider5Component_9_7 = new import1.Provider5Component(_Logger_9_6);
    _compView_9.create(_Provider5Component_9_7, []);
    _el_10 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_10, 'id', 'p6a');
    _compView_11 = new ViewProvider6aComponent0(this, 11);
    _el_11 = _compView_11.rootEl;
    _el_10.append(_el_11);
    _NewLogger_11_5 = new import1.NewLogger();
    _OldLogger_11_6 = new import1.NewLogger();
    _Provider6aComponent_11_7 = new import1.Provider6aComponent(_NewLogger_11_5, _OldLogger_11_6);
    _compView_11.create(_Provider6aComponent_11_7, []);
    _el_12 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_12, 'id', 'p6b');
    _compView_13 = new ViewProvider6bComponent0(this, 13);
    _el_13 = _compView_13.rootEl;
    _el_12.append(_el_13);
    _NewLogger_13_5 = new import1.NewLogger();
    _OldLogger_13_6 = _NewLogger_13_5;
    _Provider6bComponent_13_7 = new import1.Provider6bComponent(_NewLogger_13_5, _OldLogger_13_6);
    _compView_13.create(_Provider6bComponent_13_7, []);
    _el_14 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_14, 'id', 'p7');
    _compView_15 = new ViewProvider7Component0(this, 15);
    _el_15 = _compView_15.rootEl;
    _el_14.append(_el_15);
    _Logger_15_5 = const import1.SilentLogger();
    _Provider7Component_15_6 = new import1.Provider7Component(_Logger_15_5);
    _compView_15.create(_Provider7Component_15_6, []);
    _el_16 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_16, 'id', 'p8');
    _compView_17 = new ViewProvider8Component0(this, 17);
    _el_17 = _compView_17.rootEl;
    _el_16.append(_el_17);
    _Logger_17_5 = new import8.Logger();
    _UserService_17_6 = new import9.UserService();
    _HeroService_17_7 = import11.heroServiceFactory(_Logger_17_5, _UserService_17_6);
    _Provider8Component_17_8 = new import1.Provider8Component(_HeroService_17_7);
    _compView_17.create(_Provider8Component_17_8, []);
    _el_18 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_18, 'id', 'p9');
    _compView_19 = new ViewProvider9Component0(this, 19);
    _el_19 = _compView_19.rootEl;
    _el_18.append(_el_19);
    _app_config_19_5 = const {'apiEndpoint': 'api.heroes.com', 'title': 'Dependency Injection'};
    _Provider9Component_19_6 = new import1.Provider9Component(_app_config_19_5);
    _compView_19.create(_Provider9Component_19_6, []);
    _el_20 = createDivAndAppend(doc, parentRenderNode);
    createAttr(_el_20, 'id', 'p10');
    _compView_21 = new ViewProvider10Component0(this, 21);
    _el_21 = _compView_21.rootEl;
    _el_20.append(_el_21);
    _Logger_21_5 = null;
    _Provider10Component_21_6 = new import1.Provider10Component(_Logger_21_5);
    _compView_21.create(_Provider10Component_21_6, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (3 == nodeIndex))) {
      return _Logger_3_5;
    }
    if ((identical(token, import8.Logger) && (5 == nodeIndex))) {
      return _Logger_5_5;
    }
    if ((identical(token, import8.Logger) && (7 == nodeIndex))) {
      return _Logger_7_5;
    }
    if ((identical(token, import9.UserService) && (9 == nodeIndex))) {
      return _UserService_9_5;
    }
    if ((identical(token, import8.Logger) && (9 == nodeIndex))) {
      return _Logger_9_6;
    }
    if ((identical(token, import1.NewLogger) && (11 == nodeIndex))) {
      return _NewLogger_11_5;
    }
    if ((identical(token, import1.OldLogger) && (11 == nodeIndex))) {
      return _OldLogger_11_6;
    }
    if ((identical(token, import1.NewLogger) && (13 == nodeIndex))) {
      return _NewLogger_13_5;
    }
    if ((identical(token, import1.OldLogger) && (13 == nodeIndex))) {
      return _OldLogger_13_6;
    }
    if ((identical(token, import8.Logger) && (15 == nodeIndex))) {
      return _Logger_15_5;
    }
    if ((identical(token, import8.Logger) && (17 == nodeIndex))) {
      return _Logger_17_5;
    }
    if ((identical(token, import9.UserService) && (17 == nodeIndex))) {
      return _UserService_17_6;
    }
    if ((identical(token, import10.HeroService) && (17 == nodeIndex))) {
      return _HeroService_17_7;
    }
    if ((identical(token, const import12.OpaqueToken('app.config')) && (19 == nodeIndex))) {
      return _app_config_19_5;
    }
    if ((identical(token, import8.Logger) && (21 == nodeIndex))) {
      return _Logger_21_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _Provider9Component_19_6.ngOnInit();
    }
    if (firstCheck) {
      _Provider10Component_21_6.ngOnInit();
    }
    _compView_3.detectChanges();
    _compView_5.detectChanges();
    _compView_7.detectChanges();
    _compView_9.detectChanges();
    _compView_11.detectChanges();
    _compView_13.detectChanges();
    _compView_15.detectChanges();
    _compView_17.detectChanges();
    _compView_19.detectChanges();
    _compView_21.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_3?.destroy();
    _compView_5?.destroy();
    _compView_7?.destroy();
    _compView_9?.destroy();
    _compView_11?.destroy();
    _compView_13?.destroy();
    _compView_15?.destroy();
    _compView_17?.destroy();
    _compView_19?.destroy();
    _compView_21?.destroy();
  }
}

AppView<import1.ProvidersComponent> viewFactory_ProvidersComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvidersComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ProvidersComponentHost = const [];

class _ViewProvidersComponentHost0 extends AppView<dynamic> {
  ViewProvidersComponent0 _compView_0;
  import1.ProvidersComponent _ProvidersComponent_0_5;
  _ViewProvidersComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewProvidersComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ProvidersComponent_0_5 = new import1.ProvidersComponent();
    _compView_0.create(_ProvidersComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ProvidersComponent>(0, this, rootEl, _ProvidersComponent_0_5);
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

AppView viewFactory_ProvidersComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewProvidersComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ProvidersComponent> ProvidersComponentNgFactory = const ComponentFactory<import1.ProvidersComponent>('my-providers', viewFactory_ProvidersComponentHost0, _ProvidersComponentMetadata);
const _Provider1ComponentMetadata = const [];
const _Provider3ComponentMetadata = const [];
const _Provider4ComponentMetadata = const [];
const _Provider5ComponentMetadata = const [];
const _Provider6aComponentMetadata = const [];
const _Provider6bComponentMetadata = const [];
const _Provider7ComponentMetadata = const [];
const _Provider8ComponentMetadata = const [];
const _Provider9ComponentMetadata = const [];
const _Provider10ComponentMetadata = const [];
const _ProvidersComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(Provider1Component, Provider1ComponentNgFactory);
  _ngRef.registerComponent(Provider3Component, Provider3ComponentNgFactory);
  _ngRef.registerFactory(BetterLogger, () => new BetterLogger());
  _ngRef.registerComponent(Provider4Component, Provider4ComponentNgFactory);
  _ngRef.registerFactory(EvenBetterLogger, (_i1.UserService p0) => new EvenBetterLogger(p0));
  _ngRef.registerDependencies(EvenBetterLogger, const [
    const [_i1.UserService]
  ]);
  _ngRef.registerComponent(Provider5Component, Provider5ComponentNgFactory);
  _ngRef.registerFactory(NewLogger, () => new NewLogger());
  _ngRef.registerComponent(Provider6aComponent, Provider6aComponentNgFactory);
  _ngRef.registerComponent(Provider6bComponent, Provider6bComponentNgFactory);
  _ngRef.registerComponent(Provider7Component, Provider7ComponentNgFactory);
  _ngRef.registerComponent(Provider8Component, Provider8ComponentNgFactory);
  _ngRef.registerComponent(Provider9Component, Provider9ComponentNgFactory);
  _ngRef.registerComponent(Provider10Component, Provider10ComponentNgFactory);
  _ngRef.registerComponent(ProvidersComponent, ProvidersComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
