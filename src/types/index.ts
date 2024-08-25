export interface Author {
  id: number;
  userName: string;
  profileImage: string;
  coverImage: string;
  gender: string;
  userTypeId: number;
}
export interface Post {
  postId: number;
  postTitle: string;
  postTitleSlug: string;
  postExcerpt: string;
  postContent: string;
  featuredImage: string;
  category: Category;
  author: Author;
  isFeatured: boolean;
}
export interface Category {
  id: number;
  name: string;
  description: string;
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
