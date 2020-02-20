import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract/abstract-integer';
import { Float, LongFloat } from '../float';
import { Char, Int, SignedChar, UnsignedInt, UnsignedShortInt } from '../int';

export class ShortInt extends AbstractIntType implements INumberType {
  /**
   * Range -32768 - 32767
   */
  static RANGE: [number, number] = [-32768, 0xfff];

  /**
   * Emulate short C++ type. Size: 2 byte
   */
  constructor(v: number) {
    super(v);
    if (ShortInt.is(v)) {
      this._value = v;
    } else {
      if (Number.isInteger(v)) {
        throw type_mismatch(this.typeName, this.typeName);
      } else {
        throw out_of_range(ShortInt.RANGE, this.typeName, v);
      }
    }
  }
  /**
   * Return type name
   */
  get typeName() {
    return 'ShortInt';
  }
  /**
   * Range -32768 - 32767
   */
  get range(): [number, number] {
    return [...Char.RANGE] as [number, number];
  }

  public static is(v: number) {
    return (
      v >= ShortInt.RANGE[0] && v <= ShortInt.RANGE[1] && Number.isInteger(v)
    );
  }

  public static createInst(value: number) {
    if (value > ShortInt.RANGE[1]) {
      return new ShortInt(ShortInt.RANGE[1]);
    } else if (value < ShortInt.RANGE[0]) {
      return new ShortInt(ShortInt.RANGE[0]);
    } else {
      return new ShortInt(value);
    }
  }

  public toSignedChar() {
    return SignedChar.createInst(this._value);
  }

  public toChar(): Char {
    return Char.createInst(this._value);
  }

  public toUnsignedShortInt() {
    return UnsignedShortInt.createInst(this._value);
  }

  public toInt(): Int {
    return new Int(this._value);
  }

  public toUnsignedInt() {
    return UnsignedInt.createInst(this._value);
  }

  public toFloat(): Float {
    return new Float(this._value);
  }

  public toLongFloat(): LongFloat {
    return new LongFloat(this._value);
  }

  // ---Mathematics---

  public add(arg: INumberType | number): ShortInt {
    return ShortInt.createInst(this._value + arg.valueOf());
  }

  public subtract(subtrahend: INumberType | number) {
    return ShortInt.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number) {
    return ShortInt.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number) {
    return ShortInt.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return ShortInt.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return ShortInt.createInst(this._value + 1);
  }

  public dec() {
    return ShortInt.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    // TODO
    const value = this._value << posCount;
    if (value >= ShortInt.RANGE[1]) {
      return new ShortInt(value & ShortInt.RANGE[1]);
    } else {
      return new ShortInt(value);
    }
  }

  public shiftRight(posCount: number) {
    // TODO
    return new ShortInt(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number) {
    // TODO
    return ShortInt.createInst(this._value & arg.valueOf());
  }

  public binOr(arg: INumberType | number) {
    // TODO
    return ShortInt.createInst(this._value | arg.valueOf());
  }

  public binNot() {
    // TODO
    return ShortInt.createInst(~this._value);
  }

  public xor(arg: INumberType | number) {
    // TODO
    return ShortInt.createInst(this._value ^ arg.valueOf());
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return ShortInt.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return ShortInt.createInst(this._value && arg.valueOf());
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof ShortInt;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value !== arg.valueOf() || !(arg instanceof ShortInt);
  }
}
