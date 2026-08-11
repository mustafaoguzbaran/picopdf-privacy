import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "../app/page";

const siteUrl = "https://mustafaoguzbaran.github.io/picopdf-privacy/";
const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const stylesheet = readFileSync(`${projectRoot}app/globals.css`, "utf8")
  .replace('@import "tailwindcss";', "")
  .trim();

const markup = renderToStaticMarkup(<Home />);
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#4e3b59" />
    <meta
      name="description"
      content="How PicoPDF handles files, advertising data, consent choices, and on-device PDF processing."
    />
    <meta property="og:title" content="PicoPDF Privacy Policy" />
    <meta property="og:description" content="Your files stay on your device." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}" />
    <meta property="og:image" content="${siteUrl}public/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="PicoPDF Privacy Policy" />
    <meta name="twitter:description" content="Your files stay on your device." />
    <meta name="twitter:image" content="${siteUrl}public/og.png" />
    <link rel="canonical" href="${siteUrl}" />
    <link rel="icon" href="public/favicon.png" />
    <title>PicoPDF Privacy Policy | Gizlilik Politikası</title>
    <style>${stylesheet}</style>
  </head>
  <body>${markup}</body>
</html>
`;

writeFileSync(`${projectRoot}index.html`, html, "utf8");
