interface ComponentProps {
  heading: string;
}
const HeadingTwo: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h2 className="text-slate-900 text-2xl font-bold capitalize mt-6 mb-3">
      {heading}
    </h2>
  );
};
export default HeadingTwo;
