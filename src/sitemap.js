import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { join } from "path";

const links = [
  { url: "/", changefreq: "daily", priority: 0.7 },
  { url: "/about", changefreq: "weekly", priority: 0.5 },
  // Add more URLs as needed
];

const sitemap = new SitemapStream({
  hostname: "https://ibrahim-ahmed.netlify.app",
});
const writeStream = createWriteStream(join(__dirname, "public", "sitemap.xml"));

streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log("Sitemap created!");
});

links.forEach((link) => sitemap.write(link));
sitemap.end();
