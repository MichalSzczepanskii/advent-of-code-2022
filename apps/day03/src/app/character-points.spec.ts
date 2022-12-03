import { CharacterPoints } from './character-points';

describe('character points', () => {
  it('should return 1 for a', () => {
    expect(CharacterPoints.getPoints('a')).toEqual(1);
  });

  it('should return 26 for z', () => {
    expect(CharacterPoints.getPoints('a')).toEqual(1);
  });

  it('should return 27 for A', () => {
    expect(CharacterPoints.getPoints('a')).toEqual(1);
  });

  it('should return 52 for Z', () => {
    expect(CharacterPoints.getPoints('a')).toEqual(1);
  });
});
