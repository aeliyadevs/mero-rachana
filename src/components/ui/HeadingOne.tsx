interface ComponentProps {
  heading: string;
  center: boolean;
}
const HeadingOne: React.FC<ComponentProps> = ({ heading, center }) => {
  return (
    <h1 className={`font-bold text-4xl mb-3${center ? " text-center" : ""}`}>
      {heading}
    </h1>
  );
};
export default HeadingOne;
