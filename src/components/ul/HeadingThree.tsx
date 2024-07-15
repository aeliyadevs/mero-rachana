interface ComponentProps {
  heading: string;
}
const HeadingThree: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h3 className="text-slate-900 text-2xl font-bold mb-2 hover:text-cyan-600 hover:translate-x-2 duration-300">
      {heading.substring(0, 40)} {heading.length > 40 ? " ...." : ""}
    </h3>
  );
};
export default HeadingThree;
