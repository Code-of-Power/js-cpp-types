import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float } from '../float';
import { Char } from '../int';

export class UnsignedShortInt extends AbstractIntType implements INumberType {
  /**
   * Range 0 - 65535
   */
  static RANGE: [number, number] = [0, 0xffff];
  /**
   * Emulate unsigned short C++ type. Size: 2 byte
   */
  constructor(v?: number) {
    super(v);
    if (UnsignedShortInt.is(v)) {
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
    return 'UnsignedShortInt';
  }
  /**
   * Range 0 - 65535
   */
  get range(): [number, number] {
    return [...UnsignedShortInt.RANGE] as [number, number];
  }

  public static is(v: number) {
    return (
      v >= UnsignedShortInt.RANGE[0] &&
      v <= UnsignedShortInt.RANGE[1] &&
      Number.isInteger(v)
    );
  }

  public static createInst(value: number) {
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else if (value <= UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else {
      return new UnsignedShortInt(value);
    }
  }
  /**
   * Conversion to type Char
   */
  public toChar(): Char {
    return Char.createInst(this._value);
  }

  // ---Mathematics---
  /**
   * Sum of current number and argument (+)
   * @param term number
   */
  public add(term: INumberType | number) {
    return UnsignedShortInt.createInst(this._value + term.valueOf());
  }
  /**
   * Substract of current number and argument (-)
   * @param subtrahend number
   */
  public subtract(subtrahend: INumberType | number) {
    return UnsignedShortInt.createInst(this._value - subtrahend.valueOf());
  }
  /**
   * Product of myltiply currnet number and argument (*)
   * @param multiplier number
   */
  public multiply(multiplier: INumberType | number) {
    return UnsignedShortInt.createInst(this._value * multiplier.valueOf());
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
  public pow(exponent: INumberType | number) {
    return UnsignedShortInt.createInst(this._value ** exponent.valueOf());
  }
  /**
   * Remainder of the division (%)
   * @param devider
   */
  public mod(devider: INumberType | number) {
    return UnsignedShortInt.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---
  /**
   * Add 1 to current number (++)
   */
  public inc() {
    return UnsignedShortInt.createInst(this._value + 1);
  }
  /**
   * Take away 1 from current number (--)
   */
  public dec() {
    return UnsignedShortInt.createInst(this._value - 1);
  }

  // ---Shifts---
  /**
   * Bit shift to left (<<)
   * @param posCount number
   */
  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(value & UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }
  /**
   * Bit shift to right (>>)
   * @param posCount number
   */
  public shiftRight(posCount: number) {
    return new UnsignedShortInt(this._value >> posCount);
  }

  // ---Binary---
  /**
   * Result of binary AND (&)
   * @param arg number
   */
  public binAnd(arg: INumberType | number) {
    const value = this._value & arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }
  /**
   * Result of binary OR (|)
   * @param arg number
   */
  public binOr(arg: INumberType | number) {
    const value = this._value | arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }
  /**
   * Result of binary NOT (~)
   */
  public binNot() {
    return UnsignedShortInt.createInst(~this._value & 0xffff);
  }
  /**
   * Result of Exclusive OR (^)
   * @param arg number
   */
  public xor(arg: INumberType | number) {
    return UnsignedShortInt.createInst(this._value ^ arg.valueOf());
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return UnsignedShortInt.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return UnsignedShortInt.createInst(this._value && arg.valueOf());
  }

  // ---Equality---
  /**
   * Return true if values is equal and argument type is Char
   * @param arg number
   */
  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof UnsignedShortInt;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof UnsignedShortInt);
  }
}
