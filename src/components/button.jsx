import React from "react";

const STYLES = [
  "click-primary",
  "click-accent",
  "click-info",
  "click-outline",
  "click-gray",
  "click-none",
];

const SIZES = ["click-sm", "click-md", "click-lg", "click-xl", "click-resize"];

const Button = ({
  children,
  type,
  onClick,
  className,
  variant,
  size,
  disabled,
}) => {
  const setButtonStyle = STYLES.includes(variant) ? variant : STYLES[0];

  const setButtonSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <button
      onClick={onClick}
      className={`click ${setButtonStyle} ${setButtonSize} ${className} ${
        disabled && "disabled"
      }`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
