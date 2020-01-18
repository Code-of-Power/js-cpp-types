import {
  Char,
  Float,
  Int,
  ShortInt,
  SignedChar,
  UnsignedInt,
  UnsignedShortInt,
} from './..';

describe(`TEST 'SignedChar' TYPE`, () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const char = new SignedChar(100).add(new SignedChar(20));
    expect(char.value).toBe(120);
    // Test operator
    const term = (new SignedChar(5) as unknown) as number;
    const term2 = (new SignedChar(3) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBe(8);
  });

  test('SUBSTRACT (-)', () => {
    const char = new SignedChar(100).subtract(new SignedChar(50));
    expect(char.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const char = new SignedChar(50).multiply(2);
    expect(char.value).toBe(100);
  });

  test('DEVIDE (/)', () => {
    const char = new SignedChar(100).devide(2);
    expect(char).toBeInstanceOf(Float);
    expect(char.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new SignedChar(5).mod(2);
    const res =
      ((new SignedChar(5) as unknown) as number) %
      ((new SignedChar(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(SignedChar);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const char = new Char(4).pow(2);
    expect(char.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new SignedChar(100).inc().value).toBe(101);
    expect(new SignedChar(SignedChar.RANGE[1]).inc().value).toBe(
      SignedChar.RANGE[1],
    );
  });

  test('DEC (--)', () => {
    expect(new SignedChar(100).dec().value).toBe(99);
    expect(new SignedChar(SignedChar.RANGE[0]).dec().value).toBe(
      SignedChar.RANGE[0],
    );
  });

  // ---Shifts---

  test('SHIFT (>>)', () => {
    expect(new SignedChar(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('SHIFT (<<)', () => {
    expect(new SignedChar(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new SignedChar(SignedChar.RANGE[1]).shiftLeft(1).value).toBe(-128);
  });

  // ---Binary---

  test('OR (|)', () => {
    expect(new SignedChar(0b0111).binOr(0b11110000).value).toBe(-128);
  });
  test('AND (&)', () => {
    expect(new SignedChar(-128).binAnd(0b1111).value).toBe(0);
  });
  test('NOT (~)', () => {
    expect(new SignedChar(0b1111).binNot().value).toBe(-128);
  });
  test('XOR (^)', () => {
    expect(new SignedChar(0b0111).xor(0b1).value).toBe(0b110);
  });

  // ---Logic---

  test('OR (||)', () =>
    expect(new SignedChar(10).or(new SignedChar(5)).value).toBe(10));
  test('AND (&&)', () =>
    expect(new SignedChar(10).and(new SignedChar(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new SignedChar(5).not()).toBe(false);
    expect(new SignedChar(0).not()).toBe(true);
  });

  // ---Equality---

  // tslint:disable-next-line: triple-equals
  test('EQUAL (==)', () => expect(new SignedChar(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () =>
    expect(new SignedChar(5).tEqual(new SignedChar(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {
    expect(new SignedChar(5).notEqual(new SignedChar(6))).toBe(true);
    expect(new SignedChar(5).notEqual(new SignedChar(5))).toBe(false);
    expect(new SignedChar(5).notEqual(new UnsignedInt(6))).toBe(true);
    expect(new SignedChar(5).notEqual(new UnsignedInt(5))).toBe(false);
  });
  test('T NOT EQUAL (!==)', () => {
    expect(new SignedChar(5).tNotEqual(new SignedChar(6))).toBe(true);
    expect(new SignedChar(5).tNotEqual(new UnsignedInt(6))).toBe(true);
    expect(new SignedChar(6).tNotEqual(new SignedChar(6))).toBe(false);
    expect(new SignedChar(6).tNotEqual(new UnsignedInt(6))).toBe(true);
  });
  test('LESS (<)', () => expect(new SignedChar(10).less(5)).toBe(10 < 5));
  test('LESS OR EQUAL (<=)', () =>
    expect(new SignedChar(10).lessOrEqual(10)).toBe(10 <= 10));
  test('MORE (>)', () => expect(new SignedChar(10).more(15)).toBe(10 > 15));
  test('MORE OR EQUAL (>=)', () =>
    expect(new SignedChar(10).moreOrEqual(10)).toBe(10 >= 10));

  // ---Convertations---

  test('CONVERTATION', () => {
    const val = 122;
    const char = new SignedChar(val);
    expect(char.toInt()).toBeInstanceOf(Int);
    expect(char.toInt().value).toBe(val);
    expect(char.toShortInt()).toBeInstanceOf(ShortInt);
    expect(char.toShortInt().value).toBe(val);
    expect(char.toUnsignedInt()).toBeInstanceOf(UnsignedInt);
    expect(char.toUnsignedInt().value).toBe(val);
    expect(char.toUnsignedShortInt()).toBeInstanceOf(UnsignedShortInt);
    expect(char.toUnsignedShortInt().value).toBe(val);
  });

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new SignedChar(SignedChar.RANGE[0]).value).toBe(SignedChar.RANGE[0]);
    expect(() => new SignedChar(SignedChar.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new SignedChar(SignedChar.RANGE[1]).value).toBe(SignedChar.RANGE[1]);
    expect(() => new SignedChar(SignedChar.RANGE[1] + 1)).toThrow();
  });
});
