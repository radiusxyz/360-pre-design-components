import { useEffect, useState } from "react";
import { StyledProgressBar } from "./StyledProgressBar";
import Circle from "./Circle/Circle";
import Line from "./Line/Line";

type Props = {};

const ProgressBar = (props: Props) => {
  const [progress, setProgress] = useState(0);
  const limit = 100;
  //   useEffect(() => {
  //     const identifier = setInterval(
  //       () => setProgress((progress) => progress + 1),
  //       500
  //     );

  //     return () => {
  //       clearInterval(identifier);
  //     };
  //   }, [progress, limit]);

  return (
    <StyledProgressBar>
      <Circle progress={progress} />
      <Line progress={progress} />
      <Circle progress={progress >= 50 ? progress : undefined} />
      <Line progress={progress >= 50 ? progress : undefined} />
      <Circle progress={progress == 100 ? progress : undefined} />
    </StyledProgressBar>
  );
};

export default ProgressBar;
