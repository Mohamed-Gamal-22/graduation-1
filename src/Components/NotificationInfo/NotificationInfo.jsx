import React from "react";
import style from "./NotificationInfo.module.css";

export default function NotificationInfo() {
  return (
    <>
      
        <div className="row">
          <div className="col-md-6">
          <h2 className={`${style.head}`}>Email is changed</h2>
            <p className="my-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              odit. At, voluptas laborum quasi pariatur adipisci consectetur
              praesentium, voluptate rerum voluptates suscipit nemo odit optio,
              sunt excepturi fugit commodi impedit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit illo commodi repellendus molestias error rerum. Officia quos in modi quibusdam quod totam labore eaque? Maxime est consequatur provident expedita optio!
            </p>
            <div className={`${style.head} d-flex justify-content-end fw-bold`}>Date: 2019-11-22</div>
          </div>
        </div>
    </>
  );
}
