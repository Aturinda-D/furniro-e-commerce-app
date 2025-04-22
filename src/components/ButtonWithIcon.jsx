import React from "react";

const ButtonWithIcon = ({ icon, label, ...props }) => {
  return (
    <button className="button-with-icon" {...props}>
      {icon && icon}
      {label && label}
    </button>
  );
};

export default ButtonWithIcon;
