import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const resumePath = path.join(process.cwd(), "public", "assets", "resume.pdf");
  const downloadName = "Asonganyi Anyah Resume.pdf";
  const downloadNameEncoded = encodeURIComponent(downloadName);

  try {
    const file = await fs.readFile(resumePath);

    return new Response(file, {
      headers: {
        "Content-Type": "application/pdf",
        // Force download
        // Include both filename + filename* for better browser compatibility (spaces, unicode, etc.)
        "Content-Disposition": `attachment; filename="${downloadName}"; filename*=UTF-8''${downloadNameEncoded}`,
        // Avoid stale cached filenames while iterating
        "Cache-Control": "no-store",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch {
    return new Response(
      "Resume not found. Add it at public/assets/resume.pdf",
      { status: 404 }
    );
  }
}
