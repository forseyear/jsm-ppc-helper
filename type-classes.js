import Int8 from '~/types/classes/Int8';
import uInt8 from '~/types/classes/uInt8';
import Int16 from '~/types/classes/Int16';
import uInt16 from '~/types/classes/uInt16';
import Int32 from '~/types/classes/Int32';
import uInt32 from '~/types/classes/uInt32';
import HeX from '~/types/classes/HeX';

export default {
  Int8: Int8,
  uInt8: uInt8,
  Int16: Int16,
  uInt16: uInt16,
  Int32: Int32,
  uInt32: uInt32,
  HeX: HeX,
  Byte: class Byte extends Int8 {},
  uByte: class uByte extends uInt8 {},
  Short: class Short extends Int16 {},
  uShort: class uShort extends uInt16 {},
  Int: class Int extends Int32 {},
  uInt: class uInt extends uInt32 {},
  register: class register extends uInt32 {}
}
