// TodoForm.js
import React from "react";
import { Input, Button, Flex } from "@chakra-ui/react";

const TodoForm = ({ newTask, setNewTask, addTask }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <Flex mb={4}>
      <Input
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleKeyPress}
        mr={2}
      />
      <Button colorScheme="teal" onClick={addTask}>
        Add Task
      </Button>
    </Flex>
  );
};

export default TodoForm;
