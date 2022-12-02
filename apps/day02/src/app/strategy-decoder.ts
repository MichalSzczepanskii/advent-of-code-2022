import { GameMove, GameResult } from './rock-paper-scissors-game';

export interface StrategyMatrix {
  [key: string]: GameMove | GameResult;
}
export class StrategyDecoder {
  strategyMatrix: StrategyMatrix;

  constructor(strategyMatrix: StrategyMatrix) {
    this.strategyMatrix = strategyMatrix;
  }

  decode(input: string[]): (GameMove | GameResult)[] {
    return input.map((element) => this.strategyMatrix[element]);
  }
}
