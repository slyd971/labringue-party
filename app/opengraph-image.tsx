import { ImageResponse } from "next/og";

export const alt = "La Bringue — Girls Only Party";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  let antonFont: ArrayBuffer | null = null;
  try {
    antonFont = await fetch(
      "https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.woff"
    ).then((r) => r.arrayBuffer());
  } catch {}

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: 1200, height: 630 }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "space-between", background: "#f4a3da",
          width: 460, height: 630, padding: "56px 36px",
        }}>
          <div style={{ fontFamily: "Anton, Impact, sans-serif", fontSize: 52, color: "#1a1518", textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>
            La Bringue
          </div>
          <svg viewBox="0 0 80 148" fill="#1a1518" width={130} height={240}>
            <circle cx="40" cy="13" r="13" />
            <rect x="5" y="33" width="11" height="36" rx="5.5" transform="rotate(-14 10.5 51)" />
            <rect x="64" y="33" width="11" height="36" rx="5.5" transform="rotate(14 69.5 51)" />
            <path d="M27,30 L53,30 L67,106 L13,106 Z" />
            <rect x="17" y="105" width="16" height="43" rx="5" />
            <rect x="47" y="105" width="16" height="43" rx="5" />
          </svg>
          <div style={{ fontFamily: "Anton, Impact, sans-serif", fontSize: 13, color: "#1a1518", textTransform: "uppercase", letterSpacing: "0.22em", opacity: 0.6 }}>
            Girls Only Party
          </div>
        </div>
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          background: "#111111", width: 740, height: 630, padding: "56px 64px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {["100% meufs.", "100% fun.", "100% safe."].map((line) => (
              <div key={line} style={{ fontFamily: "Anton, Impact, sans-serif", fontSize: 90, color: "#f4a3da", textTransform: "uppercase", lineHeight: 1.06, letterSpacing: "0.03em" }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, fontSize: 14, color: "rgba(244,163,218,0.5)", textTransform: "uppercase", letterSpacing: "0.24em", fontFamily: "sans-serif" }}>
            France, Belgique &amp; Luxembourg
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: antonFont ? [{ name: "Anton", data: antonFont, style: "normal" as const, weight: 400 as const }] : [],
    }
  );
}
