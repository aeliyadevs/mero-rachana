import { useParams } from "react-router-dom";
import { getAuthorById } from "../../utils/GetData";
import FeaturedCard from "../../components/FeaturedCard";
import HeadingTwo from "../../components/ul/HeadingTwo";
import { posts } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";

const Profile = () => {
  const { id } = useParams();
  const author = getAuthorById(parseInt(id ? id : "0"));
  const postsByAuthorId = posts.filter(
    (post) => post.author === parseInt(id ? id : "0")
  );
  return (
    <div className="w-6/12 mx-auto my-16">
      <div className="w-full">
        <img
          src={author?.profileImage}
          alt=""
          className="w-full h-80 object-cover rounded-md"
        />
      </div>
      <div className="flex gap-6 items-center py-4">
        <img
          src={author?.profileImage}
          alt=""
          className="w-52 h-60 object-cover rounded-2xl  shadow-lg shadow-gray-400"
        />
        <div className="py-4">
          <h3 className="font-bold text-2xl">{author?.name}</h3>
          <p>{author?.category}</p>
          <p>
            <strong>3k</strong> followers | <strong>300</strong> posts
          </p>
          <p className="pl-4 my-3 border-l-4 border-sky-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo velit, quaerat harum magni eveniet ullam quod corporis
            neque deserunt voluptate aperiam voluptatibus quas saepe voluptates?
            Modi nihil odio eum id pariatur! Sit, fugit tenetur.
          </p>
          <div className="flex gap-4 pt-2">
            <div className="w-8 h-8 rounded-full bg-sky-400 text-white flex justify-center items-center">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-sky-400 text-white flex justify-center items-center">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-sky-400 text-white flex justify-center items-center">
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <HeadingTwo heading={author?.name + "'s post"} />
        <div className="grid grid-cols-2 gap-6">
          {postsByAuthorId.map((post) => (
            <CardAlt id={post.postId} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
