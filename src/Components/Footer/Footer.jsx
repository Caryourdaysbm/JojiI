import Layout from "../Layout/RootLayout";
import Image from "../Ui/Image";
import logo from "../../assets/logo.png";
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__logo">
        <Image src={logo} alt="Enterprise Logo" className="w-12 md:w-14 " />
        <p className="logo-text"> </p>
      </span>
      <div className="md:flex mt-7 justify-between space-y-5">
        <p className="text-center text-sm  text-pepperRed">
          &copy; 2023 JOJI. All Rights Reserved
        </p>
        <span>
        
          <a href="http://instagram.com/joji_int"><AiFillInstagram /></a>
          <AiOutlineWhatsApp />
          <AiOutlineTwitter />
          <a href="mailto:jojifeedback@gmail.com?subject=Feedback"><SiGmail /></a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;