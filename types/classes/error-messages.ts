export namespace ErrorMessages {
  export const Float = (value: number): string => `${value} は 小数です。`;
  export const Infinity = (value: number): string => `${value} は Infinity です。`;
  /*'-無限': ` は -Infinity です。`;
  'ナン': ` は NaN です。`;
  'より大きい': (max: number) => ` は ${max} より大きいです。`;
  'より小さい': (min: number) => ` は ${min} より小さいです。;`*/
}
