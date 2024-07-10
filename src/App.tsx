import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlacePage/MarketPlace";

import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="marketplace" element={<MarketPlace />} />
         <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
