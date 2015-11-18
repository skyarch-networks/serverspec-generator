import ResourcePanel     from './code/resource-panel';
import ItPanel           from './code/it-panel';
import SelectableInput   from './code/selectable-input';
import ArgLi             from './code/arg_li';
import VueMain           from './code/ui';
import * as Info         from './info';

import * as $ from 'jquery';
(<any>window).jQuery = $;
(<any>window).$ = $;
import 'bootstrap';


import Vue = require('vue');

Vue.component("resource-panel", ResourcePanel);
Vue.component("it-panel", ItPanel);
Vue.component("selectable-input", SelectableInput);
Vue.component("arg-li", ArgLi);
const app = new VueMain([], Info.value);
console.log(app);

$(document).on('click', '#save-btn', () => {
  console.log(app.rubyCode);

  const file = new File([app.rubyCode], 'generated_spec.rb');
  const url = window.URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download', file.name);
  document.body.appendChild(a);
  a.click();
});

document.querySelector("#vue-main").appendChild(app.$el);
