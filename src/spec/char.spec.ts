import {
  Char,
  Float,
  Int,
  ShortInt,
  UnsignedInt,
  UnsignedShortInt,
} from './..';

describe('Test Char type', () => {
  test('Sum', () => {
    const term = (new Char(5) as unknown) as number;
    const term2 = (new Char(3) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBe(8);
  });

  test('Minimal range', () => {
    expect(new Char(Char.RANGE[0]).value).toBe(Char.RANGE[0]);
    expect(() => new Char(Char.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(new Char(Char.RANGE[1]).value).toBe(Char.RANGE[1]);
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
    const char = new Char(4).pow(2);
    expect(char.value).toBe(16);
  });

  test('Binary Or method', () => {
    const char = new Char(10).binOr(8);
    const or_res = 10 | 8;
    expect(char.value).toBe(or_res);
  });

  test('Binary And method', () => {
    const char = new Char(10).binAnd(8);
    const and_res = 10 & 8;
    expect(char.value).toBe(and_res);
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

  test('Inc method', () => {
    expect(new Char(100).inc().value).toBe(101);
    expect(new Char(Char.RANGE[1]).inc().value).toBe(Char.RANGE[1]);
  });

  test('Dec method', () => {
    expect(new Char(100).dec().value).toBe(99);
    expect(new Char(Char.RANGE[0]).dec().value).toBe(Char.RANGE[0]);
  });

  test('Shift right', () => {
    expect(new Char(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('Shift left', () => {
    expect(new Char(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new Char(Char.RANGE[1]).shiftLeft(1).value).toBe(Char.RANGE[1] - 1);
  });

  test('Type conversion', () => {
    const val = 122;
    const char = new Char(val);
    expect(char.toInt()).toBeInstanceOf(Int);
    expect(char.toInt().value).toBe(val);
    expect(char.toShortInt()).toBeInstanceOf(ShortInt);
    expect(char.toShortInt().value).toBe(val);
    expect(char.toUnsignedInt()).toBeInstanceOf(UnsignedInt);
    expect(char.toUnsignedInt().value).toBe(val);
    expect(char.toUnsignedShortInt()).toBeInstanceOf(UnsignedShortInt);
    expect(char.toUnsignedShortInt().value).toBe(val);
  });
});
