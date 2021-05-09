import { useState } from "react";
import "./styles/global.css";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import ListProducts from "./components/ListProducts";

function App() {

  const [quantity, setQuatity] = useState(0);

  const atualizarCart = (value) => {
    setQuatity(value);
  }

  console.log(quantity)

  return (

    <>
      <Menu quantity={quantity} />
      <Banner />
      <ListProducts atualizarCart={atualizarCart} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
