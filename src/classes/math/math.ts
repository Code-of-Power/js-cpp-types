import { INumberType } from '../../interfaces';
import { Float } from '../float';
import { Char, Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

export class TypeMath {
  static E = new Float(2.718);
  static LN2 = new Float(0.693);
  static LN10 = new Float(2.303);
  static LOG10E = new Float(0.434);
  static PI = new Float(3.14159);

  private static createInst(x: INumberType, val: number) {
    if (x instanceof Char) {
      return new Char(val);
    }
    if (x instanceof Int) {
      return new Int(val);
    }
    if (x instanceof UnsignedInt) {
      return new UnsignedInt(val);
    }
    if (x instanceof ShortInt) {
      return new ShortInt(val);
    }
    if (x instanceof UnsignedShortInt) {
      return new UnsignedShortInt(val);
    }
  }

  static abs(x: INumberType) {
    const val = Math.abs(x.value);
    return TypeMath.createInst(x, val);
  }

  static acos(x: Float) {
    return new Float(Math.acos(x.value));
  }

  static acosh(x: INumberType) {
    return new Float(Math.acosh(x.value));
  }

  static asin(x: Float) {
    return new Float(Math.asin(x.value));
  }

  static asinh(x: INumberType) {
    return new Float(Math.asinh(x.value));
  }

  static atan(x: INumberType) {
    return new Float(Math.atan(x.value));
  }

  static atanh(x: INumberType) {
    return new Float(Math.atanh(x.value));
  }

  static atan2(x: INumberType, y: INumberType) {
    return new Float(Math.atan2(x.value, y.value));
  }

  static cbrt(x: INumberType) {
    return new Float(Math.cbrt(x.value));
  }

  static ceil(x: INumberType) {
    if (x instanceof Float) {
      const val = Math.ceil(x.value);
      return new Int(val);
    }
    // TODO: LongFloat
    return x;
  }

  static clz32(x: INumberType) {
    return new Char(Math.clz32(x.value));
  }

  static cos(x: INumberType) {
    return new Float(Math.cos(x.value));
  }

  static cosh(x: INumberType) {
    return new Float(Math.cosh(x.value));
  }

  static exp(x: INumberType) {
    return new Float(Math.exp(x.value));
  }

  static expm1(x: INumberType) {
    return new Float(Math.expm1(x.value));
  }

  static floor(x: INumberType) {
    if (x instanceof Float) {
      const val = Math.floor(x.value);
      return new Int(val);
    }
    // TODO: LongFloat
    return x;
  }
  // TODO
  static fround(x: INumberType) {
    return new Float(Math.fround(x.value));
  }

  static hypot(...arg: INumberType[]) {
    return new Float(Math.hypot(...arg.map(n => n.value)));
  }

  static imul(x: INumberType, y: INumberType) {
    return new Int(Math.imul(x.value, y.value));
  }

  static log(x: INumberType) {
    return new Float(Math.log(x.value));
  }

  static log1p(x: INumberType) {
    return new Float(Math.log1p(x.value));
  }

  static log10(x: INumberType) {
    return new Float(Math.log10(x.value));
  }

  static log2(x: INumberType) {
    return new Float(Math.log2(x.value));
  }

  static max(...arg: INumberType[]) {
    return new Float(Math.max(...arg.map(n => n.value)));
  }

  static min(...arg: INumberType[]) {
    return new Float(Math.min(...arg.map(n => n.value)));
  }

  static pow(x: INumberType, y: INumberType) {
    return new Int(Math.pow(x.value, y.value));
  }

  static random() {
    return new Float(Math.random());
  }

  static round(x: Float) {
    return new Int(Math.round(x.value));
  }

  static sign(x: INumberType) {
    return new ShortInt(Math.sign(x.value));
  }

  static sin(x: Float) {
    return new Float(Math.sin(x.value));
  }

  static sinh(x: INumberType) {
    return new Float(Math.sinh(x.value));
  }

  static sqrt(x: INumberType) {
    return new Float(Math.sqrt(x.value));
  }

  static tan(x: INumberType) {
    return new Float(Math.tan(x.value));
  }

  static tanh(x: INumberType) {
    return new Float(Math.tanh(x.value));
  }

  static trunc(x: Float) {
    return new Int(Math.trunc(x.value));
  }
}
