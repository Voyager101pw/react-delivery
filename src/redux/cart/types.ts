export type CartDetails = {
  totalPizzas: number;
  totalPrice: number;
};

export type CartItem = {
  id: string;
  name: string;
  type: string;
  size: number;
  imageUrl: string;
  price: number;
  amount: number;
};

export type CartItems = CartItem[];
