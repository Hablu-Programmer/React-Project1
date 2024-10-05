import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
