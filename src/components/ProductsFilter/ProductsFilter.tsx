import React, { useCallback, useMemo, useState } from "react";

import "./ProductsFilter.css";

import SearchIcon from "@mui/icons-material/Search";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import type { SwitchProps } from "@mui/material/Switch";

function ProductsFilter() {
  const [value, setValue] = useState<number[]>([0, 50000000]);

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

  const handleChange = useCallback((event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  }, []);

  const handleInputChange = useCallback((index: number, newVal: string) => {
    let parsed = parseInt(newVal.replace(/\D/g, "")) || 0; // فقط عدد
    if (parsed < 0) parsed = 0;
    if (parsed > 50000000) parsed = 50000000;

    const newValue = [...value];
    newValue[index] = parsed;
    setValue(newValue);
  }, [])

  const getStep = useCallback((val: number) => {
    if (val <= 1000000) return 200000;
    if (val <= 5000000) return 500000;
    if (val <= 10000000) return 1000000;
    return 5000000;
  }, [])

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
  }

  const marks = generateMarks();
  return (
    <div className="products-section__right">
      <div className="products-section__right-filter">
        <div className="products-section__right-filter-title">
          <p>فیلتر ها</p>
          <p>حذف فیلتر ها</p>
        </div>
        <div className="products-section__right-filter-buttons">
          <div className="products-section__right-filter-buttons1">
            <h3>محصولات موجود </h3>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="" />
          </div>
          <div className="products-section__right-filter-buttons2">
            <h3>محصولات تخفیف دار</h3>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />} label="" />
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
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    value={value[1].toLocaleString()}
                  />
                </div>
                <div className="products-section__accordion-price-min">
                  <span>کمترین</span>
                  <input
                    type="text"
                    placeholder="وارد کنید"
                    onChange={(e) => handleInputChange(0, e.target.value)}
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
                    valueLabelFormat={(val) => `${val.toLocaleString()} تومان`}
                    step={null}
                    marks={marks.map((m) => ({ value: m }))}
                    sx={{
                      color: "#fa541c",
                      "& .MuiSlider-thumb": {
                        backgroundColor: "#fa541c",
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
  );
}


export default React.memo(ProductsFilter);