import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Nulls', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  });
});
describe('Thruthy', () => {
  test('true', () => {
    expect(isTrue()).toBeTruthy();
  });
});
describe('Falsy', () => {
  test('false', () => {
    expect(isFalse()).toBeFalsy();
  });
});
describe('Undefined', () => {
  test('undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});