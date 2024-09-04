import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const UserLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
