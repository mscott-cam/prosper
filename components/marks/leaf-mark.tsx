interface LeafMarkProps {
  className?: string;
  size?: number;
}

export function LeafMark({ className, size = 32 }: LeafMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 40C8 22 22 8 40 8C40 26 26 40 8 40Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M8 40C18 30 28 20 40 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SeedMark({ className, size = 24 }: LeafMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="10"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function Asterism({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block tracking-[0.4em] ${className ?? ""}`}
    >
      · · ·
    </span>
  );
}
