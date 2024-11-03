import { useParams, useNavigate, useLocation } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil item dari state yang diteruskan
  const item = location.state?.product; // Mengambil data produk dari state jika ada

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail Item</h1>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">
            Item ID:
          </label>
          <div className="text-lg text-gray-900 font-semibold mt-1">{id}</div>
        </div>

        {item ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">
                Nama Barang:
              </label>
              <div className="text-lg text-gray-900 font-semibold mt-1">
                {item.productName}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-medium">
                Stok:
              </label>
              <div className="text-lg text-gray-900 font-semibold mt-1">
                {item.stok} pcs
              </div>
            </div>
          </>
        ) : (
          <div className="text-red-500 font-semibold mt-4">
            Item tidak ditemukan
          </div>
        )}

        <button
          onClick={() => navigate(-1)}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300 mt-4">
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
