import React from "react";

const IconButton = ({ icon, ...props }) => {
  return (
    <button className="icon-button" {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
