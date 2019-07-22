import { mount, shallowMount } from '@vue/test-utils';
import { TextField } from '../index';
import InputLabel from '../../input-label/components/InputLabel.vue';

const shallowWrap = (propsData = {}) => shallowMount(TextField, { propsData });
const wrap = (propsData = {}) => mount(TextField, { propsData });

describe('TextField', () => {
  it('is a valid vlue component', () => {
    expect(TextField).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowWrap({ label: 'text input' }).element).toMatchSnapshot();
  });

  it('uses the aria-controls prop', () => {
    const ariaControls = 'input-id';
    const wrapper = shallowWrap({ ariaControls, label: 'Text input' });

    expect(wrapper.find('input').attributes('aria-controls')).toBe(ariaControls);
  });

  it('uses the auto-focus prop', () => {
    const wrapper = shallowWrap({ label: 'Text input', autoFocus: true });

    expect(wrapper.find('input').attributes('autofocus')).toBe('autofocus');
  });

  it('uses the disabled prop', () => {
    const wrapper = shallowWrap({ label: 'Text input', disabled: true });

    expect(wrapper.find('input').attributes('disabled')).toBe('disabled');
    expect(wrapper.find('input').attributes('aria-disabled')).toBe('true');
  });

  it('uses the id prop', () => {
    const id = 'input-id';
    const wrapper = shallowWrap({ id, label: 'Text input' });

    expect(wrapper.find('input').attributes('id')).toBe(id);
  });

  it('uses the label prop', () => {
    const wrapper = shallowWrap({ label: 'Text input' });

    expect(wrapper.contains(InputLabel)).toBeTruthy();
  });

  it('uses the label-hidden prop', () => {
    const wrapper = wrap({ label: 'Text input', labelHidden: true });

    expect(wrapper.find(InputLabel).html()).toBeUndefined();
  });

  it('uses the label-for prop', () => {
    const labelFor = 'my-element';
    const wrapper = wrap({ label: 'Text input', labelFor });

    expect(wrapper.find(InputLabel).attributes('for')).toBe(labelFor);
  });

  it('uses the type prop', () => {
    const type = 'password';
    const wrapper = shallowWrap({ label: 'Text input', type });

    expect(wrapper.find('input').attributes('type')).toBe(type);
  });

  it('validates for the correct type prop', () => {
    const prop = TextField.props.type;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('email')).toBeTruthy();
    expect(prop.validator('number')).toBeTruthy();
    expect(prop.validator('password')).toBeTruthy();
    expect(prop.validator('search')).toBeTruthy();
    expect(prop.validator('tel')).toBeTruthy();
    expect(prop.validator('text')).toBeTruthy();
    expect(prop.validator('url')).toBeTruthy();
    expect(prop.validator('form')).toBeFalsy();
  });

  it('uses the show-character-count prop', () => {
    const wrapper = shallowWrap({ label: 'Text input', showCharacterCount: true });
    const el = wrapper.find('.text-input__char-count');

    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe('0/100');

    wrapper.setProps({ maxLength: 50 });

    expect(el.text()).toBe('0/50');
  });

  it('updates the character counter when inputting text', () => {
    const wrapper = shallowWrap({ label: 'Text input', showCharacterCount: true });
    const input = wrapper.find('input');

    input.element.value = 'Aaa';
    input.trigger('input');

    expect(wrapper.find('.text-input__char-count').text()).toBe('3/100');
  });

  it('wont set the character count if the show character counter prop is set to false', () => {
    const wrapper = shallowWrap({ label: 'Text input' });

    wrapper.vm.setCharacterCount(35);

    expect(wrapper.vm.characterCount).toBe(0);
  });

  it('will set the character count when the character counter prop is set to true', () => {
    const wrapper = shallowWrap({ label: 'Text input', showCharacterCount: true });

    wrapper.vm.setCharacterCount(79);

    expect(wrapper.vm.characterCount).toBe(79);
  });

  it('uses the max-length prop', () => {
    const maxLength = 20;
    const wrapper = shallowWrap({ maxLength, label: 'Text input' });

    expect(wrapper.find('input').attributes('maxlength')).toBe(`${maxLength}`);
  });
});
