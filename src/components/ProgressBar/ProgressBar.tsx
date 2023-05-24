import { useEffect, useState } from "react";
import { StyledProgressBar } from "./StyledProgressBar";
import Circle from "./Circle";
import Line from "./Line";

type Props = { status: number };

const progressStates = [
  {
    leftCircle: 1,
    leftLine: 0,
    middleCircle: 0,
    rightLine: 0,
    rightCircle: 0,
  },
  {
    leftCircle: 1,
    leftLine: 1,
    middleCircle: 1,
    rightLine: 0,
    rightCircle: 0,
  },
  {
    leftCircle: 1,
    leftLine: 1,
    middleCircle: 1,
    rightLine: 1,
    rightCircle: 1,
  },
  {
    leftCircle: 0,
    leftLine: 0,
    middleCircle: 0,
    rightLine: 0,
    rightCircle: 0,
  },
];

const ProgressBar = (props: Props) => {
  const { status } = props;

  const [progressReflection, setProgressReflection] = useState(
    progressStates[status]
  );

  useEffect(() => {
    setProgressReflection(() => progressStates[status]);
  }, [status]);

  return (
    <StyledProgressBar>
      <Circle progress={progressReflection.leftCircle} />
      <Line progress={progressReflection.leftLine} />
      <Circle progress={progressReflection.middleCircle} />
      <Line progress={progressReflection.rightLine} />
      <Circle progress={progressReflection.rightCircle} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
