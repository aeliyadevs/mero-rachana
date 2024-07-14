import { ReactNode } from "react";

interface ComponentProps {
  icon: ReactNode;
}
const ShareIcon: React.FC<ComponentProps> = ({ icon }) => {
  return (
    <div className="w-10 h-10 grid place-items-center rounded-md bg-blue-200 text-slate-900 duration-300 ease-linear hover:bg-blue-400 hover:text-slate-100">
      {icon}
    </div>
  );
};
export default ShareIcon;
