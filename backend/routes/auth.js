import { Router } from "express";
import { confirmAccount } from "../controllers/auth.js";
const router = Router();
router.post("auth/login", login);
router.get("/confirm/:confirmationToken", confirmAccount);
export default router;
