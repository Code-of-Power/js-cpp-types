import { Float, Int } from '../';

describe('Test Int type', () => {
  test('Sum', () => {
    const a = (new Int(50) as unknown) as number;
    const b = (new Int(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(() => new Int(Int.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(() => new Int(Int.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const int = new Int(100).add(new Int(50));
    expect(int.value).toBe(150);
  });

  test('Substract method', () => {
    const int = new Int(100).subtract(new Int(50));
    expect(int.value).toBe(50);
  });

  test('Multiply method', () => {
    const int = new Int(100).multiply(2);
    expect(int.value).toBe(200);
  });

  test('Devide method', () => {
    const int = new Int(100).devide(2);
    expect(int).toBeInstanceOf(Float);
    expect(int.value).toBeCloseTo(50);
  });

  test('Devide method is Float', () => {
    const int = new Int(100).devide(2);
    const isFloat = int instanceof Float;
    expect(isFloat).toBe(true);
  });

  test('Pow method', () => {
    const int = new Int(4).pow(2);
    expect(int.value).toBe(16);
  });

  test('Or method', () => {
    const int = new Int(10).or(10);
  });

  test('And method', () => {
    const int = new Int(10).and(10);
  });

  test('More method', () => {
    const result = new Int(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new Int(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new Int(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new Int(10).less(10);
    expect(result).toBe(result);
  });
});
