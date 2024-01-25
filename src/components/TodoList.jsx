import TodoItem from "./Todo";

const TodoList = ({ headtitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <div>
      <h2>{headtitle}</h2>
      <div className="workingTodo">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodoItem={onDeleteTodoItem}
              onToggleTodoItem={onToggleTodoItem}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
