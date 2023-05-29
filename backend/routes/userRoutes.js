import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUser).put(protect, updateUser);

export default router;
