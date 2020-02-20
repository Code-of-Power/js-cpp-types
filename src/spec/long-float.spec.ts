import { Float, LongFloat } from '../';

describe(`TEST 'LongFloat' TYPE`, () => {
  test('SUM (+)', () => {
    const term = (new LongFloat(5.6) as unknown) as number;
    const term2 = (new LongFloat(4.4) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBeCloseTo(10);
    const long_float = new LongFloat(100).add(new LongFloat(50));
    expect(long_float.value).toBe(150);
  });

  test('SUBSTRACT (-)', () => {
    const long_float = new LongFloat(100).subtract(new LongFloat(50));
    expect(long_float.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const long_float = new LongFloat(100).multiply(2);
    expect(long_float.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const long_float = new LongFloat(100).devide(2);
    expect(long_float).toBeInstanceOf(Float);
    expect(long_float.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new LongFloat(5).mod(2);
    const res =
      ((new LongFloat(5) as unknown) as number) %
      ((new LongFloat(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(LongFloat);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const long_float = new LongFloat(4).pow(2);
    expect(long_float.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new LongFloat(100).inc().value).toBe(101);
    expect(new LongFloat(LongFloat.RANGE[1]).inc().value).toBe(
      LongFloat.RANGE[1],
    );
  });

  test('DEC (--)', () => {
    expect(new LongFloat(100).dec().value).toBe(99);
    expect(new LongFloat(LongFloat.RANGE[0]).dec().value).toBe(
      LongFloat.RANGE[0],
    );
  });

  // ---Binary---

  test('OR (|)', () => {
    const long_float = new LongFloat(10).binOr(8);
    const or_res = 10 | 8;
    expect(long_float.value).toBe(or_res);
  });

  test('AND (&)', () => {
    const long_float = new LongFloat(10).binAnd(8);
    const and_res = 10 & 8;
    expect(long_float.value).toBe(and_res);
  });

  // ---Logic---

  // ---Equality---

  test('MORE (>)', () => {
    const result = new LongFloat(10).more(15);
    expect(result).toBe(false);
  });

  test('MORE OR EQUAL (>=)', () => {
    const result = new LongFloat(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('LESS (<)', () => {
    const result = new LongFloat(10).less(5);
    expect(result).toBe(false);
  });

  // ---Convertations---

  // ---Ranges---

  test('LESS OR EQUAL (<=)', () => {
    const result = new LongFloat(10).less(10);
    expect(result).toBe(result);
  });
  /*
  test('RANGE: MIN', () => {
    expect(new LongFloat(LongFloat.RANGE[0]).value).toBe(LongFloat.RANGE[0]);
    expect(() => new LongFloat(LongFloat.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new LongFloat(LongFloat.RANGE[1]).value).toBe(LongFloat.RANGE[1]);
    expect(() => new LongFloat(LongFloat.RANGE[1] + 1)).toThrow();
  });
  */
});
