import { Char, Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

import { out_of_range } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractFloatType } from '../abstract/abstract-float';
import { Float } from './float';

export class LongFloat extends AbstractFloatType {
  static RANGE: [number, number] = [-9223372036854775808, 9223372036854775807];

  constructor(v?: number) {
    super(v);
    if (LongFloat.is(v)) {
      this._value = v;
    } else {
      throw out_of_range(this.range, this.typeName, v);
    }
  }

  get typeName() {
    return 'LongFloat';
  }

  get range(): [number, number] {
    return [...LongFloat.RANGE] as [number, number];
  }

  public static is(v: number) {
    return v >= LongFloat.RANGE[0] && v <= LongFloat.RANGE[1];
  }

  public static createInst(value: number) {
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else if (value < LongFloat.RANGE[0]) {
      return new LongFloat(LongFloat.RANGE[0]);
    } else {
      return new LongFloat(value);
    }
  }

  public toChar(): Char {
    return new Char(this._value);
  }

  public toShortInt(): ShortInt {
    return new ShortInt(this._value);
  }

  public toUnsignedShortInt(): UnsignedShortInt {
    return new UnsignedShortInt(this._value);
  }

  public toInt(): Int {
    return new Int(this._value);
  }

  public toUnsignedInt() {
    return new UnsignedInt(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number): LongFloat {
    return LongFloat.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): LongFloat {
    return LongFloat.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number): LongFloat {
    return LongFloat.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): LongFloat {
    return LongFloat.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return LongFloat.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    const value = this._value + 1;
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public dec() {
    const value = this._value - 1;
    if (value < LongFloat.RANGE[0]) {
      return new LongFloat(LongFloat.RANGE[0]);
    } else {
      return new LongFloat(value);
    }
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    return LongFloat.createInst(this._value << posCount);
  }

  public shiftRight(posCount: number) {
    return new LongFloat(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number): LongFloat {
    const value = this._value & arg.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public binOr(arg: INumberType | number): LongFloat {
    const value = this._value | arg.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public binNot() {
    return LongFloat.createInst(~this.value);
  }

  public xor(arg: INumberType | number) {
    return LongFloat.createInst(this._value ^ arg.valueOf());
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof LongFloat;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof LongFloat);
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return LongFloat.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return LongFloat.createInst(this._value && arg.valueOf());
  }
}
