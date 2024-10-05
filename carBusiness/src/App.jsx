import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import { FilterAndSearch } from "./Components/FilterAndSearch";
import { Trending } from "./Components/Trending";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FilterAndSearch />
      <Trending />
    </main>
  );
};

export default App;
