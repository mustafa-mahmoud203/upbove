import { Router } from "express";
import auth from "../middleware/auth.js";
import * as userController from "../controller/user.js";
const router = Router();

router.get("/", auth, userController.userData);
router.get(
  "/:id/profile",
  // validation(validators.shareProfile),
  userController.shareProfile
);

export default router;
