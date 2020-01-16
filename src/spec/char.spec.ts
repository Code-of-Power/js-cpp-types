import {
  Char,
  Float,
  Int,
  ShortInt,
  UnsignedInt,
  UnsignedShortInt,
} from './..';

describe(`TEST 'Char' TYPE`, () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const char = new Char(100).add(new Char(50));
    expect(char.value).toBe(150);
    // Test operator
    const term = (new Char(5) as unknown) as number;
    const term2 = (new Char(3) as unknown) as number;
    const summ = term + term2;
    expect(summ).toBe(8);
  });

  test('SUBSTRACT (-)', () => {
    const char = new Char(100).subtract(new Char(50));
    expect(char.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const char = new Char(100).multiply(2);
    expect(char.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const char = new Char(100).devide(2);
    expect(char).toBeInstanceOf(Float);
    expect(char.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new Char(5).mod(2);
    const res =
      ((new Char(5) as unknown) as number) %
      ((new Char(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(Char);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const char = new Char(4).pow(2);
    expect(char.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new Char(100).inc().value).toBe(101);
    expect(new Char(Char.RANGE[1]).inc().value).toBe(Char.RANGE[1]);
  });

  test('DEC (--)', () => {
    expect(new Char(100).dec().value).toBe(99);
    expect(new Char(Char.RANGE[0]).dec().value).toBe(Char.RANGE[0]);
  });

  // ---Shifts---

  test('SHIFT (>>)', () => {
    expect(new Char(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('SHIFT (<<)', () => {
    expect(new Char(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new Char(Char.RANGE[1]).shiftLeft(1).value).toBe(Char.RANGE[1] - 1);
  });

  // ---Binary---

  test('OR (|)', () =>
    expect(new Char(0b10110111).binOr(0b101).value).toBe(0b10110111));
  test('AND (&)', () =>
    expect(new Char(0b10110111).binAnd(0b101).value).toBe(0b101));
  test('NOT (~)', () =>
    expect(new Char(0b10110111).binNot().value).toBe(0b01001000));
  test('XOR (^)', () =>
    expect(new Char(0b10110111).xor(0b1).value).toBe(0b10110110));

  // ---Logic---

  test('OR (||)', () => expect(new Char(10).or(new Char(5)).value).toBe(10));
  test('AND (&&)', () => expect(new Char(10).and(new Char(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new Char(5).not()).toBe(false);
    expect(new Char(0).not()).toBe(true);
  });

  // ---Equality---

  // tslint:disable-next-line: triple-equals
  test('EQUAL (==)', () => expect(new Char(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () =>
    expect(new Char(5).tEqual(new Char(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {}); // TODO
  test('T NOT EQUAL', () => {}); // TODO
  test('LESS (<)', () => expect(new Char(10).less(5)).toBe(10 < 5));
  test('LESS OR EQUAL (<=)', () =>
    expect(new Char(10).lessOrEqual(10)).toBe(10 <= 10));
  test('MORE (>)', () => expect(new Char(10).more(15)).toBe(10 > 15));
  test('MORE OR EQUAL (>=)', () =>
    expect(new Char(10).moreOrEqual(10)).toBe(10 >= 10));

  // ---Convertations---

  test('CONVERTATION', () => {
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

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new Char(Char.RANGE[0]).value).toBe(Char.RANGE[0]);
    expect(() => new Char(Char.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new Char(Char.RANGE[1]).value).toBe(Char.RANGE[1]);
    expect(() => new Char(Char.RANGE[1] + 1)).toThrow();
  });
});
