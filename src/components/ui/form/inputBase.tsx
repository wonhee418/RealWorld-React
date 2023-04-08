import clsx from "clsx";
import type { InputHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

export interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  maxLength?: number;
  message?: string;
  onChange: (...event: any[]) => void;
  placeholder?: string;
  readOnly?: boolean;
  contained?: boolean;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    className,
    fullWidth,
    onChange,
    placeholder,
    contained,
    readOnly,
    type = "text",
    ...rest
  } = props;

  return (
    <span className="relative">
      <input
        ref={ref}
        className={clsx(
          "rounded  py-3 text-black focus-visible:border-blue-primary ",
          fullWidth && "w-full",
          contained
            ? " border-none bg-gray-20"
            : "border-gray-30 border border-solid bg-white",
          className
        )}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        {...rest}
      />
    </span>
  );
});

export default InputBase;
