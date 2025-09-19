import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products } from "../../api/products";
import type { product } from "../../api/products";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import { useBreadcrumb } from "../../Contexts/BreadCrumbContext";
import Footer from "../../layouts/Footer/Footer";
import "./Products.css";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Stack from "@mui/material/Stack";

function Products() {
  const { items } = useBreadcrumb();

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 48,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(23px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#fa541c",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#fa541c",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#fa541c",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  const getStep = (val: number) => {
    if (val <= 1000000) return 200000;
    if (val <= 5000000) return 500000;
    if (val <= 10000000) return 1000000;
    return 5000000;
  };

  const generateMarks = () => {
    const marks: number[] = [];
    let current = 0;

    while (current < 50000000) {
      marks.push(current);
      current += getStep(current);
    }

    if (marks[marks.length - 1] !== 50000000) {
      marks.push(50000000);
    }

    return marks;
  };

  const marks = generateMarks();

  const [value, setValue] = useState<number[]>([0, 50000000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };

  const handleInputChange = (index: number, newVal: string) => {
    let parsed = parseInt(newVal.replace(/\D/g, "")) || 0; // فقط عدد
    if (parsed < 0) parsed = 0;
    if (parsed > 50000000) parsed = 50000000;

    const newValue = [...value];
    newValue[index] = parsed;
    setValue(newValue);
  };

  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(products.length / ITEMS_PER_PAGE);

  // محاسبه اندکس شروع و پایان
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <HeaderTop />
      <div className="container">
        <div className="products-section">
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
          <div className="product-section__bottom">
            <div className="products-section__right">
              <div className="products-section__right-filter">
                <div className="products-section__right-filter-title">
                  <p>فیلتر ها</p>
                  <p>حذف فیلتر ها</p>
                </div>
                <div className="products-section__right-filter-buttons">
                  <div className="products-section__right-filter-buttons1">
                    <h3>محصولات موجود </h3>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label=""
                    />
                  </div>
                  <div className="products-section__right-filter-buttons2">
                    <h3>محصولات تخفیف دار</h3>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label=""
                    />
                  </div>
                </div>
                <div className="products-section__right-filter-accordion">
                  <Accordion elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography
                        component="span"
                        className="products-accordion__title"
                      >
                        قیمت
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <div className="products-section__accordion-price">
                        <div className="products-section__accordion-price-max">
                          <span>بیشترین</span>
                          <input
                            type="text"
                            placeholder="وارد کنید"
                            onChange={(e) =>
                              handleInputChange(1, e.target.value)
                            }
                            value={value[1].toLocaleString()}
                          />
                        </div>
                        <div className="products-section__accordion-price-min">
                          <span>کمترین</span>
                          <input
                            type="text"
                            placeholder="وارد کنید"
                            onChange={(e) =>
                              handleInputChange(0, e.target.value)
                            }
                            value={value[0].toLocaleString()}
                          />
                        </div>
                        <Box sx={{ width: "100%" }}>
                          <Slider
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={50000000}
                            valueLabelFormat={(val) =>
                              `${val.toLocaleString()} تومان`
                            }
                            step={null}
                            marks={marks.map((m) => ({ value: m }))}
                            sx={{
                              color: "#fa541c", // رنگ اصلی اسلایدر (track و thumb)
                              "& .MuiSlider-thumb": {
                                backgroundColor: "#fa541c", // رنگ دکمه اسلایدر
                              },
                            }}
                          />
                        </Box>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography
                        component="span"
                        className="products-accordion__title"
                      >
                        رنگ
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <div className="products-section__accordion-filter-colors">
                        <div className="products-section__accordion-filter-color1 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color2 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color3 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color4 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color5 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color6 products-color__filter"></div>
                        <div className="products-section__accordion-filter-color7 products-color__filter"></div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={0} sx={{ padding: 0 }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography
                        component="span"
                        className="products-accordion__title"
                      >
                        سایز
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="products-section__accordion-size">
                        <button className="products-section__accordion-size-btn">
                          L
                        </button>
                        <button className="products-section__accordion-size-btn">
                          M
                        </button>
                        <button className="products-section__accordion-size-btn">
                          S
                        </button>
                        <button className="products-section__accordion-size-btn">
                          XL
                        </button>
                        <button className="products-section__accordion-size-btn">
                          XXL
                        </button>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion elevation={0}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography
                        component="span"
                        className="products-accordion__title"
                      >
                        برند
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                      <div className="products-section__filter-brand">
                        <div className="products-section__filter-brand-search">
                          <SearchIcon className="products-section__filter-brand-search-icon" />
                          <input type="text" placeholder="جستجو" />
                        </div>
                        <div className="products-section__filter-brand-btns">
                          <button className="products-section__filter-brand-btn">
                            The North Face
                          </button>
                          <button className="products-section__filter-brand-btn">
                            Under Armour
                          </button>
                          <button className="products-section__filter-brand-btn">
                            nike
                          </button>
                          <button className="products-section__filter-brand-btn">
                            nike
                          </button>
                          <button className="products-section__filter-brand-btn">
                            Fila
                          </button>
                          <button className="products-section__filter-brand-btn">
                            adidas
                          </button>
                          <button className="products-section__filter-brand-btn">
                            Fila
                          </button>
                          <button className="products-section__filter-brand-btn">
                            adidas
                          </button>
                          <button className="products-section__filter-brand-btn">
                            Under Armour
                          </button>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div className="products-section__pagination">
              <div className="products-section__left">
                <>
                  {currentProducts.map((products: product) => (
                    <ProductCard
                      id={products.id}
                      title={products.title}
                      image={products.image}
                      price={products.price}
                      color={products.color}
                      rating={products.rating}
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

export default Products;
