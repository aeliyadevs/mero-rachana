import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
