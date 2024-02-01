import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const todoObj = {
  id: 1,
  title: "Learn React",
  content: "Learn React today",
  isDone: false,
};

function TodoController() {
  const [todos, setTodos] = useState([todoObj]);

  const onSubmitTodo = (todo) => {
    setTodos((prevTodos) => [todo, ...prevTodos]);
  };

  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const onToggleTodoItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((TodoItem) => {
        if (TodoItem.id === id) {
          return {
            ...TodoItem,
            isDone: !TodoItem.isDone,
          };
        }
        return TodoItem;
      })
    );
  };

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        todos={todos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </main>
  );
}

export default TodoController;
