import { FileReader } from '@advent-of-code-2022/file-reader';
import * as path from 'path';
import InputFilesParser from './input-files-parser';
describe('input files parser', () => {
  it('should parse CRLF line breaks to LF', () => {
    expect(InputFilesParser['parseToLF']('test\r\ntest2\r\n')).toEqual(
      'test\ntest2\n'
    );
  });

  it('should split inputs with empty lines', () => {
    expect(InputFilesParser['splitByEmptyLines']('test\n\ntest2')).toEqual([
      'test',
      'test2',
    ]);
  });

  it('should join elements by comma in arrays input', () => {
    expect(
      InputFilesParser['groupByComas'](['test\ntest2', 'test3\ntest4\n'])
    ).toEqual(['test,test2', 'test3,test4']);
  });

  it('should parse input file to array with values seperated by comma', async () => {
    const filePath = path.join(__dirname + '/../assets/tests-inputs.txt');
    const data = await FileReader.read(filePath);
    expect(InputFilesParser.parse(data)).toEqual([
      '1000,2000,3000',
      '4000',
      '5000,6000',
      '7000,8000,9000',
      '10000',
    ]);
  });
});
