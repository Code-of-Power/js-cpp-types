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

  public toChar(): Char {
    if (this._value <= Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else if (this._value >= Char.RANGE[1]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(this._value);
    }
  }

  public add(term: INumberType | number) {
    const value = this._value + term.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else if (value <= UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public subtract(subtrahend: INumberType | number) {
    const value = this._value - subtrahend.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else if (value <= UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public multiply(multiplier: INumberType | number) {
    const value = this._value * multiplier.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number) {
    const value = this._value ** exponent.valueOf();
    if (value <= UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

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

  public and(arg: INumberType | number) {
    const value = this._value & arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public or(arg: INumberType | number) {
    const value = this._value | arg.valueOf();
    if (value >= UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public inc() {
    const value = this._value + 1;
    if (value > UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(value);
    }
  }

  public dec() {
    const value = this._value - 1;
    if (value < UnsignedShortInt.RANGE[0]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[0]);
    } else {
      return new UnsignedShortInt(value);
    }
  }
}
