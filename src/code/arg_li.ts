import * as Templates from './templates';
import Vue = require('vue');

export default Vue.extend({
  template: Templates.arg_li_html,
  el: () => {return document.createElement('div'); },
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
      twoWay: true,
    },
    use: {
      type: Boolean,
      required: false,
      default: null,
      twoWay: true,
    },
  },
  computed: {
    forceUse: function () { return this.use === null; },
    disabled: function () { return !(this.use || this.forceUse); }
  },
});
