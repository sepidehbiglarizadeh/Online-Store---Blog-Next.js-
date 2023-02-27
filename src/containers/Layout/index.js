import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen pb-14">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
