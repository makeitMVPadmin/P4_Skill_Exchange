import { Routes, Route } from "react-router-dom";

import MarketPlace from "./pages/MarketPlacePage/MarketPlace.tsx";
import MarketplaceTaskDetail from "./pages/MarketPlacePage/MarketPlaceTaskDetail.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import SkillShare from "./pages/SkillSharePage/index.tsx";

import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

// Test case
/*
import { editUserData } from "./utils/Firebase";
const newUserData = {
  firstName: "John",
  email: "john.doe@example.com",
};

editUserData("TAvb0pv0Ca5AjK2hoTDF", newUserData)
// import { getUserJobs } from "../src/utils/Firebase";
// console.log(getUserJobs("UID10035003"));
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MarketPlace />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/skillshare" element={<SkillShare />} />
        <Route path="/marketplace/:id" element={<MarketplaceTaskDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
