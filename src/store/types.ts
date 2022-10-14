export type Pizza = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export type CartItem = {
  id: string,
  name: string,
  type: string,
  size: number,
  imageUrl: string,
  price: number,
  amount: number
}