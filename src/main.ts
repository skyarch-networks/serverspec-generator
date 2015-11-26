// For export modules

import ResourcePanel     from './code/resource-panel';
import ItPanel           from './code/it-panel';
import SelectableInput   from './code/selectable-input';
import ArgLi             from './code/arg_li';
import * as info         from './info';
import Vue = require('vue');

Vue.component("resource-panel", ResourcePanel);
Vue.component("it-panel", ItPanel);
Vue.component("selectable-input", SelectableInput);
Vue.component("arg-li", ArgLi);



import VueMain from './code/ui';

export const App = VueMain;
export const Info = info;
