import React from 'react';
import {
  useGetPizzasQuery,
  useGetTotalDueQuery,
  useGetCartQuery,
  useGetAllowedValuesQuery,
} from '../../store/apiSlice';

const useFetchData = () => {
  const { data: pizzas, isLoading: pizzasIsLoading } = useGetPizzasQuery();
  const { data: allowedValuesCard, isLoading: valuesIsLoading } = useGetAllowedValuesQuery('card');
  const { data: cart, isLoading: cartIsLoading } = useGetCartQuery();
  const { data: totalDue, isLoading: totalDueIsLoading } = useGetTotalDueQuery();

  const fetchedData = React.useMemo(() => {
    const isLoading = pizzasIsLoading || valuesIsLoading || cartIsLoading || totalDueIsLoading;
    const data = {
      isLoading,
      data: {
        pizzas: pizzas ?? [],
        allowedValuesCard: allowedValuesCard ?? {},
        cart: cart ?? [],
        totalDue: totalDue?.totalDue ?? 0,
      },
    };
    return data;
  }, [pizzasIsLoading, valuesIsLoading, cartIsLoading, totalDueIsLoading]);

  return fetchedData;
};

export default useFetchData;
