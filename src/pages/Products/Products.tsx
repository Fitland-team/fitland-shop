import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../api/products";
import type { product } from "../../api/products";
import HeaderTop from "../../components/HeaderTop/HeaderTop";

import Footer from "../../layouts/Footer/Footer";
import "./Products.css";

import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import ProductSectionNavigate from "../../components/ProductSectionNavigate/ProductSectionNavigate";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";

function Products() {

  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState<product[]>(products);

  const pageCount = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // محاسبه اندکس شروع و پایان
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  React.useEffect(() => {
    setPage(1);
  }, [filteredProducts]);

  return (
    <div>
      <HeaderTop />
      <div className="container">
        <div className="products-section">
          <ProductSectionNavigate />

          <div className="product-section__bottom">
            <ProductsFilter products={products} onPriceChange={setFilteredProducts} />

            <div className="products-section__pagination">
              <div className="products-section__left">
                <>
                  {currentProducts.map((p) => (
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

                </>
              </div>

              <Stack
                spacing={2}
                style={{ alignSelf: "center", marginTop: "32px" }}
              >
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={(e, value) => {
                    setPage(value);
                    const section = document.querySelector(".products-section");
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
                      minWidth: "48px",
                      height: "48px",
                      fontSize: "16px",
                      color: "#01070d",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "transparent", // هاور رنگ پس‌زمینه رو تغییر نده
                        color: "#01070d", // رنگ متن مشکی بمونه
                      },
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "#032340",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#032340", // حتی تو هاور هم همون رنگ انتخاب بمونه
                        color: "#fff",
                      },
                    },
                  }}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Products);
