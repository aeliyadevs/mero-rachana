import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

interface ComponentProps {
  postId: number;
}
const Meta: React.FC<ComponentProps> = ({ postId }) => {
  const { loading, response, error, fetchData } = useAxios();
  const [views, setViews] = useState<number | null>(null);

  const getMetaData = async () => {
    try {
      await fetchData(
        { url: `views/${postId}/count`, method: "GET" },
        (data: any) => {
          // console.log(data);
          setViews(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMetaData();
  }, []);
  return (
    !loading && (
      <div className="flex gap-3">
        {/* <div>Published on: Thu, 07/11/2024</div> */}
        <div>
          <strong>{views}</strong> Views
        </div>
        <div>
          <strong>2.3k</strong> Likes
        </div>
        <div>
          <strong>333</strong> Shares
        </div>
      </div>
    )
  );
};
export default Meta;
