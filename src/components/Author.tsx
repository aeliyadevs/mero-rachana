import { authors } from "../data/defaultPosts.json";

interface ComponentProps {
  authorId: number;
}
const Author: React.FC<ComponentProps> = ({ authorId }) => {
  const findAuthorById = (id: number | undefined) => {
    return authors.find((author) => author.id === id);
  };
  const author = findAuthorById(authorId);

  if (!author) {
    return <></>;
  }
  return (
    <div className="flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={author.profileImage}
        alt=""
      />
      <div>
        <p>
          <strong>{author.name}</strong>
        </p>
        <p>{author.category}</p>
      </div>
    </div>
  );
};
export default Author;
