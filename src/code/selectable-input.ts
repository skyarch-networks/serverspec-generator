/// <reference path="../../typings/bundle.d.ts" />

import * as Templates from './templates';
import Vue = require('vue');

export default Vue.extend({
  template: Templates['selectable_input.html'],
  el: () => {return document.createElement('div'); },
  data: () => {return {manual_check: false, id: _.uniqueId('selectable-input-id-')}; },
  props: {
    label: {
      type: String,
      required: true,
    },

    // ['be_hoge', 'be_fuga', ...]
    options: {
      type: Array,
      required: true,
    },

    // selected option
    selected: {
      type: String,
      twoWay: true,
      required: true,
    },
  },
  methods: {

  },
  computed: {
    manual: function () {
      return this.manual_check || this.force_manual;
    },
    force_manual: function () { return this.options.length === 0; },
  },
  ready: function() {
    if (!this.force_manual) {
      this.selected = this.options[0];
    }
    console.log(this);
  },
});
