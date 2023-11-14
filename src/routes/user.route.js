import { Router } from "express";
import auth from "../middleware/auth.js";
import * as userController from "../controller/user.js";

import { validation } from "../middleware/validation.js";
import * as validators from "../validation/user.validation.js";
import { fileUpload, filesValidation } from "../utils/multer.js";

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

router.patch(
  "/profilePic",
  fileUpload(filesValidation.image).single("image"),
  // validation(validators.userPassword),
  // auth,
  userController.profilePic
);

export default router;
