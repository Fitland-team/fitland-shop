import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img
          src="./images/Rectangle.png"
          alt="Rectangle"
          className="product__img"
        />
      </div>
      <div className="product-attribute">
        <h3 className="product__title">کفش نایک مدل S-2000</h3>
        <p className="product__price">20000تومان</p>

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
