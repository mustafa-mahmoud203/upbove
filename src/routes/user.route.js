import { Router } from "express";
import auth from "../middleware/auth.js";
import * as userController from "../controller/user.js";

import { validation } from "../middleware/validation.js";
import * as validators from "../validation/user.validation.js";

const router = Router();

router.get("/", auth, userController.userData);
router.get(
  "/:id/profile",
  validation(validators.shareProfile),
  userController.shareProfile
);

router.put(
  "/",
  validation(validators.userData),
  auth,
  userController.updateData
);
router.patch(
  "/",
  validation(validators.userPassword),
  auth,
  userController.updatePassword
);

export default router;
