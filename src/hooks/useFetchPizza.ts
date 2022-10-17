import { useSelector } from 'react-redux';
import { useGetPizzasQuery } from '../store/apiSlice';
import { selectQuery } from '../store/filtersSlice';
import { Pizza } from '../store/types';

interface ReturnedPizzaType {
  pizza: Pizza[] | [];
  pizzaIsLoading: boolean;
}

export const useFetchPizza = (): ReturnedPizzaType => {
  const { categoryQuery, sortQuery } = useSelector(selectQuery);
  const queryString = categoryQuery + sortQuery;

  const { data: pizza = [], isLoading: pizzaIsLoading } = useGetPizzasQuery(queryString);

  return { pizza, pizzaIsLoading };
};
