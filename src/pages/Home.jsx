import TodoController from "../components/todo/TodoController";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <TodoController />
    </>
  );
}
