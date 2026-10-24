export interface Rating {
  name: string;
  count: number;
}

export interface AppData {
  id: number;
  image: string;
  title: string;
  companyName: string;
  description: string;
  size: number;
  reviews: number;
  ratingAvg: number;
  downloads: number;
  ratings: Rating[];
}