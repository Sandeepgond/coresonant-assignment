// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";
import { VStack } from "@chakra-ui/react";

const TodoList = ({ todos, toggleTaskStatus, editTask, deleteTask }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTaskStatus={toggleTaskStatus}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </VStack>
  );
};

export default TodoList;
