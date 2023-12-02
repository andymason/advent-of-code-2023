import { join } from "https://deno.land/std@0.207.0/path/mod.ts";

function getNumberAsInteger(inputNumber: string): number {
  const numberAsInt: number = parseInt(inputNumber, 10);

  if (Number.isNaN(numberAsInt)) {
    throw new Error(`Invalid input: inputNumber must be an ascii number string. ${inputNumber}`);
  }

  return numberAsInt;
}

// Use named capturing groups to get the first and optional last digit
const firstAndLastDigitPattern = /(?<firstNumber>\d).*(?<=(?<lastNumber>\d))/i;

try {
  const filePath = join("day1", "day1-data.txt");
  const fileData = await Deno.readTextFile(filePath);
  const dataRows = fileData.split(/\n|\r/);

  let sumTotal = 0;

  for (const row of dataRows) {
    const cleanedRowData = row.trim();
    if (cleanedRowData.length === 0) {
      continue;
    }

    const allNumbersInRow = firstAndLastDigitPattern.exec(row);
    const { firstNumber, lastNumber } = allNumbersInRow?.groups ?? {};

    if (!firstNumber) {
      throw new Error(`Invalid row: No number found in string. ${row}`);
    }

    const firstNumberAsInt = getNumberAsInteger(firstNumber);
    const lastNumberAsInt = lastNumber ? getNumberAsInteger(lastNumber) : firstNumberAsInt;

    sumTotal += (firstNumberAsInt * 10) + lastNumberAsInt;
  }

  console.log(sumTotal);
} catch (error) {
  console.error("Error occurred", error);
}
