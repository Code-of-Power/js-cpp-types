import { out_of_range, type_mismatch } from '../../functions';
import { INumberType } from '../../interfaces';
import { Float } from '../float';

export abstract class AbstractIntType implements INumberType {
  public abstract range: [number, number];
  /**
   * Return type name
   */
  public abstract typeName: string;
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

  get value() {
    return this._value;
  }

  set value(v: number) {
    const isInt = Number.isInteger(v);
    if (v >= this.range[0] && v < this.range[1] && isInt) {
      this._value = v;
    } else {
      if (isInt) {
        throw type_mismatch(this.typeName, 'Float');
      } else {
        throw out_of_range(this.range, this.typeName, v);
      }
    }
  }

  public valueOf(): number {
    return this._value;
  }

  public toString(radix?: number): string {
    return this._value.toString(radix);
  }

  // ---Mathematics---
  /**
   * Sum of current number and argument (+)
   * @param term number
   */
  public abstract add(term: INumberType | number): AbstractIntType;
  /**
   * Substract of current number and argument (-)
   * @param subtrahend number
   */
  public abstract subtract(subtrahend: INumberType | number): AbstractIntType;
  /**
   * Product of myltiply currnet number and argument (*)
   * @param multiplier number
   */
  public abstract multiply(multiplier: INumberType | number): AbstractIntType;
  /**
   * Quotient of current value and argument (/)
   * @param devider number
   */
  public abstract devide(devider: INumberType | number): Float;
  /**
   * Raises the number to the power of the argument (**)
   * @param exponent number
   */
  public abstract pow(exponent: INumberType | number): AbstractIntType;
  /**
   * Remainder of the division (%)
   * @param devider
   */
  public abstract mod(arg: INumberType | number): AbstractIntType;

  // ---Increments/Dicrements---
  /**
   * Add 1 to current number (++)
   */
  public abstract inc(): AbstractIntType;
  /**
   * Take away 1 from current number (--)
   */
  public abstract dec(): AbstractIntType;

  // ---Shifts---
  /**
   * Bit shift to left (<<)
   * @param posCount number
   */
  public abstract shiftRight(posCount: number): AbstractIntType;
  /**
   * Bit shift to right (>>)
   * @param posCount number
   */
  public abstract shiftLeft(posCount: number): AbstractIntType;

  // ---Binary---
  /**
   * Result of binary AND (&)
   * @param arg number
   */
  public abstract binOr(arg: INumberType | number): AbstractIntType;
  /**
   * Result of binary OR (|)
   * @param arg number
   */
  public abstract binAnd(arg: INumberType | number): AbstractIntType;
  /**
   * Result of binary NOT (~)
   */
  public abstract binNot(): AbstractIntType;
  /**
   * Result of Exclusive OR (^)
   * @param arg number
   */
  public abstract xor(arg: INumberType | number): AbstractIntType;

  // ---Logic---

  public abstract or(arg: INumberType | number): AbstractIntType;
  public abstract and(arg: INumberType | number): AbstractIntType;
  /**
   * Return negation of number. Return true if value is zero. (!)
   */
  public not(): boolean {
    return !this._value;
  }

  // ---Equality---
  /**
   * Return true if values is equal (==)
   * @param arg number for comparison
   */
  public equal(arg: INumberType | number | string): boolean {
    // tslint:disable-next-line: triple-equals
    return arg.valueOf() == this._value;
  }
  /**
   * Return true if values is not equal (!=)
   * @param arg number for comparison
   */
  public notEqual(arg: INumberType | number | string): boolean {
    // tslint:disable-next-line: triple-equals
    return arg.valueOf() != this._value;
  }
  /**
   * Return true if values is equal and argument type is Char
   * @param arg number
   */
  public abstract tEqual(arg: INumberType | number): boolean;
  public abstract tNotEqual(arg: INumberType | number): boolean;

  /**
   * Return true if argument more than current number (>)
   * @param arg number for comparison
   */
  public more(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value > val;
  }
  /**
   * Return true if argument more or equal than current number (>=)
   * @param arg number for comparison
   */
  public moreOrEqual(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value >= val;
  }
  /**
   * Return false if argument less or than current number (<)
   * @param arg number for comparison
   */
  public less(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value < val;
  }
  /**
   * Return false if argument less or equal than current number (=<)
   * @param arg number for comparison
   */
  public lessOrEqual(arg: INumberType | number): boolean {
    const val = arg.valueOf ? arg.valueOf() : arg;
    return this._value <= val;
  }
}
