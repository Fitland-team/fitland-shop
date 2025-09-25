import "./Profile.css";
import Footer from "../../layouts/Footer/Footer";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import ProfileSideBar from "../../layouts/ProfileSelection/ProfileSideBar"

export default function Profile() {
  return (
    <>
      <HeaderTop />
      <div className="container">
        <ProfileSideBar />
      </div>
      <Footer />
    </>
  );
}
