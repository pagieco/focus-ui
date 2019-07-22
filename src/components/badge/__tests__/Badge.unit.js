import { mount, shallowMount } from '@vue/test-utils';
import {
  default as Badge,
  Size as BadgeSize,
  Status as BadgeStatus,
} from '../index';
import { VisuallyHidden } from '../../visually-hidden';

const shallowWrap = (propsData = {}) => shallowMount(Badge, { propsData });
const wrap = (propsData = {}) => mount(Badge, { propsData });

describe('Badge', () => {
  it('is a valid vue component', () => {
    expect(Badge).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(Badge).element).toMatchSnapshot();
  });

  it('uses the size prop', () => {
    const wrapper = shallowWrap({ size: BadgeSize.Small });

    expect(wrapper.classes('badge--size-small')).toBeTruthy();
  });

  it('validates the size prop', () => {
    const prop = Badge.props.size;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('small')).toBeTruthy();
    expect(prop.validator('medium')).toBeTruthy();
    expect(prop.validator('huge')).toBeFalsy();
  });

  it('uses the status prop', () => {
    const wrapper = shallowWrap({ status: BadgeStatus.Success });

    expect(wrapper.classes('badge--status-success')).toBeTruthy();
  });

  it('validates the status prop', () => {
    const prop = Badge.props.status;

    expect(prop.validator).toBeInstanceOf(Function);
    expect(prop.validator('success')).toBeTruthy();
    expect(prop.validator('info')).toBeTruthy();
    expect(prop.validator('attention')).toBeTruthy();
    expect(prop.validator('danger')).toBeFalsy();
  });

  it('renders the visually-hidden component when the status prop is given', () => {
    const wrapper = wrap({ status: BadgeStatus.Success });

    expect(wrapper.find(VisuallyHidden).exists()).toBeTruthy();
  });
});
