import { FC, useId } from "react";
import { TTextArea } from "../type";
import { className } from "../style";

export const InputTextArea: FC<TTextArea> = ({
  size = "sm",
  status = "primary",
  placeholder = "Masukkan Data",
  ...props
}) => {
  const id = useId();
  return (
    <textarea
      {...props}
      id={id}
      data-testid="text-area"
      role="textbox"
      className={className({ size, status })}
      placeholder={placeholder}
    />
  );
};
