import { useEffect, useState } from "react";
import { StyledProgressBar } from "./StyledProgressBar";
import Circle from "./Circle/Circle";
import Line from "./Line/Line";

type Props = {};

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(0);
  const [progressReflections, setProgressReflections] = useState([
    0, 0, 0, 0, 0,
  ]);

  const calculateWidths = (progress: number) => {
    let leftCircle, leftLine, middleCircle, rightLine, rightCircle: number;
    if (progress < 50) {
      leftCircle = progress;
      leftLine = progress * 2;
      middleCircle = 0;
      rightLine = 0;
      rightCircle = 0;
    } else {
      leftCircle = progress;
      leftLine = 100;
      middleCircle = progress;
      rightLine = (progress - 50) * 2;
      rightCircle = 100;
    }
    return [leftCircle, leftLine, middleCircle, rightLine, rightCircle];
  };

  useEffect(() => {
    setProgress(30);
  }, []);

  useEffect(() => {
    setProgressReflections(() => calculateWidths(progress));
  }, [progress]);

  return (
    <StyledProgressBar>
      <Circle progress={progressReflections[0]} />
      <Line progress={progressReflections[1]} />
      <Circle progress={progressReflections[2]} />
      <Line progress={progressReflections[3]} />
      <Circle progress={progressReflections[4]} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
