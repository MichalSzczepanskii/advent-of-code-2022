export class CharacterPoints {
  static getPoints(character: string) {
    const charCode = character.charCodeAt(0);
    return charCode < 91 ? charCode - 38 : charCode - 96;
  }
}
