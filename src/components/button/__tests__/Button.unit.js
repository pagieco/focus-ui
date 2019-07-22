import { shallowMount } from '@vue/test-utils';
import { Spinner } from '../../spinner';
import { Button } from '../index';

const shallowWrap = propsData => shallowMount(Button, { propsData });

describe('Button', () => {
  it('is a valid vue component', () => {
    expect(Button).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(Button).element).toMatchSnapshot();
  });

  it('uses the ariaLabel prop', () => {
    const wrapper = shallowWrap({ ariaLabel: 'label' });

    expect(wrapper.attributes('aria-label')).toBe('label');
  });

  it('uses the ariaControls prop', () => {
    const wrapper = shallowWrap({ ariaControls: 'label' });

    expect(wrapper.attributes('aria-controls')).toBe('label');
  });

  it('uses the ariaExpanded prop', () => {
    const wrapper = shallowWrap({ ariaExpanded: true });

    expect(wrapper.attributes('aria-expanded')).toBe('true');
  });

  it('uses the id prop', () => {
    const wrapper = shallowWrap({ id: 'my-component-id' });

    expect(wrapper.attributes('id')).toBe('my-component-id');
  });

  it('uses the disabled prop', () => {
    const wrapper = shallowWrap({ disabled: true });

    expect(wrapper.classes()).toContain('button--disabled');
    expect(wrapper.attributes('disabled')).toBe('disabled');
    expect(wrapper.contains(Spinner)).toBeFalsy();
  });

  it('uses the external prop', () => {
    const wrapper = shallowWrap({ external: true, url: 'https://my-amazing.domain' });

    expect(wrapper.attributes('target')).toBe('_blank');
  });

  it('wont use the external prop when the button isnt an anchor', () => {
    const wrapper = shallowWrap({ external: true });

    expect(wrapper.attributes('target')).toBeUndefined();
  });

  it('uses the loading prop', () => {
    const wrapper = shallowWrap({ loading: true });

    expect(wrapper.classes()).toContain('button--disabled');
    expect(wrapper.attributes('disabled')).toBe('disabled');
    expect(wrapper.contains(Spinner)).toBeTruthy();
  });

  it('uses the primary prop', () => {
    const wrapper = shallowWrap({ primary: true });

    expect(wrapper.classes()).toContain('button--primary');
  });

  it('uses the danger prop', () => {
    const wrapper = shallowWrap({ danger: true });

    expect(wrapper.classes()).toContain('button--danger');
  });

  it('uses the minimal prop', () => {
    const wrapper = shallowWrap({ minimal: true });

    expect(wrapper.classes()).toContain('button--minimal');
  });

  it('uses the small prop', () => {
    const wrapper = shallowWrap({ small: true });

    expect(wrapper.classes()).toContain('button--small');
  });

  it('uses the submit prop', () => {
    const wrapper = shallowWrap({ submit: true });

    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('uses the url prop', () => {
    const url = 'https://my-amazing.domain';
    const wrapper = shallowWrap({ url });

    expect(wrapper.attributes('href')).toBe(url);
    expect(wrapper.html().charAt(1)).toBe('a');
  });
});
