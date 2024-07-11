const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const links = [{ url: "/", changefreq: "daily", priority: 0.7 }];

const sitemap = new SitemapStream({
  hostname: "https://ibrahim-ahmed.netlify.app",
});
const writeStream = createWriteStream(
  path.join(__dirname, "public", "sitemap.xml")
);

const generateSitemap = async () => {
  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  try {
    await streamToPromise(sitemap.pipe(writeStream));
    console.log("Sitemap created!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
};

generateSitemap();
