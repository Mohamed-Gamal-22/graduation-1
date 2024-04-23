import React, { useState } from "react";
import style from "./ButtonScroll.module.css";

export default function ButtonScroll({ name, options }) {
  const [inputType, setInputType] = useState("text");
  const [isFocused, setIsFocused] = useState(false);

  function changeFocus() {
    setInputType("date");
    setIsFocused(true);
  }

  function changeBlur() {
    setInputType("text");
    setIsFocused(false);
  }

  return (
    <>
      {name === "date" ? (
        <div className="position-relative">
          <input
            type={inputType}
            placeholder="Date"
            onFocus={changeFocus}
            onBlur={changeBlur}
            className={`${style.date} ${style.select} rounded-3 text-capitalize`}
          />
          {isFocused ? null : (
            <i
              className={`${style.pos} fa-solid fa-chevron-down position-absolute`}
            ></i>
          )}
        </div>
      ) : (
        <select
          className={`${style.w100} ${style.select} rounded-3 text-capitalize`}
          id={name}
          value={name}
        >
          <option disabled selected>
            {name}
          </option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
