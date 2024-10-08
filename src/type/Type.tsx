import { ReactNode } from "react";

export interface Item {
  id: string;
  name: string;
  price: number;
  img: string;
  count?: number;
  category?: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface CartItem extends Item {
  count: number;
}

export interface Context {
  product: Item[];
  cartItems: CartItem[];
  categories: Category[];
  addItemToCart: (product: Item) => void;
  decreaseCountInCart: (id: string) => void;
  removeCartItem: (product: Item) => void;
  isCheckoutComplete: boolean;
  completeCheckout: () => void;
}

export interface AuthProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface Address {
  userName: string;
  firstName: string;
  lastName: string;
  companyName: string;
  houseNo: string;
  street?: string;
  town: string;
  state: string;
  code: string;
  phoneNumber: string;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface Order {
  orderNumber?: number;
  date: string;
  total: number;
  paymentMethod: string;
  items: CartItem[];
  address: Address;
}

export interface TotalValue {
  total: number;
}

export interface CartListProps {
  element: CartItem;
  key: string;
}

export interface CheckOutListProps {
  element: CartItem;
}

export interface CountButtonProps {
  item: Item;
  count: number;
  variant: string;
  className: string;
}

export interface HomePageCategoryProps {
  index: number;
  element: Category;
  page: string;
}

export interface Input {
  type: string;
  className: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: any) => void;
  name?: string;
  id?: string;
}

export interface NavLinkProps {
  className: string;
  toLink: string;
  children: string;
  index: number;
}

export interface OrderCartItemsProps {
  element: CartItem;
}

export interface ProductProps {
  index: string;
  item: Item;
}

export interface HomePageProps {
  page: string;
}

export interface ProductPageProps {
  page: string;
  category: string;
}
