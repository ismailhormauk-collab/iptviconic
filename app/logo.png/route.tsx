import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2166f0",
          borderRadius: 64,
        }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180">
          <polygon points="45,30 150,90 45,150" fill="#ffffff" />
        </svg>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
