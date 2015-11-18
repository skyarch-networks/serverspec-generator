import ResourcePanel     from './code/resource-panel';
import ItPanel           from './code/it-panel';
import SelectableInput   from './code/selectable-input';
import ArgLi             from './code/arg_li';
import VueMain           from './code/ui';
import * as Info         from './code/serverspec_info';

import Vue = require('vue');


// This is defined by rails in eruby.
// XXX: replace
declare const SERVERSPEC_INFO: Info.ServerspecInfo;

Vue.component("resource-panel", ResourcePanel);
Vue.component("it-panel", ItPanel);
Vue.component("selectable-input", SelectableInput);
Vue.component("arg-li", ArgLi);
const app = new VueMain([], {});
console.log(app);

document.querySelector("#vue-main").appendChild(app.$el);
