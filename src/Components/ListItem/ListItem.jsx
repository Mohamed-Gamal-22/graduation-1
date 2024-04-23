import React, { useState } from "react";
import style from "./ListItem.module.css";
import ButtonScroll from "../ButtonScroll/ButtonScroll";
import TableTransactions from "./../TableTransactions/TableTransactions";
import BarInterface from "../BarInterface/BarInterface";
import NotificationInfo from "../NotificationInfo/NotificationInfo";
import Card from "../Card/Card";

export default function ListItem() {
  const [options, setoptions] = useState(["done", "faild"]);
  return (
    <>
      <div className="container my-3 text-capitalize">
        <div className="head d-flex justify-content-between align-items-center">
          <h2>Transactions</h2>
          <div className="buttons">
            <div className={`btn ${style.bgbtn} px-4 rounded-3 me-3`}>Pay</div>
            <div className={`btn ${style.bgbtn} px-4 rounded-3`}>Withdraw</div>
          </div>
        </div>
        <div className="my-5">
          <Card cardincome={"INCOME"} money={"$2000.00"} />
        </div>
        <div className="my-5">
          <NotificationInfo />
        </div>
        <div className="my-5">
          <BarInterface />
        </div>
        <div className="selections my-5 d-flex gap-3 flex-wrap">
          <ButtonScroll name="Status" options={options} />
          <ButtonScroll name="date" options={options} />
          <ButtonScroll name="from" options={options} />
          <ButtonScroll name="to" options={options} />
          <ButtonScroll name="type" options={options} />
        </div>

        <TableTransactions
          date="12-11-2024"
          description="Transfare For Buying"
          amount="$200"
          from="Send Money"
          to="hadeer"
          type="withdraw"
          status="done"
        />
      </div>
    </>
  );
}
