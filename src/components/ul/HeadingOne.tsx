interface ComponentProps {
  heading: string;
}
const HeadingOne: React.FC<ComponentProps> = ({ heading }) => {
  return <h1 className="font-bold text-4xl mb-3">{heading}</h1>;
};
export default HeadingOne;
