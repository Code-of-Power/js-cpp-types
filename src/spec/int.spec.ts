import {
  Char,
  Float,
  Int,
  LongFloat,
  ShortInt,
  UnsignedInt,
  UnsignedShortInt,
} from '../';

describe('Test Int type', () => {
  // ---Mathematics---

  test('SUM (+)', () => {
    const a = (new Int(50) as unknown) as number;
    const b = (new Int(50) as unknown) as number;
    const summ = a + b;
    expect(summ).toBe(100);

    const int = new Int(100).add(new Int(50));
    expect(int.value).toBe(150);
  });

  test('SUBSTRACT (-)', () => {
    const int = new Int(100).subtract(new Int(50));
    expect(int.value).toBe(50);
  });

  test('MULTIPLY (*)', () => {
    const int = new Int(100).multiply(2);
    expect(int.value).toBe(200);
  });

  test('DEVIDE (/)', () => {
    const int = new Int(100).devide(2);
    expect(int).toBeInstanceOf(Float);
    expect(int.value).toBeCloseTo(50);
  });

  test('MOD (%)', () => {
    const char = new Int(5).mod(2);
    const res =
      ((new Int(5) as unknown) as number) % ((new Int(2) as unknown) as number);
    expect(char.value).toBe(5 % 2);
    expect(char).toBeInstanceOf(Int);
    expect(res).toBe(5 % 2);
  });

  test('POW (**)', () => {
    const int = new Int(4).pow(2);
    expect(int.value).toBe(16);
  });

  // ---Increments/Dicrements---

  test('INC (++)', () => {
    expect(new Int(100).inc().value).toBe(101);
    expect(new Int(Int.RANGE[1]).inc().value).toBe(Int.RANGE[1]);
  });

  test('DEC (--)', () => {
    expect(new Int(100).dec().value).toBe(99);
    expect(new Int(Int.RANGE[0]).dec().value).toBe(Int.RANGE[0]);
  });

  // ---Shifts---

  test('SHIFT (>>)', () => {
    expect(new Int(3).shiftRight(1).value).toBe(3 >> 1);
  });

  test('SHIFT (<<)', () => {
    expect(new Int(3).shiftLeft(1).value).toBe(3 << 1);
    expect(new Int(Int.RANGE[1]).shiftLeft(1).value).toBe(Int.RANGE[1] - 1);
  });

  // ---Binary---

  test('OR (|)', () => {
    const int = new Int(10).binOr(8);
    const or_res = 10 | 8;
    expect(int.value).toBe(or_res);
  });

  test('AND (&)', () => {
    const int = new Int(10).binAnd(8);
    const and_res = 10 & 8;
    expect(int.value).toBe(and_res);
  });

  test('NOT (~)', () => expect(new Int(5).binNot().value).toBe(~5));
  test('XOR (^)', () => expect(new Int(5).xor(1).value).toBe(5 ^ 1));

  // ---Logic---

  test('OR (||)', () => expect(new Int(10).or(new Int(5)).value).toBe(10));
  test('AND (&&)', () => expect(new Int(10).and(new Int(5)).value).toBe(5));
  test('NOT (!)', () => {
    expect(new Int(5).not()).toBe(false);
    expect(new Int(0).not()).toBe(true);
  });

  // ---Equality---

  // tslint:disable-next-line: triple-equals
  test('EQUAL (==)', () => expect(new Int(5).equal(5)).toBe(5 == 5));
  test('T EQUAL (===)', () => expect(new Int(5).tEqual(new Int(5))).toBe(true));
  test('NOT EQUAL (!=)', () => {});
  test('T NOT EQUAL', () => {});

  test('MORE (>)', () => {
    const result = new Int(10).more(15);
    expect(result).toBe(false);
  });

  test('MORE OR EQUAL (>=)', () => {
    const result = new Int(10).moreOrEqual(10);
    expect(result).toBe(true);
  });

  test('LESS (<)', () => {
    const result = new Int(10).less(5);
    expect(result).toBe(false);
  });

  test('LESS OR EQUAL (<=)', () => {
    const result = new Int(10).less(10);
    expect(result).toBe(result);
  });

  test('CONVERTATION', () => {
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
    expect(intNegative.toUnsignedShortInt().value).toBe(
      UnsignedShortInt.RANGE[0],
    );

    // To Float types
    expect(intPositive.toFloat()).toBeInstanceOf(Float);
    expect(intPositive.toLongFloat()).toBeInstanceOf(LongFloat);
  });

  // ---Ranges---

  test('RANGE: MIN', () => {
    expect(new Int(Int.RANGE[0]).value).toBe(Int.RANGE[0]);
    expect(() => new Int(Int.RANGE[0] - 1)).toThrow();
  });

  test('RANGE: MAX', () => {
    expect(new Int(Int.RANGE[1]).value).toBe(Int.RANGE[1]);
    expect(() => new Int(Int.RANGE[1] + 1)).toThrow();
  });
});
