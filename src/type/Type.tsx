export interface Item {
  id: string,
  name: string,
  price: number,
  img: string,
  count?: number,
  category?: string
}

export interface Category {
  id: string,
  name: string
}

export interface CartItem extends Item {
  count: number
}

export interface Context {
  product: Item[],
  cartItems: CartItem[],
  categories: Category[],
  addItemToCart: (product: Item) => void,
  decreaseCountInCart: (id: string) => void,
  removeCartItem: (product: Item) => void
  calculateTotal: {total: number}
}