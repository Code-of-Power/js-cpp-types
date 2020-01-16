import { Float, UnsignedShortInt } from '../';

describe('Test UnsignedShortInt type', () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const unsigned_short_int = new UnsignedShortInt(100).add(
      new UnsignedShortInt(50),
    );
    expect(unsigned_short_int.value).toBe(150);
    const a = (new UnsignedShortInt(50) as unknown) as number;
    const b = (new UnsignedShortInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('SUBSTRACT (-)', () => {
    const unsigned_short_int = new UnsignedShortInt(100).subtract(
      new UnsignedShortInt(50),
    );
    expect(unsigned_short_int.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const unsigned_short_int = new UnsignedShortInt(100).multiply(2);
    expect(unsigned_short_int.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const unsigned_short_int = new UnsignedShortInt(100).devide(2);
    expect(unsigned_short_int).toBeInstanceOf(Float);
    expect(unsigned_short_int.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new UnsignedShortInt(5).mod(2);
    const res =
      ((new UnsignedShortInt(5) as unknown) as number) %
      ((new UnsignedShortInt(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(UnsignedShortInt);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const unsigned_short_int = new UnsignedShortInt(4).pow(2);
    expect(unsigned_short_int.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new UnsignedShortInt(100).inc().value).toBe(101);
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[1]).inc().value).toBe(
      UnsignedShortInt.RANGE[1],
    );
  });

  test('DEC (--)', () => {
    expect(new UnsignedShortInt(100).dec().value).toBe(99);
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[0]).dec().value).toBe(
      UnsignedShortInt.RANGE[0],
    );
  });

  // ---Shifts---

  test('SHIFT (>>)', () => {
    expect(new UnsignedShortInt(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('SHIFT (<<)', () => {
    expect(new UnsignedShortInt(3).shiftLeft(1).value).toBe(3 << 1);
    expect(
      new UnsignedShortInt(UnsignedShortInt.RANGE[1]).shiftLeft(1).value,
    ).toBe(UnsignedShortInt.RANGE[1] - 1);
  });

  // ---Binary---

  test('OR (|)', () => {
    const unsigned_short_int = new UnsignedShortInt(10).binOr(8);
    const or_res = 10 | 8;
    expect(unsigned_short_int.value).toBe(or_res);
  });

  test('AND (&)', () => {
    const unsigned_short_int = new UnsignedShortInt(10).binAnd(8);
    const and_res = 10 & 8;
    expect(unsigned_short_int.value).toBe(and_res);
  });
  test('NOT (~)', () =>
    expect(new UnsignedShortInt(0xed6f).binNot().value).toBe(0x1290));
  test('XOR (^)', () =>
    expect(new UnsignedShortInt(5).xor(1).value).toBe(5 ^ 1));

  // ---Logic---

  test('OR (||)', () =>
    expect(new UnsignedShortInt(10).or(new UnsignedShortInt(5)).value).toBe(
      10,
    ));
  test('AND (&&)', () =>
    expect(new UnsignedShortInt(10).and(new UnsignedShortInt(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new UnsignedShortInt(5).not()).toBe(false);
    expect(new UnsignedShortInt(0).not()).toBe(true);
  });

  // ---Equality---

  test('EQUAL (==)', () =>
    // tslint:disable-next-line: triple-equals
    expect(new UnsignedShortInt(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () =>
    expect(new UnsignedShortInt(5).tEqual(new UnsignedShortInt(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {
    // tslint:disable-next-line: triple-equals
    expect(new UnsignedShortInt(5).notEqual(6)).toBe(true);
    expect(new UnsignedShortInt(5).notEqual(5)).toBe(false);
  });
  test('T NOT EQUAL', () => {}); // TODO

  test('MORE (>)', () => {
    const result = new UnsignedShortInt(10).more(15);
    expect(result).toBe(false);
  });

  test('MORE OR EQUAL (>=)', () => {
    const result = new UnsignedShortInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('LESS (<)', () => {
    const result = new UnsignedShortInt(10).less(5);
    expect(result).toBe(false);
  });

  test('LESS OR EQUAL (<=)', () => {
    const result = new UnsignedShortInt(10).less(10);
    expect(result).toBe(result);
  });

  // ---Convertations---

  test('CONVERTATION', () => {}); // TODO

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[0]).value).toBe(
      UnsignedShortInt.RANGE[0],
    );
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new UnsignedShortInt(UnsignedShortInt.RANGE[1]).value).toBe(
      UnsignedShortInt.RANGE[1],
    );
    expect(() => new UnsignedShortInt(UnsignedShortInt.RANGE[1] + 1)).toThrow();
  });
});
