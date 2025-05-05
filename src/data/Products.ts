import products_1 from '@/assets/Products/Products_1.png'
import products_2 from '@/assets/Products/Products_2.png'
import products_3 from '@/assets/Products/Products_3.png'
import products_4 from '@/assets/Products/Products_4.png'
import products_5 from '@/assets/Products/Products_5.png'
import products_6 from '@/assets/Products/Products_6.png'
import products_7 from '@/assets/Products/Products_7.png'
import products_8 from '@/assets/Products/Products_8.png'
// import products_9 from '@/assets/Products/Products_9.png'
// import products_10 from '@/assets/Products/Products_10.png'
// import products_11 from '@/assets/Products/Products_11.png'
// import products_12 from '@/assets/Products/Products_12.png'
import { StaticImageData } from 'next/image'

export interface productType {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: StaticImageData | string;
  originalPrice: number | null;
  discountPercent: number | null;
  tags: string[];
}

export const products: productType[] = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: products_1,
    originalPrice: null,
    discountPercent: null,
    tags: ["new"],
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    rating: 3.5,
    image: products_2,
    originalPrice: 260,
    discountPercent: 20,
    tags: ["new"],
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: products_3,
    originalPrice: null,
    discountPercent: null,
    tags: ["new"],
  },
  {
    id: 4,
    name: "Sleeve Striped T-Shirt",
    price: 130,
    rating: 4.5,
    image: products_4,
    originalPrice: 160,
    discountPercent: 30,
    tags: ["new"],
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    rating: 5.0,
    image: products_5,
    originalPrice: 232,
    discountPercent: 20,
    tags: ["topsales"],
  },
  {
    id: 6,
    name: "Courage Graphic T-Shirt",
    price: 145,
    rating: 4.0,
    image: products_6,
    originalPrice: null,
    discountPercent: null,
    tags: ["topsales"],
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: products_7,
    originalPrice: null,
    discountPercent: null,
    tags: ["topsales"],
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
    image: products_8,
    originalPrice: null,
    discountPercent: null,
    tags: ["topsales"],
  },
];
