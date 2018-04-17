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
import 'heroes/hero_service_provider.dart' as import10;
import 'heroes/hero_service.dart' as import11;
import 'dart:core';
import 'package:angular/src/core/di/opaque_token.dart' as import13;

const List<dynamic> styles$ClassProviderComponent = const [];

class ViewClassProviderComponent0 extends AppView<import1.ClassProviderComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewClassProviderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('class-provider');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ClassProviderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ClassProviderComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ClassProviderComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ClassProviderComponent> viewFactory_ClassProviderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewClassProviderComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ClassProviderComponentHost = const [];

class _ViewClassProviderComponentHost0 extends AppView<dynamic> {
  ViewClassProviderComponent0 _compView_0;
  import8.Logger _Logger_0_5;
  import1.ClassProviderComponent _ClassProviderComponent_0_6;
  _ViewClassProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewClassProviderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import8.Logger();
    _ClassProviderComponent_0_6 = new import1.ClassProviderComponent(_Logger_0_5);
    _compView_0.create(_ClassProviderComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ClassProviderComponent>(0, this, rootEl, _ClassProviderComponent_0_6);
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

AppView viewFactory_ClassProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewClassProviderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ClassProviderComponent> ClassProviderComponentNgFactory = const ComponentFactory<import1.ClassProviderComponent>('class-provider', viewFactory_ClassProviderComponentHost0, _ClassProviderComponentMetadata);
const List<dynamic> styles$ClassProviderUseClassComponent = const [];

class ViewClassProviderUseClassComponent0 extends AppView<import1.ClassProviderUseClassComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewClassProviderUseClassComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('use-class');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ClassProviderUseClassComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ClassProviderUseClassComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ClassProviderUseClassComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ClassProviderUseClassComponent> viewFactory_ClassProviderUseClassComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewClassProviderUseClassComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ClassProviderUseClassComponentHost = const [];

class _ViewClassProviderUseClassComponentHost0 extends AppView<dynamic> {
  ViewClassProviderUseClassComponent0 _compView_0;
  import1.BetterLogger _Logger_0_5;
  import1.ClassProviderUseClassComponent _ClassProviderUseClassComponent_0_6;
  _ViewClassProviderUseClassComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewClassProviderUseClassComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import1.BetterLogger();
    _ClassProviderUseClassComponent_0_6 = new import1.ClassProviderUseClassComponent(_Logger_0_5);
    _compView_0.create(_ClassProviderUseClassComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ClassProviderUseClassComponent>(0, this, rootEl, _ClassProviderUseClassComponent_0_6);
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

AppView viewFactory_ClassProviderUseClassComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewClassProviderUseClassComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ClassProviderUseClassComponent> ClassProviderUseClassComponentNgFactory = const ComponentFactory<import1.ClassProviderUseClassComponent>('use-class', viewFactory_ClassProviderUseClassComponentHost0, _ClassProviderUseClassComponentMetadata);
const List<dynamic> styles$ServiceWithDepsComponent = const [];

class ViewServiceWithDepsComponent0 extends AppView<import1.ServiceWithDepsComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewServiceWithDepsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('use-class-deps');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ServiceWithDepsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ServiceWithDepsComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ServiceWithDepsComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ServiceWithDepsComponent> viewFactory_ServiceWithDepsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewServiceWithDepsComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ServiceWithDepsComponentHost = const [];

class _ViewServiceWithDepsComponentHost0 extends AppView<dynamic> {
  ViewServiceWithDepsComponent0 _compView_0;
  import9.UserService _UserService_0_5;
  import1.EvenBetterLogger _Logger_0_6;
  import1.ServiceWithDepsComponent _ServiceWithDepsComponent_0_7;
  _ViewServiceWithDepsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewServiceWithDepsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _UserService_0_5 = new import9.UserService();
    _Logger_0_6 = new import1.EvenBetterLogger(_UserService_0_5);
    _ServiceWithDepsComponent_0_7 = new import1.ServiceWithDepsComponent(_Logger_0_6);
    _compView_0.create(_ServiceWithDepsComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ServiceWithDepsComponent>(0, this, rootEl, _ServiceWithDepsComponent_0_7);
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

AppView viewFactory_ServiceWithDepsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewServiceWithDepsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ServiceWithDepsComponent> ServiceWithDepsComponentNgFactory = const ComponentFactory<import1.ServiceWithDepsComponent>('use-class-deps', viewFactory_ServiceWithDepsComponentHost0, _ServiceWithDepsComponentMetadata);
const List<dynamic> styles$TwoNewLoggersComponent = const [];

class ViewTwoNewLoggersComponent0 extends AppView<import1.TwoNewLoggersComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewTwoNewLoggersComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('two-new-loggers');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$TwoNewLoggersComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.TwoNewLoggersComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.TwoNewLoggersComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.TwoNewLoggersComponent> viewFactory_TwoNewLoggersComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewTwoNewLoggersComponent0(parentView, parentIndex);
}

const List<dynamic> styles$TwoNewLoggersComponentHost = const [];

class _ViewTwoNewLoggersComponentHost0 extends AppView<dynamic> {
  ViewTwoNewLoggersComponent0 _compView_0;
  import1.NewLogger _NewLogger_0_5;
  import1.NewLogger _OldLogger_0_6;
  import1.TwoNewLoggersComponent _TwoNewLoggersComponent_0_7;
  _ViewTwoNewLoggersComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewTwoNewLoggersComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NewLogger_0_5 = new import1.NewLogger();
    _OldLogger_0_6 = new import1.NewLogger();
    _TwoNewLoggersComponent_0_7 = new import1.TwoNewLoggersComponent(_NewLogger_0_5, _OldLogger_0_6);
    _compView_0.create(_TwoNewLoggersComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.TwoNewLoggersComponent>(0, this, rootEl, _TwoNewLoggersComponent_0_7);
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

AppView viewFactory_TwoNewLoggersComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewTwoNewLoggersComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.TwoNewLoggersComponent> TwoNewLoggersComponentNgFactory = const ComponentFactory<import1.TwoNewLoggersComponent>('two-new-loggers', viewFactory_TwoNewLoggersComponentHost0, _TwoNewLoggersComponentMetadata);
const List<dynamic> styles$ExistingProviderComponent = const [];

class ViewExistingProviderComponent0 extends AppView<import1.ExistingProviderComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewExistingProviderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('existing-provider');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ExistingProviderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ExistingProviderComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ExistingProviderComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ExistingProviderComponent> viewFactory_ExistingProviderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewExistingProviderComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ExistingProviderComponentHost = const [];

class _ViewExistingProviderComponentHost0 extends AppView<dynamic> {
  ViewExistingProviderComponent0 _compView_0;
  import1.NewLogger _NewLogger_0_5;
  import1.NewLogger _OldLogger_0_6;
  import1.ExistingProviderComponent _ExistingProviderComponent_0_7;
  _ViewExistingProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewExistingProviderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _NewLogger_0_5 = new import1.NewLogger();
    _OldLogger_0_6 = _NewLogger_0_5;
    _ExistingProviderComponent_0_7 = new import1.ExistingProviderComponent(_NewLogger_0_5, _OldLogger_0_6);
    _compView_0.create(_ExistingProviderComponent_0_7, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ExistingProviderComponent>(0, this, rootEl, _ExistingProviderComponent_0_7);
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

AppView viewFactory_ExistingProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewExistingProviderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ExistingProviderComponent> ExistingProviderComponentNgFactory = const ComponentFactory<import1.ExistingProviderComponent>('existing-provider', viewFactory_ExistingProviderComponentHost0, _ExistingProviderComponentMetadata);
const List<dynamic> styles$ValueProviderComponent = const [];

class ViewValueProviderComponent0 extends AppView<import1.ValueProviderComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewValueProviderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('value-provider');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ValueProviderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ValueProviderComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ValueProviderComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ValueProviderComponent> viewFactory_ValueProviderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewValueProviderComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ValueProviderComponentHost = const [];

class _ViewValueProviderComponentHost0 extends AppView<dynamic> {
  ViewValueProviderComponent0 _compView_0;
  import1.SilentLogger _Logger_0_5;
  import1.ValueProviderComponent _ValueProviderComponent_0_6;
  _ViewValueProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewValueProviderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = const import1.SilentLogger();
    _ValueProviderComponent_0_6 = new import1.ValueProviderComponent(_Logger_0_5);
    _compView_0.create(_ValueProviderComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ValueProviderComponent>(0, this, rootEl, _ValueProviderComponent_0_6);
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

AppView viewFactory_ValueProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewValueProviderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ValueProviderComponent> ValueProviderComponentNgFactory = const ComponentFactory<import1.ValueProviderComponent>('value-provider', viewFactory_ValueProviderComponentHost0, _ValueProviderComponentMetadata);
const List<dynamic> styles$FactoryProviderComponent = const [];

class ViewFactoryProviderComponent0 extends AppView<import1.FactoryProviderComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewFactoryProviderComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('factory-provider');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$FactoryProviderComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.FactoryProviderComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.FactoryProviderComponent _ctx = ctx;
    final currVal_0 = import6.interpolate0(_ctx.logger);
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.FactoryProviderComponent> viewFactory_FactoryProviderComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewFactoryProviderComponent0(parentView, parentIndex);
}

const List<dynamic> styles$FactoryProviderComponentHost = const [];

class _ViewFactoryProviderComponentHost0 extends AppView<dynamic> {
  ViewFactoryProviderComponent0 _compView_0;
  import8.Logger _Logger_0_5;
  import9.UserService _UserService_0_6;
  dynamic _HeroService_0_7;
  import1.FactoryProviderComponent _FactoryProviderComponent_0_8;
  _ViewFactoryProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewFactoryProviderComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = new import8.Logger();
    _UserService_0_6 = new import9.UserService();
    _HeroService_0_7 = import10.heroServiceFactory(_Logger_0_5, _UserService_0_6);
    _FactoryProviderComponent_0_8 = new import1.FactoryProviderComponent(_Logger_0_5, _HeroService_0_7);
    _compView_0.create(_FactoryProviderComponent_0_8, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.FactoryProviderComponent>(0, this, rootEl, _FactoryProviderComponent_0_8);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (0 == nodeIndex))) {
      return _Logger_0_5;
    }
    if ((identical(token, import9.UserService) && (0 == nodeIndex))) {
      return _UserService_0_6;
    }
    if ((identical(token, import11.HeroService) && (0 == nodeIndex))) {
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

AppView viewFactory_FactoryProviderComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewFactoryProviderComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.FactoryProviderComponent> FactoryProviderComponentNgFactory = const ComponentFactory<import1.FactoryProviderComponent>('factory-provider', viewFactory_FactoryProviderComponentHost0, _FactoryProviderComponentMetadata);
const List<dynamic> styles$ValueProviderForTokenComponent = const [];

class ViewValueProviderForTokenComponent0 extends AppView<import1.ValueProviderForTokenComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewValueProviderForTokenComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('value-provider-for-token');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ValueProviderForTokenComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ValueProviderForTokenComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ValueProviderForTokenComponent _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ValueProviderForTokenComponent> viewFactory_ValueProviderForTokenComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewValueProviderForTokenComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ValueProviderForTokenComponentHost = const [];

class _ViewValueProviderForTokenComponentHost0 extends AppView<dynamic> {
  ViewValueProviderForTokenComponent0 _compView_0;
  String _app_title_0_5;
  import1.ValueProviderForTokenComponent _ValueProviderForTokenComponent_0_6;
  _ViewValueProviderForTokenComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewValueProviderForTokenComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _app_title_0_5 = 'Dependency Injection';
    _ValueProviderForTokenComponent_0_6 = new import1.ValueProviderForTokenComponent(_app_title_0_5);
    _compView_0.create(_ValueProviderForTokenComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ValueProviderForTokenComponent>(0, this, rootEl, _ValueProviderForTokenComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import13.OpaqueToken<String>('app.title')) && (0 == nodeIndex))) {
      return _app_title_0_5;
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

AppView viewFactory_ValueProviderForTokenComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewValueProviderForTokenComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ValueProviderForTokenComponent> ValueProviderForTokenComponentNgFactory = const ComponentFactory<import1.ValueProviderForTokenComponent>('value-provider-for-token', viewFactory_ValueProviderForTokenComponentHost0, _ValueProviderForTokenComponentMetadata);
const List<dynamic> styles$ValueProviderForMapComponent = const [];

class ViewValueProviderForMapComponent0 extends AppView<import1.ValueProviderForMapComponent> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewValueProviderForMapComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('value-provider-for-map');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$ValueProviderForMapComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.ValueProviderForMapComponent> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.ValueProviderForMapComponent _ctx = ctx;
    final currVal_0 = (_ctx.log ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.ValueProviderForMapComponent> viewFactory_ValueProviderForMapComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewValueProviderForMapComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ValueProviderForMapComponentHost = const [];

class _ViewValueProviderForMapComponentHost0 extends AppView<dynamic> {
  ViewValueProviderForMapComponent0 _compView_0;
  Map<dynamic, dynamic> _app_config_0_5;
  import1.ValueProviderForMapComponent _ValueProviderForMapComponent_0_6;
  _ViewValueProviderForMapComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewValueProviderForMapComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _app_config_0_5 = const {'apiEndpoint': 'api.heroes.com', 'title': 'Dependency Injection'};
    _ValueProviderForMapComponent_0_6 = new import1.ValueProviderForMapComponent(_app_config_0_5);
    _compView_0.create(_ValueProviderForMapComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.ValueProviderForMapComponent>(0, this, rootEl, _ValueProviderForMapComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import13.OpaqueToken<Map>('app.config')) && (0 == nodeIndex))) {
      return _app_config_0_5;
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

AppView viewFactory_ValueProviderForMapComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewValueProviderForMapComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.ValueProviderForMapComponent> ValueProviderForMapComponentNgFactory = const ComponentFactory<import1.ValueProviderForMapComponent>('value-provider-for-map', viewFactory_ValueProviderForMapComponentHost0, _ValueProviderForMapComponentMetadata);
const List<dynamic> styles$HeroService1 = const [];

class ViewHeroService10 extends AppView<import1.HeroService1> {
  import2.Text _text_0;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHeroService10(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('optional-injection');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroService1);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroService1> build() {
    final _rootEl = rootEl;
    final import2.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _text_0 = new import2.Text('');
    parentRenderNode.append(_text_0);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroService1 _ctx = ctx;
    final currVal_0 = (_ctx.message ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_0.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.HeroService1> viewFactory_HeroService10(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroService10(parentView, parentIndex);
}

const List<dynamic> styles$HeroService1Host = const [];

class _ViewHeroService1Host0 extends AppView<dynamic> {
  ViewHeroService10 _compView_0;
  Null _Logger_0_5;
  import1.HeroService1 _HeroService1_0_6;
  _ViewHeroService1Host0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroService10(this, 0);
    rootEl = _compView_0.rootEl;
    _Logger_0_5 = null;
    _HeroService1_0_6 = new import1.HeroService1(_Logger_0_5);
    _compView_0.create(_HeroService1_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroService1>(0, this, rootEl, _HeroService1_0_6);
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

AppView viewFactory_HeroService1Host0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroService1Host0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroService1> HeroService1NgFactory = const ComponentFactory<import1.HeroService1>('optional-injection', viewFactory_HeroService1Host0, _HeroService1Metadata);
const List<dynamic> styles$ProvidersComponent = const [];

class ViewProvidersComponent0 extends AppView<import1.ProvidersComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  ViewClassProviderComponent0 _compView_2;
  import8.Logger _Logger_2_5;
  import1.ClassProviderComponent _ClassProviderComponent_2_6;
  import2.Element _el_3;
  ViewClassProviderUseClassComponent0 _compView_3;
  import1.BetterLogger _Logger_3_5;
  import1.ClassProviderUseClassComponent _ClassProviderUseClassComponent_3_6;
  import2.Element _el_4;
  ViewServiceWithDepsComponent0 _compView_4;
  import9.UserService _UserService_4_5;
  import1.EvenBetterLogger _Logger_4_6;
  import1.ServiceWithDepsComponent _ServiceWithDepsComponent_4_7;
  import2.Element _el_5;
  ViewTwoNewLoggersComponent0 _compView_5;
  import1.NewLogger _NewLogger_5_5;
  import1.NewLogger _OldLogger_5_6;
  import1.TwoNewLoggersComponent _TwoNewLoggersComponent_5_7;
  import2.Element _el_6;
  ViewExistingProviderComponent0 _compView_6;
  import1.NewLogger _NewLogger_6_5;
  import1.NewLogger _OldLogger_6_6;
  import1.ExistingProviderComponent _ExistingProviderComponent_6_7;
  import2.Element _el_7;
  ViewValueProviderComponent0 _compView_7;
  import1.SilentLogger _Logger_7_5;
  import1.ValueProviderComponent _ValueProviderComponent_7_6;
  import2.Element _el_8;
  ViewFactoryProviderComponent0 _compView_8;
  import8.Logger _Logger_8_5;
  import9.UserService _UserService_8_6;
  dynamic _HeroService_8_7;
  import1.FactoryProviderComponent _FactoryProviderComponent_8_8;
  import2.Element _el_9;
  ViewValueProviderForTokenComponent0 _compView_9;
  String _app_title_9_5;
  import1.ValueProviderForTokenComponent _ValueProviderForTokenComponent_9_6;
  import2.Element _el_10;
  ViewValueProviderForMapComponent0 _compView_10;
  Map<dynamic, dynamic> _app_config_10_5;
  import1.ValueProviderForMapComponent _ValueProviderForMapComponent_10_6;
  import2.Element _el_11;
  ViewHeroService10 _compView_11;
  Null _Logger_11_5;
  import1.HeroService1 _HeroService1_11_6;
  static RenderComponentType _renderType;
  ViewProvidersComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    _compView_2 = new ViewClassProviderComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _Logger_2_5 = new import8.Logger();
    _ClassProviderComponent_2_6 = new import1.ClassProviderComponent(_Logger_2_5);
    _compView_2.create(_ClassProviderComponent_2_6, []);
    _compView_3 = new ViewClassProviderUseClassComponent0(this, 3);
    _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    _Logger_3_5 = new import1.BetterLogger();
    _ClassProviderUseClassComponent_3_6 = new import1.ClassProviderUseClassComponent(_Logger_3_5);
    _compView_3.create(_ClassProviderUseClassComponent_3_6, []);
    _compView_4 = new ViewServiceWithDepsComponent0(this, 4);
    _el_4 = _compView_4.rootEl;
    parentRenderNode.append(_el_4);
    _UserService_4_5 = new import9.UserService();
    _Logger_4_6 = new import1.EvenBetterLogger(_UserService_4_5);
    _ServiceWithDepsComponent_4_7 = new import1.ServiceWithDepsComponent(_Logger_4_6);
    _compView_4.create(_ServiceWithDepsComponent_4_7, []);
    _compView_5 = new ViewTwoNewLoggersComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    parentRenderNode.append(_el_5);
    _NewLogger_5_5 = new import1.NewLogger();
    _OldLogger_5_6 = new import1.NewLogger();
    _TwoNewLoggersComponent_5_7 = new import1.TwoNewLoggersComponent(_NewLogger_5_5, _OldLogger_5_6);
    _compView_5.create(_TwoNewLoggersComponent_5_7, []);
    _compView_6 = new ViewExistingProviderComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    parentRenderNode.append(_el_6);
    _NewLogger_6_5 = new import1.NewLogger();
    _OldLogger_6_6 = _NewLogger_6_5;
    _ExistingProviderComponent_6_7 = new import1.ExistingProviderComponent(_NewLogger_6_5, _OldLogger_6_6);
    _compView_6.create(_ExistingProviderComponent_6_7, []);
    _compView_7 = new ViewValueProviderComponent0(this, 7);
    _el_7 = _compView_7.rootEl;
    parentRenderNode.append(_el_7);
    _Logger_7_5 = const import1.SilentLogger();
    _ValueProviderComponent_7_6 = new import1.ValueProviderComponent(_Logger_7_5);
    _compView_7.create(_ValueProviderComponent_7_6, []);
    _compView_8 = new ViewFactoryProviderComponent0(this, 8);
    _el_8 = _compView_8.rootEl;
    parentRenderNode.append(_el_8);
    _Logger_8_5 = new import8.Logger();
    _UserService_8_6 = new import9.UserService();
    _HeroService_8_7 = import10.heroServiceFactory(_Logger_8_5, _UserService_8_6);
    _FactoryProviderComponent_8_8 = new import1.FactoryProviderComponent(_Logger_8_5, _HeroService_8_7);
    _compView_8.create(_FactoryProviderComponent_8_8, []);
    _compView_9 = new ViewValueProviderForTokenComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    parentRenderNode.append(_el_9);
    _app_title_9_5 = 'Dependency Injection';
    _ValueProviderForTokenComponent_9_6 = new import1.ValueProviderForTokenComponent(_app_title_9_5);
    _compView_9.create(_ValueProviderForTokenComponent_9_6, []);
    _compView_10 = new ViewValueProviderForMapComponent0(this, 10);
    _el_10 = _compView_10.rootEl;
    parentRenderNode.append(_el_10);
    _app_config_10_5 = const {'apiEndpoint': 'api.heroes.com', 'title': 'Dependency Injection'};
    _ValueProviderForMapComponent_10_6 = new import1.ValueProviderForMapComponent(_app_config_10_5);
    _compView_10.create(_ValueProviderForMapComponent_10_6, []);
    _compView_11 = new ViewHeroService10(this, 11);
    _el_11 = _compView_11.rootEl;
    parentRenderNode.append(_el_11);
    _Logger_11_5 = null;
    _HeroService1_11_6 = new import1.HeroService1(_Logger_11_5);
    _compView_11.create(_HeroService1_11_6, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.Logger) && (2 == nodeIndex))) {
      return _Logger_2_5;
    }
    if ((identical(token, import8.Logger) && (3 == nodeIndex))) {
      return _Logger_3_5;
    }
    if ((identical(token, import9.UserService) && (4 == nodeIndex))) {
      return _UserService_4_5;
    }
    if ((identical(token, import8.Logger) && (4 == nodeIndex))) {
      return _Logger_4_6;
    }
    if ((identical(token, import1.NewLogger) && (5 == nodeIndex))) {
      return _NewLogger_5_5;
    }
    if ((identical(token, import1.OldLogger) && (5 == nodeIndex))) {
      return _OldLogger_5_6;
    }
    if ((identical(token, import1.NewLogger) && (6 == nodeIndex))) {
      return _NewLogger_6_5;
    }
    if ((identical(token, import1.OldLogger) && (6 == nodeIndex))) {
      return _OldLogger_6_6;
    }
    if ((identical(token, import8.Logger) && (7 == nodeIndex))) {
      return _Logger_7_5;
    }
    if ((identical(token, import8.Logger) && (8 == nodeIndex))) {
      return _Logger_8_5;
    }
    if ((identical(token, import9.UserService) && (8 == nodeIndex))) {
      return _UserService_8_6;
    }
    if ((identical(token, import11.HeroService) && (8 == nodeIndex))) {
      return _HeroService_8_7;
    }
    if ((identical(token, const import13.OpaqueToken<String>('app.title')) && (9 == nodeIndex))) {
      return _app_title_9_5;
    }
    if ((identical(token, const import13.OpaqueToken<Map>('app.config')) && (10 == nodeIndex))) {
      return _app_config_10_5;
    }
    if ((identical(token, import8.Logger) && (11 == nodeIndex))) {
      return _Logger_11_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_2.detectChanges();
    _compView_3.detectChanges();
    _compView_4.detectChanges();
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    _compView_7.detectChanges();
    _compView_8.detectChanges();
    _compView_9.detectChanges();
    _compView_10.detectChanges();
    _compView_11.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
    _compView_3?.destroy();
    _compView_4?.destroy();
    _compView_5?.destroy();
    _compView_6?.destroy();
    _compView_7?.destroy();
    _compView_8?.destroy();
    _compView_9?.destroy();
    _compView_10?.destroy();
    _compView_11?.destroy();
  }
}

AppView<import1.ProvidersComponent> viewFactory_ProvidersComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewProvidersComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ProvidersComponentHost = const [];

class _ViewProvidersComponentHost0 extends AppView<dynamic> {
  ViewProvidersComponent0 _compView_0;
  import1.ProvidersComponent _ProvidersComponent_0_5;
  _ViewProvidersComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
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
const _ClassProviderComponentMetadata = const [];
const _ClassProviderUseClassComponentMetadata = const [];
const _ServiceWithDepsComponentMetadata = const [];
const _TwoNewLoggersComponentMetadata = const [];
const _ExistingProviderComponentMetadata = const [];
const _ValueProviderComponentMetadata = const [];
const _FactoryProviderComponentMetadata = const [];
const _ValueProviderForTokenComponentMetadata = const [];
const _ValueProviderForMapComponentMetadata = const [];
const _HeroService1Metadata = const [];
const _ProvidersComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ClassProviderComponent, ClassProviderComponentNgFactory);
  _ngRef.registerFactory(BetterLogger, () => new BetterLogger());
  _ngRef.registerComponent(ClassProviderUseClassComponent, ClassProviderUseClassComponentNgFactory);
  _ngRef.registerFactory(EvenBetterLogger, (_i1.UserService p0) => new EvenBetterLogger(p0));
  _ngRef.registerDependencies(EvenBetterLogger, const [
    const [_i1.UserService]
  ]);
  _ngRef.registerComponent(ServiceWithDepsComponent, ServiceWithDepsComponentNgFactory);
  _ngRef.registerFactory(NewLogger, () => new NewLogger());
  _ngRef.registerComponent(TwoNewLoggersComponent, TwoNewLoggersComponentNgFactory);
  _ngRef.registerComponent(ExistingProviderComponent, ExistingProviderComponentNgFactory);
  _ngRef.registerComponent(ValueProviderComponent, ValueProviderComponentNgFactory);
  _ngRef.registerComponent(FactoryProviderComponent, FactoryProviderComponentNgFactory);
  _ngRef.registerComponent(ValueProviderForTokenComponent, ValueProviderForTokenComponentNgFactory);
  _ngRef.registerComponent(ValueProviderForMapComponent, ValueProviderForMapComponentNgFactory);
  _ngRef.registerComponent(HeroService1, HeroService1NgFactory);
  _ngRef.registerComponent(ProvidersComponent, ProvidersComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
}
