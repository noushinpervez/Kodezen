import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Welcome from "./pages/Welcome/Welcome";

function App() {
  return (
    <div className="kzui-content">
      <Sidebar />
      <div className="kzui-content__full">
        <Navbar />
        <Welcome />
      </div>
    </div>
  )
}

export default App;
