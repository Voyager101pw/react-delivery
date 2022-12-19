import type { IPizza } from '../store/slices/pizzas';

// =========== Sort class ===========

interface ISort {
  getSortedPizzas(): IPizza[];
}

export class Sort implements ISort {
  constructor(public items: IPizza[], public Strategy: new () => StrategySort) {
    this.items = items;
    this.Strategy = Strategy;
  }

  getSortedPizzas(): IPizza[] {
    // return this.strategy.sort(this.items);
    const strategy = new this.Strategy();
    return strategy.sort(this.items);
  }
}

// =========== Sort strategies ===========

interface StrategySort {
  sort(items: IPizza[]): IPizza[];
}

class ByPopularDESC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.slice().sort((a, b) => b.rating - a.rating);
  }
}

class ByPopularASC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.slice().sort((a, b) => a.rating - b.rating);
  }
}

class ByPriceDESC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.slice().sort((a, b) => b.price - a.price);
  }
}

class ByPriceASC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.slice().sort((a, b) => a.price - b.price);
  }
}

class ByAlphabetDESC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.slice().sort().reverse();
  }
}

class ByAlphabetASC implements StrategySort {
  sort(items: IPizza[]): IPizza[] {
    return items.sort();
  }
}

export const strategies = [
  ByPopularDESC,    // Убыванию популярности 
  ByPopularASC,     // Возрастанию популярности
  ByPriceDESC,      // Убыванию цены
  ByPriceASC,       // Возрастанию цены
  ByAlphabetDESC,   // Убыванию алфавита
  ByAlphabetASC,    // Возрастанию алфавита
];
