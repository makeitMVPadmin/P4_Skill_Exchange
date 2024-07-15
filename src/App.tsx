import { Routes, Route } from "react-router-dom";
import MarketPlace from "./pages/MarketPlacePage/MarketPlace";
import ProjectPage from "./pages/ProjectPage/ProjectPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
