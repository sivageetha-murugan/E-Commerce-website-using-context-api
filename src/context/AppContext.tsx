import React, { createContext, ReactNode, useContext, useState } from 'react'
import ring01 from '../assets/ring-02.jpg'

export interface Item {
  id: string,
  name: string,
  price: number,
  img: string
}

export interface CartItem extends Item {
  count : number
}

export interface Context {
  product: Item[],
  cartItems: CartItem[],
  addItemToCart: (product: Item) => void,
  decreaseCountInCart: (id:string) => void
}

const AppContext = createContext<Context | undefined>(undefined);

export const AppContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [product] = useState<Item[]>([
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    },
    {
      id: 'fjw',
      name: 'Ring 1',
      price: 1299,
      img: ring01
    }
  ])

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addItemToCart = (product: Item) => {
      const isCartItemPresent = cartItems.find(element => {element.id === product.id})
      if(isCartItemPresent) {
        setCartItems(cartItems.map(element => 
          element.id === product.id ? {...element, count: element.count + 1} : element
        ))
      } else {
        setCartItems([...cartItems, {...product, count: 1}])
      }
  }

  const decreaseCountInCart = (id: string) => {
    setCartItems(cartItems.map(element => 
      element.id === id ? {...element, count: element.count - 1} : element
    ))
  }

  const contextValue: Context =  {
    product,
    cartItems,
    addItemToCart,
    decreaseCountInCart
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  
}

export const contextProvider = (): Context => {
  const contextObj = useContext(AppContext)
  if(!contextObj) {
    throw new Error("gh");
  }
  return contextObj
}
