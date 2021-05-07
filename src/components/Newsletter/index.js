
import { useState } from "react";
// import { useForm } from "react-hook-form";  DESINSTALAR SE NAO FOR USAR
import useModal from "react-hooks-use-modal";
import "./styles.css";

const Newsletter = () => {

  // const { register, handleSubmit, formState: { errors } } = useForm();

  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmiteForm = (e) => {
    e.preventDefault();
    setEmail(email);
    console.log(`${name} e ${email}`);
  }
  return (
    <div className="container">
      <div className="limitador">
        <section className="section-newsletter">
          <div className="newsletter-titulo">
            <h2>Participe de nossas news com promoções e novidades!</h2>
          </div>

          <form className="newsletter-form" onSubmit={(e) => handleSubmiteForm(e)} noValidate>
            <div className="inputs">
              <input type="text" placeholder="Digite seu nome" autoComplete="off" onChange={e => setName(e.target.value)} />
            </div>

            <div className="inputs">
              <input type="text" placeholder="Digite seu Email" autoComplete="off" onChange={e => setEmail(e.target.value)} />
            </div>

            <button type="submit" onClick={open}>Eu quero!</button>

            <Modal>
              <div className="modal">
                <div>
                  <h1>Seu e-mail foi cadastrado com sucesso!</h1>
                  <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                </div>

                <button onClick={close}>Cadastrar novo e-mail</button>
              </div>
            </Modal>


          </form>
        </section>

      </div>
    </div>
  );
}


export default Newsletter;