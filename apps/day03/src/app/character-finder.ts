export class CharacterFinder {
  static findFirstRepetition(input: string[]): string {
    const arrayCopy = [...input];
    const firstElement = arrayCopy.shift();
    const arrayLength = arrayCopy.length;
    for (const char of firstElement) {
      if (
        arrayCopy.filter((element) => element.indexOf(char) >= 0).length ===
        arrayLength
      )
        return char;
    }
    return '';
  }
}
