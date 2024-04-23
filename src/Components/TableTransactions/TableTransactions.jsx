import React, { useState } from "react";
import style from "./TableTransactions.module.css";
import Table from "react-bootstrap/Table";

export default function TableTransactions({
  date,
  status,
  description,
  amount,
  from,
  to,
  type,
}) {
  return (
    <>
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
    </>
  );
}
