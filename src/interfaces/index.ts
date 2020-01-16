import { AbstractIntType } from '../classes/abstract';
import { Float } from '../classes/float';

export interface INumberType extends Number {
  typeName: string;
  value: number;
  range: [number, number];

  valueOf(): number;
  toString(): string;

  // ---Mathematics---

  add(term: INumberType | number): AbstractIntType;
  subtract(subtrahend: INumberType | number): AbstractIntType;
  multiply(multiplier: INumberType | number): AbstractIntType;
  devide(devider: INumberType | number): Float;
  mod(devider: INumberType | number): AbstractIntType;
  pow(exponent: INumberType | number): AbstractIntType;

  // ---Increments/Dicrements---

  inc(): AbstractIntType;
  dec(): AbstractIntType;

  // ---Shifts---

  shiftLeft(posCount: number): AbstractIntType;
  shiftRight(posCount: number): AbstractIntType;

  // ---Binary---

  binOr(arg: INumberType | number): AbstractIntType;
  binAnd(arg: INumberType | number): AbstractIntType;
  binNot(): AbstractIntType;
  xor(arg: INumberType | number): AbstractIntType;

  // ---Logic---

  or(arg: INumberType | number): AbstractIntType;
  and(arg: INumberType | number): AbstractIntType;
  not(): boolean;

  // ---Equality---

  equal(exponent: INumberType | number): boolean;
  tEqual(exponent: INumberType | number): boolean;
  notEqual(exponent: INumberType | number): boolean;
  tNotEqual(exponent: INumberType | number): boolean;

  more(arg: INumberType | number): boolean;
  moreOrEqual(arg: INumberType | number): boolean;

  less(arg: INumberType | number): boolean;
  lessOrEqual(arg: INumberType | number): boolean;
}
