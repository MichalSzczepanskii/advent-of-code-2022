import { GameMove, GameResult } from './rock-paper-scissors-game';

export class PlayerMoveGenerator {
  enemyMove: GameMove;
  desiredResult: GameResult;

  constructor(enemyMove: GameMove, desiredResult: GameResult) {
    this.enemyMove = enemyMove;
    this.desiredResult = desiredResult;
  }
  generate(): GameMove {
    if (this.shouldReturnRock()) return GameMove.ROCK;
    else if (this.shouldReturnPaper()) return GameMove.PAPER;
    else return GameMove.SCISSORS;
  }

  private shouldReturnRock(): boolean {
    return (
      (this.enemyMove === GameMove.PAPER &&
        this.desiredResult === GameResult.LOSS) ||
      (this.enemyMove === GameMove.SCISSORS &&
        this.desiredResult === GameResult.WIN) ||
      (this.enemyMove === GameMove.ROCK &&
        this.desiredResult === GameResult.DRAW)
    );
  }

  private shouldReturnPaper(): boolean {
    return (
      (this.enemyMove === GameMove.SCISSORS &&
        this.desiredResult === GameResult.LOSS) ||
      (this.enemyMove === GameMove.ROCK &&
        this.desiredResult === GameResult.WIN) ||
      (this.enemyMove === GameMove.PAPER &&
        this.desiredResult === GameResult.DRAW)
    );
  }
}
