import { CharacterRepetitionFinder } from './character-repetition-finder';

describe('character finder spec', () => {
  it('should return first letter for 2 elements array', () => {
    expect(
      CharacterRepetitionFinder.findFirstRepetition(['abc', 'xta'])
    ).toEqual('a');
  });

  it('should return first letter for 3 elements array', () => {
    expect(
      CharacterRepetitionFinder.findFirstRepetition(['abc', 'xab', 'bdy'])
    ).toEqual('b');
  });
});
