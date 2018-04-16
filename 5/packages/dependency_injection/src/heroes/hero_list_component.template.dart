// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'hero_list_component.dart';
export 'hero_list_component.dart';
import 'package:angular/angular.dart';
import 'hero.dart';
import 'hero_service.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'hero.template.dart' as _ref0;
import 'hero_service.template.dart' as _ref1;
import 'package:angular/angular.template.dart' as _ref2;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_list_component.dart' as import1;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'hero.dart' as import11;
import 'hero_service.dart' as import12;

const List<dynamic> styles$HeroListComponent = const [];

class ViewHeroListComponent0 extends AppView<import1.HeroListComponent> {
  ViewContainer _appEl_0;
  import3.NgFor _NgFor_0_9;
  static RenderComponentType _renderType;
  ViewHeroListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import7.document.createElement('hero-list');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.None, styles$HeroListComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final _anchor_0 = createViewContainerAnchor();
    parentRenderNode.append(_anchor_0);
    _appEl_0 = new ViewContainer(0, null, this, _anchor_0);
    TemplateRef _TemplateRef_0_8 = new TemplateRef(_appEl_0, viewFactory_HeroListComponent1);
    _NgFor_0_9 = new import3.NgFor(_appEl_0, _TemplateRef_0_8);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import1.HeroListComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.heroes, null)) {
        (_NgFor_0_9.ngForOf = _ctx.heroes);
      }
    }
    _NgFor_0_9.ngDoCheck();
    _appEl_0.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_0?.destroyNestedViews();
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewHeroListComponent0(parentView, parentIndex);
}

class _ViewHeroListComponent1 extends AppView<import1.HeroListComponent> {
  import7.DivElement _el_0;
  import7.Text _text_1;
  import7.Text _text_3;
  import7.Text _text_5;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewHeroListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHeroListComponent0._renderType;
  }
  @override
  ComponentRef<import1.HeroListComponent> build() {
    var doc = import7.document;
    _el_0 = doc.createElement('div');
    _text_1 = new import7.Text('');
    _el_0.append(_text_1);
    import7.Text _text_2 = new import7.Text(' - ');
    _el_0.append(_text_2);
    _text_3 = new import7.Text('');
    _el_0.append(_text_3);
    import7.Text _text_4 = new import7.Text('\n      (');
    _el_0.append(_text_4);
    _text_5 = new import7.Text('');
    _el_0.append(_text_5);
    import7.Text _text_6 = new import7.Text(')');
    _el_0.append(_text_6);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import11.Hero local_hero = locals['\$implicit'];
    final currVal_0 = import8.interpolate0(local_hero.id);
    if (!identical(_expr_0, currVal_0)) {
      _text_1.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import8.interpolate0(local_hero.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import8.interpolate0((local_hero.isSecret ? 'secret' : 'public'));
    if (!identical(_expr_2, currVal_2)) {
      _text_5.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import1.HeroListComponent> viewFactory_HeroListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroListComponent1(parentView, parentIndex);
}

const List<dynamic> styles$HeroListComponentHost = const [];

class _ViewHeroListComponentHost0 extends AppView<dynamic> {
  ViewHeroListComponent0 _compView_0;
  import1.HeroListComponent _HeroListComponent_0_5;
  _ViewHeroListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHeroListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroListComponent_0_5 = new import1.HeroListComponent(this.injectorGet(import12.HeroService, viewData.parentIndex));
    _compView_0.create(_HeroListComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import1.HeroListComponent>(0, this, rootEl, _HeroListComponent_0_5);
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

AppView viewFactory_HeroListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewHeroListComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import1.HeroListComponent> HeroListComponentNgFactory = const ComponentFactory<import1.HeroListComponent>('hero-list', viewFactory_HeroListComponentHost0, _HeroListComponentMetadata);
const _HeroListComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroListComponent, HeroListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
