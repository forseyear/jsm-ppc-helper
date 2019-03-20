import { ClassesConfig } from '~/types/classes/classes-config';

export default class Int32 {
  private _int32_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private toInt32(v: number): number {
    if (v > ClassesConfig.Int32_MAX) return ClassesConfig.Int32_MAX;
    if (v < ClassesConfig.Int32_MIN) return ClassesConfig.Int32_MIN;
    return v | 0;
  }

  set(v: number): void {
    this._int32_v = this.toInt32(v);
  }

  get(): number {
    return this._int32_v;
  }
}
