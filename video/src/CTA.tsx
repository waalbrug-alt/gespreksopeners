import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { inter } from "./fonts";

const ORANGE = "#e05c2a";
const CREAM = "#f5f0e8";

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fontFamily } = inter;

  // Background pulse
  const bgPulse = interpolate(frame % 90, [0, 45, 90], [0, 0.06, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title entrance
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleScale = interpolate(frame, [0, 20], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
  });

  // Number "10" big
  const numberOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numberScale = interpolate(frame, [10, 30], [0.5, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
  });

  // CTA text
  const ctaOpacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaY = interpolate(frame, [35, 55], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Link in bio button pulse
  const buttonScale = interpolate(frame % 60, [0, 30, 60], [1, 1.04, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Save reminder
  const saveOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, #0d0d1a 0%, #1a0d2e 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 72px",
      }}
    >
      {/* Animated background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: ORANGE,
          opacity: bgPulse,
          pointerEvents: "none",
        }}
      />

      {/* Top decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          background: `linear-gradient(90deg, ${ORANGE}, #ff8c5a, ${ORANGE})`,
        }}
      />

      {/* Content */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* "Je hebt zojuist..." */}
        <div style={{ opacity: titleOpacity, transform: `scale(${titleScale})`, marginBottom: 16, textAlign: "center" }}>
          <span style={{ fontFamily, fontSize: 40, fontWeight: 400, color: "rgba(245,240,232,0.6)" }}>
            je hebt zojuist
          </span>
        </div>

        {/* Big "7 van de 10" */}
        <div
          style={{
            opacity: numberOpacity,
            transform: `scale(${numberScale})`,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          <span style={{ fontFamily, fontSize: 180, fontWeight: 900, color: ORANGE, lineHeight: 1, letterSpacing: "-4px" }}>
            7
          </span>
        </div>
        <div style={{ opacity: numberOpacity, textAlign: "center", marginBottom: 48 }}>
          <span style={{ fontFamily, fontSize: 52, fontWeight: 700, color: CREAM }}>
            gespreksopeners gezien
          </span>
        </div>

        {/* Divider */}
        <div style={{ width: 80, height: 4, backgroundColor: ORANGE, borderRadius: 2, marginBottom: 48 }} />

        {/* CTA */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: 44,
              fontWeight: 700,
              color: CREAM,
              textAlign: "center",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Wil je alle 10?
          </p>
          <p
            style={{
              fontFamily,
              fontSize: 36,
              fontWeight: 400,
              color: "rgba(245,240,232,0.65)",
              textAlign: "center",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Inclusief uitleg, context en tips wanneer je ze inzet
          </p>

          {/* Button */}
          <div
            style={{
              transform: `scale(${buttonScale})`,
              backgroundColor: ORANGE,
              borderRadius: 60,
              padding: "28px 64px",
              marginTop: 16,
            }}
          >
            <span style={{ fontFamily, fontSize: 42, fontWeight: 800, color: "#fff" }}>
              🔗 Link in bio
            </span>
          </div>
        </div>

        {/* Save reminder */}
        <div
          style={{
            opacity: saveOpacity,
            marginTop: 48,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 40 }}>🔖</span>
          <span style={{ fontFamily, fontSize: 34, fontWeight: 600, color: "rgba(245,240,232,0.5)" }}>
            Bewaar voor later
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
