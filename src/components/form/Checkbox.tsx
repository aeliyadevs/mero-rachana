import Label from "./Label";

interface ComponentProps {
  name: string;
  label: string;
  required: boolean;
}

const Checkbox: React.FC<ComponentProps> = ({ name, label, required }) => {
  return (
    <div className="w-full flex">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="w-[20px] mr-2"
      />
      <Label labelFor={name} label={label} required={required} />
    </div>
  );
};
export default Checkbox;
