import userModel from "../../database/models/user.model.js";
import { verifyToken } from "../utils/token.js";
import { asyncHandler } from "../utils/errorHandling.js";

const auth = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization.startWith(process.env.BERAR_KEY))
    return next(new Error("in-valid berar key", { cause: 400 }));

  const token = authorization.split(" ")[1];
  const tokenData = verifyToken(token);

  if (!tokenData.id)
    return next(new Error("in-valid token payload", { cause: 400 }));

  const user = await userModel
    .findById(tokenData.id)
    .select(" id firstName lastName email password ");

  if (!user) return next(new Error("not register account", { cause: 400 }));

  req.user = user;
  return next();
});

export default auth;
