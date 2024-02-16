import { TVariant } from "@/entities/common";
import { ReactNode } from "react";

export type TTag = {
  children: ReactNode;
  variant: Omit<TVariant, "primary" | "secondary" | "default">;
};
