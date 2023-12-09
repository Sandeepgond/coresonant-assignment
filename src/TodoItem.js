// TodoItem.js
import React from "react";
import { Flex, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TodoItem = ({ todo, toggleTaskStatus, editTask, deleteTask }) => {
  return (
    <Flex align="center" justify="space-between">
      <Checkbox
        isChecked={todo.completed}
        onChange={() => toggleTaskStatus(todo.id)}
      />
      <Text
        textDecoration={todo.completed ? "line-through" : "none"}
        flex="1"
        ml={2}
        onClick={() => toggleTaskStatus(todo.id)}
        _hover={{ cursor: "pointer" }}
        mr={2}
      >
        {todo.title}
      </Text>
      <IconButton
        icon={<EditIcon />}
        onClick={() => editTask(todo.id, prompt("Edit task:", todo.title))}
        colorScheme="blue"
        mr={3}
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => deleteTask(todo.id)}
        colorScheme="red"
      />
    </Flex>
  );
};

export default TodoItem;
