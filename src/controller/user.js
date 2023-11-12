import userModel from "../../database/models/user.model.js";
import { asyncHandler } from "../utils/errorHandling.js";

export const userData = asyncHandler(async (req, res, next) => {
  const user = await userModel.findById(req.user.id);
  return res.status(200).json({ message: "Done", user });
});
