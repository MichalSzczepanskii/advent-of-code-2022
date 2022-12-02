import { FileReader } from '@advent-of-code-2022/file-reader';
import * as path from 'path';
import { LFParser } from '@advent-of-code-2022/lf-parser';
import {
  GameMove,
  GameResult,
  GameSettings,
  RockPaperScissorsGame,
} from './app/rock-paper-scissors-game';
import { StrategyDecoder } from './app/strategy-decoder';
import { PlayerMoveGenerator } from './app/player-move-generator';

(async function main() {
  const filePath = path.join(__dirname, '/assets/inputs.txt');
  const inputData = await FileReader.read(filePath);
  const parsedData = LFParser.parse(inputData)
    .split('\n')
    .filter((element) => !!element);

  const oldStrategyMatrix = {
    A: GameMove.ROCK,
    B: GameMove.PAPER,
    C: GameMove.SCISSORS,
    X: GameMove.ROCK,
    Y: GameMove.PAPER,
    Z: GameMove.SCISSORS,
  };

  const gameSettings: GameSettings = {
    [GameResult.WIN]: 6,
    [GameResult.DRAW]: 3,
    [GameResult.LOSS]: 0,
    [GameMove.ROCK]: 1,
    [GameMove.PAPER]: 2,
    [GameMove.SCISSORS]: 3,
  };

  const strategyMatrix = {
    A: GameMove.ROCK,
    B: GameMove.PAPER,
    C: GameMove.SCISSORS,
    X: GameResult.LOSS,
    Y: GameResult.DRAW,
    Z: GameResult.WIN,
  };

  let oldTotalScore = 0;
  let totalScore = 0;
  const oldDecoder = new StrategyDecoder(oldStrategyMatrix);
  const decoder = new StrategyDecoder(strategyMatrix);
  const game = new RockPaperScissorsGame(gameSettings);
  for (const row of parsedData) {
    const moves = oldDecoder.decode(row.split(' '));
    const [enemyMove, desiredOutput] = decoder.decode(row.split(' '));
    const moveGenerator = new PlayerMoveGenerator(
      enemyMove as GameMove,
      desiredOutput as GameResult
    );
    const playerMove = moveGenerator.generate();
    oldTotalScore += game.playRound(moves as GameMove[]);
    totalScore += game.playRound([enemyMove as GameMove, playerMove]);
  }
  console.log(oldTotalScore);
  console.log(totalScore);
})();
