import { TVariant } from "@/entities/common";
import { clsx } from "clsx";
import { FC, PropsWithChildren, ReactElement } from "react";
import { match } from "ts-pattern";

type TTypography = PropsWithChildren & {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant: "regular" | "medium" | "semi-bold" | "bold";
  size:
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
  color: TVariant;
};

export const Typography: FC<TTypography> = ({
  type = "h1",
  ...props
}): ReactElement => {
  const className = clsx(
    "font-sans",
    {
      "text-xs": props.size === "xs",
      "text-sm": props.size === "sm",
      "text-base": props.size === "base",
      "text-lg": props.size === "lg",
      "text-xl": props.size === "xl",
      "text-2xl": props.size === "2xl",
      "text-3xl": props.size === "3xl",
      "text-4xl": props.size === "4xl",
      "text-5xl": props.size === "5xl",
      "text-6xl": props.size === "6xl",
      "text-7xl": props.size === "7xl",
    },

    {
      "font-regular": props.variant === "regular",
      "font-medium": props.variant === "medium",
      "font-semibold": props.variant === "semi-bold",
      "font-bold": props.variant === "bold",
    },

    {
      "text-black": props.color === "default",
      "text-error": props.color === "error",
      "text-warning": props.color === "warning",
      "text-success": props.color === "success",
      "text-primary": props.color === "primary",
      "text-primary-2": props.color === "secondary",
      "text-grey-100": props.color === "ghost",
      "text-info": props.color === "info",
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
