import styled from "@emotion/styled";
import Logo from "../../../assets/logo.svg?react";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIcon = styled(Logo)`
  width: 32px;
  height: 32px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.06em;
`;
