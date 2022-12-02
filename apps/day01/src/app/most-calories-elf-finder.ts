export default class MostCaloriesElfFinder {
  private elvesCalories: string[];

  constructor(elvesCalories: string[]) {
    this.elvesCalories = elvesCalories;
  }

  private sum(): number[] {
    return this.elvesCalories.map((elfCalories) =>
      elfCalories
        .split(',')
        .map((value) => Number(value))
        .reduce((previousValue, currentValue) => previousValue + currentValue)
    );
  }

  getBiggestCalories() {
    return this.getTop(1)[0];
  }

  getSortedCalories() {
    return this.sum().sort((a, b) => b - a);
  }

  getTop(positions: number) {
    return this.getSortedCalories().slice(0, positions);
  }
}
