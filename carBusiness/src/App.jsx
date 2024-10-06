import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import { BestSelling } from "./Components/BestSelling";
import { FilterAndSearch } from "./Components/FilterAndSearch";
import { Reviews } from "./Components/Reviews";
import { Trending } from "./Components/Trending";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FilterAndSearch />
      <Trending />
      <BestSelling />
      <Reviews />
    </main>
  );
};

export default App;
