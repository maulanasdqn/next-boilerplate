import { FC, ReactElement, useId } from "react";
import { TInputCheckbox } from "../type";
import { clsx } from "clsx";

export const InputCheckbox: FC<TInputCheckbox> = ({
  size = "sm",
  ...props
}): ReactElement => {
  const id = useId();
  const className = clsx("focus:ring-grey-800 bg-white rounded-full");
  return <input id={id} className={className} {...props} type="checkbox" />;
};
