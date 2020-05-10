import express, { RequestHandler } from "express";
import { Todo } from "../models/todo";

const Todos: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    Todos.push(newTodo);
    res.status(200).json({ message: "Created Todo.", createdTodo: newTodo});
}

export const getTodo: RequestHandler = (req, res, next) => {
    res.json({ todo: Todos });
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const updateText = (req.body as {text: string}).text;

    const findTodo = Todos.findIndex(todo => todo.id === todoId);
    if (findTodo < 0) throw new Error("Couldn't find todo.");
    Todos[findTodo] = new Todo(Todos[findTodo].id, updateText);

    res.json({ message: "Updated Todo.", updatedTodo: Todos[findTodo] });
}

export const deleteTodo: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;

    const findTodo = Todos.findIndex(todo => todo.id === todoId);
    if (findTodo < 0) throw new Error("Couldn't find todo.");
    Todos.splice(findTodo, 1);

    res.json({ message: "Deleted Todo." });
}