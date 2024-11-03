import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import InventoryList from "./pages/admin/InventoryListPage";
import AddItem from "./pages/admin/AddItemPage";
import DetailItemPage from "./pages/admin/DetailItemPage";
import DashboardPage from "./pages/admin/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/inventorylist" element={<InventoryList />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/itemdetail/:id" element={<DetailItemPage />} />
      </Routes>
    </Router>
  );
}

export default App;
