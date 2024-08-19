import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  updateAvatar,
  updatePassword,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

router.post("signup/", registerUser);
router.post("login/", loginUser);
router.put("update-password/", updatePassword);
router.put("avatar/", updateAvatar);
router.put("user/", updateUser);
router.get("user/", getUser);

export const userRoutes = router;
