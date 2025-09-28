import React from "react";
import "./Favorites.css";
import { useFavorites } from "../../Contexts/FavoritesContext";
import { products } from "../../api/products";
import type { product } from "../../api/products";
import ProductCard from "../ProductCard/ProductCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  const favProducts: product[] = products.filter((p: product) =>
    favorites.includes(p.id)
  );

  return (
    <div className="favarite">
      <div className="favarite-title">
        <h2>علاقه مندی ها</h2>
      </div>

      {favProducts.length > 0 ? (
        <div className="products-section__left">
          {favProducts.map((p: product) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              image={p.image}
              price={p.price}
              color={p.color}
              rating={p.rating}
            />
          ))}
        </div>
      ) : (
        <div className="dont-have-favarite">
          <div className="favarite-image-wrapper">
            <img
              src="/images/favarite.png"
              alt="do not have a favarite"
              className="favarite__image"
            />
          </div>
          <p className="dont-have-favarite__message">
            شما هیچ کالایی را به موردعلاقه ها اضافه نکردید :(
          </p>
        </div>
      )}
    </div>
  );
}
