const Sidebar = () => {
  return (
    <aside className="bg-slate-600 w-64 p-7 text-white">
      <div className="p-4">
        <h2 className="font-bold text-2xl">Admin Panel</h2>
        <nav className="mt-4 ml-4">
          <ul>
            <li className="mb-4 flex items-center">
              <i data-feather="home" className="mr-2"></i>
              <a
                href="/"
                className="hover:bg-slate-400 px-5 py-2 rounded-lg duration-300">
                Dashboard
              </a>
            </li>
            <li className="mb-4 flex items-center">
              <i data-feather="users" className="mr-2"></i>
              <a
                href="/inventorylist"
                className="hover:bg-slate-400 px-5 py-2 rounded-lg duration-300">
                Inventory List
              </a>
            </li>
            <li className="flex items-center">
              <i data-feather="settings" className="mr-2"></i>
              <a
                href="/additem"
                className="hover:bg-slate-400 px-5 py-2 rounded-lg duration-300">
                Add Items
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
