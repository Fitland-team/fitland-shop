
import "./ShopingCardProduct.css";
import { useCart } from "../../../Contexts/CartContext";

export default function ShopingCardProduct() {
  const { cart, removeFromCart, decreaseCount, increaseCount  } = useCart();


  return (
    <div className="shopingcard-right">

      {cart.map((product) => (
        
        <div key={product.id} className="shopingcard-product-item">
          <div className="shoping-card__product-img-wrapper">
            <img
              src={product.image}
              alt={product.title}
              className="shopping-card__product-img"
            />
          </div>

          <div className="shoping-card__product-detail">
            <div className="delete-product" onClick={() => removeFromCart(product.id)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.64245 12.9841C7.48411 12.9841 7.32578 12.9258 7.20078 12.8008C6.95911 12.5591 6.95911 12.1591 7.20078 11.9174L11.9174 7.20078C12.1591 6.95911 12.5591 6.95911 12.8008 7.20078C13.0424 7.44245 13.0424 7.84245 12.8008 8.08411L8.08411 12.8008C7.96745 12.9258 7.80078 12.9841 7.64245 12.9841Z"
                  fill="#032340"
                />
                <path
                  d="M12.3591 12.9841C12.2008 12.9841 12.0424 12.9258 11.9174 12.8008L7.20078 8.08411C6.95911 7.84245 6.95911 7.44245 7.20078 7.20078C7.44245 6.95911 7.84245 6.95911 8.08411 7.20078L12.8008 11.9174C13.0424 12.1591 13.0424 12.5591 12.8008 12.8008C12.6758 12.9258 12.5174 12.9841 12.3591 12.9841Z"
                  fill="#032340"
                />
                <path
                  d="M12.5013 18.9587H7.5013C2.9763 18.9587 1.04297 17.0253 1.04297 12.5003V7.50033C1.04297 2.97533 2.9763 1.04199 7.5013 1.04199H12.5013C17.0263 1.04199 18.9596 2.97533 18.9596 7.50033V12.5003C18.9596 17.0253 17.0263 18.9587 12.5013 18.9587ZM7.5013 2.29199C3.65964 2.29199 2.29297 3.65866 2.29297 7.50033V12.5003C2.29297 16.342 3.65964 17.7087 7.5013 17.7087H12.5013C16.343 17.7087 17.7096 16.342 17.7096 12.5003V7.50033C17.7096 3.65866 16.343 2.29199 12.5013 2.29199H7.5013Z"
                  fill="#032340"
                />
              </svg>
            </div>

            <h3 className="shoping-card__product-title">{product.title}</h3>

            <p className="shoping-card__product-name">کفش بسکتبال</p>

            <h3 className="shoping-card__product-price">{product.price.toLocaleString()} تومان</h3>

            <p className="shoping-card__product-discount">1,200,000</p>

            <div className="shoping-card__product-size">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7188 22.75H7.21875C3.06875 22.75 1.21875 20.9 1.21875 16.75V12.25C1.21875 8.1 3.06875 6.25 7.21875 6.25H11.7188C15.8687 6.25 17.7188 8.1 17.7188 12.25V16.75C17.7188 20.9 15.8687 22.75 11.7188 22.75ZM7.21875 7.75C3.89875 7.75 2.71875 8.93 2.71875 12.25V16.75C2.71875 20.07 3.89875 21.25 7.21875 21.25H11.7188C15.0387 21.25 16.2187 20.07 16.2187 16.75V12.25C16.2187 8.93 15.0387 7.75 11.7188 7.75H7.21875Z"
                  fill="#404040"
                />
                <path
                  d="M18.1188 13.75H16.9687C16.5587 13.75 16.2187 13.41 16.2187 13V12.25C16.2187 8.93 15.0387 7.75 11.7188 7.75H10.9688C10.5588 7.75 10.2188 7.41 10.2188 7V5.85C10.2188 2.67 11.6387 1.25 14.8187 1.25H18.1188C21.2988 1.25 22.7187 2.67 22.7187 5.85V9.15C22.7187 12.33 21.2988 13.75 18.1188 13.75ZM17.7187 12.25H18.1188C20.4688 12.25 21.2187 11.5 21.2187 9.15V5.85C21.2187 3.5 20.4688 2.75 18.1188 2.75H14.8187C12.4687 2.75 11.7188 3.5 11.7188 5.85V6.25C15.8688 6.25 17.7187 8.1 17.7187 12.25Z"
                  fill="#404040"
                />
              </svg>
              سایز 42
            </div>

            <div className="shoping-card__counter">
              <button
                onClick={() => decreaseCount(product.id)}
                className="shoping-card__counter-button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.91406 11H18.9141V13H6.91406V11Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <span>{product.count}</span>

              <button
                onClick={() => increaseCount(product.id)}
                className="shoping-card__counter-button"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9141 13H13.9141V19H11.9141V13H5.91406V11H11.9141V5H13.9141V11H19.9141V13Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
