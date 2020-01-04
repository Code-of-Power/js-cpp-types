import { Float } from '../classes/float';
import { UnsignedShortInt } from '../classes/int';

describe('Test UnsignedShortInt type', () => {
  test('Sum', () => {
    const a = (new UnsignedShortInt(50) as unknown) as number;
    const b = (new UnsignedShortInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const char = new UnsignedShortInt(100).add(new UnsignedShortInt(50));
    expect(char.value).toBe(150);
  });

  test('Substract method', () => {
    const char = new UnsignedShortInt(100).subtract(new UnsignedShortInt(50));
    expect(char.value).toBe(50);
  });

  test('Multiply method', () => {
    const char = new UnsignedShortInt(100).multiply(2);
    expect(char.value).toBe(200);
  });

  test('Devide method', () => {
    const unsigned_short_int = new UnsignedShortInt(100).devide(2);
    expect(unsigned_short_int).toBeInstanceOf(Float);
    expect(unsigned_short_int.value).toBeCloseTo(50);
  });

  test('Devide method is Float', () => {
    const char = new UnsignedShortInt(100).devide(2);
    const isFloat = char instanceof Float;
    expect(isFloat).toBe(true);
  });

  test('Pow method', () => {
    const char = new UnsignedShortInt(4).pow(2);
    expect(char.value).toBe(16);
  });

  test('Or method', () => {
    const char = new UnsignedShortInt(10).or(10);
  });

  test('And method', () => {
    const char = new UnsignedShortInt(10).and(10);
  });

  test('More method', () => {
    const result = new UnsignedShortInt(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new UnsignedShortInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new UnsignedShortInt(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new UnsignedShortInt(10).less(10);
    expect(result).toBe(result);
  });
});
