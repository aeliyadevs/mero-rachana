interface ComponentProps {
  heading: string;
}
const HeadingThree: React.FC<ComponentProps> = ({ heading }) => {
  return (
    <h3 className="text-slate-900 text-[21px] font-bold mb-2 hover:text-sky-500 hover:translate-x-2 duration-300">
      {heading.substring(0, 35)} {heading.length > 35 ? " ...." : ""}
    </h3>
  );
};
export default HeadingThree;
