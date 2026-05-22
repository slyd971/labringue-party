import { ImageResponse } from "next/og";

export const alt = "AFROGROOVERS - Afrobeat & Groove Social Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#101218",
          color: "#F5F1E8",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div style={{ color: "#F3A623", fontSize: 26, fontWeight: 900, letterSpacing: 8, textTransform: "uppercase" }}>
          Groove * Afrobeats * Love
        </div>
        <div style={{ fontSize: 118, fontWeight: 900, letterSpacing: 2, lineHeight: 0.9, marginTop: 34, textTransform: "uppercase" }}>
          AFROGROOVERS
        </div>
        <div style={{ color: "#D86F4A", fontSize: 24, letterSpacing: 6, marginTop: 38, textTransform: "uppercase" }}>
          Outside - Party - Paris
        </div>
      </div>
    ),
    { ...size }
  );
}
