import Label from "./Label";

interface ComponentProps {
  name: string;
  placeholder: string;
}

const Textarea: React.FC<ComponentProps> = ({ name, placeholder }) => {
  return (
    <div className="1-full">
      <Label labelFor={name} label={placeholder} required={false} />
      <textarea
        name={name}
        placeholder={placeholder}
        className="w-full h-28 border-2 rounded-md mt-1 p-2 resize-none"
      />
    </div>
  );
};
export default Textarea;
