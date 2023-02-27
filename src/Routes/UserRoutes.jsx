import { Routes, Route } from "react-router-dom";
import CheckSection from "../pages/UserPages/CheckSection";
import FavoriteSecton from "../pages/UserPages/FavroiteSection";
import ProfileSection from "../pages/UserPages/ProfileSection";
import WritingSection from "../pages/UserPages/WritingSection";
import UserLayout from "../pages/UserPages/UserLayout";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />} />
      <Route path="check" element={<CheckSection />} />
      <Route path="favorite" element={<FavoriteSecton />} />
      <Route path="Profile" element={<ProfileSection />} />
      <Route path="Write" element={<WritingSection />} />
    </Routes>
  );
}

export default UserRoutes;
