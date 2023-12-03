/**
 * Converts a string representation of a number to an integer.
 *
 * @param inputNumber - The string representation of the number.
 * @returns The number as an integer. If the conversion fails, returns 0.
 */
export function getNumberAsInteger(inputNumber: string): number {
  const numberAsInt: number = parseInt(inputNumber, 10);

  return Number.isNaN(numberAsInt) ? 0 : numberAsInt;
}
