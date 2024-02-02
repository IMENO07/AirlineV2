import React from "react";

const sizeClasses = {
  txtInterMedium18: "font-inter font-medium",
  txtInterSemiBold24WhiteA700: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium13: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
