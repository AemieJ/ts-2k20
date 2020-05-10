import express, { Router } from "express";
const router = Router();
import { createTodo, getTodo, updateTodo, deleteTodo } from "../controllers/todo";

router.post("/", createTodo);
router.get("/", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;