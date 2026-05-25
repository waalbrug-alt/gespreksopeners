import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { inter } from "./fonts";

const ORANGE = "#e05c2a";
const CREAM = "#f5f0e8";

type QuestionSlideProps = {
  number: number;
  category: string;
  question: string;
  whenToUse: string;
  totalVisible?: number; // total questions to show as progress
};

export const QuestionSlide: React.FC<QuestionSlideProps> = ({
  number,
  category,
  question,
  whenToUse,
  totalVisible = 7,
}) => {
  const frame = useCurrentFrame();
  const { fontFamily } = inter;

  // Slide in from right
  const slideX = interpolate(frame, [0, 20], [120, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Number badge pops in
  const badgeScale = interpolate(frame, [8, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.34, 1.56, 0.64, 1),
  });

  // Question text stagger
  const questionOpacity = interpolate(frame, [18, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const questionY = interpolate(frame, [18, 35], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  // Caption/context at bottom
  const captionOpacity = interpolate(frame, [40, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const captionY = interpolate(frame, [40, 55], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, #0d0d1a 0%, #1a0d2e 60%, #0d1a1a 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 72px",
      }}
    >
      {/* Decorative circle top-right */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: `2px solid ${ORANGE}`,
          opacity: 0.12,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          border: `1px solid ${ORANGE}`,
          opacity: 0.08,
        }}
      />

      {/* Progress indicator (top) */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 72,
          right: 72,
          display: "flex",
          gap: 8,
          opacity,
        }}
      >
        {Array.from({ length: totalVisible }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: i < number ? ORANGE : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        style={{
          opacity,
          transform: `translateX(${slideX}px)`,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 0,
        }}
      >
        {/* Category + number row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 32,
          }}
        >
          {/* Number badge */}
          <div
            style={{
              transform: `scale(${badgeScale})`,
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: ORANGE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily,
                fontSize: 36,
                fontWeight: 900,
                color: "#fff",
              }}
            >
              {number}
            </span>
          </div>

          {/* Category */}
          <span
            style={{
              fontFamily,
              fontSize: 32,
              fontWeight: 600,
              color: ORANGE,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {category}
          </span>
        </div>

        {/* Question card */}
        <div
          style={{
            width: "100%",
            padding: "48px 56px",
            borderRadius: 28,
            backgroundColor: "rgba(255,255,255,0.05)",
            border: `1px solid rgba(255,255,255,0.1)`,
            marginBottom: 40,
            transform: `translateY(${questionY}px)`,
            opacity: questionOpacity,
          }}
        >
          {/* Opening quote */}
          <div
            style={{
              fontFamily,
              fontSize: 96,
              fontWeight: 900,
              color: ORANGE,
              opacity: 0.3,
              lineHeight: 0.7,
              marginBottom: 16,
              marginLeft: -8,
            }}
          >
            "
          </div>
          <p
            style={{
              fontFamily,
              fontSize: 58,
              fontWeight: 700,
              color: CREAM,
              lineHeight: 1.25,
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            {question}
          </p>
        </div>

        {/* Caption / context */}
        <div
          style={{
            opacity: captionOpacity,
            transform: `translateY(${captionY}px)`,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              padding: "28px 36px",
              borderRadius: 20,
              backgroundColor: "rgba(224, 92, 42, 0.1)",
              borderLeft: `4px solid ${ORANGE}`,
            }}
          >
            <span style={{ fontSize: 36 }}>💡</span>
            <p
              style={{
                fontFamily,
                fontSize: 34,
                fontWeight: 400,
                color: "rgba(245,240,232,0.75)",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {whenToUse}
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
