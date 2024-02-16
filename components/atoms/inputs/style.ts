import { clsx } from "clsx";
import { TInput } from "./type";

export const className = ({ size = "sm", status = "default" }: TInput) =>
  clsx(
    "rounded-md w-full border outline-none focus:ring-none focus:outline-none",
    "disabled:cursor-not-allowed disabled:bg-grey-50",
    {
      "px-3 py-2 text-xs": size === "sm" || !size,
      "px-4 py-3": size === "md",
      "px-5 py-4": size === "lg",
    },
    {
      "bg-white border-grey-200 text-grey-300 placeholder:text-grey-300":
        status === "default" || !status,
      "bg-success-50 text-success border-success placeholder:text-success":
        status === "success",
      "bg-error-50 border-error text-error placeholder:text-error":
        status === "error",
      "bg-warning-50 text-warning border-warning placeholder:text-warning":
        status === "warning",
    }
  );
