import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "claude-docs - Up-to-date library docs for Claude Code";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: "bold",
              color: "#ffffff",
              letterSpacing: "-0.05em",
            }}
          >
            claude-docs
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              maxWidth: "800px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Up-to-date library docs for Claude Code via MCP
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#71717a",
              backgroundColor: "#27272a",
              padding: "16px 32px",
              borderRadius: "8px",
            }}
          >
            npx claude-docs
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
