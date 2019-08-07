import { createLocalVue, mount } from '@vue/test-utils';
import PortalVue, { PortalTarget } from 'portal-vue';
import { Toast } from '../index';

jest.useFakeTimers();

const localVue = createLocalVue();
localVue.use(PortalVue);

describe('Toast', () => {
  it('is a valid vue component', () => {
    expect(Toast).toBeAComponent();
  });

  it('should match the snapshot', () => {
    const propsData = {
      content: 'Toast content',
      isVisible: true,
    };

    mount(Toast, { localVue, propsData });

    const wrapper = mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should set the correct content prop', () => {
    const propsData = {
      content: 'Toast content',
      isVisible: true,
    };

    mount(Toast, { localVue, propsData });

    const wrapper = mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    expect(wrapper.find('.toast__content').text()).toEqual(propsData.content);
  });

  it('sets a timer when the show method is called', () => {
    const propsData = {
      content: 'Toast content',
    };

    const toastWrapper = mount(Toast, { localVue, propsData });

    mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    toastWrapper.vm.show();

    expect(toastWrapper.vm.$data.visible).toBeTruthy();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 5000);

    jest.runAllTimers();

    expect(toastWrapper.vm.$data.visible).toBeFalsy();
  });

  it('closes the toast after the timeout', () => {
    const propsData = {
      content: 'Toast content',
    };

    const toastWrapper = mount(Toast, { localVue, propsData });

    mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    toastWrapper.vm.show();

    expect(toastWrapper.vm.$data.visible).toBeTruthy();

    jest.runAllTimers();

    expect(toastWrapper.vm.$data.visible).toBeFalsy();
  });

  it('destroys the component after it closes', () => {
    const propsData = {
      content: 'Toast content',
    };

    const toastWrapper = mount(Toast, {
      localVue,
      propsData,
    });

    const spy = jest.spyOn(toastWrapper.vm, '$destroy');

    mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    toastWrapper.vm.close();

    expect(spy).toHaveBeenCalled();
  });

  it('wont destroy the component after it closes when the destroyOnClose prop is set to false', () => {
    const propsData = {
      content: 'Toast content',
      destroyOnClose: false,
    };

    const toastWrapper = mount(Toast, {
      localVue,
      propsData,
    });

    const spy = jest.spyOn(toastWrapper.vm, '$destroy');

    mount(PortalTarget, {
      localVue,
      propsData: { name: 'toast' },
      slots: {
        default: Toast,
      },
    });

    toastWrapper.vm.close();

    expect(spy).not.toHaveBeenCalled();
  });
});
