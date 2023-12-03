import { HttpError } from "../helpers/index.js";

const isEmptyBody = async (req, res, next) => {
  const keys = Object.keys(req.body);

  if (!keys.length) {
    req.method === "PATCH"
      ? next(HttpError(400, "missing field favorite"))
      : next(HttpError(400, "missing fields"));
    return;
  }
  next();
};
export default isEmptyBody;
