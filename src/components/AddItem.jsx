import { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const AddItem = () => {
  const [formData, setFormData] = useState({
    productName: "",
    stok: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://672751df302d03037e709eb0.mockapi.io/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Item berhasil ditambahkan:", result);
        setFormData({
          productName: "",
          stok: "",
        });
      } else {
        console.error("Gagal menambahkan item:", response.statusText);
      }
    } catch (error) {
      console.error("Error saat mengirim data:", error);
    }
  };

  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-full max-w-xl p-6 border border-gray-300 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Nama Produk
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Stok</label>
            <input
              type="number"
              name="stok"
              value={formData.stok}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300">
            Tambah Item
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddItem;
