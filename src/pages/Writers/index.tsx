import { useEffect, useState } from "react";
import WriterCard from "../../components/WriterCard";
import WriterCardSkeleton from "../../components/WriterCardSkeleton";
import HeadingTwo from "../../components/ui/HeadingTwo";
import useAxios from "../../hooks/useAxios";
import { Writer } from "../../types";

const Writers = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const { response, error, loading, fetchData } = useAxios();
  const fetchWriters = async () => {
    try {
      await fetchData(
        { url: "/users", method: "GET", params: { userTypeId: 3 } },
        (data: any) => {
          setWriters(data);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWriters();
  }, []);

  return (
    <section className="sm:w-11/12 lg:w-9/12 mx-4 sm:mx-auto my-16">
      <HeadingTwo heading="Our Writers" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {loading ? (
          <>
            <WriterCardSkeleton />
            <WriterCardSkeleton />
            <WriterCardSkeleton />
            <WriterCardSkeleton />
          </>
        ) : (
          writers.map((writer) => (
            <WriterCard key={writer.id} writer={writer} />
          ))
        )}
      </div>
    </section>
  );
};
export default Writers;
