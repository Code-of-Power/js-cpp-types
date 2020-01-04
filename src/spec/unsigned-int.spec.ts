import { Float } from '../classes/float';

import { UnsignedInt } from '../classes/int';

describe('Test UnsignedInt type', () => {
  test('Sum', () => {
    const a = (new UnsignedInt(50) as unknown) as number;
    const b = (new UnsignedInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(() => new UnsignedInt(UnsignedInt.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(() => new UnsignedInt(UnsignedInt.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const unsigned_int = new UnsignedInt(100).add(new UnsignedInt(50));
    expect(unsigned_int.value).toBe(150);
  });

  test('Substract method', () => {
    const unsigned_int = new UnsignedInt(100).subtract(new UnsignedInt(50));
    expect(unsigned_int.value).toBe(50);
  });

  test('Multiply method', () => {
    const unsigned_int = new UnsignedInt(100).multiply(2);
    expect(unsigned_int.value).toBe(200);
  });

  test('Devide method', () => {
    const unsigned_int = new UnsignedInt(100).devide(2);
    expect(unsigned_int).toBeInstanceOf(Float);
    expect(unsigned_int.value).toBeCloseTo(50);
  });

  test('Pow method', () => {
    const unsigned_int = new UnsignedInt(4).pow(2);
    expect(unsigned_int.value).toBe(16);
  });

  test('Or method', () => {
    const unsigned_int = new UnsignedInt(10).or(10);
  });

  test('And method', () => {
    const unsigned_int = new UnsignedInt(10).and(10);
  });

  test('More method', () => {
    const result = new UnsignedInt(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new UnsignedInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new UnsignedInt(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new UnsignedInt(10).less(10);
    expect(result).toBe(result);
  });
});
