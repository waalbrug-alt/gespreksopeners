import { useCurrentFrame, interpolate, Easing } from "remotion";
import { inter } from "./fonts";

type CaptionProps = {
  text: string;
  startFrame: number;
  endFrame: number;
  position?: "bottom" | "center-bottom";
};

/**
 * Caption overlay positioned in the lower third of the screen.
 * Fades in at startFrame, fades out at endFrame.
 */
export const Caption: React.FC<CaptionProps> = ({
  text,
  startFrame,
  endFrame,
  position = "bottom",
}) => {
  const frame = useCurrentFrame();
  const { fontFamily } = inter;

  const FADE_DURATION = 8;

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + FADE_DURATION, endFrame - FADE_DURATION, endFrame],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.16, 1, 0.3, 1),
    }
  );

  const translateY = interpolate(frame, [startFrame, startFrame + FADE_DURATION], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const bottomPosition = position === "bottom" ? 100 : 200;

  return (
    <div
      style={{
        position: "absolute",
        left: 56,
        right: 56,
        bottom: bottomPosition,
        opacity,
        transform: `translateY(${translateY}px)`,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.78)",
          backdropFilter: "blur(8px)",
          borderRadius: 16,
          padding: "20px 36px",
          maxWidth: "90%",
        }}
      >
        <p
          style={{
            fontFamily,
            fontSize: 38,
            fontWeight: 600,
            color: "#ffffff",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.4,
            letterSpacing: "-0.3px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
