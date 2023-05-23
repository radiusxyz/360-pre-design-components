import styled from "styled-components";

type Props = {
  progress?: number;
};

export const StyledCircle = styled.div<Props>`
  border-radius: 50%;
  background-color: ${(props) => (props.progress && "#8E8E8E") || "#D9D9D9"};
  width: 20px;
  height: 20px;
`;
