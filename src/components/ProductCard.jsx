import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { IoMdShare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({
  image,
  title,
  subtitle,
  price,
  from = "",
  isNew = false,
}) => {
  return (
    <div className="card">
      {from && (
        <div className="badge discount">
          <h5>-{Math.round((from - price) / (from / 100))}%</h5>
        </div>
      )}
      {isNew && (
        <div className="badge new">
          <h5>New</h5>
        </div>
      )}
      <img src={image} alt="Product image" />
      <div className="details">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div>
          <h3>Rp. {price.toLocaleString("de-DE")}</h3>
          {from && <h4>Rp. {from.toLocaleString("de-DE")}</h4>}
        </div>
      </div>
      <div className="card-overlay">
        <button className="add-to-cart">Add to cart</button>
        <ButtonWithIcon
          label={"Share"}
          icon={<IoMdShare className="inner-icon" />}
        />
        <ButtonWithIcon
          label={"Compare"}
          icon={
            <img
              src="assets/logos/comparison.svg"
              alt=""
              className="inner-icon"
            />
          }
        />
        <ButtonWithIcon
          label={"Like"}
          icon={<FaRegHeart className="inner-icon" />}
        />
      </div>
    </div>
  );
};

export default ProductCard;
