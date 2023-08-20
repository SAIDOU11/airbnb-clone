import logo from '../assets/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <img style={{ width: '10%' }} src={logo} alt="airbnb-logo" />
    </nav>
  );
};

export default Navbar;
