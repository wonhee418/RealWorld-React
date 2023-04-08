import clsx from "clsx";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaBaseProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
  maxLength?: number;
  onChange: (...event: any[]) => void;
  placeholder?: string;
  readOnly?: boolean;
  contained?: boolean;
}

const TextareaBase = forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  (props, ref) => {
    const {
      className,
      fullWidth,
      onChange,
      placeholder,
      contained,
      readOnly,
      ...rest
    } = props;
    return (
      <span className="relative">
        <textarea
          ref={ref}
          rows={8}
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
          onChange={(e) => {
            onChange(e.target.value);
          }}
          {...rest}
        />
      </span>
    );
  }
);

export default TextareaBase;
