import { LFParser } from '@advent-of-code-2022/lf-parser';
import { FileReader } from '@advent-of-code-2022/file-reader';
import * as path from 'path';

function partOne(data: string[]) {
  let overlapCounter = 0;
  for (const pair of data) {
    const [firstSection, secondSection] = pair.split(',');
    const [firstFrom, firstTo] = firstSection.split('-');
    const [secondFrom, secondTo] = secondSection.split('-');
    if (
      (+secondFrom >= +firstFrom && +secondTo <= +firstTo) ||
      (+secondFrom <= +firstFrom && +secondTo >= +firstTo)
    ) {
      overlapCounter++;
    }
  }
  console.log('partOne');
  console.log(overlapCounter);
}
function partTwo(data: string[]) {
  let overlapCounter = 0;
  for (const pair of data) {
    const [firstSection, secondSection] = pair.split(',');
    const [firstFrom, firstTo] = firstSection.split('-');
    const [secondFrom, secondTo] = secondSection.split('-');
    if (+secondFrom <= +firstTo && +firstFrom <= +secondTo) {
      overlapCounter++;
    }
  }
  console.log('partTwo');
  console.log(overlapCounter);
}

(async function main() {
  const filePath = path.join(__dirname, '/assets/inputs.prod');
  const data = LFParser.parse(await FileReader.read(filePath))
    .split('\n')
    .filter((element) => !!element);
  partOne(data);
  partTwo(data);
})();
