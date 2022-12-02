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
    return this.sum().reduce((previousValue, currentValue) =>
      previousValue > currentValue ? previousValue : currentValue
    );
  }
}
