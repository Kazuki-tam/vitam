/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Filter Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { any[] }
 */

function useFilter(array: any[], callback: (value: any, index: number, array: any[]) => unknown): any[] {
  return array.filter(callback);
}

export { useFilter };
