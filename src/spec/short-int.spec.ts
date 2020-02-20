import {
  Char,
  Float,
  Int,
  ShortInt,
  SignedChar,
  UnsignedInt,
  UnsignedShortInt,
} from '../';

describe('Test ShortInt type', () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const short_int = new ShortInt(100).add(new ShortInt(50));
    expect(short_int.value).toBe(150);
    const a = (new ShortInt(50) as unknown) as number;
    const b = (new ShortInt(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);
  });

  test('SUBSTRACT (-)', () => {
    const short_int = new ShortInt(100).subtract(new ShortInt(50));
    expect(short_int.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const short_int = new ShortInt(100).multiply(2);
    expect(short_int.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const short_int = new ShortInt(100).devide(2);
    expect(short_int).toBeInstanceOf(Float);
    expect(short_int.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const short_int = new ShortInt(5).mod(2);
    const res =
      ((new ShortInt(5) as unknown) as number) %
      ((new ShortInt(2) as unknown) as number);
    expect(short_int.value).toBe(5 % 2);
    expect(short_int).toBeInstanceOf(ShortInt);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => expect(new ShortInt(4).pow(2).value).toBe(16));

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new ShortInt(100).inc().value).toBe(101);
    expect(new ShortInt(ShortInt.RANGE[1]).inc().value).toBe(ShortInt.RANGE[1]);
  });

  test('DEC (--)', () => {
    expect(new ShortInt(100).dec().value).toBe(99);
    expect(new ShortInt(ShortInt.RANGE[0]).dec().value).toBe(ShortInt.RANGE[0]);
  });

  // ---Shifts---

  test('SHIFT (>>)', () =>
    expect(new ShortInt(3).shiftRight(1).value).toBe(3 >> 1)); // TODO

  test('SHIFT (<<)', () => {
    expect(new ShortInt(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new ShortInt(ShortInt.RANGE[1]).shiftLeft(1).value).toBe(
      ShortInt.RANGE[1] - 1,
    ); // TODO
  });

  // ---Binary---

  test('OR (|)', () => expect(new ShortInt(10).binOr(8).value).toBe(10 | 8)); // TODO
  test('AND (&)', () => expect(new ShortInt(10).binAnd(8).value).toBe(10 & 8)); // TODO
  test('NOT (~)', () => expect(new ShortInt(5).binNot().value).toBe(~5)); // TODO
  test('XOR (^)', () => expect(new ShortInt(5).xor(1).value).toBe(5 ^ 1)); // TODO

  // ---Logic---

  test('OR (||)', () =>
    expect(new ShortInt(10).or(new ShortInt(5)).value).toBe(10));
  test('AND (&&)', () =>
    expect(new ShortInt(10).and(new ShortInt(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new ShortInt(5).not()).toBe(false);
    expect(new ShortInt(0).not()).toBe(true);
  });

  // ---Equality---

  // tslint:disable-next-line: triple-equals
  test('EQUAL (==)', () => expect(new ShortInt(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () =>
    expect(new ShortInt(5).tEqual(new ShortInt(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {
    expect(new ShortInt(5).notEqual(new ShortInt(6))).toBe(true);
    expect(new ShortInt(5).notEqual(new ShortInt(5))).toBe(false);
    expect(new ShortInt(5).notEqual(new UnsignedInt(6))).toBe(true);
    expect(new ShortInt(5).notEqual(new UnsignedInt(5))).toBe(false);
  });
  test('T NOT EQUAL', () => {
    expect(new ShortInt(5).tNotEqual(new ShortInt(6))).toBe(true);
    expect(new ShortInt(5).tNotEqual(new UnsignedInt(6))).toBe(true);
    expect(new ShortInt(6).tNotEqual(new ShortInt(6))).toBe(false);
    expect(new ShortInt(6).tNotEqual(new UnsignedInt(6))).toBe(true);
  });

  test('MORE (>)', () => {
    const result = new ShortInt(10).more(15);
    expect(result).toBe(false);
  });

  test('MORE OR EQUAL (>=)', () => {
    const result = new ShortInt(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('LESS (<)', () => {
    const result = new ShortInt(10).less(5);
    expect(result).toBe(false);
  });

  test('LESS OR EQUAL (<=)', () => {
    const result = new ShortInt(10).less(10);
    expect(result).toBe(result);
  });

  // ---Convertations---

  test('CONVERTATION', () => {
    const val = 122;
    const short_int = new ShortInt(val);
    expect(short_int.toChar()).toBeInstanceOf(Char);
    expect(short_int.toChar().value).toBe(val);
    expect(short_int.toSignedChar()).toBeInstanceOf(SignedChar);
    expect(short_int.toSignedChar().value).toBe(val);
    expect(short_int.toInt()).toBeInstanceOf(Int);
    expect(short_int.toInt().value).toBe(val);
    expect(short_int.toUnsignedShortInt()).toBeInstanceOf(UnsignedShortInt);
    expect(short_int.toUnsignedShortInt().value).toBe(val);
    expect(short_int.toUnsignedInt()).toBeInstanceOf(UnsignedInt);
    expect(short_int.toUnsignedInt().value).toBe(val);
  });

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new ShortInt(ShortInt.RANGE[0]).value).toBe(ShortInt.RANGE[0]);
    expect(() => new ShortInt(ShortInt.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new ShortInt(ShortInt.RANGE[1]).value).toBe(ShortInt.RANGE[1]);
    expect(() => new ShortInt(ShortInt.RANGE[1] + 1)).toThrow();
  });
});
