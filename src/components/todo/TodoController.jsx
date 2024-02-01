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

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        headTitle="Working!"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headTitle="Done!"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </main>
  );
}

export default TodoController;
