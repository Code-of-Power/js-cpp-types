import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float, LongFloat } from '../float';
import { Char, Int, ShortInt, UnsignedShortInt } from '../int';

export class UnsignedInt extends AbstractIntType implements INumberType {
  static RANGE: [number, number] = [0, 4294967295];
  protected _range: [number, number] = UnsignedInt.RANGE;
  public _typeName = 'UnsignedInt';

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
    return (
      v >= UnsignedInt.RANGE[0] &&
      v < UnsignedInt.RANGE[1] &&
      Number.isInteger(v)
    );
  }

  public toUnsignedShortInt(): UnsignedShortInt {
    if (this._value > UnsignedShortInt.RANGE[1]) {
      return new UnsignedShortInt(UnsignedShortInt.RANGE[1]);
    } else {
      return new UnsignedShortInt(this._value);
    }
  }

  public toInt(): Int {
    if (this._value > Int.RANGE[1]) {
      return new Int(Int.RANGE[1]);
    } else {
      return new Int(this._value);
    }
  }

  public toShortInt(): ShortInt {
    if (this._value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(this._value);
    }
  }

  public toChar(): Char {
    if (this._value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else if (this._value > Char.RANGE[1]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(this._value);
    }
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  public add(term: INumberType | number): UnsignedInt {
    const value = this._value + term.valueOf();
    if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else if (value < UnsignedInt.RANGE[0]) {
      return new UnsignedInt(UnsignedInt.RANGE[0]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public subtract(subtrahend: INumberType | number): UnsignedInt {
    const value = this._value - subtrahend.valueOf();
    if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else if (value < UnsignedInt.RANGE[0]) {
      return new UnsignedInt(UnsignedInt.RANGE[0]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public multiply(multiplier: INumberType | number): UnsignedInt {
    const value = this._value * multiplier.valueOf();
    if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): UnsignedInt {
    const value = this._value ** exponent.valueOf();
    if (value < UnsignedInt.RANGE[0]) {
      return new UnsignedInt(UnsignedInt.RANGE[0]);
    } else if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public and(arg: INumberType | number): UnsignedInt {
    const value = this._value & arg.valueOf();
    if (value > UnsignedInt.RANGE[1]) {
      return new UnsignedInt(UnsignedInt.RANGE[1]);
    } else {
      return new UnsignedInt(value);
    }
  }

  public or(arg: INumberType | number): Char {
    const value = this._value | arg.valueOf();
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else {
      return new Char(value);
    }
  }
}
