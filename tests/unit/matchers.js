import { isPlainObject } from 'lodash';

const customMatchers = {};

customMatchers.toBeAComponent = (options) => {
  function isAComponent() {
    return isPlainObject(options) && typeof options.render === 'function';
  }

  if (isAComponent()) {
    return {
      message: () => `expected ${this.utils.printReceived(options)} not to be a Vue component`,
      pass: true,
    };
  }

  return {
    message: () => `expected ${this.utils.printReceived(options)} to be a valid Vue component, exported from a .vue file`,
    pass: false,
  };
};

global.expect.extend(customMatchers);
