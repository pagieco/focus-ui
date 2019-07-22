import { mount, shallowMount } from '@vue/test-utils';
import ConnectedField from '../components/ConnectedField.vue';
import { TextField } from '../../text-field';
import { Button } from '../../button';

describe('ConnectedField', () => {
  it('is a valid vue component', () => {
    mount(ConnectedField, {
      slots: {
        'connected-left': TextField,
        'connected-right': Button,
      },
    });
  });

  it('matches the snapshot', () => {
    expect(shallowMount(ConnectedField).element).toMatchSnapshot();
  });
});
