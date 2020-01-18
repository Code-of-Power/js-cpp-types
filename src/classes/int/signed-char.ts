import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import { Char, Int, ShortInt, UnsignedInt, UnsignedShortInt } from '../int';

export class SignedChar extends AbstractIntType implements INumberType {
  /**
   * Range -128 - 127
   */
  static RANGE: [number, number] = [-128, 127];

  /**
   * Emulate signed char C++ type. Size: 1 byte
   */
  constructor(v?: number) {
    super(v);
    if (SignedChar.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this.typeName, this.typeName);
      } else {
        throw out_of_range(this.range, this.typeName, v);
      }
    }
  }

  get typeName() {
    return 'SignedChar';
  }
  /**
   * Range -128 - 127
   */
  get range(): [number, number] {
    return [...SignedChar.RANGE] as [number, number];
  }

  public static is(v: number) {
    return (
      v >= SignedChar.RANGE[0] &&
      v <= SignedChar.RANGE[1] &&
      Number.isInteger(v)
    );
  }

  public static createInst(value: number) {
    if (value > SignedChar.RANGE[1]) {
      return new SignedChar(SignedChar.RANGE[1]);
    } else if (value < SignedChar.RANGE[0]) {
      return new SignedChar(SignedChar.RANGE[0]);
    } else {
      return new SignedChar(value);
    }
  }

  public toChar(): Char {
    return Char.createInst(this._value);
  }

  public toShortInt(): ShortInt {
    return ShortInt.createInst(this._value);
  }

  public toUnsignedShortInt(): UnsignedShortInt {
    return UnsignedShortInt.createInst(this._value);
  }

  public toInt(): Int {
    return Int.createInst(this._value);
  }

  public toUnsignedInt(): UnsignedInt {
    return UnsignedInt.createInst(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---

  public add(term: INumberType | number): SignedChar {
    return SignedChar.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): SignedChar {
    return SignedChar.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number) {
    return SignedChar.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): SignedChar {
    return SignedChar.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return SignedChar.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return SignedChar.createInst(this._value + 1);
  }

  public dec() {
    return SignedChar.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    let bVal = this._value;
    if (this._value < 0) {
      bVal = this._value * -1;
    }
    const val = bVal << posCount;
    if (val > 0xf) {
      return SignedChar.createInst((val - 122) * -1);
    } else {
      return SignedChar.createInst(val);
    }
  }

  public shiftRight(posCount: number) {
    let bVal = this._value;
    if (this._value < 0) {
      bVal = this._value * -1;
    }
    return new SignedChar(bVal >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number) {
    let bVal = this._value;
    if (this._value < 0) {
      bVal = this._value * -1;
    }
    const val = bVal & arg.valueOf() & 0xff;
    if (val > 0xf) {
      return SignedChar.createInst((val - 122) * -1);
    } else {
      return SignedChar.createInst(val);
    }
  }

  public binOr(arg: INumberType | number): SignedChar {
    let bVal = this._value;
    if (this._value < 0) {
      bVal = this._value * -1;
    }
    const val = bVal | (arg.valueOf() & 0xff);
    if (val > 0xf) {
      return SignedChar.createInst((val - 112) * -1);
    } else {
      return SignedChar.createInst(val);
    }
  }

  public binNot() {
    let bVal = this._value;
    if (this._value < 0) {
      bVal = this._value * -1;
    }
    const val = ~bVal & 0xff;
    if (val > 0xf) {
      return SignedChar.createInst((val - 112) * -1);
    } else {
      return SignedChar.createInst(val);
    }
  }

  public xor(arg: INumberType | number) {
    const val = this._value ^ (arg.valueOf() & 0xff);
    return val > 0xf
      ? SignedChar.createInst((val - SignedChar.RANGE[1]) * -1)
      : SignedChar.createInst(val);
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof SignedChar;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value !== arg.valueOf() || !(arg instanceof SignedChar);
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return SignedChar.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return SignedChar.createInst(this._value && arg.valueOf());
  }
}
