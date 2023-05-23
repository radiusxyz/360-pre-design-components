import { ChangeEvent, useEffect, useState } from "react";
import { StyledProgressBar } from "./StyledProgressBar";
import Circle from "./Circle/Circle";
import Line from "./Line/Line";

type Props = {};

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(0);
  const [progressReflections, setProgressReflections] = useState(
    calculateWidths(progress)
  );

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+event.target.value)) return;
    setProgress(
      (+event.target.value < 0 && 0) ||
        (+event.target.value > 100 && 100) ||
        +event.target.value
    );
  };

  function calculateWidths(progress: number) {
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
      rightCircle = progress === 100 ? 100 : 0;
    }
    return { leftCircle, leftLine, middleCircle, rightLine, rightCircle };
  }

  useEffect(() => {
    setProgressReflections(() => calculateWidths(progress));
  }, [progress]);

  return (
    <>
      <input
        style={{ marginBottom: 50, height: 30, padding: 20, fontSize: 20 }}
        placeholder="enter from 0 to 100"
        onChange={handleProgress}
        name="progress"
        autoFocus
      />
      <StyledProgressBar>
        <Circle progress={progressReflections.leftCircle} />
        <Line progress={progressReflections.leftLine} />
        <Circle progress={progressReflections.middleCircle} />
        <Line progress={progressReflections.rightLine} />
        <Circle progress={progressReflections.rightCircle} />
      </StyledProgressBar>
    </>
  );
};

export default ProgressBar;
