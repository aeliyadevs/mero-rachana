import { ReactNode } from "react";

interface ComponentProps {
  icon: ReactNode;
}
const ShareIcon: React.FC<ComponentProps> = ({ icon }) => {
  return (
    <div className="w-10 h-10 grid place-items-center rounded-md bg-green-300 text-slate-800 duration-300 ease-linear hover:bg-green-500 hover:text-slate-100">
      {icon}
    </div>
  );
};
export default ShareIcon;
