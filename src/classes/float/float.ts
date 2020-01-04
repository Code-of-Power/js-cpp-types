import { out_of_range, type_mismatch } from '../../functions';

import { INumberType } from '../../interfaces';
import { AbstractFloatType } from '../abstract/abstract-float';

export class Float extends AbstractFloatType {
  static RANGE: [number, number] = [-2147483648, 2147483647];
  protected _range: [number, number] = Float.RANGE;
  public _typeName = 'Float';

  constructor(v?: number) {
    super(v);
    if (v >= this._range[0] && v < this._range[1]) {
      this._value = v;
    } else {
      throw out_of_range(this._range, this._typeName, v);
    }
  }

  get typeName() {
    return this._typeName;
  }

  public static is(v: number) {
    return v >= Float.RANGE[0] && v < Float.RANGE[1];
  }

  public add(term: INumberType | number): Float {
    const value = this._value + term.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else if (value < Float.RANGE[0]) {
      return new Float(Float.RANGE[0]);
    } else {
      return new Float(value);
    }
  }

  public subtract(subtrahend: INumberType | number): Float {
    const value = this._value - subtrahend.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else if (value < Float.RANGE[0]) {
      return new Float(Float.RANGE[0]);
    } else {
      return new Float(value);
    }
  }

  public multiply(multiplier: INumberType | number): Float {
    const value = this._value * multiplier.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else {
      return new Float(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Float {
    const value = this._value ** exponent.valueOf();
    if (value < Float.RANGE[0]) {
      return new Float(Float.RANGE[0]);
    } else if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else {
      return new Float(value);
    }
  }

  public and(arg: INumberType | number): Float {
    const value = this._value & arg.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else {
      return new Float(value);
    }
  }

  public or(arg: INumberType | number): Float {
    const value = this._value | arg.valueOf();
    if (value > Float.RANGE[1]) {
      return new Float(Float.RANGE[1]);
    } else {
      return new Float(value);
    }
  }
}
