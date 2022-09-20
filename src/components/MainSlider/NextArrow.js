import styles from "./MainSlider.module.css";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.nextArrow}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
