import { useParams } from "react-router-dom";
import { getAuthorById } from "../../utils/GetData";
import FeaturedCard from "../../components/FeaturedCard";
import HeadingTwo from "../../components/ul/HeadingTwo";

const Profile = () => {
  const { id } = useParams();
  const author = getAuthorById(parseInt(id ? id : "0"));
  console.log(id);
  return (
    <div className="w-6/12 mx-auto my-16">
      <div className="w-full">
        <img
          src={author?.profileImage}
          alt=""
          className="w-full h-80 object-cover rounded-md"
        />
      </div>
      <div className="flex gap-6 items-center px-4">
        <img
          src={author?.profileImage}
          alt=""
          className="w-40 h-40 object-cover rounded-full border-white border-8 shadow-lg shadow-gray-400 mt-4"
        />
        <div className="py-4">
          <h3 className="font-bold text-2xl">{author?.name}</h3>
          <p>{author?.category}</p>
          <p>
            <strong>3k</strong> followers | <strong>300</strong> posts
          </p>
          <p className="pl-4 my-3 border-l-2 border-sky-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo velit, quaerat harum magni eveniet ullam quod corporis
            neque deserunt voluptate aperiam voluptatibus quas saepe voluptates?
            Modi nihil odio eum id pariatur! Sit, fugit tenetur.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex justify-center items-center">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex justify-center items-center">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-600 text-white flex justify-center items-center">
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-3">
          <HeadingTwo heading="All posts" />
        </div>
        <FeaturedCard id={1} />
        <FeaturedCard id={2} />
        <FeaturedCard id={3} />
      </div>
    </div>
  );
};
export default Profile;
