// import { authors } from "../data/defaultPosts.json";

import { Author as author } from "../types";

interface ComponentProps {
  author: author;
}
const Author: React.FC<ComponentProps> = ({ author }) => {
  // const findAuthorById = (id: number | undefined) => {
  //   return authors.find((author) => author.id === id);
  // };
  // const author = findAuthorById(authorId);

  if (!author) {
    return <></>;
  }
  return (
    <div className="flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={author.profileImage}
        alt={author.userName}
      />
      <div>
        <p>
          <strong>{author.userName}</strong>
        </p>
        <p>{author.userName}</p>
      </div>
    </div>
  );
};
export default Author;
