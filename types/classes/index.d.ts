import Int8 from '~/types/classes/Int8';
import uInt8 from '~/types/classes/uInt8';
import Int16 from '~/types/classes/Int16';
import uInt16 from '~/types/classes/uInt16';
import Int32 from '~/types/classes/Int32';
import uInt32 from '~/types/classes/uInt32';
import HeX from '~/types/classes/HeX';

// TODO get set を多重定義? getHeX, getNumber など

declare global {
  class Int8 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class uInt8 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class Int16 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class uInt16 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class Int32 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class uInt32 {
    constructor(v: number)
    get(): number
    set(v: number): void
  }
  class HeX {
    constructor(v: string)
    setNumber(v: number): void
    set(v: string): void
    getNumber(): number
    get(): string
  }
  class Byte extends Int8 {}
  class uByte extends uInt8 {}
  class Short extends Int16 {}
  class uShort extends uInt16 {}
  class Int extends Int32 {}
  class uInt extends uInt32 {}
  class register extends uInt32 {}
}
