import { comments } from "../data/defaultPosts.json";
export const GetPostComments = (postId: number) => {
  let postComments = comments.filter((comment) => comment.postId === postId);
  return postComments;
};
