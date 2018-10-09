import { fruits, colors } from '../arrays';

describe('Exists', () => {
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