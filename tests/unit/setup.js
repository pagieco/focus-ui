import Vue from 'vue';
import vueTestUtils from '@vue/test-utils';

Vue.config.productionTip = false;

global.mount = vueTestUtils.mount;
global.shallowMount = vueTestUtils.shallowMount;
global.createComponentMocks = ({ mocks, stubs }) => {
  const localVue = vueTestUtils.createLocalVue();
  const returnOptions = { localVue };

  returnOptions.stubs = stubs || {};
  returnOptions.mocks = mocks || {};

  return returnOptions;
};
