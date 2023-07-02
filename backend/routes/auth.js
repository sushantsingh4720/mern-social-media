import { Router } from "express";
import { confirmAccount, login, register } from "../controllers/auth.js";
const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/confirm/:confirmationToken", confirmAccount);
export default router;
