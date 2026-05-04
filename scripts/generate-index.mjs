import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const clientDir = "dist/client";
const assetsDir = join(clientDir, "assets");

// Find the hashed JS entry and CSS file from the assets folder
const files = readdirSync(assetsDir);
const jsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!jsFile || !cssFile) {
  console.error("Could not find hashed JS or CSS files in dist/client/assets");
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Mehtacop Refinery Pvt. Ltd.</title>
    <meta name="description" content="Global-grade copper cathodes, anodes and ingots. ISO 9001:2015 certified. Part of the Nakoda Group of Companies." />
    <link rel="stylesheet" href="/assets/${cssFile}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${jsFile}"></script>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`Generated dist/client/index.html (js: ${jsFile}, css: ${cssFile})`);
