import Sider from "../components/ui/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-grey-100">
      <div className="flex flex-row min-h-screen">
        <Sider />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
