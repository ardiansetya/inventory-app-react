import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useFetchData } from "../hooks/products/fetchData";

const InventoryList = () => {
  const { data: originalData } = useFetchData();
  const [filteredData, setFilteredData] = useState(originalData || []);

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    const searchQuery = e.target.value
    const result = originalData.filter((product) =>
      product.productName.toLowerCase().includes(searchQuery)
    );
    setFilteredData(result);
  };

  useEffect(() => {
    setFilteredData(originalData || []);
  }, [originalData]);


  const renderBarang = () => {
    return filteredData.map((product, index) => (
      <tr key={product.id}>
        <td className="border px-4 py-2">{index + 1}.</td>
        <td className="border px-4 py-2">{product.productName}</td>
        <td className="border px-4 py-2">{product.stok}</td>
        <td className="border px-4 py-2 flex gap-5 justify-center">
          <Link to={`/itemdetail/${product.id}`} state={{ product }}>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Detail
            </button>
          </Link>
          <Link to={`/itemdetail/${product.id}`} state={{ product }}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded">
            Hapus
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl mb-4">Daftar Barang</h2>
        <input
          type="text"
          className="p-2 border-2 border-gray-600 rounded"
          placeholder="Cari Barang"
          onChange={handleSearch} // Memanggil handleSearch saat input berubah
        />
      </div>
      <Link to={"/additem"}>
        <Button title="Tambah Barang" color="bg-green-500" />
      </Link>
      <table className="min-w-full table-auto mt-5">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">No.</th>
            <th className="border px-4 py-2">Nama Barang</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>{renderBarang()}</tbody>
      </table>
    </div>
  );
};

export default InventoryList;
