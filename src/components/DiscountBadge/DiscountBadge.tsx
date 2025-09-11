import "./DiscountBadge.css";

type DiscountBadgeProps = {
  discount?: string;
  variant: "primary" | "secondary"
};

function DiscountBadge({discount, variant}: DiscountBadgeProps) {

  if (!discount) return null; // اگه تخفیف نیست، چیزی رندر نمیشه

  return <div className={`discount-badge ${variant}`}>{discount}</div>

}

export default DiscountBadge;
