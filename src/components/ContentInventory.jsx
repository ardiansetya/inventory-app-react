import Footer from "./ui/Footer";
import Header from "./ui/Header";
import InventoryList from "./InventoryList";
import Main from "./ui/Main";

const ContentInventory = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Main>
        <InventoryList />
      </Main>
      <Footer />
    </div>
  );
};

export default ContentInventory;
