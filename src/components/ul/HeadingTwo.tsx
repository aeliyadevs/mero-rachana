interface ComponentProps {
  heading: string;
}
const HeadingTwo: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h2 className="text-slate-900 text-4xl font-bold capitalize mb-6">
      {heading}
    </h2>
  );
};
export default HeadingTwo;