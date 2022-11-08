import "./App.css";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Service from "./components/service/Service";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Service />
    </div>
  );
}

export default App;
