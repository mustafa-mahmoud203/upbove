import { Router } from "express";

import * as authController from "../controller/auth.js";
import { validation } from "../middleware/validation.js";
import * as validators from "../validation/auth.validators.js";
const router = Router();

router.post("/signUp", validation(validators.signUp), authController.signUp);
router.post("/login", authController.login);


export default router;
