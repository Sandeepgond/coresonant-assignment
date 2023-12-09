// TodoApp.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import FilterCheckbox from "./FilterCheckbox";
import { Container, Heading } from "@chakra-ui/react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filterCompleted, setFilterCompleted] = useState(false);

  useEffect(() => {
    // Fetch initial todos from the API
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, title: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTaskStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTask = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = filterCompleted
    ? todos.filter((todo) => todo.completed)
    : todos;

  return (
    <Container w="m" mt={5}>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Todo App
      </Heading>
      <TodoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <FilterCheckbox
        filterCompleted={filterCompleted}
        setFilterCompleted={setFilterCompleted}
      />
      <TodoList
        todos={filteredTodos}
        toggleTaskStatus={toggleTaskStatus}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </Container>
  );
};

export default TodoApp;
