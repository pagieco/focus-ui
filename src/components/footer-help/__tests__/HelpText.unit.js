import { shallowMount } from '@vue/test-utils';
import { FooterHelp } from '../index';

describe('HelpText', () => {
  it('is a valid vue component', () => {
    expect(FooterHelp).toBeAComponent();
  });

  it('matches the snapshot', () => {
    expect(shallowMount(FooterHelp).element).toMatchSnapshot();
  });
});
