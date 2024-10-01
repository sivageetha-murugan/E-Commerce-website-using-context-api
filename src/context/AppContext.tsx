import React, { createContext, ReactNode, useContext, useState } from 'react'
import ring01 from '../assets/ring-02.jpg'

export interface Item {
  id: string,
  name: string,
  price: number,
  img: string,
  count?: number
}

export interface CartItem extends Item {
  count: number
}

export interface Context {
  product: Item[],
  cartItems: CartItem[],
  addItemToCart: (product: Item) => void,
  decreaseCountInCart: (id: string) => void,
  removeCartItem: (product: Item) => void
}

const AppContext = createContext<Context | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [product] = useState<Item[]>([
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'efhus',
      name: 'Ring 2',
      price: 999,
      img: ring01
    },
    {
      id: 'jvh',
      name: 'Ring 3',
      price: 7999,
      img: ring01
    },
    {
      id: 'oe',
      name: 'Ring 4',
      price: 1111,
      img: ring01
    },
    {
      id: 'inc',
      name: 'Ring 5',
      price: 8723,
      img: ring01
    },
    {
      id: 'ldd',
      name: 'Ring 6',
      price: 10999,
      img: ring01
    },
    {
      id: 'ijhu',
      name: 'Ring 7',
      price: 6999,
      img: ring01
    },
    {
      id: 'tdl',
      name: 'Ring 8',
      price: 9999,
      img: ring01
    },
    {
      id: 'ldd',
      name: 'Ring 9',
      price: 5614,
      img: ring01
    }
  ])

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItemToCart = (product: Item) => {
    const isCartItemPresent = cartItems.find(element => element.id === product.id)
    console.log(isCartItemPresent);

    if (isCartItemPresent) {
      setCartItems(cartItems.map(element =>
        element.id === product.id ? { ...element, count: element.count + 1 } : element
      ))
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }])
    }
  }

  const removeCartItem = (product: Item) => {
    setCartItems(cartItems.filter(element => element.id !== product.id))
  }

  const decreaseCountInCart = (id: string) => {
    setCartItems(cartItems.map(element =>
      element.id === id && element.count > 0 ? { ...element, count: element.count - 1 } : element
    ))
    cartItems.map(element => {
      if (element.count === 1) {
        removeCartItem(element)
      }
    }
    )
  }


  const contextValue: Context = {
    product,
    cartItems,
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
