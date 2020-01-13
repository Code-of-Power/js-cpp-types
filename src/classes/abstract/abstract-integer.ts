import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { Float } from '../float';

export abstract class AbstractIntType implements INumberType {
  protected abstract _range: [number, number];
  abstract _typeName: string;
  public _value = 0;

  constructor(v?: number) {
    this._value = v;
  }

  public toExponential(fractionDigits?: number): string {
    return this._value.toExponential(fractionDigits);
  }

  public toFixed(fractionDigits?: number): string {
    return this._value.toFixed(fractionDigits);
  }

  public toLocaleString(locales?: string | string[], options?: any): string {
    return this._value.toLocaleString(locales, options);
  }

  public toPrecision(precision?: number) {
    return this._value.toPrecision(precision);
  }

  get typeName() {
    return this._typeName;
  }

  get value() {
    return this._value;
  }

  set value(v: number) {
    const isInt = Number.isInteger(v);
    if (v >= this._range[0] && v < this._range[1] && isInt) {
      this._value = v;
    } else {
      if (isInt) {
        throw type_mismatch(this._typeName, 'Float');
      } else {
        throw out_of_range(this._range, this._typeName, v);
      }
    }
  }

  public valueOf(): number {
    return this._value;
  }

  get range() {
    return [...this.range];
  }

  public toString(): string {
    return this._value.toString();
  }

  // ---Mathematics---

  public abstract add(term: INumberType | number): AbstractIntType;
  public abstract subtract(subtrahend: INumberType | number): AbstractIntType;
  public abstract multiply(multiplier: INumberType | number): AbstractIntType;
  public abstract devide(devider: INumberType | number): Float;
  public abstract pow(exponent: INumberType | number): AbstractIntType;
  public abstract mod(arg: INumberType | number): AbstractIntType;

  // ---Increments/Dicrements---

  public abstract inc(): AbstractIntType;
  public abstract dec(): AbstractIntType;

  // ---Shifts---

  public abstract shiftRight(posCount: number): AbstractIntType;
  public abstract shiftLeft(posCount: number): AbstractIntType;

  // ---Binary---

  public abstract binOr(arg: INumberType | number): AbstractIntType;
  public abstract binAnd(arg: INumberType | number): AbstractIntType;
  public abstract binNot(): AbstractIntType;
  public abstract xor(arg: INumberType | number): AbstractIntType;

  // ---Logic---

  public abstract or(arg: INumberType | number): AbstractIntType;
  public abstract and(arg: INumberType | number): AbstractIntType;

  public not(): boolean {
    return !this._value;
  }

  // ---Equality---

  public equal(arg: INumberType | number): boolean {
    return arg.valueOf() === this._value;
  }

  public notEqual(arg: INumberType | number): boolean {
    return arg.valueOf() !== this._value;
  }

  public abstract tEqual(arg: INumberType | number): boolean;
  public abstract tNotEqual(arg: INumberType | number): boolean;

  public more(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value > val;
  }

  public moreOrEqual(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value >= val;
  }

  public less(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value < val;
  }

  public lessOrEqual(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value <= val;
  }
}
