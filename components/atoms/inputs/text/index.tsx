import { FC, useId } from "react";
import { TInput } from "../type";
import { className } from "../style";

export const InputText: FC<TInput> = ({
  size = "sm",
  status = "primary",
  type = "text",
  placeholder = "Masukkan Data",
  ...props
}) => {
  const id = useId();
  return (
    <input
      {...props}
      id={id}
      className={className({ size, status })}
      type={type}
      placeholder={placeholder}
    />
  );
};
