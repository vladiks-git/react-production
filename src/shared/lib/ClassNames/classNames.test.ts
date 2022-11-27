import { classNames } from './classNames';
describe('classNames', () => {
  test('with one argument', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('with additional classes', () => {
    expect(classNames('someClass', {}, ['class1 class2'])).toBe(
      'someClass class1 class2'
    );
  });
});
