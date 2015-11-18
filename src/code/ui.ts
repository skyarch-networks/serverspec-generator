/// <reference path="../../typings/bundle.d.ts" />

import ResourcePanel     from './resource-panel';
import ItPanel           from './it-panel';
import SelectableInput   from './selectable-input';
import ArgLi             from './arg_li';
import * as Info         from './serverspec_info';
import * as ASTInterface from './ast-interface';
import * as AST          from './ast';

// This is defined by rails in eruby.
declare const SERVERSPEC_INFO: Info.ServerspecInfo;


class VueMain extends Vue {
  private ast:  ASTInterface.Describe[];
  private info: Info.ServerspecInfo;

  private rubyCode:      string;

  constructor(ast: ASTInterface.Describe[], info: Info.ServerspecInfo) {
    this.ast  = ast;
    this.info = info;

    super({
      el: '#main',
      data: {
        ast: this.ast,
      },
      methods: {
        addDescribe:    this.addDescribe,
        removeDescribe: this.removeDescribe,
      },
      computed: {
        rubyCode:     this._rubyCode,
      },
      ready: () => { console.log(this); }
    });
  }


  // methods
  addDescribe(): void {
    this.ast.push({resourceType: "command", name: "NAME", body: []});
  }

  removeDescribe(desc: ASTInterface.Describe): void {
    (<any>this.ast).$remove(desc);
  }


  // Computeds

  _rubyCode(): string {
    const ast = new AST.Top(this.ast);
    return `require 'serverspec_helper'

${ast.to_ruby()}`;
  }
}

if (document.querySelector('#main')) {
  Vue.component("resource-panel", ResourcePanel);
  Vue.component("it-panel", ItPanel);
  Vue.component("selectable-input", SelectableInput);
  Vue.component("arg-li", ArgLi);
  const __ = new VueMain([], SERVERSPEC_INFO);
}
