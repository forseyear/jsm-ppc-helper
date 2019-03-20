import { ClassesConfig } from '~/types/classes/classes-config';

export default class uInt8 {
  private _uint8_v: number = 0;
  constructor(v: number) {
    this.set(v);
  }

  private touInt8(v: number): number {
    if (v > ClassesConfig.uInt8_MAX) return ClassesConfig.uInt8_MAX;
    if (v < ClassesConfig.uInt8_MIN) return ClassesConfig.uInt8_MIN;
    return v & 255;
  }

  set(v: number): void {
    this._uint8_v = this.touInt8(v);
  }

  get(): number {
    return this._uint8_v;
  }
}
