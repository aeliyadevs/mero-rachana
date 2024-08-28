// import { authors } from "../data/defaultPosts.json";

import { Author as author } from "../types";

interface ComponentProps {
  author: author;
}
const WriterCardMini: React.FC<ComponentProps> = ({ author }) => {
  return (
    <div className="flex gap-3">
      <img
        className="w-12 h-12 rounded-full"
        src={
          author.profileImage
            ? author.profileImage
            : author.gender == "M"
            ? "/images/profile-man.jpg"
            : "/images/profile-woman.jpg"
        }
        alt={author.userName}
      />
      <div>
        <p>
          <strong>
            {author.firstName} {author.lastName}
          </strong>
        </p>
        <p>@{author.userName}</p>
      </div>
    </div>
  );
};
export default WriterCardMini;
