import { LFParser } from '@advent-of-code-2022/lf-parser';

export default class InputFilesParser {
  public static parse(input: string): string[] {
    const outputLF = LFParser.parse(input);
    const output = InputFilesParser.splitByEmptyLines(outputLF);
    return InputFilesParser.groupByComas(output);
  }

  private static splitByEmptyLines(input: string) {
    return input.split('\n\n');
  }

  private static groupByComas(input: string[]) {
    return input.map((element) =>
      element
        .split('\n')
        .filter((element) => !!element)
        .join(',')
    );
  }
}
