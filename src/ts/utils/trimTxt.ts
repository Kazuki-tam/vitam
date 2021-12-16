/**
 * Trim Text Function
 * @param { String } text Target text
 * @param { Number } trimLength Word count
 * @param { String } afterText Character string given after trimming
 */

function trimTxt(text: string, trimLength: number, afterText: string): string {
  trimLength = trimLength || 50;
  afterText = afterText || '…';
  if (text.length < trimLength) {
    return text;
  }
  return text.substring(0, trimLength) + afterText;
}

export { trimTxt };
