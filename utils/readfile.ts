/**
 * @fileoverview File contains a helper function to read a file.
 */

import { join } from "https://deno.land/std@0.207.0/path/mod.ts";

/**
 * Reads a file and returns its content as an array of strings.
 * @param path - The path to the file.
 * @returns A promise that resolves to an array of strings representing the file content.
 */
export const readFile = async (path: string[]): Promise<string[]> => {
  if (!Array.isArray(path) || path.length === 0) {
    throw new Error("Invalid path provided");
  }

  const filePath = join(...path);

  let fileData: string;

  try {
    fileData = await Deno.readTextFile(filePath);
  } catch (error) {
    throw new Error(`Error reading file: ${error}`);
  }

  const dataRows = fileData.split(/\r?\n/);

  return dataRows;
};
