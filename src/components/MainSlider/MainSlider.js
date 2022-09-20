import styles from "./MainSlider.module.css";
import Slider from "react-slick";
import SliderImage1 from "../../assets/images/slider-image1.jpg";
import SliderImage2 from "../../assets/images/slider-image2.jpg";
import SliderImage3 from "../../assets/images/slider-image3.jpg";
import SliderImage4 from "../../assets/images/slider-image4.jpg";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const SliderImages = [SliderImage1, SliderImage2, SliderImage3, SliderImage4];

const settings = {
  dots: true,
  infinite: true,
  speed: 150,
  className: `${styles.mainSlider}`,
  slidesToShow: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const MainSlider = () => {
  return (
    <div className={styles.mainSliderWrapper}>
      <Slider {...settings}>
        {SliderImages.map((sliderImage, index) => {
          return (
            <div className={styles.sliderItem} key={index}>
              <img src={sliderImage} alt={""} height={600} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MainSlider;
