interface ComponentProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean | undefined;
}

const Input: React.FC<ComponentProps> = ({
  type,
  name,
  placeholder,
  required,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full border-2 rounded-md p-2"
    />
  );
};
export default Input;
