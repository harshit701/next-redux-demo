"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { addTodo, removeTodo, editTodo } from "@/store/todo-slice";
import { useRef, useState } from "react";

const Todo = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const todoInput = useRef(null);
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodo] = useState("");

  const handleSubmitTodo = (event) => {
    event.preventDefault();

    if (todoId && isEdit) {
      const todo = todos.find((item) => item.id === todoId);

      const newTodo = {
        id: todo.id,
        title: todoInput.current.value,
      };

      dispatch(editTodo(newTodo));

      setIsEdit(false);
    } else {
      if (todoInput.current.value) {
        const newTodo = {
          id: Math.random().toString(),
          title: todoInput.current.value,
        };

        dispatch(addTodo(newTodo));
      }
    }

    todoInput.current.value = "";
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const setEditFn = (todo) => {
    setIsEdit(true);
    todoInput.current.value = todo.title;
    setTodo(todo.id);
  };

  return (
    <>
      <h1>Todo Page</h1>
      <form onSubmit={handleSubmitTodo}>
        <input ref={todoInput} type="text" placeholder="Enter todo" />
        <button>{isEdit ? "Edit" : "Add"} Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <button onClick={() => setEditFn(todo)}>Edit</button>
            <button className="red" onClick={() => handleRemoveTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
