function TodoItem({ todo, onDeleteTodoItem, onToggleTodoItem }) {
  const { id, title, content, isDone, deadline } = todo;

  const formattedDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <li className="todo-card-item">
      <article>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{formattedDeadline}</time>
        <div>
          <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
          <button onClick={() => onToggleTodoItem(id)}>
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </li>
  );
}

export default TodoItem;
