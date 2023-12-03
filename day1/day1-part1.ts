import { readFile } from "/utils/readfile.ts";

function getNumberAsInteger(inputNumber: string): number {
  const numberAsInt: number = parseInt(inputNumber, 10);

  return Number.isNaN(numberAsInt) ? 0 : numberAsInt;
}

function processRow(row: string): number {
  const cleanedRowData = row.trim();
  if (cleanedRowData.length === 0) {
    return 0;
  }

  const numbersInRow = cleanedRowData.match(/\d/g);
  if (!numbersInRow) {
    throw new Error(`Invalid row: No number found in string. ${row}`);
  }

  const intNumbersInRow = numbersInRow.map(getNumberAsInteger);
  const firstNumber = intNumbersInRow[0];
  const lastNumber = intNumbersInRow[intNumbersInRow.length - 1];

  return (firstNumber * 10) + lastNumber;
}

async function main(): Promise<void> {
  const dataRows = await readFile(["day1", "day1-data.txt"]);

  let sumTotal = 0;

  for (const row of dataRows) {
    sumTotal += processRow(row);
  }

  console.log(sumTotal);
}

try {
  main();
} catch (error) {
  console.error("Error occurred", error);
}
