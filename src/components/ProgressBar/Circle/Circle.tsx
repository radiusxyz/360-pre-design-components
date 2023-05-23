import { StyledCircle } from "./CircleStyles";

import React from "react";

type Props = { progress: number | undefined };

const Circle: React.FC<Props> = (props: Props) => {
  return (
    <StyledCircle>
      <StyledCircle progress={props.progress} />
    </StyledCircle>
  );
};

export default Circle;
