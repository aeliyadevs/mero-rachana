import HeadingTwo from "../components/ul/HeadingTwo";

interface ComponentProps {
  type: string;
}

const Archive: React.FC<ComponentProps> = ({ type }) => {
  return (
    <section className="w-9/12 mx-auto">
      <HeadingTwo heading={"All " + type + "s"} />
      <div></div>
    </section>
  );
};
export default Archive;
