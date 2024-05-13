import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <Box display="flex">
          <Input
            placeholder="Add a new task"
            value={inputValue}
            onChange={handleInputChange}
            size="md"
          />
          <Button onClick={handleAddTask} ml={2} colorScheme="blue">Add</Button>
        </Box>
        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaCheckCircle} color="green.500" />
              {task}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;