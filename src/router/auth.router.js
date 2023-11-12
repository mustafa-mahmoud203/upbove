import { Router } from "express";
import * as authController from "../controller/auth.js";
const router = Router();

router.post("/", authController.signUp);

export default router;
