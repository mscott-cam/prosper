interface BotanicalMarkProps {
  className?: string;
}

export function PalmFrond({ className }: BotanicalMarkProps) {
  return (
    <svg
      viewBox="0 0 500 820"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 252 815 C 250 660 248 500 250 100"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Left leaflets, bottom to top */}
      <path
        d="M 250 720 C 175 710 100 695 25 645 C 95 740 180 738 250 730 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 630 C 180 620 95 600 18 540 C 85 645 180 645 250 638 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 540 C 180 530 90 510 15 440 C 80 555 180 555 250 548 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 450 C 180 440 95 420 28 350 C 90 465 180 467 250 458 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 365 C 190 355 115 335 65 280 C 115 380 195 380 250 372 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 285 C 205 275 155 260 115 220 C 155 295 205 297 250 290 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 215 C 220 207 190 195 165 175 C 190 220 220 222 250 218 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 155 C 230 148 212 138 198 125 C 215 158 235 160 250 158 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 110 C 238 105 228 96 220 88 C 230 110 244 112 250 112 Z"
        strokeWidth="1"
      />

      {/* Right leaflets, mirrored */}
      <path
        d="M 250 720 C 325 710 400 695 475 645 C 405 740 320 738 250 730 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 630 C 320 620 405 600 482 540 C 415 645 320 645 250 638 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 540 C 320 530 410 510 485 440 C 420 555 320 555 250 548 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 450 C 320 440 405 420 472 350 C 410 465 320 467 250 458 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 365 C 310 355 385 335 435 280 C 385 380 305 380 250 372 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 285 C 295 275 345 260 385 220 C 345 295 295 297 250 290 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 215 C 280 207 310 195 335 175 C 310 220 280 222 250 218 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 155 C 270 148 288 138 302 125 C 285 158 265 160 250 158 Z"
        strokeWidth="1"
      />
      <path
        d="M 250 110 C 262 105 272 96 280 88 C 270 110 256 112 250 112 Z"
        strokeWidth="1"
      />
    </svg>
  );
}

export function Pothos({ className }: BotanicalMarkProps) {
  return (
    <svg
      viewBox="0 0 320 460"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Hanging vine — main strand */}
      <path
        d="M 160 0 C 140 60 180 110 150 170 C 120 230 200 270 170 330 C 140 380 200 420 180 460"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Heart-shaped leaves spaced along the vine */}
      <g strokeWidth="1">
        <path d="M 160 35 C 130 30 110 50 120 75 C 130 100 160 90 165 60 C 168 90 195 100 205 75 C 215 50 195 30 165 35 Z" />
        <path d="M 152 130 C 122 125 102 145 112 170 C 122 195 152 185 157 155 C 160 185 187 195 197 170 C 207 145 187 125 157 130 Z" />
        <path d="M 175 235 C 145 230 125 250 135 275 C 145 300 175 290 180 260 C 183 290 210 300 220 275 C 230 250 210 230 180 235 Z" />
        <path d="M 162 350 C 132 345 112 365 122 390 C 132 415 162 405 167 375 C 170 405 197 415 207 390 C 217 365 197 345 167 350 Z" />
      </g>
    </svg>
  );
}

export function StudyPlate({ className }: BotanicalMarkProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" strokeWidth="1" />
      <path
        d="M 60 18 C 40 30 35 60 60 102 C 85 60 80 30 60 18 Z"
        strokeWidth="1"
      />
      <path d="M 60 18 V 102" strokeWidth="0.7" />
      <path d="M 60 35 C 50 38 45 45 45 55" strokeWidth="0.7" />
      <path d="M 60 35 C 70 38 75 45 75 55" strokeWidth="0.7" />
      <path d="M 60 55 C 48 58 42 65 42 75" strokeWidth="0.7" />
      <path d="M 60 55 C 72 58 78 65 78 75" strokeWidth="0.7" />
      <path d="M 60 75 C 52 78 48 84 48 90" strokeWidth="0.7" />
      <path d="M 60 75 C 68 78 72 84 72 90" strokeWidth="0.7" />
    </svg>
  );
}
