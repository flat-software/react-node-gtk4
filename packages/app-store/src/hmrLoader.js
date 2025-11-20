import fs from "node:fs";
import {fileURLToPath} from "node:url";

export async function resolve(specifier, context, next) {
  // Let Node figure out the “real” target first
  const res = await next(specifier, context);

  // Only touch local files
  if (!res.url.startsWith("file:")) {
    return res;
  }

  const filePath = fileURLToPath(res.url);
  let stat;
  try {
    stat = fs.statSync(filePath);
  } catch {
    return res; // non-existent? just return as-is
  }

  const mtime = String(stat.mtimeMs);
  const url = new URL(res.url);
  url.searchParams.set("v", mtime); // version = mtime

  return {...res, url: url.href};
}
