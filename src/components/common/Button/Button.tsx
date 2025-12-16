import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  secondary?: boolean;
  children: ReactNode;
}

function Button({ children, ...attrs }: ButtonProps) {
  return <StyledButton {...attrs}>{children}</StyledButton>;
}

export default Button;
