import { TSize, TVariant } from "@/entities/common";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type TInput = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
> & {
  size: TSize;
  status: Omit<TVariant, "primary" | "secondary">;
};

export type TInputCheckbox = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "type"
> & {
  size: TSize;
  status: Omit<TVariant, "primary" | "secondary">;
};

export type TTextArea = Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size"
> & {
  size: TSize;
  status: Omit<TVariant, "primary" | "secondary">;
};
