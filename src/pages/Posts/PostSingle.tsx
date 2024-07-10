import { useParams } from "react-router-dom";
import Single from "../../templates/Single";

const PostSingle = () => {
  let { id } = useParams();
  return (
    <>
      <Single type="post" postId={id} />
    </>
  );
};
export default PostSingle;
