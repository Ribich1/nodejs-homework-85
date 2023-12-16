import fs from "fs/promises";
import path from "path";

import jimp from "jimp";

async function mainJimpResize(req, res, next) {
  const { path: tempPathAvatar } = req.file;

  const image = await jimp.read(tempPathAvatar);
  await image.resize(250, 250);
  await image.writeAsync(tempPathAvatar);
  next();
}

export default mainJimpResize;
