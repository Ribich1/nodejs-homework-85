import User from "../models/User.js";

import { ctrlWrapper } from "../decorators/index.js";

import { HttpError } from "../helpers/index.js";

const signup = async (req, res) => {};

export default {
  signup: ctrlWrapper(signup),
};
