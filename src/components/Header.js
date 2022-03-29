import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="./assets/logo.png" alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
