import { Char, Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

import { out_of_range } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractFloatType } from '../abstract/abstract-float';
import { LongFloat } from './long-float';

export class Float extends AbstractFloatType {
  static RANGE: [number, number] = [-2147483648, 2147483647];

  constructor(v?: number) {
    super(v);
    if (Float.is(v)) {
      this._value = v;
    } else {
      throw out_of_range(this.range, this.typeName, v);
    }
  }

  get typeName() {
    return 'Float';
  }

  get range(): [number, number] {
    return [...Float.RANGE] as [number, number];
  }

  public static is(v: number) {
    return v >= Float.RANGE[0] && v <= Float.RANGE[1];
  }

  public static createInst(value: number) {
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else if (value < Float.RANGE[0]) {
      return new Float(Float.RANGE[0]);
    } else {
      return new Float(value);
    }
  }
/*
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
*/
  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number): Float {
    return Float.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): Float {
    return Float.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number): Float {
    return Float.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Float {
    return Float.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return Float.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return Float.createInst(this._value + 1);
  }

  public dec() {
    return Float.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    return Float.createInst(this._value << posCount);
  }

  public shiftRight(posCount: number) {
    return new Float(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number): Float {
    return Float.createInst(this._value & arg.valueOf());
  }

  public binOr(arg: INumberType | number): Float {
    const value = this._value | arg.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else {
      return new Float(value);
    }
  }

  public binNot() {
    return Float.createInst(~this.value);
  }

  public xor(arg: INumberType | number) {
    return Float.createInst(this._value ^ arg.valueOf());
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof Float;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof Float);
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return Float.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return Float.createInst(this._value && arg.valueOf());
  }
}
