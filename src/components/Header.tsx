import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-15">
      <Navbar />
      <Jumbotron
        title="Knihařské práce, převazování knih"
        subtitle="Potřebujete svázat svou diplomovou práci? Hledáte knihaře v okolí
          Přerova? Obraťte se na mě."
      />
    </header>
  );
};

export default Header;
