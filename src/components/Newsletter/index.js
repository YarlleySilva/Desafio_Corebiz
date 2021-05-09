
import api from "../../services/api";
import { useForm } from "react-hook-form";
import useModal from "react-hooks-use-modal";
import "./styles.css";

const Newsletter = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [Modal, open, close] = useModal('root', {
    preventScroll: true
  });

  const handleSubmiteForm = (data) => {

    console.log(`Nome: ${data.name}`);
    console.log(`Email: ${data.email}`);
    if (data) {
      console.log("entrou")
      open();
      postSubmit(data);
    }
  }

  const postSubmit = async (data) => {

    const response = await api.post("/newsletter", {
      "email": data.email,
      "name": data.name
    });
    console.log(response)

  }

  return (
    <div className="container">
      <div className="limitador">
        <section className="section-newsletter">
          <div className="newsletter-titulo">
            <h2>Participe de nossas news com promoções e novidades!</h2>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit(handleSubmiteForm)} noValidate>
            <div className="inputs">
              <input
                type="text"
                required placeholder="Digite seu nome"
                autoComplete="off"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="newsletter-msg-error">Preencha com seu nome completo</p>}

            </div>

            <div className="inputs">
              <input
                type="email"
                required
                placeholder="Digite seu Email"
                autoComplete="off"
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
              />
              {errors.email && <p className="newsletter-msg-error">Preencha com um e-mail válido</p>}
            </div>

            <button type="submit">Eu quero!</button>

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