import styled from "@emotion/styled";
import VIEWPORTS from "../../../helpers/viewports";
import PALLETTE from "../../../helpers/pallete";
import type { ButtonProps } from "./Button";

const { tablet } = VIEWPORTS;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px;
  width: 100%;

  font-family: "Noto Sans";
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  border-radius: 4px;

  border: ${(props: ButtonProps) =>
    props.secondary ? `0.50px solid ${PALLETTE.borderSecondary}` : "none"};

  cursor: pointer;
  outline: none;

  box-shadow: ${(props: ButtonProps) =>
    props.disabled ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"};

  color: ${(props: ButtonProps) =>
    props.disabled
      ? PALLETTE.textDisabled
      : props.secondary
      ? PALLETTE.textPrimary
      : PALLETTE.textLight};

  background: ${(props: ButtonProps) =>
    props.disabled ? PALLETTE.bgDisabled : props.secondary ? PALLETTE.bgMain : PALLETTE.main};

  transition: color 250ms ease-in-out;

  &:hover {
    background: ${(props: ButtonProps) =>
      props.disabled
        ? PALLETTE.bgDisabled
        : props.secondary
        ? PALLETTE.secondaryFocus
        : PALLETTE.mainFocus};

    border: ${(props: ButtonProps) =>
      !props.disabled && props.secondary && `1px solid ${PALLETTE.borderSecondary}`};

    cursor: ${(props: ButtonProps) => props.disabled && "default"};
  }

  &:focus {
    color: ${(props: ButtonProps) => !props.disabled && props.secondary && PALLETTE.textFocus};

    background: ${(props: ButtonProps) =>
      props.disabled
        ? PALLETTE.bgDisabled
        : props.secondary
        ? PALLETTE.secondaryFocus
        : PALLETTE.mainFocus};

    border: ${(props: ButtonProps) =>
      !props.disabled && props.secondary && `1px solid ${PALLETTE.borderSecondary}`};

    box-shadow: ${(props: ButtonProps) => !props.disabled && "0 0 0 4px rgba(68, 76, 231, 0.12)"};
  }

  @media screen and (min-width: ${`${tablet}px`}) {
    border-radius: 12px;
  }
`;
