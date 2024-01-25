import { useState } from "react";

const TodoForm = ({ formSubmitHandler }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler({
      id: crypto.randomUUID(),
      title: title,
      body: body,
      isDone: false,
    });

    setTitle("");
    setBody("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <strong>제목 :</strong>
        <input
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <strong> 내용:</strong>
        <input
          value={body}
          placeholder="할 일을 입력해주세요"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button className="addBtn">추가하기</button>
      </form>
    </div>
  );
};
export default TodoForm;
