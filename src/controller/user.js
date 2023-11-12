import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";

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
