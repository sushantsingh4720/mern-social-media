import { Router } from "express";
import { confirmAccount } from "../controllers/auth.js";
const router = Router();
router.get("/confirm/:confirmationToken", confirmAccount);
export default router;
