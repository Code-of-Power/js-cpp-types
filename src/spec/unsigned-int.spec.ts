import { Char, Float, ShortInt, UnsignedInt, UnsignedShortInt } from '../';

describe('TEST UnsignedInt TYPE', () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const unsigned_int = new UnsignedInt(100).add(new UnsignedInt(50));
    expect(unsigned_int.value).toBe(150);
    const a = (new UnsignedInt(50) as unknown) as number;
    const b = (new UnsignedInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('SUBSTRACT (-)', () => {
    const unsigned_int = new UnsignedInt(100).subtract(new UnsignedInt(50));
    expect(unsigned_int.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const unsigned_int = new UnsignedInt(100).multiply(2);
    expect(unsigned_int.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const unsigned_int = new UnsignedInt(100).devide(2);
    expect(unsigned_int).toBeInstanceOf(Float);
    expect(unsigned_int.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new UnsignedInt(5).mod(2);
    const res =
      ((new UnsignedInt(5) as unknown) as number) %
      ((new UnsignedInt(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(UnsignedInt);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const unsigned_int = new UnsignedInt(4).pow(2);
    expect(unsigned_int.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new UnsignedInt(100).inc().value).toBe(101);
    expect(new UnsignedInt(UnsignedInt.RANGE[1]).inc().value).toBe(
      UnsignedInt.RANGE[1],
    );
  });

  test('DEC (--)', () => {
    expect(new UnsignedInt(100).dec().value).toBe(99);
    expect(new UnsignedInt(UnsignedInt.RANGE[0]).dec().value).toBe(
      UnsignedInt.RANGE[0],
    );
  });

  // ---Shifts---

  test('SHIFT (>>)', () => {
    expect(new UnsignedInt(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('SHIFT (<<)', () => {
    expect(new UnsignedInt(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new UnsignedInt(UnsignedInt.RANGE[1]).shiftLeft(1).value).toBe(
      UnsignedInt.RANGE[1] - 1,
    );
  });

  // ---Binary---

  test('OR (|)', () => {
    const unsigned_int = new UnsignedInt(10).binOr(8);
    const or_res = 10 | 8;
    expect(unsigned_int.value).toBe(or_res);
  });

  test('AND (&)', () => {
    const unsigned_int = new UnsignedInt(10).binAnd(8);
    const and_res = 10 & 8;
    expect(unsigned_int.value).toBe(and_res);
  });

  // ---Logic---

  test('OR (||)', () =>
    expect(new UnsignedInt(10).or(new UnsignedInt(5)).value).toBe(10));
  test('AND (&&)', () =>
    expect(new UnsignedInt(10).and(new UnsignedInt(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new UnsignedInt(5).not()).toBe(false);
    expect(new UnsignedInt(0).not()).toBe(true);
  });

  // ---Equality---

  // tslint:disable-next-line: triple-equals
  test('EQUAL (==)', () => expect(new UnsignedInt(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () =>
    expect(new UnsignedInt(5).tEqual(new UnsignedInt(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {});
  test('T NOT EQUAL', () => {});

  test('MORE (>)', () => {
    const result = new UnsignedInt(10).more(15);
    expect(result).toBe(false);
  });

  test('MORE OR EQUAL (>=)', () => {
    const result = new UnsignedInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('LESS (<)', () => {
    const result = new UnsignedInt(10).less(5);
    expect(result).toBe(false);
  });

  test('LESS OR EQUAL (<=)', () => {
    const result = new UnsignedInt(10).less(10);
    expect(result).toBe(result);
  });

  // ---Convertations---

  test('CONVERTATION', () => {
    const val = 512;
    const unsignedInt = new UnsignedInt(val);
    expect(unsignedInt.toChar()).toBeInstanceOf(Char);
    expect(unsignedInt.toChar().value).toBe(Char.RANGE[1]);
    expect(unsignedInt.toShortInt()).toBeInstanceOf(ShortInt);
    expect(unsignedInt.toShortInt().value).toBe(val);
    expect(unsignedInt.toUnsignedShortInt()).toBeInstanceOf(UnsignedShortInt);
    expect(unsignedInt.toUnsignedShortInt().value).toBe(val);
  });

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new UnsignedInt(UnsignedInt.RANGE[0]).value).toBe(
      UnsignedInt.RANGE[0],
    );
    expect(() => new UnsignedInt(UnsignedInt.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new UnsignedInt(UnsignedInt.RANGE[1]).value).toBe(
      UnsignedInt.RANGE[1],
    );
    expect(() => new UnsignedInt(UnsignedInt.RANGE[1] + 1)).toThrow();
  });
});
