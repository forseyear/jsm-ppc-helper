import { ClassesConfig } from '~/types/classes/classes-config';

export default class Int8 {
  private _int8_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private toInt8(v: number): number {
    if (v > ClassesConfig.Int8_MAX) return ClassesConfig.Int8_MAX;
    if (v < ClassesConfig.Int8_MIN) return ClassesConfig.Int8_MIN;
    return (v << 24) >> 24;
  }

  set(v: number): void {
    this._int8_v = this.toInt8(v);
  }

  get(): number {
    return this._int8_v;
  }
}
