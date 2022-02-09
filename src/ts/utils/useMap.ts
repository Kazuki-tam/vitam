/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Map Function
 * @param { Array } array Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback Callback function
 * @returns { boolean }
 */

function useMap(array: any[], callback: (value: any, index: number, array: any[]) => unknown) {
  return array.map(callback);
}

export { useMap };
