import { useSelector } from 'react-redux';
import { useGetPizzasQuery } from '../store/apiSlice';
import { selectQuery } from '../store/filtersSlice';

const useFetchPizza = () => {
  const { categoryQuery, sortQuery } = useSelector(selectQuery);
  const queryString = categoryQuery + sortQuery;

  const { data: pizza = [], isLoading: pizzaIsLoading } =
    useGetPizzasQuery(queryString);

  return { pizza, pizzaIsLoading };
};

export default useFetchPizza;
