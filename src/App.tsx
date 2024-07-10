import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlacePage/MarketPlace";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="marketplace" element={<MarketPlace />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
