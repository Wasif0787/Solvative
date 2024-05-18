import express from 'express';
import { getAllUsers, createUser, viewUser, updateuser } from '../controllers/userController.js';

const router = express.Router()

router.post("/new", createUser);
router.get("/:id", viewUser);
router.post("/:id", updateuser);
router.get("/", getAllUsers);

export default router
