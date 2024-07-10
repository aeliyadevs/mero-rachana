interface ComponentProps {
  heading: string;
}
const HeadingThree: React.FC<ComponentProps> = ({ heading }) => {
  return <h3 className="text-slate-900 text-3xl font-bold mb-3">{heading}</h3>;
};
export default HeadingThree;
