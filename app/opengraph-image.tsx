import { ImageResponse } from "next/og";

export const alt = "La Bringue — Girls Only Party";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labringue-party.vercel.app";

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 1200, height: 630 }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "space-between", background: "#f4a3da",
          width: 460, height: 630, padding: "56px 36px",
        }}>
          <div style={{ fontFamily: "Impact, sans-serif", fontSize: 54, color: "#1a1518", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center", fontWeight: 900 }}>
            La Bringue
          </div>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: 292, height: 292, border: "8px solid #1a1518",
            background: "#f4a3da", padding: 28,
          }}>
            <img
              src={`${siteUrl}/logo/logo-header.png`}
              width={218}
              height={180}
              alt="Logo La Bringue"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ fontFamily: "sans-serif", fontSize: 13, color: "#1a1518", textTransform: "uppercase", letterSpacing: "0.22em", opacity: 0.6, fontWeight: 700 }}>
            Girls Only Party
          </div>
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          background: "#111111", width: 740, height: 630, padding: "56px 64px",
        }}>
          <div style={{
            fontFamily: "Impact, sans-serif", fontSize: 104, color: "#f4a3da",
            textTransform: "uppercase", lineHeight: 0.98, letterSpacing: "0.02em",
            fontWeight: 900, maxWidth: 600,
          }}>
            La fête version meufs
          </div>
          <div style={{
            marginTop: 34, fontSize: 24, color: "rgba(244,163,218,0.72)",
            textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.35,
            fontFamily: "sans-serif", fontWeight: 800, maxWidth: 560,
          }}>
            La plus grosse soirée réservée aux femmes — Depuis 2019
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
