import styled from "styled-components";

type Props = {
  progress?: number;
};

export const StyledLine = styled.div<Props>`
  background-color: ${(props) => (props.progress && "#8E8E8E") || "#D9D9D9"};
  height: 5px;
  width: 100%;
`;
