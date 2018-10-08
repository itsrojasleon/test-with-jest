describe('Common comparators', () => {
  const user = {
    name: 'Luis',
    lastName: 'Rojas'
  };
  const userTwo = {
    name: 'Luis',
    lastName: 'Rojas'
  };
  test('Equality of elements', () => {
    expect(user).toEqual(userTwo);
  });
  test('Inequality of elements', () => {
    expect(user).not.toEqual(userTwo);
  });
});
