import { Link } from "react-router-dom";
import { authors } from "../data/defaultPosts.json";

const AuthorCard = () => {
  if (!authors) {
    return <>Data not found!</>;
  }
  return (
    <>
      {authors.map((author, index) => (
        <Link to="authors/2">
          <div
            key={index}
            className="flex flex-col justify-center bg-gray-100 rounded-lg overflow-hidden shadow-md shadow-gray-200"
          >
            <img
              src={author.profileImage}
              alt=""
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col items-center  -mt-16">
              <img
                src={author.profileImage}
                alt={author.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-gray-100"
              />
              <h3 className="font-bold text-lg">{author.name}</h3>
              <p>{author.category}</p>
              <div className="flex justify-center w-full bg-white gap-6 p-4 mt-4">
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
      ))}
    </>
  );
};
export default AuthorCard;
