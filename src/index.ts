// for example
import * as main from './main';

import * as $ from 'jquery';
(<any>window).jQuery = $;
(<any>window).$ = $;
import 'bootstrap';


import Vue = require('vue');

const app = new main.App([], main.Info.value);
console.log(app);

$(document).on('click', '#save-btn', () => {
  const file = new File([app.rubyCode], 'generated_spec.rb');
  const url = window.URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = url;
  a.setAttribute('download', file.name);
  document.body.appendChild(a);
  a.click();
});

document.querySelector("#vue-main").appendChild(app.$el);
