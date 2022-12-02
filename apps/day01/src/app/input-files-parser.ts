export default class InputFilesParser {
  public static parse(input: string): string[] {
    const outputLF = InputFilesParser.parseToLF(input);
    const output = InputFilesParser.splitByEmptyLines(outputLF);
    return InputFilesParser.groupByComas(output);
  }

  private static parseToLF(input: string) {
    return input.replace(/\r\n/g, '\n');
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
