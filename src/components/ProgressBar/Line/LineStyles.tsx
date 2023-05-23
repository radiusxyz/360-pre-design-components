import styled from "styled-components";

type Props = {
  progress?: number;
};

export const StyledLine = styled.div<Props>`
  background-color: ${(props) => (props.progress && "blue") || "grey"};
  height: 10px;
  width: ${(props) => (props.progress ? `${props.progress}%` : "100%")};
`;
