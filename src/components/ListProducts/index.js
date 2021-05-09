import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import api from "../../services/api";
import "../ListProducts/styles.css";

const ListProducts = ({ atualizarCart }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 3,

    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,

    },
    mobile: {
      breakpoint: { max: 499, min: 0 },
      items: 1,

    }
  }

  const [products, SetProducts] = useState([]);
  let [cart, setCart] = useState(localStorage.getItem("@quantityItems") ? parseInt(localStorage.getItem("@quantityItems", 10)) : 0);


  useEffect(() => {
    async function getApiProducts() {
      const response = await api.get("/products");

      SetProducts(response.data);

      atualizarCart(cart)
    }
    getApiProducts();

  }, [atualizarCart, cart]);

  const handleCart = () => {
    setCart(cart += 1);
    localStorage.setItem("@quantityItems", cart);
  }

  const formatPrice = value => {
    new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
    const result = value / 100;
    return result.toFixed(2);
  }



  return (
    <div className="container">
      <div className="limitador">
        <section className="section-products">

          <div className="section-text">

            <h2>Mais Vendidos</h2>
            <div></div>

          </div>

          <div className="section-list-products">
            <Carousel swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px">
              {
                products.map(product => {

                  const { productId, productName, imageUrl, stars, listPrice, price, installments } = product;

                  return (
                    <div key={productId} className="container-product">
                      <div className="product-image">
                        <img src={imageUrl} alt="" />
                      </div>

                      <div className="product-information">
                        <div>{productName}</div>

                        <div>Estrelas {stars}</div>

                        {listPrice !== null ? <div className="product-oldprice">De R$ {formatPrice(listPrice)}</div> : <div></div>}

                        <div>Por R$ {formatPrice(price)}</div>

                        {installments.map(installment => {
                          return (
                            <div key={productId}>
                              {installment ? `Ou em ${installment.quantity}x de R$ ${formatPrice(installment.value)}` : ""}
                            </div>
                          )
                        })}

                      </div>

                      <div className="product-btn">
                        <button onClick={handleCart}>COMPRAR</button>
                      </div>

                    </div>
                  )
                })
              }
            </Carousel>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ListProducts;