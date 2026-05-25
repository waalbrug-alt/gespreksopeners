import { AbsoluteFill, Sequence } from "remotion";
import { Hook } from "./Hook";
import { QuestionSlide } from "./QuestionSlide";
import { CTA } from "./CTA";
import { Caption } from "./Caption";

// ─── QUESTIONS ──────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    number: 1,
    category: "Check-in",
    question: "Hoe gaat het écht met je vandaag?",
    whenToUse: "Gebruik dit aan het begin van elk 1-op-1 gesprek. Voeg 'écht' toe en wacht.",
  },
  {
    number: 2,
    category: "Energie",
    question: "Wat kost je momenteel de meeste energie?",
    whenToUse: "Ideaal bij tekenen van stress of verminderde motivatie.",
  },
  {
    number: 3,
    category: "Waardering",
    question: "Waar ben je de afgelopen week trots op?",
    whenToUse: "Gebruik bij terugkoppeling of na een drukke periode.",
  },
  {
    number: 4,
    category: "Wrijving",
    question: "Wat irriteert je, maar spreek je niet uit?",
    whenToUse: "Gebruik als je vermoedt dat iemand iets inhoudt.",
  },
  {
    number: 5,
    category: "Groei",
    question: "Wat wil je dit jaar leren?",
    whenToUse: "Ideaal bij ontwikkelgesprekken of begin van een kwartaal.",
  },
  {
    number: 6,
    category: "Signalen",
    question: "Wanneer merk jij dat het minder goed met je gaat?",
    whenToUse: "Gebruik preventief — niet als de crisis al plaatsvindt.",
  },
  {
    number: 7,
    category: "Veiligheid",
    question: "Wat helpt jou om je veilig te voelen in dit team?",
    whenToUse: "Gebruik bij nieuwe teamleden of na een spanningsvolle periode.",
  },
] as const;

// ─── TIMING ─────────────────────────────────────────────────────────────────
// Total: 1800 frames = 60s at 30fps
//
//  0 – 210  (7s)   Hook scene
//  210 – 1680  (7s × 7 questions = 49s)
//  1680 – 1800  (4s)  CTA

const HOOK_START = 0;
const HOOK_DURATION = 210; // 7s

const QUESTION_DURATION = 210; // 7s per question
const QUESTIONS_START = HOOK_DURATION;

const CTA_START = QUESTIONS_START + QUESTIONS.length * QUESTION_DURATION; // 1680
const CTA_DURATION = 120; // 4s

// ─── CAPTION ENTRIES ─────────────────────────────────────────────────────────
type CaptionEntry = {
  text: string;
  start: number;
  end: number;
};

function getQuestionCaptions(): CaptionEntry[] {
  return QUESTIONS.map((q, i) => {
    const qStart = QUESTIONS_START + i * QUESTION_DURATION;
    return {
      text: q.question,
      start: qStart + 45,
      end: qStart + QUESTION_DURATION - 20,
    };
  });
}

// ─── MAIN COMPOSITION ───────────────────────────────────────────────────────
export const GespreksopenerVideo: React.FC = () => {
  const captions = getQuestionCaptions();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0d0d1a" }}>
      {/* HOOK */}
      <Sequence from={HOOK_START} durationInFrames={HOOK_DURATION}>
        <Hook />
      </Sequence>

      {/* Hook caption */}
      <Caption
        text="Ken jij je team écht?"
        startFrame={HOOK_START + 100}
        endFrame={HOOK_START + HOOK_DURATION - 15}
      />

      {/* QUESTION SLIDES */}
      {QUESTIONS.map((q, i) => {
        const start = QUESTIONS_START + i * QUESTION_DURATION;
        return (
          <Sequence key={q.number} from={start} durationInFrames={QUESTION_DURATION}>
            <QuestionSlide
              number={q.number}
              category={q.category}
              question={q.question}
              whenToUse={q.whenToUse}
              totalVisible={QUESTIONS.length}
            />
          </Sequence>
        );
      })}

      {/* CAPTIONS — lower-third overlays per question */}
      {captions.map((cap, i) => (
        <Caption
          key={i}
          text={cap.text}
          startFrame={cap.start}
          endFrame={cap.end}
          position="bottom"
        />
      ))}

      {/* CTA */}
      <Sequence from={CTA_START} durationInFrames={CTA_DURATION}>
        <CTA />
      </Sequence>

      {/* CTA caption */}
      <Caption
        text="Bewaar & deel met je team 🔖"
        startFrame={CTA_START + 60}
        endFrame={CTA_START + CTA_DURATION - 5}
      />
    </AbsoluteFill>
  );
};
