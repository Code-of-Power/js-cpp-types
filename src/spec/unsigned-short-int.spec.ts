import { Float, UnsignedShortInt } from '../';

describe('Test UnsignedShortInt type', () => {
  test('Sum', () => {
    const a = (new UnsignedShortInt(50) as unknown) as number;
    const b = (new UnsignedShortInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[0]).value).toBe(
      UnsignedShortInt.RANGE[0],
    );
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[1]).value).toBe(
      UnsignedShortInt.RANGE[1],
    );
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[1] + 1)).toThrow();
  });

  test('Sum method', () => {
    const unsigned_short_int = new UnsignedShortInt(100).add(
      new UnsignedShortInt(50),
    );
    expect(unsigned_short_int.value).toBe(150);
  });

  test('Substract method', () => {
    const unsigned_short_int = new UnsignedShortInt(100).subtract(
      new UnsignedShortInt(50),
    );
    expect(unsigned_short_int.value).toBe(50);
  });

  test('Multiply method', () => {
    const unsigned_short_int = new UnsignedShortInt(100).multiply(2);
    expect(unsigned_short_int.value).toBe(200);
  });

  test('Devide method', () => {
    const unsigned_short_int = new UnsignedShortInt(100).devide(2);
    expect(unsigned_short_int).toBeInstanceOf(Float);
    expect(unsigned_short_int.value).toBeCloseTo(50);
  });

  test('Devide method is Float', () => {
    const unsigned_short_int = new UnsignedShortInt(100).devide(2);
    const isFloat = unsigned_short_int instanceof Float;
    expect(isFloat).toBe(true);
  });

  test('Pow method', () => {
    const unsigned_short_int = new UnsignedShortInt(4).pow(2);
    expect(unsigned_short_int.value).toBe(16);
  });

  test('Binary Or method', () => {
    const unsigned_short_int = new UnsignedShortInt(10).binOr(8);
    const or_res = 10 | 8;
    expect(unsigned_short_int.value).toBe(or_res);
  });

  test('Binary And method', () => {
    const unsigned_short_int = new UnsignedShortInt(10).binAnd(8);
    const and_res = 10 & 8;
    expect(unsigned_short_int.value).toBe(and_res);
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

  test('Inc method', () => {
    expect(new UnsignedShortInt(100).inc().value).toBe(101);
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[1]).inc().value).toBe(
      UnsignedShortInt.RANGE[1],
    );
  });

  test('Dec method', () => {
    expect(new UnsignedShortInt(100).dec().value).toBe(99);
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[0]).dec().value).toBe(
      UnsignedShortInt.RANGE[0],
    );
  });

  test('Shift right', () => {
    expect(new UnsignedShortInt(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('Shift left', () => {
    expect(new UnsignedShortInt(3).shiftLeft(1).value).toBe(3 << 1);
    expect(
      new UnsignedShortInt(UnsignedShortInt.RANGE[1]).shiftLeft(1).value,
    ).toBe(UnsignedShortInt.RANGE[1] - 1);
  });
});
