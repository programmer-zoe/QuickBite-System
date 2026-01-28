// app/components/products/combo/types.ts

export type Combo = {
  id: number;
  name: string;
  desc: string;
  price: number;        // combo price
  originalPrice: number; // original total price (for strikethrough)
  icon?: string;
};

export type ComboDraft = {
  name: string;
  desc: string;
  price: string;         // keep as string for inputs
  originalPrice: string; // keep as string for inputs
  icon?: string;
};
