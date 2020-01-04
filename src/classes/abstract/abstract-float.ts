import { out_of_range } from '../../functions';
import { AbstractIntType } from '../abstract';

export abstract class AbstractFloatType extends AbstractIntType {
  set value(v: number) {
    if (v >= this._range[0] && v < this._range[1]) {
      this._value = v;
    } else {
      throw out_of_range(this._range, this._typeName, v);
    }
  }

  get value() {
    return this._value;
  }
}
