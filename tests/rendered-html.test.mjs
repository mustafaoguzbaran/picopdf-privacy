import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual PicoPDF privacy policy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>PicoPDF Privacy Policy \| Gizlilik Politikası<\/title>/i);
  assert.match(html, /id="english" lang="en"/i);
  assert.match(html, /id="turkce" lang="tr"/i);
  assert.match(html, /com\.mustafaoguzbaran\.picopdf/);
  assert.match(html, /Google AdMob/);
  assert.match(html, /Your files stay on your device/);
  assert.match(html, /Seçtiğiniz dosyalar cihazınızda yerel olarak işlenir/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("exports a self-contained GitHub Pages document", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(html, /^<!doctype html>/i);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/mustafaoguzbaran\.github\.io\/picopdf-privacy\/"/i,
  );
  assert.match(html, /<style>[\s\S]*--plum:\s*#4e3b59;[\s\S]*<\/style>/i);
  assert.match(html, /id="english" lang="en"/i);
  assert.match(html, /id="turkce" lang="tr"/i);
  assert.match(html, /Ayarlar → Gizlilik seçenekleri<\/strong> bölümünden/);
  assert.doesNotMatch(html, /\/_next\/|@import\s+"tailwindcss"/i);
});
