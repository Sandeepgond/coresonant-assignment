// FilterCheckbox.js
import React from "react";
import { Checkbox } from "@chakra-ui/react";

const FilterCheckbox = ({ filterCompleted, setFilterCompleted }) => {
  return (
    <Checkbox
      isChecked={filterCompleted}
      onChange={() => setFilterCompleted(!filterCompleted)}
      colorScheme="teal"
      mb={4}
    >
      Show Completed
    </Checkbox>
  );
};

export default FilterCheckbox;
