export type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  img?: string;
  size?: string;
  tags?: string[];
  category: Category;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  id: number;
  date: Date;
  cartItems: CartItem[];
  name: string;
};

export type Category = {
  id: string;
  name: string;
  img: string;
};

export type User = {
  username: string;
  password: string;
};
