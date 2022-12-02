import { PlayerMoveGenerator } from './player-move-generator';
import { GameMove, GameResult } from './rock-paper-scissors-game';

describe('player move generator', () => {
  it('should return ROCK', () => {
    expect(
      new PlayerMoveGenerator(GameMove.PAPER, GameResult.LOSS).generate()
    ).toEqual(GameMove.ROCK);
    expect(
      new PlayerMoveGenerator(GameMove.SCISSORS, GameResult.WIN).generate()
    ).toEqual(GameMove.ROCK);
    expect(
      new PlayerMoveGenerator(GameMove.ROCK, GameResult.DRAW).generate()
    ).toEqual(GameMove.ROCK);
  });

  it('should return PAPER', () => {
    expect(
      new PlayerMoveGenerator(GameMove.PAPER, GameResult.DRAW).generate()
    ).toEqual(GameMove.PAPER);
    expect(
      new PlayerMoveGenerator(GameMove.SCISSORS, GameResult.LOSS).generate()
    ).toEqual(GameMove.PAPER);
    expect(
      new PlayerMoveGenerator(GameMove.ROCK, GameResult.WIN).generate()
    ).toEqual(GameMove.PAPER);
  });

  it('should return SCISSORS', () => {
    expect(
      new PlayerMoveGenerator(GameMove.PAPER, GameResult.WIN).generate()
    ).toEqual(GameMove.SCISSORS);
    expect(
      new PlayerMoveGenerator(GameMove.SCISSORS, GameResult.DRAW).generate()
    ).toEqual(GameMove.SCISSORS);
    expect(
      new PlayerMoveGenerator(GameMove.ROCK, GameResult.LOSS).generate()
    ).toEqual(GameMove.SCISSORS);
  });
});
