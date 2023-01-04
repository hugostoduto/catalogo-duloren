/* eslint-disable array-callback-return */
import left from "./left-arrow.png";
import right from "./right-arrow.png";
import React, { useState, useEffect, useRef } from "react";
import { DataDt } from "./DataDt";
import { DataMb } from "./DataMb";

import "./SliderDt.css";

function useKey(key, cb) {
  const callBackRef = useRef(cb);

  useEffect(() => {
    callBackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callBackRef.current(event);
      }
    }
    document.addEventListener("keydown", handle);
    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [key]);
}

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [searchTerm, setSearchTerm] = useState(0);

  const length = slides.length;

  function handleArrowRight(event) {
    event.preventDefault();
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function handleArrowLeft(event) {
    event.preventDefault();
    setCurrent(current === 0 ? length - 1 : current - 1);
  }
  useKey("ArrowRight", handleArrowRight);
  useKey("ArrowLeft", handleArrowLeft);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="container">
      <div className="contador">
        {DataDt.map((slide, index) => {
          return (
            <>
              {index === current && (
                <input
                  disabled
                  className="contadorDt"
                  type="number"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  placeholder={`${slide.id} / 121`}
                  min="0"
                ></input>
              )}
            </>
          );
        })}
        {DataMb.map((slide, index) => {
          return (
            <>
              {index === current && (
                <input
                  disabled
                  className="contadorMb"
                  type="number"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  placeholder={`${slide.id} / 121`}
                  min="0"
                ></input>
              )}
            </>
          );
        })}
      </div>
      <div className="slider">
        <img width="25px" src={left} onClick={prevSlide} alt="" />

        {DataDt.filter((val) => {
          if (searchTerm === 0) {
            return val;
          } else if (val.id.includes(searchTerm)) {
            return val;
          }
        }).map((slide, index) => {
          return (
            <>
              <div key={slide.imageName} className="sliderDt">
                {index === current && (
                  <img
                    src={`http://www2.duloren.com.br/catalogo/paginasDt/${slide.imageName}`}
                    alt=""
                  />
                )}
              </div>
            </>
          );
        })}
        {DataMb.filter((val) => {
          if (searchTerm === 0) {
            return val;
          } else if (val.id.includes(searchTerm)) {
            return val;
          }
        }).map((slide, index) => {
          return (
            <div key={slide.imageName} className="sliderMb">
              {index === current && (
                <img
                  src={`http://www2.duloren.com.br/catalogo/paginasMb/${slide.imageName}`}
                  className="mobile"
                  alt=""
                />
              )}
            </div>
          );
        })}

        <img width="25px" src={right} onClick={nextSlide} alt="" />
      </div>
    </section>
  );
};

export default ImageSlider;
