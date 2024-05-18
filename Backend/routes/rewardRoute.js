import express from "express";
import { transaction } from "../controllers/rewardRouter.js";

const router = express.Router()

router.post("/:id/reward/new", transaction)

export default router