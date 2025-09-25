import "./Profile.css";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ProfileSideBar from "../../layouts/ProfileSideBar/ProfileSideBar"

export default function Profile() {
  return (
    <>
      <HeaderTop />
      <div className="container">
        <ProfileSideBar />
      </div>
    </>
  );
}
