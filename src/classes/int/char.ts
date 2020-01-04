import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import { Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

export class Char extends AbstractIntType implements INumberType {
  static RANGE: [number, number] = [0, 255];
  protected _range: [number, number] = Char.RANGE;
  _typeName = 'Char';

  constructor(v?: number) {
    super(v);
    if (Char.is(v)) {
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
    return v >= Char.RANGE[0] && v <= Char.RANGE[1] && Number.isInteger(v);
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

  public toUnsignedInt(): UnsignedInt {
    return new UnsignedInt(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  public add(term: INumberType | number): Char {
    const value = this._value + term.valueOf();
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else if (value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(value);
    }
  }

  public subtract(subtrahend: INumberType | number): Char {
    const value = this._value - subtrahend.valueOf();
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else if (value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(value);
    }
  }

  public multiply(multiplier: INumberType | number) {
    const value = this._value * multiplier.valueOf();
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else {
      return new Char(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Char {
    const value = this._value ** exponent.valueOf();
    if (value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else {
      return new Char(value);
    }
  }

  public and(arg: INumberType | number) {
    const value = this._value & arg.valueOf();
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else {
      return new Char(value);
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
