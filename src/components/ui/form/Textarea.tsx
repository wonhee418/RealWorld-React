import clsx from "clsx";
import { ReactNode } from "react";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { useController } from "react-hook-form";
import TextareaBase from "./TextareaBase";
import type { TextareaBaseProps } from "./TextareaBase";

export interface TextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
      TextareaBaseProps,
      "defaultValue" | "name" | "ref" | "value" | "onBlur" | "onChange"
    >,
    UseControllerProps<TFieldValues, TName> {
  contained?: boolean;
  rightIcon?: ReactNode;
}

const Textarea = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextareaProps<TFieldValues, TName>
) => {
  const {
    control,
    defaultValue,
    name,
    rules,
    contained,
    shouldUnregister,
    ...rest
  } = props;
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });
  return (
    <div>
      <TextareaBase
        {...rest}
        {...field}
        contained={contained}
        onChange={onChange}
      />
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default Textarea;
