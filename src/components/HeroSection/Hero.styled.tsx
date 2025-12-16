import styled from "@emotion/styled";
import PALLETTE from "../../helpers/pallete";

export const Section = styled.section`
  margin-top: 16px;
  padding: 48px 12px;

  border-radius: 4px 4px 0 0;

  background-color: ${PALLETTE.bgMain};
`;

export const Heading = styled.h1`
  margin-bottom: 16px;

  font-size: 36px;
  font-weight: 600;
  line-height: 1.11;
`;

export const Text = styled.p`
  margin-bottom: 32px;

  font-size: 18px;
  line-height: 1.56;

  color: ${PALLETTE.textSecondary};
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 48px;
`;
