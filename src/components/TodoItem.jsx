const TodoItem = ({ todo, onDeleteTodoItem, onToggleTodoItem }) => {
  const { id, title, body, isDone } = todo;
  return (
    <div className="work">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="button">
        <button onClick={() => onDeleteTodoItem(id)}>삭제</button>
        <button onClick={() => onToggleTodoItem(id)}>
          {isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
