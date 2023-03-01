import { Routes, Route } from "react-router-dom";
import CommentSection from "../pages/UserPages/CommentSection";
import FavoriteSection from "../pages/UserPages/FavroiteSection";
import ProfileSection from "../pages/UserPages/ProfileSection";
import WritingSection from "../pages/UserPages/WritingSection";
import UserLayout from "../pages/UserPages/UserLayout";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />} />
      <Route path="comment" element={<CommentSection />} />
      <Route path="favorite" element={<FavoriteSection />} />
      <Route path="Profile" element={<ProfileSection />} />
      <Route path="Write" element={<WritingSection />} />
    </Routes>
  );
}

export default UserRoutes;
