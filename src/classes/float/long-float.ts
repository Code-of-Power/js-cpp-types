import { out_of_range } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractFloatType } from '../abstract/abstract-float';
import { Float } from './float';

export class LongFloat extends AbstractFloatType {
  static RANGE: [number, number] = [-9223372036854775808, 9223372036854775807];
  protected _range: [number, number] = LongFloat.RANGE;
  public _typeName = 'LongFloat';

  constructor(v?: number) {
    super(v);
    if (LongFloat.is(v)) {
      this._value = v;
    } else {
      throw out_of_range(this._range, this._typeName, v);
    }
  }

  get typeName() {
    return this._typeName;
  }

  public static is(v: number) {
    return v >= LongFloat.RANGE[0] && v <= LongFloat.RANGE[1];
  }

  public add(term: INumberType | number): LongFloat {
    const value = this._value + term.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else if (value < LongFloat.RANGE[0]) {
      return new LongFloat(LongFloat.RANGE[0]);
    } else {
      return new LongFloat(value);
    }
  }

  public subtract(subtrahend: INumberType | number): LongFloat {
    const value = this._value - subtrahend.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else if (value < LongFloat.RANGE[0]) {
      return new LongFloat(LongFloat.RANGE[0]);
    } else {
      return new LongFloat(value);
    }
  }

  public multiply(multiplier: INumberType | number): LongFloat {
    const value = this._value * multiplier.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): LongFloat {
    const value = this._value ** exponent.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    if (value >= LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public shiftRight(posCount: number) {
    return new LongFloat(this._value >> posCount);
  }

  public and(arg: INumberType | number): LongFloat {
    const value = this._value & arg.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public or(arg: INumberType | number): LongFloat {
    const value = this._value | arg.valueOf();
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public inc() {
    const value = this._value + 1;
    if (value > LongFloat.RANGE[1]) {
      return new LongFloat(LongFloat.RANGE[1]);
    } else {
      return new LongFloat(value);
    }
  }

  public dec() {
    const value = this._value - 1;
    if (value < LongFloat.RANGE[0]) {
      return new LongFloat(LongFloat.RANGE[0]);
    } else {
      return new LongFloat(value);
    }
  }
}
