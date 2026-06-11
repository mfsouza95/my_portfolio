'use client'
import { createContext, useContext, useReducer } from 'react';
import { CartState, CartAction } from "../types";

const initialState: CartState = {
  items: {},
  isOpen: false,
};

function totalQuantity(items: CartState['items']): number {
  return Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items[action.productId];
      if (existing && existing.quantity >= 99) return { ...state, isOpen: true };
      return {
        isOpen: true,
        items: {
          ...state.items,
          [action.productId]: {
            fileUrl: action.fileUrl,
            title: action.title,
            quantity: existing ? existing.quantity + 1 : 1,
          },
        },
      };
    }
    case 'INCREASE': {
      const existing = state.items[action.productId];
      if (!existing || existing.quantity >= 99) return state;
      return {
        ...state,
        items: {
          ...state.items,
          [action.productId]: { ...existing, quantity: existing.quantity + 1 },
        },
      };
    }
    case 'DECREASE': {
      const existing = state.items[action.productId];
      if (!existing) return state;
      if (existing.quantity <= 1) {
        const { [action.productId]: _, ...rest } = state.items;
        const isEmpty = Object.keys(rest).length === 0;
        return { items: rest, isOpen: isEmpty ? false : state.isOpen };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.productId]: { ...existing, quantity: existing.quantity - 1 },
        },
      };
    }
    case 'CLEAR_ITEM': {
      const { [action.productId]: _, ...rest } = state.items;
      const isEmpty = Object.keys(rest).length === 0;
      return { items: rest, isOpen: isEmpty ? false : state.isOpen };
    }
    case 'CLEAR_ALL':
      return { items: {}, isOpen: false };
    case 'TOGGLE_SIDEBAR':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_SIDEBAR':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

interface CartContextValue {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  totalQuantity: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch, totalQuantity: totalQuantity(state.items) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}