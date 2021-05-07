import Fone from "../../assets/fone.svg";
import Mail from "../../assets/mail.svg";
import Vtex from "../../assets/vtex.svg";
import Corebiz from "../../assets/corebiz.svg";

import "./styles.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="limitador">
        <section className="section-footer">
          <div className="footer-enderecos">
            <h2>
              <p>
                Localização
              </p>
            </h2>

            <div></div>

            <p>
              Avenida Andrômeda, 2000. Bloco 6 e 8
              <br />
              Alphavile SP
              <br />
              brasil@corebiz.ag
              <br />
              +55 11 3090 1039
            </p>

          </div>

          <div className="footer-contatos">
            <div>
              <button>
                <div>
                  <img src={Mail} alt="" />
                </div>
                <div>
                  ENTRE EM CONTATO
                </div>
              </button>
            </div>

            <div>
              <button>
                <div>
                  <img src={Fone} alt="" />
                </div>
                <div>
                  FALE COM O NOSSO<br />CONSULTOR ONLINE
                </div>
              </button>
            </div>

          </div>

          <div className="footer-logos">
            <div>
              <img src={Corebiz} alt="" />
            </div>
            <div>
              <img src={Vtex} alt="" />
            </div>
          </div>
        </section>
        <div className="footer-line"></div>
      </div>
    </div>
  );
}

export default Footer;