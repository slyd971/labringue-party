import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const antonFont = await fetch(
    "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.woff"
  ).then((r) => r.arrayBuffer());

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 1200, height: 630 }}>
        {/* Left: pink panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#f4a3da",
            width: 480,
            height: 630,
            padding: "56px 40px",
          }}
        >
          <img
            src="https://labringue-party.vercel.app/logo/logo-villes.png"
            style={{ width: 320, objectFit: "contain" }}
          />
          {/* Woman silhouette */}
          <svg viewBox="0 0 80 148" fill="#1a1518" width={140} height={260}>
            <circle cx="40" cy="13" r="13" />
            <rect x="5" y="33" width="11" height="36" rx="5.5" transform="rotate(-14 10.5 51)" />
            <rect x="64" y="33" width="11" height="36" rx="5.5" transform="rotate(14 69.5 51)" />
            <path d="M27,30 L53,30 L67,106 L13,106 Z" />
            <rect x="17" y="105" width="16" height="43" rx="5" />
            <rect x="47" y="105" width="16" height="43" rx="5" />
          </svg>
          <div style={{ height: 1 }} />
        </div>

        {/* Right: dark panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background: "#111111",
            width: 720,
            height: 630,
            padding: "56px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {["100% meufs.", "100% fun.", "100% safe."].map((line) => (
              <div
                key={line}
                style={{
                  fontFamily: "Anton",
                  fontSize: 86,
                  color: "#f4a3da",
                  textTransform: "uppercase",
                  lineHeight: 1.06,
                  letterSpacing: "0.03em",
                }}
              >
                {line}
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 13,
              color: "rgba(244,163,218,0.55)",
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              fontFamily: "sans-serif",
            }}
          >
            Girls Only Party — France, Belgique &amp; Luxembourg
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Anton", data: antonFont, style: "normal", weight: 400 }],
    }
  );
}
