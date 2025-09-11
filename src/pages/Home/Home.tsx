import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";

function Home() {
  return (
    <>
      <Header />
      <ProductItem image="./images/Rectangle.png" title="کفش نایک مدل S200" price="200000" sizeRangeSmall="L" sizeRangeBig="XXL" />
      <Footer />
    </>
  );
}

export default Home;
