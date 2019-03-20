import { ClassesConfig } from '~/types/classes/classes-config';

export default class uInt16 {
  private _uint16_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private touInt16(v: number): number {
    if (v > ClassesConfig.uInt16_MAX) return ClassesConfig.uInt16_MAX;
    if (v < ClassesConfig.uInt16_MIN) return ClassesConfig.uInt16_MIN;
    return v & 65535;
  }

  set(v: number): void {
    this._uint16_v = this.touInt16(v);
  }

  get(): number {
    return this._uint16_v;
  }
}
