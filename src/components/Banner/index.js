import Slider from "infinite-react-carousel";
import BannerImg from "../../assets/banner.png";

import "./styles.css";

const Banner = () => {

  const settingsSlider = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true
  }

  return (
    <div className="container">
      <div className="limitador">
        <section className="section-banner">
          <Slider {...settingsSlider}>
            <div>
              <img src={BannerImg} alt="" />
            </div>
            <div>
              <img src={BannerImg} alt="" />
            </div>
            <div>
              <img src={BannerImg} alt="" />
            </div>
            <div>
              <img src={BannerImg} alt="" />
            </div>
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Banner;