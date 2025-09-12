import './Home.css'
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Pagination from "../../layouts/Pagination/Pagination";

function Home() {
  return (
    <>
      <Header />
      <Pagination title="تخفیفات ویژه" />
      <Pagination title="جدید ترین کفش های ورزشی" />
      <Footer />
    </>
  );
}

export default Home;
