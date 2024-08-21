import express from "express";
import { userRoutes } from "./userRoutes";

const router = express.Router();

router.use("/api/v1/", userRoutes);

export const mainRoute = router;