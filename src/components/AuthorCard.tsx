import { Link } from "react-router-dom";
import { Author } from "../types";

interface ComponentProps {
  author: Author;
}

const AuthorCard: React.FC<ComponentProps> = ({ author }) => {
  return (
    <>
      <Link to={"authors/" + author.id}>
        <div className="flex flex-col justify-center rounded-md overflow-hidden shadow-md border-b-2 border-b-sky-400 shadow-gray-200">
          <img
            src={author.coverImage && author.coverImage}
            alt=""
            className="w-full h-24 sm:h-40 object-cover bg-slate-900"
          />
          <div className="flex flex-col items-center -mt-10 sm:-mt-14">
            <img
              src={
                author.profileImage
                  ? author.profileImage
                  : author.gender === "M"
                  ? "/images/profile-man.jpg"
                  : "/images/profile-woman.jpg"
              }
              alt={author.userName}
              className="w-20 sm:w-28 h-20 sm:h-28 object-cover rounded-full border-2 border-white"
            />
            <h3 className="font-bold text-lg">{author.userName}</h3>
            <p>{author.userName}</p>
            <div className="flex justify-center gap-6 w-full border-t-[1px] px-4 py-2 mt-4">
              <p>
                <strong>3k</strong> followers
              </p>
              <p>
                <strong>300</strong> posts
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* {authors.map((author, index) => (
        <Link to={"authors/" + author.id}>
          <div
            key={index}
            className="flex flex-col justify-center rounded-md overflow-hidden shadow-md shadow-gray-200"
          >
            <img
              src={author.profileImage}
              alt=""
              className="w-full h-32 object-cover"
            />
            <div className="flex flex-col items-center -mt-16">
              <img
                src={author.profileImage}
                alt={author.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-100"
              />
              <h3 className="font-bold text-lg">{author.name}</h3>
              <p>{author.category}</p>
              <div className="flex justify-center gap-6 w-full bg-gray-100 p-4 mt-4">
                <p>
                  <strong>3k</strong> followers
                </p>
                <p>
                  <strong>300</strong> posts
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))} */}
    </>
  );
};
export default AuthorCard;
