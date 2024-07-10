interface ComponentProps {
  type: string;
  postId: string | undefined;
}
const HeadingOne: React.FC<ComponentProps> = ({ type, postId }) => {
  return (
    <h1 className="font-bold text-4xl capitalize mb-6">
      Single {type} : {postId}
    </h1>
  );
};
export default HeadingOne;
