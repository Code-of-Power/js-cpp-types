import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float } from '../float';
import { Char } from '../int';

export class UnsignedShortInt extends AbstractIntType implements INumberType {
  static RANGE: [number, number] = [0, 65535];
  protected _range: [number, number] = UnsignedShortInt.RANGE;
  public _typeName = 'UnsignedShortInt';

  constructor(v?: number) {
    super(v);
    if (UnsignedShortInt.is(v)) {
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

  public toChar(): Char {
    return Char.createInst(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number) {
    return UnsignedShortInt.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number) {
    return UnsignedShortInt.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number) {
    return UnsignedShortInt.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number) {
    return UnsignedShortInt.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return UnsignedShortInt.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return UnsignedShortInt.createInst(this._value + 1);
  }

  public dec() {
    return UnsignedShortInt.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(value & UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public shiftRight(posCount: number) {
    return new UnsignedShortInt(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number) {
    const value = this._value & arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public binOr(arg: INumberType | number) {
    const value = this._value | arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public binNot() {
    return UnsignedShortInt.createInst(~this._value);
  }

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

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof UnsignedShortInt;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && !(arg instanceof UnsignedShortInt);
  }
}
