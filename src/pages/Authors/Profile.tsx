import { useParams } from "react-router-dom";
import { getAuthorById } from "../../utils/GetData";
import FeaturedCard from "../../components/FeaturedCard";
import HeadingTwo from "../../components/ui/HeadingTwo";
import { posts } from "../../data/defaultPosts.json";
import CardAlt from "../../components/CardAlt";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { Author, Post } from "../../types";

const Profile = () => {
  const { id } = useParams();
  // const author = getAuthorById(parseInt(id ? id : "0"));
  // const postsByAuthorId = posts.filter(
  //   (post) => post.author === parseInt(id ? id : "0")
  // );
  const [author, setAuthor] = useState<Author>();
  const [authorPosts, setAuthorPosts] = useState<Post[]>();
  const { response, error, loading, fetchData } = useAxios();

  const fetchAuthor = async () => {
    if (id) {
      await fetchData({ url: `/users/${id}`, method: "GET" }, (data: any) => {
        setAuthor(data);
        console.log(data);
      });
    }
  };

  const fetchAuthorPosts = async () => {
    if (id) {
      await fetchData(
        { url: "/posts", method: "GET", params: { authorId: id } },
        (data: any) => {
          setAuthorPosts(data);
        }
      );
    }
  };

  useEffect(() => {
    fetchAuthor();
    // if (author) {
    fetchAuthorPosts();
    // }
  }, []);

  return (
    <>
      {!author ? (
        <>Loading Author</>
      ) : (
        <div className="w-6/12 mx-auto mt-10">
          <div className="w-full">
            <img
              src={author.coverImage && author.coverImage}
              alt=""
              className="w-full h-80 object-cover rounded-md bg-slate-900"
            />
          </div>
          <div className="flex items-end -mt-32 p-6">
            <img
              src={
                author.profileImage
                  ? author.profileImage
                  : author.gender === "M"
                  ? "/images/profile-man.jpg"
                  : "/images/profile-woman.jpg"
              }
              alt=""
              className="w-60 h-60 object-cover rounded-lg shadow-lg shadow-gray-400"
            />
            <div className="px-4">
              <h3 className="font-bold text-3xl">
                {author.firstName} {author.middleName} {author.lastName}
              </h3>
              <p className="font-bold">@{author.userName}</p>
              <p>
                <strong>3k</strong> followers | <strong>300</strong> posts
              </p>
              <div className="flex gap-2 pt-2">
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
          <div className="px-6">
            <p className="pl-4 my-3 border-l-4 border-sky-200">
              {author.bio ? author.bio : "Bio is missing"}
            </p>
          </div>
          <div className="px-6 my-10">
            <HeadingTwo heading={author.firstName + "'s post"} />
            <div className="grid grid-cols-2 gap-6">
              {authorPosts?.length ? (
                authorPosts.map((post) => (
                  <CardAlt key={post.postId} post={post} />
                ))
              ) : (
                <>No posts created yet</>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
