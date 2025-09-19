import type { SubMenuData } from "../../api/menuData";
import { Link } from "react-router-dom";
import "./MegaMenu.css";
import { useBreadcrumb } from "../../Contexts/BreadCrumbContext";

type MegaMenuProps = {
  data: SubMenuData;
};

function MegaMenu({ data }: MegaMenuProps) {

  const { setRest } = useBreadcrumb()
  
  return (
    <div className="megamenu">
      <div className="megamenu-wrapper">
        <div className="megamenu-grid">
          {data.categories.map((cat, index) => (
            <div key={index} className="megamenu__column">
              <h4 className="megamenu__title">{cat.title}</h4>
              <ul className="megamenu__list">
                {cat.items.map((item, i) => (
                  <li key={i} className="megamenu__item">
                    <Link to='/products' onClick={() => setRest([data.headTitle, cat.title, item])}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
