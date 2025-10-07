import "./ShoppingCard.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import ShopingCardProduct from "./ShopingCardProduct/ShopingCardProduct";
import ShoppingCardSum from "./ShoppingCardSum/ShoppingCardSum";

export default function ShoppingCard() {
  return (
    <>
      <HeaderTop />
      <div className="container">
        <div className="shoppingcard">
          <ShoppingCardSum />

          <ShopingCardProduct />
        </div>
      </div>
    </>
  );
}
