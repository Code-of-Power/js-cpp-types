import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float } from '../float';
import { Char } from '../int';

export class UnsignedShortInt extends AbstractIntType implements INumberType {
  static RANGE: [number, number] = [0, 65535];
  protected _range: [number, number] = UnsignedShortInt.RANGE;
  public _typeName = 'ShortInt';

  constructor(v?: number) {
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
      v >= UnsignedShortInt.RANGE[0] &&
      v < UnsignedShortInt.RANGE[1] &&
      Number.isInteger(v)
    );
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
