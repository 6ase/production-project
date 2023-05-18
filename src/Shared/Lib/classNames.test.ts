import { describe } from 'node:test';
import { classNames } from './classNames';

describe('Тестирование classNames()', () => {
	test('Передаём только основной класс', () => {
		expect(classNames('class')).toBe('class ');
	});
	test('Передаём основной и доп. классы', () => {
		expect(classNames('class', {}, [ 'class2' ])).toBe('class class2 ');
	});
	test('Передаём основной, и доп. классы', () => {
		expect(classNames('class', { 'bool': true }, [ 'class2' ])).toBe('class class2 bool');
	});
});