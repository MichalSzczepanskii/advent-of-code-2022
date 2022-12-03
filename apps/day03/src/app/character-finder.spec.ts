import { CharacterFinder } from './character-finder';

describe('character finder spec', () => {
  it('should return first letter for 2 elements array', () => {
    expect(CharacterFinder.findFirstRepetition(['abc', 'xta'])).toEqual('a');
  });

  it('should return first letter for 3 elements array', () => {
    expect(CharacterFinder.findFirstRepetition(['abc', 'xab', 'bdy'])).toEqual(
      'b'
    );
  });
});
