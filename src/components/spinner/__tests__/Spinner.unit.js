import { mount } from '@vue/test-utils';
import { Spinner } from '../index';

describe('Spinner', () => {
  it('is a valid vue component', () => {
    expect(Spinner).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(mount(Spinner).element).toMatchSnapshot();
  });
});
