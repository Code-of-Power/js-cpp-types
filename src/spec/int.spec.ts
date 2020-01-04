import { Char, Float, Int, LongFloat, ShortInt, UnsignedInt, UnsignedShortInt } from '../';

describe('Test Int type', () => {
  test('Sum', () => {
    const a = (new Int(50) as unknown) as number;
    const b = (new Int(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('Minimal range', () => {
    expect(new Int(Int.RANGE[0]).value).toBe(Int.RANGE[0]);
    expect(() => new Int(Int.RANGE[0] - 1)).toThrow();
  });

  test('Maximum range', () => {
    expect(new Int(Int.RANGE[1]).value).toBe(Int.RANGE[1]);
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

  test('Pow method', () => {
    const int = new Int(4).pow(2);
    expect(int.value).toBe(16);
  });

  test('Or method', () => {
    const int = new Int(10).or(8);
    const or_res = 10 | 8;
    expect(int.value).toBe(or_res);
  });

  test('And method', () => {
    const int = new Int(10).and(8);
    const and_res = 10 & 8;
    expect(int.value).toBe(and_res);
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

  test('Type conversion', () => {
    const positiveVal = Int.RANGE[1];
    const negativeVal = Int.RANGE[0];
    const intPositive = new Int(positiveVal);
    const intNegative = new Int(negativeVal);
    // To Char
    expect(intPositive.toChar()).toBeInstanceOf(Char);
    expect(intPositive.toChar().value).toBe(Char.RANGE[1]);
    expect(intNegative.toChar().value).toBe(Char.RANGE[0]);
    // To ShortInt
    expect(intPositive.toShortInt()).toBeInstanceOf(ShortInt);
    expect(intPositive.toShortInt().value).toBe(ShortInt.RANGE[1]);
    expect(intNegative.toShortInt().value).toBe(ShortInt.RANGE[0]);
    // To UnsignedInt
    expect(intPositive.toUnsignedInt()).toBeInstanceOf(UnsignedInt);
    expect(intNegative.toUnsignedInt().value).toBe(UnsignedInt.RANGE[0]);

    // To UnsignedShortInt
    expect(intPositive.toUnsignedShortInt()).toBeInstanceOf(UnsignedShortInt);
    // expect(intNegative.toUnsignedShortInt().value).toBe(UnsignedShortInt.RANGE[0]);

    // To Float types
    expect(intPositive.toFloat()).toBeInstanceOf(Float);
    expect(intPositive.toLongFloat()).toBeInstanceOf(LongFloat);
  });
});
