import { ClassesConfig } from '~/types/classes/classes-config';

export default class uInt32 {
  private _uint32_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private touInt32(v: number): number {
    if (v > ClassesConfig.uInt32_MAX) return ClassesConfig.uInt32_MAX;
    if (v < ClassesConfig.uInt32_MIN) return ClassesConfig.uInt32_MIN;
    return v >>> 0;
  }

  set(v: number): void {
    this._uint32_v = this.touInt32(v);
  }

  get(): number {
    return this._uint32_v;
  }
}
