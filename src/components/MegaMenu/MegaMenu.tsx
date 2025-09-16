import type { SubMenuData } from "../../api/menuData";
import "./MegaMenu.css";

type MegaMenuProps = {
  data: SubMenuData;
};

function MegaMenu({ data }: MegaMenuProps) {
  return (
    <div className="megamenu">
      <div className="megamenu-wrapper">
        <div className="megamenu-grid">
          <img src={data.image} alt="menu" className="megamenu__img" />
          {data.categories.map((cat, index) => (
            <div key={index} className="megamenu__column">
              <h4 className="megamenu__title">{cat.title}</h4>
              <ul className="megamenu__list">
                {cat.items.map((item, i) => (
                  <li key={i} className="megamenu__item">
                    {item}
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
