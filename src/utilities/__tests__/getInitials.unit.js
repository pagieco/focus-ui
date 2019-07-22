import { getInitials } from '../index';

describe('getInitials', () => {
  it('returns the fallback when the name isnt a string', () => {
    const initials = getInitials(100);

    expect(initials).toBe('?');
  });

  it('returns the fallback when the name is empty', () => {
    const initials = getInitials();

    expect(initials).toBe('?');
  });

  it('returns the correct initials', () => {
    const initials = getInitials('John  Doe');

    expect(initials).toBe('JD');
  });
});
