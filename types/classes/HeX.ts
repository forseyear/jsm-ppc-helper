export default class HeX {
  private _hex_v: string = '';
  constructor(v: string) {
    this.set(v);
  }

  private toHeX(v: string): string {
    if (/^([A-F]|[0-9])+$/.test(v)) return v;
    else return '';
  }

  private numberToHeX(v: number): string {
    return v.toString(16);
  }

  setNumber(v: number): void {
    this._hex_v = this.numberToHeX(v);
  }

  set(v: string): void {
    this._hex_v = this.toHeX(v);
  }

  getNumber(): number {
    return parseInt(this._hex_v, 16);
  }

  get(): string {
    return this._hex_v;
  }
}
