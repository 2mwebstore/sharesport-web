export interface NewsItem {
  id: number;
  title: string;
  image: string;
  detail?: string;
  description?: string;
  slug?: string;
  created_by?: string;
  created_at?: string;
}
