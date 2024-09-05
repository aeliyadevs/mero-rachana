import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "../features/dashboard/global";

const AdminLayout = () => {
  return (
    <>
      <aside>
        <Sidebar />
      </aside>
      <header>
        <Topbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
