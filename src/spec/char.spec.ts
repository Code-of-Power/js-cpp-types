import { Char, Float } from './../index';

describe('Test Char type', () => {
  test('Sum', () => {
    const term = (new Char(5) as unknown) as number;
    const term2 = (new Char(3) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBe(8);
  });

  test('Minimal range', () => {
    expect(() => new Char(Char.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(() => new Char(Char.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const char = new Char(100).add(new Char(50));
    expect(char.value).toBe(150);
  });

  test('Substract method', () => {
    const char = new Char(100).subtract(new Char(50));
    expect(char.value).toBe(50);
  });

  test('Multiply method', () => {
    const char = new Char(100).multiply(2);
    expect(char.value).toBe(200);
  });

  test('Devide method', () => {
    const char = new Char(100).devide(2);
    expect(char).toBeInstanceOf(Float);
    expect(char.value).toBeCloseTo(50);
  });

  test('Pow method', () => {
    const char  = new Char(4).pow(2);
    expect(char.value).toBe(16);
  });

  test('Or method', () => {
    const char = new Char(10).or(10);
  });

  test('And method', () => {
    const char = new Char(10).and(10);
  });

  test('More method', () => {
    const result = new Char(10).more(15);
    expect(result).toBe(false);
  });

  test('More or equal method', () => {
    const result = new Char(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('Less method', () => {
    const result = new Char(10).less(5);
    expect(result).toBe(false);
  });

  test('Less or equal', () => {
    const result = new Char(10).less(10);
    expect(result).toBe(result);
  });

});
