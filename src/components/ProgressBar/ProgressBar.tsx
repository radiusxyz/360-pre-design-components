import { useEffect, useState } from "react";
import { StyledProgressBar } from "./StyledProgressBar";
import Circle from "./Circle/Circle";
import Line from "./Line/Line";

type Props = {};

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <StyledProgressBar>
      <Circle progress={progress} />
      <Line progress={progress < 50 ? progress * 2 : 100} />
      <Circle progress={progress >= 50 ? progress : undefined} />
      <Line progress={progress >= 50 ? (progress - 50) * 2 : undefined} />
      <Circle progress={progress == 100 ? progress : undefined} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
