import { FC, ReactElement } from "react";
import { TTag } from "./type";
import { clsx } from "clsx";

export const Tag: FC<TTag> = ({
  variant = "primary",
  children,
}): ReactElement => {
  const className = clsx("px-2 py-1 w-fit rounded-lg", {
    "bg-info-100 text-info-500": variant === "info",
    "bg-error-100 text-error-500": variant === "error",
    "bg-success-100 text-success-500": variant === "success",
    "bg-warning-100 text-warning-500": variant === "warning",
  });
  return <div className={className}>{children}</div>;
};
