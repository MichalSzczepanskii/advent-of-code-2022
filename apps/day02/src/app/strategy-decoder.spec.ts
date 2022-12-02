import { StrategyDecoder } from './strategy-decoder';
import { GameMove } from './rock-paper-scissors-game';

describe('strategy decoder', () => {
  it('should decode input for given strategy matrix', () => {
    const strategyMatrix = {
      A: GameMove.ROCK,
      B: GameMove.PAPER,
      C: GameMove.SCISSORS,
      X: GameMove.ROCK,
      Y: GameMove.PAPER,
      Z: GameMove.SCISSORS,
    };
    const decoder = new StrategyDecoder(strategyMatrix);
    expect(decoder.decode('A Y'.split(' '))).toEqual([
      GameMove.ROCK,
      GameMove.PAPER,
    ]);
  });
});
