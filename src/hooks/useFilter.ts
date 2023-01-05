import { strategies, Sort } from './SortStrategy';
import { useAppSelector } from '../redux/store';
import { selectPizzas } from '../redux/pizzas/selectors';
import { selectIndexActiveCategory } from '../redux/categories/selectors';
import { selectIndexActiveSort } from '../redux/sorts/selectors';
import type { Pizzas } from '../redux/pizzas/types';

// Назначение хука:
// Используется для получения отфильтрованного
// и отсортированного списка с пиццей (Pizza[])

// Вызов хука:
// Изменение сортировки или категории пользователем в UI
// изменяет indexActiveSort и indexActiveCategory
// Это приведет к повторному выполнению хука.

const useFetchPizzas = (): Pizzas => {
  const pizzas = useAppSelector(selectPizzas);
  const indexActiveSort = useAppSelector(selectIndexActiveSort);
  const indexActiveCategory = useAppSelector(selectIndexActiveCategory);

  // indexActiveCategory = 0 = "Все"
  const filtredPizzas = indexActiveCategory
    ? pizzas.filter((pizza) => pizza.category === indexActiveCategory)
    : pizzas;

  const Strategy = strategies[indexActiveSort];
  const sortedFiltredPizzas = new Sort(
    filtredPizzas,
    Strategy,
  ).getSortedPizzas();
  return sortedFiltredPizzas;
};

export default useFetchPizzas;
