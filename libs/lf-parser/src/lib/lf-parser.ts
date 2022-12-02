export class LFParser {
  static parse(input: string) {
    return input.replace(/\r\n/g, '\n');
  }
}
