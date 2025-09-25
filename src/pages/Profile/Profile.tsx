import "./Profile.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ProfileSideBar from "../../layouts/ProfileSideBar/ProfileSideBar"
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <HeaderTop />
      <div className="container profile-content">
        <ProfileSideBar />
        <div className="profile-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}
