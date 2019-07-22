import { shallowMount } from '@vue/test-utils';
import { DisplayText } from '../../index';

const shallowWrap = (propsData = {}) => shallowMount(DisplayText, { propsData });

describe('DisplayText', () => {
  it('is a valid vue component', () => {
    expect(DisplayText).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowWrap().element).toMatchSnapshot();
  });

  it('uses the element prop', () => {
    const wrapper = shallowWrap();

    expect(wrapper.is('h2')).toBeTruthy();

    wrapper.setProps({ element: 'p' });

    expect(wrapper.is('p')).toBeTruthy();
  });

  it('validates the element prop', () => {
    const prop = DisplayText.props.element;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('h1')).toBeTruthy();
    expect(prop.validator('h2')).toBeTruthy();
    expect(prop.validator('h3')).toBeTruthy();
    expect(prop.validator('h4')).toBeTruthy();
    expect(prop.validator('h5')).toBeTruthy();
    expect(prop.validator('h6')).toBeTruthy();
    expect(prop.validator('p')).toBeTruthy();
    expect(prop.validator('br')).toBeFalsy();
  });

  it('uses the size prop', () => {
    const wrapper = shallowWrap();

    expect(wrapper.classes('display-text--medium')).toBeTruthy();

    wrapper.setProps({ size: 'x-large' });

    expect(wrapper.classes('display-text--x-large')).toBeTruthy();
  });

  it('validates the size prop', () => {
    const prop = DisplayText.props.size;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('small')).toBeTruthy();
    expect(prop.validator('medium')).toBeTruthy();
    expect(prop.validator('large')).toBeTruthy();
    expect(prop.validator('x-large')).toBeTruthy();
    expect(prop.validator('massive')).toBeFalsy();
  });
});
