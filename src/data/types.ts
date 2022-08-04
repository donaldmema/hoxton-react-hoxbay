export type ProductItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export type Category = {
  id: number;
  name: string;
};

export type BasketItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
  quantity: number;
};
