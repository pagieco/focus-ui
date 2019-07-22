import { shallowMount } from '@vue/test-utils';
import Form, { EncTypes } from '../components/Form.vue';

const shallowWrap = (propsData = {}) => shallowMount(Form, { propsData });

describe('Form', () => {
  it('is a valid vue component', () => {
    expect(Form).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(Form).element).toMatchSnapshot();
  });

  it('uses the method prop', () => {
    const wrapper = shallowWrap({ method: 'post' });

    expect(wrapper.attributes('method')).toBe('post');
  });

  it('validates on the correct method prop', () => {
    const prop = Form.props.method;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('get')).toBeTruthy();
    expect(prop.validator('post')).toBeTruthy();
    expect(prop.validator('non-existing-method')).toBeFalsy();
  });

  it('uses the action prop', () => {
    const wrapper = shallowWrap({ action: 'post-url' });

    expect(wrapper.attributes('action')).toBe('post-url');
  });

  it('uses the accept-charset prop', () => {
    const wrapper = shallowWrap({ acceptCharset: 'utf-8' });

    expect(wrapper.attributes('accept-charset')).toBe('utf-8');
  });

  it('uses the auto-complete prop', () => {
    const wrapper = shallowWrap({ autoComplete: true });

    expect(wrapper.attributes('autocomplete')).toBe('on');
  });

  it('uses the enc-type prop', () => {
    const wrapper = shallowWrap({ encType: 'urlencoded' });

    expect(wrapper.attributes('enctype')).toBe(EncTypes.urlencoded);
  });

  it('validates on the correct enc-type prop', () => {
    const prop = Form.props.encType;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('urlencoded')).toBeTruthy();
    expect(prop.validator('multipart')).toBeTruthy();
    expect(prop.validator('plain')).toBeTruthy();
    expect(prop.validator('something-exotic')).toBeFalsy();
  });
});
