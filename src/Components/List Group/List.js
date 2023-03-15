import React from "react";

import "./List.css";

function UnorderList({ items }) {
  return (
    <ul className="unorderList">
      {items.map((item, index) => (
        <li className="unorderList__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function OrderList({ items }) {
  return (
    <ol className="orderList">
      {items.map((item, index) => (
        <li className="orderList__item" key={index}>
          {item}
        </li>
      ))}
    </ol>
  );
}

export { UnorderList, OrderList };
