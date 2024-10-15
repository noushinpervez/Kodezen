import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="kzui-navbar">
      <img src={ logo } alt="logo" />
      <div className="kzui-navbar__tabs">
        <button className="kzui-navbar__tab kzui-navbar__tab--active">Welcome</button>
        <button className="kzui-navbar__tab">Blocks</button>
        <button className="kzui-navbar__tab">Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;