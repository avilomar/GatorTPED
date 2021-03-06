import express from "express";
const router = express.Router();

import { signin, signup, updateProfile } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/update", updateProfile);

export default router;