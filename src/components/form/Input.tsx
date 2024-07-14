import Label from "./Label";

interface ComponentProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

const Input: React.FC<ComponentProps> = ({
  type,
  name,
  placeholder,
  required,
}) => {
  return (
    <div className="w-full">
      <Label labelFor={name} label={placeholder} required={required} />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full border-2 rounded-md mt-1 p-2"
      />
    </div>
  );
};
export default Input;
