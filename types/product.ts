export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface AnalyticsPayload {
  event: string;
  timestamp: string;
  page: string;
}
