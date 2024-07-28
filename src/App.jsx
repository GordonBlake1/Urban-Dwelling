import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import Hat from "./components/Hat";
import Header from "./components/Header";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hat />
      <Header />
      <Heading />
      <CardsContainer />
      <Footer />
    </div>
  );
};

export default App;
