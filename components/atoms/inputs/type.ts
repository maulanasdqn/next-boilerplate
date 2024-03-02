import { TSize, TVariant } from "@/entities/common";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export type TInputExtend = {
  size?: TSize;
  status: Omit<TVariant, "primary" | "secondary">;
};

export type TInput = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
> &
  TInputExtend;

export type TInputCheckbox = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "type"
> &
  TInputExtend;

export type TTextArea = Omit<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >,
  "size"
> &
  TInputExtend;
