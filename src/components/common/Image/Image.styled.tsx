import styled from "@emotion/styled";
import type { ThumbProps } from "./Image";

export const Thumb = styled.div`
  width: ${(props: ThumbProps) => props.width};
  height: ${(props: ThumbProps) => props.height};

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
