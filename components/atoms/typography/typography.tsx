import { TVariant } from "@/entities/common";
import { clsx } from "clsx";
import { FC, PropsWithChildren, ReactElement } from "react";
import { match } from "ts-pattern";

type TTypography = PropsWithChildren & {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "regular" | "medium" | "semi-bold" | "bold";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
  color?: TVariant;
};

export const Typography: FC<TTypography> = ({
  type = "h1",
  size = "base",
  variant = "regular",
  color = "default",
  ...props
}): ReactElement => {
  const className = clsx(
    "font-sans",
    {
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg": size === "lg",
      "text-xl": size === "xl",
      "text-2xl": size === "2xl",
      "text-3xl": size === "3xl",
      "text-4xl": size === "4xl",
      "text-5xl": size === "5xl",
      "text-6xl": size === "6xl",
      "text-7xl": size === "7xl",
    },

    {
      "font-regular": variant === "regular",
      "font-medium": variant === "medium",
      "font-semibold": variant === "semi-bold",
      "font-bold": variant === "bold",
    },

    {
      "text-black": color === "default",
      "text-error": color === "error",
      "text-warning": color === "warning",
      "text-success": color === "success",
      "text-primary": color === "primary",
      "text-primary-2": color === "secondary",
      "text-grey-100": color === "ghost",
      "text-info": color === "info",
    }
  );

  return match(type)
    .with("span", () => (
      <span data-testid="typography" className={className}>
        {props.children}
      </span>
    ))
    .with("h1", () => (
      <h1 data-testid="typography" className={className}>
        {props.children}
      </h1>
    ))
    .with("h2", () => (
      <h2 data-testid="typography" className={className}>
        {props.children}
      </h2>
    ))
    .with("h3", () => (
      <h3 data-testid="typography" className={className}>
        {props.children}
      </h3>
    ))
    .with("h4", () => (
      <h4 data-testid="typography" className={className}>
        {props.children}
      </h4>
    ))
    .with("h5", () => (
      <h5 data-testid="typography" className={className}>
        {props.children}
      </h5>
    ))
    .with("h6", () => (
      <h6 data-testid="typography" className={className}>
        {props.children}
      </h6>
    ))
    .with("p", () => (
      <p data-testid="typography" className={className}>
        {props.children}
      </p>
    ))
    .exhaustive();
};
