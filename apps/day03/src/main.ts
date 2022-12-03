import { FileReader } from '@advent-of-code-2022/file-reader';
import { LFParser } from '@advent-of-code-2022/lf-parser';
import * as path from 'path';
import { CharacterFinder } from './app/character-finder';
import { CharacterPoints } from './app/character-points';

(async function main() {
  const filePath = path.join(__dirname, '/assets/inputs.txt');
  const inputData = await FileReader.read(filePath);
  const parsedData = LFParser.parse(inputData)
    .split('\n')
    .filter((element) => !!element);

  let partOne = 0;
  for (const row of parsedData) {
    const middle = row.length / 2;
    const input = [row.slice(0, middle), row.slice(middle)];
    const char = CharacterFinder.findFirstRepetition(input);
    partOne += CharacterPoints.getPoints(char);
  }

  const iterationLimit = parsedData.length / 3;
  let partTwo = 0;
  for (let i = 0; i < iterationLimit; i++) {
    const input = parsedData.slice(3 * i, 3 * (i + 1));
    const char = CharacterFinder.findFirstRepetition(input);
    partTwo += CharacterPoints.getPoints(char);
  }

  console.log(partOne);
  console.log(partTwo);
})();
