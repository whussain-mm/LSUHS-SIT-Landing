import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";


const Logo = () => (
    <div className="navbar-logo">
      <Link to="/">
        <img
          src={logo}
          alt="Company Logo"
          className="logo-image"
          style={{ height: 40 }}
        />
      </Link>
    </div>
  );

  export default Logo