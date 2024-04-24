import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="d-flex o-h ">
        <Sidebar />
        <Home className="justify-content-center"/>
      </div>
    </div>
  );
}

export default App;
