import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Item, Category, CartItem, Context } from '../type/Type'
import { categoryList, productList } from '../data/ProductData';

const AppContext = createContext<Context | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [product] = useState<Item[]>(productList)

  const [categories] = useState<Category[]>(categoryList)

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItemToCart = (productDetail: Item) => {
    const isCartItemPresent = cartItems.find(element => element.id === productDetail.id)
    console.log(isCartItemPresent);

    if (isCartItemPresent) {
      setCartItems(cartItems.map(element =>
        element.id === productDetail.id ? { ...element, count: element.count + 1 } : element
      ))
    } else {
      setCartItems([...cartItems, { ...productDetail, count: 1 }])
    }
  }

  const removeCartItem = (product: Item) => {
    setCartItems(cartItems.filter(element => element.id !== product.id))
  }

  const decreaseCountInCart = (id: string) => {
    cartItems.map(element => {
      if (element.count === 0) {
        removeCartItem(element)
      }
    }
    )
    setCartItems(cartItems.map(element =>
      element.id === id && element.count > 0 ? { ...element, count: element.count - 1 } : element
    ))
    
  }

  const contextValue: Context = {
    product,
    cartItems,
    categories,
    addItemToCart,
    decreaseCountInCart,
    removeCartItem
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>

}

export const contextProvider = (): Context => {
  const contextObj = useContext(AppContext)
  if (!contextObj) {
    throw new Error("Error accessing context");
  }
  return contextObj
}
