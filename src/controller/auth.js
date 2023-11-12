import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { hahs } from "../utils/hashAndCompare.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const data = req.body;

  const cheackUser = await userModel.findOne({ email: data.email });
  if (cheackUser) return next(new Error("email exist", { cause: 400 }));

  const hahsPassword = hahs(data.password);
  data.password = hahsPassword;

  const user = await userModel.create(data);
  return res.status(201).json({ message: "Done", user });
});
