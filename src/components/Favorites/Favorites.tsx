import React, { useState } from "react";
import "./Favorites.css";
import { useFavorites } from "../../Contexts/FavoritesContext";
import { products } from "../../api/products";
import type { product } from "../../api/products";
import ProductCard from "../ProductCard/ProductCard";
import useProfileSidebar from "../../Hooks/useProfileSidebar";
import useSmartBack from "../../Hooks/useSmartBack";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function Favorites() {

  const { favorites } = useFavorites();

  const { showSidebar, isMobile } = useProfileSidebar();
  const handleBack = useSmartBack()

  const ITEMS_PER_PAGE = isMobile ? 8 : 12;
  const [page, setPage] = useState(1);

  const favProducts: product[] = products.filter((p: product) =>
    favorites.includes(p.id)
  );

  const pageCount = Math.ceil(favProducts.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProducts = favProducts.slice(startIndex, endIndex);

  React.useEffect(() => {
    if (page > pageCount) setPage(1);
  }, [favProducts, pageCount]);


  return (
    <div className="favorite">
      <div className="favorite-title">
        <h2 className="favorite-title__text">
          {isMobile && !showSidebar && <ArrowRightAltIcon className="back-route__mobile" onClick={handleBack} />}
          علاقه مندی ها
        </h2>
      </div>

      {favProducts.length > 0 ? (
        <>
          <div className="products-section__left">
            {currentProducts.map((p: product) => (
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
          <Stack
            spacing={isMobile ? 1 : 2} // spacing کمتر برای موبایل
            style={{ alignSelf: "center", marginTop: "32px" }}
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={(e, value) => {
                setPage(value);
                window.scrollTo({ top: 0, behavior: "smooth" });
                const section = document.querySelector(".products-section__left");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              renderItem={(item) => (
                <PaginationItem
                  components={{ previous: ArrowForward, next: ArrowBack }}
                  {...item}
                />
              )}
              sx={{
                "& .MuiPaginationItem-root": {
                  minWidth: isMobile ? "36px" : "48px",
                  height: isMobile ? "36px" : "48px",
                  fontSize: isMobile ? "14px" : "16px",
                  color: "#01070d",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#01070d",
                  },
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#032340",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#032340",
                    color: "#fff",
                  },
                },
              }}
            />
          </Stack>
        </>
      ) : (
        <div className="dont-have-favorite">
          <div className="favorite-image-wrapper">
            <img
              src="/fitland-shop/images/favorite.png"
              alt="do not have a favorite"
              className="favorite__image"
            />
          </div>
          <p className="dont-have-favorite__message">
            شما هیچ کالایی را به موردعلاقه ها اضافه نکردید :(
          </p>
        </div>
      )}
    </div>
  );
}
