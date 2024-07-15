import { Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlacePage/MarketPlace";

import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ProjectCardModal from "./components/Modals/ProjectCardModal/ProjectCardModal.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/modal" element={<ProjectCardModal />} />
      </Routes>
      <Footer />
      </>
  );
}

export default App;