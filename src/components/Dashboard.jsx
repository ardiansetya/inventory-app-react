import { useFetchData } from "../hooks/products/fetchData";

const Dashboard = () => {

   const { data } = useFetchData(); 


  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">
      Stok Barang Inventory
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{item.productName}</h3>
            <p className="text-gray-700">Stok: {item.stok}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
