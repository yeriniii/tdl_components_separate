import { useState } from "react";
import "./App.css";

function App() {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="container">
      <h2>My Todo List</h2>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTodos = {
              id: todos.length + 1,
              title: title,
              body: body,
              isDone: false,
            };
            setTodos([...todos, newTodos]);
            setTitle("");
            setBody("");
          }}
        >
          <strong>제목:</strong>
          <input
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={function (e) {
              setTitle(e.target.value);
            }}
            required
          />
          <strong>내용:</strong>
          <input
            value={body}
            placeholder="할 일을 입력해주세요"
            onChange={function (e) {
              setBody(e.target.value);
            }}
            required
          />
          <button className="addBtn">추가하기</button>
        </form>
      </div>

      <div>
        <h2>Working..</h2>
        <div className="workingTodo">
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <div key={todo.id} className="work">
                  <h3>{todo.title}</h3>
                  <p>{todo.body}</p>

                  <div className="button">
                    <button
                      onClick={() => {
                        const updateTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(updateTodos);
                      }}
                    >
                      완료
                    </button>
                    <button
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div>
        <h2>Done..!</h2>
        <div className="workingTodo">
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <div key={todo.id} className="work">
                  <h3>{todo.title}</h3>
                  <p>{todo.body}</p>

                  <div className="button">
                    <button
                      onClick={() => {
                        const updateTodos = todos.map((item) => {
                          if (item.id === todo.id) {
                            return {
                              ...item,
                              isDone: !item.isDone,
                            };
                          } else {
                            return item;
                          }
                        });
                        setTodos(updateTodos);
                      }}
                    >
                      취소
                    </button>
                    <button
                      onClick={() => {
                        const deletedTodos = todos.filter((item) => {
                          return item.id !== todo.id;
                        });
                        setTodos(deletedTodos);
                      }}
                    >
                      삭제하기
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
