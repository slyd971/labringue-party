import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "AFROGROOVERS — Afrobeat & Groove Social Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const logoBuffer = readFileSync(join(process.cwd(), "public/afrogroovers/logo/logo-main.png"));
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#101218",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 72px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(243,166,35,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(243,166,35,0.06) 1px, transparent 1px)",
            backgroundSize: "88px 88px"
          }}
        />

        {/* Gold left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 6,
            background: "#F3A623"
          }}
        />

        {/* Left: text content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1, paddingRight: 48 }}>
          <div
            style={{
              color: "#F3A623",
              fontSize: 18,
              fontWeight: 900,
              letterSpacing: 10,
              textTransform: "uppercase",
              marginBottom: 24
            }}
          >
            GROOVE · AFROBEATS · LOVE
          </div>

          <div
            style={{
              color: "#F5F1E8",
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: 2,
              lineHeight: 0.88,
              textTransform: "uppercase",
              marginBottom: 32,
              display: "flex"
            }}
          >
            <span>AFRO</span>
            <span style={{ color: "#F3A623" }}>GROOVERS</span>
          </div>

          <div
            style={{
              color: "#F5F1E8",
              opacity: 0.6,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 40
            }}
          >
            Expérience afro premium · Paris
          </div>

          <div
            style={{
              display: "flex",
              gap: 12
            }}
          >
            {["Afrobeats", "Amapiano", "Afro-house", "Highlife"].map((tag) => (
              <div
                key={tag}
                style={{
                  background: "rgba(243,166,35,0.12)",
                  border: "1px solid rgba(243,166,35,0.3)",
                  color: "#F3A623",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 3,
                  padding: "6px 14px",
                  textTransform: "uppercase"
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
          }}
        >
          <img
            src={logoBase64}
            width={260}
            height={260}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
