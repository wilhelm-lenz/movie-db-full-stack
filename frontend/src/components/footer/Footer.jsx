import "./Footer.scss";
import YouTube from "../svg/YouTube";
import Facebook from "../svg/Facebook";
import Heart from "../svg/Heart";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="imprint">Imprint</p>
        <p className="footer-text">
          Made with love in heart and popcorn in tummy.
          <span className="heart-icon">
            <Heart />
          </span>
        </p>
        <div className="social-wrapper">
          <YouTube />
          <Facebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
