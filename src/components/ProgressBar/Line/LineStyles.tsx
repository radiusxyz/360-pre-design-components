import styled from "styled-components";

type Props = {
  progress?: number;
};

export const StyledLine = styled.div<Props>`
  background-color: ${(props) => (props.progress && "blue") || "grey"};
  height: 10px;
  transition: width 1s ease-in-out;
  width: ${(props) => (props.progress ? `${props.progress}px` : "100%")};
`;
