import  { useState } from "react";
import "./ProductColors.css"

export default function ProductColors() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="product-details-colors-wrapper">
      <p className="product-color__title">رنگ</p>
      <div className="product-details-buttons-colors-wrapper">
        <button
          className="product-details__color-button"
          onClick={() => setSelected("brown")}
          style={{
            backgroundColor: selected === "brown" ? "#ededed" : "#fff",
          }}
        >
          <div className="circle-button-color brown"></div>
          <span>خاکی</span>
        </button>
        <button
          className="product-details__color-button"
          onClick={() => setSelected("yellow")}
          style={{
            backgroundColor: selected === "yellow" ? "#ededed" : "#fff",
          }}
        >
          <div className="circle-button-color yellow"></div>
          <span>زرد</span>
        </button>
        <button
          className="product-details__color-button"
          onClick={() => setSelected("purple")}
          style={{
            backgroundColor: selected === "purple" ? "#ededed" : "#fff",
          }}
        >
          <div className="circle-button-color purple"></div>
          <span>بنفش</span>
        </button>
      </div>
    </div>
  );
}
