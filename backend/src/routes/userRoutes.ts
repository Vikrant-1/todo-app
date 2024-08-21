import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  updateAvatar,
  updatePassword,
  updateUser,
} from "../controllers/userController";
import { userAuthMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/signup/", registerUser);
router.post("/login/", loginUser);
router.put("/update-password/", userAuthMiddleware, updatePassword);
router.put("/avatar/", userAuthMiddleware, updateAvatar);
router.put("/user/", userAuthMiddleware, updateUser);
router.get("/user/",userAuthMiddleware,  getUser);

export const userRoutes = router;
