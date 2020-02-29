const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

if (process.argv.length !== 3) {
  process.exitCode = 1;
  console.warn("node scripts/sharp.js YOUR-PHOTOS-DIR");
  return;
}

const photosDir = path.resolve(process.argv[2].replace(/\/$/, ""));
const articleDir = path.resolve("content/assets", path.basename(photosDir));

if (!fs.existsSync(articleDir)) {
  fs.mkdirSync(articleDir);
}

fs.readdirSync(photosDir, {
  withFileTypes: true
})
  .forEach(dirent => {
    if (dirent.isFile() && /\.(jpg|png)$/i.test(dirent.name)) {
      const srcFilePath = path.join(photosDir, dirent.name);
      const destFilePath = path.resolve(articleDir, dirent.name.split(".").slice(0, -1).concat("jpg").join("."));
      sharp(srcFilePath)
        .resize(1380)
        .toFile(destFilePath, (error, info) => {
          console.error("File:", srcFilePath);
          if (error) {
            console.error(error);
          } else {
            console.log(info);
          }
        });
    }
  });

