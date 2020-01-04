import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float, LongFloat } from '../float';
import { Char, Int } from '../int';

export class ShortInt extends AbstractIntType implements INumberType {
  static RANGE: [number, number] = [-32768, 32767];
  protected _range: [number, number] = ShortInt.RANGE;
  public _typeName = 'ShortInt';

  constructor(v: number) {
    super(v);
    if (ShortInt.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this._typeName, this._typeName);
      } else {
        throw out_of_range(ShortInt.RANGE, this._typeName, v);
      }
    }
  }

  get typeName() {
    return this._typeName;
  }

  public static is(v: number) {
    return (
      v >= ShortInt.RANGE[0] && v <= ShortInt.RANGE[1] && Number.isInteger(v)
    );
  }

  public toInt(): Int {
    return new Int(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
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

  public add(arg: INumberType | number): ShortInt {
    const value = this._value + arg.valueOf();
    if (value > Char.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }

  public subtract(subtrahend: INumberType | number) {
    const value = this._value - subtrahend.valueOf();
    if (value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else if (value < ShortInt.RANGE[0]) {
      return new ShortInt(Char.RANGE[0]);
    } else {
      return new ShortInt(value);
    }
  }

  public multiply(multiplier: INumberType | number) {
    const value = this._value * multiplier.valueOf();
    if (value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number) {
    const value = this._value ** exponent.valueOf();
    if (value < ShortInt.RANGE[0]) {
      return new ShortInt(ShortInt.RANGE[0]);
    } else if (value > Char.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }

  public and(arg: INumberType | number) {
    const value = this._value & arg.valueOf();
    if (value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }

  public or(arg: INumberType | number) {
    const value = this._value | arg.valueOf();
    if (value > ShortInt.RANGE[1]) {
      return new ShortInt(Char.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }
}
