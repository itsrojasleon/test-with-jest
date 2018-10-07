import { add, subtract, multiply, divide } from '../maths';

describe('Mathematical calculations', () => {
  test('add', () => {
    expect(add(1,1)).toBe(2);
  });
  test('multiply', () => {
    expect(multiply(1,1)).toBe(1);
  });
  test('subtract', () => {
    expect(subtract(1,1)).toBe(0);
  });
  test('divide', () => {
    expect(divide(1,1)).toBe(1);
  });
});