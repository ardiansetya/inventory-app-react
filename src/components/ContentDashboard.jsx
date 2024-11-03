import Dashboard from "./Dashboard";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Main from "./ui/Main";

const ContentDashboard = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <Main>
        <Dashboard />
      </Main>
      <Footer />
    </div>
  );
};

export default ContentDashboard;
