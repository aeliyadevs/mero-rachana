import Card from "../components/Card";
import HeadingTwo from "../components/ul/HeadingTwo";

interface ComponentProps {
  type: string;
}

const Archive: React.FC<ComponentProps> = ({ type }) => {
  return (
    <section className="w-9/12 mx-auto my-20">
      <HeadingTwo heading={"All " + type + "s"} />
      <div className="grid grid-cols-3 gap-6">
        <Card id="test-1" />
        <Card id="test-2" />
        <Card id="test-3" />
      </div>
    </section>
  );
};
export default Archive;
