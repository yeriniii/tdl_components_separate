import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoController = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트",
      body: "리액트 공부하기",
      isDone: false,
    },
  ]);

  const formSubmitHandler = (nextTodo) => {
    setTodos((prevTodos) => [...prevTodos, nextTodo]);
  };
  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const onToggleTodoItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div className="container">
      <h2>My Todo List</h2>
      <TodoForm formSubmitHandler={formSubmitHandler} />
      <TodoList
        headtitle="Working!"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headtitle="Done!"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
    </div>
  );
};
export default TodoController;
