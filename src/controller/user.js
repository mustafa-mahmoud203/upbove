import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";
import { compare, hash } from "../utils/hashAndCompare.js";

export const userData = asyncHandler(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  return res.status(200).json({ message: "Done", user });
});

export const shareProfile = asyncHandler(async (req, res, next) => {
  const user = await userModel
    .findById(req.params.id)
    .select("firstName lastName email gender age");
  return user
    ? res.status(200).json({ message: "Done", user })
    : next(new Error("account not found", { cause: 400 }));
});

export const updateData = asyncHandler(async (req, res, next) => {
  const data = req.body;
  const user = await userModel.findByIdAndUpdate(req.user.id, data, {
    new: true,
  });

  return res.status(200).json({ message: "Done", user });
});

export const updatePassword = asyncHandler(async (req, res, next) => {
  const { oldPassowrd, newPassowrd } = req.body;
  const chackOldPass = compare({
    password: oldPassowrd,
    hashPassword: req.user.password,
  });
  if (!chackOldPass)
    return next(new Error("in-valid old password", { cause: 400 }));

  const hashPassword = hash(newPassowrd);
  const user = await userModel.findByIdAndUpdate(req.user.id, {
    password: hashPassword,
  });
  return res.status(200).json({ message: "Done", user });
});
export const profilePic = asyncHandler(async (req, res, next) => {
  const cloud = await cloudinary.uploader.upload(req.file.path, {
    folder: `user/${req.user._id}/profile`,
  });
  return res.json({ cloud });
});
