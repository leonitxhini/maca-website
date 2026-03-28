export default function SteamWisp() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
      style={{ top: -28, width: 60, height: 32 }}
    >
      <svg
        viewBox="0 0 60 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <path
          d="M10 30 C12 22, 6 16, 10 8 C14 0, 8 -6, 10 -14"
          stroke="rgba(149,213,178,0.55)"
          strokeWidth="2"
          strokeLinecap="round"
          className="steam-wisp steam-wisp-1"
        />
        <path
          d="M30 30 C32 22, 26 16, 30 8 C34 0, 28 -6, 30 -14"
          stroke="rgba(149,213,178,0.45)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="steam-wisp steam-wisp-2"
        />
        <path
          d="M50 30 C52 22, 46 16, 50 8 C54 0, 48 -6, 50 -14"
          stroke="rgba(149,213,178,0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="steam-wisp steam-wisp-3"
        />
      </svg>
    </div>
  );
}
