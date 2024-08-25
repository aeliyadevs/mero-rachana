export interface Author {
  id: number;
  userName: string;
  profileImage: string;
  coverImage: string;
  gender: string;
  userTypeId: number;
}
export interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: Author;
  isFeatured: boolean;
}
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  parent: number;
  count: number;
}
export interface BookReview {
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  publishedYear: number;
  featuredImage: string;
}
