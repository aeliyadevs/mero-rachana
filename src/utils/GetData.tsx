import {
  posts,
  categories,
  authors,
  comments,
  bookReviews,
} from "../data/defaultPosts.json";

export const GetPostComments = (postId: number) => {
  let postComments = comments.filter((comment) => comment.postId === postId);
  return postComments;
};

export const getLatestPosts = (count: number) => {
  return posts.slice(-count);
};

export const getPostById = (postId: number) => {
  return posts.find((post) => post.postId === postId);
};

export const getPostsByCategory = (category: number) => {
  return posts.filter((post) => post.category === category);
};

export const getCategoryName = (id: number) => {
  const category = categories.find((category) => category.id === id);
  return category?.name;
};

export const getAuthorById = (id: number) => {
  return authors.find((author) => author.id === id);
};

export const getFeaturedPost = () => {
  return posts.filter((post) => post.featured === true);
};

export const getLatestBookReviews = (count: number) => {
  return bookReviews.slice(-count);
};

export const getBookReviewById = (id: number) => {
  return bookReviews.find((review) => review.id === id);
};
