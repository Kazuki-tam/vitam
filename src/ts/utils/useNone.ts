/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * None Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { boolean }
 */

function useNone(array: any[], callback: (value: any, index: number, array: any[]) => unknown): boolean {
  return !array.some(callback);
}

export { useNone };
