import express from "express";
import todos from "../data/todo.js";
import { getTodos } from "../controllers/todoController.js";

const router = express.Router();

router.get("/list", getTodos);

export default router;
