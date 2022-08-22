export interface Product {
  id: number;
  label: string;
  price: number;
  brand: Brand;
  owner: Owner;
  pictures: Picture[];
}

export interface Brand {
  id: number;
  label: string;
}

export interface Picture {
  id: number;
  fileName: string;
}

export interface Owner {
  id: number;
  nickname: string;
  picture?: Picture;
}

export interface Page<T> {
  content: T[];
  numberOfElements: number;
  page: number;
  totalElements: number;
}

export interface MousePosition {
  x: number;
  y: number;
}
