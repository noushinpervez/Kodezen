import DesignSystem from "./DesignSystem";
import Menu from "./Menu";

const Welcome = () => {
  return (
    <main className="kzui-settings">
      <div className="kzui-settings__heading">Settings</div>
      <div className="kzui-settings__flex">
        <Menu />
        <DesignSystem />
      </div>
    </main>
  );
};

export default Welcome;