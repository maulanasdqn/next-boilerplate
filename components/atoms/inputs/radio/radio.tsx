import { clsx } from "clsx";
import { FC, ReactElement, useId } from "react";
import { TInputCheckbox } from "../type";

export const InputRadio: FC<TInputCheckbox> = ({
  size = "sm",
  status = "default",
  ...props
}): ReactElement => {
  const id = useId();
  const className = clsx(
    "focus:ring-grey-800 bg-white rounded-full",
    {
      "w-4 h-4": size === "sm",
      "w-5 h-5": size === "md",
      "w-6 h-6": size === "lg",
    },
    {
      "bg-primary-2": status === "default",
      "bg-error": status === "error",
      "bg-warning": status === "warning",
      "bg-success": status === "success",
    }
  );

  return (
    <input {...props} role="radio" id={id} className={className} type="radio" />
  );
};
