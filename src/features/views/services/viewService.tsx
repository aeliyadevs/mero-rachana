// service for handling view related API calls

import useAxios from "../../../hooks/useAxios";

export const ViewFeature = async (postId: number, userId: number) => {
  console.log(postId, userId);
  const { loading, response, error, fetchData } = useAxios();

  try {
    await fetchData({ url: `views`, method: "POST" }, (data: any) => {
      console.log(data);
    });
  } catch (err) {
    console.log(err);
  }
};
