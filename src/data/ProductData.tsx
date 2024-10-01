import { Category, Item } from "../type/Type"
import ring01 from '../assets/ring-01.jpg'
import ring02 from '../assets/ring-02.jpg'
import ring03 from '../assets/ring-03.jfif'
import ring04 from '../assets/ring-04.jpg'
import ring05 from '../assets/ring-05.jpg'
import ring06 from '../assets/ring-06.webp'
import ring07 from '../assets/ring-07.jpg'
import ring08 from '../assets/ring-08.webp'
import ring09 from '../assets/ring-09.avif'

export const productList: Item[] = [
  { id: 'fjw', name: 'Ring 1', price: 1299, img: ring01, category: 'Rings' },
  { id: 'efhus', name: 'Bracelet 1', price: 999, img: ring02, category: 'Bracelets' },
  { id: 'jvh', name: 'Ring 3', price: 7999, img: ring03, category: 'Rings' },
  { id: 'oe', name: 'Ring 4', price: 1111, img: ring04, category: 'Rings' },
  { id: 'inc', name: 'Ring 5', price: 8723, img: ring05, category: 'Rings' },
  { id: 'ldd', name: 'Ring 6', price: 10999, img: ring06, category: 'Rings' },
  { id: 'ijhu', name: 'Ring 7', price: 6999, img: ring07, category: 'Rings' },
  { id: 'tdl', name: 'Ring 8', price: 9999, img: ring08, category: 'Rings' },
  { id: 'ldd', name: 'Ring 9', price: 5614, img: ring09, category: 'Rings' },
  { id: 'ldd', name: 'Ring 9', price: 5614, img: ring09, category: 'Rings' },
  { id: 'efes', name: 'Bracelet 2', price: 999, img: ring02, category: 'Bracelets' },
  { id: 'lfk', name: 'Bracelet 3', price: 999, img: ring02, category: 'Bracelets' },
  { id: 'eifhw', name: 'Bracelet 4', price: 999, img: ring02, category: 'Bracelets' },
  { id: 'dvlk', name: 'Earrings 1', price: 5614, img: ring09, category: 'Earrings' },
  { id: 'alcvw', name: 'Earrings 2', price: 999, img: ring02, category: 'Earrings' },
  { id: 'slfv', name: 'Earrings 3', price: 999, img: ring02, category: 'Earrings' },
  { id: 'lf', name: 'Earrings 4', price: 999, img: ring02, category: 'Earrings' },
  { id: 'losfw', name: 'Necklaces 1', price: 5614, img: ring09, category: 'Necklaces' },
  { id: 'sovj', name: 'Necklaces 2', price: 999, img: ring02, category: 'Necklaces' },
  { id: 'kfiod', name: 'Necklaces 3', price: 999, img: ring02, category: 'Necklaces' },
  { id: 'ovkv', name: 'Necklaces 4', price: 999, img: ring02, category: 'Necklaces' },
]

export const categoryList: Category[] = [
  { id: "jhrf", name: 'Rings' },
  { id: "injl", name: 'Bracelets' },
  { id: "trdk", name: 'Earrings' },
  { id: "spmb", name: 'Necklaces' }
]