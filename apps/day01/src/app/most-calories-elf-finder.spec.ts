import MostCaloriesElfFinder from './most-calories-elf-finder';

describe('Most calories elf finder', () => {
  it('should sum calories of each elves', () => {
    const finder = new MostCaloriesElfFinder(['1000,2000,3000', '4000']);
    expect(finder['sum']()).toEqual([6000, 4000]);
  });

  it('should return the biggest calories value', () => {
    const finder = new MostCaloriesElfFinder(['1000,2000,3000', '4000']);
    expect(finder.getBiggestCalories()).toEqual(6000);
  });

  it('should pass tests inputs', () => {
    const finder = new MostCaloriesElfFinder([
      '1000,2000,3000',
      '4000',
      '5000,6000',
      '7000,8000,9000',
      '10000',
    ]);
    expect(finder.getBiggestCalories()).toEqual(24000);
  });
});
