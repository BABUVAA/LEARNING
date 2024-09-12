import styles from "./Footer.module.css";
import Logo from "./Header/Logo";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Logo />
          <p>
            Play the games you love. Compete in free tournaments. Win real money
            & prizes.
          </p>
          <p>E-Gaming 2024 All Rights Reserved.</p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href='#'>Influencers</a>
          <a href='#'>Communities</a>
          <a href='#'>Developers</a>
          <a href='#'>Brands</a>
        </div>
        <div>
          <h2>Platform</h2>
          <a href='#'>Tournaments</a>
          <a href='#'>MarketPlace</a>
          <a href='#'>Clash Of Clans</a>
          <a href='#'>BGMI</a>
        </div>
        <div>
          <h2>Company</h2>
          <a href='#'>Knowledge Base</a>
          <a href='#'>News & Blog</a>
          <a href='#'>Linkedin</a>
        </div>
        <div>
          <h2>Legal</h2>
          <a href='#'>Terms of Use</a>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </>
  );
};
export default Footer;
