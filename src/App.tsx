import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
