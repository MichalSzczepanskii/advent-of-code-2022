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

  describe('test with sample data', () => {
    let finder: MostCaloriesElfFinder;
    beforeEach(() => {
      finder = new MostCaloriesElfFinder([
        '1000,2000,3000',
        '4000',
        '5000,6000',
        '7000,8000,9000',
        '10000',
      ]);
    });
    it('should pass tests inputs', () => {
      expect(finder.getBiggestCalories()).toEqual(24000);
    });

    it('should return sum calories in sorted array from the biggest', () => {
      expect(finder.getSortedCalories()).toEqual([
        24000, 11000, 10000, 6000, 4000,
      ]);
    });

    it('should return top 3 calories sum', () => {
      expect(finder.getTop(3)).toEqual([24000, 11000, 10000]);
    });

    it('should return top 1 calories sum', () => {
      expect(finder.getTop(1)).toEqual([24000]);
    });
  });
});
