import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "IPTV Iconic — Premium TV Streaming Experience";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(33,102,240,0.14) 0%, rgba(33,102,240,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "#2166f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            ▶
          </div>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, color: "#0b1220", letterSpacing: -1 }}>
            {siteConfig.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#55617a",
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Premium TV Streaming Experience
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 40,
          }}
        >
          {["M3U Playlists", "EPG Guide", "Multi-Device", "HD & 4K"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(33,102,240,0.25)",
                color: "#2166f0",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
