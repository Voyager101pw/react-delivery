export type CartDetails = {
  totalPizzas: number;
  totalPrice: number;
};

export type CartItem = {
  id?: number;         // Его назначает MockAPI = id:1 , id: 2, id: 3, и тд. Используется для запросов.
  extendedId: string; // extendedId = имяПиццы+типПиццы+размерПиццы. Используется стором
  name: string;
  type: string;
  size: number;
  imageUrl: string;
  price: number;
  amount: number;
};


export type CartItems = CartItem[];
