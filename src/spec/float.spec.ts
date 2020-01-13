import { Float } from '../';

describe('Test Float type', () => {
  test('Sum', () => {
    const term = (new Float(5.6) as unknown) as number;
    const term2 = (new Float(4.4) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBeCloseTo(10);
  });

  test('Minimal range', () => {
    expect(new Float(Float.RANGE[0]).value).toBe(Float.RANGE[0]);
    expect(() => new Float(Float.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(new Float(Float.RANGE[1]).value).toBe(Float.RANGE[1]);
    expect(() => new Float(Float.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const float = new Float(99.5).add(new Float(50.5));
    expect(float.value).toBeCloseTo(150);
  });

  test('Substract method', () => {
    const float = new Float(100.5).subtract(new Float(50.5));
    expect(float.value).toBeCloseTo(50);
  });

  test('Multiply method', () => {
    const float = new Float(99.5).multiply(2);
    expect(float.value).toBeCloseTo(199);
  });

  test('Devide method', () => {
    const float = new Float(100.6).devide(2);
    expect(float).toBeInstanceOf(Float);
    expect(float.value).toBeCloseTo(50.3);
  });

  test('Pow method', () => {
    const float = new Float(4.4).pow(2);
    expect(float.value).toBeCloseTo(19.36);
  });

  test('Binary Or method', () => {
    const float = new Float(10.1).binOr(8.2);
    const or_res = 10.1 | 8.2;
    expect(float.value).toBeCloseTo(or_res);
  });

  test('Binary And method', () => {
    const float = new Float(10.1).binAnd(8.2);
    const and_res = 10.1 & 8.2;
    expect(float.value).toBeCloseTo(and_res);
  });

  test('More method', () => {
    const result = new Float(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new Float(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new Float(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new Float(10).less(10);
    expect(result).toBe(result);
  });

  test('Inc method', () => {
    expect(new Float(100).inc().value).toBe(101);
    expect(new Float(Float.RANGE[1]).inc().value).toBe(Float.RANGE[1]);
  });

  test('Dec method', () => {
    expect(new Float(100).dec().value).toBe(99);
    expect(new Float(Float.RANGE[0]).dec().value).toBe(Float.RANGE[0]);
  });
});
