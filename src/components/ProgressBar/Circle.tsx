import { StyledCircle } from "./CircleStyles";

import React from "react";

type Props = { progress: number };

const Circle: React.FC<Props> = (props: Props) => {
  return (
    <StyledCircle>
      <StyledCircle progress={props.progress} />
    </StyledCircle>
  );
};

export default Circle;
