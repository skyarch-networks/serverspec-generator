/// <reference path="../../typings/bundle.d.ts" />

import * as Info         from './serverspec_info';
import * as ASTInterface from './ast-interface';
import * as AST          from './ast';
import * as Templates    from './templates';

import Vue = require('vue');

export default class VueMain extends Vue {
  private ast:  ASTInterface.Describe[];
  private info: Info.ServerspecInfo;

  private rubyCode:      string;

  constructor(ast: ASTInterface.Describe[], info: Info.ServerspecInfo) {
    this.ast  = ast;
    this.info = info;

    super({
      el: () => {return document.createElement("div"); },
      template: Templates['generator.html'],
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

