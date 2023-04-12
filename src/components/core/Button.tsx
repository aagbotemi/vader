import React from "react";

type ButtonProps = {
  disabled?: Boolean;
  className?: String;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  className,
  children,
  onClick,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`outline-none flex justify-center items-center py-3 px-6 font-medium text-[16px] leading-[20px] rounded-[6px] hover:bg-opacity-90 transition-opacity ease-linear delay-150 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export { Button as default };