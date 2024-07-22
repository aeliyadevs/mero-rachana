interface ComponentProps {
  name: string;
  placeholder: string;
}

const Textarea: React.FC<ComponentProps> = ({ name, placeholder }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full border-2 rounded-md p-2 resize-none"
    />
  );
};
export default Textarea;
