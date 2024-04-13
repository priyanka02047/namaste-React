import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
