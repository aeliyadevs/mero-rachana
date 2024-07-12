interface ComponentProps {
  heading: string;
}
const HeadingThree: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h3 className="text-slate-900 text-2xl font-bold mb-2 hover:text-blue-700">
      {heading.substring(0, 30)} {heading.length > 30 ? " ...." : ""}
    </h3>
  );
};
export default HeadingThree;
