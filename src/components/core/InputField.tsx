import React, { ChangeEvent, InputHTMLAttributes } from "react";

interface InputProps {
  type: "text" | "number" | "password" | "tel";
  className: string;
  placeholder: string;
  value?: any;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  type = "text",
  className,
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`${className} border border-[#494D61] rounded-[6px] w-full outline-none`}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export { InputField as default };