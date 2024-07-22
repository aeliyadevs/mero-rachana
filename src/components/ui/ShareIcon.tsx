import { ReactNode } from "react";

interface ComponentProps {
  icon: ReactNode;
}
const ShareIcon: React.FC<ComponentProps> = ({ icon }) => {
  return (
    <div className="w-10 h-10 grid place-items-center rounded-full bg-sky-400 text-white duration-300 ease-linear hover:bg-sky-500">
      {icon}
    </div>
  );
};
export default ShareIcon;
