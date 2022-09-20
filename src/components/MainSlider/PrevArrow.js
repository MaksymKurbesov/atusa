import styles from "./MainSlider.module.css";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.prevArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default PrevArrow;
