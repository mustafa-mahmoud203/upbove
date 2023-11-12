import jwt from "jsonwebtoken";
import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { compare, hash } from "../utils/hashAndCompare.js";

import { signToken } from "../utils/token.js";

export const signUp = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password, age, gender } = req.body;

  const cheackUser = await userModel.findOne({ email });
  if (cheackUser) return next(new Error("email exist", { cause: 400 }));

  const hashPassword = hash(password);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
    age,
    gender,
  });
  return res.status(201).json({ message: "Done", user });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) return next(new Error("user not found", { cause: 404 }));

  cheackPassword = compare(password, user.password);

  if (user && cheackPassword) {
    const token = signToken({ paylod: { id: user._id, email: user.email } });
    return res.status(200).json({ message: "Done", token });
  }
  return next(new Error("In-valed login data", { cause: 404 }));
});
