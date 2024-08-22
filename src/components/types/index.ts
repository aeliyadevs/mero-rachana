export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: Array<number>;
  author: number;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  parent: number;
  count: number;
}
