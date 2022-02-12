/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Reject Function
 * @param { Array } array - Target array
 * @param { (value: any, index: number, array: any[]) => unknown } callback - Callback function
 * @returns { any[] }
 */

function useReject(array: any[], callback: (value: any) => unknown): any[] {
  return array.filter((item) => {
    return !callback(item);
  });
}

export { useReject };
