import { StyledLine } from "./LineStyles";

import React from "react";

type Props = { progress: number };

const Line: React.FC<Props> = (props: Props) => {
  console.log(props.progress);
  return (
    <StyledLine>
      <StyledLine progress={props.progress} />
    </StyledLine>
  );
};

export default Line;
