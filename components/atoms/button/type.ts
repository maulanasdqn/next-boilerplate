import { TSize, TState, TVariant, TVariantType } from "@/entities/common";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: Omit<TVariant, "default" | "info">;
  size: TSize;
  variantType?: TVariantType;
  href?: string;
  state?: TState;
};
