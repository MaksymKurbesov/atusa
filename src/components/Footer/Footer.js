import styles from "./Footer.module.css";
import Logo from "../../assets/images/logo white.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.containerFooter}`}>
        <div className={styles.topRow}>
          <img src={Logo} alt={"Логотип"} height={70} />
          {/*<ul>*/}
          {/*  <li>INSTAGRAM</li>*/}
          {/*  <li>TELEGRAM</li>*/}
          {/*  <li>WHATSAPP</li>*/}
          {/*  <li>BONYKLADE@GMAIL.COM</li>*/}
          {/*</ul>*/}
          {/*<ul>*/}
          {/*  <li>ГОЛОВНА</li>*/}
          {/*  <li>ПОДІЇ</li>*/}
          {/*  <li>НОВИНИ</li>*/}
          {/*  <li>МУЗИКА</li>*/}
          {/*</ul>*/}
          <p>Всі права захищені ©</p>
          <p>2022</p>
        </div>
        {/*<div className={styles.bottomRow}>*/}
        {/*  <p>2022</p>*/}
        {/*</div>*/}
      </div>
    </footer>
  );
};

export default Footer;
