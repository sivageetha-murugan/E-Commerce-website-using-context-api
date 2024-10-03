import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { Item, Category, CartItem, Context } from "../type/Type";
import { categoryList, productList } from "../data/ProductData";

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContext = createContext<Context | undefined>(undefined);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [product] = useState<Item[]>(productList);
  const [categories] = useState<Category[]>(categoryList);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = useCallback(
    (productDetail: Item) => {
      const isCartItemPresent = cartItems.find(
        (element) => element.id === productDetail.id
      );

      if (isCartItemPresent) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((element) =>
            element.id === productDetail.id
              ? { ...element, count: element.count + 1 }
              : element
          )
        );
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...productDetail, count: 1 },
        ]);
      }
    },
    [cartItems]
  );

  const removeCartItem = useCallback((product: Item) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((element) => element.id !== product.id)
    );
  }, []);

  const decreaseCountInCart = useCallback((id: string) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((element) =>
          element.id === id && element.count > 0
            ? { ...element, count: element.count - 1 }
            : element
        )
        .filter((element) => element.count > 0)
    );
  }, []);

  const contextValue: Context = {
    product,
    cartItems,
    categories,
    addItemToCart,
    decreaseCountInCart,
    removeCartItem,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const contextProvider = (): Context => {
  const contextObj = useContext(AppContext);
  if (!contextObj) {
    throw new Error("Error accessing context");
  }
  return contextObj;
};
