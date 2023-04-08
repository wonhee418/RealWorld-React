import clsx from "clsx";
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { useController } from "react-hook-form";
import type { InputBaseProps } from "./inputBase";
import InputBase from "./inputBase";

export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<
      InputBaseProps,
      "defaultValue" | "name" | "ref" | "value" | "onBlur" | "onChange"
    >,
    UseControllerProps<TFieldValues, TName> {
  contained?: boolean;
  onEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: InputProps<TFieldValues, TName>
) => {
  const {
    control,
    defaultValue,
    name,
    rules,
    contained,
    shouldUnregister,
    onEnter,
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
      <InputBase
        {...rest}
        {...field}
        contained={contained}
        onChange={onChange}
        onEnter={onEnter}
      />
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default Input;
