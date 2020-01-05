import { AbstractIntType } from '../classes/abstract';
import { Float } from '../classes/float';

export interface INumberType extends Number {
  _typeName: string;
  value: number;
  range: [number, number];

  valueOf(): number;
  toString(): string;

  add(term: INumberType | number): AbstractIntType;
  subtract(subtrahend: INumberType | number): AbstractIntType;
  multiply(multiplier: INumberType | number): AbstractIntType;
  devide(devider: INumberType | number): Float;
  pow(exponent: INumberType | number): AbstractIntType;

  inc(): AbstractIntType;
  dec(): AbstractIntType;

  shiftLeft(posCount: number): AbstractIntType;
  shiftRight(posCount: number): AbstractIntType;

  or(arg: INumberType | number): AbstractIntType;
  and(arg: INumberType | number): AbstractIntType;

  more(arg: INumberType | number): boolean;
  moreOrEqual(arg: INumberType | number): boolean;

  less(arg: INumberType | number): boolean;
  lessOrEqual(arg: INumberType | number): boolean;
}
