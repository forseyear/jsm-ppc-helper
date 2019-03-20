export default class register {
  private _register_v: uInt = new uInt(0);
  constructor(v: number) {
    this.set(v);
  }

  set(v: number): void {
    this._register_v.set(v);
  }

  get(): number {
    return this._register_v.get();
  }
}
