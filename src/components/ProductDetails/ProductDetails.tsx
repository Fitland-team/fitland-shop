import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import HeaderTop from "../HeaderTop/HeaderTop";
import Footer from "../../layouts/Footer/Footer";

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className="product-detailes-top">
            <div className="product-details-top-right">
                <div className="product-details-main-img">
                    <img src="./images/products/shoes.png" alt="shoes" className="product-details__selected-img" />
                </div>
                <div className="product-details-others-img"></div>
            </div>
            <div className="product-details-top-left"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
