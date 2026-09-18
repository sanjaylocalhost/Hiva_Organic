// src/data/products.ts

export interface Variant {
  sku: string;
  size: string;
  price: number;
  mrp: number;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  variants: Variant[];
}

export const products: Product[] = [

  {
    slug: 'cold-pressed-coconut-oil',
    name: 'Cold Pressed Coconut Oil',
    category: 'coconut-oil',
    description: 'Pure, cold-pressed coconut oil — unrefined, natural aroma, no additives. Perfect for cooking, skin, and hair.',
    image: '/images/h1.jpeg',
    badge: 'BESTSELLER',
    rating: 4.8,
    reviews: 214,
    variants: [
      { sku: 'COCO-250', size: '250 ml', price: 199, mrp: 249 },
      { sku: 'COCO-500', size: '500 ml', price: 349, mrp: 449 },
      { sku: 'COCO-1L',  size: '1 L',    price: 649, mrp: 799 },
      { sku: 'COCO-2L',  size: '2 L',    price: 1249, mrp: 1499 },
      { sku: 'COCO-5L',  size: '5 L',    price: 2999, mrp: 3499 },
    ],
  },

  {
    slug: 'cold-pressed-groundnut-oil',
    name: 'Cold Pressed Groundnut Oil',
    category: 'oil',
    description: 'Wood-pressed groundnut oil with rich aroma and authentic taste. Ideal for everyday cooking and frying.',
    image: '/images/h1.jpeg',
    badge: 'BESTSELLER',
    rating: 4.7,
    reviews: 189,
    variants: [
      { sku: 'GN-500', size: '500 ml', price: 199, mrp: 249 },
      { sku: 'GN-1L',  size: '1 L',    price: 349, mrp: 449 },
      { sku: 'GN-5L',  size: '5 L',    price: 1599, mrp: 1899 },
    ],
  },

  {
    slug: 'cold-pressed-sesame-oil',
    name: 'Cold Pressed Sesame Oil',
    category: 'oil',
    description: 'Traditional chekku-pressed sesame oil. Nutty flavor, rich in antioxidants, perfect for South Indian cooking.',
    image: '/images/img5.jpeg',
    rating: 4.6,
    reviews: 142,
    variants: [
      { sku: 'SE-250', size: '250 ml', price: 149, mrp: 199 },
      { sku: 'SE-500', size: '500 ml', price: 279, mrp: 349 },
      { sku: 'SE-1L',  size: '1 L',    price: 499, mrp: 649 },
    ],
  },

  {
    slug: 'cold-pressed-mustard-oil',
    name: 'Cold Pressed Mustard Oil',
    category: 'oil',
    description: 'Kachi ghani mustard oil — pungent, pure, and perfect for pickles, curries, and traditional recipes.',
    image: '/images/img7.jpeg',
    rating: 4.5,
    reviews: 98,
    variants: [
      { sku: 'MU-500', size: '500 ml', price: 179, mrp: 229 },
      { sku: 'MU-1L',  size: '1 L',    price: 329, mrp: 429 },
      { sku: 'MU-5L',  size: '5 L',    price: 1499, mrp: 1799 },
    ],
  },

  {
    slug: 'cold-pressed-sunflower-oil',
    name: 'Cold Pressed Sunflower Oil',
    category: 'oil',
    description: 'Light, healthy sunflower oil cold-pressed to retain natural vitamins. Great for daily cooking.',
    image: '/images/img11.jpeg',
    rating: 4.4,
    reviews: 76,
    variants: [
      { sku: 'SF-1L', size: '1 L', price: 289, mrp: 379 },
      { sku: 'SF-5L', size: '5 L', price: 1299, mrp: 1599 },
    ],
  },

  {
    slug: 'cold-pressed-almond-oil',
    name: 'Cold Pressed Almond Oil',
    category: 'oil',
    description: 'Pure sweet almond oil — perfect for skin, hair, and baby massage. Cold-pressed and unrefined.',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&q=80',
    badge: 'PREMIUM',
    rating: 4.9,
    reviews: 156,
    variants: [
      { sku: 'AL-100', size: '100 ml', price: 399, mrp: 499 },
      { sku: 'AL-200', size: '200 ml', price: 749, mrp: 949 },
      { sku: 'AL-500', size: '500 ml', price: 1699, mrp: 2099 },
    ],
  },

  {
    slug: 'cold-pressed-castor-oil',
    name: 'Cold Pressed Castor Oil',
    category: 'oil',
    description: 'Pure castor oil for hair growth, skin care, and traditional wellness. Hexane-free, cold-pressed.',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    rating: 4.6,
    reviews: 118,
    variants: [
      { sku: 'CA-100', size: '100 ml', price: 149, mrp: 199 },
      { sku: 'CA-200', size: '200 ml', price: 249, mrp: 349 },
      { sku: 'CA-500', size: '500 ml', price: 549, mrp: 699 },
    ],
  },

  {
    slug: 'cold-pressed-black-seed-oil',
    name: 'Cold Pressed Black Seed Oil',
    category: 'oil',
    description: 'Kalonji (black seed) oil — cold-pressed, rich in thymoquinone. For immunity and wellness.',
    image: '/images/img3.jpeg',
    badge: 'NEW',
    rating: 4.8,
    reviews: 87,
    variants: [
      { sku: 'BS-100', size: '100 ml', price: 449, mrp: 599 },
      { sku: 'BS-200', size: '200 ml', price: 849, mrp: 1099 },
    ],
  },

  {
    slug: 'cold-pressed-olive-oil',
    name: 'Cold Pressed Olive Oil',
    category: 'oil',
    description: 'Extra virgin olive oil, cold-pressed from premium olives. Perfect for salads, dips, and cooking.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80',
    badge: 'PREMIUM',
    rating: 4.7,
    reviews: 132,
    variants: [
      { sku: 'OL-250', size: '250 ml', price: 499, mrp: 649 },
      { sku: 'OL-500', size: '500 ml', price: 899, mrp: 1199 },
      { sku: 'OL-1L',  size: '1 L',    price: 1699, mrp: 2199 },
    ],
  },

  {
    slug: 'cold-pressed-cow-ghee',
    name: 'A2 Cow Ghee (Bilona)',
    category: 'ghee',
    description: 'Traditional bilona-method A2 cow ghee — grainy, aromatic, and rich in nutrients.',
    image: '/images/img2.jpeg',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviews: 245,
    variants: [
      { sku: 'GH-250', size: '250 ml', price: 449, mrp: 599 },
      { sku: 'GH-500', size: '500 ml', price: 849, mrp: 1099 },
      { sku: 'GH-1L',  size: '1 L',    price: 1599, mrp: 1999 },
    ],
  },

  {
    slug: 'organic-wild-forest-honey',
    name: 'Organic Wild Forest Honey',
    category: 'honey',
    description: 'Raw, unfiltered wild forest honey — single-origin, straight from the hive. No sugar, no additives.',
    image: '/images/img8.jpeg',
    badge: 'BESTSELLER',
    rating: 4.8,
    reviews: 189,
    variants: [
      { sku: 'HO-250', size: '250 g', price: 249, mrp: 299 },
      { sku: 'HO-500', size: '500 g', price: 449, mrp: 599 },
      { sku: 'HO-1KG', size: '1 kg',  price: 849, mrp: 1099 },
    ],
  },

  {
    slug: 'organic-multiflora-honey',
    name: 'Organic Multiflora Honey',
    category: 'honey',
    description: 'Everyday multiflora honey — mild, smooth, and pure. Great for tea, toast, and cooking.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    rating: 4.6,
    reviews: 121,
    variants: [
      { sku: 'MH-250', size: '250 g', price: 199, mrp: 249 },
      { sku: 'MH-500', size: '500 g', price: 349, mrp: 449 },
      { sku: 'MH-1KG', size: '1 kg',  price: 649, mrp: 849 },
    ],
  },

];