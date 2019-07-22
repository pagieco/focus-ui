import { filterClassList } from '../index';

describe('filterClassList', () => {
  it('filters undefined object keys', () => {
    const classList = [
      { undefined: 'a value' },
      'text-input',
    ];

    expect(filterClassList(classList).length).toBe(1);
    expect(filterClassList(classList)[0]).toMatch('text-input');
  });
});
