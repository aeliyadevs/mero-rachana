import {
  posts,
  authors,
  comments,
  bookReviews,
} from "../data/defaultPosts.json";

export const GetPostComments = (postId: number) => {
  let postComments = comments.filter((comment) => comment.postId === postId);
  return postComments;
};

export const getPostById = (postId: number) => {
  return posts.find((post) => post.postId === postId);
};

export const getAuthorById = (id: number) => {
  return authors.find((author) => author.id === id);
};

export const getFeaturedPost = () => {
  return posts.filter((post) => post.featured === true);
};

export const getBookReviewById = (id: number) => {
  return bookReviews.find((review) => review.id === id);
};
