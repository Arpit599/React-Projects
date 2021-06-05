import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="card-item">
        <Link to="/" className="card-item-link">
          <figure className="card-item-pic-wrapper">
            <img className="card-item-img" src="images/img-2.jpg" alt="" />
          </figure>
        </Link>
        <div className="card-item-info">
          <h5 className="card-item-info-text">This place is awesome!</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
