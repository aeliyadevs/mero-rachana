import { Link } from "react-router-dom";
import { Writer } from "../types";
import WriterCardSkeleton from "./WriterCardSkeleton";

interface ComponentProps {
  loading?: boolean;
  writer?: Writer;
}

const WriterCard: React.FC<ComponentProps> = ({ loading, writer }) => {
  return (
    <>
      {loading ? (
        <>
          <WriterCardSkeleton />
          <WriterCardSkeleton />
          <WriterCardSkeleton />
          <WriterCardSkeleton />
        </>
      ) : (
        writer && (
          <Link to={"/writers/" + writer.id}>
            <div className="flex flex-col justify-center rounded-md overflow-hidden shadow-md border-b-2 border-b-sky-400 shadow-gray-200">
              <img
                src={writer.coverImage && writer.coverImage}
                alt=""
                className="w-full h-24 sm:h-40 object-cover bg-slate-900"
              />
              <div className="flex flex-col items-center -mt-10 sm:-mt-14">
                <img
                  src={
                    writer.profileImage
                      ? writer.profileImage
                      : writer.gender === "M"
                      ? "/images/profile-man.jpg"
                      : "/images/profile-woman.jpg"
                  }
                  alt={writer.userName}
                  className="w-20 sm:w-28 h-20 sm:h-28 object-cover rounded-full border-2 border-white"
                />
                <h3 className="font-bold text-lg">
                  {writer.firstName} {writer.middleName && writer.middleName}{" "}
                  {writer.lastName}
                </h3>
                <p>{writer.userName}</p>
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
        )
      )}
    </>
  );
};
export default WriterCard;
