export enum GameResult {
  WIN = 'WIN',
  DRAW = 'DRAW',
  LOSS = 'LOSS',
}

export enum GameMove {
  ROCK = 'ROCK',
  PAPER = 'PAPER',
  SCISSORS = 'SCISSORS',
}

export type GameSettings = {
  [key in GameResult]: number;
} & {
  [key in GameMove]: number;
};

export class RockPaperScissorsGame {
  gameSettings: GameSettings;

  constructor(gameSettings: GameSettings) {
    this.gameSettings = gameSettings;
  }

  playRound(round: GameMove[]): number {
    const [enemyMove, playerMove] = round;
    const roundResult = this.getRoundOutput(enemyMove, playerMove);
    return this.gameSettings[roundResult] + this.gameSettings[playerMove];
  }

  private getRoundOutput(
    enemyMove: GameMove,
    playerMove: GameMove
  ): GameResult {
    if (this.isGameWon(enemyMove, playerMove)) return GameResult.WIN;
    else if (this.isGameLost(enemyMove, playerMove)) return GameResult.LOSS;
    else return GameResult.DRAW;
  }

  private isGameWon(enemyMove: GameMove, playerMove: GameMove): boolean {
    return (
      (enemyMove === GameMove.ROCK && playerMove === GameMove.PAPER) ||
      (enemyMove === GameMove.PAPER && playerMove === GameMove.SCISSORS) ||
      (enemyMove === GameMove.SCISSORS && playerMove === GameMove.ROCK)
    );
  }

  private isGameLost(enemyMove: GameMove, playerMove: GameMove): boolean {
    return (
      (enemyMove === GameMove.PAPER && playerMove === GameMove.ROCK) ||
      (enemyMove === GameMove.SCISSORS && playerMove === GameMove.PAPER) ||
      (enemyMove === GameMove.ROCK && playerMove === GameMove.SCISSORS)
    );
  }
}
