import styled from "styled-components";

type Props = {
  progress?: number;
};

export const StyledCircle = styled.div<Props>`
  border-radius: 50%;
  background-color: ${(props) => (props.progress && "blue") || "grey"};
  width: 40px;
  height: 40px;
`;
