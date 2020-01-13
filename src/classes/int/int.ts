import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import { Char, ShortInt } from '../int';
import { UnsignedInt } from './unsigned-int';
import { UnsignedShortInt } from './unsigned-short-int';

export class Int extends AbstractIntType {
  static RANGE: [number, number] = [-2141483648, 2147483647];
  protected _range: [number, number] = Int.RANGE;
  public _typeName = 'Int';

  constructor(v: number) {
    super(v);
    if (Int.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this._typeName, this._typeName);
      } else {
        throw out_of_range(this._range, this._typeName, v);
      }
    }
  }

  get typeName() {
    return this._typeName;
  }

  public static createInst(value: number) {
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else if (value < Int.RANGE[0]) {
      return new Int(Int.RANGE[0]);
    } else {
      return new Int(value);
    }
  }

  public static is(v: number) {
    return v >= Int.RANGE[0] && v <= Int.RANGE[1] && Number.isInteger(v);
  }

  public toChar(): Char {
    return Char.createInst(this._value);
  }

  public toShortInt(): ShortInt {
    if (this._value <= ShortInt.RANGE[0]) {
      return new ShortInt(ShortInt.RANGE[0]);
    } else if (this._value >= ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(this._value);
    }
  }

  public toUnsignedInt(): UnsignedInt {
    if (this._value <= UnsignedInt.RANGE[0]) {
      return new UnsignedInt(UnsignedInt.RANGE[0]);
    } else {
      return new UnsignedInt(this._value);
    }
  }

  public toUnsignedShortInt(): UnsignedShortInt {
    if (this._value <= UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else if (this._value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(this._value);
    }
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number): Int {
    return Int.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): Int {
    return Int.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number): Int {
    return Int.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Int {
    return Int.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number): Int {
    return Int.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return Int.createInst(this._value + 1);
  }

  public dec() {
    return Int.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    return new Int(value & Int.RANGE[1]);
  }

  public shiftRight(posCount: number) {
    return new Int(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number): Int {
    return Int.createInst(this._value & arg.valueOf());
  }

  public binOr(arg: INumberType | number): Int {
    return Int.createInst(this._value | arg.valueOf());
  }

  public binNot(): Int {
    return Int.createInst(~this._value);
  }

  public xor(arg: INumberType | number) {
    return Int.createInst(this._value ^ arg.valueOf());
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return Int.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return Int.createInst(this._value && arg.valueOf());
  }

  // ---Equality---

  public equal(arg: INumberType | number) {
    return this._value === arg.valueOf();
  }

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof Int;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof Int);
  }
}
