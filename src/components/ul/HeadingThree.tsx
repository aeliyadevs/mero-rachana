interface ComponentProps {
  heading: string;
}
const HeadingThree: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h3 className="text-slate-900 text-[21px] font-bold mb-2 hover:text-cyan-600 hover:translate-x-2 duration-300">
      {heading.substring(0, 60)} {heading.length > 60 ? " ...." : ""}
    </h3>
  );
};
export default HeadingThree;
