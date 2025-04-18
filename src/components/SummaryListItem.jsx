import React from "react";

const SummaryListItem = ({ icon, title, subtitle }) => {
  return (
    <div className="summaryli">
      <img src={icon} alt="ICON" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  );
};

export default SummaryListItem;
