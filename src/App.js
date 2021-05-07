import "./styles/global.css";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Newsletter from "./components/Newsletter";


// export const formatNumber = number => {
//   return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(number);
//   const result = number / 100;
//   return result.toFixed(2);

//   <h1>{formatNumber(19900)}</h1>
// }

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <div style={{ height: 100 }}></div>
      <Newsletter />
    </>
  );
}

export default App;
