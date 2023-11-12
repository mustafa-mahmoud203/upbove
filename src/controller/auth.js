import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { hahs } from "../utils/hashAndCompare.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { gender, age, password, email, lastName, firstName } = req.body;

  const cheackUser = await userModel.findOne({ email });
  if (cheackUser) return next(new Error("email exist", { cause: 400 }));

  const hahsPassword = hahs(password);
  console.log(hahsPassword);
});
