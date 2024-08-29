const SingleSkeleton = () => {
  return (
    <div className="w-7/12 mx-auto my-6">
      <div className="rounded-md h-[500px] mb-6 animate-fade"></div>
      <div className="h-12 animate-fade rounded-sm px-4 mb-4"></div>
      <div className="w-9/12 h-10 rounded-sm animate-fade mb-4"></div>
      <div className="w-2/12 h-5 animate-fade mb-4"></div>
      <div>
        <div className="w-full h-4 animate-fade mb-4"></div>
        <div className="w-full h-4 animate-fade mb-4"></div>
        <div className="w-full h-4 animate-fade mb-4"></div>
        <div className="w-full h-4 animate-fade mb-4"></div>
        <div className="w-1/2 h-4 animate-fade mb-4"></div>
      </div>
    </div>
  );
};
export default SingleSkeleton;
