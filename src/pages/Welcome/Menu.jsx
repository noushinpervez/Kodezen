import general from "../../assets/general.svg";
import design from "../../assets/design.svg";
import integration from "../../assets/integration.svg";

const Menu = () => {
  return (
    <aside className="kzui-menu">
      <h6>MENU</h6>
      <button className="kzui-menu__item">
        <img src={ general } alt="General" />
        <p>General</p>
      </button>
      <button className="kzui-menu__item kzui-menu__item--active">
        <img src={ design } alt="Design" />
        <p>Design System</p>
      </button>
      <button className="kzui-menu__item">
        <img src={ integration } alt="Integration" />
        <p>Integration</p>
      </button>
    </aside>
  );
};

export default Menu;