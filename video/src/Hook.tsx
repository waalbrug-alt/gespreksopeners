import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { inter } from "./fonts";

const ORANGE = "#e05c2a";
const CREAM = "#f5f0e8";

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fontFamily } = inter;

  // Background flash on hook word
  const bgFlash = interpolate(frame, [0, 5, 20], [1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "STOP" big slam animation
  const stopScale = interpolate(frame, [0, 12], [2.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1), // overshoot for impact
  });
  const stopOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle line 1 appears at frame 25
  const line1Opacity = interpolate(frame, [25, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line1Y = interpolate(frame, [25, 38], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Subtitle line 2 appears at frame 45
  const line2Opacity = interpolate(frame, [45, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2Y = interpolate(frame, [45, 58], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Orange accent bar animation
  const barWidth = interpolate(frame, [20, 50], [0, 320], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // "Gebruik DIT" section — appears at frame 100
  const revealOpacity = interpolate(frame, [100, 118], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const revealY = interpolate(frame, [100, 118], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const arrowOpacity = interpolate(frame, [130, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const arrowBounce = interpolate(
    frame % 60,
    [0, 30, 60],
    [0, -12, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, #0d0d1a 0%, #1a0d2e 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
      }}
    >
      {/* Flash overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: ORANGE,
          opacity: bgFlash * 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Top pattern dots */}
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 80,
          width: 160,
          height: 160,
          opacity: 0.08,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: CREAM }} />
        ))}
      </div>

      {/* Main content */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {/* "STOP." */}
        <div
          style={{
            transform: `scale(${stopScale})`,
            opacity: stopOpacity,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 160,
              fontWeight: 900,
              color: ORANGE,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            STOP.
          </span>
        </div>

        {/* Orange accent bar */}
        <div
          style={{
            height: 5,
            width: barWidth,
            backgroundColor: ORANGE,
            borderRadius: 3,
            marginBottom: 48,
          }}
        />

        {/* Line 1 */}
        <div
          style={{
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          <span style={{ fontFamily, fontSize: 72, fontWeight: 700, color: CREAM, lineHeight: 1.15 }}>
            Met vragen hoe
          </span>
        </div>

        {/* Line 2 */}
        <div
          style={{
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
            textAlign: "center",
            marginBottom: 80,
          }}
        >
          <span style={{ fontFamily, fontSize: 72, fontWeight: 700, color: CREAM, lineHeight: 1.15 }}>
            het gaat.
          </span>
        </div>

        {/* "Gebruik DÍT" reveal */}
        <div
          style={{
            opacity: revealOpacity,
            transform: `translateY(${revealY}px)`,
            textAlign: "center",
            padding: "32px 48px",
            borderRadius: 24,
            border: `2px solid rgba(224, 92, 42, 0.4)`,
            backgroundColor: "rgba(224, 92, 42, 0.08)",
          }}
        >
          <div style={{ fontFamily, fontSize: 40, fontWeight: 400, color: "rgba(245, 240, 232, 0.6)", marginBottom: 8 }}>
            gebruik dit in plaats daarvan:
          </div>
          <div style={{ fontFamily, fontSize: 54, fontWeight: 800, color: CREAM }}>
            10 gespreksopeners
          </div>
          <div style={{ fontFamily, fontSize: 36, fontWeight: 400, color: "rgba(245, 240, 232, 0.7)", marginTop: 4 }}>
            die je team écht openen
          </div>
        </div>

        {/* Arrow bounce */}
        <div
          style={{
            opacity: arrowOpacity,
            transform: `translateY(${arrowBounce}px)`,
            marginTop: 48,
            fontSize: 64,
          }}
        >
          👇
        </div>
      </div>
    </AbsoluteFill>
  );
};
