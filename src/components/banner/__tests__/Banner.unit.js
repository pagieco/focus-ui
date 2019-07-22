import { shallowMount } from '@vue/test-utils';
import Banner, { Status } from '../components/Banner.vue';
import Heading from '../../heading/components/Heading.vue';
import PrimaryAction from '../components/PrimaryAction.vue';

const shallowWrap = propsData => shallowMount(Banner, { propsData });

describe('Banner', () => {
  it('is a valid vue component', () => {
    expect(Banner).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(Banner).element).toMatchSnapshot();
  });

  it('uses the primary-action prop', () => {
    const primaryAction = { content: 'Gaaf' };
    const wrapper = shallowWrap({ primaryAction });

    expect(wrapper.contains(PrimaryAction)).toBeTruthy();
  });

  it('uses the status prop', () => {
    const wrapper = shallowWrap({ status: Status.Info });

    expect(wrapper.classes('banner--status-info')).toBeTruthy();
  });

  it('validates the status prop', () => {
    const prop = Banner.props.status;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('success')).toBeTruthy();
    expect(prop.validator('info')).toBeTruthy();
    expect(prop.validator('warning')).toBeTruthy();
    expect(prop.validator('critical')).toBeTruthy();
    expect(prop.validator('dangerous')).toBeFalsy();
  });

  it('uses the title prop', () => {
    const title = 'Banner Title';
    const wrapper = shallowWrap({ title });

    expect(wrapper.find(Heading).text()).toBe(title);
  });

  it('generates the correct role attribute', () => {
    expect(shallowWrap({ status: Status.Success }).attributes('role')).toBe('status');
    expect(shallowWrap({ status: Status.Info }).attributes('role')).toBe('status');
    expect(shallowWrap({ status: Status.Warning }).attributes('role')).toBe('alert');
    expect(shallowWrap({ status: Status.Critical }).attributes('role')).toBe('alert');
  });

  it('triggers the dismiss event', () => {
    const wrapper = shallowWrap();

    wrapper.find('.banner__dismiss__button').trigger('click');

    expect(wrapper.emitted('dismiss')).not.toBeUndefined();
  });
});
