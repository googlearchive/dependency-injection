// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'heroes_component.dart';
export 'heroes_component.dart';
import 'package:angular/angular.dart';
import 'hero_list_component.dart';
import 'hero_service_provider.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero_list_component.template.dart' as _ref0;
import 'hero_service_provider.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'heroes_component.dart' as import1;
import 'dart:html' as import2;
import 'hero_list_component.template.dart' as import3;
import 'hero_list_component.dart' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'hero_service.dart' as import10;
import 'hero_service_provider.dart' as import11;
import '../logger_service.dart' as import12;
import '../user_service.dart' as import13;

const List<dynamic> styles$HeroesComponent = const [];

class ViewHeroesComponent0 extends AppView<import1.HeroesComponent> {
  import2.Element _el_0;
  import2.Element _el_2;
  import3.ViewHeroListComponent0 _compView_2;
  import4.HeroListComponent _HeroListComponent_2_4;
  static RenderComponentType _renderType;
  ViewHeroesComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import2.document.createElement('my-heroes');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroesComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroesComponent> build() {
    final import2.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import2.document;
    _el_0 = createAndAppend(doc, 'h2', parentRenderNode);
    import2.Text _text_1 = new import2.Text('Heroes');
    _el_0.append(_text_1);
    _compView_2 = new import3.ViewHeroListComponent0(this, 2);
    _el_2 = _compView_2.rootEl;
    parentRenderNode.append(_el_2);
    _HeroListComponent_2_4 = new import4.HeroListComponent(parentView.injectorGet(import10.HeroService, viewData.parentIndex));
    _compView_2.create(_HeroListComponent_2_4, []);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.HeroListComponent) && (2 == nodeIndex))) {
      return _HeroListComponent_2_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_2.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_2?.destroy();
  }
}

AppView<import1.HeroesComponent> viewFactory_HeroesComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHeroesComponent0(parentView, parentIndex);
}

const List<dynamic> styles$HeroesComponentHost = const [];

class _ViewHeroesComponentHost0 extends AppView<dynamic> {
  ViewHeroesComponent0 _compView_0;
  import1.HeroesComponent _HeroesComponent_0_4;
  dynamic __HeroService_0_5;
  _ViewHeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  dynamic get _HeroService_0_5 {
    if ((this.__HeroService_0_5 == null)) {
      (__HeroService_0_5 = import11.heroServiceFactory(this.injectorGet(import12.Logger, this.viewData.parentIndex), this.injectorGet(import13.UserService, this.viewData.parentIndex)));
    }
    return this.__HeroService_0_5;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroesComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroesComponent_0_4 = new import1.HeroesComponent();
    _compView_0.create(_HeroesComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroesComponent>(0, this, rootEl, _HeroesComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import1.HeroesComponent) && (0 == nodeIndex))) {
      return _HeroesComponent_0_4;
    }
    if ((identical(token, import10.HeroService) && (0 == nodeIndex))) {
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

AppView viewFactory_HeroesComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHeroesComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroesComponent> HeroesComponentNgFactory = const ComponentFactory<import1.HeroesComponent>('my-heroes', viewFactory_HeroesComponentHost0, _HeroesComponentMetadata);
const _HeroesComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroesComponent, HeroesComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
