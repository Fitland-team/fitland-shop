import { useBreadcrumb } from "../../Contexts/BreadCrumbContext";
import "./ProductSectionNavigate.css"

export default function ProductSectionNavigate() {

    const { items } = useBreadcrumb();
  return (
    <div className="products-section__navigate">
      {items.map((item, i) => (
        <>
          {i > 0 && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5675 18.8201C9.3775 18.8201 9.1875 18.7501 9.0375 18.6001L2.9675 12.5301C2.6775 12.2401 2.6775 11.7601 2.9675 11.4701L9.0375 5.40012C9.3275 5.11012 9.8075 5.11012 10.0975 5.40012C10.3875 5.69012 10.3875 6.17012 10.0975 6.46012L4.5575 12.0001L10.0975 17.5401C10.3875 17.8301 10.3875 18.3101 10.0975 18.6001C9.9575 18.7501 9.7575 18.8201 9.5675 18.8201Z"
                fill="#ADADAD"
              />
              <path
                d="M20.5019 12.75H3.67188C3.26188 12.75 2.92188 12.41 2.92188 12C2.92188 11.59 3.26188 11.25 3.67188 11.25H20.5019C20.9119 11.25 21.2519 11.59 21.2519 12C21.2519 12.41 20.9119 12.75 20.5019 12.75Z"
                fill="#ADADAD"
              />
            </svg>
          )}
          <h4 className="products-section__navigate-text">{item}</h4>
        </>
      ))}
    </div>
  );
}
