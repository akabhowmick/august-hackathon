export interface Destination {
  _id: string;
  name: string;
  description: string;
  location: {
    city: string;
    country: string;
  };
  category: string;
  popularityScore: number;
}
