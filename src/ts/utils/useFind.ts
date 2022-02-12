/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Find Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { any }
 */

function useFind(array: any[], callback: (value: any, index: number, array: any[]) => unknown): any {
  return array.find(callback);
}

export { useFind };
