import { persistentAtom } from '@nanostores/persistent';

export interface WishlistItem {
  sku: string;
  slug: string;
  name: string;
  price: number;
  mrp?: number;
  image?: string;
  category?: string;
}

export const wishlist = persistentAtom<WishlistItem[]>('hiva-wishlist', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function wishlistCount(items: WishlistItem[]) {
  return items.length;
}

export function isInWishlist(sku: string) {
  return wishlist.get().some(i => i.sku === sku);
}

export function toggleWishlist(item: WishlistItem) {
  const items = wishlist.get();
  const exists = items.find(i => i.sku === item.sku);
  if (exists) {
    wishlist.set(items.filter(i => i.sku !== item.sku));
    return false; // removed
  } else {
    wishlist.set([...items, item]);
    return true; // added
  }
}

export function removeFromWishlist(sku: string) {
  wishlist.set(wishlist.get().filter(i => i.sku !== sku));
}

export function clearWishlist() {
  wishlist.set([]);
}