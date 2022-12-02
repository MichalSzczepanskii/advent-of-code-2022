import * as fs from 'fs';
import { FileReader } from './file-reader';

describe('fileReader', () => {
  const testFile = 'libs/file-reader/src/lib/test.txt';

  it('should read file', async () => {
    await fs.promises.writeFile(testFile, 'hello');
    expect(await FileReader.read(testFile)).toEqual('hello');
    await fs.promises.unlink(testFile);
  });

  it('should throw error if read file that does not exist', async () => {
    await expect(FileReader.read(testFile)).rejects.toThrow(
      `File: ${testFile} was not found.`
    );
  });
});
