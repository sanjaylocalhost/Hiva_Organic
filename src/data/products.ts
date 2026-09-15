export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  variants: { size: string; price: number; mrp: number; stock: number; sku: string }[];
}

export const products: Product[] = [
  {
    slug: 'cold-pressed-coconut-oil',
    name: 'Cold Pressed Coconut Oil',
    category: 'Oils',
    description: 'Pure, cold-pressed coconut oil — unrefined, natural aroma, no additives.',
    image: '/images/coconut-oil.jpg',
    variants: [
      { size: '250 ml', price: 199, mrp: 249, stock: 80, sku: 'HIV-CO-250' },
      { size: '500 ml', price: 349, mrp: 449, stock: 60, sku: 'HIV-CO-500' },
      { size: '1 L',    price: 649, mrp: 799, stock: 45, sku: 'HIV-CO-1L' },
      { size: '2 L',    price: 1249, mrp: 1499, stock: 20, sku: 'HIV-CO-2L' },
      { size: '5 L',    price: 2999, mrp: 3499, stock: 8, sku: 'HIV-CO-5L' },
    ],
  },
  {
    slug: 'groundnut-oil',
    name: 'Cold Pressed Groundnut Oil',
    category: 'Oils',
    description: 'Traditional wood-pressed groundnut oil with natural flavour.',
    image: '/images/groundnut-oil.jpg',
    variants: [
      { size: '1 L', price: 299, mrp: 349, stock: 40, sku: 'HIV-GO-1L' },
      { size: '5 L', price: 1399, mrp: 1599, stock: 15, sku: 'HIV-GO-5L' },
    ],
  },
  {
    slug: 'organic-honey',
    name: 'Organic Wild Forest Honey',
    category: 'Honey',
    description: 'Raw, unfiltered honey sourced from wild forest hives.',
    image: '/images/honey.jpg',
    variants: [
      { size: '250 g', price: 249, mrp: 299, stock: 30, sku: 'HIV-HN-250' },
      { size: '500 g', price: 449, mrp: 549, stock: 22, sku: 'HIV-HN-500' },
    ],
  },
];