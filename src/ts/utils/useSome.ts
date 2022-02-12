/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Some Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { boolean }
 */

function useSome(array: any[], callback: (value: any, index: number, array: any[]) => unknown): boolean {
  return array.some(callback);
}

export { useSome };
