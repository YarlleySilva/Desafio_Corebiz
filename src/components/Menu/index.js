// import Hamburger from "../../assets/hamburger.svg";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import Cart from "../../assets/cart.svg";
import User from "../../assets/user.svg";

import "./styles.css";

const Menu = () => {

  return (
    <div className="container">
      <div className="limitador">
        <header className="container-header">

          <div className="header-logo">
            <img src={Logo} alt="" style={{ width: 109 }} />
          </div>

          <div className="header-search">
            <input type="text" placeholder="O que está procurando?" />
            <button type="submit">
              <img src={Search} alt="" />
            </button>
          </div>

          <div>
            <img src={User} alt="" /> Minha Conta
          </div>

          <div className="header-cart">
            <img src={Cart} alt="" />
            <span>1</span>
          </div>


        </header>
      </div>
    </div>
  );
}

export default Menu;



{/* <div className="header-div1">

          <div>
            <img src={Hamburger} alt="" />
          </div>

          <div>
            <img src={Logo} alt="" style={{ width: 109 }} />
          </div>

          <div>
            <img src={Cart} alt="" />
            <div>1</div>
          </div>

        </div>

        <div className="header-div2">

          <div>
            <img src={Search} alt="" />
          </div>

          <div>Minha Conta</div>

        </div> */}