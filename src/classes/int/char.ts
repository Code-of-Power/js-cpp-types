import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { AbstractIntType } from '../abstract';
import { Float, LongFloat } from '../float';
import {
  Int,
  ShortInt,
  SignedChar,
  UnsignedInt,
  UnsignedShortInt,
} from '../int';

export class Char extends AbstractIntType implements INumberType {
  /**
   * Range 0 - 255
   */
  static RANGE: [number, number] = [0x0, 0xff];

  /**
   * Emulate char C++ type. Size: 1 byte
   */
  constructor(v?: number) {
    super(v);
    if (Char.is(v)) {
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
    return 'Char';
  }
  /**
   * Range 0 - 255
   */
  get range(): [number, number] {
    return [...Char.RANGE] as [number, number];
  }

  public static is(v: number) {
    return v >= Char.RANGE[0] && v <= Char.RANGE[1] && Number.isInteger(v);
  }

  public static createInst(value: number) {
    if (value > Char.RANGE[1]) {
      return new Char(Char.RANGE[1]);
    } else if (value < Char.RANGE[0]) {
      return new Char(Char.RANGE[0]);
    } else {
      return new Char(value);
    }
  }

  public toSignedChar() {
    return SignedChar.createInst(this._value);
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

  public add(term: INumberType | number): Char {
    return Char.createInst(this._value + term.valueOf());
  }

  public subtract(subtrahend: INumberType | number): Char {
    return Char.createInst(this._value - subtrahend.valueOf());
  }

  public multiply(multiplier: INumberType | number) {
    return Char.createInst(this._value * multiplier.valueOf());
  }

  public devide(devider: INumberType | number) {
    return new Float(this.value / devider.valueOf());
  }

  public pow(exponent: INumberType | number): Char {
    return Char.createInst(this._value ** exponent.valueOf());
  }

  public mod(devider: INumberType | number) {
    return Char.createInst(this._value % devider.valueOf());
  }

  // ---Increments/Dicrements---

  public inc() {
    return Char.createInst(this._value + 1);
  }

  public dec() {
    return Char.createInst(this._value - 1);
  }

  // ---Shifts---

  public shiftLeft(posCount: number) {
    const value = this._value << posCount;
    if (value >= Char.RANGE[1]) {
      return new Char(value & Char.RANGE[1]);
    } else {
      return new Char(value);
    }
  }

  public shiftRight(posCount: number) {
    return new Char(this._value >> posCount);
  }

  // ---Binary---

  public binAnd(arg: INumberType | number) {
    return Char.createInst(this._value & arg.valueOf() & 0xff);
  }

  public binOr(arg: INumberType | number): Char {
    return Char.createInst(this._value | (arg.valueOf() & 0xff));
  }

  public binNot() {
    return Char.createInst(~this._value & 0xff);
  }

  public xor(arg: INumberType | number) {
    return Char.createInst(this._value ^ (arg.valueOf() & 0xff));
  }

  // ---Equality---

  public tEqual(arg: INumberType | number) {
    return this._value === arg.valueOf() && arg instanceof Char;
  }

  public tNotEqual(arg: INumberType | number) {
    return this._value !== arg.valueOf() || !(arg instanceof Char);
  }

  // ---Logic---

  public or(arg: INumberType | number) {
    return Char.createInst(this._value || arg.valueOf());
  }

  public and(arg: INumberType | number) {
    return Char.createInst(this._value && arg.valueOf());
  }
}
