const CardAltSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-md w-full h-60 bg-gray-200 animate-pulse"></div>
      {/* <div className="h-10 bg-gray-200"></div> */}
      <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>
      <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
      <div className="h-4 rounded-sm bg-gray-200 animate-pulse"></div>
      <div className="w-1/3 h-8 rounded-sm bg-gray-200 animate-pulse"></div>
    </div>
  );
};
export default CardAltSkeleton;
