import "./App.css";
import Home from "pages/Home.jsx";
import Navbar from "common/Navbar.jsx";
import Background from "./layout/Background";

function App() {
  return (
    <Background>
      <Navbar />
      <Home></Home>
    </Background>
  );
}

export default App;
