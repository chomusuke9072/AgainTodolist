import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const todoObj = {
  id: 1,
  title: "Learn React",
  content: "Learn React today",
  isDone: false,
  deadline: "2024-02-07",
};

function TodoController() {
  const [todos, setTodos] = useState([todoObj]);
  const [sortOrder, setSortOrder] = useState("asc");

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

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;

    setSortOrder(nextSortOrder);

    if (nextSortOrder === "asc") {
      setTodos((prevTodos) =>
        [...prevTodos].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        )
      );
      return;
    }
    setTodos((prevTodos) =>
      [...prevTodos].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <div>
        <select onChange={onChangeSortOrder} value={sortOrder}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
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
