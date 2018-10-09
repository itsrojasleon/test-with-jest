import { fruits, colors } from '../arrays';

describe('Exists fruit', () => {
  test('There a banana?', () => {
    expect(fruits).toContain('banana');
  });
  // test('There is no banana', () => {
  //   expect(fruits).not.toContain('banana');
  // });
  test('Size', () => {
    expect(fruits).toHaveLength(5);
  });
});

describe('Colors', () => {
  test('red', () => {
    expect(colors).toContain('red');
  });
});