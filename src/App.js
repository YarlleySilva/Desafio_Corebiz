import "./styles/global.css";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <ListProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
