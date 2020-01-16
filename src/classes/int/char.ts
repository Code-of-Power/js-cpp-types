import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import { Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

export class Char extends AbstractIntType implements INumberType {
  /**
   * Range 0 - 255
   */
  static RANGE: [number, number] = [0x0, 0xff];

  /**
   * Emulate char C++ type. Size: 1 byte
   */
  constructor(v?: number) {
    super(v);
    if (Char.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this.typeName, this.typeName);
      } else {
        throw out_of_range(this.range, this.typeName, v);
      }
    }
  }
  /**
   * Return type name
   */
  get typeName() {
    return 'Char';
  }
  /**
   * Range 0 - 255
   */
  get range(): [number, number] {
    return [...Char.RANGE] as [number, number];
  }

  public static is(v: number) {
    return v >= Char.RANGE[0] && v <= Char.RANGE[1] && Number.isInteger(v);
  }

  public static createInst(value: number) {
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else if (value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(value);
    }
  }
  /**
   * Conversion to type ShortInt
   */
  public toShortInt(): ShortInt {
    return new ShortInt(this._value);
  }
  /**
   * Conversion to type UnsignedShortInt
   */
  public toUnsignedShortInt(): UnsignedShortInt {
    return new UnsignedShortInt(this._value);
  }
  /**
   * Conversion to type Int
   */
  public toInt(): Int {
    return new Int(this._value);
  }
  /**
   * Conversion to type UnsignedInt
   */
  public toUnsignedInt(): UnsignedInt {
    return new UnsignedInt(this._value);
  }
  /**
   * Conversion to type Float
   */
  public toFloat(): Float {
    return new Float(this._value);
  }
  /**
   * Conversion to type LongFloat
   */
  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---
  /**
   * Sum of current number and argument (+)
   * @param term number
   */
  public add(term: INumberType | number): Char {
    return Char.createInst(this._value + term.valueOf());
  }
  /**
   * Substract of current number and argument (-)
   * @param subtrahend number
   */
  public subtract(subtrahend: INumberType | number): Char {
    return Char.createInst(this._value - subtrahend.valueOf());
  }
  /**
   * Product of myltiply currnet number and argument (*)
   * @param multiplier number
   */
  public multiply(multiplier: INumberType | number) {
    return Char.createInst(this._value * multiplier.valueOf());
  }
  /**
   * Quotient of current value and argument (/)
   * @param devider number
   */
  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }
  /**
   * Raises the number to the power of the argument (**)
   * @param exponent number
   */
  public pow(exponent: INumberType | number): Char {
    return Char.createInst(this._value ** exponent.valueOf());
  }
  /**
   * Remainder of the division (%)
   * @param devider
   */
  public mod(devider: INumberType | number) {
    return Char.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---
  /**
   * Add 1 to current number (++)
   */
  public inc() {
    return Char.createInst(this._value + 1);
  }
  /**
   * Take away 1 from current number (--)
   */
  public dec() {
    return Char.createInst(this._value - 1);
  }

  // ---Shifts---
  /**
   * Bit shift to left (<<)
   * @param posCount number
   */
  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    if (value >= Char.RANGE[1]) {
      return new Char(value & Char.RANGE[1]);
    } else {
      return new Char(value);
    }
  }
  /**
   * Bit shift to right (>>)
   * @param posCount number
   */
  public shiftRight(posCount: number) {
    return new Char(this._value >> posCount);
  }

  // ---Binary---
  /**
   * Result of binary AND (&)
   * @param arg number
   */
  public binAnd(arg: INumberType | number) {
    return Char.createInst(this._value & arg.valueOf() & 0xff);
  }
  /**
   * Result of binary OR (|)
   * @param arg number
   */
  public binOr(arg: INumberType | number): Char {
    return Char.createInst(this._value | (arg.valueOf() & 0xff));
  }
  /**
   * Result of binary NOT (~)
   */
  public binNot() {
    return Char.createInst(~this._value & 0xff);
  }
  /**
   * Result of Exclusive OR (^)
   * @param arg number
   */
  public xor(arg: INumberType | number) {
    return Char.createInst(this._value ^ (arg.valueOf() & 0xff));
  }

  // ---Equality---
  /**
   * Return true if values is equal and argument type is Char
   * @param arg number
   */
  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof Char;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof Char);
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return Char.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return Char.createInst(this._value && arg.valueOf());
  }
}
