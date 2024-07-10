interface ComponentProps {
  type: string;
}
const Single: React.FC<ComponentProps> = ({ type }) => {
  return <>Single {type}</>;
};
export default Single;
