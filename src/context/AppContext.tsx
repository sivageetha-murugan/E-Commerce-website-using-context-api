import { createContext, useContext, useReducer } from "react";
import {
  Context,
  AppContextProviderProps,
  ActionType,
  InitialState,
} from "../type/Type";
import { categoryList, productList } from "../data/ProductData";
import { actionTypes } from "../enums/actions";

const AppContext = createContext<Context | undefined>(undefined);

const initialState: InitialState = {
  product: productList,
  categories: categoryList,
  cartItems: [],
  isCheckoutComplete: false,
};

const reducer = (state: InitialState, action: ActionType): any => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const { productDetail } = action.payload;
      const isCartItemPresent = state.cartItems.find(
        (element) => element.id === productDetail.id
      );

      const updateCartItems = isCartItemPresent
        ? state.cartItems.map((element) =>
            element.id === productDetail.id
              ? { ...element, count: element.count + 1 }
              : element
          )
        : [...state.cartItems, { ...productDetail, count: 1 }];

      return { ...state, cartItems: updateCartItems };
    }

    case actionTypes.DECREASE_COUNT_IN_CART: {
      const { productId } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((element) =>
            element.id === productId && element.count > 0
              ? { ...element, count: element.count - 1 }
              : element
          )
          .filter((element) => element.count > 0),
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const { productDetail } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (element) => element.id !== productDetail.id
        ),
      };
    }

    case actionTypes.COMPLETE_CHECKOUT: {
      return {
        ...state,
        isCheckoutComplete: action.payload,
      };
    }

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: Context = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): Context => {
  const contextObj = useContext(AppContext);
  if (!contextObj) {
    throw new Error("Error accessing context");
  }
  return contextObj;
};
