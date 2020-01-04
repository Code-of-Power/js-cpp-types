import { Float, LongFloat } from '../';

describe('Test LongFloat type', () => {
  test('Sum', () => {
    const term = (new LongFloat(5.6) as unknown) as number;
    const term2 = (new LongFloat(4.4) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBeCloseTo(10);
  });

  test('Minimal range', () => {
    // expect(new LongFloat(LongFloat.RANGE[0]).value).toBe(LongFloat.RANGE[0]);
    // expect(() => new LongFloat(LongFloat.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    // expect(new LongFloat(LongFloat.RANGE[1]).value).toBe(LongFloat.RANGE[1]);
    // expect(() => new LongFloat(LongFloat.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const long_float = new LongFloat(100).add(new LongFloat(50));
    expect(long_float.value).toBe(150);
  });

  test('Substract method', () => {
    const long_float = new LongFloat(100).subtract(new LongFloat(50));
    expect(long_float.value).toBe(50);
  });

  test('Multiply method', () => {
    const long_float = new LongFloat(100).multiply(2);
    expect(long_float.value).toBe(200);
  });

  test('Devide method', () => {
    const long_float = new LongFloat(100).devide(2);
    expect(long_float).toBeInstanceOf(Float);
    expect(long_float.value).toBeCloseTo(50);
  });

  test('Pow method', () => {
    const long_float = new LongFloat(4).pow(2);
    expect(long_float.value).toBe(16);
  });

  test('Or method', () => {
    const long_float = new LongFloat(10).or(8);
    const or_res = 10 | 8;
    expect(long_float.value).toBe(or_res);
  });

  test('And method', () => {
    const long_float = new LongFloat(10).and(8);
    const and_res = 10 & 8;
    expect(long_float.value).toBe(and_res);
  });

  test('More method', () => {
    const result = new LongFloat(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new LongFloat(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new LongFloat(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new LongFloat(10).less(10);
    expect(result).toBe(result);
  });
});
