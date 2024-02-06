import Header from "./components/layout/Header";
import GlobalStyle from "./components/style/GlobalStyle";
import TodoController from "./components/todo/TodoController";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TodoController />
    </>
  );
}

export default App;
