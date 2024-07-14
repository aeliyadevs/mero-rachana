interface ComponentProps {
  labelFor: string;
  label: string;
  required: boolean;
}
const Label: React.FC<ComponentProps> = ({ labelFor, label, required }) => {
  return (
    <label labelFor={labelFor} className="font-semibold">
      {label} <span className="text-red-600">{required ? "*" : ""}</span>
    </label>
  );
};
export default Label;
