const CardAltSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 rounded-md overflow-hidden">
      <div className="w-full h-60 animate-fade"></div>
      <div className="h-8 rounded-sm animate-fade"></div>
      <div className="h-4 rounded-sm animate-fade"></div>
      <div className="h-4 rounded-sm animate-fade"></div>
      <div className="w-1/3 h-8 rounded-sm animate-fade"></div>
    </div>
  );
};
export default CardAltSkeleton;
