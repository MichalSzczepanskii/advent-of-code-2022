import { FileReader } from '@advent-of-code-2022/file-reader';
import * as path from 'path';
import MostCaloriesElfFinder from './app/most-calories-elf-finder';
import InputFilesParser from './app/input-files-parser';

(async function main() {
  const filePath = path.join(__dirname, '/assets/inputs.txt');
  console.log(filePath);
  const inputData = await FileReader.read(filePath);
  const parsedData = InputFilesParser.parse(inputData);
  const finder = new MostCaloriesElfFinder(parsedData);
  console.log(finder.getBiggestCalories());
})();
