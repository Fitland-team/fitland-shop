import "./ShoppingCard.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import ShopingCardProduct from "./ShopingCardProduct/ShopingCardProduct";
import ShoppingCardSum from "./ShoppingCardSum/ShoppingCardSum";
import FooterMobile from '../../layouts/FooterMobile/FooterMobile'
import useIsMobile from '../../Hooks/useIsMobile'
import Footer from "../../layouts/Footer/Footer"

export default function ShoppingCard() {
  const isMobile = useIsMobile()
  
  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className="shoppingcard">
          <ShoppingCardSum />

          <ShopingCardProduct />
        </div>
      </div>
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
}
