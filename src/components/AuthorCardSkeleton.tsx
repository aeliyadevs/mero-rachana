const AuthorCardSkeleton = () => {
  return (
    <div className="rounded-md overflow-hidden">
      <div className="w-full h-24 sm:h-40 animate-fade"></div>
      <div className="flex flex-col items-center gap-2 -mt-10 sm:-mt-14">
        <div className="w-20 sm:w-28 h-20 sm:h-28 object-cover rounded-full border-2 border-white animate-fade"></div>
        <div className="w-1/2 h-5 bg-black animate-fade"></div>
        <div className="w-1/3 h-3 bg-black animate-fade"></div>
      </div>
      <div className="w-full h-11 animate-fade mt-5"></div>
    </div>
  );
};
export default AuthorCardSkeleton;
