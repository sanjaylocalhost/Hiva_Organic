import { persistentAtom } from '@nanostores/persistent';

export interface CartItem {
  sku: string;
  slug: string;
  name: string;
  size: string;
  price: number;
  mrp?: number;
  image?: string;
  quantity: number;
}

export const cart = persistentAtom<CartItem[]>('hiva-cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

// Derived totals
export function cartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

// Actions
export function addToCart(item: Omit<CartItem, 'quantity'>, qty = 1) {
  const items = cart.get();
  const existing = items.find(i => i.sku === item.sku);
  if (existing) {
    cart.set(items.map(i =>
      i.sku === item.sku ? { ...i, quantity: i.quantity + qty } : i
    ));
  } else {
    cart.set([...items, { ...item, quantity: qty }]);
  }
}

export function removeFromCart(sku: string) {
  cart.set(cart.get().filter(i => i.sku !== sku));
}

export function updateQuantity(sku: string, qty: number) {
  if (qty <= 0) return removeFromCart(sku);
  cart.set(cart.get().map(i => i.sku === sku ? { ...i, quantity: qty } : i));
}

export function clearCart() {
  cart.set([]);
}