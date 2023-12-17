import jimp from "jimp";
import { HttpError } from "../helpers/index.js";

async function mainJimpResize(req, res, next) {
  if (!req.file) {
    return next(HttpError(404, "File not found"));
  }

  const { path: tempPathAvatar } = req.file;

  const image = await jimp.read(tempPathAvatar);
  await image.resize(250, 250);
  await image.writeAsync(tempPathAvatar);
  next();
}

export default mainJimpResize;
