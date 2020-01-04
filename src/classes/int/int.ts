import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import { Char, ShortInt } from '../int';

export class Int extends AbstractIntType {
  static RANGE: [number, number] = [-2141483648, 2147483647];
  protected _range: [number, number] = Int.RANGE;
  public _typeName = 'Int';

  constructor(v: number) {
    super(v);
    const isInt = Number.isInteger(v);
    if (v >= this._range[0] && v < this._range[1] && isInt) {
      this._value = v;
    } else {
      if (isInt) {
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
    return v >= Int.RANGE[0] && v < Int.RANGE[1] && Number.isInteger(v);
  }

  public toChar(): Char {
    if (this._value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else if (this._value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else {
      return new Char(this._value);
    }
  }

  public toShortInt(): ShortInt {
    if (this._value < ShortInt.RANGE[0]) {
      return new ShortInt(ShortInt.RANGE[0]);
    } else if (this._value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(this._value);
    }
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  public add(term: INumberType | number): Int {
    const value = this._value + term.valueOf();
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else if (value < Int.RANGE[0]) {
      return new Int(Int.RANGE[0]);
    } else {
      return new Int(value);
    }
  }

  public subtract(subtrahend: INumberType | number): Int {
    const value = this._value - subtrahend.valueOf();
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else if (value < Int.RANGE[0]) {
      return new Int(Int.RANGE[0]);
    } else {
      return new Int(value);
    }
  }

  public multiply(multiplier: INumberType | number): Int {
    const value = this._value * multiplier.valueOf();
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else {
      return new Int(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Int {
    const value = this._value ** exponent.valueOf();
    if (value < Int.RANGE[0]) {
      return new Int(Int.RANGE[0]);
    } else if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else {
      return new Int(value);
    }
  }

  public and(arg: INumberType | number): Int {
    const value = this._value & arg.valueOf();
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else {
      return new Int(value);
    }
  }

  public or(arg: INumberType | number): Int {
    const value = this._value | arg.valueOf();
    if (value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else {
      return new Int(value);
    }
  }
}
