import { Link } from "react-router-dom";
import logo from "../../assets/images/lsu-logo.svg";


const Logo = () => (
    <div className="navbar-logo">
      <Link to="/">
        <img
          src={logo}
          alt="Company Logo"
          className="logo-image"
          style={{ height: 32, width: 'auto' }}
        />
      </Link>
    </div>
  );

  export default Logo