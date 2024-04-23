import React from "react";
import style from "./Card.module.css";

export default function Card({ cardincome, money }) {
  return (
    <>
      <div className={`${style.card} w-25 text-white text-center p-3`}>
        <div className="row">
          <div className="col-md-6">
            <p>{cardincome}</p>
            <p>{money}</p>
          </div>
          <div className="col-md-6">statistics</div>
        </div>
      </div>
    </>
  );
}
