import React from "react";
import style from "./ListItem.module.css";
import Table from "react-bootstrap/Table";

export default function ListItem() {
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
        <div className="selections my-5 w-50 d-flex gap-3">
          <select name="status" id="status" className={`${style.w100}  rounded-3 text-capitalize`}>
            <option value="status" className="desccolor">status</option>
          </select>
          <select name="date" id="date" className={`${style.w100}  rounded-3 text-capitalize`}>
            <option value="date" className="desccolor">date</option>
          </select>
          <select name="from" id="from" className={`${style.w100}  rounded-3 text-capitalize`}>
            <option value="from" className="desccolor">from</option>
          </select>
          <select name="to" id="to" className={`${style.w100}  rounded-3 text-capitalize`}>
            <option value="to" className="desccolor">to</option>
          </select>
          <select name="type" id="type" className={`${style.w100} rounded-3 text-capitalize`}>
            <option value="type">type</option>
          </select>
        </div>
        <Table responsive="xxl">
          <thead>
            <tr>
              <th className={`${style.desccolor}`}>date</th>
              <th className={`${style.desccolor}`}>description </th>
              <th className={`${style.desccolor}`}>amount</th>
              <th className={`${style.desccolor}`}>from</th>
              <th className={`${style.desccolor}`}>to</th>
              <th className={`${style.desccolor}`}>type</th>
              <th className={`${style.desccolor}`}>status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22-12-2024</td>
              <td>transfare for buying</td>
              <td>$200</td>
              <td>send money</td>
              <td>mohamed</td>
              <td>withdraw</td>
              <td>done</td>
            </tr>
            <tr>
              <td>22-12-2024</td>
              <td>transfare for buying</td>
              <td>$200</td>
              <td>send money</td>
              <td>mohamed</td>
              <td>withdraw</td>
              <td>done</td>
            </tr>
            <tr>
              <td>22-12-2024</td>
              <td>transfare for buying</td>
              <td>$200</td>
              <td>send money</td>
              <td>mohamed</td>
              <td>withdraw</td>
              <td>done</td>
            </tr>
            <tr>
              <td>22-12-2024</td>
              <td>transfare for buying</td>
              <td>$200</td>
              <td>send money</td>
              <td>mohamed</td>
              <td>withdraw</td>
              <td>done</td>
            </tr>
            <tr>
              <td>22-12-2024</td>
              <td>transfare for buying</td>
              <td>$200</td>
              <td>send money</td>
              <td>mohamed</td>
              <td>withdraw</td>
              <td>done</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
