import React from "react";

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
          <h3>Rp. {price}</h3>
          {from && <h4>Rp .{from}</h4>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
