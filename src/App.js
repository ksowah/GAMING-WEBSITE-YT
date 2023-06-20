import COD from "./components/COD";
import Footer from "./components/Footer";
import GameCenters from "./components/GameCenters";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Trending from "./components/Trending";


function App() {
  return (
    <main className="text-white">
      <Header />

      <div className="w-full xl:max-w-[1250px] mx-auto px-4 " >
        <Hero />
        <Trending />
        <COD />
        <GameCenters />
      </div>

      <Footer />

    </main>
  );
}

export default App;
