import { useAppSelector } from '../store/hooks';
import { selectIndexActiveCategory } from '../store/slices/categories';
import { IPizza, selectPizzas } from '../store/slices/pizzas';
import { selectIndexActiveSort } from '../store/slices/sorts';
import { strategies, Sort } from './SortStrategy';

// Назначение хука:
// Используется для получения отфильтрованного
// и отсортированного списка с пиццей (Pizza[])

// Вызов хука:
// Изменение сортировки или категории пользователем в UI
// изменяет indexActiveSort и indexActiveCategory
// Это приведет к повторному выполнению хука.

const useFetchPizzas = (): IPizza[] => {
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
