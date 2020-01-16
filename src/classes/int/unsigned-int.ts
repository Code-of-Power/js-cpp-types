import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float, LongFloat } from '../float';
import { Char, Int, ShortInt, UnsignedShortInt } from '../int';

export class UnsignedInt extends AbstractIntType implements INumberType {
  /**
   * Range 0 - 4294967295
   */
  static RANGE: [number, number] = [0, 4294967295];
  /**
   * Emulate unsigned int C++ type. Size: 4 byte
   */
  constructor(v: number) {
    super(v);
    if (UnsignedInt.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this.typeName, this.typeName);
      } else {
        throw out_of_range(this.range, this.typeName, v);
      }
    }
  }

  get typeName() {
    return 'UnsignedInt';
  }
  /**
   * Range 0 - 4294967295
   */
  get range(): [number, number] {
    return [...UnsignedInt.RANGE] as [number, number];
  }

  public static is(v: number) {
    return (
      v >= UnsignedInt.RANGE[0] &&
      v <= UnsignedInt.RANGE[1] &&
      Number.isInteger(v)
    );
  }

  public static createInst(value: number) {
    if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else if (value < UnsignedInt.RANGE[0]) {
      return new UnsignedInt(UnsignedInt.RANGE[0]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public toUnsignedShortInt(): UnsignedShortInt {
    if (this._value > UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(this._value);
    }
  }

  public toInt(): Int {
    return Int.createInst(this._value);
  }

  public toShortInt(): ShortInt {
    return ShortInt.createInst(this._value);
  }

  public toChar(): Char {
    return Char.createInst(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return UnsignedInt.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return UnsignedInt.createInst(this._value + 1);
  }

  public dec() {
    return UnsignedInt.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    let bin = this._value.toString(2);
    if (bin.length < 32) {
      const lostPosition = 32 - bin.length;
      let positions = '';
      for (let i = 0; i < lostPosition; i++) {
        positions += '0';
      }
      bin = `${positions}${bin}`;
    }
    const slice = bin.slice(posCount, bin.length);
    let a = '';
    for (let i = 0; i < posCount; i++) {
      a += '0';
    }
    return new UnsignedInt(Number(`0b${slice}${a}`));
  }

  public shiftRight(posCount: number) {
    return new UnsignedInt(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value & arg.valueOf());
  }

  public binOr(arg: INumberType | number): UnsignedInt {
    return UnsignedInt.createInst(this._value | arg.valueOf());
  }

  public binNot() {
    return UnsignedInt.createInst(~this._value);
  }

  public xor(arg: INumberType | number) {
    return UnsignedInt.createInst(this._value ^ arg.valueOf());
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return UnsignedInt.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return UnsignedInt.createInst(this._value && arg.valueOf());
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof UnsignedInt;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof UnsignedInt);
  }
}
