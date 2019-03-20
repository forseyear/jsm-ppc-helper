import { ClassesConfig } from '~/types/classes/classes-config';

export default class Int16 {
  private _int16_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private toInt16(v: number): number {
    if (v > ClassesConfig.Int16_MAX) return ClassesConfig.Int16_MAX;
    if (v < ClassesConfig.Int16_MIN) return ClassesConfig.Int16_MIN;
    return (v << 16) >> 16;
  }

  set(v: number): void {
    this._int16_v = this.toInt16(v);
  }

  get(): number {
    return this._int16_v;
  }
}
