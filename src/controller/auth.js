import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { hahs } from "../utils/hashAndCompare.js";
import { signUpVald } from "../validation/auth.validators.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, age, gender } = req.body;

  const cheackUser = await userModel.findOne({ email });
  if (cheackUser) return next(new Error("email exist", { cause: 400 }));

  const hahsPassword = hahs(password);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hahsPassword,
    age,
    gender,
  });
  return res.status(201).json({ message: "Done", user });
});
