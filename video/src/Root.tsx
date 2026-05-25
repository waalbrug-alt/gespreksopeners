import "./index.css";
import { Composition } from "remotion";
import { GespreksopenerVideo } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Gespreksopeners"
        component={GespreksopenerVideo}
        durationInFrames={1800} // 60 seconds at 30fps
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
