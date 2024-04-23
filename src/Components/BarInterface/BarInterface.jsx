import React from "react";
import style from "./BarInterface.module.css";

export default function BarInterface() {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className={style.myProfile}>my profile</h2>
        <div
          className={`${style.hover} d-flex align-items-center gap-2 position-relative`}
        >
          <i
            className={`${style.move} fa-solid fa-arrow-left-long position-absolute`}
          ></i>
          <span className={style.back}>Go Back To Dashboard</span>
        </div>
      </div>
    </>
  );
}
