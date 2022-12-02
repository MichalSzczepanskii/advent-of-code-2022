import {
  GameMove,
  GameResult,
  GameSettings,
  RockPaperScissorsGame,
} from './rock-paper-scissors-game';

describe('rock paper scissors game', () => {
  const gameSettings: GameSettings = {
    [GameResult.WIN]: 6,
    [GameResult.DRAW]: 3,
    [GameResult.LOSS]: 0,
    [GameMove.ROCK]: 1,
    [GameMove.PAPER]: 2,
    [GameMove.SCISSORS]: 3,
  };
  let game: RockPaperScissorsGame;
  beforeEach(() => {
    game = new RockPaperScissorsGame(gameSettings);
  });

  it('should return won game', () => {
    expect(game['getRoundOutput'](GameMove.ROCK, GameMove.PAPER)).toEqual(
      GameResult.WIN
    );
    expect(game['getRoundOutput'](GameMove.PAPER, GameMove.SCISSORS)).toEqual(
      GameResult.WIN
    );
    expect(game['getRoundOutput'](GameMove.SCISSORS, GameMove.ROCK)).toEqual(
      GameResult.WIN
    );
  });

  it('should return lost game', () => {
    expect(game['getRoundOutput'](GameMove.PAPER, GameMove.ROCK)).toEqual(
      GameResult.LOSS
    );
    expect(game['getRoundOutput'](GameMove.SCISSORS, GameMove.PAPER)).toEqual(
      GameResult.LOSS
    );
    expect(game['getRoundOutput'](GameMove.ROCK, GameMove.SCISSORS)).toEqual(
      GameResult.LOSS
    );
  });

  it('should return draw game', () => {
    expect(game['getRoundOutput'](GameMove.PAPER, GameMove.PAPER)).toEqual(
      GameResult.DRAW
    );
    expect(
      game['getRoundOutput'](GameMove.SCISSORS, GameMove.SCISSORS)
    ).toEqual(GameResult.DRAW);
    expect(game['getRoundOutput'](GameMove.ROCK, GameMove.ROCK)).toEqual(
      GameResult.DRAW
    );
  });

  it('should return won round score', () => {
    expect(game.playRound([GameMove.ROCK, GameMove.PAPER])).toEqual(8);
  });
});
