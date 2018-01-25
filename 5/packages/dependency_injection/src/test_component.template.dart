// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'test_component.dart';
export 'test_component.dart';
import 'package:angular/angular.dart';
import 'heroes/hero.dart';
import 'heroes/hero_list_component.dart';
import 'heroes/hero_service.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'heroes/hero.template.dart' as _ref0;
import 'heroes/hero_list_component.template.dart' as _ref1;
import 'heroes/hero_service.template.dart' as _ref2;
import 'package:angular/angular.template.dart' as _ref3;

import 'package:angular/src/core/linker/app_view.dart';
import 'test_component.dart' as import1;
import 'dart:html' as import2;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import6;
import 'package:angular/angular.dart';

const List<dynamic> styles$TestComponent = const [];

class ViewTestComponent0 extends AppView<import1.TestComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import2.Text _text_3;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewTestComponent0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-tests');
    _renderType ??= import6.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$TestComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.TestComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Tests');
    _el_0.append(_text_1);
    _el_2 = createAndAppend(doc, 'p', parentRenderNode);
    createAttr(_el_2, 'id', 'tests');
    _text_3 = new import2.Text('');
    _el_2.append(_text_3);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.TestComponent _ctx = ctx;
    final currVal_0 = import6.interpolate2('Tests ', _ctx.results['pass'], ': ', _ctx.results['message'], '');
    if (!identical(_expr_0, currVal_0)) {
      _text_3.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import1.TestComponent> viewFactory_TestComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewTestComponent0(parentView, parentIndex);
}

const List<dynamic> styles$TestComponentHost = const [];

class _ViewTestComponentHost0 extends AppView<dynamic> {
  ViewTestComponent0 _compView_0;
  import1.TestComponent _TestComponent_0_4;
  _ViewTestComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import4.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewTestComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _TestComponent_0_4 = new import1.TestComponent();
    _compView_0.create(_TestComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.TestComponent>(0, this, rootEl, _TestComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.TestComponent) && (0 == nodeIndex))) {
      return _TestComponent_0_4;
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

AppView viewFactory_TestComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewTestComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.TestComponent> TestComponentNgFactory = const ComponentFactory<import1.TestComponent>('my-tests', viewFactory_TestComponentHost0, _TestComponentMetadata);
const _TestComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    TestComponent,
    TestComponentNgFactory,
  );
}
