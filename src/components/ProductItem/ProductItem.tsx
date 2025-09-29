import "./ProductItem.css";
import DiscountBadge from "../DiscountBadge/DiscountBadge";
import formatNumber from "../../Utils/FormatNumber";

type ProductItemProps = {
  image: string;
  title: string;
  price: number;
};

function ProductItem({
  image,
  title,
  price,
}: ProductItemProps) {
  return (
      <div className="product-card">
        <DiscountBadge variant={"primary"} discount={"VIP"} />
        <div className="product-img-container">
          <img
            src={image}
            alt={title}
            className="product__img"
          />
        </div>
        <div className="product-attribute">
          <h3 className="product__title">{title}</h3>
          <p className="product__price">{formatNumber(price)}تومان</p>

          <p className="product__size-range">از سایز L تا XXL</p>

          <div className="product__color-circles">
            <span className="color-circle navy"></span>
            <span className="color-circle gray"></span>
            <span className="color-circle black"></span>
          </div>
        </div>
      </div>
  );
}

export default ProductItem;
