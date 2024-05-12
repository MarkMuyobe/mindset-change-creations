import React from "react";

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors
    hover:text-color-1`;
  const renderButton = () => (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );

  return renderButton();
};

export default Button;
