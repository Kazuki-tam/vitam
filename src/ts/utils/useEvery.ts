/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Every Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { boolean }
 */

function useEvery(array: any[], callback: (value: any, index: number, array: any[]) => unknown): boolean {
  return array.every(callback);
}

export { useEvery };
