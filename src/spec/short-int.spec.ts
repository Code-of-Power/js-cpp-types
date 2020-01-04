import { Float } from '../classes/float';

import { ShortInt } from '../classes/int';

describe('Test ShortInt type', () => {
  test('Sum', () => {
    const a = (new ShortInt(50) as unknown) as number;
    const b = (new ShortInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(() => new ShortInt(ShortInt.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(() => new ShortInt(ShortInt.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const short_int = new ShortInt(100).add(new ShortInt(50));
    expect(short_int.value).toBe(150);
  });

  test('Substract method', () => {
    const short_int = new ShortInt(100).subtract(new ShortInt(50));
    expect(short_int.value).toBe(50);
  });

  test('Multiply method', () => {
    const short_int = new ShortInt(100).multiply(2);
    expect(short_int.value).toBe(200);
  });

  test('Devide method', () => {
    const short_int = new ShortInt(100).devide(2);
    expect(short_int).toBeInstanceOf(Float);
    expect(short_int.value).toBeCloseTo(50);
  });

  test('Pow method', () => {
    const short_int = new ShortInt(4).pow(2);
    expect(short_int.value).toBe(16);
  });

  test('Or method', () => {
    const short_int = new ShortInt(10).or(10);
  });

  test('And method', () => {
    const short_int = new ShortInt(10).and(10);
  });

  test('More method', () => {
    const result = new ShortInt(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new ShortInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new ShortInt(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new ShortInt(10).less(10);
    expect(result).toBe(result);
  });
});
