interface ComponentProps {
  value: string;
  center: boolean;
}

const Submit: React.FC<ComponentProps> = ({ value, center }) => {
  return (
    <div className={`w-auto${center ? " mx-auto" : ""}`}>
      <input
        type="submit"
        value={value}
        className="w-48 p-4 bg-blue-600 text-white rounded-md"
      />
    </div>
  );
};
export default Submit;
