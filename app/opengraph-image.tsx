import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#faf8f4",
          color: "#1a1714",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6b6259", marginBottom: 24 }}>{site.role}</div>
        <div style={{ display: "flex", fontSize: 96, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#6b6259", marginTop: 32, maxWidth: 900 }}>
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
